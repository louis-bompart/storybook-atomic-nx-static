import { GeneratedAnswer, GeneratedAnswerFeedback } from '@coveo/headless';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { AnyBindings } from '../../../../components';
import { InitializableComponent } from '../../../../utils/initialization-utils';
/**
 * @internal
 */
export declare class AtomicGeneratedAnswerFeedbackModal implements InitializableComponent<AnyBindings> {
    bindings: AnyBindings;
    host: HTMLElement;
    /**
     * Indicates whether the modal is open.
     */
    isOpen: boolean;
    /**
     * A `GeneratedAnswer` controller instance. It is used when the user interacts with the modal.
     */
    generatedAnswer: GeneratedAnswer;
    error: Error;
    currentAnswer?: GeneratedAnswerFeedback | 'other' | undefined;
    feedbackSubmitted: boolean;
    private readonly formId;
    private detailsInputRef?;
    feedbackSent: EventEmitter;
    watchToggleOpen(isOpen: boolean): void;
    private static options;
    private setIsOpen;
    private close;
    private updateBreakpoints;
    private setCurrentAnswer;
    sendFeedback(): void;
    private renderHeader;
    private renderOptions;
    private renderDetails;
    private renderBody;
    private renderFooter;
    render(): any;
}
