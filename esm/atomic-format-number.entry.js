import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { d as dispatchNumberFormatEvent } from './format-common-291c0e41.js';
import './event-utils-8de63ec3.js';

const AtomicFormatNumber = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                minimumIntegerDigits: this.minimumIntegerDigits,
                minimumFractionDigits: this.minimumFractionDigits,
                maximumFractionDigits: this.maximumFractionDigits,
                minimumSignificantDigits: this.minimumSignificantDigits,
                maximumSignificantDigits: this.maximumSignificantDigits,
            });
        };
        this.error = undefined;
        this.minimumIntegerDigits = undefined;
        this.minimumFractionDigits = undefined;
        this.maximumFractionDigits = undefined;
        this.minimumSignificantDigits = undefined;
        this.maximumSignificantDigits = undefined;
    }
    componentWillLoad() {
        try {
            dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '52b7dc825f5f4beb7e6e018bc65b124a7d75783c', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicFormatNumber as atomic_format_number };

//# sourceMappingURL=atomic-format-number.entry.js.map