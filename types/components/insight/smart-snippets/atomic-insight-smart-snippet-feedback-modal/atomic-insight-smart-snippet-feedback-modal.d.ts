import { EventEmitter } from '../../../../stencil-public-runtime';
import { InsightSmartSnippet, InsightSmartSnippetFeedback } from '../..';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightSmartSnippetFeedbackModal implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    host: HTMLElement;
    smartSnippet: InsightSmartSnippet;
    error: Error;
    private smartSnippetFeedbackModalCommon;
    source?: HTMLElement;
    isOpen: boolean;
    currentAnswer?: InsightSmartSnippetFeedback | 'other' | undefined;
    private detailsInputRef?;
    private readonly formId;
    feedbackSent: EventEmitter;
    watchToggleOpen(isOpen: boolean): void;
    initialize(): void;
    private setIsOpen;
    private setCurrentAnswer;
    private setDetailsInputRef;
    render(): any;
}
