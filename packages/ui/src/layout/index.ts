import { withInstall } from "../_utils/global-config";
import _Layout from "./Layout.vue";
import _LayoutHeader from "./Header.vue";
import _LayoutContent from "./Content.vue";
import _LayoutFooter from "./Footer.vue";
import _LayoutSider from "./Sider.vue";
import { layoutProps } from "./props";

const Layout: import('../_utils/global-config').ComponentWithInstall<typeof _Layout & { Header: typeof _LayoutHeader; Content: typeof _LayoutContent; Footer: typeof _LayoutFooter; Sider: typeof _LayoutSider }> = withInstall(_Layout,
  Object.assign(_Layout, {
    Header: _LayoutHeader,
    Content: _LayoutContent,
    Footer: _LayoutFooter,
    Sider: _LayoutSider,
  }),
  {
    components: [
      _Layout,
      _LayoutHeader,
      _LayoutContent,
      _LayoutFooter,
      _LayoutSider,
    ],
  },
);

export type LayoutInstance = InstanceType<typeof _Layout>;
export type LayoutHeaderInstance = InstanceType<typeof _LayoutHeader>;
export type LayoutContentInstance = InstanceType<typeof _LayoutContent>;
export type LayoutFooterInstance = InstanceType<typeof _LayoutFooter>;
export type LayoutSiderInstance = InstanceType<typeof _LayoutSider>;

export type {
  LayoutProps,
  SiderProps,
  LayoutContentProps,
  LayoutHeaderProps,
  LayoutFooterProps,
} from "./types";

export {
  _LayoutHeader as LayoutHeader,
  _LayoutContent as LayoutContent,
  _LayoutFooter as LayoutFooter,
  _LayoutSider as LayoutSider,
};

export const _LayoutComponent: typeof Layout = Layout;
export const _LayoutHeaderComponent: typeof _LayoutHeader = _LayoutHeader;
export const _LayoutContentComponent: typeof _LayoutContent = _LayoutContent;
export const _LayoutFooterComponent: typeof _LayoutFooter = _LayoutFooter;
export const _LayoutSiderComponent: typeof _LayoutSider = _LayoutSider;

export { Layout };

export { layoutProps };

export default Layout;
