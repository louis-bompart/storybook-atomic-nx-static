import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface LoadMoreButtonProps {
    i18n: i18n;
    onClick: () => void;
    moreAvailable: boolean;
}
export declare const LoadMoreButton: FunctionalComponent<LoadMoreButtonProps>;
export {};
