import { ComponentInterface } from '../stencil-public-runtime';
interface MapPropOptions {
    attributePrefix?: string;
    splitValues?: boolean;
}
export declare function MapProp(opts?: MapPropOptions): (component: ComponentInterface, variableName: string) => void;
export declare function ArrayProp(): (component: ComponentInterface, variableName: string) => void;
export declare function mapAttributesToProp(prefix: string, mapVariable: Record<string, string | string[]>, attributes: {
    name: string;
    value: string;
}[], splitValues: boolean): void;
export {};
