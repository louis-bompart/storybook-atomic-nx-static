import { LogLevel } from '@coveo/headless';
import { ComponentInterface } from '../../../stencil-public-runtime';
import { HTMLStencilElement } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { InitializeEvent } from '../../../utils/initialization-utils';
import { i18nCompatibilityVersion } from '../../common/interface/i18n';
import { AnyBindings, AnyEngineType } from './bindings';
export interface BaseAtomicInterface<EngineType extends AnyEngineType> extends ComponentInterface {
    analytics: boolean;
    i18n: i18n;
    engine?: EngineType;
    languageAssetsPath: string;
    iconAssetsPath: string;
    logLevel?: LogLevel;
    language: string;
    host: HTMLStencilElement;
    bindings: AnyBindings;
    error?: Error;
    localizationCompatibilityVersion?: i18nCompatibilityVersion;
    updateIconAssetsPath(): void;
    registerFieldsToInclude?: () => void;
}
export declare const mismatchedInterfaceAndEnginePropError: (interfaceKind: 'search' | 'recommendation', configurationName: 'query pipeline' | 'search hub') => string;
export declare class CommonAtomicInterfaceHelper<Engine extends AnyEngineType> {
    private atomicInterface;
    private i18nPromise;
    private hangingComponentsInitialization;
    constructor(atomicInterface: BaseAtomicInterface<Engine>, globalVariableName: string);
    onComponentInitializing(event: InitializeEvent): void;
    onInitialization(initEngine: () => void): Promise<void>;
    onAnalyticsChange(): void;
    onLanguageChange(): void;
    engineIsCreated(engine?: Engine): engine is Engine;
    private get interfaceTagname();
    private initComponents;
}
