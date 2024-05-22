'use strict';

const index = require('./index-c930d4b4.js');
const replaceBreakpoint = require('./replace-breakpoint-2f99fafc.js');
const utils = require('./utils-b609c39e.js');
const button = require('./button-90bb3acf.js');

class SmartSnippetFeedbackModalCommon {
    constructor(props) {
        this.props = props;
        this.updateBreakpoints = utils.once(() => replaceBreakpoint.updateBreakpoints(this.props.getHost()));
    }
    sendFeedback() {
        if (this.props.getCurrentAnswer() === 'other') {
            this.props
                .getSmartSnippet()
                .sendDetailedFeedback(this.props.getDetailsInputRef().value);
        }
        else {
            this.props
                .getSmartSnippet()
                .sendFeedback(this.props.getCurrentAnswer());
        }
        this.props.getFeedbackSent().emit();
        this.props.setIsOpen(false);
    }
    close() {
        this.props.setIsOpen(false);
        this.props.getSmartSnippet().closeFeedbackModal();
    }
    renderHeader() {
        return (index.h("h1", { slot: "header" }, this.props.getBindings().i18n.t('smart-snippet-feedback-explain-why')));
    }
    renderOptions() {
        const options = [
            {
                id: 'does-not-answer',
                localeKey: 'smart-snippet-feedback-reason-does-not-answer',
                correspondingAnswer: 'does_not_answer',
            },
            {
                id: 'partially-answers',
                localeKey: 'smart-snippet-feedback-reason-partially-answers',
                correspondingAnswer: 'partially_answers',
            },
            {
                id: 'was-not-a-question',
                localeKey: 'smart-snippet-feedback-reason-was-not-a-question',
                correspondingAnswer: 'was_not_a_question',
            },
            {
                id: 'other',
                localeKey: 'smart-snippet-feedback-reason-other',
                correspondingAnswer: 'other',
            },
        ];
        return (index.h("fieldset", null,
            index.h("legend", { part: "reason-title", class: "font-bold text-on-background text-lg" }, this.props
                .getBindings()
                .i18n.t('smart-snippet-feedback-select-reason')),
            options.map(({ id, localeKey, correspondingAnswer }) => (index.h("div", { class: "flex items-center", key: id, part: "reason" },
                index.h("input", { part: "reason-radio", type: "radio", name: "answer", id: id, checked: this.props.getCurrentAnswer() === correspondingAnswer, onChange: (e) => {
                        var _a;
                        return ((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.checked) &&
                            this.props.setCurrentAnswer(correspondingAnswer);
                    }, class: "mr-2 w-4 h-4", required: true }),
                index.h("label", { part: "reason-label", htmlFor: id }, this.props.getBindings().i18n.t(localeKey)))))));
    }
    renderDetails() {
        if (this.props.getCurrentAnswer() !== 'other') {
            return;
        }
        return (index.h("fieldset", null,
            index.h("legend", { part: "details-title", class: "font-bold text-on-background text-lg" }, this.props.getBindings().i18n.t('details')),
            index.h("textarea", { part: "details-input", name: "answer-details", ref: (detailsInput) => this.props.setDetailsInputRef(detailsInput), class: "mt-2 p-2 w-full text-base leading-5 border border-neutral resize-none rounded", rows: 4, required: true })));
    }
    renderBody() {
        return (index.h("form", { part: "form", id: this.props.formId, slot: "body", onSubmit: (e) => {
                e.preventDefault();
                this.sendFeedback();
            }, class: "flex flex-col gap-8" },
            this.renderOptions(),
            this.renderDetails()));
    }
    renderFooter() {
        return (index.h("div", { part: "buttons", slot: "footer", class: "flex justify-end gap-2" },
            index.h(button.Button, { part: "cancel-button", style: "outline-neutral", class: "text-primary", onClick: () => this.close() }, this.props.getBindings().i18n.t('cancel')),
            index.h(button.Button, { part: "submit-button", style: "primary", type: "submit", form: this.props.formId }, this.props.getBindings().i18n.t('feedback-send'))));
    }
    render() {
        this.updateBreakpoints();
        return (index.h("atomic-modal", { fullscreen: false, source: this.props.getSource(), container: this.props.getHost(), isOpen: this.props.getIsOpen(), close: () => this.close(), exportparts: "backdrop,container,header,header-wrapper,header-ruler,body,body-wrapper,footer,footer-wrapper,footer-wrapper" },
            this.renderHeader(),
            this.renderBody(),
            this.renderFooter()));
    }
}

exports.SmartSnippetFeedbackModalCommon = SmartSnippetFeedbackModalCommon;

//# sourceMappingURL=smart-snippet-feedback-modal-common-574f4cf6.js.map