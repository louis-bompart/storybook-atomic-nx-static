import { h } from '@stencil/core/internal/client';

const FieldsetGroup = ({ label }, children) => (h("fieldset", { class: "contents" },
    h("legend", { class: "accessibility-only" }, label),
    children));

export { FieldsetGroup as F };

//# sourceMappingURL=fieldset-group.js.map