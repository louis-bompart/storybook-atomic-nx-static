/**
 * Returns a function that can be executed only once
 */
export declare function once<T extends unknown[]>(fn: (...args: T) => unknown): (this: unknown, ...args: T) => unknown;
export declare function camelToKebab(value: string): string;
export declare function kebabToCamel(value: string): string;
export declare function snakeToCamel(value: string): string;
export declare function titleToKebab(value: string): string;
export declare function randomID(prepend?: string, length?: number): string;
export declare function getRandomArbitrary(min: number, max: number): number;
export declare function parseXML(string: string): Document;
export declare function parseHTML(string: string): Document;
export declare function isElementNode(node: Node): node is Element;
export declare function isTextNode(node: Node): node is Text;
export declare function isVisualNode(node: Node): boolean;
export declare function containsVisualElement(node: Node): boolean;
export declare function parseAssetURL(url: string, assetPath?: string): string | null;
export declare function elementHasAncestorTag(el: HTMLElement, tagName: string): boolean;
export declare function closest<K extends keyof HTMLElementTagNameMap>(element: Element | null, selector: K): HTMLElementTagNameMap[K] | null;
export declare function closest<K extends keyof SVGElementTagNameMap>(element: Element | null, selector: K): SVGElementTagNameMap[K] | null;
export declare function closest<E extends Element = Element>(element: Element | null, selector: string): E | null;
export declare const sortByDocumentPosition: (a: Node, b: Node) => 1 | -1;
export declare function sanitizeStyle(style: string): string | undefined;
export declare function getFocusedElement(rootElement?: Document | ShadowRoot): Element | null;
export declare function defer(): Promise<void>;
export declare function isInDocument(element: Node): boolean;
export declare function isPropValuesEqual<ObjectWithProperties extends object>(subject: ObjectWithProperties, target: ObjectWithProperties, propNames: (keyof ObjectWithProperties)[]): boolean;
export declare function getParent(element: Element | ShadowRoot): Element | ShadowRoot | null;
export declare function isAncestorOf(ancestor: Element | ShadowRoot, element: Element | ShadowRoot): boolean;
export declare function aggregate<V, K extends PropertyKey>(values: readonly V[], getKey: (value: V, index: number) => K): Record<K, V[] | undefined>;
