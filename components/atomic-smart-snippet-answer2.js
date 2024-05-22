import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { w as sanitizeStyle, a as purify } from './utils.js';
import { b as bindAnalyticsToLink } from './item-link.js';

const atomicSmartSnippetAnswerCss = ":host{color:var(--atomic-on-background);font-size:var(--atomic-text-lg);line-height:calc(var(--atomic-text-lg) * var(--atomic-line-height-ratio))}:host .wrapper{display:flow-root}:host .wrapper .margin{margin:1rem 0}";
const AtomicSmartSnippetAnswerStyle0 = atomicSmartSnippetAnswerCss;

const AtomicSmartSnippetAnswer = /*@__PURE__*/ proxyCustomElement(class AtomicSmartSnippetAnswer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.answerSizeUpdated = createEvent(this, "answerSizeUpdated", 3);
        this.selectInlineLink = createEvent(this, "selectInlineLink", 3);
        this.beginDelayedSelectInlineLink = createEvent(this, "beginDelayedSelectInlineLink", 3);
        this.cancelPendingSelectInlineLink = createEvent(this, "cancelPendingSelectInlineLink", 3);
        this.isRendering = true;
        this.htmlContent = undefined;
        this.innerStyle = undefined;
    }
    componentWillRender() {
        this.isRendering = true;
    }
    componentDidRender() {
        this.isRendering = false;
        this.emitCurrentHeight();
    }
    componentDidLoad() {
        // Prevents initial transition
        setTimeout(() => {
            this.host.classList.add('loaded');
        }, 0);
    }
    connectedCallback() {
        if (this.wrapperElement && this.resizeObserver) {
            this.resizeObserver.observe(this.wrapperElement);
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    setWrapperElement(element) {
        this.wrapperElement = element;
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        this.resizeObserver = new ResizeObserver(() => this.emitCurrentHeight());
        this.resizeObserver.observe(element);
    }
    get sanitizedStyle() {
        if (!this.innerStyle) {
            return undefined;
        }
        return sanitizeStyle(this.innerStyle);
    }
    emitCurrentHeight() {
        if (this.isRendering) {
            return;
        }
        this.answerSizeUpdated.emit({ height: this.wrapperElement.scrollHeight });
    }
    bindAnalyticsToLink(element) {
        const link = {
            linkText: element.innerText,
            linkURL: element.href,
        };
        bindAnalyticsToLink(element, {
            stopPropagation: false,
            onSelect: () => this.selectInlineLink.emit(link),
            onBeginDelayedSelect: () => this.beginDelayedSelectInlineLink.emit(link),
            onCancelPendingSelect: () => this.cancelPendingSelectInlineLink.emit(link),
        });
    }
    bindAnalyticsToLinks(root) {
        Array.from(root.querySelectorAll('a')).forEach((link) => this.bindAnalyticsToLink(link));
    }
    renderStyle() {
        const style = this.sanitizedStyle;
        if (!style) {
            return;
        }
        // deepcode ignore ReactSetInnerHtml: Defined by implementer and sanitized by dompurify
        return h("style", { innerHTML: style });
    }
    renderContent() {
        return (h("div", { class: "wrapper", ref: (element) => element && this.setWrapperElement(element) }, h("div", { innerHTML: purify.exports.sanitize(this.htmlContent, {
                USE_PROFILES: { html: true },
            }), ref: (element) => element && this.bindAnalyticsToLinks(element), part: "answer", class: "margin" })));
    }
    render() {
        return (h(Host, { key: '9823f18ed5fb92de82194e6dd5256ae5eb261c84' }, this.renderStyle(), this.renderContent()));
    }
    get host() { return this; }
    static get style() { return AtomicSmartSnippetAnswerStyle0; }
}, [1, "atomic-smart-snippet-answer", {
        "htmlContent": [1, "html-content"],
        "innerStyle": [1, "inner-style"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-smart-snippet-answer"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-smart-snippet-answer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSmartSnippetAnswer);
            }
            break;
    } });
}

export { AtomicSmartSnippetAnswer as A, defineCustomElement as d };

//# sourceMappingURL=atomic-smart-snippet-answer2.js.map