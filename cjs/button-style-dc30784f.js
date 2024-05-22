'use strict';

function getClassNameForButtonStyle(buttonStyle) {
    switch (buttonStyle) {
        case 'primary':
            return 'btn-primary';
        case 'outline-primary':
            return 'btn-outline-primary';
        case 'outline-neutral':
            return 'btn-outline-neutral';
        case 'outline-error':
            return 'btn-outline-error';
        case 'outline-bg-neutral':
            return 'btn-outline-bg-neutral';
        case 'outline-bg-error':
            return 'btn-outline-bg-error';
        case 'text-primary':
            return 'btn-text-primary';
        case 'text-neutral':
            return 'btn-text-neutral';
        case 'text-transparent':
            return 'btn-text-transparent';
        case 'square-neutral':
            return 'btn-square-neutral';
    }
}
function getRippleColorForButtonStyle(buttonStyle) {
    switch (buttonStyle) {
        case 'primary':
            return 'primary';
        case 'text-transparent':
            return 'neutral-light';
        default:
            return 'neutral';
    }
}

exports.getClassNameForButtonStyle = getClassNameForButtonStyle;
exports.getRippleColorForButtonStyle = getRippleColorForButtonStyle;

//# sourceMappingURL=button-style-dc30784f.js.map