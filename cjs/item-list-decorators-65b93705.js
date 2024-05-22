'use strict';

const index = require('./index-c930d4b4.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');

const foldedItemListContextEventName = 'atomic/resolveFoldedResultList';
/**
 * A [StencilJS property decorator](https://stenciljs.com/) to be used for elements nested within a folded item list.
 * This allows the Stencil component to modify the folded item list rendered levels.
 */
function FoldedItemListContext() {
    return (component, foldedList) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = index.getElement(this);
            const event = eventUtils.buildCustomEvent(foldedItemListContextEventName, (foldedItemList) => {
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
            const element = index.getElement(this);
            const event = eventUtils.buildCustomEvent(foldedItemListStateContextEventName, (foldedItemList) => {
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

exports.FoldedItemListContext = FoldedItemListContext;
exports.FoldedItemListStateContext = FoldedItemListStateContext;

//# sourceMappingURL=item-list-decorators-65b93705.js.map