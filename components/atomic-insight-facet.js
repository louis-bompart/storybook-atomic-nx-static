import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { D as Dw, I as IP, M as MP } from './headless.esm3.js';
import { A as AriaLiveRegion, F as FocusTargetController } from './accessibility-utils.js';
import { a as getFieldCaptions } from './field-utils.js';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils.js';
import { p as parseDependsOn } from './depends-on.js';
import { a as FacetContainer, F as FacetHeader } from './facet-header.js';
import { F as FacetGuard } from './facet-guard.js';
import { F as FacetPlaceholder } from './facet-placeholder.js';
import { F as FacetSearchInput, c as FacetShowMoreLess, b as FacetSearchMatches, a as announceFacetSearchResultsWithAriaLive } from './facet-show-more-less.js';
import { F as FacetSearchInputGuard, a as FacetSearchValue, b as FacetValue } from './facet-search-value.js';
import { a as shouldDisplaySearchResults } from './facet-value-label-highlight.js';
import { F as FacetValuesGroup } from './facet-values-group.js';
import { i as initializePopover } from './popover-type.js';
import { d as defineCustomElement$3 } from './atomic-component-error2.js';
import { d as defineCustomElement$2 } from './atomic-icon2.js';

const atomicInsightFacetCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type='button']),input:where([type='reset']),input:where([type='submit']){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.\\!container{width:100% !important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px !important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px !important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px !important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px !important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px !important}.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link.focus-visible.js-focus-visible,.js-focus-visible .\\!link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.link.focus-visible.js-focus-visible,.js-focus-visible .link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-error:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible.js-focus-visible,.js-focus-visible .btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-2{bottom:0.5rem}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-20{right:5rem}.right-6{right:1.5rem}.right-px{right:1px}.top-0{top:0px}.top-6{top:1.5rem}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.order-last{order:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-6{margin-left:1.5rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1{width:0.25rem}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.min-w-full{min-width:100%}.max-w-\\[15rem\\]{max-width:15rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-solid{border-style:solid}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-error{background-color:var(--atomic-error)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.line-through{text-decoration-line:line-through}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.opacity-80{opacity:0.8}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-error{outline-color:var(--atomic-error)}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible.js-focus-visible,.js-focus-visible .no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.text-bg-primary{color:var(--atomic-primary);background:var(--atomic-primary-background)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.value-count{margin-left:0.375rem;color:var(--atomic-neutral-dark)}[part='value-exclude-button']+.value-count{margin-right:0.5rem}:host(.popover-nested){min-width:18rem}:host(.popover-nested)::part(label-button){display:none}:host(.popover-nested)::part(facet){--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}:host(.popover-nested)::part(values){margin-top:0px;max-height:24rem;overflow-y:auto}:host(.popover-nested)::part(search-wrapper){margin-bottom:0.5rem}input[type='text'].focus-visible.js-focus-visible~.search-icon,.js-focus-visible input[type='text'].focus-visible~.search-icon{color:var(--atomic-primary)}input[type='text']:focus-visible~.search-icon{color:var(--atomic-primary)}input[type='text']:hover~.search-icon{color:var(--atomic-primary-light)}.search-icon atomic-icon{width:var(--atomic-facet-search-icon-size, 0.75rem);height:var(--atomic-facet-search-icon-size, 0.75rem)}.search-clear-button atomic-icon{width:var(--atomic-facet-search-clear-icon-size, 0.625rem);height:var(--atomic-facet-search-clear-icon-size, 0.625rem)}.value-checkbox{width:var(--atomic-facet-checkbox-size, 16px);height:var(--atomic-facet-checkbox-size, 16px);position:absolute;left:0.5rem;z-index:1}.value-checkbox+label{display:flex;width:100%;cursor:pointer;flex-direction:row;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:0.5rem;color:var(--atomic-on-background)}.value-checkbox+label:hover{background-color:var(--atomic-neutral-light)}.value-checkbox.selected.focus-visible.js-focus-visible+label .value-label,.js-focus-visible .value-checkbox.selected.focus-visible+label .value-label,.value-checkbox.selected:hover+label .value-label{color:var(--atomic-primary)}.value-checkbox.selected:focus-visible+label .value-label,.value-checkbox.selected:hover+label .value-label{color:var(--atomic-primary)}.value-checkbox.excluded.focus-visible.js-focus-visible+label .value-label,.js-focus-visible .value-checkbox.excluded.focus-visible+label .value-label,.value-checkbox.excluded:hover+label .value-label{color:var(--atomic-error)}.value-checkbox.excluded:focus-visible+label .value-label,.value-checkbox.excluded:hover+label .value-label{color:var(--atomic-error)}.value-exclude-button.focus-visible.js-focus-visible atomic-icon,.js-focus-visible .value-exclude-button.focus-visible atomic-icon{visibility:visible}.value-exclude-button:focus-visible atomic-icon{visibility:visible}.box-container{display:grid;padding-left:0.5rem;padding-right:0.5rem;grid-template-columns:repeat(var(--atomic-facet-boxes-per-row, 4), minmax(0, 1fr));gap:var(--atomic-facet-boxes-gap, 0.5rem)}.value-box .value-label,.value-box-count{display:block;width:100%}.value-box.selected{box-shadow:0 0 0 1px var(--atomic-primary)}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-error:hover{border-color:var(--atomic-error)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-error:hover{background-color:var(--atomic-error)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:fill-white:hover{fill:#fff}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow:hover{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\\:opacity-100:focus{opacity:1}.focus-visible\\:border-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-error.focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-error:focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-error.focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-error:focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-neutral-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:visible{visibility:visible}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.peer:hover~.peer-hover\\:text-error{color:var(--atomic-error)}@media (min-width: 1024px){.desktop-only\\:mt-6{margin-top:1.5rem}.desktop-only\\:flex{display:flex}}@media not all and (min-width: 1024px){.mobile-only\\:mt-4{margin-top:1rem}.mobile-only\\:hidden{display:none}.mobile-only\\:h-10{height:2.5rem}.mobile-only\\:h-2{height:0.5rem}.mobile-only\\:h-3{height:0.75rem}.mobile-only\\:w-10{width:2.5rem}.mobile-only\\:w-2{width:0.5rem}.mobile-only\\:w-3{width:0.75rem}}";
const AtomicInsightFacetStyle0 = atomicInsightFacetCss;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicInsightFacet$1 = /*@__PURE__*/ proxyCustomElement(class AtomicInsightFacet extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.withSearch = false;
        this.dependsOn = {};
        /**
         * The non-localized label for the facet.
         */
        this.label = 'no-label';
        /**
         * The number of values to request for this facet.
         * Also determines the number of additional values to request each time more values are shown.
         */
        this.numberOfValues = 8;
        /**
         * The sort criterion to apply to the returned facet values.
         * Possible values are 'score', 'alphanumeric', 'occurrences', and 'automatic'.
         */
        this.sortCriteria = 'automatic';
        /**
         * Specifies how a result must match the selected facet values.
         * Allowed values:
         * - `atLeastOneValue`: A result will match if at least one of the corresponding facet values is selected.
         * - `allValues`: A result will match if all corresponding facet values are selected.
         */
        this.resultsMustMatch = 'atLeastOneValue';
        /**
         * Whether to display the facet values as checkboxes (multiple selection), links (single selection) or boxes (multiple selection).
         * Possible values are 'checkbox', 'link', and 'box'.
         */
        this.displayValuesAs = 'checkbox';
        /**
         * Specifies if the facet is collapsed.
         */
        this.isCollapsed = false;
        /**
         * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading over the facet, from 1 to 6.
         */
        this.headingLevel = 0;
        /**
         * Whether to exclude the parents of folded results when estimating the result count for each facet value.
         */
        this.filterFacetCount = true;
        /**
         * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
         * Note: A high injectionDepth may negatively impact the facet request performance.
         * Minimum: `0`
         * Default: `1000`
         */
        this.injectionDepth = 1000;
        /**
         * Whether to allow excluding values from the facet.
         */
        this.enableExclusion = false;
        this.facetState = undefined;
        this.searchStatusState = undefined;
        this.error = undefined;
        this.facetId = undefined;
        this.label = 'no-label';
        this.field = undefined;
        this.numberOfValues = 8;
        this.sortCriteria = 'automatic';
        this.resultsMustMatch = 'atLeastOneValue';
        this.displayValuesAs = 'checkbox';
        this.isCollapsed = false;
        this.headingLevel = 0;
        this.filterFacetCount = true;
        this.injectionDepth = 1000;
        this.enableExclusion = false;
    }
    initialize() {
        const options = {
            facetId: this.facetId,
            field: this.field,
            numberOfValues: this.numberOfValues,
            sortCriteria: this.sortCriteria,
            facetSearch: { numberOfValues: this.numberOfValues },
            filterFacetCount: this.filterFacetCount,
            injectionDepth: this.injectionDepth,
        };
        this.facet = Dw(this.bindings.engine, { options });
        this.facetId = this.facet.state.facetId;
        this.searchStatus = IP(this.bindings.engine);
        this.initAriaLive();
        this.initConditionManager();
        this.initPopover();
        this.registerFacet();
    }
    get focusTargets() {
        if (!this.showLessFocus) {
            this.showLessFocus = new FocusTargetController(this);
        }
        if (!this.showMoreFocus) {
            this.showMoreFocus = new FocusTargetController(this);
        }
        if (!this.headerFocus) {
            this.headerFocus = new FocusTargetController(this);
        }
        return {
            showLess: this.showLessFocus,
            showMore: this.showMoreFocus,
            header: this.headerFocus,
        };
    }
    disconnectedCallback() {
        var _a;
        (_a = this.facetConditionsManager) === null || _a === void 0 ? void 0 : _a.stopWatching();
    }
    render() {
        return (h(FacetGuard, { key: '00223e3bbc4da9c2b7bad71feca273f3d4136836', enabled: this.facetState.enabled, hasError: this.searchStatusState.hasError, firstSearchExecuted: this.searchStatusState.firstSearchExecuted, hasResults: this.facetState.values.length > 0 }, this.searchStatusState.firstSearchExecuted ? (h(FacetContainer, null, h(FacetHeader, { i18n: this.bindings.i18n, label: this.label, onClearFilters: () => {
                this.focusTargets.header.focusAfterSearch();
                this.facet.deselectAll();
            }, numberOfActiveValues: this.activeValues.length, isCollapsed: this.isCollapsed, headingLevel: this.headingLevel, onToggleCollapse: () => (this.isCollapsed = !this.isCollapsed), headerRef: (el) => this.focusTargets.header.setTarget(el) }), h(FacetSearchInputGuard, { canShowMoreValues: this.facetState.canShowMoreValues, numberOfDisplayedValues: this.facetState.values.length, withSearch: this.withSearch }, h(FacetSearchInput, { i18n: this.bindings.i18n, label: this.label, onChange: (value) => {
                if (value === '') {
                    this.facet.facetSearch.clear();
                    return;
                }
                this.facet.facetSearch.updateCaptions(getFieldCaptions(this.field, this.bindings.i18n));
                this.facet.facetSearch.updateText(value);
                this.facet.facetSearch.search();
            }, onClear: () => this.facet.facetSearch.clear(), query: this.facetState.facetSearch.query })), shouldDisplaySearchResults(this.facetState.facetSearch)
            ? [this.renderSearchResults(), this.renderMatches()]
            : [this.renderValues(), this.renderShowMoreLess()])) : (h(FacetPlaceholder, { numberOfValues: this.numberOfValues, isCollapsed: this.isCollapsed }))));
    }
    renderValuesContainer(children, query) {
        const classes = `mt-3 ${this.displayValuesAs === 'box' ? 'box-container' : ''}`;
        return (h(FacetValuesGroup, { i18n: this.bindings.i18n, label: this.label, query: query }, h("ul", { class: classes, part: "values" }, children)));
    }
    renderSearchResults() {
        return this.renderValuesContainer(this.facet.state.facetSearch.values.map((value) => (h(FacetSearchValue, { ...this.facetValueProps, facetCount: value.count, onExclude: () => this.facet.facetSearch.exclude(value), onSelect: () => this.facet.facetSearch.select(value), facetValue: value.rawValue }))));
    }
    renderValues() {
        return this.renderValuesContainer(this.facet.state.values.map((value, i) => {
            const shouldFocusOnShowLessAfterInteraction = i === 0;
            const shouldFocusOnShowMoreAfterInteraction = i ===
                (this.sortCriteria === 'automatic'
                    ? 0
                    : this.facetState.values.length - 1);
            return (h(FacetValue, { ...this.facetValueProps, facetCount: value.numberOfResults, onExclude: () => this.facet.toggleExclude(value), onSelect: () => this.facet.toggleSelect(value), facetValue: value.value, facetState: value.state, setRef: (btn) => {
                    var _a, _b;
                    if (shouldFocusOnShowLessAfterInteraction) {
                        (_a = this.showLessFocus) === null || _a === void 0 ? void 0 : _a.setTarget(btn);
                    }
                    if (shouldFocusOnShowMoreAfterInteraction) {
                        (_b = this.showMoreFocus) === null || _b === void 0 ? void 0 : _b.setTarget(btn);
                    }
                } }));
        }));
    }
    renderShowMoreLess() {
        return (h(FacetShowMoreLess, { label: this.label, i18n: this.bindings.i18n, onShowMore: () => {
                this.focusTargets.showMore.focusAfterSearch();
                this.facet.showMoreValues();
            }, onShowLess: () => {
                this.focusTargets.showLess.focusAfterSearch();
                this.facet.showLessValues();
            }, canShowMoreValues: this.facet.state.canShowMoreValues, canShowLessValues: this.facet.state.canShowLessValues }));
    }
    renderMatches() {
        return (h(FacetSearchMatches, { i18n: this.bindings.i18n, query: this.facet.state.facetSearch.query, numberOfMatches: this.facet.state.facetSearch.values.length, hasMoreMatches: this.facet.state.facetSearch.moreValuesAvailable }));
    }
    get activeValues() {
        return this.facet.state.values.filter(({ state }) => state !== 'idle');
    }
    get facetValueProps() {
        return {
            facetSearchQuery: this.facetState.facetSearch.query,
            displayValuesAs: this.displayValuesAs,
            enableExclusion: this.enableExclusion,
            field: this.field,
            i18n: this.bindings.i18n,
        };
    }
    initAriaLive() {
        announceFacetSearchResultsWithAriaLive(this.facet, this.label, (msg) => (this.facetSearchAriaMessage = msg), this.bindings.i18n);
    }
    initConditionManager() {
        this.facetConditionsManager = MP(this.bindings.engine, {
            facetId: this.facetId,
            conditions: parseDependsOn(this.dependsOn),
        });
    }
    initPopover() {
        initializePopover(this.host, {
            ...this.facetInfo,
            hasValues: () => !!this.facet.state.values.length,
            numberOfActiveValues: () => this.activeValues.length,
        });
    }
    get isHidden() {
        return !this.facet.state.enabled || !this.facet.state.values.length;
    }
    get facetInfo() {
        return {
            label: () => this.bindings.i18n.t(this.label),
            facetId: this.facetId,
            element: this.host,
            isHidden: () => this.isHidden,
        };
    }
    registerFacet() {
        this.bindings.store.registerFacet('facets', this.facetInfo);
    }
    get host() { return this; }
    static get style() { return AtomicInsightFacetStyle0; }
}, [1, "atomic-insight-facet", {
        "facetId": [1537, "facet-id"],
        "label": [513],
        "field": [513],
        "numberOfValues": [514, "number-of-values"],
        "sortCriteria": [513, "sort-criteria"],
        "resultsMustMatch": [513, "results-must-match"],
        "displayValuesAs": [513, "display-values-as"],
        "isCollapsed": [1540, "is-collapsed"],
        "headingLevel": [514, "heading-level"],
        "filterFacetCount": [516, "filter-facet-count"],
        "injectionDepth": [2, "injection-depth"],
        "enableExclusion": [516, "enable-exclusion"],
        "facetState": [32],
        "searchStatusState": [32],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicInsightFacet$1.prototype, "bindings", void 0);
__decorate([
    BindStateToController('facet')
], AtomicInsightFacet$1.prototype, "facetState", void 0);
__decorate([
    BindStateToController('searchStatus')
], AtomicInsightFacet$1.prototype, "searchStatusState", void 0);
__decorate([
    AriaLiveRegion('facet-search')
], AtomicInsightFacet$1.prototype, "facetSearchAriaMessage", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-insight-facet", "atomic-component-error", "atomic-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-insight-facet":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicInsightFacet$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicInsightFacet = AtomicInsightFacet$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicInsightFacet, defineCustomElement };

//# sourceMappingURL=atomic-insight-facet.js.map