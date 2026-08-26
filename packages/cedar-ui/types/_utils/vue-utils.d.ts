import type { Component, Slot, Slots, VNode, VNodeTypes, VNodeArrayChildren, ComponentPublicInstance, RenderFunction } from 'vue';
import { Data, RenderContent } from './types';
export declare enum ShapeFlags {
    ELEMENT = 1,
    FUNCTIONAL_COMPONENT = 2,
    STATEFUL_COMPONENT = 4,
    COMPONENT = 6,
    TEXT_CHILDREN = 8,
    ARRAY_CHILDREN = 16,
    SLOTS_CHILDREN = 32,
    TELEPORT = 64,
    SUSPENSE = 128,
    COMPONENT_SHOULD_KEEP_ALIVE = 256,
    COMPONENT_KEPT_ALIVE = 512
}
export declare enum PatchFlags {
    TEXT = 1,
    CLASS = 2,
    STYLE = 4,
    PROPS = 8,
    FULL_PROPS = 16,
    HYDRATE_EVENTS = 32,
    STABLE_FRAGMENT = 64,
    KEYED_FRAGMENT = 128,
    UNKEYED_FRAGMENT = 256,
    NEED_PATCH = 512,
    DYNAMIC_SLOTS = 1024,
    DEV_ROOT_FRAGMENT = 2048,
    HOISTED = -1,
    BAIL = -2
}
export declare const getValueFromSlotsOrProps: (name: string, props?: Data, slots?: Slots) => Slot<any> | (() => any) | undefined;
export declare const isComponentInstance: (value: any) => value is ComponentPublicInstance;
export declare const isElement: (vn: VNode) => boolean;
export declare const isComponent: (vn: VNode, type?: VNodeTypes) => type is Component;
export declare const isText: (vn: VNode, children: VNode["children"]) => children is string;
export declare const isNamedComponent: (child: VNode, name: string) => boolean;
export declare const isTextChildren: (child: VNode, children: VNode["children"]) => children is string;
export declare const isArrayChildren: (vn: VNode, children: VNode["children"]) => children is VNode[];
export declare const isSlotsChildren: (vn: VNode, children: VNode["children"]) => children is Slots;
export declare const getChildrenString: (children: VNode[]) => string;
export declare const getVNodeChildrenString: (vn: VNode) => string;
export declare const getChildrenFunc: (vn: VNode) => RenderFunction | undefined;
export declare const getChildrenTextOrSlot: (vn: VNode) => string | Slot | undefined;
export declare const getFirstComponent: (children: VNode[] | undefined) => VNode | undefined;
/**
 * Used to get the number of specified components in children
 * @param vNodes
 * @param componentName
 */
export declare const getComponentNumber: (vNodes: VNode[], componentName: string) => number;
export declare const foreachComponent: (children: VNode[], name: string, cb: (node: VNode) => void) => void;
export declare const isEmptyChildren: (children?: VNode[]) => boolean;
export declare const getChildrenComponents: (children: VNode[], name: string, props?: Data | ((node: VNode, index: number) => Data), startIndex?: number) => VNode[];
export declare const mergeFirstChild: (children: VNode[] | undefined, extraProps: Data | ((vn: VNode) => Data)) => boolean;
export declare const getChildrenArray: (vn: VNode) => VNode[] | undefined;
export declare const getFirstElementFromVNode: (vn: VNode) => HTMLElement | undefined;
export declare const getFirstElementFromTemplateRef: (target: HTMLElement | ComponentPublicInstance | undefined) => HTMLElement | undefined;
export declare const getFirstElementFromChildren: (children: VNode[] | undefined) => HTMLElement | undefined;
/**
 * Get the value of boolean type prop
 * @param value
 */
export declare const getBooleanProp: (value: string | boolean | undefined) => value is string | true;
export declare const getRenderFunc: (content: RenderContent) => RenderFunction;
export declare const getAllElements: (children: VNode[] | undefined, includeText?: boolean) => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[];
/**
 * Remove Fragment
 * @param nodeList
 */
export declare function unFragment(nodeList: VNode[]): VNodeArrayChildren;
export declare const resolveProps: (vn: VNode) => Data;
export declare const getFirstElement: (vn: VNode | VNode[]) => HTMLElement | null;
export declare const getSlotFunction: (param: RenderContent | undefined) => RenderFunction | undefined;
export declare const getComponentsFromVNode: (vn: VNode, name: string) => number[];
export declare const getComponentsFromChildren: (children: VNode[] | undefined, name: string) => number[];
