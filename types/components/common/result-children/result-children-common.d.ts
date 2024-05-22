import { FoldedResult, FoldedResultList, FoldedResultListState } from '@coveo/headless';
import { VNode } from '../../../stencil-public-runtime';
import { AnyBindings } from '../interface/bindings';
import { DisplayConfig } from '../item-list/item-decorators';
import { ItemDisplayImageSize } from '../layout/display-options';
interface ResultChildrenProps {
    getHost: () => HTMLElement;
    getBindings: () => AnyBindings;
    getFoldedResultListState: () => FoldedResultListState;
    getResult: () => FoldedResult;
    getShowInitialChildren: () => boolean;
    getFoldedResultList: () => FoldedResultList;
    getInitialChildren: () => FoldedResult[];
    getInheritTemplates: () => boolean;
    getResultTemplateRegistered: () => boolean;
    getTemplateHasError: () => boolean;
    getNoResultText: () => string;
    getDisplayConfig: () => DisplayConfig;
    getImageSize: () => ItemDisplayImageSize | undefined;
    renderChild: (child: FoldedResult, isLast: boolean) => VNode;
    setInitialChildren: (initialChildren: FoldedResult[]) => void;
    toggleShowInitialChildren: () => void;
}
export declare class ResultChildrenCommon {
    private props;
    constructor(props: ResultChildrenProps);
    private get foldedResult();
    private get numberOfChildren();
    private get hasChildren();
    private get collection();
    private renderPlaceholder;
    private renderNoResult;
    private renderCollapseButton;
    private renderChildrenWrapper;
    private renderChildren;
    private renderCollection;
    private renderFoldedResult;
    componentWillRender(): void;
    render(): any;
}
export {};
