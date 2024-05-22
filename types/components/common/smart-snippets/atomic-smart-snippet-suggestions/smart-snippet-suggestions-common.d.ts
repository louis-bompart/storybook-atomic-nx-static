import { SmartSnippetRelatedQuestion, SmartSnippetQuestionsList, SmartSnippetQuestionsListState } from '@coveo/headless';
import { AnyBindings } from '../../interface/bindings';
interface SmartSnippetSuggestionProps {
    id: string;
    getSourceAnchorAttributes?: () => Attr[] | undefined;
    getHost: () => HTMLElement;
    getBindings: () => AnyBindings;
    getHeadingLevel: () => number;
    getState: () => SmartSnippetQuestionsListState;
    getQuestionsList: () => SmartSnippetQuestionsList;
    getSnippetStyle: () => string | undefined;
}
export declare class SmartSnippetSuggestionCommon {
    private props;
    constructor(props: SmartSnippetSuggestionProps);
    private get style();
    private getRelatedQuestionId;
    private getQuestionPart;
    private toggleQuestion;
    private renderQuestion;
    private renderContent;
    private renderSource;
    hideDuringRender(shouldHide: boolean): void;
    renderRelatedQuestion(relatedQuestion: SmartSnippetRelatedQuestion, index: number): any;
    render(): any;
}
export {};
