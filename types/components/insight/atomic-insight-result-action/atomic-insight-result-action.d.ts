import { Result } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
export interface InsightResultActionClickedEvent {
    action: string;
    result: Result;
}
declare enum Actions {
    CopyToClipboard = "copyToClipboard",
    AttachToCase = "attachToCase",
    Quickview = "quickview",
    PostToFeed = "postToFeed",
    SendAsEmail = "sendAsEmail"
}
/**
 * @internal
 */
export declare class AtomicInsightResultAction implements InitializableComponent {
    bindings: Bindings;
    private result;
    error: Error;
    private actionClicked;
    /**
     * Specify the result action icon to display.
     */
    icon: string;
    /**
     * The text tooltip to show on the result action icon.
     */
    tooltip: string;
    /**
     * The type of action to perform when the result action is clicked. This will be sent along the event fired when the button is clicked.
     */
    action: Actions | string;
    private onClick;
    private getIcon;
    render(): any;
}
export {};
