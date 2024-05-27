import{N as p,O as m}from"./preview-Cp9OdNlu.js";import{v as g,p as b,C as w}from"./p-8e1153a0-DL2p5A5N.js";import{e as h}from"./p-53b93b76-BNupEshp.js";import{n as u}from"./p-e48090a7-An2ObuCc.js";import{m as f,p as d}from"./p-107c3d7f-lK1Nx8Nb.js";import{M as v}from"./p-8cfb9615-CRbstKRK.js";import"./p-f5723aee-KeNxIJx_.js";import"./p-0943c4bd-Erj32V3d.js";import"./iframe-vvwA9ouH.js";import"../sb-preview/runtime.js";import"./chunk-GKNNPQCW-BkHQSocK.js";import"./p-1580513b-3LX64KEr.js";import"./p-16bd4264-30RHpzwP.js";import"./p-c58ca89b-43Sc0A9C.js";import"./p-4dcb66f1-BK_B2d2p.js";import"./p-b0ede3ce-D6gWHOV3.js";import"./p-e9c4f463-BPmi-3c5.js";import"./p-b700cfe1-BMahaO31.js";import"./p-35fb03be-1N8Mcutw.js";const x=`/*
! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: var(--atomic-font-family); /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}\r
  :host {\r
    display: block;\r
    /* TODO: remove when upgrading Tailwind > v3.0.23 */\r
    --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);\r
  }\r
\r
  :host,\r
  button,\r
  input,\r
  select {
  font-family: var(--atomic-font-family);
  font-size: var(--atomic-text-base);
  font-weight: var(--atomic-font-normal);
}\r
\r
  :host(.atomic-hidden) {\r
    display: none;\r
  }

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}\r
.\\!container {
  width: 100% !important;
}\r
.container {
  width: 100%;
}\r
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}\r
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}\r
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}\r
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}\r
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}\r
.\\!link {
  color: var(--atomic-primary);
}\r
.\\!link:hover {
  color: var(--atomic-primary-light);
  text-decoration-line: underline;
}\r
.\\!link.focus-visible.js-focus-visible, .js-focus-visible .\\!link.focus-visible {
  color: var(--atomic-primary-light);
  text-decoration-line: underline;
}\r
.\\!link:focus-visible {
  color: var(--atomic-primary-light);
  text-decoration-line: underline;
}\r
.link {
  color: var(--atomic-primary);
}\r
.link:hover {
  color: var(--atomic-primary-light);
  text-decoration-line: underline;
}\r
.link.focus-visible.js-focus-visible, .js-focus-visible .link.focus-visible {
  color: var(--atomic-primary-light);
  text-decoration-line: underline;
}\r
.link:focus-visible {
  color: var(--atomic-primary-light);
  text-decoration-line: underline;
}\r
.input-primary {
  border-radius: var(--atomic-border-radius);
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
}\r
.input-primary.focus-visible.js-focus-visible, .js-focus-visible .input-primary.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.input-primary:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.input-primary:hover {
  border-color: var(--atomic-primary-light);
}\r
.input-primary.focus-visible.js-focus-visible, .js-focus-visible .input-primary.focus-visible {
  border-color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.input-primary:focus-visible {
  border-color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-radio {\r
    -webkit-appearance: none;\r
    -moz-appearance: none;\r
    appearance: none;\r
  }\r
.btn-radio::before {
  --tw-content: attr(value);
  content: var(--tw-content);
}\r
.btn-primary {
  border-radius: var(--atomic-border-radius);
  background-color: var(--atomic-primary);
  color: var(--atomic-on-primary);
}\r
.btn-primary.focus-visible.js-focus-visible, .js-focus-visible .btn-primary.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-primary:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-primary:hover {
  background-color: var(--atomic-primary-light);
}\r
.btn-primary.focus-visible.js-focus-visible, .js-focus-visible .btn-primary.focus-visible {
  background-color: var(--atomic-primary-light);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-primary:focus-visible {
  background-color: var(--atomic-primary-light);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-primary:disabled {
  cursor: not-allowed;
  background-color: var(--atomic-disabled);
}\r
.btn-outline-primary {
  border-radius: var(--atomic-border-radius);
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
  color: var(--atomic-primary);
}\r
.btn-outline-primary.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-primary.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-primary:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-primary:hover {
  border-color: var(--atomic-primary-light);
  color: var(--atomic-primary-light);
}\r
.btn-outline-primary.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-primary.focus-visible {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-primary:focus-visible {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-primary:disabled {
  cursor: not-allowed;
  border-color: var(--atomic-neutral);
  color: var(--atomic-neutral);
}\r
.btn-text-primary {
  border-radius: var(--atomic-border-radius);
  background-color: var(--atomic-background);
  color: var(--atomic-primary);
}\r
.btn-text-primary.focus-visible.js-focus-visible, .js-focus-visible .btn-text-primary.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-text-primary:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-text-primary:hover {
  background-color: var(--atomic-neutral-light);
}\r
.btn-text-primary.focus-visible.js-focus-visible, .js-focus-visible .btn-text-primary.focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-text-primary:focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-outline-neutral {
  border-radius: var(--atomic-border-radius);
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
  color: var(--atomic-on-background);
}\r
.btn-outline-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-neutral.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-neutral:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-neutral:hover {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
}\r
.btn-outline-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-neutral.focus-visible {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-neutral:focus-visible {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-neutral:disabled {
  cursor: not-allowed;
  border-color: var(--atomic-neutral);
  color: var(--atomic-on-background);
  opacity: 0.5;
}\r
.btn-outline-error {
  border-radius: var(--atomic-border-radius);
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
  color: var(--atomic-on-background);
}\r
.btn-outline-error.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-error.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-error:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-error:hover {
  border-color: var(--atomic-error);
  color: var(--atomic-error);
}\r
.btn-outline-error.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-error.focus-visible {
  border-color: var(--atomic-error);
  color: var(--atomic-error);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-error:focus-visible {
  border-color: var(--atomic-error);
  color: var(--atomic-error);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-error:disabled {
  cursor: not-allowed;
  border-color: var(--atomic-neutral);
  color: var(--atomic-on-background);
  opacity: 0.5;
}\r
.btn-outline-bg-neutral {
  border-radius: var(--atomic-border-radius);
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
  color: var(--atomic-on-background);
}\r
.btn-outline-bg-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-bg-neutral.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-bg-neutral:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-bg-neutral:hover {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
}\r
.btn-outline-bg-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-bg-neutral.focus-visible {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-bg-neutral:focus-visible {
  border-color: var(--atomic-primary);
  color: var(--atomic-primary);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-bg-neutral:disabled {
  cursor: not-allowed;
  border-color: var(--atomic-neutral);
  color: var(--atomic-on-background);
  opacity: 0.5;
}\r
.btn-outline-bg-neutral:hover {
  background-color: var(--atomic-neutral-light);
}\r
.btn-outline-bg-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-bg-neutral.focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-outline-bg-neutral:focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-outline-bg-error {
  border-radius: var(--atomic-border-radius);
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
  color: var(--atomic-on-background);
}\r
.btn-outline-bg-error.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-bg-error.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-bg-error:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-outline-bg-error:hover {
  border-color: var(--atomic-error);
  color: var(--atomic-error);
}\r
.btn-outline-bg-error.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-bg-error.focus-visible {
  border-color: var(--atomic-error);
  color: var(--atomic-error);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-bg-error:focus-visible {
  border-color: var(--atomic-error);
  color: var(--atomic-error);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.btn-outline-bg-error:disabled {
  cursor: not-allowed;
  border-color: var(--atomic-neutral);
  color: var(--atomic-on-background);
  opacity: 0.5;
}\r
.btn-outline-bg-error:hover {
  background-color: var(--atomic-neutral-light);
}\r
.btn-outline-bg-error.focus-visible.js-focus-visible, .js-focus-visible .btn-outline-bg-error.focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-outline-bg-error:focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-text-neutral {
  border-radius: var(--atomic-border-radius);
  background-color: var(--atomic-background);
  color: var(--atomic-on-background);
}\r
.btn-text-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-text-neutral.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-text-neutral:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-text-neutral:hover {
  background-color: var(--atomic-neutral-light);
  color: var(--atomic-primary);
}\r
.btn-text-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-text-neutral.focus-visible {
  background-color: var(--atomic-neutral-light);
  color: var(--atomic-primary);
}\r
.btn-text-neutral:focus-visible {
  background-color: var(--atomic-neutral-light);
  color: var(--atomic-primary);
}\r
.btn-text-transparent {
  color: var(--atomic-on-background);
}\r
.btn-text-transparent.focus-visible.js-focus-visible, .js-focus-visible .btn-text-transparent.focus-visible {
  outline-color: var(--atomic-primary-light);
}\r
.btn-text-transparent:focus-visible {
  outline-color: var(--atomic-primary-light);
}\r
.btn-text-transparent:hover {
  color: var(--atomic-primary-light);
}\r
.btn-text-transparent.focus-visible.js-focus-visible, .js-focus-visible .btn-text-transparent.focus-visible {
  color: var(--atomic-primary-light);
}\r
.btn-text-transparent:focus-visible {
  color: var(--atomic-primary-light);
}\r
.btn-square-neutral {
  border-width: 1px;
  border-color: var(--atomic-neutral);
  background-color: var(--atomic-background);
  color: var(--atomic-on-background);
}\r
.btn-square-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-square-neutral.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-square-neutral:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.btn-square-neutral:hover {
  background-color: var(--atomic-neutral-light);
}\r
.btn-square-neutral.focus-visible.js-focus-visible, .js-focus-visible .btn-square-neutral.focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-square-neutral:focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.btn-pill {
  border-radius: var(--atomic-border-radius-xl);
}\r
.btn-page {
  display: grid;
  place-items: center;
  border-width: 0px;
  font-size: var(--atomic-text-lg);
}\r
.btn-page:hover {
  border-width: 1px;
}\r
.btn-page.focus-visible.js-focus-visible, .js-focus-visible .btn-page.focus-visible {
  border-width: 1px;
}\r
.btn-page:focus-visible {
  border-width: 1px;
}\r
.btn-page.selected {
  border-width: 2px;
  border-color: var(--atomic-primary);
  font-weight: var(--atomic-font-bold);
}\r
.pointer-events-none {
  pointer-events: none;
}\r
.pointer-events-auto {
  pointer-events: auto;
}\r
.visible {
  visibility: visible;
}\r
.invisible {
  visibility: hidden;
}\r
.collapse {
  visibility: collapse;
}\r
.static {
  position: static;
}\r
.fixed {
  position: fixed;
}\r
.absolute {
  position: absolute;
}\r
.relative {
  position: relative;
}\r
.-right-2 {
  right: -0.5rem;
}\r
.-top-2 {
  top: -0.5rem;
}\r
.bottom-0 {
  bottom: 0px;
}\r
.bottom-2 {
  bottom: 0.5rem;
}\r
.bottom-px {
  bottom: 1px;
}\r
.left-0 {
  left: 0px;
}\r
.right-0 {
  right: 0px;
}\r
.right-20 {
  right: 5rem;
}\r
.right-6 {
  right: 1.5rem;
}\r
.right-px {
  right: 1px;
}\r
.top-0 {
  top: 0px;
}\r
.top-6 {
  top: 1.5rem;
}\r
.top-\\[50\\%\\] {
  top: 50%;
}\r
.top-full {
  top: 100%;
}\r
.top-px {
  top: 1px;
}\r
.z-0 {
  z-index: 0;
}\r
.z-1 {
  z-index: 1;
}\r
.z-10 {
  z-index: 10;
}\r
.z-\\[9998\\] {
  z-index: 9998;
}\r
.z-\\[9999\\] {
  z-index: 9999;
}\r
.order-last {
  order: 9999;
}\r
.col-span-2 {
  grid-column: span 2 / span 2;
}\r
.m-0 {
  margin: 0px;
}\r
.m-2 {
  margin: 0.5rem;
}\r
.-my-px {
  margin-top: -1px;
  margin-bottom: -1px;
}\r
.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}\r
.mx-0\\.5 {
  margin-left: 0.125rem;
  margin-right: 0.125rem;
}\r
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}\r
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}\r
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}\r
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}\r
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}\r
.-mr-px {
  margin-right: -1px;
}\r
.mb-0 {
  margin-bottom: 0px;
}\r
.mb-1 {
  margin-bottom: 0.25rem;
}\r
.mb-2 {
  margin-bottom: 0.5rem;
}\r
.mb-3 {
  margin-bottom: 0.75rem;
}\r
.mb-4 {
  margin-bottom: 1rem;
}\r
.mb-6 {
  margin-bottom: 1.5rem;
}\r
.ml-1 {
  margin-left: 0.25rem;
}\r
.ml-2 {
  margin-left: 0.5rem;
}\r
.ml-4 {
  margin-left: 1rem;
}\r
.ml-6 {
  margin-left: 1.5rem;
}\r
.ml-auto {
  margin-left: auto;
}\r
.mr-0 {
  margin-right: 0px;
}\r
.mr-0\\.5 {
  margin-right: 0.125rem;
}\r
.mr-1 {
  margin-right: 0.25rem;
}\r
.mr-1\\.5 {
  margin-right: 0.375rem;
}\r
.mr-2 {
  margin-right: 0.5rem;
}\r
.mr-3 {
  margin-right: 0.75rem;
}\r
.mr-6 {
  margin-right: 1.5rem;
}\r
.mt-0 {
  margin-top: 0px;
}\r
.mt-1 {
  margin-top: 0.25rem;
}\r
.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
.mt-10 {
  margin-top: 2.5rem;
}\r
.mt-2 {
  margin-top: 0.5rem;
}\r
.mt-2\\.5 {
  margin-top: 0.625rem;
}\r
.mt-3 {
  margin-top: 0.75rem;
}\r
.mt-4 {
  margin-top: 1rem;
}\r
.mt-6 {
  margin-top: 1.5rem;
}\r
.mt-7 {
  margin-top: 1.75rem;
}\r
.mt-8 {
  margin-top: 2rem;
}\r
.mt-px {
  margin-top: 1px;
}\r
.box-border {
  box-sizing: border-box;
}\r
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}\r
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}\r
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}\r
.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}\r
.line-clamp-none {
  overflow: visible;
  display: block;
  -webkit-box-orient: horizontal;
  -webkit-line-clamp: none;
}\r
.block {
  display: block;
}\r
.inline-block {
  display: inline-block;
}\r
.inline {
  display: inline;
}\r
.flex {
  display: flex;
}\r
.inline-flex {
  display: inline-flex;
}\r
.table {
  display: table;
}\r
.grid {
  display: grid;
}\r
.contents {
  display: contents;
}\r
.hidden {
  display: none;
}\r
.aspect-square {
  aspect-ratio: 1 / 1;
}\r
.h-1 {
  height: 0.25rem;
}\r
.h-10 {
  height: 2.5rem;
}\r
.h-12 {
  height: 3rem;
}\r
.h-2 {
  height: 0.5rem;
}\r
.h-2\\.5 {
  height: 0.625rem;
}\r
.h-3 {
  height: 0.75rem;
}\r
.h-4 {
  height: 1rem;
}\r
.h-5 {
  height: 1.25rem;
}\r
.h-6 {
  height: 1.5rem;
}\r
.h-7 {
  height: 1.75rem;
}\r
.h-8 {
  height: 2rem;
}\r
.h-9 {
  height: 2.25rem;
}\r
.h-\\[2\\.6rem\\] {
  height: 2.6rem;
}\r
.h-auto {
  height: auto;
}\r
.h-full {
  height: 100%;
}\r
.min-h-\\[2\\.5rem\\] {
  min-height: 2.5rem;
}\r
.min-h-\\[40px\\] {
  min-height: 40px;
}\r
.w-0 {
  width: 0px;
}\r
.w-1 {
  width: 0.25rem;
}\r
.w-1\\/2 {
  width: 50%;
}\r
.w-10 {
  width: 2.5rem;
}\r
.w-12 {
  width: 3rem;
}\r
.w-2 {
  width: 0.5rem;
}\r
.w-2\\.5 {
  width: 0.625rem;
}\r
.w-20 {
  width: 5rem;
}\r
.w-28 {
  width: 7rem;
}\r
.w-3 {
  width: 0.75rem;
}\r
.w-3\\.5 {
  width: 0.875rem;
}\r
.w-3\\/5 {
  width: 60%;
}\r
.w-32 {
  width: 8rem;
}\r
.w-4 {
  width: 1rem;
}\r
.w-44 {
  width: 11rem;
}\r
.w-48 {
  width: 12rem;
}\r
.w-5 {
  width: 1.25rem;
}\r
.w-6 {
  width: 1.5rem;
}\r
.w-60 {
  width: 15rem;
}\r
.w-7 {
  width: 1.75rem;
}\r
.w-72 {
  width: 18rem;
}\r
.w-8 {
  width: 2rem;
}\r
.w-9 {
  width: 2.25rem;
}\r
.w-\\[2\\.6rem\\] {
  width: 2.6rem;
}\r
.w-auto {
  width: auto;
}\r
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}\r
.w-full {
  width: 100%;
}\r
.w-max {
  width: -moz-max-content;
  width: max-content;
}\r
.min-w-0 {
  min-width: 0px;
}\r
.min-w-\\[2\\.5rem\\] {
  min-width: 2.5rem;
}\r
.min-w-\\[6rem\\] {
  min-width: 6rem;
}\r
.min-w-full {
  min-width: 100%;
}\r
.max-w-\\[15rem\\] {
  max-width: 15rem;
}\r
.max-w-\\[80\\%\\] {
  max-width: 80%;
}\r
.max-w-full {
  max-width: 100%;
}\r
.max-w-lg {
  max-width: 32rem;
}\r
.max-w-max {
  max-width: -moz-max-content;
  max-width: max-content;
}\r
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-none {
  flex: none;
}\r
.shrink-0 {
  flex-shrink: 0;
}\r
.flex-grow {
  flex-grow: 1;
}\r
.grow {
  flex-grow: 1;
}\r
.basis-1\\/2 {
  flex-basis: 50%;
}\r
.basis-8 {
  flex-basis: 2rem;
}\r
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.translate-x-1\\/2 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
@keyframes pulse {

  50% {
    opacity: .5;
  }
}\r
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}\r
@keyframes scaleUp {

  0% {
    transform: scale(0.7) translateY(150vh);
    opacity: 0.7;
  }

  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
  }
}\r
.animate-scaleUpModal {
  animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
}\r
@keyframes slideDown {

  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  100% {
    transform: translateY(150vh);
    opacity: 0.7;
  }
}\r
.animate-slideDownModal {
  animation: slideDown .5s linear forwards;
}\r
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
.animate-spin {
  animation: spin 1s linear infinite;
}\r
.cursor-pointer {
  cursor: pointer;
}\r
.resize-none {
  resize: none;
}\r
.list-none {
  list-style-type: none;
}\r
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
.grid-cols-\\[min-content_auto\\] {
  grid-template-columns: min-content auto;
}\r
.grid-cols-min-1fr {
  grid-template-columns: min-content 1fr;
}\r
.flex-row {
  flex-direction: row;
}\r
.flex-col {
  flex-direction: column;
}\r
.flex-wrap {
  flex-wrap: wrap;
}\r
.flex-nowrap {
  flex-wrap: nowrap;
}\r
.place-items-center {
  place-items: center;
}\r
.items-start {
  align-items: flex-start;
}\r
.items-center {
  align-items: center;
}\r
.items-baseline {
  align-items: baseline;
}\r
.justify-end {
  justify-content: flex-end;
}\r
.justify-center {
  justify-content: center;
}\r
.justify-between {
  justify-content: space-between;
}\r
.gap-0 {
  gap: 0px;
}\r
.gap-0\\.5 {
  gap: 0.125rem;
}\r
.gap-1 {
  gap: 0.25rem;
}\r
.gap-2 {
  gap: 0.5rem;
}\r
.gap-3 {
  gap: 0.75rem;
}\r
.gap-4 {
  gap: 1rem;
}\r
.gap-8 {
  gap: 2rem;
}\r
.gap-x-1 {
  -moz-column-gap: 0.25rem;
       column-gap: 0.25rem;
}\r
.gap-x-1\\.5 {
  -moz-column-gap: 0.375rem;
       column-gap: 0.375rem;
}\r
.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}\r
.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}\r
.gap-y-0 {
  row-gap: 0px;
}\r
.gap-y-0\\.5 {
  row-gap: 0.125rem;
}\r
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-x-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.375rem * var(--tw-space-x-reverse));
  margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
.divide-neutral > :not([hidden]) ~ :not([hidden]) {
  border-color: var(--atomic-neutral);
}\r
.self-start {
  align-self: flex-start;
}\r
.self-center {
  align-self: center;
}\r
.overflow-auto {
  overflow: auto;
}\r
.overflow-hidden {
  overflow: hidden;
}\r
.overflow-x-auto {
  overflow-x: auto;
}\r
.overflow-y-auto {
  overflow-y: auto;
}\r
.overflow-x-scroll {
  overflow-x: scroll;
}\r
.scroll-smooth {
  scroll-behavior: smooth;
}\r
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}\r
.whitespace-normal {
  white-space: normal;
}\r
.whitespace-nowrap {
  white-space: nowrap;
}\r
.whitespace-pre-wrap {
  white-space: pre-wrap;
}\r
.break-all {
  word-break: break-all;
}\r
.rounded {
  border-radius: var(--atomic-border-radius);
}\r
.rounded-\\[100\\%\\] {
  border-radius: 100%;
}\r
.rounded-full {
  border-radius: 9999px;
}\r
.rounded-lg {
  border-radius: var(--atomic-border-radius-lg);
}\r
.rounded-md {
  border-radius: var(--atomic-border-radius-md);
}\r
.rounded-none {
  border-radius: 0px;
}\r
.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}\r
.rounded-r-md {
  border-top-right-radius: var(--atomic-border-radius-md);
  border-bottom-right-radius: var(--atomic-border-radius-md);
}\r
.border {
  border-width: 1px;
}\r
.border-0 {
  border-width: 0px;
}\r
.border-b {
  border-bottom-width: 1px;
}\r
.border-l {
  border-left-width: 1px;
}\r
.border-r {
  border-right-width: 1px;
}\r
.border-t {
  border-top-width: 1px;
}\r
.border-solid {
  border-style: solid;
}\r
.border-neutral {
  border-color: var(--atomic-neutral);
}\r
.border-neutral-dark {
  border-color: var(--atomic-neutral-dark);
}\r
.border-primary {
  border-color: var(--atomic-primary);
}\r
.bg-\\[\\#F1F2FF\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(241 242 255 / var(--tw-bg-opacity));
}\r
.bg-background {
  background-color: var(--atomic-background);
}\r
.bg-error {
  background-color: var(--atomic-error);
}\r
.bg-neutral {
  background-color: var(--atomic-neutral);
}\r
.bg-neutral-dark {
  background-color: var(--atomic-neutral-dark);
}\r
.bg-neutral-light {
  background-color: var(--atomic-neutral-light);
}\r
.bg-primary {
  background-color: var(--atomic-primary);
}\r
.bg-transparent {
  background-color: transparent;
}\r
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
.from-background-60 {
  --tw-gradient-from: var(--atomic-background) 60% var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.fill-current {
  fill: currentColor;
}\r
.stroke-\\[1\\.25\\] {
  stroke-width: 1.25;
}\r
.p-1 {
  padding: 0.25rem;
}\r
.p-2 {
  padding: 0.5rem;
}\r
.p-2\\.5 {
  padding: 0.625rem;
}\r
.p-3 {
  padding: 0.75rem;
}\r
.p-4 {
  padding: 1rem;
}\r
.p-6 {
  padding: 1.5rem;
}\r
.p-7 {
  padding: 1.75rem;
}\r
.p-8 {
  padding: 2rem;
}\r
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
.py-3\\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}\r
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.py-\\[0\\.625rem\\] {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.pb-1 {
  padding-bottom: 0.25rem;
}\r
.pb-3 {
  padding-bottom: 0.75rem;
}\r
.pb-4 {
  padding-bottom: 1rem;
}\r
.pb-6 {
  padding-bottom: 1.5rem;
}\r
.pl-0 {
  padding-left: 0px;
}\r
.pl-1 {
  padding-left: 0.25rem;
}\r
.pl-10 {
  padding-left: 2.5rem;
}\r
.pl-3 {
  padding-left: 0.75rem;
}\r
.pl-9 {
  padding-left: 2.25rem;
}\r
.pr-2 {
  padding-right: 0.5rem;
}\r
.pr-24 {
  padding-right: 6rem;
}\r
.pr-6 {
  padding-right: 1.5rem;
}\r
.pt-0 {
  padding-top: 0px;
}\r
.pt-0\\.5 {
  padding-top: 0.125rem;
}\r
.text-left {
  text-align: left;
}\r
.text-center {
  text-align: center;
}\r
.align-baseline {
  vertical-align: baseline;
}\r
.align-middle {
  vertical-align: middle;
}\r
.align-bottom {
  vertical-align: bottom;
}\r
.text-2xl {
  font-size: var(--atomic-text-2xl);
}\r
.text-base {
  font-size: var(--atomic-text-base);
}\r
.text-lg {
  font-size: var(--atomic-text-lg);
}\r
.text-sm {
  font-size: var(--atomic-text-sm);
}\r
.text-xl {
  font-size: var(--atomic-text-xl);
}\r
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
.font-bold {
  font-weight: var(--atomic-font-bold);
}\r
.font-light {
  font-weight: 300;
}\r
.font-medium {
  font-weight: 500;
}\r
.font-normal {
  font-weight: var(--atomic-font-normal);
}\r
.font-semibold {
  font-weight: 600;
}\r
.italic {
  font-style: italic;
}\r
.leading-10 {
  line-height: 2.5rem;
}\r
.leading-4 {
  line-height: 1rem;
}\r
.leading-5 {
  line-height: 1.25rem;
}\r
.leading-6 {
  line-height: 1.5rem;
}\r
.leading-8 {
  line-height: 2rem;
}\r
.text-\\[\\#54698D\\] {
  --tw-text-opacity: 1;
  color: rgb(84 105 141 / var(--tw-text-opacity));
}\r
.text-error {
  color: var(--atomic-error);
}\r
.text-inherit {
  color: inherit;
}\r
.text-neutral {
  color: var(--atomic-neutral);
}\r
.text-neutral-dark {
  color: var(--atomic-neutral-dark);
}\r
.text-on-background {
  color: var(--atomic-on-background);
}\r
.text-on-primary {
  color: var(--atomic-on-primary);
}\r
.text-primary {
  color: var(--atomic-primary);
}\r
.text-success {
  color: var(--atomic-success);
}\r
.text-transparent {
  color: transparent;
}\r
.line-through {
  text-decoration-line: line-through;
}\r
.placeholder-neutral-dark::-moz-placeholder {
  color: var(--atomic-neutral-dark);
}\r
.placeholder-neutral-dark::placeholder {
  color: var(--atomic-neutral-dark);
}\r
.opacity-0 {
  opacity: 0;
}\r
.opacity-50 {
  opacity: 0.5;
}\r
.opacity-80 {
  opacity: 0.8;
}\r
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-inner-primary {
  --tw-shadow: inset 0 0 0 1px var(--atomic-primary);
  --tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.outline {
  outline-style: solid;
}\r
.outline-error {
  outline-color: var(--atomic-error);
}\r
.outline-neutral {
  outline-color: var(--atomic-neutral);
}\r
.outline-primary {
  outline-color: var(--atomic-primary);
}\r
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-primary {
  --tw-ring-color: var(--atomic-primary);
}\r
.ring-ring-primary {
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-visi-opacity {
  transition-property: visibility, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.duration-200 {
  transition-duration: 200ms;
}\r
.duration-300 {
  transition-duration: 300ms;
}\r
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}\r
.no-outline.focus-visible.js-focus-visible, .js-focus-visible .no-outline.focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.no-outline:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.accessibility-only {\r
    position: absolute;\r
    display: block;\r
    height: 0;\r
    overflow: hidden;\r
    margin: 0;\r
  }\r
.text-inherit {\r
    font-size: inherit;\r
  }\r
.cursor-inherit {\r
    cursor: inherit;\r
  }\r
.shadow-lg {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r
    --tw-shadow: 0px 2px 8px rgba(229, 232, 232, 0.75);
}\r
.text-bg-primary {\r
    color: var(--atomic-primary);\r
    background: var(--atomic-primary-background);\r
  }\r
/*\r
 * \`line-clamp\` isn't supported yet, but \`-webkit-line-clamp\` is supported by all major browsers.\r
 */\r
/**\r
 * aspect-ratio doesn't work on Safari prior to v15.\r
 */\r
.ripple {\r
  position: absolute;\r
  pointer-events: none;\r
  transform: scale(0);\r
  border-radius: 50%;\r
  animation: ripple var(--animation-duration) linear;\r
}\r
.ripple-relative {\r
  position: relative;\r
}\r
.ripple-parent {\r
  overflow: hidden;\r
}\r
@keyframes ripple {\r
  to {\r
    transform: scale(4);\r
    opacity: 0;\r
  }\r
}\r
/*\r
 * Sets a font size & its line height relative to it\r
 */\r
[part='generated-text'] {\r
  --font-size: var(--atomic-text-lg);\r
  font-size: var(--font-size);\r
  --line-height: calc(var(--font-size) * var(--atomic-line-height-ratio));\r
  line-height: var(--line-height);\r
}\r
[part='generated-text'].cursor::after {\r
    content: '';\r
    width: 8px;\r
    height: 1em;\r
    margin-left: 0.1em;\r
    background: var(--atomic-neutral-dark);\r
    display: inline-block;\r
    animation: cursor-blink 1.5s steps(2) infinite;\r
    vertical-align: text-bottom;\r
  }\r
[part='generated-text'] [part='answer-heading-1'] {\r
    font-size: var(--atomic-text-2xl);\r
  }\r
[part='generated-text'] [part='answer-heading-2'] {\r
    font-size: var(--atomic-text-xl);\r
  }\r
[part='generated-text'] [part='answer-heading-3'],\r
  [part='generated-text'] [part='answer-heading-4'],\r
  [part='generated-text'] [part='answer-heading-5'],\r
  [part='generated-text'] [part='answer-heading-6'] {\r
    font-size: var(--atomic-text-lg);\r
  }\r
[part='generated-text'] [part='answer-heading-1'],\r
  [part='generated-text'] [part='answer-heading-2'],\r
  [part='generated-text'] [part='answer-heading-3'],\r
  [part='generated-text'] [part='answer-heading-4'],\r
  [part='generated-text'] [part='answer-heading-5'],\r
  [part='generated-text'] [part='answer-heading-6'] {
  margin-top: 1rem;
  margin-bottom: 0.5rem;\r
    font-weight: var(--atomic-font-bold);
}\r
[part='generated-text'] [part='answer-paragraph'] {
  margin-bottom: 1.5rem;
}\r
[part='generated-text'] [part='answer-list-item'],\r
  [part='generated-text'] [part='answer-paragraph'],\r
  [part='generated-text'] [part='answer-quote-block'],\r
  [part='generated-text'] [part='answer-table-header'],\r
  [part='generated-text'] [part='answer-table-content'] {
  line-height: 1.5rem;
}\r
[part='generated-text'] [part='answer-strong'] {\r
    font-weight: var(--atomic-font-bold);\r
  }\r
[part='generated-text'] [part='answer-ordered-list'] {
  margin-bottom: 0.5rem;
  list-style-type: decimal;
  padding-inline-start: 2rem;
}\r
[part='generated-text'] [part='answer-unordered-list'] {
  margin-bottom: 0.5rem;
  list-style-type: disc;
  padding-inline-start: 2rem;
}\r
[part='generated-text'] [part='answer-inline-code'] {
  border-width: 1px;
  border-style: solid;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;\r
    color: var(--atomic-inline-code);\r
    font-size: var(--atomic-text-sm);\r
    background-color: var(--atomic-neutral-light);\r
    border-color: var(--atomic-neutral);\r
    border-radius: var(--atomic-border-radius);
}\r
[part='generated-text'] [part='answer-code-block'] {
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-height: 24rem;
  overflow: auto;
  border-width: 1px;
  border-style: solid;
  padding: 0.5rem;\r
    background-color: var(--atomic-neutral-light);\r
    border-color: var(--atomic-neutral);\r
    border-radius: var(--atomic-border-radius-md);\r
    scrollbar-color: var(--atomic-neutral);\r
\r
    color: var(--atomic-on-background);\r
    font-size: var(--atomic-text-sm);
}\r
[part='generated-text'] [part='answer-quote-block'] {
  margin-left: 4rem;
  margin-right: 4rem;
  font-style: italic;
}\r
[part='generated-text'] [part='answer-table-container'] {
  margin-bottom: 1.5rem;
  display: inline-block;
  max-height: 24rem;
  overflow: auto;
  border-width: 1px;
  border-style: solid;\r
    border-color: var(--atomic-neutral-dim);\r
    border-radius: var(--atomic-border-radius-md);
}\r
[part='generated-text'] [part='answer-table-container'] [part='answer-table-header'] {
  position: sticky;
  top: 0px;
}\r
[part='generated-text'] [part='answer-table'] {\r
    font-size: var(--atomic-text-base);\r
  }\r
[part='generated-text'] [part='answer-table'] thead [part='answer-table-header'] {
  padding: 1rem;
  text-align: left;\r
        background-color: var(--atomic-neutral);\r
        font-weight: var(--atomic-font-bold);\r
        border-bottom: solid 2px var(--atomic-neutral-dim);\r
        border-left: solid 1px var(--atomic-neutral-dim);
}\r
[part='generated-text'] [part='answer-table'] thead [part='answer-table-header']:first-of-type {\r
        border-left: none;\r
      }\r
[part='generated-text'] [part='answer-table'] tbody tr:nth-child(even) {\r
          background-color: var(--atomic-neutral-light);\r
        }\r
[part='generated-text'] [part='answer-table'] tbody tr [part='answer-table-content'] {
  padding: 1rem;\r
          border-left: solid 1px var(--atomic-neutral-dim);\r
          border-bottom: solid 1px var(--atomic-neutral-dim);
}\r
[part='generated-text'] [part='answer-table'] tbody tr [part='answer-table-content']:first-of-type {\r
          border-left: none;\r
        }\r
[part='generated-text'] [part='answer-table'] tbody tr:last-of-type [part='answer-table-content'] {\r
          border-bottom: unset;\r
        }\r
.feedback-buttons [part='feedback-button'] {\r
    width: 2.2rem;\r
    height: 2.2rem;\r
  }\r
.feedback-buttons [part='feedback-button'] atomic-icon {\r
    color: var(--atomic-neutral-dark);\r
  }\r
.feedback-buttons [part='feedback-button'].dislike {\r
      rotate: 180deg;\r
    }\r
.feedback-buttons [part='feedback-button']:hover.like atomic-icon, .feedback-buttons [part='feedback-button'].active.like atomic-icon {\r
    color: var(--atomic-success);\r
  }\r
.feedback-buttons [part='feedback-button']:hover.dislike atomic-icon, .feedback-buttons [part='feedback-button'].active.dislike atomic-icon {\r
    color: var(--atomic-error);\r
  }\r
.rephrase-with-text {\r
  padding: 0 8px;\r
  width: unset;\r
}\r
.rephrase-with-text [part='rephrase-button-label'] {
  margin-left: 0.5rem;
}\r
.rephrase-with-text:hover [part='rephrase-button-label'] {
  color: var(--atomic-primary);
}\r
.rephrase-with-text.active [part='rephrase-button-label'] {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
[part='rephrase-button'] {\r
  --height: 1.5em;\r
  --icon-height: 1.1em;\r
\r
  height: var(--height);\r
  width: var(--height);\r
  position: relative;\r
}\r
[part='rephrase-button'] .icon-container {\r
    width: var(--icon-height);\r
  }\r
[part='rephrase-button'] .icon-container atomic-icon {\r
      height: var(--icon-height);\r
      width: var(--icon-height);\r
      margin: 0;\r
      position: absolute;\r
      top: 50%;\r
      left: 50%;\r
      transform: translate(-50%, -50%);\r
    }\r
[part='rephrase-button']:hover .icon-container,\r
    [part='rephrase-button']:hover [part='rephrase-button-label'],\r
    [part='rephrase-button'].active .icon-container,\r
    [part='rephrase-button'].active [part='rephrase-button-label'] {
  color: inherit;\r
    font-size: inherit;
}\r
[part='rephrase-button']:hover {
  color: var(--atomic-primary);
}\r
[part='rephrase-button'].active {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));\r
    background-color: var(--atomic-primary);
}\r
[part='rephrase-buttons'] > div {\r
  border-color: var(--atomic-neutral);\r
}\r
.typing-indicator {\r
  background-color: var(--atomic-primary-background);\r
  will-change: transform;\r
  width: auto;\r
  border-radius: 50px;\r
  padding: 8px 4px;\r
  display: table;\r
  margin: 0 auto;\r
  position: relative;\r
  animation: 2s bulge infinite ease-out;\r
}\r
.typing-indicator span {\r
  height: 8px;\r
  width: 8px;\r
  float: left;\r
  margin: 0 4px;\r
  background-color: var(--atomic-primary);\r
  display: block;\r
  border-radius: 50%;\r
  opacity: 0.4;\r
}\r
.typing-indicator span:nth-of-type(1) {\r
  animation: 1s blink infinite 0.3333s;\r
}\r
.typing-indicator span:nth-of-type(2) {\r
  animation: 1s blink infinite 0.6666s;\r
}\r
.typing-indicator span:nth-of-type(3) {\r
  animation: 1s blink infinite 0.9999s;\r
}\r
@keyframes blink {\r
  50% {\r
    opacity: 1;\r
  }\r
}\r
@keyframes bulge {\r
  50% {\r
    transform: scale(1.05);\r
  }\r
}\r
[part='copy-button'] .icon-container atomic-icon:hover {\r
        color: var(--atomic-primary);\r
      }\r
[part='copy-button'].copied .icon-container atomic-icon {\r
        color: var(--atomic-success);\r
      }\r
[part='copy-button'].error .icon-container atomic-icon {\r
        color: var(--atomic-error);\r
      }\r
@keyframes cursor-blink {\r
  0% {\r
    opacity: 0;\r
  }\r
}\r
[part='container'] {\r
  container-type: inline-size;\r
}\r
.footer {
  display: flex;
}\r
.footer .source-citations {
  margin-right: 0.5rem;
}\r
.footer [part='rephrase-buttons'] {
  margin-left: auto;
}\r
@container (max-width: 37.5rem) {\r
    .footer {
    flex-direction: column;
    gap: 1rem;
  }\r
    .footer .source-citations {
    margin-right: 0px;
  }\r
    .footer [part='rephrase-buttons'] {
    margin-left: 0px;
  }\r
    .footer [part='rephrase-button'] {
    flex: 1 1 auto;
    justify-content: center;\r
  padding: 0 8px;\r
  width: unset;
  }\r
    .footer [part='rephrase-button'] [part='rephrase-button-label'] {
    margin-left: 0.5rem;
  }\r
    .footer [part='rephrase-button']:hover [part='rephrase-button-label'] {
    color: var(--atomic-primary);
  }\r
    .footer [part='rephrase-button'].active [part='rephrase-button-label'] {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }\r
    .footer [part='rephrase-button'] .icon-container {
    margin-left: 0px;
    margin-right: 0px;
  }\r
    .footer [part='rephrase-button-label'] {
    display: block;
  }\r
  }\r
@media not all and (min-width: 1024px) {\r
    .footer {
    flex-direction: column;
    gap: 1rem;
  }\r
    .footer .source-citations {
    margin-right: 0px;
  }\r
    .footer [part='rephrase-buttons'] {
    margin-left: 0px;
  }\r
    .footer [part='rephrase-button'] {
    flex: 1 1 auto;
    justify-content: center;\r
  padding: 0 8px;\r
  width: unset;
  }\r
    .footer [part='rephrase-button'] [part='rephrase-button-label'] {
    margin-left: 0.5rem;
  }\r
    .footer [part='rephrase-button']:hover [part='rephrase-button-label'] {
    color: var(--atomic-primary);
  }\r
    .footer [part='rephrase-button'].active [part='rephrase-button-label'] {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }\r
    .footer [part='rephrase-button'] .icon-container {
    margin-left: 0px;
    margin-right: 0px;
  }\r
    .footer [part='rephrase-button-label'] {
    display: block;
  }\r
  }\r
@container (max-width: 25rem) {\r
    .footer {
    margin-top: 1rem;
  }\r
    .footer [part='rephrase-button-label'] {
    display: none;
  }\r
    .footer .feedback-buttons {
    position: relative;
    top: 0px;
    right: 0px;
  }\r
  }\r
@container (max-width: 37.5rem) {\r
    [part='generated-answer-footer'] {
    flex-direction: column;
    gap: 0.25rem;
  }\r
  }\r
@media not all and (min-width: 1024px) {\r
    [part='generated-answer-footer'] {
    flex-direction: column;
    gap: 0.25rem;
  }\r
  }\r
[part='generated-container'].answer-collapsed {
  position: relative;
  max-height: 16rem;
  overflow: hidden;
  --tw-content: '';
  content: var(--tw-content);
}\r
[part='generated-container'].answer-collapsed .feedback-buttons {
  display: none;
}\r
[part='generated-container'].answer-collapsed:before {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  --tw-content: '';
  content: var(--tw-content);\r
    background: linear-gradient(transparent 11.25rem, white);
}\r
.is-collapsible {
  justify-content: space-between;
}\r
.is-collapsible [part='answer-show-button'] {
  display: flex;
}\r
.generating-label-visible [part='is-generating'] {
  display: flex;
}\r
.focus-within\\:border-disabled:focus-within {
  border-color: var(--atomic-disabled);
}\r
.focus-within\\:border-primary:focus-within {
  border-color: var(--atomic-primary);
}\r
.focus-within\\:ring:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus-within\\:ring-neutral:focus-within {
  --tw-ring-color: var(--atomic-neutral);
}\r
.focus-within\\:ring-ring-primary:focus-within {
  --tw-ring-color: var(--atomic-ring-primary);
}\r
.hover\\:border-error:hover {
  border-color: var(--atomic-error);
}\r
.hover\\:border-primary-light:hover {
  border-color: var(--atomic-primary-light);
}\r
.hover\\:bg-error:hover {
  background-color: var(--atomic-error);
}\r
.hover\\:bg-primary-light:hover {
  background-color: var(--atomic-primary-light);
}\r
.hover\\:bg-transparent:hover {
  background-color: transparent;
}\r
.hover\\:fill-white:hover {
  fill: #fff;
}\r
.hover\\:underline:hover {
  text-decoration-line: underline;
}\r
.hover\\:opacity-100:hover {
  opacity: 1;
}\r
.hover\\:shadow:hover {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.focus\\:opacity-100:focus {
  opacity: 1;
}\r
.focus-visible\\:border-error.focus-visible.js-focus-visible, .js-focus-visible .focus-visible\\:border-error.focus-visible {
  border-color: var(--atomic-error);
}\r
.focus-visible\\:border-error:focus-visible {
  border-color: var(--atomic-error);
}\r
.focus-visible\\:border-primary-light.focus-visible.js-focus-visible, .js-focus-visible .focus-visible\\:border-primary-light.focus-visible {
  border-color: var(--atomic-primary-light);
}\r
.focus-visible\\:border-primary-light:focus-visible {
  border-color: var(--atomic-primary-light);
}\r
.focus-visible\\:bg-error.focus-visible.js-focus-visible, .js-focus-visible .focus-visible\\:bg-error.focus-visible {
  background-color: var(--atomic-error);
}\r
.focus-visible\\:bg-error:focus-visible {
  background-color: var(--atomic-error);
}\r
.focus-visible\\:bg-neutral-light.focus-visible.js-focus-visible, .js-focus-visible .focus-visible\\:bg-neutral-light.focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.focus-visible\\:bg-neutral-light:focus-visible {
  background-color: var(--atomic-neutral-light);
}\r
.focus-visible\\:bg-primary-light.focus-visible.js-focus-visible, .js-focus-visible .focus-visible\\:bg-primary-light.focus-visible {
  background-color: var(--atomic-primary-light);
}\r
.focus-visible\\:bg-primary-light:focus-visible {
  background-color: var(--atomic-primary-light);
}\r
.group:hover .group-hover\\:visible {
  visibility: visible;
}\r
.group:hover .group-hover\\:text-primary {
  color: var(--atomic-primary);
}\r
.group:hover .group-hover\\:text-primary-light {
  color: var(--atomic-primary-light);
}\r
.group:focus .group-focus\\:text-primary {
  color: var(--atomic-primary);
}\r
.group:focus .group-focus\\:text-primary-light {
  color: var(--atomic-primary-light);
}\r
.peer:hover ~ .peer-hover\\:text-error {
  color: var(--atomic-error);
}\r
@media (min-width: 1024px) {

  .desktop-only\\:mt-6 {
    margin-top: 1.5rem;
  }

  .desktop-only\\:flex {
    display: flex;
  }
}\r
@media not all and (min-width: 1024px) {

  .mobile-only\\:mt-4 {
    margin-top: 1rem;
  }

  .mobile-only\\:hidden {
    display: none;
  }

  .mobile-only\\:h-10 {
    height: 2.5rem;
  }

  .mobile-only\\:h-2 {
    height: 0.5rem;
  }

  .mobile-only\\:h-3 {
    height: 0.75rem;
  }

  .mobile-only\\:w-10 {
    width: 2.5rem;
  }

  .mobile-only\\:w-2 {
    width: 0.5rem;
  }

  .mobile-only\\:w-3 {
    width: 0.75rem;
  }
}\r
`,y=x;var l=function(r,n,t,i){var o=arguments.length,e=o<3?n:i===null?i=Object.getOwnPropertyDescriptor(n,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,n,t,i);else for(var c=r.length-1;c>=0;c--)(s=r[c])&&(e=(o<3?s(e):o>3?s(n,t,e):s(n,t))||e);return o>3&&e&&Object.defineProperty(n,t,e),e};const a=class{constructor(r){p(this,r),this.copied=!1,this.copyError=!1,this.answerStyle="default",this.maxCollapsedHeight=250,this.onGeneratedAnswerStateUpdate=()=>{var n,t;this.generatedAnswerState.isVisible!==((t=(n=this.generatedAnswerCommon)===null||n===void 0?void 0:n.data)===null||t===void 0?void 0:t.isVisible)&&(this.generatedAnswerCommon.data={...this.generatedAnswerCommon.data,isVisible:this.generatedAnswerState.isVisible},this.generatedAnswerCommon.writeStoredData(this.generatedAnswerCommon.data)),this.setAriaMessage(this.generatedAnswerCommon.getGeneratedAnswerStatus())},this.setCopied=n=>{this.copied=n},this.setCopyError=n=>{this.copyError=n},this.setAriaMessage=n=>{this.ariaMessage=n},this.generatedAnswerState=void 0,this.searchStatusState=void 0,this.error=void 0,this.copied=!1,this.copyError=!1,this.answerStyle="default",this.withToggle=void 0,this.collapsible=void 0}initialize(){if(this.generatedAnswerCommon=new v({host:this.host,withToggle:this.withToggle,collapsible:this.collapsible,getGeneratedAnswer:()=>this.generatedAnswer,getGeneratedAnswerState:()=>this.generatedAnswerState,getSearchStatusState:()=>this.searchStatusState,getBindings:()=>this.bindings,getCopied:()=>this.copied,setCopied:this.setCopied,getCopyError:()=>this.copyError,setCopyError:this.setCopyError,setAriaMessage:this.setAriaMessage,buildInteractiveCitation:r=>g(this.bindings.engine,r)}),this.generatedAnswer=b(this.bindings.engine,{initialState:{isVisible:this.generatedAnswerCommon.data.isVisible,responseFormat:{answerStyle:this.answerStyle}}}),this.searchStatus=w(this.bindings.engine),this.generatedAnswerCommon.insertFeedbackModal(),window.ResizeObserver&&this.collapsible){const r=u(()=>this.adaptAnswerHeight(),100);this.resizeObserver=new ResizeObserver(r),this.resizeObserver.observe(this.host)}}updateAnswerCollapsed(r,n){const t=r.expanded,i=n?n.expanded:void 0;if(t!==i){const o=this.getAnswerContainer();if(!o)return;this.toggleClass(o,"answer-collapsed",!t)}}disconnectedCallback(){var r;(r=this.resizeObserver)===null||r===void 0||r.disconnect()}toggleClass(r,n,t){r.classList.toggle(n,t)}adaptAnswerHeight(){var r,n,t;this.fullAnswerHeight=(t=(n=(r=this.host)===null||r===void 0?void 0:r.shadowRoot)===null||n===void 0?void 0:n.querySelector('[part="generated-text"]'))===null||t===void 0?void 0:t.getBoundingClientRect().height,this.updateAnswerHeight()}getAnswerContainer(){var r,n;return(n=(r=this.host)===null||r===void 0?void 0:r.shadowRoot)===null||n===void 0?void 0:n.querySelector('[part="generated-container"]')}getAnswerFooter(){var r,n;return(n=(r=this.host)===null||r===void 0?void 0:r.shadowRoot)===null||n===void 0?void 0:n.querySelector('[part="generated-answer-footer"]')}updateAnswerHeight(){const r=this.getAnswerContainer(),n=this.getAnswerFooter();!r||!n||(this.fullAnswerHeight>this.maxCollapsedHeight?(this.toggleClass(r,"answer-collapsed",!this.generatedAnswerState.expanded),this.toggleClass(n,"is-collapsible",!0),this.toggleClass(n,"generating-label-visible",this.generatedAnswerState.isStreaming)):(this.toggleClass(r,"answer-collapsed",!1),this.toggleClass(n,"is-collapsible",!1),this.toggleClass(n,"generating-label-visible",!1)))}render(){return this.generatedAnswerCommon.render()}get host(){return m(this)}static get watchers(){return{generatedAnswerState:["updateAnswerCollapsed"]}}};l([f()],a.prototype,"bindings",void 0);l([d("generatedAnswer",{onUpdateCallbackMethod:"onGeneratedAnswerStateUpdate"})],a.prototype,"generatedAnswerState",void 0);l([d("searchStatus")],a.prototype,"searchStatusState",void 0);l([h("generated-answer")],a.prototype,"ariaMessage",void 0);a.style=y;export{a as atomic_insight_generated_answer};
