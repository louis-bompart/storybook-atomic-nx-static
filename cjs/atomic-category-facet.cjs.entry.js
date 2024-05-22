'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const headless_esm = require('./headless.esm-1a66963a.js');
const accessibilityUtils = require('./accessibility-utils-d00e9462.js');
const fieldUtils = require('./field-utils-a715deca.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');
const propsUtils = require('./props-utils-e054c946.js');
const arrowLeftRounded = require('./arrow-left-rounded-87aa2218.js');
const button = require('./button-90bb3acf.js');
const facetValueLabelHighlight = require('./facet-value-label-highlight-e1da136a.js');
const facetValueLink = require('./facet-value-link-88928cce.js');
const dependsOn = require('./depends-on-653d4ed1.js');
const facetPlaceholder = require('./facet-placeholder-0c78ea0e.js');
const facetGuard = require('./facet-guard-d99f208f.js');
const facetShowMoreLess = require('./facet-show-more-less-d73a4da1.js');
const facetValuesGroup = require('./facet-values-group-d3a702ab.js');
const popoverType = require('./popover-type-555a9d8d.js');
require('./event-utils-9bfcf3c5.js');
require('./utils-b609c39e.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./bueno.esm-344292d0.js');
require('./ripple-dcc2ce08.js');
require('./button-style-dc30784f.js');
require('./string-utils-bdf08f8c.js');
require('./arrow-bottom-rounded-705a1b2c.js');
require('./arrow-top-rounded-e7a05d2f.js');
require('./close-20739950.js');
require('./heading-db5d34c0.js');
require('./search-a4774f02.js');
require('./plus-75f587b5.js');
require('./fieldset-group-6717d2e5.js');

const CategoryFacetAllCategoryButton = ({ i18n, onClick }) => {
    const allCategories = i18n.t('all-categories');
    return (index.h(button.Button, { style: "text-neutral", part: "all-categories-button", onClick: () => {
            onClick();
        } },
        index.h("atomic-icon", { "aria-hidden": "true", icon: arrowLeftRounded.ArrowLeftIcon, part: "back-arrow" }),
        index.h("span", { class: "truncate" }, allCategories)));
};

const CategoryFacetValueLink = ({ displayValue, numberOfResults, i18n, onClick, isParent, isSelected, searchQuery, isLeafValue, setRef, }, children) => {
    const partNames = [];
    if (isParent) {
        partNames.push('active-parent');
    }
    else {
        partNames.push(`value-link${isSelected ? ' value-link-selected' : ''}`);
    }
    if (isLeafValue) {
        partNames.push('leaf-value');
    }
    else {
        partNames.push('node-value');
    }
    return (index.h(facetValueLink.FacetValueLink, { displayValue: displayValue, numberOfResults: numberOfResults, isSelected: isSelected, i18n: i18n, onClick: () => {
            onClick();
        }, searchQuery: searchQuery, part: partNames.join(' '), class: "contents", buttonRef: (btn) => setRef(btn), subList: children },
        index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: displayValue, isSelected: isSelected })));
};

const CategoryFacetChildValueLink = (props, children) => {
    return (index.h(CategoryFacetValueLink, { ...props, isParent: false }, children));
};

const CategoryFacetChildrenAsTreeContainer = ({ className }, children) => {
    return (index.h("ul", { part: "values", class: className !== null && className !== void 0 ? className : '' }, children));
};

const CategoryFacetParentAsTreeContainer = ({ isTopLevel, className }, children) => {
    return (index.h("ul", { class: className !== null && className !== void 0 ? className : '', part: `${isTopLevel ? '' : 'sub-'}parents` }, children));
};

const CategoryFacetParentButton = ({ field, facetValue, i18n, onClick }) => {
    const displayValue = fieldUtils.getFieldValueCaption(field, facetValue.value, i18n);
    const ariaLabel = i18n.t('facet-value', {
        value: displayValue,
        count: facetValue.numberOfResults,
    });
    return (index.h(button.Button, { style: "text-neutral", part: "parent-button", ariaPressed: "false", onClick: () => {
            onClick();
        }, ariaLabel: ariaLabel },
        index.h("atomic-icon", { icon: arrowLeftRounded.ArrowLeftIcon, part: "back-arrow", class: "back-arrow" }),
        index.h("span", { class: "truncate" }, displayValue)));
};

const CategoryFacetParentValueLink = (props, children) => {
    return (index.h(CategoryFacetValueLink, { ...props, isParent: true, isSelected: true }, children));
};

const CategoryFacetSearchResultsContainer = (_, children) => {
    return (index.h("ul", { part: "search-results", class: "mt-3" }, children));
};

const SEPARATOR = '/';
const ELLIPSIS = '...';
const PATH_MAX_LENGTH = 3;
const CategoryFacetSearchValue = ({ value, field, i18n, onClick, searchQuery }) => {
    const count = value.count.toLocaleString(i18n.language);
    const inLabel = i18n.t('in');
    const allCategories = i18n.t('all-categories');
    const localizedPath = value.path.length
        ? value.path.map((value) => fieldUtils.getFieldValueCaption(field, value, i18n))
        : [allCategories];
    const ariaLabel = i18n.t('under', {
        child: i18n.t('facet-value', {
            numberOfResults: value.count,
            value: value.displayValue,
        }),
        parent: localizedPath.join(', '),
    });
    function ellipsedPath(path) {
        if (path.length <= PATH_MAX_LENGTH) {
            return path;
        }
        const firstPart = path.slice(0, 1);
        const lastParts = path.slice(-PATH_MAX_LENGTH + 1);
        return firstPart.concat(ELLIPSIS, ...lastParts);
    }
    function renderPath(path) {
        if (!path.length) {
            return index.h("span", { class: "truncate" }, `${inLabel} ${allCategories}`);
        }
        return [
            index.h("span", { class: "mr-0.5" }, inLabel),
            ellipsedPath(path).map((value, index$1) => [
                index$1 > 0 && index.h("span", { class: "mx-0.5" }, SEPARATOR),
                index.h("span", { class: value === ELLIPSIS ? '' : 'truncate flex-1 max-w-max' }, value),
            ]),
        ];
    }
    return (index.h("li", { key: value.displayValue },
        index.h(button.Button, { style: "text-neutral", part: "search-result", onClick: () => onClick(), class: "w-full flex flex-col px-2 py-2.5 truncate group no-outline", "aria-label": ariaLabel },
            index.h("div", { class: "w-full flex" },
                index.h(facetValueLabelHighlight.FacetValueLabelHighlight, { displayValue: value.displayValue, isSelected: false, searchQuery: searchQuery }),
                index.h("span", { part: "value-count", class: "value-count" }, i18n.t('between-parentheses', {
                    text: count,
                }))),
            index.h("div", { part: "search-result-path", class: "flex w-full text-neutral-dark mt-1 group-focus:text-primary group-hover:text-primary" }, renderPath(localizedPath)))));
};

const CategoryFacetTreeValueContainer = (_, children) => {
    return index.h("li", { class: "contents" }, children);
};

const atomicCategoryFacetCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type='button']),input:where([type='reset']),input:where([type='submit']){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.\\!container{width:100% !important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px !important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px !important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px !important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px !important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px !important}.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link.focus-visible.js-focus-visible,.js-focus-visible .\\!link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.link.focus-visible.js-focus-visible,.js-focus-visible .link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-error:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible.js-focus-visible,.js-focus-visible .btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-2{bottom:0.5rem}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-20{right:5rem}.right-6{right:1.5rem}.right-px{right:1px}.top-0{top:0px}.top-6{top:1.5rem}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.order-last{order:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-6{margin-left:1.5rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1{width:0.25rem}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.min-w-full{min-width:100%}.max-w-\\[15rem\\]{max-width:15rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-solid{border-style:solid}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-error{background-color:var(--atomic-error)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.line-through{text-decoration-line:line-through}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.opacity-80{opacity:0.8}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-error{outline-color:var(--atomic-error)}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible.js-focus-visible,.js-focus-visible .no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.text-bg-primary{color:var(--atomic-primary);background:var(--atomic-primary-background)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.value-count{margin-left:0.375rem;color:var(--atomic-neutral-dark)}[part='value-exclude-button']+.value-count{margin-right:0.5rem}:host(.popover-nested){min-width:18rem}:host(.popover-nested)::part(label-button){display:none}:host(.popover-nested)::part(facet){--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}:host(.popover-nested)::part(values){margin-top:0px;max-height:24rem;overflow-y:auto}:host(.popover-nested)::part(search-wrapper){margin-bottom:0.5rem}input[type='text'].focus-visible.js-focus-visible~.search-icon,.js-focus-visible input[type='text'].focus-visible~.search-icon{color:var(--atomic-primary)}input[type='text']:focus-visible~.search-icon{color:var(--atomic-primary)}input[type='text']:hover~.search-icon{color:var(--atomic-primary-light)}.search-icon atomic-icon{width:var(--atomic-facet-search-icon-size, 0.75rem);height:var(--atomic-facet-search-icon-size, 0.75rem)}.search-clear-button atomic-icon{width:var(--atomic-facet-search-clear-icon-size, 0.625rem);height:var(--atomic-facet-search-clear-icon-size, 0.625rem)}[part~='active-parent']{padding-left:2.25rem}[part~='parents'] [part~='values']{padding-left:2.25rem}[part~='all-categories-button'],[part~='parent-button']{position:relative;display:flex;width:100%;align-items:center;padding-top:0.625rem;padding-bottom:0.625rem;padding-right:0.5rem;padding-left:1.75rem;text-align:left}[part~='back-arrow']{position:absolute;left:0.25rem;height:1.25rem;width:1.25rem}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-error:hover{border-color:var(--atomic-error)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-error:hover{background-color:var(--atomic-error)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:fill-white:hover{fill:#fff}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow:hover{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\\:opacity-100:focus{opacity:1}.focus-visible\\:border-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-error.focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-error:focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-error.focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-error:focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-neutral-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:visible{visibility:visible}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.peer:hover~.peer-hover\\:text-error{color:var(--atomic-error)}@media (min-width: 1024px){.desktop-only\\:mt-6{margin-top:1.5rem}.desktop-only\\:flex{display:flex}}@media not all and (min-width: 1024px){.mobile-only\\:mt-4{margin-top:1rem}.mobile-only\\:hidden{display:none}.mobile-only\\:h-10{height:2.5rem}.mobile-only\\:h-2{height:0.5rem}.mobile-only\\:h-3{height:0.75rem}.mobile-only\\:w-10{width:2.5rem}.mobile-only\\:w-2{width:0.5rem}.mobile-only\\:w-3{width:0.75rem}}";
const AtomicCategoryFacetStyle0 = atomicCategoryFacetCss;

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
const AtomicCategoryFacet = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resultIndexToFocusOnShowMore = 0;
        /**
         * The non-localized label for the facet.
         * Used in the `atomic-breadbox` component through the bindings store.
         */
        this.label = 'no-label';
        /**
         * The number of values to request for this facet.
         * Also determines the number of additional values to request each time more values are shown.
         */
        this.numberOfValues = 8;
        /**
         * Whether this facet should contain a search box.
         *
         */
        this.withSearch = false;
        /**
         * The sort criterion to apply to the returned facet values.
         * Possible values are 'alphanumeric' and 'occurrences'.
         * For this criterion to apply to the top-layer facet values, disable
         * [facet value ordering](https://docs.coveo.com/en/l1qf4156/#facet-value-ordering)
         * in your Dynamic Navigation Experience configuration.
         */
        // TODO: add automatic (occurrences when not expanded, alphanumeric when expanded)
        this.sortCriteria = 'occurrences';
        /**
         * The character that separates values of a multi-value field.
         *
         * *Note:* If you use the [example formatting](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-category-facet/#usage-notes) for the associated multi-value field, you must set this value to `|` or the facet won't display properly.
         */
        this.delimitingCharacter = ';';
        /**
         * The base path shared by all values for the facet.
         *
         * Specify the property as an array using a JSON string representation:
         * ```html
         *  <atomic-category-facet base-path='["first value", "second value"]' ></atomic-category-facet>
         * ```
         */
        this.basePath = '[]';
        /**
         * Whether to use basePath as a filter for the results.
         */
        this.filterByBasePath = true;
        /**
         * Specifies whether the facet is collapsed. When the facet is the child of an `atomic-facet-manager` component, the facet manager controls this property.
         */
        this.isCollapsed = false;
        /**
         * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading over the facet, from 1 to 6.
         */
        this.headingLevel = 0;
        /**
         * Whether to exclude the parents of folded results when estimating the result count for each facet value.
         */
        this.filterFacetCount = true;
        /**
         * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
         * Note: A high injectionDepth may negatively impact the facet request performance.
         * Minimum: `0`
         * Default: `1000`
         */
        this.injectionDepth = 1000;
        // @Prop() public customSort?: string; TODO: KIT-753 Add customSort option for facet
        /**
         * The required facets and values for this facet to be displayed.
         * Examples:
         * ```html
         * <atomic-facet facet-id="abc" field="objecttype" ...></atomic-facet>
         *
         * <!-- To show the facet when any value is selected in the facet with id "abc": -->
         * <atomic-category-facet
         *   depends-on-abc
         *   ...
         * ></atomic-category-facet>
         *
         * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
         * <atomic-category-facet
         *   depends-on-abc="doc"
         *   ...
         * ></atomic-category-facet>
         * ```
         */
        this.dependsOn = {};
        this.facetState = undefined;
        this.searchStatusState = undefined;
        this.error = undefined;
        this.facetId = undefined;
        this.label = 'no-label';
        this.field = undefined;
        this.numberOfValues = 8;
        this.withSearch = false;
        this.sortCriteria = 'occurrences';
        this.delimitingCharacter = ';';
        this.basePath = '[]';
        this.filterByBasePath = true;
        this.isCollapsed = false;
        this.headingLevel = 0;
        this.filterFacetCount = true;
        this.injectionDepth = 1000;
        this.dependsOn = {};
    }
    initialize() {
        this.searchStatus = headless_esm.KO(this.bindings.engine);
        const options = {
            facetId: this.facetId,
            field: this.field,
            numberOfValues: this.numberOfValues,
            sortCriteria: this.sortCriteria,
            facetSearch: { numberOfValues: this.numberOfValues },
            basePath: [...this.basePath],
            delimitingCharacter: this.delimitingCharacter,
            filterByBasePath: this.filterByBasePath,
            injectionDepth: this.injectionDepth,
            filterFacetCount: this.filterFacetCount,
        };
        this.facet = headless_esm.EE(this.bindings.engine, { options });
        facetShowMoreLess.announceFacetSearchResultsWithAriaLive(this.facet, this.label, (msg) => (this.facetSearchAriaMessage = msg), this.bindings.i18n);
        this.facetId = this.facet.state.facetId;
        const facetInfo = {
            label: () => this.bindings.i18n.t(this.label),
            facetId: this.facetId,
            element: this.host,
            isHidden: () => this.isHidden,
        };
        this.bindings.store.registerFacet('categoryFacets', facetInfo);
        popoverType.initializePopover(this.host, {
            ...facetInfo,
            hasValues: () => !!this.facet.state.values.length,
            numberOfActiveValues: () => (this.facetState.hasActiveValues ? 1 : 0),
        });
        this.initializeDependenciesManager();
    }
    get focusTargets() {
        if (!this.showLessFocus) {
            this.showLessFocus = new accessibilityUtils.FocusTargetController(this);
        }
        if (!this.showMoreFocus) {
            this.showMoreFocus = new accessibilityUtils.FocusTargetController(this);
        }
        if (!this.headerFocus) {
            this.headerFocus = new accessibilityUtils.FocusTargetController(this);
        }
        if (!this.activeValueFocus) {
            this.activeValueFocus = new accessibilityUtils.FocusTargetController(this);
        }
        return {
            showLessFocus: this.showLessFocus,
            showMoreFocus: this.showMoreFocus,
            headerFocus: this.headerFocus,
            activeValueFocus: this.activeValueFocus,
        };
    }
    disconnectedCallback() {
        var _a;
        if (this.host.isConnected) {
            return;
        }
        (_a = this.dependenciesManager) === null || _a === void 0 ? void 0 : _a.stopWatching();
    }
    get isHidden() {
        return (this.searchStatusState.hasError ||
            !this.facet.state.enabled ||
            (!this.facet.state.values.length && !this.facet.state.parents.length));
    }
    componentShouldUpdate(next, prev, propName) {
        if (this.isCategoryFacetState(prev, propName) &&
            this.isCategoryFacetState(next, propName)) {
            return facetValueLabelHighlight.shouldUpdateFacetSearchComponent(next.facetSearch, prev.facetSearch);
        }
        return true;
    }
    get hasParents() {
        return !!this.facetState.parents.length;
    }
    initializeDependenciesManager() {
        this.dependenciesManager = headless_esm._T(this.bindings.engine, {
            facetId: this.facetId,
            conditions: dependsOn.parseDependsOn(this.dependsOn),
        });
    }
    renderHeader() {
        return (index.h(facetPlaceholder.FacetHeader, { i18n: this.bindings.i18n, label: this.label, numberOfActiveValues: this.facetState.hasActiveValues && this.isCollapsed ? 1 : 0, isCollapsed: this.isCollapsed, headingLevel: this.headingLevel, onToggleCollapse: () => (this.isCollapsed = !this.isCollapsed), onClearFilters: () => {
                this.focusTargets.headerFocus.focusAfterSearch();
                this.facet.deselectAll();
            }, headerRef: (header) => {
                this.focusTargets.headerFocus.setTarget(header);
                if (!this.hasParents) {
                    this.focusTargets.activeValueFocus.setTarget(header);
                }
            } }));
    }
    renderSearchInput() {
        if (!this.withSearch) {
            return;
        }
        return (index.h(facetShowMoreLess.FacetSearchInput, { i18n: this.bindings.i18n, label: this.label, query: this.facetState.facetSearch.query, onChange: (value) => {
                if (value === '') {
                    this.facet.facetSearch.clear();
                    return;
                }
                this.facet.facetSearch.updateCaptions(fieldUtils.getFieldCaptions(this.field, this.bindings.i18n));
                this.facet.facetSearch.updateText(value);
                this.facet.facetSearch.search();
            }, onClear: () => this.facet.facetSearch.clear() }));
    }
    renderValuesTree(parents, isRoot) {
        if (!this.hasParents) {
            return this.renderChildren();
        }
        if (isRoot) {
            return (index.h(CategoryFacetTreeValueContainer, null, index.h(CategoryFacetAllCategoryButton, { i18n: this.bindings.i18n, onClick: () => {
                    this.focusTargets.activeValueFocus.focusAfterSearch();
                    this.facet.deselectAll();
                } }), index.h(CategoryFacetParentAsTreeContainer, { isTopLevel: false }, this.renderValuesTree(parents, false))));
        }
        if (parents.length > 1) {
            const parentValue = parents[0];
            return (index.h(CategoryFacetTreeValueContainer, null, index.h(CategoryFacetParentButton, { facetValue: parentValue, field: this.field, i18n: this.bindings.i18n, onClick: () => {
                    this.focusTargets.activeValueFocus.focusAfterSearch();
                    this.facet.toggleSelect(parentValue);
                } }), index.h(CategoryFacetParentAsTreeContainer, { isTopLevel: false }, this.renderValuesTree(parents.slice(1), false))));
        }
        const activeParent = parents[0];
        const activeParentDisplayValue = fieldUtils.getFieldValueCaption(this.field, activeParent.value, this.bindings.i18n);
        return (index.h(CategoryFacetParentValueLink, { displayValue: activeParentDisplayValue, numberOfResults: activeParent.numberOfResults, i18n: this.bindings.i18n, isLeafValue: activeParent.isLeafValue, onClick: () => {
                this.focusTargets.activeValueFocus.focusAfterSearch();
                this.facet.deselectAll();
            }, searchQuery: this.facetState.facetSearch.query, setRef: (el) => this.focusTargets.activeValueFocus.setTarget(el) }, index.h(CategoryFacetChildrenAsTreeContainer, null, this.renderChildren())));
    }
    renderChild(facetValue, isShowLessFocusTarget, isShowMoreFocusTarget) {
        const displayValue = fieldUtils.getFieldValueCaption(this.field, facetValue.value, this.bindings.i18n);
        const isSelected = facetValue.state === 'selected';
        return (index.h(CategoryFacetChildValueLink, { displayValue: displayValue, i18n: this.bindings.i18n, isLeafValue: facetValue.isLeafValue, isSelected: isSelected, numberOfResults: facetValue.numberOfResults, onClick: () => {
                this.focusTargets.activeValueFocus.focusAfterSearch();
                this.facet.toggleSelect(facetValue);
            }, searchQuery: this.facetState.facetSearch.query, setRef: (element) => {
                isShowLessFocusTarget &&
                    this.focusTargets.showLessFocus.setTarget(element);
                isShowMoreFocusTarget &&
                    this.focusTargets.showMoreFocus.setTarget(element);
            } }));
    }
    renderChildren() {
        if (!this.facetState.values.length) {
            return;
        }
        return this.facetState.values.map((value, i) => this.renderChild(value, i === 0, i === this.resultIndexToFocusOnShowMore));
    }
    renderSearchResults() {
        return (index.h(CategoryFacetSearchResultsContainer, null, this.facetState.facetSearch.values.map((value) => (index.h(CategoryFacetSearchValue, { value: value, field: this.field, i18n: this.bindings.i18n, searchQuery: this.facetState.facetSearch.query, onClick: () => {
                this.focusTargets.activeValueFocus.focusAfterSearch();
                this.facet.facetSearch.select(value);
            } })))));
    }
    renderMatches() {
        return (index.h(facetShowMoreLess.FacetSearchMatches, { i18n: this.bindings.i18n, query: this.facetState.facetSearch.query, numberOfMatches: this.facetState.facetSearch.values.length, hasMoreMatches: this.facetState.facetSearch.moreValuesAvailable }));
    }
    renderShowMoreLess() {
        return (index.h("div", { class: this.hasParents ? 'pl-9' : '' }, index.h(facetShowMoreLess.FacetShowMoreLess, { label: this.label, i18n: this.bindings.i18n, onShowMore: () => {
                this.resultIndexToFocusOnShowMore = this.facetState.values.length;
                this.focusTargets.showMoreFocus.focusAfterSearch();
                this.facet.showMoreValues();
            }, onShowLess: () => {
                this.focusTargets.showLessFocus.focusAfterSearch();
                this.facet.showLessValues();
            }, canShowLessValues: this.facetState.canShowLessValues, canShowMoreValues: this.facetState.canShowMoreValues })));
    }
    isCategoryFacetState(state, propName) {
        return (propName === 'facetState' &&
            typeof (state === null || state === void 0 ? void 0 : state.facetId) === 'string');
    }
    render() {
        const { bindings: { i18n }, label, facetState: { facetSearch, enabled, valuesAsTrees, parents }, searchStatusState: { hasError, firstSearchExecuted }, } = this;
        return (index.h(facetGuard.FacetGuard, { key: '4cd1853005205b94ae4518f2659e77bf35139f0c', enabled: enabled, firstSearchExecuted: firstSearchExecuted, hasError: hasError, hasResults: valuesAsTrees.length > 0 }, firstSearchExecuted ? (index.h(facetPlaceholder.FacetContainer, null, this.renderHeader(), !this.isCollapsed && [
            this.renderSearchInput(),
            facetValueLabelHighlight.shouldDisplaySearchResults(facetSearch) ? (index.h(index.Fragment, null, facetSearch.values.length ? (index.h(facetValuesGroup.FacetValuesGroup, { i18n: i18n, label: label, query: facetSearch.query }, this.renderSearchResults())) : (index.h("div", { class: "mt-3" })), this.renderMatches())) : (index.h(index.Fragment, null, index.h(facetValuesGroup.FacetValuesGroup, { i18n: i18n, label: label }, this.hasParents ? (index.h(CategoryFacetParentAsTreeContainer, { isTopLevel: true, className: "mt-3" }, this.renderValuesTree(parents, true))) : (index.h(CategoryFacetChildrenAsTreeContainer, { className: "mt-3" }, this.renderChildren()))), this.renderShowMoreLess())),
        ])) : (index.h(facetPlaceholder.FacetPlaceholder, { isCollapsed: this.isCollapsed, numberOfValues: this.numberOfValues }))));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicCategoryFacet.prototype, "bindings", void 0);
__decorate([
    initializationUtils.BindStateToController('facet')
], AtomicCategoryFacet.prototype, "facetState", void 0);
__decorate([
    initializationUtils.BindStateToController('searchStatus')
], AtomicCategoryFacet.prototype, "searchStatusState", void 0);
__decorate([
    propsUtils.ArrayProp()
], AtomicCategoryFacet.prototype, "basePath", void 0);
__decorate([
    propsUtils.MapProp()
], AtomicCategoryFacet.prototype, "dependsOn", void 0);
__decorate([
    accessibilityUtils.AriaLiveRegion('facet-search')
], AtomicCategoryFacet.prototype, "facetSearchAriaMessage", void 0);
AtomicCategoryFacet.style = AtomicCategoryFacetStyle0;

exports.atomic_category_facet = AtomicCategoryFacet;

//# sourceMappingURL=atomic-category-facet.cjs.entry.js.map