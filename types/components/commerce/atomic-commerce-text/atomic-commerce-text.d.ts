import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @internal
 * The `atomic-commerce-text` component leverages the I18n translation module through the atomic-commerce-interface.
 */
export declare class AtomicCommerceText implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private strings;
    error: Error;
    /**
     * The string key value.
     */
    value: string;
    /**
     * The count value used for plurals.
     */
    count?: number;
    connectedCallback(): void;
    render(): string;
}
