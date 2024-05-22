import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { r as randomID } from './utils.js';
import { f as findSection, s as sectionSelector } from './sections.js';
import { d as defineCustomElement$2 } from './atomic-component-error2.js';

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
const AtomicInsightLayout$1 = /*@__PURE__*/ proxyCustomElement(class AtomicInsightLayout extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    get host() { return this; }
    static get watchers() { return {
        "widget": ["updateStyles"]
    }; }
}, [0, "atomic-insight-layout", {
        "widget": [1540]
    }, undefined, {
        "widget": ["updateStyles"]
    }]);
__decorate([
    InitializeBindings()
], AtomicInsightLayout$1.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-insight-layout", "atomic-component-error"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-insight-layout":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicInsightLayout$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicInsightLayout = AtomicInsightLayout$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicInsightLayout, defineCustomElement };

//# sourceMappingURL=atomic-insight-layout.js.map