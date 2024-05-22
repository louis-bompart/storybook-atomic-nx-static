import { h } from '@stencil/core/internal/client';
import { H as Heading } from './heading.js';
import { H as Hidden } from './initialization-utils.js';
import { B as Button } from './button.js';
import { R as RadioButton } from './radio-button.js';

const Checkmark = `<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M4 7.07692L6 9L10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const Cross = `<svg fill="none" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor" stroke-linecap="round"/><path d="M5 9L9 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const SmartSnippetFeedbackBanner = (props) => {
    const inquiryId = 'feedback-inquiry-' + props.id;
    const thankYouId = 'feedback-thank-you-' + props.id;
    const radioGroupName = 'feedback-options-' + props.id;
    const Inquiry = () => (h("span", { id: inquiryId, part: "feedback-inquiry", class: "shrink-0" }, props.i18n.t('smart-snippet-feedback-inquiry')));
    const Buttons = () => (h("div", { part: "feedback-buttons", class: "flex gap-x-4" },
        h("label", { part: "feedback-like-button", class: 'flex items-center gap-x-1.5 ' +
                (props.liked ? 'text-success' : 'cursor-pointer hover:underline') },
            h("atomic-icon", { icon: Checkmark, class: "w-3.5" }),
            h(RadioButton, { groupName: radioGroupName, text: props.i18n.t('yes'), checked: props.liked, onChecked: () => props.onLike(), class: "text-inherit cursor-inherit" })),
        h("label", { part: "feedback-dislike-button", class: 'flex items-center gap-x-1.5 ' +
                (props.disliked ? 'text-error' : 'cursor-pointer hover:underline') },
            h("atomic-icon", { icon: Cross, class: "w-3.5" }),
            h(RadioButton, { groupName: radioGroupName, text: props.i18n.t('no'), checked: props.disliked, onChecked: () => props.onDislike(), class: "text-inherit cursor-inherit" }))));
    const ThankYouMessage = () => (h("span", { id: thankYouId, part: "feedback-thank-you", class: "inline-flex" }, props.i18n.t('smart-snippet-feedback-thanks')));
    const ExplainWhyButton = () => (h(Button, { part: "feedback-explain-why-button", style: "text-primary", onClick: () => props.onPressExplainWhy(), ref: (element) => { var _a; return (_a = props.explainWhyRef) === null || _a === void 0 ? void 0 : _a.call(props, element); } }, props.i18n.t('smart-snippet-feedback-explain-why')));
    const ThankYouContainer = ({ visible }) => visible ? (h("div", { part: "feedback-thank-you-wrapper", class: "flex flex-wrap gap-1" },
        h(ThankYouMessage, null),
        props.disliked && !props.feedbackSent ? (h(ExplainWhyButton, null)) : ([]))) : ([]);
    return (h("div", { part: "feedback-banner", class: "flex flex-wrap items-center gap-4 text-sm leading-4" },
        h("div", { part: "feedback-inquiry-and-buttons", role: "radiogroup", "aria-labelledby": inquiryId, class: "inline-flex flex-wrap gap-4" },
            h(Inquiry, null),
            h(Buttons, null)),
        h(ThankYouContainer, { visible: props.liked || props.disliked })));
};

class SmartSnippetCommon {
    constructor(props) {
        this.props = props;
    }
    get style() {
        var _a;
        const styleTag = (_a = this.props
            .getHost()
            .querySelector('template')) === null || _a === void 0 ? void 0 : _a.content.querySelector('style');
        if (!styleTag) {
            return this.props.getSnippetStyle();
        }
        return styleTag.innerHTML;
    }
    loadModal() {
        if (this.props.getModalRef()) {
            return;
        }
        const modalRef = document.createElement(this.props.modalTagName);
        modalRef.addEventListener('feedbackSent', () => {
            this.props.setFeedbackSent(true);
        });
        this.props.setModalRef(modalRef);
        this.props.getHost().insertAdjacentElement('beforebegin', modalRef);
    }
    renderQuestion() {
        const headingLevel = this.props.getHeadingLevel();
        return (h(Heading, { level: headingLevel ? headingLevel + 1 : 0, class: "text-xl font-bold", part: "question" }, this.props.getSmartSnippetState().question));
    }
    canSnippetCollapse() {
        var _a, _b;
        return ((_b = (_a = this.props).getSnippetMaximumHeight) === null || _b === void 0 ? void 0 : _b.call(_a)) !== undefined;
    }
    renderContent() {
        const state = this.props.getSmartSnippetState();
        if (this.canSnippetCollapse()) {
            return (h("div", { part: "truncated-answer" },
                h("atomic-smart-snippet-answer", { exportparts: "answer", part: "body", htmlContent: state.answer, innerStyle: this.style })));
        }
        return (h("atomic-smart-snippet-expandable-answer", { exportparts: "answer,show-more-button,show-less-button,truncated-answer", part: "body", htmlContent: state.answer, expanded: state.expanded, maximumHeight: this.props.getMaximumHeight(), collapsedHeight: this.props.getCollapsedHeight(), snippetStyle: this.style, onExpand: () => this.props.getSmartSnippet().expand(), onCollapse: () => this.props.getSmartSnippet().collapse() }));
    }
    renderFeedbackBanner() {
        const state = this.props.getSmartSnippetState();
        return (h(SmartSnippetFeedbackBanner, { i18n: this.props.getBindings().i18n, id: this.props.id, liked: state.liked, disliked: state.disliked, feedbackSent: this.props.getFeedbackSent(), onLike: () => this.props.getSmartSnippet().like(), onDislike: () => {
                this.loadModal();
                this.props.getSmartSnippet().dislike();
            }, onPressExplainWhy: () => (this.props.getModalRef().isOpen = true), explainWhyRef: (button) => {
                if (this.props.getModalRef()) {
                    this.props.getModalRef().source = button;
                }
            } }));
    }
    hideDuringRender(shouldHide) {
        const host = this.props.getHost();
        host.style.visibility = shouldHide ? 'hidden' : '';
        host.style.position = shouldHide ? 'absolute' : '';
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this.props.getSmartSnippetState().answerFound) {
            return h(Hidden, null);
        }
        if (this.props.getHost().classList.contains('atomic-hidden')) {
            this.hideDuringRender(true);
        }
        const source = this.props.getSmartSnippetState().source;
        return (h("aside", null,
            h(Heading, { level: (_a = this.props.getHeadingLevel()) !== null && _a !== void 0 ? _a : 0, class: "accessibility-only" }, this.props.getBindings().i18n.t('smart-snippet')),
            h("article", { class: "bg-background border border-neutral rounded-lg p-6 pb-4 text-on-background", part: "smart-snippet" },
                h("atomic-smart-snippet-collapse-wrapper", { maximumHeight: (_c = (_b = this.props).getSnippetMaximumHeight) === null || _c === void 0 ? void 0 : _c.call(_b), collapsedHeight: (_e = (_d = this.props).getSnippetCollapsedHeight) === null || _e === void 0 ? void 0 : _e.call(_d) },
                    this.renderQuestion(),
                    this.renderContent(),
                    h("footer", { part: "footer", "aria-label": this.props
                            .getBindings()
                            .i18n.t('smart-snippet-source') },
                        source && (h("atomic-smart-snippet-source", { anchorAttributes: (_g = (_f = this.props).getSourceAnchorAttributes) === null || _g === void 0 ? void 0 : _g.call(_f), source: source, onSelectSource: this.props.getSmartSnippet().selectSource, onBeginDelayedSelectSource: this.props.getSmartSnippet().beginDelayedSelectSource, onCancelPendingSelectSource: this.props.getSmartSnippet().cancelPendingSelectSource })),
                        this.renderFeedbackBanner())))));
    }
}

export { SmartSnippetCommon as S };

//# sourceMappingURL=smart-snippet-common.js.map