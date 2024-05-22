import { SmartSnippet, SmartSnippetFeedback } from '@coveo/headless';
import { EventEmitter } from '../../../../stencil-public-runtime';
import { AnyBindings } from '../../interface/bindings';
interface SmartSnippetFeedbackModalProps {
    formId: string;
    getHost: () => HTMLElement;
    getBindings: () => AnyBindings;
    getCurrentAnswer: () => SmartSnippetFeedback | 'other' | undefined;
    getSmartSnippet: () => SmartSnippet;
    getDetailsInputRef: () => HTMLTextAreaElement | undefined;
    getFeedbackSent: () => EventEmitter;
    getSource: () => HTMLElement | undefined;
    getIsOpen: () => boolean;
    setIsOpen: (isOpen: boolean) => void;
    setCurrentAnswer: (answer: SmartSnippetFeedback | 'other') => void;
    setDetailsInputRef: (ref?: HTMLTextAreaElement) => void;
}
export declare class SmartSnippetFeedbackModalCommon {
    private props;
    constructor(props: SmartSnippetFeedbackModalProps);
    sendFeedback(): void;
    close(): void;
    private renderHeader;
    private renderOptions;
    private renderDetails;
    private renderBody;
    private renderFooter;
    private updateBreakpoints;
    render(): any;
}
export {};
