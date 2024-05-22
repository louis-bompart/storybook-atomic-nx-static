import { h } from './index-c045ad7c.js';
import { A as ArrowDown } from './arrow-down-118cab34.js';
import { A as Arrow } from './arrow-right-6b97b365.js';
import { B as Button } from './button-a9fb1e13.js';
import { H as Heading } from './heading-686c01b3.js';
import { H as Hidden } from './initialization-utils-2f872ed1.js';

class SmartSnippetSuggestionCommon {
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
    getRelatedQuestionId(index) {
        return `${this.props.id}-${index}`;
    }
    getQuestionPart(prefix, relatedQuestion) {
        return prefix + (relatedQuestion.expanded ? '-expanded' : '-collapsed');
    }
    toggleQuestion(relatedQuestion) {
        if (relatedQuestion.expanded) {
            this.props.getQuestionsList().collapse(relatedQuestion.questionAnswerId);
        }
        else {
            this.props.getQuestionsList().expand(relatedQuestion.questionAnswerId);
        }
    }
    renderQuestion(relatedQuestion, index) {
        const headingLevel = this.props.getHeadingLevel();
        return (h(Button, { style: "text-neutral", part: this.getQuestionPart('question-button', relatedQuestion), onClick: () => this.toggleQuestion(relatedQuestion), class: "flex items-center px-4", ariaExpanded: `${relatedQuestion.expanded}`, ariaControls: this.getRelatedQuestionId(index) },
            h("atomic-icon", { icon: relatedQuestion.expanded ? ArrowDown : Arrow, part: this.getQuestionPart('question-icon', relatedQuestion), class: "w-2.5 mr-3 stroke-[1.25]" }),
            h(Heading, { level: headingLevel ? headingLevel + 1 : headingLevel, class: "text-left text-xl font-bold py-4", part: this.getQuestionPart('question-text', relatedQuestion) }, relatedQuestion.question)));
    }
    renderContent(relatedQuestion) {
        return (h("atomic-smart-snippet-answer", { exportparts: "answer", htmlContent: relatedQuestion.answer, innerStyle: this.style, onSelectInlineLink: (e) => this.props
                .getQuestionsList()
                .selectInlineLink(relatedQuestion.questionAnswerId, e.detail), onBeginDelayedSelectInlineLink: (e) => this.props
                .getQuestionsList()
                .beginDelayedSelectInlineLink(relatedQuestion.questionAnswerId, e.detail), onCancelPendingSelectInlineLink: (e) => this.props
                .getQuestionsList()
                .cancelPendingSelectInlineLink(relatedQuestion.questionAnswerId, e.detail) }));
    }
    renderSource(relatedQuestion) {
        var _a, _b;
        const { source } = relatedQuestion;
        if (!source) {
            return [];
        }
        return (h("footer", { part: "footer", "aria-label": this.props.getBindings().i18n.t('smart-snippet-source') }, h("atomic-smart-snippet-source", { source: source, anchorAttributes: (_b = (_a = this.props).getSourceAnchorAttributes) === null || _b === void 0 ? void 0 : _b.call(_a), onSelectSource: () => this.props
                .getQuestionsList()
                .selectSource(relatedQuestion.questionAnswerId), onBeginDelayedSelectSource: () => this.props
                .getQuestionsList()
                .beginDelayedSelectSource(relatedQuestion.questionAnswerId), onCancelPendingSelectSource: () => this.props
                .getQuestionsList()
                .cancelPendingSelectSource(relatedQuestion.questionAnswerId) })));
    }
    hideDuringRender(shouldHide) {
        const host = this.props.getHost();
        host.style.visibility = shouldHide ? 'hidden' : '';
        host.style.position = shouldHide ? 'absolute' : '';
    }
    renderRelatedQuestion(relatedQuestion, index) {
        return (h("li", { key: relatedQuestion.questionAnswerId, part: this.getQuestionPart('question-answer', relatedQuestion), class: "flex flex-col" },
            h("article", { class: "contents" },
                this.renderQuestion(relatedQuestion, index),
                relatedQuestion.expanded && (h("div", { part: "answer-and-source", class: "pl-10 pr-6 pb-6", id: this.getRelatedQuestionId(index) },
                    this.renderContent(relatedQuestion),
                    this.renderSource(relatedQuestion))))));
    }
    render() {
        if (!this.props.getState().questions.length) {
            return h(Hidden, null);
        }
        return (h("aside", { part: "container", class: "bg-background border border-neutral rounded-lg text-on-background overflow-hidden" },
            h(Heading, { level: this.props.getHeadingLevel(), part: "heading", class: "px-6 py-4 text-xl leading-8 border-b border-neutral" }, this.props.getBindings().i18n.t('smart-snippet-people-also-ask')),
            h("ul", { part: "questions", class: "divide-neutral divide-y" }, this.props
                .getState()
                .questions.map((relatedQuestion, i) => this.renderRelatedQuestion(relatedQuestion, i)))));
    }
}

export { SmartSnippetSuggestionCommon as S };

//# sourceMappingURL=smart-snippet-suggestions-common-1d8ef4e9.js.map