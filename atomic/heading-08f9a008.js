import { h } from './index-53978573.js';

const Heading = ({ level, ...htmlProps }, children) => {
    const HeadingTag = level > 0 && level <= 6 ? `h${level}` : 'div';
    return h(HeadingTag, { ...htmlProps }, children);
};

export { Heading as H };

//# sourceMappingURL=heading-08f9a008.js.map