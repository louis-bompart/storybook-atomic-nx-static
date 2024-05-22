'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');

const RIPPLE = 'ripple';
function getAnimationDurationInMilliseconds(radiusPixels) {
    // A 318px wide button has a duration of 700ms.
    return Math.cbrt(radiusPixels) * 129.21;
}
function setPositionRelativeIfStatic(element) {
    if (getComputedStyle(element).position === 'static') {
        element.classList.add('ripple-relative');
    }
}
function createRipple(event, options) {
    var _a;
    const button = (_a = options.parent) !== null && _a !== void 0 ? _a : event.currentTarget;
    const existingRipple = button.getElementsByClassName(RIPPLE)[0];
    existingRipple && existingRipple.remove();
    button.classList.add('ripple-parent');
    setPositionRelativeIfStatic(button);
    Array.from(button.children).forEach(setPositionRelativeIfStatic);
    const ripple = document.createElement('span');
    ripple.classList.add(RIPPLE);
    ripple.style.backgroundColor = `var(--atomic-${options.color})`;
    ripple.setAttribute('part', RIPPLE);
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const animationDuration = getAnimationDurationInMilliseconds(radius);
    const { top, left } = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - (left + radius)}px`;
    ripple.style.top = `${event.clientY - (top + radius)}px`;
    ripple.style.setProperty('--animation-duration', `${animationDuration}ms`);
    button.prepend(ripple);
    cleanupAnimationOnFinish(ripple, animationDuration);
}
async function cleanupAnimationOnFinish(ripple, animationDuration) {
    eventUtils.listenOnce(ripple, 'animationend', () => {
        ripple && ripple.remove();
    });
    // Backup in case the button gets hidden or unmounted and the ripple hasn't been cleaned up.
    setTimeout(() => ripple === null || ripple === void 0 ? void 0 : ripple.remove(), animationDuration + animationDuration * 0.1);
}

exports.createRipple = createRipple;

//# sourceMappingURL=ripple-dcc2ce08.js.map