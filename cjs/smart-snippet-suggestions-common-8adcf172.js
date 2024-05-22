'use strict';

const index = require('./index-c930d4b4.js');
const arrowDown = require('./arrow-down-648c63bd.js');
const arrowRight = require('./arrow-right-104a0618.js');
const button = require('./button-90bb3acf.js');
const heading = require('./heading-db5d34c0.js');
const initializationUtils = require('./initialization-utils-f21f2efb.js');

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
    renderQuestion(relatedQuestion, index$1) {
        const headingLevel = this.props.getHeadingLevel();
        return (index.h(button.Button, { style: "text-neutral", part: this.getQuestionPart('question-button', relatedQuestion), onClick: () => this.toggleQuestion(relatedQuestion), class: "flex items-center px-4", ariaExpanded: `${relatedQuestion.expanded}`, ariaControls: this.getRelatedQuestionId(index$1) },
            index.h("atomic-icon", { icon: relatedQuestion.expanded ? arrowDown.ArrowDown : arrowRight.Arrow, part: this.getQuestionPart('question-icon', relatedQuestion), class: "w-2.5 mr-3 stroke-[1.25]" }),
            index.h(heading.Heading, { level: headingLevel ? headingLevel + 1 : headingLevel, class: "text-left text-xl font-bold py-4", part: this.getQuestionPart('question-text', relatedQuestion) }, relatedQuestion.question)));
    }
    renderContent(relatedQuestion) {
        return (index.h("atomic-smart-snippet-answer", { exportparts: "answer", htmlContent: relatedQuestion.answer, innerStyle: this.style, onSelectInlineLink: (e) => this.props
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
        return (index.h("footer", { part: "footer", "aria-label": this.props.getBindings().i18n.t('smart-snippet-source') }, index.h("atomic-smart-snippet-source", { source: source, anchorAttributes: (_b = (_a = this.props).getSourceAnchorAttributes) === null || _b === void 0 ? void 0 : _b.call(_a), onSelectSource: () => this.props
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
    renderRelatedQuestion(relatedQuestion, index$1) {
        return (index.h("li", { key: relatedQuestion.questionAnswerId, part: this.getQuestionPart('question-answer', relatedQuestion), class: "flex flex-col" },
            index.h("article", { class: "contents" },
                this.renderQuestion(relatedQuestion, index$1),
                relatedQuestion.expanded && (index.h("div", { part: "answer-and-source", class: "pl-10 pr-6 pb-6", id: this.getRelatedQuestionId(index$1) },
                    this.renderContent(relatedQuestion),
                    this.renderSource(relatedQuestion))))));
    }
    render() {
        if (!this.props.getState().questions.length) {
            return index.h(initializationUtils.Hidden, null);
        }
        return (index.h("aside", { part: "container", class: "bg-background border border-neutral rounded-lg text-on-background overflow-hidden" },
            index.h(heading.Heading, { level: this.props.getHeadingLevel(), part: "heading", class: "px-6 py-4 text-xl leading-8 border-b border-neutral" }, this.props.getBindings().i18n.t('smart-snippet-people-also-ask')),
            index.h("ul", { part: "questions", class: "divide-neutral divide-y" }, this.props
                .getState()
                .questions.map((relatedQuestion, i) => this.renderRelatedQuestion(relatedQuestion, i)))));
    }
}

exports.SmartSnippetSuggestionCommon = SmartSnippetSuggestionCommon;

//# sourceMappingURL=smart-snippet-suggestions-common-8adcf172.js.map