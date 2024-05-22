import { InsightSearchStatus, InsightGeneratedAnswer, InsightGeneratedAnswerState, InsightGeneratedAnswerStyle } from '..';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 * The `atomic-insight-generated-answer` component uses Coveo Machine Learning (Coveo ML) models to automatically generate an answer to a query executed by the user.
 * For more information, see [About Relevance Generative Answering (RGA)](https://docs.coveo.com/en/n9de0370/)
 *
 * @part container - The container displaying the generated answer.
 * @part header-label - The header of the generated answer container.
 * @part feedback-button - The "like" and "dislike" buttons.
 * @part toggle - The switch to toggle the visibility of the generated answer.
 * @part copy-button - The "Copy answer" button.
 * @part retry-container - The container for the "retry" section.
 * @part generated-text - The text of the generated answer.
 * @part citations-label - The header of the citations list.
 * @part rephrase-label - The header of the rephrase options.
 * @part rephrase-buttons - The container of the rephrase buttons section.
 * @part rephrase-button - The button for each of the rephrase options (step-by-step instructions, bulleted list, and summary).
 * @part rephrase-buttons-container - The container of the rephrase buttons.
 * @part rephrase-button-label - The label of the rephrase button.
 *
 * @part answer-code-block - The generated answer multi-line code blocks.
 * @part answer-emphasis - The generated answer emphasized text elements.
 * @part answer-inline-code - The generated answer inline code elements.
 * @part answer-heading-1 - The generated answer level 1 heading elements.
 * @part answer-heading-2 - The generated answer level 2 heading elements.
 * @part answer-heading-3 - The generated answer level 3 heading elements.
 * @part answer-heading-4 - The generated answer level 4 heading elements.
 * @part answer-heading-5 - The generated answer level 5 heading elements.
 * @part answer-heading-6 - The generated answer level 6 heading elements.
 * @part answer-list-item - The generated answer list item elements for both ordered and unordered lists.
 * @part answer-ordered-list - The generated answer ordered list elements.
 * @part answer-paragraph - The generated answer paragraph elements.
 * @part answer-quote-block - The generated answer quote block elements.
 * @part answer-unordered-list - The generated answer unordered list elements.
 * @part answer-strong - The generated answer strong text elements.
 * @part answer-table - The generated answer table elements.
 * @part answer-table-container - The generated answer table container elements.
 * @part answer-table-content - The generated answer table content cell elements.
 * @part answer-table-header - The generated answer table header cell elements.
 *
 * @part citation - The link that allows the user to navigate to the item.
 * @part citation-popover - The pop-up that shows an item preview when the user hovers over the citation.
 * @part citation-index - The content of the citation item.
 */
export declare class AtomicInsightGeneratedAnswer implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    generatedAnswer: InsightGeneratedAnswer;
    searchStatus: InsightSearchStatus;
    private resizeObserver?;
    private generatedAnswerState;
    private searchStatusState;
    error: Error;
    private host;
    copied: boolean;
    copyError: boolean;
    /**
     * The answer style to apply when the component first loads.
     * Options:
     *   - `default`: Generate the answer without specific formatting instructions.
     *   - `bullet`: Generate the answer as a bulleted list.
     *   - `step`: Generate the answer as step-by-step instructions.
     *   - `concise`: Generate the answer as briefly as possible.
     */
    answerStyle: InsightGeneratedAnswerStyle;
    /**
     * Whether to render a toggle button that lets the user hide or show the answer.
     */
    withToggle?: boolean;
    /**
     * Whether to allow the answer to be collapsed when the text is taller than 250px.
     */
    collapsible?: boolean;
    protected ariaMessage: string;
    private generatedAnswerCommon;
    private fullAnswerHeight?;
    private maxCollapsedHeight;
    initialize(): void;
    updateAnswerCollapsed(newState: InsightGeneratedAnswerState, oldState: InsightGeneratedAnswerState): void;
    disconnectedCallback(): void;
    private onGeneratedAnswerStateUpdate;
    private setCopied;
    private setCopyError;
    private setAriaMessage;
    private toggleClass;
    private adaptAnswerHeight;
    private getAnswerContainer;
    private getAnswerFooter;
    private updateAnswerHeight;
    render(): any;
}
