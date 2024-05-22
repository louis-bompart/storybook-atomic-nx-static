import { h } from './index-c045ad7c.js';

const Heading = ({ level, ...htmlProps }, children) => {
    const HeadingTag = level > 0 && level <= 6 ? `h${level}` : 'div';
    return h(HeadingTag, { ...htmlProps }, children);
};

export { Heading as H };

//# sourceMappingURL=heading-686c01b3.js.map