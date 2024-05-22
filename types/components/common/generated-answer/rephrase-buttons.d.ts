import { GeneratedAnswerStyle } from '@coveo/headless';
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface RephraseButtonProps {
    answerStyle: string;
    i18n: i18n;
    onChange: (answerStyle: GeneratedAnswerStyle) => void;
}
export declare const RephraseButtons: FunctionalComponent<RephraseButtonProps>;
export {};
