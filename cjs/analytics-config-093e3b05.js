'use strict';

const interfaceCommon = require('./interface-common-0728e71b.js');

function augmentWithExternalMiddleware(event, payload, config) {
    var _a;
    if ((_a = config.analytics) === null || _a === void 0 ? void 0 : _a.analyticsClientMiddleware) {
        return config.analytics.analyticsClientMiddleware(event, payload);
    }
    return payload;
}
function augmentAnalyticsWithAtomicVersion(payload) {
    if (payload.customData) {
        payload.customData.coveoAtomicVersion = interfaceCommon.getAtomicEnvironment().version;
    }
    return payload;
}
function augmentAnalyticsConfigWithDocument() {
    return {
        documentLocation: document.location.href,
        ...(document.referrer && { originLevel3: document.referrer }),
    };
}
const versionMatcher = /^(\d+\.\d+\.\d+)/;
function augmentAnalyticsConfigWithAtomicVersion() {
    var _a;
    return {
        source: {
            '@coveo/atomic': ((_a = versionMatcher.exec(interfaceCommon.getAtomicEnvironment().version)) === null || _a === void 0 ? void 0 : _a[0]) || '0.0.0',
        },
    };
}
function getNextAnalyticsConfig(searchEngineConfig, enabled) {
    const defaultConfiguration = {
        enabled,
        documentLocation: document.location.href,
        ...(document.referrer && { originLevel3: document.referrer }),
    };
    if (searchEngineConfig.analytics) {
        return {
            ...defaultConfiguration,
            ...searchEngineConfig.analytics,
        };
    }
    return defaultConfiguration;
}

exports.augmentAnalyticsConfigWithAtomicVersion = augmentAnalyticsConfigWithAtomicVersion;
exports.augmentAnalyticsConfigWithDocument = augmentAnalyticsConfigWithDocument;
exports.augmentAnalyticsWithAtomicVersion = augmentAnalyticsWithAtomicVersion;
exports.augmentWithExternalMiddleware = augmentWithExternalMiddleware;
exports.getNextAnalyticsConfig = getNextAnalyticsConfig;

//# sourceMappingURL=analytics-config-093e3b05.js.map