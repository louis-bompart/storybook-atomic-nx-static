import { r as registerInstance, j as createEvent, h, a as Host, g as getElement } from './index-53978573.js';
import { m as sanitizeStyle, n as purify } from './utils-8200d0ae.js';
import { b as bindAnalyticsToLink } from './item-link-6991cf67.js';
import './_commonjsHelpers-1a56c7bc.js';
import './xss-utils-3bfd8d0c.js';

const atomicSmartSnippetAnswerCss = ":host{color:var(--atomic-on-background);font-size:var(--atomic-text-lg);line-height:calc(var(--atomic-text-lg) * var(--atomic-line-height-ratio))}:host .wrapper{display:flow-root}:host .wrapper .margin{margin:1rem 0}";

const AtomicSmartSnippetAnswer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '10c4e5165fdd0480414625884d6beb3a7b565531' }, this.renderStyle(), this.renderContent()));
    }
    get host() { return getElement(this); }
};
AtomicSmartSnippetAnswer.style = atomicSmartSnippetAnswerCss;

export { AtomicSmartSnippetAnswer as atomic_smart_snippet_answer };

//# sourceMappingURL=atomic-smart-snippet-answer.entry.js.map