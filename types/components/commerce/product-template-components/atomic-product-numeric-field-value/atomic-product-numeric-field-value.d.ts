import { Bindings } from '../../../../components';
import { NumberFormatter } from '../../../common/formats/format-common';
/**
 * @internal
 * The `atomic-product-numeric-field-value` component renders the value of a number product field.
 *
 * The number can be formatted by adding a `atomic-format-number`, `atomic-format-currency` or `atomic-format-unit` component into this component.
 */
export declare class AtomicProductNumber {
    bindings: Bindings;
    private product;
    host: HTMLElement;
    error: Error;
    /**
     * The field that the component should use.
     * The component will try to find this field in the `Product.additionalFields` object unless it finds it in the `Product` object first.
     */
    field: string;
    formatter: NumberFormatter;
    valueToDisplay: string | null;
    setFormat(event: CustomEvent<NumberFormatter>): void;
    private parseValue;
    private formatValue;
    private updateValueToDisplay;
    componentWillRender(): void;
    render(): string | undefined;
}
