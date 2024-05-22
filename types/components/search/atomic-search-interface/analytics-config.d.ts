import { AnalyticsConfiguration, SearchEngineConfiguration } from '@coveo/headless';
import { createAtomicStore } from './store';
export declare function getAnalyticsConfig(searchEngineConfig: SearchEngineConfiguration, enabled: boolean, store: ReturnType<typeof createAtomicStore>): AnalyticsConfiguration;
