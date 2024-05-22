import { g as getFirstFocusableDescendant } from './accessibility-utils-95c56e98.js';
import { u as updateBreakpoints } from './replace-breakpoint-8bfab33b.js';
import { o as once, d as defer } from './utils-af246396.js';

const resultComponentClass = 'result-component';
class ItemListCommon {
    constructor(props) {
        this.props = props;
        this.props.store.setLoadingFlag(this.props.loadingFlag);
        this.props.store.registerResultList(this);
        this.updateBreakpointsOnce = once(() => updateBreakpoints(this.props.host));
    }
    updateBreakpoints() {
        this.updateBreakpointsOnce();
    }
    getResultId(uniqueIdOnResult, searchResponseId, density, imageSize) {
        return `${uniqueIdOnResult}${searchResponseId}${density}${imageSize}`;
    }
    setNewResultRef(element, resultIndex) {
        var _a, _b;
        if (resultIndex === 0) {
            this.firstResultEl = element;
        }
        if (resultIndex !== this.indexOfResultToFocus) {
            return;
        }
        if (!element.children.length && !((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.children.length)) {
            return;
        }
        this.indexOfResultToFocus = undefined;
        const elementToFocus = (_b = getFirstFocusableDescendant(element)) !== null && _b !== void 0 ? _b : element;
        this.props.nextNewItemTarget.setTarget(elementToFocus);
    }
    focusOnNextNewResult() {
        this.indexOfResultToFocus = this.props.getCurrentNumberOfItems();
        this.props.nextNewItemTarget.focusOnNextTarget();
    }
    async focusOnFirstResultAfterNextSearch() {
        await defer();
        return new Promise((resolve) => {
            if (this.props.getIsLoading()) {
                this.firstResultEl = undefined;
            }
            const unsub = this.props.engineSubscribe(async () => {
                var _a;
                await defer();
                if (!this.props.getIsLoading() && this.firstResultEl) {
                    const elementToFocus = (_a = getFirstFocusableDescendant(this.firstResultEl)) !== null && _a !== void 0 ? _a : this.firstResultEl;
                    this.props.nextNewItemTarget.setTarget(elementToFocus);
                    this.props.nextNewItemTarget.focus();
                    this.firstResultEl = undefined;
                    unsub();
                    resolve();
                }
            });
        });
    }
}

export { ItemListCommon as I, resultComponentClass as r };

//# sourceMappingURL=item-list-common-04954faf.js.map