'use strict';

const index = require('./index-c930d4b4.js');

const Heading = ({ level, ...htmlProps }, children) => {
    const HeadingTag = level > 0 && level <= 6 ? `h${level}` : 'div';
    return index.h(HeadingTag, { ...htmlProps }, children);
};

exports.Heading = Heading;

//# sourceMappingURL=heading-db5d34c0.js.map