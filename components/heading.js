import { h } from '@stencil/core/internal/client';

const Heading = ({ level, ...htmlProps }, children) => {
    const HeadingTag = level > 0 && level <= 6 ? `h${level}` : 'div';
    return h(HeadingTag, { ...htmlProps }, children);
};

export { Heading as H };

//# sourceMappingURL=heading.js.map