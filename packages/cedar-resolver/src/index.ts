import { kebabCase } from "@cedar-design/shared";
import componentNames from "./component-names.json";

// Public _XxxComponent aliases only. Keep this shipped registry independent of
// the UI runtime; the resolver tests check it against the UI's root exports.
const cedarComponents = new Set<string>(componentNames);

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
  "imagePreview",
  "Message",
  "Notification",
  "StyleProvider",
  "previewImage",
];
const cedarDirectives: Record<string, string> = {
  CLoading: "vLoading",
  Tooltip: "vTooltip",
};

/** Component name → style directory under `@cedar-design/ui` (when not kebabCase(name)). */
const styleDirAliases: Record<string, string> = {
  NavMenuItem: "nav-menu",
  AnchorLink: "anchor",
  ButtonGroup: "button",
  CollapseItem: "collapse",
  Row: "row",
  Col: "col",
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
  TabPane: "tabs",
  TabItem: "tabs",
  TabsNavs: "tabs",
  TabsItems: "tabs",
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
  imagePreview: "image",
  previewImage: "image",
  ImagePreviewGroup: "image",
  InputGroup: "input",
  InputGroupLabel: "input",
  InputPassword: "input",
  LayoutContent: "layout",
  LayoutFooter: "layout",
  LayoutHeader: "layout",
  LayoutSider: "layout",
  MenuOption: "menu",
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
  "Context",
  "StyleProvider",
]);

function getStyleSideEffects(name: string, importStyle = true) {
  if (!importStyle || noStyleComponents.has(name)) {
    return undefined;
  }
  const dir = styleDirAliases[name] ?? kebabCase(name);
  return [`@cedar-design/ui/${dir}/style`];
}

export function resolveCedarComponent(
  name: string,
  options: CedarResolverOptions = {},
  programmatic = false,
) {
  if (programmatic ? !cedarFunctions.includes(name) : !cedarComponents.has(name)) {
    return undefined;
  }
  return {
    from: "@cedar-design/ui",
    name: programmatic ? name : `_${name}Component`,
    sideEffects: getStyleSideEffects(name, options.importStyle),
  };
}

function resolveCedarIcon(name: string, importStyle = true) {
  const iconName = name.slice("CIcon".length);
  return {
    from: `@cedar-design/icons-vue/icon-${kebabCase(iconName)}`,
    name: `Icon${iconName}`,
    sideEffects: importStyle ? ['@cedar-design/icons-vue/style.css'] : undefined,
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
          return resolveCedarIcon(name, options.importStyle);
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
          from: "@cedar-design/ui",
          name: cedarDirectives[name],
          sideEffects: getStyleSideEffects(styleName, options.importStyle),
        };
      },
    },
  ];
}


/**
 * Add styles for explicit named imports after Vue/TypeScript compilation.
 * Component/auto-import resolvers alone only handle imports they generate.
 */
export function CedarStyleImports(options: Pick<CedarResolverOptions, 'importStyle'> = {}) {
  return {
    name: 'cedar:explicit-import-styles',
    enforce: 'post' as const,
    transform(this: { parse: (code: string) => unknown }, code: string, id: string) {
      if (options.importStyle === false ||
        !/\.(?:[cm]?[jt]sx?|vue|md)(?:\?|$)/.test(id) ||
        /[?&](?:type=style|raw(?:&|$)|url(?:&|$))/.test(id) ||
        !code.includes('@cedar-design/ui')) return
      const ast = this.parse(code) as {
        body: Array<{ type: string; source?: { value: string }; specifiers?: Array<{
          type: string; imported?: { name?: string; value?: string }
        }> }>
      }
      const existing = new Set(ast.body.filter(node => node.type === 'ImportDeclaration').map(node => node.source?.value))
      const styles = new Set<string>()
      for (const node of ast.body) {
        if (node.type !== 'ImportDeclaration' || node.source?.value !== '@cedar-design/ui') continue
        for (const specifier of node.specifiers ?? []) {
          if (specifier.type !== 'ImportSpecifier') continue
          const imported = specifier.imported?.name ?? specifier.imported?.value ?? ''
          const name = imported.replace(/^_(.+)Component$/, '$1')
          if (!cedarComponents.has(name) && !cedarFunctions.includes(name)) continue
          for (const style of getStyleSideEffects(name, true) ?? []) {
            if (!existing.has(style)) styles.add(style)
          }
        }
      }
      if (!styles.size) return
      return { code: code + '\n' + [...styles].map(style => 'import ' + JSON.stringify(style) + ';').join('\n'), map: null }
    },
  }
}
