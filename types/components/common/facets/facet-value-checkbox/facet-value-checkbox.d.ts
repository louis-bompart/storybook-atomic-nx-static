import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { FacetValueProps } from '../facet-common';
type TriStateFacetValueProps = Omit<FacetValueProps, 'isSelected'> & {
    state: 'idle' | 'selected' | 'excluded';
    onExclude(): void;
};
export declare const FacetValueCheckbox: FunctionalComponent<FacetValueProps | TriStateFacetValueProps>;
export {};
