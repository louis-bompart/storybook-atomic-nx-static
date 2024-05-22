'use strict';

const accessibilityUtils = require('./accessibility-utils-8ec8aa46.js');
const replaceBreakpoint = require('./replace-breakpoint-7f1e4575.js');
const utils = require('./utils-93ea935e.js');

const resultComponentClass = 'result-component';
class ItemListCommon {
    constructor(props) {
        this.props = props;
        this.props.store.setLoadingFlag(this.props.loadingFlag);
        this.props.store.registerResultList(this);
        this.updateBreakpointsOnce = utils.once(() => replaceBreakpoint.updateBreakpoints(this.props.host));
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
        const elementToFocus = (_b = accessibilityUtils.getFirstFocusableDescendant(element)) !== null && _b !== void 0 ? _b : element;
        this.props.nextNewItemTarget.setTarget(elementToFocus);
    }
    focusOnNextNewResult() {
        this.indexOfResultToFocus = this.props.getCurrentNumberOfItems();
        this.props.nextNewItemTarget.focusOnNextTarget();
    }
    async focusOnFirstResultAfterNextSearch() {
        await utils.defer();
        return new Promise((resolve) => {
            if (this.props.getIsLoading()) {
                this.firstResultEl = undefined;
            }
            const unsub = this.props.engineSubscribe(async () => {
                var _a;
                await utils.defer();
                if (!this.props.getIsLoading() && this.firstResultEl) {
                    const elementToFocus = (_a = accessibilityUtils.getFirstFocusableDescendant(this.firstResultEl)) !== null && _a !== void 0 ? _a : this.firstResultEl;
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

exports.ItemListCommon = ItemListCommon;
exports.resultComponentClass = resultComponentClass;

//# sourceMappingURL=item-list-common-c317734c.js.map