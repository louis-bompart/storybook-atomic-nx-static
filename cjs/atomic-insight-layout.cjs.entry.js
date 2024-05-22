'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const initializationUtils = require('./initialization-utils-88a3fba7.js');
const utils = require('./utils-93ea935e.js');
const sections = require('./sections-4b4af2f8.js');
require('./event-utils-9bfcf3c5.js');
require('./_commonjsHelpers-0192c5b3.js');

const tabsSelector = 'atomic-insight-tabs';
const refineModalSelector = 'atomic-insight-refine-modal';
const searchBoxSelector = 'atomic-insight-search-box';
const toggleSelectors = [
    'atomic-insight-refine-toggle',
    'atomic-insight-edit-toggle',
    'atomic-insight-history-toggle',
];
const smartSnippetSelectors = [
    'atomic-insight-smart-snippet-suggestions',
    'atomic-insight-smart-snippet',
];
const generatedAnswerSelector = 'atomic-insight-generated-answer';
function buildInsightLayout(element, widget) {
    var _a;
    const id = element.id;
    const layoutSelector = `atomic-insight-layout#${id}`;
    const hasTabs = Boolean((_a = sections.findSection(element, 'search')) === null || _a === void 0 ? void 0 : _a.querySelector(tabsSelector));
    const interfaceStyle = widget
        ? `
  ${layoutSelector} {
    display: grid;
    grid-template-rows: auto auto 8fr 1fr;
    max-height: 100%;
    box-sizing: border-box;
  }
  ${layoutSelector} ${refineModalSelector} {
    grid-row-start: 5;
  }`
        : '';
    const search = `${sections.sectionSelector('search')} {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 0.5rem;
      background: var(--atomic-neutral-light);
      padding-top: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      box-sizing: border-box;
      min-width: 0;
      ${!hasTabs ? 'padding-bottom: 1.5rem;' : ''}
    }

    ${sections.sectionSelector('search')} ${searchBoxSelector} {
      flex-grow: 1;
    }

    ${toggleSelectors.map((toggleSelector) => `${sections.sectionSelector('search')} ${toggleSelector} {
      flex-shrink: 0;
    }`)}

    ${sections.sectionSelector('search')} ${tabsSelector} {
      width: 100%;
    }
    `;
    const facets = `${sections.sectionSelector('facets')} {
      display: none;
    }
    `;
    const results = `
    ${sections.sectionSelector('results')} {
      overflow: auto;
    }

    ${sections.sectionSelector('results')} ${smartSnippetSelectors.join(',')} {
      padding: 1.5rem 1.5rem 0px;
    }

    ${sections.sectionSelector('results')} ${generatedAnswerSelector} {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    `;
    return [interfaceStyle, search, facets, results]
        .filter((declaration) => declaration !== '')
        .join('\n\n');
}

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
const AtomicInsightLayout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Whether the interface should be shown in widget format.
         */
        this.widget = false;
        this.widget = false;
    }
    updateStyles() {
        if (this.styleTag) {
            this.styleTag.innerHTML = buildInsightLayout(this.host, this.widget);
        }
        else {
            this.makeStyleTag();
        }
    }
    makeStyleTag() {
        this.styleTag = this.bindings.createStyleElement();
        this.styleTag.innerHTML = buildInsightLayout(this.host, this.widget);
        this.host.appendChild(this.styleTag);
    }
    componentDidLoad() {
        const id = this.host.id || utils.randomID('atomic-insight-layout-');
        this.host.id = id;
        this.makeStyleTag();
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "widget": ["updateStyles"]
    }; }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicInsightLayout.prototype, "bindings", void 0);

exports.atomic_insight_layout = AtomicInsightLayout;

//# sourceMappingURL=atomic-insight-layout.cjs.entry.js.map