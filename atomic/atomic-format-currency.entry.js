import { r as registerInstance, h, g as getElement } from './index-53978573.js';
import { d as dispatchNumberFormatEvent } from './format-common-291c0e41.js';
import './event-utils-8de63ec3.js';

const AtomicFormatCurrency = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                style: 'currency',
                currency: this.currency,
            });
        };
        this.error = undefined;
        this.currency = undefined;
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
            return (h("atomic-component-error", { key: 'eaa8f36e17d6c352522a3720e21d48e3cab8e9db', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicFormatCurrency as atomic_format_currency };

//# sourceMappingURL=atomic-format-currency.entry.js.map