import { ResultList, ResultsPerPage } from '@coveo/headless';
import { FocusTargetController } from '../../../../utils/accessibility-utils';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { ItemRenderingFunction } from '../../../common/item-list/item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout, ItemTarget } from '../../../common/layout/display-options';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-list` component is responsible for displaying query results by applying one or more result templates.
 *
 * @part result-list - The element containing every result of a result list
 * @part outline - The element displaying an outline or a divider around a result
 * @part result-list-grid-clickable-container - The parent of the result & the clickable link encompassing it, when results are displayed as a grid
 * @part result-list-grid-clickable - The clickable link encompassing the result when results are displayed as a grid
 * @part result-table - The element of the result table containing a heading and a body
 * @part result-table-heading - The element containing the row of cells in the result table's heading
 * @part result-table-heading-row - The element containing cells of the result table's heading
 * @part result-table-heading-cell - The element representing a cell of the result table's heading
 * @part result-table-body - The element containing the rows of the result table's body
 * @part result-table-row - The element containing the cells of a row in the result table's body
 * @part result-table-row-odd - The element containing the cells of an odd row in the result table's body
 * @part result-table-row-even - The element containing the cells of an even row in the result table's body
 * @part result-table-cell - The element representing a cell of the result table's body
 */
export declare class AtomicResultList implements InitializableComponent {
    bindings: Bindings;
    resultList: ResultList;
    resultsPerPage: ResultsPerPage;
    private loadingFlag;
    private itemRenderingFunction;
    private nextNewResultTarget?;
    private itemTemplateProvider;
    private resultListCommon;
    host: HTMLDivElement;
    private resultListState;
    private resultsPerPageState;
    private resultTemplateRegistered;
    error: Error;
    private templateHasError;
    /**
     * The desired layout to use when displaying results. Layouts affect how many results to display per row and how visually distinct they are from each other.
     */
    display: ItemDisplayLayout;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The target location to open the result link (see [target](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)).
     * This property is only leveraged when `display` is `grid`.
     * @defaultValue `_self`
     */
    gridCellLinkTarget: ItemTarget;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    get focusTarget(): FocusTargetController;
    initialize(): void;
    render(): any;
    private getPropsForAtomicResult;
    private computeListDisplayClasses;
    private renderAsGrid;
    private renderAsTable;
    private renderAsList;
}
