'use strict';

const index = require('./index-c930d4b4.js');
const placeholders = require('./placeholders-3fdbabb6.js');
const button = require('./button-90bb3acf.js');

class ResultChildrenCommon {
    constructor(props) {
        this.props = props;
    }
    get foldedResult() {
        return this.collection || this.props.getResult();
    }
    get numberOfChildren() {
        return this.foldedResult.children.length;
    }
    get hasChildren() {
        return !!this.numberOfChildren;
    }
    get collection() {
        return this.props.getFoldedResultListState().results.find((r) => {
            return r.result.uniqueId === this.props.getResult().result.uniqueId;
        });
    }
    renderPlaceholder() {
        return (index.h(placeholders.ResultsPlaceholder, { numberOfPlaceholders: this.numberOfChildren || 2, density: this.props.getDisplayConfig().density, display: 'list', imageSize: this.props.getImageSize() || this.props.getDisplayConfig().imageSize }));
    }
    renderNoResult() {
        return (index.h("p", { part: "no-result-root", class: "no-result-root my-3" }, this.props.getBindings().i18n.t(this.props.getNoResultText())));
    }
    renderCollapseButton() {
        const collection = this.collection;
        if (!!collection.children.length && !collection.moreResultsAvailable) {
            return (index.h(button.Button, { part: "show-hide-button", class: "show-hide-button", style: "text-primary", onClick: () => {
                    if (this.props.getShowInitialChildren()) {
                        this.props
                            .getFoldedResultList()
                            .logShowMoreFoldedResults(this.foldedResult.result);
                    }
                    else {
                        this.props.getFoldedResultList().logShowLessFoldedResults();
                    }
                    this.props.toggleShowInitialChildren();
                } }, this.props
                .getBindings()
                .i18n.t(this.props.getShowInitialChildren()
                ? 'load-all-results'
                : 'collapse-results')));
        }
        return;
    }
    renderChildrenWrapper(content) {
        return (index.h("div", { part: "children-root" },
            this.hasChildren && index.h("slot", { name: "before-children" }),
            content,
            this.hasChildren && index.h("slot", { name: "after-children" })));
    }
    renderChildren(children) {
        return this.renderChildrenWrapper(children.map((child, i) => this.props.renderChild(child, i === children.length - 1)));
    }
    renderCollection() {
        var _a;
        const collection = this.collection;
        if (collection.isLoadingMoreResults) {
            return this.renderChildrenWrapper(this.renderPlaceholder());
        }
        if (!collection.moreResultsAvailable && !this.hasChildren) {
            return ((_a = this.props.getNoResultText()) === null || _a === void 0 ? void 0 : _a.trim().length)
                ? this.renderNoResult()
                : null;
        }
        if (!this.hasChildren) {
            return;
        }
        const childrenToRender = this.props.getShowInitialChildren()
            ? this.props.getInitialChildren()
            : collection.children;
        return (index.h(index.Host, null,
            this.renderCollapseButton(),
            this.renderChildren(childrenToRender)));
    }
    renderFoldedResult() {
        if (!this.hasChildren) {
            return;
        }
        return this.renderChildren(this.foldedResult.children);
    }
    componentWillRender() {
        const collection = this.collection;
        if (this.props.getInitialChildren() || !collection) {
            return;
        }
        this.props.setInitialChildren(collection.children);
    }
    render() {
        if (!this.props.getInheritTemplates() &&
            !this.props.getResultTemplateRegistered()) {
            return;
        }
        if (!this.props.getInheritTemplates() && this.props.getTemplateHasError()) {
            return index.h("slot", null);
        }
        return this.collection
            ? this.renderCollection()
            : this.renderFoldedResult();
    }
}

exports.ResultChildrenCommon = ResultChildrenCommon;

//# sourceMappingURL=result-children-common-0051fdd1.js.map