import { h } from './index-53978573.js';
import { p as parseDate } from './date-utils-a7873867.js';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { r as randomID } from './utils-8200d0ae.js';
import { i as initializePopover } from './popover-type-4db2bb7d.js';
import { H as Hidden } from './initialization-utils-446eb31c.js';
import { b as shouldDisplayInputForFacetRange } from './facet-common-0693d706.js';
import { F as FacetHeader, a as FacetContainer } from './facet-header-45eee3d8.js';
import { F as FacetPlaceholder } from './facet-placeholder-976dca6e.js';
import { F as FacetValueLabelHighlight } from './facet-value-label-highlight-9ee13cbe.js';
import { F as FacetValueLink } from './facet-value-link-9d1d7675.js';
import { F as FacetValuesGroup } from './facet-values-group-ed9dda7a.js';

class TimeframeFacetCommon {
    constructor(props) {
        this.props = props;
        this.manualTimeframes = [];
        this.facetId = this.determineFacetId;
        this.props.setFacetId(this.facetId);
        this.manualTimeframes = this.getManualTimeframes();
        // Initialize two facets: One that is actually used to display values for end users, which only exists
        // if we need to display something to the end user (ie: timeframes > 0)
        // A second facet is initialized only to verify the results count. It is never used to display results to end user.
        // It serves as a way to determine if the input should be rendered or not, independent of the ranges configured in the component
        if (this.manualTimeframes.length > 0) {
            this.facetForDateRange = this.props.initializeFacetForDateRange(this.currentValues);
        }
        if (this.props.withDatePicker) {
            this.facetForDatePicker = this.props.initializeFacetForDatePicker();
            this.filter = this.props.initializeFilter();
        }
        if (this.facetForDateRange || this.filter) {
            this.dependenciesManager = this.props.buildDependenciesManager();
        }
        this.registerFacetToStore();
    }
    get determineFacetId() {
        if (this.props.facetId) {
            return this.props.facetId;
        }
        if (this.props.bindings.store.get('dateFacets')[this.props.field]) {
            return randomID(`${this.props.field}_`);
        }
        return this.props.field;
    }
    get enabled() {
        var _a, _b, _c, _d;
        return ((_d = (_b = (_a = this.facetForDateRange) === null || _a === void 0 ? void 0 : _a.state.enabled) !== null && _b !== void 0 ? _b : (_c = this.filter) === null || _c === void 0 ? void 0 : _c.state.enabled) !== null && _d !== void 0 ? _d : true);
    }
    get valuesToRender() {
        var _a;
        return (((_a = this.facetForDateRange) === null || _a === void 0 ? void 0 : _a.state.values.filter((value) => value.numberOfResults || value.state !== 'idle')) || []);
    }
    get shouldRenderValues() {
        return !this.hasInputRange && !!this.valuesToRender.length;
    }
    get shouldRenderFacet() {
        return this.shouldRenderInput || this.shouldRenderValues;
    }
    get shouldRenderInput() {
        var _a, _b;
        return shouldDisplayInputForFacetRange({
            hasInput: this.props.withDatePicker,
            hasInputRange: this.hasInputRange,
            searchStatusState: this.props.getSearchStatusState(),
            facetValues: ((_b = (_a = this.facetForDatePicker) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.values) || [],
        });
    }
    get hasValues() {
        var _a;
        if ((_a = this.facetForDatePicker) === null || _a === void 0 ? void 0 : _a.state.values.length) {
            return true;
        }
        return !!this.valuesToRender.length;
    }
    get numberOfSelectedValues() {
        var _a, _b, _c;
        if ((_b = (_a = this.filter) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.range) {
            return 1;
        }
        return (((_c = this.facetForDateRange) === null || _c === void 0 ? void 0 : _c.state.values.filter(({ state }) => state === 'selected').length) || 0);
    }
    get hasInputRange() {
        var _a;
        return !!((_a = this.filter) === null || _a === void 0 ? void 0 : _a.state.range);
    }
    get currentValues() {
        return this.manualTimeframes.map(({ period, amount, unit }) => period === 'past'
            ? this.props.buildDateRange({
                start: { period, unit, amount },
                end: { period: 'now' },
            })
            : this.props.buildDateRange({
                start: { period: 'now' },
                end: { period, unit, amount },
            }));
    }
    disconnectedCallback() {
        var _a;
        if (this.props.host.isConnected) {
            return;
        }
        (_a = this.dependenciesManager) === null || _a === void 0 ? void 0 : _a.stopWatching();
    }
    get isHidden() {
        return !this.shouldRenderFacet || !this.enabled;
    }
    registerFacetToStore() {
        const facetInfo = {
            label: () => this.props.bindings.i18n.t(this.props.label),
            facetId: this.facetId,
            element: this.props.host,
            isHidden: () => this.isHidden,
        };
        this.props.bindings.store.registerFacet('dateFacets', {
            ...facetInfo,
            format: (value) => this.formatFacetValue(value),
        });
        initializePopover(this.props.host, {
            ...facetInfo,
            hasValues: () => this.hasValues,
            numberOfActiveValues: () => this.numberOfSelectedValues,
        });
        if (this.filter) {
            this.props.bindings.store.state.dateFacets[this.filter.state.facetId] =
                this.props.bindings.store.state.dateFacets[this.facetId];
        }
    }
    getManualTimeframes() {
        return Array.from(this.props.host.querySelectorAll('atomic-timeframe')).map(({ label, amount, unit, period }) => ({
            label,
            amount,
            unit,
            period,
        }));
    }
    formatFacetValue(facetValue) {
        try {
            const startDate = this.props.deserializeRelativeDate(facetValue.start);
            const relativeDate = startDate.period === 'past'
                ? startDate
                : this.props.deserializeRelativeDate(facetValue.end);
            const timeframe = this.getManualTimeframes().find((timeframe) => timeframe.period === relativeDate.period &&
                timeframe.unit === relativeDate.unit &&
                timeframe.amount === relativeDate.amount);
            if (timeframe === null || timeframe === void 0 ? void 0 : timeframe.label) {
                return getFieldValueCaption(this.props.field, timeframe.label, this.props.bindings.i18n);
            }
            return this.props.bindings.i18n.t(`${relativeDate.period}-${relativeDate.unit}`, {
                count: relativeDate.amount,
            });
        }
        catch (error) {
            return this.props.bindings.i18n.t('to', {
                start: parseDate(facetValue.start).format('YYYY-MM-DD'),
                end: parseDate(facetValue.end).format('YYYY-MM-DD'),
            });
        }
    }
    renderValues() {
        return this.renderValuesContainer(this.valuesToRender.map((value) => this.renderValue(value)));
    }
    renderValue(facetValue) {
        const displayValue = this.formatFacetValue(facetValue);
        const isSelected = facetValue.state === 'selected';
        const isExcluded = facetValue.state === 'excluded';
        return (h(FacetValueLink, { displayValue: displayValue, isSelected: isSelected, numberOfResults: facetValue.numberOfResults, i18n: this.props.bindings.i18n, onClick: () => this.facetForDateRange.toggleSingleSelect(facetValue) },
            h(FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected, isExcluded: isExcluded })));
    }
    renderValuesContainer(children) {
        return (h(FacetValuesGroup, { i18n: this.props.bindings.i18n, label: this.props.label },
            h("ul", { class: "mt-3", part: "values" }, children)));
    }
    renderHeader(isCollapsed, headerFocus, onToggleCollapse) {
        return (h(FacetHeader, { i18n: this.props.bindings.i18n, label: this.props.label, onClearFilters: () => {
                var _a, _b, _c;
                headerFocus.focusAfterSearch();
                if ((_a = this.filter) === null || _a === void 0 ? void 0 : _a.state.range) {
                    (_b = this.filter) === null || _b === void 0 ? void 0 : _b.clear();
                    return;
                }
                (_c = this.facetForDateRange) === null || _c === void 0 ? void 0 : _c.deselectAll();
            }, numberOfActiveValues: this.numberOfSelectedValues, isCollapsed: isCollapsed, headingLevel: this.props.headingLevel, onToggleCollapse: onToggleCollapse, headerRef: (el) => headerFocus.setTarget(el) }));
    }
    renderDateInput() {
        return (h("atomic-facet-date-input", { min: this.props.min, max: this.props.max, bindings: this.props.bindings, label: this.props.label, filter: this.filter, filterState: this.filter.state }));
    }
    render({ hasError, firstSearchExecuted, isCollapsed, headerFocus, onToggleCollapse, }) {
        if (hasError || !this.enabled) {
            return h(Hidden, null);
        }
        if (!firstSearchExecuted) {
            return (h(FacetPlaceholder, { numberOfValues: this.currentValues.length, isCollapsed: isCollapsed }));
        }
        if (!this.shouldRenderFacet) {
            return h(Hidden, null);
        }
        return (h(FacetContainer, null,
            this.renderHeader(isCollapsed, headerFocus, onToggleCollapse),
            !isCollapsed && [
                this.shouldRenderValues && this.renderValues(),
                this.shouldRenderInput && this.renderDateInput(),
            ]));
    }
}

export { TimeframeFacetCommon as T };

//# sourceMappingURL=timeframe-facet-common-89d2d313.js.map