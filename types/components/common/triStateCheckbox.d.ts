import { FacetValueState } from '@coveo/headless';
import { FunctionalComponent } from '../../stencil-public-runtime';
import { CheckboxProps } from './checkbox';
export type TriStateCheckboxProps = Omit<CheckboxProps, 'checked'> & {
    state: FacetValueState;
};
export declare const TriStateCheckbox: FunctionalComponent<TriStateCheckboxProps>;
