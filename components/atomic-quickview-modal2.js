import { h, Fragment, proxyCustomElement, HTMLElement, createEvent } from '@stencil/core/internal/client';
import { w as wk } from './headless.esm.js';
import { C as CloseIcon } from './close.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { B as Button } from './button.js';
import { I as IconButton } from './iconButton.js';
import { L as LinkWithItemAnalytics } from './item-link.js';
import { A as ArrowDown } from './arrow-bottom-rounded.js';
import { A as ArrowUp } from './arrow-top-rounded.js';
import { C as Checkbox } from './checkbox.js';
import { F as FieldsetGroup } from './fieldset-group.js';
import { d as defineCustomElement$4 } from './atomic-component-error2.js';
import { d as defineCustomElement$3 } from './atomic-focus-trap2.js';
import { d as defineCustomElement$2 } from './atomic-icon2.js';
import { d as defineCustomElement$1 } from './atomic-modal2.js';

const Add = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-label="add" role="img" style="vertical-align: text-bottom;"><circle cx="16" cy="16" r="13.5" stroke="currentColor"></circle><path d="M9 16H23M16 9V23" stroke="currentColor" stroke-linecap="round"></path></svg>`;

const MinimizeIcon = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-label="menu" role="img" style="vertical-align: text-bottom;"><line x1="6.5" y1="10.5" x2="25.5" y2="10.5" stroke="currentColor" stroke-linecap="round"></line><line x1="6.5" y1="22.5" x2="25.5" y2="22.5" stroke="currentColor" stroke-linecap="round"></line><line x1="10.5" y1="16.5" x2="21.5" y2="16.5" stroke="currentColor" stroke-linecap="round"></line></svg>`;

const Remove = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" aria-label="remove" role="img" style="vertical-align: text-bottom;"><circle cx="16" cy="16" r="13.5" stroke="currentColor"></circle><path d="M9 16H23" stroke="currentColor" stroke-linecap="round"></path></svg>`;

const identifierKeywordsSection = 'coveo-quickview-sidebar-keywords';
const QuickviewSidebar = (props) => {
    const { words, minimized } = props;
    const numberOfWords = Object.values(words).length;
    if (numberOfWords === 0) {
        return;
    }
    const minimizeButton = (h(MinimizeButton, { ...props, wordsLength: numberOfWords }));
    return (h("div", { class: "p-4 border-r border-neutral h-full" },
        minimized && minimizeButton,
        h("div", { class: "flex items-center justify-between" },
            h("div", { class: "flex items-center" },
                h(HighlightKeywordsCheckbox, { ...props })),
            !minimized && h("div", null, minimizeButton)),
        !minimized && h(Keywords, { ...props, words: words })));
};
const MinimizeButton = ({ i18n, minimized, onMinimize, highlightKeywords, wordsLength }) => (h(IconButton, { partPrefix: "sidebar-minimize", icon: MinimizeIcon, style: "text-transparent", title: i18n.t('quickview-toggle-navigation'), ariaLabel: i18n.t('quickview-toggle-navigation'), onClick: () => onMinimize(!minimized), badge: highlightKeywords && minimized ? h("slot", null, wordsLength) : undefined, class: `w-fit ${minimized ? '' : 'ml-auto'}`, ariaExpanded: (!minimized).toString(), ariaControls: identifierKeywordsSection }));
const HighlightKeywordsCheckbox = ({ i18n, highlightKeywords, onHighlightKeywords, minimized }) => (h(Fragment, null,
    h(Checkbox, { text: i18n.t('keywords-highlight'), class: "mr-2", id: "atomic-quickview-sidebar-highlight-keywords", checked: !highlightKeywords.highlightNone, onToggle: (checked) => onHighlightKeywords({
            ...highlightKeywords,
            highlightNone: !checked,
        }) }),
    !minimized && (h("label", { class: "font-bold cursor-pointer whitespace-nowrap", htmlFor: "atomic-quickview-sidebar-highlight-keywords" }, i18n.t('keywords-highlight')))));
const Keywords = ({ words, i18n, highlightKeywords, onHighlightKeywords }) => {
    return (h("div", { id: identifierKeywordsSection }, Object.values(words).map((keyword) => {
        const wordIsEnabled = !highlightKeywords.highlightNone &&
            (highlightKeywords.keywords[keyword.text] === undefined ||
                highlightKeywords.keywords[keyword.text].enabled === true);
        return (h("div", { key: keyword.text, class: "flex items-center justify-between gap-x-2 my-4 w-100" },
            h("div", { class: `flex grow items-center bg-background border border-neutral rounded-lg overflow-x-auto ${!wordIsEnabled ? 'pointer-events-none opacity-50' : ''}` },
                h("div", { class: "flex items-center grow p-4 border-r", "aria-hidden": "true" },
                    h("div", { class: "w-5 h-5 flex-none mr-2", style: { backgroundColor: keyword.color } }),
                    h("div", { class: "grow mr-2 whitespace-nowrap" }, keyword.text),
                    h("div", { class: "flex-none" },
                        "(",
                        new Intl.NumberFormat(i18n.language, {
                            notation: 'compact',
                        }).format(keyword.occurrences),
                        ")")),
                h(FieldsetGroup, { label: i18n.t('quickview-navigate-keywords', {
                        occurrences: keyword.occurrences,
                        keyword: keyword.text,
                    }) },
                    h("div", { class: "flex px-2" },
                        h(IconButton, { partPrefix: "sidebar-next", icon: ArrowDown, disabled: !wordIsEnabled, style: "text-transparent", class: "border-0", ariaLabel: i18n.t('next'), title: i18n.t('next'), onClick: () => keyword.navigateForward() }),
                        h(IconButton, { partPrefix: "sidebar-previous", icon: ArrowUp, disabled: !wordIsEnabled, style: "text-transparent", class: "border-0", ariaLabel: i18n.t('previous'), title: i18n.t('previous'), onClick: () => keyword.navigateBackward() })))),
            h(IconButton, { partPrefix: "sidebar-remove-word", class: `${highlightKeywords.highlightNone
                    ? 'pointer-events-none opacity-50'
                    : ''}`, tabIndex: highlightKeywords.highlightNone ? '-1' : '0', ariaPressed: (!wordIsEnabled).toString(), style: "text-transparent", icon: wordIsEnabled ? Remove : Add, ariaLabel: i18n.t('quickview-remove-word'), onClick: () => {
                    onHighlightKeywords({
                        ...highlightKeywords,
                        keywords: {
                            ...highlightKeywords.keywords,
                            [keyword.text]: {
                                enabled: !wordIsEnabled,
                                indexIdentifier: keyword.indexIdentifier,
                            },
                        },
                    });
                } })));
    })));
};

const documentIdentifierInIframe = 'CoveoDocIdentifier';
const writeDocument = (documentWriter, content) => {
    documentWriter.open();
    documentWriter.write(content);
    documentWriter.close();
    if (documentWriter.scrollingElement) {
        documentWriter.scrollingElement.scrollTop = 0;
    }
};
const currentResultAlreadyWrittenToDocument = (documentWriter, uniqueIdentifier) => {
    const currentDocIdentifier = documentWriter.getElementById(documentIdentifierInIframe);
    return (currentDocIdentifier &&
        currentDocIdentifier.textContent === uniqueIdentifier);
};
const ensureSameResultIsNotOverwritten = (documentWriter, uniqueIdentifier) => {
    const docIdentifier = documentWriter.createElement('div');
    docIdentifier.style.display = 'none';
    docIdentifier.setAttribute('aria-hidden', 'true');
    docIdentifier.id = documentIdentifierInIframe;
    docIdentifier.textContent = uniqueIdentifier;
    documentWriter.body.appendChild(docIdentifier);
};
const warnAboutLimitedUsageQuickview = (logger) => {
    logger === null || logger === void 0 ? void 0 : logger.warn('Quickview initialized in restricted mode due to incompatible sandboxing environment. Keywords hit navigation will be disabled.');
};
const QuickviewIframe = ({ onSetIframeRef, uniqueIdentifier, content, sandbox, src, logger }) => {
    // When a document is written with document.open/document.write/document.close
    // it is not synchronous and the content of the iframe is only available to be queried at the end of the current call stack.
    // This add a "wait" (setTimeout 0) before calling the `onSetIframeRef` from the parent modal quickview
    const waitForIframeContentToBeWritten = () => {
        return new Promise((resolve) => setTimeout(resolve));
    };
    return (h("iframe", { src: "about:blank", class: "w-full h-full", sandbox: sandbox, ref: async (el) => {
            const iframeRef = el;
            if (!uniqueIdentifier || !content) {
                return;
            }
            const documentWriter = iframeRef.contentDocument;
            if (!documentWriter) {
                if (src) {
                    warnAboutLimitedUsageQuickview(logger);
                    iframeRef.src = src;
                }
                return;
            }
            if (currentResultAlreadyWrittenToDocument(documentWriter, uniqueIdentifier)) {
                return;
            }
            writeDocument(documentWriter, content);
            ensureSameResultIsNotOverwritten(documentWriter, uniqueIdentifier);
            await waitForIframeContentToBeWritten();
            onSetIframeRef(iframeRef);
        } }));
};

const buildPreviewBar = (documentWriter) => {
    const previewBarId = 'CoveoPreviewBar';
    const bar = documentWriter.getElementById(previewBarId) ||
        documentWriter.createElement('div');
    bar.id = previewBarId;
    bar.innerHTML = '';
    bar.style.position = 'fixed';
    bar.style.top = '0';
    bar.style.right = '0';
    bar.style.width = '15px';
    bar.style.height = '100%';
    bar.setAttribute('aria-hidden', 'true');
    return bar;
};
const buildPreviewUnit = (documentWriter, word, wordElement, docHeight, highlightKeywords) => {
    var _a;
    const previewUnit = documentWriter.createElement('div');
    if (((_a = highlightKeywords.keywords[word.text]) === null || _a === void 0 ? void 0 : _a.enabled) === false) {
        previewUnit.style.display = 'none';
        return previewUnit;
    }
    const elementPosition = wordElement.getBoundingClientRect().top;
    previewUnit.style.position = 'absolute';
    previewUnit.style.top = `${(elementPosition / docHeight) * 100}%`;
    previewUnit.style.width = '100%';
    previewUnit.style.height = '1px';
    previewUnit.style.border = `1px solid ${word.previewBorderColor}`;
    previewUnit.style.backgroundColor = word.color;
    return previewUnit;
};
const buildQuickviewPreviewBar = (words, highlightKeywords, iframe) => {
    if (!iframe) {
        return;
    }
    const documentWriter = iframe.contentDocument;
    if (!documentWriter) {
        return;
    }
    const bar = buildPreviewBar(documentWriter);
    if (highlightKeywords.highlightNone) {
        bar.remove();
        return;
    }
    const docHeight = documentWriter.body.scrollHeight;
    Object.values(words).forEach((word) => {
        word.elements.forEach((wordElement) => {
            const previewUnit = buildPreviewUnit(documentWriter, word, wordElement, docHeight, highlightKeywords);
            bar.appendChild(previewUnit);
        });
    });
    documentWriter.body.appendChild(bar);
};

const rgbToHsv = (r, g, b) => {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    const v = max;
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
            default:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h, s, v };
};
const hsvToRgb = (h, s, v) => {
    let r, g, b;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            (r = v), (g = t), (b = p);
            break;
        case 1:
            (r = q), (g = v), (b = p);
            break;
        case 2:
            (r = p), (g = v), (b = t);
            break;
        case 3:
            (r = p), (g = q), (b = v);
            break;
        case 4:
            (r = t), (g = p), (b = v);
            break;
        case 5:
        default:
            (r = v), (g = p), (b = q);
            break;
    }
    return {
        r: Math.round(r),
        g: Math.round(g),
        b: Math.round(b),
    };
};

const HIGHLIGHT_PREFIX = 'CoveoHighlight';
class QuickviewWordHighlight {
    constructor(stemmingInfoFromIndex, keywordElementInIframe) {
        this.stemmingInfoFromIndex = stemmingInfoFromIndex;
        this.occurrences = 0;
        this.elements = [];
        this.currentNavigationPosition = -1;
        const parsed = this.parseKeywordIdentifier(keywordElementInIframe);
        if (!parsed) {
            throw 'Invalid keyword identifier for quickview';
        }
        this.text = this.getText(keywordElementInIframe);
        this.indexIdentifier = `${parsed.keywordIdentifier}-${this.text}`;
        this.color = keywordElementInIframe.style.backgroundColor;
        this.focusedColor = this.computeInvertedColor();
        this.previewBorderColor = this.computeSaturatedColor();
        this.addElement(keywordElementInIframe);
    }
    addElement(keywordElementInIframe) {
        this.occurrences++;
        this.elements.push(keywordElementInIframe);
    }
    navigateForward() {
        this.currentNavigationPosition++;
        if (this.currentNavigationPosition >= this.elements.length) {
            this.currentNavigationPosition = 0;
        }
        this.highlightNavigation();
        this.putElementIntoView();
        return this.elements[this.currentNavigationPosition];
    }
    navigateBackward() {
        this.currentNavigationPosition--;
        if (this.currentNavigationPosition < 0) {
            this.currentNavigationPosition = this.elements.length - 1;
        }
        this.highlightNavigation();
        this.putElementIntoView();
        return this.elements[this.currentNavigationPosition];
    }
    isTaggedWord(element) {
        return element.nodeName.toLowerCase() === 'coveotaggedword';
    }
    highlightNavigation() {
        const currentElement = this.elements[this.currentNavigationPosition];
        const otherElements = this.elements.filter((el) => el !== currentElement);
        currentElement.style.color = this.color;
        currentElement.style.backgroundColor = this.focusedColor;
        otherElements.forEach((element) => {
            element.style.color = '';
            element.style.backgroundColor = this.color;
        });
    }
    putElementIntoView() {
        const element = this.elements[this.currentNavigationPosition];
        element.scrollIntoView();
    }
    getText(element) {
        const innerTextOfHTMLElement = this.getHighlightedInnerText(element);
        return this.resolveOriginalTerm(innerTextOfHTMLElement).trim();
    }
    resolveOriginalTerm(highlight) {
        // First try to find either an exact match between the highlight and the original non-stemmed keyword.
        // Otherwise try to find a match between the highlight and the stemming keyword expansions
        // If nothing is found (which should not normally happen...), simply return the highlight keyword as is.
        const found = Object.keys(this.stemmingInfoFromIndex).find((originalTerm) => {
            const originalTermMatch = originalTerm.toLowerCase() === highlight.toLowerCase();
            if (originalTermMatch) {
                return true;
            }
            const stemmingExpansions = this.stemmingInfoFromIndex[originalTerm];
            if (!stemmingExpansions) {
                return false;
            }
            const stemmingExpansionMatch = stemmingExpansions.find((stemmingExpansion) => stemmingExpansion.toLowerCase() === highlight.toLowerCase());
            return stemmingExpansionMatch;
        });
        return found || highlight;
    }
    getHighlightedInnerText(element) {
        if (!this.isTaggedWord(element)) {
            return this.getTextOfHTMLElement(element);
        }
        const children = Array.from(element.children);
        if (children.length >= 1) {
            return this.getTextOfHTMLElement(children[0]);
        }
        return '';
    }
    parseKeywordIdentifier(element) {
        const parts = element.id
            .substring(HIGHLIGHT_PREFIX.length + 1)
            .match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/);
        if (!parts || parts.length <= 3) {
            return null;
        }
        return {
            keywordIdentifier: parts[1],
            keywordTermPart: parseInt(parts[3], 10),
        };
    }
    getTextOfHTMLElement(el) {
        return el.innerText || el.textContent || '';
    }
    computeInvertedColor() {
        const { r, g, b } = this.extractRgb();
        return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    }
    computeSaturatedColor() {
        const { r, g, b } = this.extractRgb();
        const { h, s, v } = rgbToHsv(r, g, b);
        let newSaturation = s * 2;
        if (newSaturation > 1) {
            newSaturation = 1;
        }
        const { r: rSaturated, g: gSaturated, b: bSaturated, } = hsvToRgb(h, newSaturation, v);
        return `rgb(${rSaturated}, ${gSaturated}, ${bSaturated})`;
    }
    extractRgb() {
        const rgbExtracted = this.color.match(/\d+/g);
        if (!rgbExtracted) {
            return { r: 255, g: 255, b: 255 };
        }
        return {
            r: parseInt(rgbExtracted[0], 10),
            g: parseInt(rgbExtracted[1], 10),
            b: parseInt(rgbExtracted[2], 10),
        };
    }
}
const getWordsHighlights = (stemmingInfoFromIndex, iframe) => {
    var _a;
    const wordsHighlights = {};
    if (!iframe) {
        return wordsHighlights;
    }
    (_a = iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body.querySelectorAll(`[id^="${HIGHLIGHT_PREFIX}"]`).forEach((el) => {
        const wordHTMLElementToHighlight = el;
        const wordHighlight = new QuickviewWordHighlight(stemmingInfoFromIndex, wordHTMLElementToHighlight);
        if (!wordHighlight.text) {
            return;
        }
        const alreadyScannedKeyword = wordsHighlights[wordHighlight.indexIdentifier];
        if (alreadyScannedKeyword) {
            alreadyScannedKeyword.addElement(wordHTMLElementToHighlight);
        }
        else {
            wordsHighlights[wordHighlight.indexIdentifier] = wordHighlight;
        }
    });
    return wordsHighlights;
};

const atomicQuickviewModalCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type='button']),input:where([type='reset']),input:where([type='submit']){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.\\!container{width:100% !important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px !important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px !important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px !important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px !important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px !important}.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link.focus-visible.js-focus-visible,.js-focus-visible .\\!link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.link.focus-visible.js-focus-visible,.js-focus-visible .link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-error:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible.js-focus-visible,.js-focus-visible .btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-2{bottom:0.5rem}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-20{right:5rem}.right-6{right:1.5rem}.right-px{right:1px}.top-0{top:0px}.top-6{top:1.5rem}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.order-last{order:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-6{margin-left:1.5rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1{width:0.25rem}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.min-w-full{min-width:100%}.max-w-\\[15rem\\]{max-width:15rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-solid{border-style:solid}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-error{background-color:var(--atomic-error)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.line-through{text-decoration-line:line-through}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.opacity-80{opacity:0.8}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-error{outline-color:var(--atomic-error)}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible.js-focus-visible,.js-focus-visible .no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.text-bg-primary{color:var(--atomic-primary);background:var(--atomic-primary-background)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.atomic-quickview-modal::part(backdrop){grid-template-columns:1fr max(80vw, 30rem) 1fr}.atomic-quickview-modal::part(body),.atomic-quickview-modal::part(header),.atomic-quickview-modal::part(footer){max-width:100%}.atomic-quickview-modal::part(footer){display:flex;justify-content:center}.atomic-quickview-modal::part(body-wrapper){height:100%;overflow:hidden;padding:0px}.atomic-quickview-modal::part(body){height:100%}.atomic-quickview-modal::part(backdrop){grid-template-rows:1fr 100% 3fr}.atomic-quickview-modal::part(header-wrapper){background-color:var(--atomic-neutral-light)}.atomic-quickview-modal a{color:var(--atomic-on-background)}.atomic-quickview-modal a:hover,.atomic-quickview-modal.js-focus-visible a.focus-visible,.js-focus-visible .atomic-quickview-modal a.focus-visible{text-decoration:underline;color:var(--atomic-primary)}.atomic-quickview-modal a:hover,.atomic-quickview-modal a:focus-visible{text-decoration:underline;color:var(--atomic-primary)}.atomic-quickview-modal a:focus{outline:none}.atomic-quickview-modal a:visited{color:var(--atomic-visited)}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-error:hover{border-color:var(--atomic-error)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-error:hover{background-color:var(--atomic-error)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:fill-white:hover{fill:#fff}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow:hover{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\\:opacity-100:focus{opacity:1}.focus-visible\\:border-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-error.focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-error:focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-error.focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-error:focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-neutral-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:visible{visibility:visible}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.peer:hover~.peer-hover\\:text-error{color:var(--atomic-error)}@media (min-width: 1024px){.desktop-only\\:mt-6{margin-top:1.5rem}.desktop-only\\:flex{display:flex}}@media not all and (min-width: 1024px){.mobile-only\\:mt-4{margin-top:1rem}.mobile-only\\:hidden{display:none}.mobile-only\\:h-10{height:2.5rem}.mobile-only\\:h-2{height:0.5rem}.mobile-only\\:h-3{height:0.75rem}.mobile-only\\:w-10{width:2.5rem}.mobile-only\\:w-2{width:0.5rem}.mobile-only\\:w-3{width:0.75rem}}";
const AtomicQuickviewModalStyle0 = atomicQuickviewModalCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicQuickviewModal = /*@__PURE__*/ proxyCustomElement(class AtomicQuickviewModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.nextQuickview = createEvent(this, "atomic/quickview/next", 7);
        this.previousQuickview = createEvent(this, "atomic/quickview/previous", 7);
        this.highlightKeywords = {
            highlightNone: false,
            keywords: {},
        };
        this.minimizeSidebar = false;
        this.words = {};
        this.error = undefined;
        this.highlightKeywords = {
            highlightNone: false,
            keywords: {},
        };
        this.minimizeSidebar = false;
        this.words = {};
        this.content = undefined;
        this.result = undefined;
        this.current = undefined;
        this.total = undefined;
        this.sandbox = undefined;
        this.modalCloseCallback = undefined;
    }
    watchHighlightKeywords() {
        this.handleHighlightsScripts();
    }
    componentWillRender() {
        this.minimizeSidebar = this.bindings.store.isMobile();
    }
    async reset() {
        this.highlightKeywords = {
            highlightNone: false,
            keywords: {},
        };
        this.minimizeSidebar = false;
        this.iframeRef = undefined;
        this.content = undefined;
        this.result = undefined;
        this.interactiveResult = undefined;
    }
    renderHeader() {
        var _a;
        let headerContent = null;
        if (this.result) {
            this.interactiveResult = wk(this.bindings.engine, {
                options: { result: this.result },
            });
            headerContent = (h(Fragment, null, h(LinkWithItemAnalytics, { href: (_a = this.result) === null || _a === void 0 ? void 0 : _a.clickUri, onSelect: () => { var _a; return (_a = this.interactiveResult) === null || _a === void 0 ? void 0 : _a.select(); }, onBeginDelayedSelect: () => { var _a; return (_a = this.interactiveResult) === null || _a === void 0 ? void 0 : _a.beginDelayedSelect(); }, onCancelPendingSelect: () => { var _a; return (_a = this.interactiveResult) === null || _a === void 0 ? void 0 : _a.cancelPendingSelect(); }, className: "truncate", part: "quickview-modal-header-title" }, this.result.title), h(IconButton, { partPrefix: "quickview-modal-header", icon: CloseIcon, onClick: () => this.onClose(), ariaLabel: this.bindings.i18n.t('close'), style: "text-transparent", title: this.bindings.i18n.t('close') })));
        }
        return (h("div", { slot: "header", class: "w-full flex justify-between items-center" }, headerContent));
    }
    renderBody() {
        return (h("div", { slot: "body", class: "grid grid-cols-[min-content_auto] h-full" }, h("div", { class: "h-full overflow-y-auto", style: { backgroundColor: 'var(--atomic-neutral-light)' } }, h(QuickviewSidebar, { words: this.words, i18n: this.bindings.i18n, highlightKeywords: this.highlightKeywords, onHighlightKeywords: (highlight) => (this.highlightKeywords = highlight), minimized: this.minimizeSidebar, onMinimize: (minimize) => (this.minimizeSidebar = minimize) })), h("div", { class: "overflow-auto relative" }, h(QuickviewIframe, { logger: this.logger, src: this.quickviewSrc, sandbox: this.sandbox, uniqueIdentifier: this.quickviewUniqueIdentifier, content: this.content, onSetIframeRef: async (ref) => {
                this.iframeRef = ref;
                this.words = getWordsHighlights(this.termsToHighlight, this.iframeRef);
                this.handleHighlightsScripts();
            } }), buildQuickviewPreviewBar(this.words, this.highlightKeywords, this.iframeRef))));
    }
    renderFooter() {
        return (h("div", { slot: "footer", class: "flex items-center gap-2" }, h(Button, { class: "p-2", style: "square-neutral", onClick: () => { var _a; return (_a = this.previousQuickview) === null || _a === void 0 ? void 0 : _a.emit(); }, text: this.bindings.i18n.t('quickview-previous') }), h("p", { class: "text-center" }, this.bindings.i18n.t('showing-results-of', {
            first: this.current,
            total: this.total,
        })), h(Button, { class: "p-2", style: "square-neutral", onClick: () => { var _a; return (_a = this.nextQuickview) === null || _a === void 0 ? void 0 : _a.emit(); }, text: this.bindings.i18n.t('quickview-next') })));
    }
    onClose() {
        this.content = undefined;
        this.result = undefined;
        this.modalCloseCallback && this.modalCloseCallback();
    }
    get isOpen() {
        return !!this.content && !!this.result;
    }
    get highlightScriptId() {
        return 'CoveoDisableHighlightStyle';
    }
    get logger() {
        return this.bindings.engine.logger;
    }
    get quickviewSrc() {
        var _a;
        return (_a = this.bindings.engine.state.resultPreview) === null || _a === void 0 ? void 0 : _a.contentURL;
    }
    enableHighlights() {
        this.removeDisableHighlightScript();
    }
    enableHighlightsSpecificKeyword(identifier) {
        this.removeDisableHighlightScript(identifier);
    }
    disableHighlights() {
        this.createDisableHighlightScript();
    }
    disableHighlightsSpecificKeyword(identifier) {
        this.createDisableHighlightScript(identifier);
    }
    removeDisableHighlightScript(identifier) {
        var _a, _b, _c;
        const doc = (_b = (_a = this.iframeRef) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.document;
        if (!doc) {
            return;
        }
        (_c = doc
            .getElementById(`${this.highlightScriptId}${identifier ? `:${identifier}` : ''}`)) === null || _c === void 0 ? void 0 : _c.remove();
    }
    createDisableHighlightScript(identifier) {
        var _a, _b;
        const doc = (_b = (_a = this.iframeRef) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.document;
        if (!doc) {
            return;
        }
        const head = doc.head;
        const scriptId = `${this.highlightScriptId}${identifier ? `:${identifier}` : ''}`;
        const style = doc.getElementById(scriptId) || this.bindings.createStyleElement();
        style.setAttribute('id', scriptId);
        head.appendChild(style);
        style.appendChild(doc.createTextNode(`[id^="${HIGHLIGHT_PREFIX}${identifier ? `:${identifier}` : ''}"] {
      background-color: inherit !important;
      color: inherit !important;
    }`));
    }
    get termsToHighlight() {
        const flatPhrasesToHighlight = {};
        const phrasesToHighlight = this.bindings.engine.state.search.response.phrasesToHighlight;
        Object.entries(phrasesToHighlight).forEach(([phrase, keywords]) => {
            flatPhrasesToHighlight[phrase] = Object.entries(keywords).flatMap(([keywordEntry, keywordStemming]) => {
                return [keywordEntry, ...keywordStemming];
            });
        });
        return {
            ...this.bindings.engine.state.search.response.termsToHighlight,
            ...flatPhrasesToHighlight,
        };
    }
    get requestId() {
        return this.bindings.engine.state.search.requestId;
    }
    get quickviewUniqueIdentifier() {
        var _a;
        return ((_a = this.result) === null || _a === void 0 ? void 0 : _a.uniqueId) + this.requestId;
    }
    handleHighlightsScripts() {
        if (!this.highlightKeywords.highlightNone) {
            this.enableHighlights();
        }
        else {
            this.disableHighlights();
        }
        Object.values(this.highlightKeywords.keywords).forEach((word) => {
            if (word.enabled) {
                this.enableHighlightsSpecificKeyword(word.indexIdentifier);
            }
            else {
                this.disableHighlightsSpecificKeyword(word.indexIdentifier);
            }
        });
    }
    render() {
        return (h("atomic-modal", { key: 'dc672f39c3b07e8e2ab16ee30fa4ca197853b3eb', fullscreen: this.bindings.store.isMobile(), class: 'atomic-quickview-modal', isOpen: this.isOpen, close: () => this.onClose() }, this.renderHeader(), this.renderBody(), this.renderFooter()));
    }
    static get watchers() { return {
        "highlightKeywords": ["watchHighlightKeywords"]
    }; }
    static get style() { return AtomicQuickviewModalStyle0; }
}, [1, "atomic-quickview-modal", {
        "content": [1025],
        "result": [1040],
        "current": [2],
        "total": [2],
        "sandbox": [1],
        "modalCloseCallback": [16],
        "error": [32],
        "highlightKeywords": [32],
        "minimizeSidebar": [32],
        "words": [32],
        "reset": [64]
    }, undefined, {
        "highlightKeywords": ["watchHighlightKeywords"]
    }]);
__decorate([
    InitializeBindings()
], AtomicQuickviewModal.prototype, "bindings", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-quickview-modal", "atomic-component-error", "atomic-focus-trap", "atomic-icon", "atomic-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-quickview-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicQuickviewModal);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-focus-trap":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atomic-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicQuickviewModal as A, defineCustomElement as d };

//# sourceMappingURL=atomic-quickview-modal2.js.map