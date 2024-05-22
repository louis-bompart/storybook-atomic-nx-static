import { ResultsPerPageState, ResultsPerPage, FoldedResultList, FoldedResultListState, FoldedCollection } from '@coveo/headless';
import { FocusTargetController } from '../../../../utils/accessibility-utils';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { ItemRenderingFunction } from '../../../common/item-list/item-list-common';
import { FoldedItemListStateContextEvent } from '../../../common/item-list/item-list-decorators';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../../../common/layout/display-options';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-folded-result-list` component is responsible for displaying folded query results, by applying one or more result templates for up to three layers (i.e., to the result, child and grandchild).
 *
 * @part result-list - The element containing every result of a result list
 * @part outline - The element displaying an outline or a divider around a result
 */
export declare class AtomicFoldedResultList implements InitializableComponent {
    bindings: Bindings;
    foldedResultList: FoldedResultList;
    resultsPerPage: ResultsPerPage;
    private resultRenderingFunction;
    private loadingFlag;
    private itemTemplateProvider;
    private nextNewResultTarget?;
    private itemListCommon;
    private display;
    host: HTMLDivElement;
    foldedResultListState: FoldedResultListState;
    resultsPerPageState: ResultsPerPageState;
    private resultTemplateRegistered;
    error: Error;
    private templateHasError;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The name of the field on which to do the folding. The folded result list component will use the values of this field to resolve the collections of result items.
     *
     * @defaultValue `foldingcollection`
     */
    collectionField?: string;
    /**
     * The name of the field that determines whether a certain result is a top result containing other child results within a collection.
     *
     * @defaultValue `foldingparent`
     */
    parentField?: string;
    /**
     * The name of the field that uniquely identifies a result within a collection.
     *
     * @defaultValue `foldingchild`
     */
    childField?: string;
    /**
     * The initial number of child results to request for each folded collection, before expansion.
     *
     * @defaultValue `2`
     *
     * @example For an email thread with a total of 20 messages, using the default value of `2` will request the top two child messages, based on the current sort criteria and query, to be returned as children of the parent message.
     * The user can then click to expand the collection and see the remaining messages that match the current query (i.e., not necessarily all remaining 18 messages). Those messages will be sorted based on the current sort criteria (i.e., not necessarily by date). See the `atomic-load-more-children-results` component.
     * For more info on Result Folding, see [Result Folding](https://docs.coveo.com/en/1884).
     **/
    numberOfFoldedResults: number;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    resolveFoldedResultList(event: FoldedItemListStateContextEvent): void;
    loadCollection(event: CustomEvent<FoldedCollection>): void;
    get focusTarget(): FocusTargetController;
    initialize(): void;
    private initFolding;
    render(): any;
    private computeListDisplayClasses;
    private getPropsForAtomicResult;
}
