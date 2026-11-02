// TODO: 脱敏迁移 - 暂时注释 @maple-design/map-core，后续替换为公有包
// import { LngLat, Map, MapService, PoiInfo, SearchResult, SearchService } from '@maple-design/map-core'
type PoiInfo = Record<string, any>;
type SearchResult<T> = { list: T[] };
type MapCoreLngLat = { getLng: () => number; getLat: () => number };
type MapCoreMap = {
  setCenter: (lngLat: MapCoreLngLat) => void;
  getCenter: () => MapCoreLngLat;
  on: (
    event: string,
    handler: (...args: any[]) => void,
    ...rest: any[]
  ) => void;
};
declare const LngLat: new (...args: any[]) => MapCoreLngLat;
declare const Map: new (options: Record<string, any>) => MapCoreMap;
declare const MapService: { init: (...args: any[]) => Promise<void> };
declare const PoiInfo: new () => PoiInfo;
declare const SearchService: new (...args: any[]) => any;
import {
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onMounted,
  ref,
  toRaw,
  useAttrs,
  useSlots,
  watch,
} from "vue";
import { IconEdit, IconSearch } from "@cedar-design/icons-vue";
import Input from "../input";
import { useI18n } from "../locale";
import Popconfirm from "../popconfirm";
import Loading from "../loading";
import Textarea from "../textarea";
import { useSuggest } from "../utils/suggest";
import {
  dataToScope,
  realTransformAlias,
  setValueWithAlias,
} from "../utils/useSetValueWithAlias";
import { mapProps, type PoiKeys } from "./props";
import { getMapInitData } from "./utils";
import { useFetch } from "../_utils/use-fetch";
import { createNamespace } from "../_utils/global-config";

const { name } = createNamespace("map");

export default defineComponent({
  name,

  props: mapProps,

  emits: [
    "change",
    "init",
    "loading:address",
    "loaded:address",
    "update:modelValue",
  ],

  setup(props, { emit }) {
    const sdkAvailable = typeof MapService !== "undefined" && typeof SearchService !== "undefined" && typeof LngLat !== "undefined";
    const { t } = useI18n();
    const attrs = useAttrs();
    const slots = useSlots();
    const instance = getCurrentInstance();
    const isUsingVModel = computed(() => {
      // 判断是否传入了 `modelValue` prop 并且有 `update:modelValue` 事件监听器
      return Boolean(
        instance?.vnode.props && instance.vnode.props["onUpdate:modelValue"],
      );
    });
    const valueKeyAlias = ((): {
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
    })();
    const valueKeyScope = (() => {
      return [...props.valueKeyScope];
    })();
    const show = ref(false);
    const isInited = ref<boolean>(false);
    const searchVal = ref("");

    const searchRes = ref<SearchResult<PoiInfo>>({ list: [] });
    const value_ = ref<any>({});
    const value = ref<any>(props.modelValue);
    const valueModel_ = ref<any>({});
    const isInit = ref<boolean>(true);
    const isMapInit = ref<boolean>(false);
    const isUpdating = ref(false);
    const isLoading = ref(false);
    const map = ref<MapCoreMap>();
    let service: InstanceType<typeof SearchService>;
    const id = ref();

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
    const { fetch } = useFetch(props.fetch);

    let suggestSearch: (params: {
      keywords: string;
      location?: string;
    }) => Promise<PoiInfo[]> = async () => [];
    if (props.enableGisSearch) {
      suggestSearch = useSuggest(fetch, props.basePath).suggestSearch;
    }
    init();

    function updateModelValue() {
      const data = dataToScope({
        origin: value_.value,
        scope: valueKeyScope,
        alias: valueKeyAlias,
      });
      if (isUsingVModel.value) {
        // 使用了VModel,但是为undefined的情况，不能通过对象引用去改值，需要触发emit
        if (typeof props.modelValue === "undefined") {
          emit("update:modelValue", data);
        }
        // 这里不能用emit update:modelValue，因为会覆盖类型，通过setValueWithAlias内部直接改props，实现相同的效果
        setValueWithAlias({
          target: value,
          origin: value_.value,
          scope: valueKeyScope,
          alias: valueKeyAlias,
        });
      }
      emit("change", data, toRaw(value_.value));
    }

    const initMap = async () => {
      if (
        typeof MapService === "undefined" ||
        typeof SearchService === "undefined" ||
        typeof LngLat === "undefined"
      ) {
        isInited.value = true;
        return;
      }
      const { key, geoUrl } = getMapInitData(props.mapType, props.basePath);
      if (props.modelValue?.[valueKeyAlias.address]) {
        value_.value[valueKeyAlias.address] =
          props.modelValue[valueKeyAlias.address];
      }
      if (props.isInternational) {
        await MapService.init("google", key);
      } else {
        if (props.mapType === "amaps") {
          await MapService.init("amaps", key);
        } else {
          await MapService.init("qqmaps", key);
        }
      }
      map.value = new Map({
        zoom: 15,
        center: new LngLat(
          value_.value?.[valueKeyAlias.longitude],
          value_.value?.[valueKeyAlias.latitude],
        ),
        container: id.value,
        panControl: false,
        zoomEnable: true,
        zoomControlPosition: "RB",
      });
      service = new SearchService({
        driver: props.driver as any, // TODO: 类型
        fetch: props.fetch,
        geocoderUrl: props.geocoderUrl || geoUrl,
        geocoderHandler: props.geocoderHandler,
        map: map.value,
        complete: (results: SearchResult<PoiInfo>, status: any) => {
          results.list = results.list.map((item) => ({
            label: item.address,
            value: item.name || item.address,
            ...item,
          }));
          if (status === "success") {
            searchRes.value.list = [];
            searchRes.value = results;
          } else {
            searchRes.value.list = [];
          }
          isInited.value = true;
          show.value = true;
        },
      });

      watch(
        () => props.modelValue,
        (v) => {
          let isChanged = false;
          let isLocationChanged = false;
          // 因为 modelValue 是对象，watch的时候，新旧值是一样的。所以我们需要自己备份。
          if (
            v?.[valueKeyAlias.longitude] !==
              valueModel_.value?.[valueKeyAlias.longitude] &&
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
              isUpdating.value = true;
              map.value?.setCenter(
                new LngLat(
                  value_.value[valueKeyAlias.longitude],
                  value_.value[valueKeyAlias.latitude],
                ),
              );
              setTimeout(() => {
                isUpdating.value = false;
              }, 300);
            }
          }
        },
        { deep: true },
      );
      map.value.on(
        "moveend",
        async () => {
          isLoading.value = true;
          // 选择地点/展示弹窗 的时候不触发逆地理解析
          if (!isUpdating.value) {
            if (map.value) {
              const center = map.value?.getCenter();
              const [lng, lat] = [center.getLng(), center.getLat()];
              if (
                value_.value?.[valueKeyAlias.longitude] !== lng ||
                value_.value?.[valueKeyAlias.latitude] !== lat
              ) {
                emit("loading:address");
                value_.value = await geocodeLatLng(
                  new LngLat(center.getLng(), center.getLat()),
                );
                updateModelValue();
                emit("loaded:address");
              }
            }
          }
          isLoading.value = false;
        },
        null,
      );
      if (
        map.value &&
        (!value_.value?.[valueKeyAlias.latitude] ||
          !value_.value?.[valueKeyAlias.longitude])
      ) {
        const center = map.value?.getCenter();
        const data = await geocodeLatLng(
          new LngLat(center.getLng(), center.getLat()),
        );
        if (
          !value_.value?.[valueKeyAlias.latitude] ||
          !value_.value?.[valueKeyAlias.longitude]
        ) {
          value_.value = data;
          updateModelValue();
        }
      }
      // updateModelValue()
      // emit('init')
      // 返回的对象数据是完整的data，会自动补全其他值。
      async function fixInitData(latlng: InstanceType<typeof LngLat>) {
        const res = await service.geocoder(latlng.getLng(), latlng.getLat());
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
        value_.value?.[valueKeyAlias.latitude] &&
        value_.value?.[valueKeyAlias.longitude]
      ) {
        newData = await fixInitData(
          new LngLat(
            value_.value?.[valueKeyAlias.longitude],
            value_.value?.[valueKeyAlias.latitude],
          ),
        );
      }
      isMapInit.value = true;
      emit("init", toRaw(value_.value), toRaw(newData.value));
    };

    async function geocodeLatLng(latlng: InstanceType<typeof LngLat>) {
      const res = await service.geocoder(latlng.getLng(), latlng.getLat());
      const data = realTransformAlias(res, valueKeyAlias);
      if (data) {
        data[valueKeyAlias.longitude] = latlng.getLng();
        data[valueKeyAlias.latitude] = latlng.getLat();
      }
      return data;
    }

    const searchByLatLng = async (lat: string, lng: string) => {
      const latlng = new LngLat(Number(lng), Number(lat));
      const res = await service.geocoder(latlng.getLng(), latlng.getLat());
      value_.value = realTransformAlias(res, valueKeyAlias);
      // 经纬度必须用原始的，不能用gis返回的，否则有点地区会有偏差。
      if (value_.value) {
        value_.value[valueKeyAlias.longitude] = latlng.getLng();
        value_.value[valueKeyAlias.latitude] = latlng.getLat();
      }
      const p = new PoiInfo();
      Object.keys(res).forEach((key) => {
        p[key] = res[key];
      });
      searchRes.value.list = [p];
      updateModelValue();
    };

    const handleSearch = async (value: string) => {
      if (!value) {
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
      if (isLngLat && lat && lng) {
        await searchByLatLng(lat, lng);
      } else {
        if (!props.isInternational && props.enableGisSearch) {
          //国内环境并且开启了使用gis推荐搜索
          const params: { keywords: string; city?: string; location?: string } =
            {
              keywords: searchVal.value,
            };
          if (
            value_.value?.[valueKeyAlias.latitude] &&
            value_.value?.[valueKeyAlias.longitude]
          ) {
            // 如果长度过长，要裁减
            params.location =
              value_.value?.[valueKeyAlias.longitude]?.toFixed?.(6) +
              "," +
              value_.value?.[valueKeyAlias.latitude]?.toFixed?.(6);
          }
          searchRes.value.list = await suggestSearch(params);
        } else {
          // 海外环境
          service.search(searchVal.value);
        }
      }
    };

    async function getAddr(item: PoiInfo) {
      isUpdating.value = true;
      show.value = false;
      if (item?.updatePlaceDetail) {
        await item.updatePlaceDetail();
      }
      value_.value = realTransformAlias(item, valueKeyAlias);
      const res = await service.geocoder(
        value_.value?.[valueKeyAlias.longitude],
        value_.value?.[valueKeyAlias.latitude],
      );
      setValueWithAlias({
        target: value_,
        origin: realTransformAlias(res, valueKeyAlias),
        scope: valueKeyScope,
        exclude: ["address", "name", "longitude", "latitude"],
        alias: valueKeyAlias,
      });
      updateModelValue();
      map.value?.setCenter(
        new LngLat(
          value_.value?.[valueKeyAlias.longitude],
          value_.value?.[valueKeyAlias.latitude],
        ),
      );
      setTimeout(() => {
        // 先触发地图的 moveend，100毫秒左右动画可以结束，并且移动完成，防止触发逆地理解析函数
        isUpdating.value = false;
      }, 500);
    }

    const getCurrentLocation = () => {
      return new Promise<{ latitude: number; readonly longitude: number }>(
        (resolve) => {
          navigator.geolocation?.getCurrentPosition((position) => {
            if (position && position.coords) {
              resolve(position.coords);
            }
          });
        },
      );
    };

    const isLocating = ref(false);
    const locateMe = async () => {
      if (!sdkAvailable) return;
      if (isLocating.value) {
        return;
      }
      isLocating.value = true;
      const coords = await getCurrentLocation();
      if (coords) {
        const center = { lng: coords.longitude, lat: coords.latitude };
        const lngLat = new LngLat(center.lng, center.lat);
        geocodeLatLng(lngLat);
        map.value?.setCenter(lngLat);
      }
      isLocating.value = false;
    };

    const newAddress = ref("");

    onMounted(async () => {
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
              disabled={!sdkAvailable}
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
            ) : isInited.value ? (
              <div class="map-search-box-empty" role="status">{sdkAvailable ? t("map.noData") : "Map SDK unavailable / 地图服务未配置"}</div>
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
              tabindex={0}
              aria-label="定位到当前位置"
              onClick={() => locateMe()}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") {
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
