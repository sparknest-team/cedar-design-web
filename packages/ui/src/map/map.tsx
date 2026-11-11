import { createMapUpdateGuard } from './update-guard'
import { mapEmits } from './emits'
type PoiInfo = Record<string, any>;
type SearchResult<T> = { list: T[] };
import type { MapSdk, MapSdkLngLat, MapSdkMap, MapSdkSearchService } from './sdk';
declare const LngLat: MapSdk['LngLat'];
declare const Map: MapSdk['Map'];
declare const MapService: MapSdk['MapService'];
declare const SearchService: MapSdk['SearchService'];
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  reactive,
  ref,
  shallowRef,
  toRaw,
  useAttrs,
  useSlots,
  watch,
} from "vue";
import { IconEdit, IconSearch } from "@cedar-design/icons-vue";
import Input from "../input";
import { useI18n } from "../locale";
import Popconfirm from "../popconfirm";
import Loading from "../loading/Loading.vue";
import Textarea from "../textarea";
import { useSuggest } from "../utils/suggest";
import { isolateEditorForm } from "../_components/field-presentation/form-bridge";
import { provideFormErrorDescriptionBoundary } from "../form/error-description";
import {
  dataToScope,
  realTransformAlias,
  setValueWithAlias,
} from "../utils/useSetValueWithAlias";
import { mapProps, type PoiKeys } from "./props";
import { getMapInitData, resolveMapType } from "./utils";
import { useFetch } from "../_utils/use-fetch";
import { createNamespace } from "../_utils/global-config";

const { name } = createNamespace("map");

export default defineComponent({
  name,

  props: mapProps,

  emits: mapEmits,

  setup(props, { emit }) {
    isolateEditorForm();
    provideFormErrorDescriptionBoundary();
    // Retain legacy globals for existing integrations; an explicit adapter takes precedence.
    const legacySdk: MapSdk | undefined = typeof MapService !== "undefined" && typeof SearchService !== "undefined" && typeof LngLat !== "undefined"
      ? { Map, MapService, SearchService, LngLat } : undefined;
    const sdk = computed(() => props.sdk ? toRaw(props.sdk) : legacySdk);
    const sdkAvailable = computed(() => {
      const value = sdk.value;
      return Boolean(value && typeof value.Map === "function" && typeof value.LngLat === "function" &&
        typeof value.SearchService === "function" && typeof value.MapService?.init === "function");
    });
    const requireSdk = (): MapSdk => {
      if (!sdkAvailable.value || !sdk.value) throw new Error("Map SDK is unavailable");
      return sdk.value;
    };
    const { t } = useI18n();
    const attrs = useAttrs();
    const slots = useSlots();
    const valueKeyAlias = reactive(((): {
      [key in PoiKeys]: string;
    } => {
      const defaultValueMap = {
        longitude: "longitude",
        latitude: "latitude",
        address: "address",
        name: "name",
        adcode: "adcode",
        countryCode: "countryCode",
        city: "city",
        country: "country",
      };
      return { ...defaultValueMap, ...props.valueKeyAlias };
    })());
    const valueKeyScope = reactive([...props.valueKeyScope]);
    const show = ref(false);
    const isInited = ref<boolean>(false);
    const searchVal = ref("");

    const searchRes = ref<SearchResult<PoiInfo>>({ list: [] });
    const value_ = ref<any>({});
    const valueModel_ = ref<any>({});
    const isInit = ref<boolean>(true);
    const isMapInit = ref<boolean>(false);
    const sdkFailed = ref(false);
    const sdkInitializing = ref(false);
    let sdkVersion = 0;
    const isUpdating = ref(false);
    const isLoading = ref(false);
    const map = shallowRef<MapSdkMap>();
    let service: MapSdkSearchService | undefined;
    const requireService = (): MapSdkSearchService => {
      if (!service) throw new Error("Map search service is unavailable");
      return service;
    };
    const id = ref();
    let proposalVersion = 0;
    let geocodeVersion = 0;
    let searchVersion = 0;
    let alive = true;
    let locationActive = true;
    let mounted = false;
    let configVersion = 0;
    let locationVersion = 0;
    const isLocating = ref(false);
    onDeactivated(() => {
      locationActive = false;
      locationVersion++;
      proposalVersion++;
      searchVersion++;
      isLocating.value = false;
      invalidateGeocode(false);
      updateGuard.cancel();
      pendingSelection = undefined;
      if (sdkInitializing.value && !isMapInit.value) {
        sdkFailed.value = false;
        try { releaseSdk(); } catch (error) { if (alive) emit("error", error); }
        finally { initTask = undefined; sdkInitializing.value = false; }
      }
    });
    onActivated(() => {
      locationActive = true;
      if (sdkAvailable.value && !isMapInit.value && !sdkFailed.value && !initTask) void initMap();
    });
    let stopSdkModelWatch: (() => void) | undefined;
    let detachSdkListener: (() => void) | undefined;
    const invalidateGeocode = (notify = true) => {
      const wasLoading = isLoading.value;
      geocodeVersion++;
      isLoading.value = false;
      if (wasLoading && alive && notify) emit("loaded:address");
    };
    const updateGuard = createMapUpdateGuard((active) => {
      if (active) invalidateGeocode();
      isUpdating.value = active;
    });
    let pendingSelection: number | undefined;
    const cancelPendingSelection = () => {
      if (pendingSelection !== undefined) updateGuard.finish(pendingSelection);
      pendingSelection = undefined;
    };
    const hasCoordinate = (value: unknown) => value !== null && value !== undefined && value !== "" && Number.isFinite(Number(value));
    function releaseSdk() {
      sdkVersion++;
      stopSdkModelWatch?.();
      stopSdkModelWatch = undefined;
      const owner = map.value;
      const previousService = service;
      map.value = undefined;
      service = undefined;
      isMapInit.value = false;
      searchRes.value = { list: [] };
      show.value = false;
      try {
        detachSdkListener?.();
      } finally {
        detachSdkListener = undefined;
        try { previousService?.destroy?.(); } finally { owner?.destroy?.(); }
      }
    }
    onBeforeUnmount(() => {
      alive = false;
      mounted = false;
      configVersion++;
      locationVersion++;
      proposalVersion++;
      searchVersion++;
      invalidateGeocode();
      updateGuard.dispose();
      releaseSdk();
    });

    function init() {
      value_.value = {};
      value_.value = dataToScope({
        origin: props.modelValue,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      });
      valueModel_.value = {};
      valueModel_.value = dataToScope({
        origin: props.modelValue,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      });
      if (props.isInternational) {
        value_.value[valueKeyAlias.latitude] =
          value_.value[valueKeyAlias.latitude] ??
          props.defaultValue?.[valueKeyAlias.latitude] ??
          -33.8688;
        value_.value[valueKeyAlias.longitude] =
          value_.value[valueKeyAlias.longitude] ??
          props.defaultValue?.[valueKeyAlias.longitude] ??
          151.2195;
      } else {
        value_.value[valueKeyAlias.latitude] =
          value_.value[valueKeyAlias.latitude] ??
          props.defaultValue?.[valueKeyAlias.latitude] ??
          39.984104;
        value_.value[valueKeyAlias.longitude] =
          value_.value[valueKeyAlias.longitude] ??
          props.defaultValue?.[valueKeyAlias.longitude] ??
          116.307503;
      }
    }
    function syncCenter() {
      if (!sdkAvailable.value || !map.value) return;
      const token = updateGuard.begin();
      map.value.setCenter(new (requireSdk().LngLat)(value_.value[valueKeyAlias.longitude], value_.value[valueKeyAlias.latitude]));
      updateGuard.releaseAfter(token, 300);
    }
    const { fetch: inheritedFetch } = useFetch();
    watch(() => [props.enableGisSearch, props.isInternational, props.basePath, props.fetch] as const, () => {
      searchVersion++;
      cancelPendingSelection();
      searchRes.value.list = [];
    }, { flush: "sync" });
    init();
    watch(() => props.valueKeyAlias, (alias) => {
      searchVersion++;
      cancelPendingSelection();
      Object.assign(valueKeyAlias, { longitude: "longitude", latitude: "latitude", address: "address", name: "name", adcode: "adcode", countryCode: "countryCode", city: "city", country: "country" }, alias);
      init();
      syncCenter();
    }, { deep: true, flush: "sync" });
    watch(() => props.valueKeyScope, (scope) => {
      searchVersion++;
      cancelPendingSelection();
      valueKeyScope.splice(0, valueKeyScope.length, ...scope);
      init();
      syncCenter();
    }, { deep: true, flush: "sync" });
    watch(() => props.modelValue, () => {
      searchVersion++;
      cancelPendingSelection();
      invalidateGeocode();
      if (!sdkAvailable.value || !isMapInit.value) init();
    }, { deep: true, flush: "sync" });

    function updateModelValue() {
      const data = dataToScope({
        origin: value_.value,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      });
      emit("update:modelValue", { ...props.modelValue, ...data });
      emit("change", { ...data }, { ...value_.value });
      const version = ++proposalVersion;
      void nextTick(() => {
        if (!alive || version !== proposalVersion) return;
        const accepted = valueKeyScope.every((key) => props.modelValue?.[valueKeyAlias[key]] === data[valueKeyAlias[key]]);
        if (accepted) return;
        init();
        syncCenter();
      });
    }

    let initTask: Promise<void> | undefined;
    function publishSearchResult(results: SearchResult<PoiInfo>, status: unknown, current: () => boolean) {
      const next = status === "success"
        ? { ...results, list: results.list.map((item) => ({ label: item.address, value: item.name || item.address, ...item })) }
        : { list: [] };
      if (!current()) return;
      searchRes.value = next;
      isInited.value = true;
      show.value = true;
    }
    const performInitMap = async (token: number) => {
      if (!sdkAvailable.value) {
        isInited.value = true;
        return;
      }
      const currentSdk = requireSdk();
      const initializer = toRaw(currentSdk.MapService);
      const scopedSearch = props.sdk != null;
      const mapType = resolveMapType(props.mapType, props.isInternational);
      const { key, geoUrl } = getMapInitData(mapType, props.basePath);
      if (props.modelValue?.[valueKeyAlias.address]) {
        value_.value[valueKeyAlias.address] =
          props.modelValue[valueKeyAlias.address];
      }
      await initializer.init(mapType, key);
      if (!alive || token !== sdkVersion) return;
      map.value = new currentSdk.Map({
        zoom: 15,
        center: new (requireSdk().LngLat)(
          value_.value?.[valueKeyAlias.longitude],
          value_.value?.[valueKeyAlias.latitude],
        ),
        container: id.value,
        panControl: false,
        zoomEnable: true,
        zoomControlPosition: "RB",
      });
      service = new currentSdk.SearchService({
        driver: props.driver as any, // TODO: 类型
        fetch: props.fetch,
        geocoderUrl: props.geocoderUrl || geoUrl,
        geocoderHandler: props.geocoderHandler,
        map: map.value,
        complete: (results: SearchResult<PoiInfo>, status: any) => {
          if (scopedSearch || !alive || token !== sdkVersion) return;
          publishSearchResult(results, status, () => alive && token === sdkVersion);
        },
      });

      stopSdkModelWatch?.();
      stopSdkModelWatch = watch(
        () => props.modelValue,
        (v) => {
          let isChanged = false;
          let isLocationChanged = false;
          // 因为 modelValue 是对象，watch的时候，新旧值是一样的。所以我们需要自己备份。
          if (
            v?.[valueKeyAlias.longitude] !==
              valueModel_.value?.[valueKeyAlias.longitude] ||
            v?.[valueKeyAlias.latitude] !==
              valueModel_.value?.[valueKeyAlias.latitude]
          ) {
            isLocationChanged = true;
          }
          // 只判断scope内值的变化
          valueKeyScope.forEach((key) => {
            if (
              v?.[valueKeyAlias[key]] !==
              valueModel_.value?.[valueKeyAlias[key]]
            ) {
              valueModel_.value[valueKeyAlias[key]] = v?.[valueKeyAlias[key]];
              isChanged = true;
            }
          });
          if (!isChanged) {
            return;
          }
          init();
          if (!isMapInit.value) {
            initMap();
            return;
          }
          if (isUpdating.value) {
            return;
          }
          if (isLocationChanged) {
            if (isMapInit.value) {
              const token = updateGuard.begin();
              map.value?.setCenter(
                new (requireSdk().LngLat)(
                  value_.value[valueKeyAlias.longitude],
                  value_.value[valueKeyAlias.latitude],
                ),
              );
              updateGuard.releaseAfter(token, 300);
            }
          }
        },
        { deep: true },
      );
      const listenerOwner = map.value;
      const listenerVersion = token;
      const onMoveEnd = async () => {
          if (!alive || !locationActive || map.value !== listenerOwner || listenerVersion !== sdkVersion) return;
          const token = ++geocodeVersion;
          const owner = map.value;
          if (!alive || !locationActive || isUpdating.value || !owner) {
            isLoading.value = false;
            return;
          }
          const center = owner.getCenter();
          const [lng, lat] = [center.getLng(), center.getLat()];
          if (value_.value?.[valueKeyAlias.longitude] === lng && value_.value?.[valueKeyAlias.latitude] === lat) {
            isLoading.value = false;
            return;
          }
          isLoading.value = true;
          try {
            emit("loading:address");
            if (!alive || token !== geocodeVersion || map.value !== owner || isUpdating.value) return;
            const data = await geocodeLatLng(new (requireSdk().LngLat)(lng, lat));
            if (!alive || token !== geocodeVersion || map.value !== owner || isUpdating.value) return;
            value_.value = data;
            updateModelValue();
          } catch (error) {
            if (alive && token === geocodeVersion && map.value === owner && !isUpdating.value) emit("error", error);
          } finally {
            if (alive && token === geocodeVersion) {
              isLoading.value = false;
              emit("loaded:address");
            }
          }
      };
      listenerOwner.on("moveend", onMoveEnd, null);
      detachSdkListener = () => listenerOwner.off?.("moveend", onMoveEnd, null);
      if (
        map.value &&
        (!hasCoordinate(value_.value?.[valueKeyAlias.latitude]) ||
          !hasCoordinate(value_.value?.[valueKeyAlias.longitude]))
      ) {
        const center = map.value?.getCenter();
        const token = geocodeVersion;
        const data = await geocodeLatLng(
          new (requireSdk().LngLat)(center.getLng(), center.getLat()),
        );
        if (!alive) return;
        if (token === geocodeVersion && (
          !hasCoordinate(value_.value?.[valueKeyAlias.latitude]) ||
          !hasCoordinate(value_.value?.[valueKeyAlias.longitude])
        )) {
          value_.value = data;
          updateModelValue();
        }
      }
      // updateModelValue()
      // emit('init')
      // 返回的对象数据是完整的data，会自动补全其他值。
      async function fixInitData(latlng: MapSdkLngLat) {
        const token = geocodeVersion;
        const res = await requireService().geocoder(latlng.getLng(), latlng.getLat());
        if (!alive || token !== geocodeVersion) return value_;
        const data = realTransformAlias(res, valueKeyAlias);
        Object.keys(data).forEach((key) => {
          if (
            typeof data[key] !== "undefined" &&
            typeof value_.value[key] === "undefined"
          ) {
            value_.value[key] = data[key];
          }
        });
        // 经纬度必须用原始的，不能用gis返回的，否则有点地区会有偏差。
        // value_.value[valueKeyAlias.longitude] = latlng.getLng()
        // value_.value[valueKeyAlias.latitude] = latlng.getLat()
        return value_;
      }

      let newData = value_.value;
      if (
        hasCoordinate(value_.value?.[valueKeyAlias.latitude]) &&
        hasCoordinate(value_.value?.[valueKeyAlias.longitude])
      ) {
        newData = await fixInitData(
          new (requireSdk().LngLat)(
            value_.value?.[valueKeyAlias.longitude],
            value_.value?.[valueKeyAlias.latitude],
          ),
        );
      }
      if (!alive || token !== sdkVersion) return;
      isMapInit.value = true;
      const currentCenter = map.value?.getCenter();
      if (currentCenter && hasCoordinate(value_.value?.[valueKeyAlias.longitude]) && hasCoordinate(value_.value?.[valueKeyAlias.latitude]) &&
          (currentCenter.getLng() !== value_.value[valueKeyAlias.longitude] || currentCenter.getLat() !== value_.value[valueKeyAlias.latitude])) {
        syncCenter();
      }
      emit("init", toRaw(value_.value), toRaw(newData.value));
    };

    const initMap = () => {
      if (initTask) return initTask;
      const token = ++sdkVersion;
      sdkInitializing.value = true;
      const task = performInitMap(token).then(() => {
        if (alive && token === sdkVersion) sdkFailed.value = false;
      }, (error: unknown) => {
        if (alive && token === sdkVersion) {
          try { releaseSdk(); } catch (cleanupError) { emit("error", cleanupError); }
          sdkFailed.value = true;
          isInited.value = true;
          emit("error", error);
        }
      }).finally(() => {
        if (initTask === task) {
          initTask = undefined;
          sdkInitializing.value = false;
        }
      });
      initTask = task;
      return task;
    };

    watch(
      () => [props.sdk, props.mapType, props.isInternational, props.basePath, props.driver, props.fetch, props.geocoderUrl, props.geocoderHandler] as const,
      () => {
        if (!mounted || !alive) return;
        const version = ++configVersion;
        proposalVersion++;
        searchVersion++;
        locationVersion++;
        isLocating.value = false;
        invalidateGeocode();
        if (!alive || version !== configVersion) return;
        updateGuard.cancel();
        pendingSelection = undefined;
        try { releaseSdk(); } catch (error) { if (alive) emit("error", error); }
        if (!alive || version !== configVersion) return;
        initTask = undefined;
        sdkInitializing.value = false;
        sdkFailed.value = false;
        isInited.value = !sdkAvailable.value;
        init();
        void nextTick(() => {
          if (alive && mounted && locationActive && sdkAvailable.value && version === configVersion) void initMap();
        });
      },
      { flush: "sync" },
    );

    async function geocodeLatLng(latlng: MapSdkLngLat) {
      const res = await requireService().geocoder(latlng.getLng(), latlng.getLat());
      if (!alive) return undefined;
      const data = realTransformAlias(res, valueKeyAlias);
      if (data) {
        data[valueKeyAlias.longitude] = latlng.getLng();
        data[valueKeyAlias.latitude] = latlng.getLat();
      }
      return data;
    }

    const searchByLatLng = async (lat: string, lng: string, token: number) => {
      const latlng = new (requireSdk().LngLat)(Number(lng), Number(lat));
      const res = await requireService().geocoder(latlng.getLng(), latlng.getLat());
      if (!alive || token !== searchVersion) return;
      value_.value = realTransformAlias(res, valueKeyAlias);
      // 经纬度必须用原始的，不能用gis返回的，否则有点地区会有偏差。
      if (value_.value) {
        value_.value[valueKeyAlias.longitude] = latlng.getLng();
        value_.value[valueKeyAlias.latitude] = latlng.getLat();
      }
      const p: PoiInfo = { ...res };
      searchRes.value.list = [p];
      updateModelValue();
    };

    const handleSearch = async (value: string) => {
      cancelPendingSelection();
      const token = ++searchVersion;
      if (!value) {
        searchRes.value.list = [];
        return;
      }
      // value中只包含数字、小数点和逗号，并且至少包含数字和逗号，并且逗号后面至少有一个数字
      const isLngLat = /^([0-9]*[.,]?[0-9]*,[0-9]+[.,]?[0-9]*)+$/.test(value);
      // 满足经纬度的基本条件，并且格式要合法
      const regex = /(-?\d+(\.\d*)?),\s*(-?\d+(\.\d*)?)/g;
      const match = regex.exec(value);
      // match[1] 是经度，match[3] 是纬度
      const lng = match?.[1];
      const lat = match?.[3];
      try {
        if (isLngLat && lat && lng) {
          await searchByLatLng(lat, lng, token);
        } else {
          if (!props.isInternational && props.enableGisSearch) {
            //国内环境并且开启了使用gis推荐搜索
            const params: { keywords: string; city?: string; location?: string } =
              {
                keywords: searchVal.value,
              };
            if (
              hasCoordinate(value_.value?.[valueKeyAlias.latitude]) &&
              hasCoordinate(value_.value?.[valueKeyAlias.longitude])
            ) {
              // 如果长度过长，要裁减
              params.location =
                value_.value?.[valueKeyAlias.longitude]?.toFixed?.(6) +
                "," +
                value_.value?.[valueKeyAlias.latitude]?.toFixed?.(6);
            }
            const results = await useSuggest(props.fetch ?? inheritedFetch, props.basePath).suggestSearch(params);
            if (!alive || token !== searchVersion) return;
            searchRes.value.list = results;
          } else {
            // 海外环境
            const owner = requireService();
            const generation = sdkVersion;
            if (props.sdk != null) {
              let consumed = false;
              await owner.search(value, (results, status) => {
                if (consumed || !alive || !locationActive || token !== searchVersion || generation !== sdkVersion || owner !== service) return;
                consumed = true;
                publishSearchResult(results, status, () => alive && locationActive && token === searchVersion && generation === sdkVersion && owner === service);
              });
            } else {
              // Legacy SDKs use their constructor callback and have no request identity.
              await (owner.search as (query: string) => void | Promise<void>)(value);
            }
          }
        }
      } catch (error) {
        if (alive && locationActive && token === searchVersion) {
          searchRes.value.list = [];
          emit("error", error);
        }
      }
    };

    async function getAddr(item: PoiInfo) {
      const searchToken = ++searchVersion;
      const token = updateGuard.begin();
      pendingSelection = token;
      const current = () => alive && locationActive && searchToken === searchVersion && updateGuard.current(token);
      let keepSuppression = false;
      try {
        show.value = false;
        if (item?.updatePlaceDetail) {
          await item.updatePlaceDetail();
          if (!current()) return;
        }
        const candidate = ref(realTransformAlias(item, valueKeyAlias));
        const res = await requireService().geocoder(
          candidate.value?.[valueKeyAlias.longitude],
          candidate.value?.[valueKeyAlias.latitude],
        );
        if (!current()) return;
        setValueWithAlias({
          target: candidate,
          origin: realTransformAlias(res, valueKeyAlias),
          scope: valueKeyScope,
          exclude: ["address", "name", "longitude", "latitude"],
          alias: valueKeyAlias,
        });
        value_.value = candidate.value;
        pendingSelection = undefined;
        updateModelValue();
        if (!updateGuard.current(token)) return;
        map.value?.setCenter(
          new (requireSdk().LngLat)(
            value_.value?.[valueKeyAlias.longitude],
            value_.value?.[valueKeyAlias.latitude],
          ),
        );
        // Keep the moveend suppression until the current programmatic move settles.
        updateGuard.releaseAfter(token, 500);
        keepSuppression = true;
      } catch (error) {
        if (current()) emit("error", error);
      } finally {
        if (pendingSelection === token) pendingSelection = undefined;
        if (!keepSuppression) updateGuard.finish(token);
      }
    }

    const getCurrentLocation = () => {
      return new Promise<GeolocationCoordinates>((resolve, reject) => {
        if (typeof navigator === "undefined" || !navigator.geolocation) {
          reject(new Error("Geolocation is unavailable"));
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (position) => position?.coords ? resolve(position.coords) : reject(new Error("Geolocation returned no coordinates")),
          reject,
        );
      });
    };

    const locateMe = async () => {
      if (!sdkAvailable.value || sdkFailed.value || !isMapInit.value || !alive || !locationActive || isLocating.value) return;
      const token = ++locationVersion;
      const currentLocation = () => alive && locationActive && token === locationVersion;
      isLocating.value = true;
      try {
        const coords = await getCurrentLocation();
        if (!currentLocation()) return;
        const lngLat = new (requireSdk().LngLat)(coords.longitude, coords.latitude);
        void geocodeLatLng(lngLat).catch((error) => { if (currentLocation()) emit("error", error); });
        map.value?.setCenter(lngLat);
      } catch (error) {
        if (currentLocation()) emit("error", error);
      } finally {
        if (currentLocation()) isLocating.value = false;
      }
    };

    const newAddress = ref("");

    onMounted(async () => {
      mounted = true;
      await initMap();
    });

    return () => (
      <>
        {props.showMapTips ? (
          <div class="map-tips">{t("map.dragAndSelectTips")}</div>
        ) : (
          ""
        )}
        <div class="map-wrapper">
          <div class="map-search">
            <Input
              disabled={!sdkAvailable.value || sdkFailed.value || !isMapInit.value}
              class="map-search-input"
              modelValue={searchVal.value}
              onUpdate:modelValue={(next: string | null) => {
                const v = next ?? '';
                searchVal.value = v;
                handleSearch(v);
              }}
              onFocus={() => (show.value = true)}
              placeholder={t("map.searchPlaceholder")}
              v-slots={{
                prefix: () => h(IconSearch),
              }}
            ></Input>
            {searchRes.value.list.length ? (
              <div
                class="map-search-box"
                style={{ display: show.value ? "block" : "none" }}
              >
                {searchRes.value.list.map((item) => (
                  <div
                    class="map-search-box-item"
                    role="button"
                    tabindex={0}
                    onClick={() => getAddr(item)}
                    onKeydown={(event: KeyboardEvent) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        getAddr(item);
                      }
                    }}
                  >
                    <div class="map-search-box-item-name">{item.name}</div>
                    <div class="map-search-box-item-address">
                      {item.address}
                    </div>
                  </div>
                ))}
              </div>
            ) : sdkFailed.value ? (
              <div class="map-search-box-empty" role="status">
                {t("map.initError") === "map.initError" ? "Map initialization failed" : t("map.initError")}
                <button type="button" data-map-retry disabled={sdkInitializing.value} onClick={() => void initMap()}>
                  {t("map.retry") === "map.retry" ? "Retry" : t("map.retry")}
                </button>
              </div>
            ) : isInited.value ? (
              <div class="map-search-box-empty" role="status">{sdkAvailable.value ? t("map.noData") : "Map SDK unavailable / 地图服务未配置"}</div>
            ) : (
              ""
            )}
          </div>
          <svg viewBox="0 0 24 24" class="position-dot" aria-hidden="true">
            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          {props.showLocateMeButton ? (
            <div
              class="locate-me-btn"
              role="button"
              tabindex={!sdkAvailable.value || sdkFailed.value || !isMapInit.value ? -1 : 0}
              aria-disabled={!sdkAvailable.value || sdkFailed.value || !isMapInit.value || undefined}
              aria-label="定位到当前位置"
              onClick={() => locateMe()}
              onKeydown={(event: KeyboardEvent) => {
                if (!event.defaultPrevented && !event.isComposing && event.keyCode !== 229 && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  locateMe();
                }
              }}
            >
              {isLocating.value ? (
                <Loading />
              ) : (
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              )}
            </div>
          ) : null}
          <div class="poi">
            {isLoading.value ? (
              <Loading />
            ) : (
              <>
                {props.showName ? (
                  <div class="poi-name">
                    {value_.value[valueKeyAlias.name] || "-"}
                  </div>
                ) : null}
                <div class="poi-address">
                  <span>{value_.value[valueKeyAlias.address] || "-"}</span>
                  {props.showEditAddressButton ? (
                    <Popconfirm
                      v-slots={{
                        content: () => (
                          <Textarea
                            class="new-address-input"
                            modelValue={newAddress.value}
                            onUpdate:modelValue={(next: string | null) => {
                const v = next ?? '';
                              newAddress.value = v;
                            }}
                            auto-size
                          ></Textarea>
                        ),
                        icon: () => <div style="display: none"></div>,
                      }}
                      onConfirm={() => {
                        value_.value[valueKeyAlias.address] = newAddress.value;
                        updateModelValue();
                      }}
                      onOpen-change={() =>
                        (newAddress.value = value_.value[valueKeyAlias.address])
                      }
                      onUpdate:open={() =>
                        (newAddress.value = value_.value[valueKeyAlias.address])
                      }
                    >
                      <IconEdit class="edit-address-btn" />
                    </Popconfirm>
                  ) : null}
                </div>
              </>
            )}
          </div>
          <div ref={id} {...attrs} v-slots={slots}></div>
        </div>
      </>
    );
  },
});
