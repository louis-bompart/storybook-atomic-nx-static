function defaultTemplate() {
    const content = document.createDocumentFragment();
    const linkEl = document.createElement('atomic-result-link');
    content.appendChild(linkEl);
    return {
        content,
        conditions: [],
    };
}
class TemplateProvider {
    constructor(props, buildManager, makeDefaultTemplate = defaultTemplate) {
        this.props = props;
        this.buildManager = buildManager;
        this.makeDefaultTemplate = makeDefaultTemplate;
        this.templateManager = this.buildManager();
        this.registerResultTemplates();
    }
    async registerResultTemplates() {
        const customTemplates = await Promise.all(this.props.templateElements.map(async (resultTemplateElement) => {
            const template = await resultTemplateElement.getTemplate();
            if (!template) {
                this.props.setTemplateHasError(true);
            }
            return template;
        }));
        const templates = (!customTemplates.length && this.props.includeDefaultTemplate
            ? [this.makeDefaultTemplate()]
            : []).concat(customTemplates.filter((template) => template));
        this.templateManager.registerTemplates(...templates);
        this.props.setResultTemplateRegistered(true);
    }
    getTemplateContent(item) {
        return this.templateManager.selectTemplate(item);
    }
    get templatesRegistered() {
        return this.props.getResultTemplateRegistered();
    }
    get hasError() {
        return this.props.getTemplateHasError();
    }
}

export { TemplateProvider as T };

//# sourceMappingURL=template-provider-818c930d.js.map