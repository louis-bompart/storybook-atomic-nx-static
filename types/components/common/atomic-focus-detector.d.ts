import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @internal
 */
export declare class AtomicFocusDetector {
    private host;
    focusEnter: EventEmitter;
    focusExit: EventEmitter;
    private focusWasContained;
    private get containsFocus();
    onFocusIn(): void;
    onFocusOut(): void;
    private onFocusChanged;
    render(): any;
}
