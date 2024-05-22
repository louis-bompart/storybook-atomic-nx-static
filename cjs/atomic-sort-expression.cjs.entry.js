'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c930d4b4.js');

const AtomicSortExpression = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.expression = undefined;
    }
    render() {
        const dropdownComponent = 'atomic-sort-dropdown';
        if (!this.host.closest(dropdownComponent)) {
            const error = new Error(`The "${this.host.nodeName.toLowerCase()}" component has to be used inside an ${dropdownComponent} element.`);
            return (index.h("atomic-component-error", { key: '705a2881fcd6dd03798a28cd6f5ad6b395e85330', element: this.host, error: error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_sort_expression = AtomicSortExpression;

//# sourceMappingURL=atomic-sort-expression.cjs.entry.js.map