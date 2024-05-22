import { ProductTemplate, ProductTemplateCondition } from '@coveo/headless/commerce';
export type TemplateContent = DocumentFragment;
interface ProductTemplateCommonProps {
    allowEmpty?: boolean;
    host: HTMLDivElement;
    validParents: string[];
    setError: (error: Error) => void;
}
type TemplateNodeType = 'section' | 'metadata' | 'table-column-definition' | 'other';
export declare function getTemplateNodeType(node: Node): TemplateNodeType;
export declare class ProductTemplateCommon {
    private host;
    matchConditions: ProductTemplateCondition[];
    constructor({ host, setError, validParents, allowEmpty, }: ProductTemplateCommonProps);
    validateTemplate(host: HTMLDivElement, setError: (error: Error) => void, validParents: string[], allowEmpty?: boolean): void;
    getTemplate(conditions: ProductTemplateCondition[], error: Error): ProductTemplate<TemplateContent> | null;
    renderIfError(error: Error): any;
}
export declare function makeMatchConditions(mustMatch: Record<string, string[]>, mustNotMatch: Record<string, string[]>): ProductTemplateCondition[];
export declare function makeDefinedConditions(ifDefined?: string, ifNotDefined?: string): ProductTemplateCondition[];
export {};
