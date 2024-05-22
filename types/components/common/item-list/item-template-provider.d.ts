import { Result } from '@coveo/headless';
import { AnyBindings } from '../interface/bindings';
import { AnyItem } from '../interface/item';
import { TemplateProvider, TemplateProviderProps } from '../template-provider/template-provider';
export declare class ItemTemplateProvider extends TemplateProvider<Result> {
    constructor(props: TemplateProviderProps<Result> & {
        bindings: AnyBindings;
    });
    getTemplateContent(result: AnyItem): DocumentFragment;
}
