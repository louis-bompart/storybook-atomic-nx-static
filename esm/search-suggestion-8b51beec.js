import { h, f as forceUpdate, F as Fragment } from './index-c045ad7c.js';
import { B as Button } from './button-a9fb1e13.js';
import { a as isNullOrUndefined } from './bueno.esm-9a075e67.js';
import { D as DOMPurify } from './utils-bc6a079b.js';
import { d as debounce } from './debounce-utils-a2be2932.js';
import { e as elementHasQuery, a as elementHasNoQuery } from './suggestions-common-1d4c0dac.js';
import { i as isMacOS } from './device-utils-265d1d2c.js';

const SearchBoxWrapper = (props, children) => {
    const getClasses = () => {
        const baseClasses = 'flex bg-background w-full border border-neutral rounded-md focus-within:ring';
        const focusClasses = props.disabled
            ? 'focus-within:border-disabled focus-within:ring-neutral'
            : 'focus-within:border-primary focus-within:ring-ring-primary';
        const inputTypeClasses = props.textArea
            ? 'absolute top-0 left-0'
            : 'relative h-full';
        return [baseClasses, focusClasses, inputTypeClasses].join(' ');
    };
    return (h("div", { part: "wrapper", class: getClasses() }, children));
};

const ClearSlim = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 1.00012L1.00012 14.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.999878 1L14.9999 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const TextAreaClearButton = ({ inputRef, bindings, onClick, ...defaultButtonProps }) => (h("div", { part: "clear-button-wrapper", class: "py-2 flex items-start justify-center items-center ml-2" },
    h(Button, { style: "text-transparent", part: "clear-button", class: "flex items-center justify-center w-8 h-8 text-neutral-dark shrink-0", onClick: () => {
            onClick === null || onClick === void 0 ? void 0 : onClick();
            inputRef === null || inputRef === void 0 ? void 0 : inputRef.focus();
        }, ariaLabel: bindings.i18n.t('clear'), ...defaultButtonProps },
        h("atomic-icon", { part: "clear-icon", icon: ClearSlim, class: "w-4 h-4" }))));

function getPopupAttributes(props) {
    return {
        role: 'combobox',
        autocomplete: 'off',
        autocapitalize: 'off',
        autocorrect: 'off',
        ...(props.activeDescendant && {
            'aria-activedescendant': props.activeDescendant,
        }),
        'aria-expanded': `${props.hasSuggestions && props.expanded}`,
        'aria-autocomplete': 'both',
        'aria-haspopup': 'true',
        'aria-controls': props.id,
    };
}
function syncTextWithReplica(elem, value) {
    const parent = elem === null || elem === void 0 ? void 0 : elem.parentNode;
    if (!parent) {
        return;
    }
    if (elem.value === '\n') {
        return;
    }
    parent.dataset.replicatedValue = value !== null && value !== void 0 ? value : elem.value;
}
function resetReplicaText(elem) {
    const parent = elem === null || elem === void 0 ? void 0 : elem.parentNode;
    if (parent) {
        delete parent.dataset.replicatedValue;
    }
}
function collapseTextArea(elem) {
    const parent = elem === null || elem === void 0 ? void 0 : elem.parentNode;
    if (parent) {
        parent.classList.remove('expanded');
    }
}
function expandTextArea(elem) {
    const parent = elem === null || elem === void 0 ? void 0 : elem.parentNode;
    if (parent) {
        parent.classList.add('expanded');
    }
}
const SearchTextArea = ({ textAreaRef, loading, bindings, onInput, onFocus, onBlur, onChange, onKeyDown, onKeyUp, value, ariaLabel, onClear, popup, ...defaultInputProps }) => (h("div", { class: "grow flex overflow-hidden" },
    h("div", { part: "textarea-expander", class: "grow grid overflow-hidden" },
        h("textarea", { part: "textarea", "aria-label": ariaLabel, placeholder: bindings.i18n.t('search'), class: "placeholder-neutral-dark", rows: 1, onInput: (e) => {
                onInput === null || onInput === void 0 ? void 0 : onInput(e);
                syncTextWithReplica(textAreaRef);
            }, onKeyDown: (e) => {
                syncTextWithReplica(textAreaRef);
                if (e.key === 'Enter') {
                    if (e.shiftKey) {
                        return;
                    }
                    e.preventDefault();
                }
                onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
            }, onKeyUp: (e) => {
                onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(e);
                if (e.key === 'Enter') {
                    e.preventDefault();
                    return;
                }
                syncTextWithReplica(textAreaRef);
            }, onBlur: (e) => {
                onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
                collapseTextArea(textAreaRef);
                syncTextWithReplica(textAreaRef);
            }, onChange: (e) => {
                onChange === null || onChange === void 0 ? void 0 : onChange(e);
                syncTextWithReplica(textAreaRef);
            }, onFocus: (e) => {
                onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
                const target = e.target;
                syncTextWithReplica(textAreaRef !== null && textAreaRef !== void 0 ? textAreaRef : target);
                expandTextArea(textAreaRef !== null && textAreaRef !== void 0 ? textAreaRef : target);
            }, autocomplete: "off", ...(popup && getPopupAttributes(popup)), ...defaultInputProps, value: value })),
    loading && (h("div", { class: "searchbox-button-wrapper flex items-center justify-center ml-2" },
        h("span", { part: "loading", class: "loading w-5 h-5 rounded-full bg-gradient-to-r animate-spin mr-2 grid place-items-center" }))),
    !loading && value && (h(TextAreaClearButton, { inputRef: textAreaRef, bindings: bindings, onClick: () => {
            onClear();
            resetReplicaText(textAreaRef);
        } }))));

const SearchSlimIcon = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
<path d="M16 16L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

function promiseTimeout(prom, ms) {
    let id;
    const timeout = new Promise((_, reject) => {
        id = setTimeout(() => {
            reject(new Error('Promise timed out.'));
        }, ms);
    });
    return Promise.race([prom, timeout]).then(() => {
        clearTimeout(id);
    });
}

class SuggestionManager {
    constructor(ownerSearchBoxProps) {
        this.ownerSearchBoxProps = ownerSearchBoxProps;
        this.suggestions = [];
        this.leftSuggestionElements = [];
        this.rightSuggestionElements = [];
        this.leftPanel = undefined;
        this.rightPanel = undefined;
        this.activeDescendant = '';
        this.suggestedQuery = '';
        this.queryDataAttribute = 'data-query';
        this.suggestionEvents = [];
        this.previousActiveDescendantElement = null;
        this.leftSuggestions = [];
        this.rightSuggestions = [];
        this.triggerSuggestions = debounce(() => this.executeQuerySuggestion(), this.ownerSearchBoxProps.getSuggestionDelay());
    }
    get partialSuggestionBindings() {
        return {
            suggestedQuery: () => this.suggestedQuery,
            clearSuggestions: () => this.clearSuggestions(),
            triggerSuggestions: () => this.triggerSuggestions(),
            getSuggestions: () => this.suggestions,
            getSuggestionElements: () => this.allSuggestionElements,
        };
    }
    get activeDescendantElement() {
        var _a, _b;
        if (!this.hasActiveDescendant) {
            return null;
        }
        return (((_a = this.leftPanel) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.activeDescendant}`)) ||
            ((_b = this.rightPanel) === null || _b === void 0 ? void 0 : _b.querySelector(`#${this.activeDescendant}`)) ||
            null);
    }
    onSubmit() {
        this.updateActiveDescendant();
        this.clearSuggestions();
    }
    updateActiveDescendant(id = '') {
        this.activeDescendant = id;
        forceUpdate(this.ownerSearchBoxProps.getHost());
    }
    clickOnActiveElement() {
        var _a;
        (_a = this.activeDescendantElement) === null || _a === void 0 ? void 0 : _a.click();
        this.updateActiveDescendant();
    }
    isRightPanelInFocus() {
        if (isNullOrUndefined(this.panelInFocus) ||
            isNullOrUndefined(this.rightPanel)) {
            return false;
        }
        return this.panelInFocus === this.rightPanel;
    }
    initializeSuggestions(bindings) {
        this.suggestions = this.suggestionEvents.map((event) => event(bindings));
    }
    registerSuggestionsFromEvent(event, bindings) {
        event.preventDefault();
        event.stopPropagation();
        this.suggestionEvents.push(event.detail);
        this.suggestions.push(event.detail(bindings));
    }
    registerSuggestions(suggestions) {
        this.suggestions.push(suggestions);
    }
    get isDoubleList() {
        return Boolean(this.leftSuggestionElements.length && this.rightSuggestionElements.length);
    }
    focusPanel(side) {
        const panel = side === 'left' ? this.leftPanel : this.rightPanel;
        if (this.panelInFocus === panel) {
            return;
        }
        if (panel && panel.firstElementChild) {
            const panelHasActiveDescendant = this.previousActiveDescendantElement &&
                panel.contains(this.previousActiveDescendantElement);
            const newValue = panelHasActiveDescendant
                ? this.previousActiveDescendantElement
                : panel.firstElementChild;
            this.updateDescendants(newValue.id);
        }
    }
    clearSuggestions() {
        this.clearSuggestionElements();
        this.updateActiveDescendant();
    }
    focusNextValue() {
        if (!this.hasSuggestions || !this.nextOrFirstValue) {
            return;
        }
        this.focusValue(this.nextOrFirstValue);
    }
    focusValue(value) {
        this.updateActiveDescendant(value.id);
        this.scrollActiveDescendantIntoView();
        this.updateQueryFromSuggestion();
    }
    onSuggestionMouseOver(item, side, id) {
        const thisPanel = side === 'left' ? this.leftPanel : this.rightPanel;
        if (this.panelInFocus === thisPanel) {
            this.updateActiveDescendant(id);
        }
        else {
            this.updateDescendants(id);
        }
        if (item.query) {
            this.updateSuggestedQuery(item.query);
        }
    }
    onSuggestionClick(item, e) {
        if (item.query) {
            this.clearSuggestions();
            this.updateOwnerSearchboxQuery(item.query);
        }
        item.onSelect && item.onSelect(e);
    }
    get hasSuggestions() {
        return !!this.allSuggestionElements.length;
    }
    get allSuggestionElements() {
        return [...this.leftSuggestionElements, ...this.rightSuggestionElements];
    }
    focusPreviousValue() {
        if (this.firstValue === this.activeDescendantElement) {
            this.updateActiveDescendant();
            return;
        }
        if (!this.hasSuggestions || !this.previousOrLastValue) {
            return;
        }
        this.focusValue(this.previousOrLastValue);
    }
    get hasActiveDescendant() {
        return this.activeDescendant !== '';
    }
    async executeQuerySuggestion() {
        var _a;
        this.updateActiveDescendant();
        const settled = await Promise.allSettled(this.suggestions.map((suggestion) => promiseTimeout(suggestion.onInput ? suggestion.onInput() : Promise.resolve(), this.ownerSearchBoxProps.getSuggestionTimeout())));
        const fulfilledSuggestions = [];
        settled.forEach((prom, j) => {
            if (prom.status === 'fulfilled') {
                fulfilledSuggestions.push(this.suggestions[j]);
            }
            else {
                this.ownerSearchBoxProps
                    .getLogger()
                    .warn('Some query suggestions are not being shown because the promise timed out.');
            }
        });
        const splitSuggestions = (side, isDefault = false) => fulfilledSuggestions
            .filter((suggestion) => suggestion.panel === side || (!suggestion.panel && isDefault))
            .sort(this.sortSuggestions);
        this.leftSuggestions = splitSuggestions('left', true);
        this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements();
        this.rightSuggestions = splitSuggestions('right');
        this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions);
        const defaultSuggestedQuery = ((_a = this.allSuggestionElements.find(elementHasQuery)) === null || _a === void 0 ? void 0 : _a.query) || '';
        this.updateSuggestedQuery(defaultSuggestedQuery);
    }
    get lastValue() {
        var _a;
        return (_a = this.panelInFocus) === null || _a === void 0 ? void 0 : _a.lastElementChild;
    }
    get previousOrLastValue() {
        var _a;
        if (!this.hasActiveDescendant) {
            return this.lastValue;
        }
        return (((_a = this.activeDescendantElement) === null || _a === void 0 ? void 0 : _a.previousElementSibling) || this.lastValue);
    }
    sortSuggestions(a, b) {
        return a.position - b.position;
    }
    get nextOrFirstValue() {
        var _a;
        if (!this.hasActiveDescendant) {
            return this.firstValue;
        }
        return ((_a = this.activeDescendantElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling) || this.firstValue;
    }
    get firstValue() {
        var _a;
        return (_a = this.panelInFocus) === null || _a === void 0 ? void 0 : _a.firstElementChild;
    }
    get panelInFocus() {
        var _a, _b;
        if ((_a = this.leftPanel) === null || _a === void 0 ? void 0 : _a.contains(this.activeDescendantElement)) {
            return this.leftPanel;
        }
        if ((_b = this.rightPanel) === null || _b === void 0 ? void 0 : _b.contains(this.activeDescendantElement)) {
            return this.rightPanel;
        }
        return this.leftPanel || this.rightPanel;
    }
    scrollActiveDescendantIntoView() {
        var _a;
        (_a = this.activeDescendantElement) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
            block: 'nearest',
        });
    }
    updateQueryFromSuggestion() {
        var _a;
        const suggestedQuery = (_a = this.activeDescendantElement) === null || _a === void 0 ? void 0 : _a.getAttribute(this.queryDataAttribute);
        this.updateOwnerSearchboxQuery(suggestedQuery || '');
    }
    updateOwnerSearchboxQuery(query) {
        if (query && this.ownerSearchBoxProps.getSearchBoxValue() !== query) {
            this.ownerSearchBoxProps.updateQuery(query);
            this.updateSuggestedQuery(query);
        }
    }
    async updateSuggestedQuery(suggestedQuery) {
        await Promise.allSettled(this.suggestions.map((suggestion) => promiseTimeout(suggestion.onSuggestedQueryChange
            ? suggestion.onSuggestedQueryChange(suggestedQuery)
            : Promise.resolve(), this.ownerSearchBoxProps.getSuggestionTimeout())));
        this.suggestedQuery = suggestedQuery;
        this.updateSuggestionElements(suggestedQuery);
        forceUpdate(this.ownerSearchBoxProps.getHost());
    }
    updateSuggestionElements(query) {
        if (!this.isPanelInFocus(this.leftPanel, query)) {
            this.leftSuggestionElements = this.getAndFilterLeftSuggestionElements();
        }
        if (!this.isPanelInFocus(this.rightPanel, query)) {
            this.rightSuggestionElements = this.getSuggestionElements(this.rightSuggestions);
        }
    }
    isPanelInFocus(panel, query) {
        var _a;
        if (!this.activeDescendantElement) {
            return false;
        }
        if (query) {
            const escaped = DOMPurify.sanitize(query);
            return !!(panel === null || panel === void 0 ? void 0 : panel.querySelector(`[${this.queryDataAttribute}="${escaped}"]`));
        }
        return ((_a = this.activeDescendantElement) === null || _a === void 0 ? void 0 : _a.closest('ul')) === panel;
    }
    getAndFilterLeftSuggestionElements() {
        const suggestionElements = this.getSuggestionElements(this.leftSuggestions);
        const filterOnDuplicate = new Set();
        const out = suggestionElements.filter((suggestionElement) => {
            if (isNullOrUndefined(suggestionElement.query)) {
                return true;
            }
            if (filterOnDuplicate.has(suggestionElement.query)) {
                return false;
            }
            else {
                filterOnDuplicate.add(suggestionElement.query);
                return true;
            }
        });
        return out;
    }
    getSuggestionElements(suggestions) {
        const elements = suggestions
            .map((suggestion) => suggestion.renderItems())
            .flat();
        const max = this.ownerSearchBoxProps.getNumberOfSuggestionsToDisplay() +
            elements.filter(elementHasNoQuery).length;
        return elements.slice(0, max);
    }
    updateDescendants(activeDescendant = '') {
        const newPrevDescendantElement = this.activeDescendantElement;
        this.previousActiveDescendantElement = newPrevDescendantElement;
        this.updateActiveDescendant(activeDescendant);
    }
    clearSuggestionElements() {
        this.leftSuggestionElements = [];
        this.rightSuggestionElements = [];
    }
}

const queryDataAttribute = 'data-query';
function getPartsForSuggestion(suggestion, isSelected) {
    let part = 'suggestion';
    if (isSelected) {
        part += ' active-suggestion';
    }
    if (suggestion.query) {
        part += ' suggestion-with-query';
    }
    if (suggestion.part) {
        part += ` ${suggestion.part}`;
    }
    return part;
}
function getClassesForSuggestion(isSelected) {
    return `flex px-4 min-h-[40px] items-center text-left text-neutral-dark cursor-pointer ${isSelected ? 'bg-neutral-light' : ''}`;
}
function isHTMLElement(el) {
    return el instanceof HTMLElement;
}
function ensureContentForRenderedSuggestion({ renderedSuggestion, suggestion, }) {
    if (isHTMLElement(suggestion.content)) {
        renderedSuggestion.replaceChildren(suggestion.content);
    }
}
function getAriaLabelForRenderedSuggestion({ bindings, renderedSuggestion, suggestion, side, index, lastIndex, isDoubleList, isButton, }) {
    var _a, _b, _c;
    const contentLabel = (_c = (_b = (_a = suggestion.ariaLabel) !== null && _a !== void 0 ? _a : suggestion.query) !== null && _b !== void 0 ? _b : renderedSuggestion.innerText) !== null && _c !== void 0 ? _c : bindings.i18n.t('no-title');
    const labelWithType = isMacOS() && isButton
        ? bindings.i18n.t('search-suggestion-button', {
            label: contentLabel,
            interpolation: { escapeValue: false },
        })
        : contentLabel;
    const position = index + 1;
    const count = lastIndex + 1;
    if (!isDoubleList) {
        return bindings.i18n.t('search-suggestion-single-list', {
            label: labelWithType,
            position,
            count,
            interpolation: { escapeValue: false },
        });
    }
    return bindings.i18n.t('search-suggestion-double-list', {
        label: labelWithType,
        position,
        count,
        side: bindings.i18n.t(side === 'left' ? 'left' : 'right'),
        interpolation: { escapeValue: false },
    });
}
function getContentForSuggestion(suggestion) {
    return !isHTMLElement(suggestion.content) ? (suggestion.content) : (h(Fragment, null));
}
function getCommonSearchSuggestionAttributes({ bindings, id, suggestion, isSelected, side, index, lastIndex, isDoubleList, }, isButton) {
    return {
        id: id,
        key: suggestion.key,
        part: getPartsForSuggestion(suggestion, isSelected),
        class: getClassesForSuggestion(isSelected),
        ref: (el) => {
            if (!el) {
                return;
            }
            ensureContentForRenderedSuggestion({
                renderedSuggestion: el,
                suggestion,
            });
            el.setAttribute('aria-label', getAriaLabelForRenderedSuggestion({
                bindings,
                renderedSuggestion: el,
                suggestion,
                side,
                index,
                lastIndex,
                isDoubleList,
                isButton,
            }));
        },
    };
}
const SimpleSearchSuggestion = (props) => {
    return (h("span", { ...getCommonSearchSuggestionAttributes(props, false) }, getContentForSuggestion(props.suggestion)));
};
const ButtonSearchSuggestion = (props) => {
    return (h("button", { ...getCommonSearchSuggestionAttributes(props, true), onMouseDown: (e) => e.preventDefault(), onClick: (e) => { var _a; return (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e); }, onMouseOver: (e) => { var _a; return (_a = props.onMouseOver) === null || _a === void 0 ? void 0 : _a.call(props, e); }, [queryDataAttribute]: props.suggestion.query }, getContentForSuggestion(props.suggestion)));
};

export { ButtonSearchSuggestion as B, SearchTextArea as S, SuggestionManager as a, SimpleSearchSuggestion as b, SearchBoxWrapper as c, SearchSlimIcon as d };

//# sourceMappingURL=search-suggestion-8b51beec.js.map