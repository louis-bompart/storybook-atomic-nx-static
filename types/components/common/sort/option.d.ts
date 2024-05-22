import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface SortOptionProps {
    value: string;
    selected: boolean;
    i18n: i18n;
    label: string;
}
export declare const SortOption: FunctionalComponent<SortOptionProps>;
export {};
