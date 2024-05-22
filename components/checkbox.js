import { h } from '@stencil/core/internal/client';

const Tick = `<svg viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 5L4.6 7.99999L11 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

const Checkbox = (props) => {
    var _a, _b;
    const partName = (_a = props.part) !== null && _a !== void 0 ? _a : 'checkbox';
    const classNames = [
        'w-4 h-4 grid place-items-center rounded no-outline hover:border-primary-light focus-visible:border-primary-light',
    ];
    const parts = [partName];
    if (props.checked) {
        classNames.push('selected bg-primary hover:bg-primary-light focus-visible:bg-primary-light');
        parts.push(`${partName}-checked`);
    }
    else {
        classNames.push('border border-neutral-dark');
    }
    if (props.class) {
        classNames.push(props.class);
    }
    const attributes = {
        key: props.key,
        id: props.id,
        class: classNames.join(' '),
        part: parts.join(' '),
        'aria-checked': props.checked.toString(),
        'aria-label': (_b = props.ariaLabel) !== null && _b !== void 0 ? _b : props.text,
        value: props.text,
        ref: props.ref,
    };
    return (h("button", { ...attributes, role: "checkbox", onClick: () => { var _a; return (_a = props.onToggle) === null || _a === void 0 ? void 0 : _a.call(props, !props.checked); }, onMouseDown: (e) => { var _a; return (_a = props.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(props, e); } },
        h("atomic-icon", { style: { stroke: 'white' }, class: `w-3/5 ${props.checked ? 'block' : 'hidden'}`, icon: Tick, part: props.iconPart })));
};

export { Checkbox as C, Tick as T };

//# sourceMappingURL=checkbox.js.map