import { SmartSnippetState, SmartSnippet } from '@coveo/headless';
import { AnyBindings } from '../../interface/bindings';
type FeedBackModalElement = HTMLAtomicSmartSnippetFeedbackModalElement | HTMLAtomicInsightSmartSnippetFeedbackModalElement;
interface SmartSnippetProps {
    id: string;
    modalTagName: string;
    getSourceAnchorAttributes?: () => Attr[] | undefined;
    getHost: () => HTMLElement;
    getBindings: () => AnyBindings;
    getModalRef: () => FeedBackModalElement | undefined;
    getHeadingLevel: () => number;
    getCollapsedHeight: () => number;
    getMaximumHeight: () => number;
    getSmartSnippetState: () => SmartSnippetState;
    getSmartSnippet: () => SmartSnippet;
    getSnippetStyle: () => string | undefined;
    getFeedbackSent: () => boolean;
    getSnippetMaximumHeight?: () => number;
    getSnippetCollapsedHeight?: () => number;
    setModalRef: (ref: HTMLElement) => void;
    setFeedbackSent: (isSent: boolean) => void;
}
export declare class SmartSnippetCommon {
    private props;
    constructor(props: SmartSnippetProps);
    private get style();
    private loadModal;
    private renderQuestion;
    private canSnippetCollapse;
    private renderContent;
    private renderFeedbackBanner;
    hideDuringRender(shouldHide: boolean): void;
    render(): any;
}
export {};
