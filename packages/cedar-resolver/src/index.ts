import { kebabCase } from "@cedarjs/shared";

export interface CedarResolverOptions {
  /** Automatically import component styles. @default true */
  importStyle?: boolean;
  /** Resolve Cedar directives such as `v-c-loading` and `v-tooltip`. @default true */
  directives?: boolean;
  /** Resolve programmatic APIs for unplugin-auto-import. @default true */
  autoImport?: boolean;
}

const cedarFunctions = [
  "Dialog",
  "Drawer",
  "ImagePreviewFn",
  "Message",
  "Notification",
  "StyleProvider",
  "previewImage",
];
const cedarDirectives: Record<string, string> = {
  CLoading: "vLoading",
  Tooltip: "vTooltip",
};

/** Component name → style directory under `@cedarjs/ui` (when not kebabCase(name)). */
const styleDirAliases: Record<string, string> = {
  AnchorLink: "anchor",
  ButtonGroup: "button",
  CollapseItem: "collapse",
  Row: "grid",
  Col: "grid",
  GridItem: "grid",
  AvatarGroup: "avatar",
  BreadcrumbItem: "breadcrumb",
  CarouselItem: "carousel",
  CheckboxGroup: "checkbox",
  RadioGroup: "radio",
  FormItem: "form",
  ListItem: "list",
  TimelineItem: "timeline",
  DescriptionsItem: "descriptions",
  TabNav: "tabs",
  TabItem: "tabs",
  TabsNavs: "tabs",
  TabsItems: "tabs",
  NavMenuItem: "nav-menu",
  NavMenuItemGroup: "nav-menu",
  NavMenuSubMenu: "nav-menu",
  MapSelect: "map",
  HoverOverlay: "hover",
  Date: "date/picker",
  DatePicker: "date/picker",
  DateRange: "date/picker",
  DateRangePicker: "date/picker",
  Time: "time/picker",
  TimePicker: "time/picker",
  TimeRange: "time/picker",
  TimeRangePicker: "time/picker",
  CascaderPanel: "cascader",
  ImagePreview: "image",
  ImagePreviewAction: "image",
  ImagePreviewFn: "image",
  previewImage: "image",
  ImagePreviewGroup: "image",
  InputGroup: "input",
  InputGroupLabel: "input",
  InputPassword: "input",
  LayoutContent: "layout",
  LayoutFooter: "layout",
  LayoutHeader: "layout",
  LayoutSider: "layout",
  MenuGroup: "menu",
  MenuOption: "menu",
  MenuSubmenu: "menu",
  Optgroup: "select",
  Option: "select",
  SkeletonLine: "skeleton",
  SkeletonShape: "skeleton",
  Step: "steps",
  TableColumn: "table",
  Tbody: "table",
  Td: "table",
  Th: "table",
  Thead: "table",
  Tr: "table",
  TypographyParagraph: "typography",
  TypographyText: "typography",
  TypographyTitle: "typography",
};

/** Components without a style directory; resolve without style side effects. */
const noStyleComponents = new Set([
  "Color",
  "Context",
  "SplitButton",
  "StyleProvider",
]);

function getStyleSideEffects(name: string, importStyle = true) {
  if (!importStyle || noStyleComponents.has(name)) {
    return undefined;
  }
  const dir = styleDirAliases[name] ?? kebabCase(name);
  return [`@cedarjs/ui/${dir}/style`];
}

export function resolveCedarComponent(
  name: string,
  options: CedarResolverOptions = {},
  programmatic = false,
) {
  return {
    from: "@cedarjs/ui",
    name: programmatic ? name : `_${name}Component`,
    sideEffects: getStyleSideEffects(name, options.importStyle),
  };
}

function resolveCedarIcon(name: string) {
  const iconName = name.slice("CIcon".length);
  return {
    from: `@cedarjs/icons-vue/icon-${kebabCase(iconName)}`,
    name: `Icon${iconName}`,
  };
}

/**
 * Resolver for Cedar components, SVG icons, directives, and programmatic APIs.
 * Use the same resolver with unplugin-vue-components and unplugin-auto-import.
 */
export function CedarResolver(options: CedarResolverOptions = {}) {
  return [
    {
      type: "component" as const,
      resolve(name: string) {
        if (name.startsWith("CIcon") && name.length > "CIcon".length) {
          return resolveCedarIcon(name);
        }

        if (/^C[A-Z]/.test(name)) {
          return resolveCedarComponent(name.slice(1), options);
        }

        if (options.autoImport !== false && cedarFunctions.includes(name)) {
          return resolveCedarComponent(name, options, true);
        }
      },
    },
    {
      type: "directive" as const,
      resolve(name: string) {
        if (options.directives === false || !cedarDirectives[name]) return;

        const styleName = name === "CLoading" ? "Loading" : name;
        return {
          from: "@cedarjs/ui",
          name: cedarDirectives[name],
          sideEffects: getStyleSideEffects(styleName, options.importStyle),
        };
      },
    },
  ];
}
