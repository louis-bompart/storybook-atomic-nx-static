import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';

const AtomicSortExpression = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = undefined;
        this.expression = undefined;
    }
    render() {
        const dropdownComponent = 'atomic-sort-dropdown';
        if (!this.host.closest(dropdownComponent)) {
            const error = new Error(`The "${this.host.nodeName.toLowerCase()}" component has to be used inside an ${dropdownComponent} element.`);
            return (h("atomic-component-error", { key: 'b5b1efef9975af7505fdda9aa6c4d72a714de779', element: this.host, error: error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicSortExpression as atomic_sort_expression };

//# sourceMappingURL=atomic-sort-expression.entry.js.map