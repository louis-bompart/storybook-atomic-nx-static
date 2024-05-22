import { Template, TemplatesManager } from '@coveo/headless';
export interface TemplateElement<ItemType> extends HTMLElement {
    getTemplate(): Promise<Template<ItemType, DocumentFragment> | null>;
}
export interface TemplateProviderProps<ItemType> {
    getResultTemplateRegistered(): boolean;
    setResultTemplateRegistered(value: boolean): void;
    getTemplateHasError(): boolean;
    setTemplateHasError(value: boolean): void;
    templateElements: TemplateElement<ItemType>[];
    includeDefaultTemplate: boolean;
}
export declare class TemplateProvider<ItemType> {
    private props;
    private buildManager;
    private makeDefaultTemplate;
    private templateManager;
    constructor(props: TemplateProviderProps<ItemType>, buildManager: () => TemplatesManager<ItemType, DocumentFragment>, makeDefaultTemplate?: () => Template<ItemType, DocumentFragment>);
    private registerResultTemplates;
    getTemplateContent(item: ItemType): DocumentFragment;
    get templatesRegistered(): boolean;
    get hasError(): boolean;
}
