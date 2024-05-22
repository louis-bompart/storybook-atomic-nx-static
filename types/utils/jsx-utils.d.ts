import { FunctionalComponent, VNode } from '../stencil-public-runtime';
import { AnyBindings } from '../components/common/interface/bindings';
export interface LocalizedStringProps {
    bindings: AnyBindings;
    key: string;
    params: Record<string, VNode | string>;
    count?: number;
}
export declare const LocalizedString: FunctionalComponent<LocalizedStringProps>;
