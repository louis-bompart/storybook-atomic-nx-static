import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../common/layout/display-options';
interface ResultPlaceholderProps {
    density: ItemDisplayDensity;
    imageSize: ItemDisplayImageSize;
    display: ItemDisplayLayout;
    numberOfPlaceholders: number;
}
interface ResultPlaceholderGuardProps extends ResultPlaceholderProps {
    displayPlaceholders: boolean;
}
export declare const ResultsPlaceholdersGuard: FunctionalComponent<ResultPlaceholderGuardProps>;
export declare const ResultsPlaceholder: FunctionalComponent<ResultPlaceholderProps>;
export {};
