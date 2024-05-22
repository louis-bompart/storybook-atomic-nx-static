function getNamedSlotFromHost(host, slotName) {
    const children = Array.from(host.children);
    const targetSlot = children.filter((child) => child.getAttribute('slot') === slotName);
    if (!targetSlot.length) {
        return;
    }
    if (targetSlot.length > 1) {
        console.warn(`Element should only have 1 slot named "${slotName}".`, host);
    }
    return targetSlot[0];
}
function getDefaultSlotFromHost(host) {
    const children = Array.from(host.children);
    const defaultSlot = children.filter((child) => !child.hasAttribute('slot') || child.getAttribute('slot') === '');
    if (!defaultSlot.length) {
        return;
    }
    if (defaultSlot.length > 1) {
        console.warn('Element should only have 1 default slot.', host);
    }
    return defaultSlot[0];
}

function getAttributesFromLinkSlot(host, slotName) {
    const attributesSlot = getNamedSlotFromHost(host, slotName);
    if (!attributesSlot) {
        return;
    }
    if (attributesSlot.nodeName !== 'A') {
        console.warn(`Slot named "${slotName}" should be an "a" tag`, attributesSlot);
        return;
    }
    return Array.from(attributesSlot.attributes).filter(({ nodeName }) => {
        if (nodeName === 'slot') {
            return false;
        }
        if (nodeName === 'href') {
            console.warn('The "href" attribute set on the "attributes" slot element will be ignored.');
            return false;
        }
        return true;
    });
}

export { getAttributesFromLinkSlot as a, getDefaultSlotFromHost as g };

//# sourceMappingURL=attributes-slot.js.map