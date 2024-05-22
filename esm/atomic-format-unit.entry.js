import { r as registerInstance, h, g as getElement } from './index-c045ad7c.js';
import { d as dispatchNumberFormatEvent } from './format-common-291c0e41.js';
import './event-utils-8de63ec3.js';

const AtomicFormatUnit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The unit formatting style to use in unit formatting.
         *
         * * "long" (e.g., 16 litres)
         * * "short" (e.g., 16 l)
         * * "narrow" (e.g., 16l)
         */
        this.unitDisplay = 'short';
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                style: 'unit',
                unit: this.unit,
                unitDisplay: this.unitDisplay,
            });
        };
        this.error = undefined;
        this.unit = undefined;
        this.unitDisplay = 'short';
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
            return (h("atomic-component-error", { key: '2c4cb7c4e8b66529f88eac6d12fe19b567b154ec', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicFormatUnit as atomic_format_unit };

//# sourceMappingURL=atomic-format-unit.entry.js.map