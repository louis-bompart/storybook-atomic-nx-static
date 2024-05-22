import { r as registerInstance, g as getElement } from './index-c045ad7c.js';
import { I as InitializeBindings } from './initialization-utils-2f872ed1.js';
import { r as randomID } from './utils-af246396.js';
import { f as findSection, s as sectionSelector } from './sections-ae00b53a.js';
import './event-utils-8de63ec3.js';
import './_commonjsHelpers-c9e3b764.js';

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
    const hasTabs = Boolean((_a = findSection(element, 'search')) === null || _a === void 0 ? void 0 : _a.querySelector(tabsSelector));
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
    const search = `${sectionSelector('search')} {
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

    ${sectionSelector('search')} ${searchBoxSelector} {
      flex-grow: 1;
    }

    ${toggleSelectors.map((toggleSelector) => `${sectionSelector('search')} ${toggleSelector} {
      flex-shrink: 0;
    }`)}

    ${sectionSelector('search')} ${tabsSelector} {
      width: 100%;
    }
    `;
    const facets = `${sectionSelector('facets')} {
      display: none;
    }
    `;
    const results = `
    ${sectionSelector('results')} {
      overflow: auto;
    }

    ${sectionSelector('results')} ${smartSnippetSelectors.join(',')} {
      padding: 1.5rem 1.5rem 0px;
    }

    ${sectionSelector('results')} ${generatedAnswerSelector} {
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
        registerInstance(this, hostRef);
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
        const id = this.host.id || randomID('atomic-insight-layout-');
        this.host.id = id;
        this.makeStyleTag();
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "widget": ["updateStyles"]
    }; }
};
__decorate([
    InitializeBindings()
], AtomicInsightLayout.prototype, "bindings", void 0);

export { AtomicInsightLayout as atomic_insight_layout };

//# sourceMappingURL=atomic-insight-layout.entry.js.map