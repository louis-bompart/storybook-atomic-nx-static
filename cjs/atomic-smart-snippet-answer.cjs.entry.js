'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');
const utils = require('./utils-93ea935e.js');
const itemLink = require('./item-link-96e6faf5.js');
require('./_commonjsHelpers-0192c5b3.js');
require('./xss-utils-185a1c77.js');

const atomicSmartSnippetAnswerCss = ":host{color:var(--atomic-on-background);font-size:var(--atomic-text-lg);line-height:calc(var(--atomic-text-lg) * var(--atomic-line-height-ratio))}:host .wrapper{display:flow-root}:host .wrapper .margin{margin:1rem 0}";
const AtomicSmartSnippetAnswerStyle0 = atomicSmartSnippetAnswerCss;

const AtomicSmartSnippetAnswer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.answerSizeUpdated = index.createEvent(this, "answerSizeUpdated", 3);
        this.selectInlineLink = index.createEvent(this, "selectInlineLink", 3);
        this.beginDelayedSelectInlineLink = index.createEvent(this, "beginDelayedSelectInlineLink", 3);
        this.cancelPendingSelectInlineLink = index.createEvent(this, "cancelPendingSelectInlineLink", 3);
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
        return utils.sanitizeStyle(this.innerStyle);
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
        itemLink.bindAnalyticsToLink(element, {
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
        return index.h("style", { innerHTML: style });
    }
    renderContent() {
        return (index.h("div", { class: "wrapper", ref: (element) => element && this.setWrapperElement(element) }, index.h("div", { innerHTML: utils.purify.exports.sanitize(this.htmlContent, {
                USE_PROFILES: { html: true },
            }), ref: (element) => element && this.bindAnalyticsToLinks(element), part: "answer", class: "margin" })));
    }
    render() {
        return (index.h(index.Host, { key: '9823f18ed5fb92de82194e6dd5256ae5eb261c84' }, this.renderStyle(), this.renderContent()));
    }
    get host() { return index.getElement(this); }
};
AtomicSmartSnippetAnswer.style = AtomicSmartSnippetAnswerStyle0;

exports.atomic_smart_snippet_answer = AtomicSmartSnippetAnswer;

//# sourceMappingURL=atomic-smart-snippet-answer.cjs.entry.js.map