import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../../search/atomic-search-interface/atomic-search-interface';
/**
 * @internal
 */
export declare class TabPopover implements InitializableComponent {
    private host;
    bindings: Bindings;
    show: boolean;
    error: Error;
    private isOpen;
    private buttonRef;
    private popupRef;
    private popperInstance?;
    popoverId: string;
    initialize(): void;
    private initializePopover;
    handleKeyDown(e: KeyboardEvent): void;
    get slotElements(): HTMLCollection;
    get hasTabs(): boolean;
    togglePopover(): Promise<void>;
    setButtonVisibility(isVisible: boolean): Promise<void>;
    private renderDropdownButton;
    private renderBackdrop;
    private renderPopover;
    componentDidRender(): void;
    componentDidUpdate(): void;
    render(): any;
}
