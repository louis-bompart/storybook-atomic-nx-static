import { g as getElement } from './index-53978573.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';

const foldedItemListContextEventName = 'atomic/resolveFoldedResultList';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
function FoldedItemListContext() {
    return (component, foldedList) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = getElement(this);
            const event = buildCustomEvent(foldedItemListContextEventName, (foldedItemList) => {
                this[foldedList] = foldedItemList;
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
    };
}
const foldedItemListStateContextEventName = 'atomic/resolveFoldedResultList';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
function FoldedItemListStateContext() {
    return (component, foldedListState) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = getElement(this);
            const event = buildCustomEvent(foldedItemListStateContextEventName, (foldedItemList) => {
                foldedItemList === null || foldedItemList === void 0 ? void 0 : foldedItemList.subscribe(() => {
                    this[foldedListState] = foldedItemList.state;
                });
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
    };
}

export { FoldedItemListContext as F, FoldedItemListStateContext as a };

//# sourceMappingURL=item-list-decorators-807817b8.js.map