import { g as getAtomicEnvironment } from './interface-common-ff17f213.js';

function augmentWithExternalMiddleware(event, payload, config) {
    var _a;
    if ((_a = config.analytics) === null || _a === void 0 ? void 0 : _a.analyticsClientMiddleware) {
        return config.analytics.analyticsClientMiddleware(event, payload);
    }
    return payload;
}
function augmentAnalyticsWithAtomicVersion(payload) {
    if (payload.customData) {
        payload.customData.coveoAtomicVersion = getAtomicEnvironment().version;
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
            '@coveo/atomic': ((_a = versionMatcher.exec(getAtomicEnvironment().version)) === null || _a === void 0 ? void 0 : _a[0]) || '0.0.0',
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

export { augmentWithExternalMiddleware as a, augmentAnalyticsWithAtomicVersion as b, augmentAnalyticsConfigWithDocument as c, augmentAnalyticsConfigWithAtomicVersion as d, getNextAnalyticsConfig as g };

//# sourceMappingURL=analytics-config-065b7c9c.js.map