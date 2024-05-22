import { AnyBindings } from '../../interface/bindings';
import { DateFilter, DateFilterState } from '../../types';
/**
 * Internal component made to be integrated in a TimeframeFacet.
 * @internal
 */
export declare class FacetDateInput {
    private start?;
    private end?;
    private startRef;
    private endRef;
    bindings: AnyBindings;
    filter: DateFilter;
    filterState: DateFilterState;
    label: string;
    min?: string;
    max?: string;
    private applyInput;
    connectedCallback(): void;
    private apply;
    private formattedDateValue;
    render(): any;
}
