import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { C as CloseIcon } from './close.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { u as updateBreakpoints } from './replace-breakpoint.js';
import { r as randomID, o as once } from './utils.js';
import { B as Button } from './button.js';
import { I as IconButton } from './iconButton.js';
import { d as defineCustomElement$5 } from './atomic-component-error2.js';
import { d as defineCustomElement$4 } from './atomic-focus-trap2.js';
import { d as defineCustomElement$3 } from './atomic-icon2.js';
import { d as defineCustomElement$2 } from './atomic-modal2.js';

const Success = `<svg width="352" height="352" viewBox="0 0 352 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_110_11263)">
<rect x="176" y="29" width="208" height="208" rx="8" transform="rotate(45 176 29)" fill="#F9F9F9"/>
</g>
<g opacity="0.6" filter="url(#filter1_f_110_11263)">
<path d="M232.005 288.834C232.032 297.477 192.856 304.607 144.503 304.758C59.5678 313.28 52.0499 289.55 52.0228 280.907C51.9956 272.264 96.0514 273.611 144.404 273.459C192.758 273.307 231.977 280.191 232.005 288.834Z" fill="url(#paint0_linear_110_11263)"/>
</g>
<g opacity="0.2" filter="url(#filter2_f_110_11263)">
<path d="M188.079 108.584C189.284 108.36 190.476 108.189 191.654 107.85C191.938 107.749 192.919 107.585 193 107.221C195.11 103.158 192.53 97.29 189.53 94.4945C185.265 90.5444 179.698 91.2729 174.373 92.3281C173.38 92.5443 172.338 92.7494 171.372 93.0807C171.422 93.0919 170.245 93.4308 170.895 93.5752C170.895 93.5752 172.633 93.5 173.133 93.4906C173.633 93.4812 174.98 93.6095 175.319 93.7393C176.108 93.9691 176.835 94.2398 177.527 94.6665C179.1 95.6165 180.481 96.9605 181.431 98.5909C183.149 101.484 184.602 105.573 182.928 108.859C182.832 109.056 184.636 108.966 184.474 108.984C185.694 108.928 186.887 108.756 188.079 108.584Z" fill="#AEB0F1"/>
</g>
<g opacity="0.6" filter="url(#filter3_f_110_11263)">
<ellipse cx="299.859" cy="289.766" rx="2.08166" ry="6.61558" transform="rotate(93.2713 299.859 289.766)" fill="#AEB0F1"/>
</g>
<g opacity="0.6" filter="url(#filter4_f_110_11263)">
<path d="M248.097 293.649C246.952 293.605 245.812 293.538 244.706 293.551C244.441 293.563 243.506 293.518 243.47 293.677C241.899 295.295 245.104 298.32 248.354 299.977C252.973 302.323 258.304 302.667 263.36 302.83C264.301 302.852 265.291 302.885 266.191 302.85C266.141 302.838 267.247 302.826 266.597 302.68C266.597 302.68 264.914 302.502 264.429 302.445C263.943 302.388 262.617 302.164 262.273 302.063C261.478 301.861 260.738 301.647 260.014 301.365C258.371 300.734 256.868 299.945 255.751 299.076C253.736 297.53 251.837 295.464 253.078 294.151C253.148 294.072 251.403 293.893 251.558 293.905C250.378 293.782 249.238 293.715 248.097 293.649Z" fill="#AEB0F1"/>
</g>
<path d="M267.692 172.577L266.334 179.479C266.19 180.211 265.4 180.658 264.667 180.518C263.522 180.298 261.727 180.132 259.501 180.518C257.315 180.897 255.204 181.543 253.752 182.046C252.89 182.345 251.973 181.636 252.087 180.73L252.865 174.51C252.917 174.094 253.184 173.737 253.568 173.572C259.325 171.107 262.455 170.442 266.78 171.214C267.413 171.327 267.816 171.946 267.692 172.577Z" fill="url(#paint1_linear_110_11263)"/>
<path d="M247.767 103.658L241.898 100.751C241.194 100.403 240.989 99.4518 241.381 98.7719C241.938 97.807 242.613 96.3157 242.948 94.3545C243.293 92.3377 243.367 90.3189 243.365 88.9067C243.363 88.0256 244.266 87.3863 245.081 87.7216L250.613 89.9983C251.023 90.167 251.306 90.5521 251.34 90.9943C251.784 96.6711 251.389 99.5987 249.276 103.221C248.971 103.744 248.309 103.926 247.767 103.658Z" fill="url(#paint2_linear_110_11263)"/>
<ellipse cx="205.485" cy="105.648" rx="4.82204" ry="2.61553" transform="rotate(-29.4417 205.485 105.648)" fill="url(#paint3_linear_110_11263)"/>
<ellipse cx="290.123" cy="200.642" rx="2.20295" ry="4.65279" transform="rotate(70.2998 290.123 200.642)" fill="url(#paint4_linear_110_11263)"/>
<ellipse cx="232.171" cy="53.736" rx="3.05764" ry="4.21097" transform="rotate(60.4687 232.171 53.736)" fill="url(#paint5_linear_110_11263)"/>
<ellipse cx="297.786" cy="254.704" rx="2.08166" ry="3.45164" transform="rotate(115.947 297.786 254.704)" fill="url(#paint6_linear_110_11263)"/>
<ellipse cx="307.728" cy="133.273" rx="2.49732" ry="4.33321" transform="rotate(79.0732 307.728 133.273)" fill="url(#paint7_linear_110_11263)"/>
<ellipse cx="68.6153" cy="31.7832" rx="68.6153" ry="31.7832" transform="matrix(0.711799 0.702383 -0.701584 0.712586 134.407 121.061)" fill="url(#paint8_linear_110_11263)"/>
<ellipse cx="63.1768" cy="27.4369" rx="63.1768" ry="27.4369" transform="matrix(0.711799 0.702383 -0.701584 0.712586 136.015 129)" fill="url(#paint9_linear_110_11263)"/>
<g opacity="0.8" filter="url(#filter5_f_110_11263)">
<path d="M211.5 228.5C183.472 228.407 166.992 244.61 167.001 241.816C167.01 239.023 181.472 218.407 209.5 218.5C210.5 220 211.5 224 211.5 228.5Z" fill="#262646"/>
</g>
<path d="M263.905 221.342C264.699 221.815 265.158 222.664 265.189 223.587C265.272 226.051 265.435 230.889 265.48 232.198C265.54 233.975 245.64 218.438 213.686 220.703C184.257 222.789 162.018 241.642 158.687 244.609C158.404 244.861 158.034 244.958 157.661 244.887L149.334 243.287C148.369 243.102 148.03 241.922 148.789 241.296C156.098 235.273 184.386 213.521 213.685 211.766C242.485 210.042 259.386 218.652 263.905 221.342Z" fill="url(#paint10_linear_110_11263)"/>
<path d="M299.839 83.4692C300.175 82.2915 300.553 81.1473 300.775 79.9424C300.812 79.6427 301.103 78.6914 300.813 78.4566C298.117 74.7569 291.714 74.4491 287.874 75.8877C282.437 77.9441 280.606 83.252 279.176 88.4887C278.927 89.4736 278.646 90.4983 278.512 91.5105C278.544 91.4706 278.322 92.6756 278.742 92.1581C278.742 92.1581 279.45 90.5682 279.664 90.1166C279.879 89.6649 280.594 88.5163 280.861 88.2712C281.419 87.6678 281.985 87.1378 282.676 86.7084C284.228 85.7238 286.046 85.0873 287.929 84.9642C291.285 84.7157 295.593 85.2388 297.788 88.2027C297.921 88.3767 298.645 86.7213 298.589 86.8743C299.082 85.7574 299.46 84.6133 299.839 83.4692Z" fill="url(#paint11_linear_110_11263)"/>
<path d="M250.028 252.443C248.823 252.663 247.63 252.832 246.451 253.168C246.166 253.268 245.185 253.429 245.103 253.793C242.983 257.85 245.547 263.725 248.539 266.529C252.794 270.49 258.363 269.776 263.691 268.735C264.684 268.522 265.727 268.319 266.694 267.991C266.644 267.979 267.822 267.644 267.172 267.497C267.172 267.497 265.434 267.568 264.934 267.576C264.434 267.584 263.087 267.452 262.749 267.322C261.961 267.09 261.234 266.817 260.543 266.388C258.972 265.434 257.595 264.087 256.65 262.454C254.939 259.556 253.497 255.463 255.18 252.182C255.277 251.985 253.472 252.071 253.634 252.052C252.414 252.106 251.221 252.274 250.028 252.443Z" fill="url(#paint12_linear_110_11263)"/>
<path d="M185.079 72.5842C186.284 72.3604 187.476 72.1886 188.654 71.8497C188.938 71.7492 189.919 71.585 190 71.2208C192.11 67.1585 189.53 61.29 186.53 58.4945C182.265 54.5444 176.698 55.2729 171.373 56.3281C170.38 56.5443 169.338 56.7494 168.372 57.0807C168.422 57.0919 167.245 57.4308 167.895 57.5752C167.895 57.5752 169.633 57.5 170.133 57.4906C170.633 57.4812 171.98 57.6095 172.319 57.7393C173.108 57.9691 173.835 58.2398 174.527 58.6665C176.1 59.6165 177.481 60.9605 178.431 62.5909C180.149 65.4839 181.602 69.5735 179.928 72.859C179.832 73.056 181.636 72.9656 181.474 72.9843C182.694 72.9277 183.887 72.7559 185.079 72.5842Z" fill="url(#paint13_linear_110_11263)"/>
<g filter="url(#filter6_f_110_11263)">
<path d="M148.88 145.5C149.889 146.75 148.88 147.548 148.88 147.548L146 161.048L137 185.779C137 185.779 145.38 184.048 150.5 174.779C154.131 168.207 150.159 166.798 147.676 165.917C146.658 165.555 145.89 165.283 146 164.779C146.301 163.408 148.559 163.122 152.964 162.566C154.12 162.42 155.424 162.255 156.88 162.048C158.322 161.841 159.743 161.74 161.104 161.642C166.346 161.266 160.809 160.455 162 154.5C159.5 152 150.02 146.26 148.88 145.5Z" fill="#333357"/>
</g>
<path d="M139.754 90.7195C140.699 94.0623 143.407 96.2647 146.254 98.107C150.043 100.726 153.971 102.985 157.887 105.488C161.804 107.99 165.604 110.365 169.393 112.984C169.509 113.112 169.869 113.251 169.986 113.378C168.162 113.172 166.339 112.965 164.4 112.631C157.489 111.456 150.556 110.769 143.485 110.442C141.778 110.363 140.071 110.284 138.364 110.205C136.901 110.138 135.321 109.942 134.068 110.617C133.569 110.839 133.175 111.431 132.909 111.908C131.959 113.941 131.37 116.113 130.908 118.169C130.597 119.621 130.042 121.062 130.218 122.536C130.311 123.151 130.765 123.905 131.231 124.416C135.278 129.368 140.474 133.274 145.542 137.296C148.727 139.765 151.911 142.234 154.98 144.575C155.805 145.224 156.631 145.873 157.328 146.639C154.507 146.875 151.592 146.496 148.677 146.117C145.518 145.726 142.232 145.452 139.028 146.037C137.797 146.224 136.544 146.9 135.768 147.841C134.98 149.027 134.541 150.595 134.229 152.047C133.801 153.371 133.49 154.823 133.062 156.147C132.901 156.995 132.484 158.075 132.567 158.934C132.626 160.281 133.568 161.058 134.51 161.834C135.928 162.878 137.462 164.048 138.88 165.091C140.774 166.401 142.808 167.35 144.713 168.416C142.856 168.941 140.883 169.338 139.026 169.863C135.927 170.82 132.794 172.508 131.068 175.483C130.002 177.388 129.402 179.804 128.813 181.976C128.524 182.94 128.224 184.148 128.051 185.24C128.051 185.24 127.867 186.576 128.261 185.983C130.392 182.172 134.849 180.911 138.807 179.873C141.036 179.243 143.253 178.856 145.493 177.982C147.605 177.225 148.892 175.818 149.841 173.785C149.969 173.669 150.108 173.308 150.258 172.704C151.23 170.183 152.097 167.291 152.465 164.62C152.637 163.528 152.81 162.437 152.379 161.195C151.493 159.199 148.717 158.459 146.812 157.394C146.451 157.255 146.335 157.127 145.975 156.989C147.554 157.184 149.378 157.39 151.085 157.469C154.011 157.605 156.832 157.368 159.455 156.146C160.58 155.587 161.833 154.912 162.494 153.842C163.282 152.657 163.721 151.089 164.16 149.521C164.877 147.232 165.721 144.828 165.706 142.505C165.762 141.286 164.96 140.149 164.146 139.256C163.099 138.108 161.809 136.949 160.635 135.917C158.17 133.726 155.694 131.779 153.218 129.831C149.441 126.968 145.547 123.978 142.024 120.883C144.707 121.007 147.261 121.247 150.06 121.499C153.59 121.784 157.109 122.313 160.628 122.843C163.543 123.222 166.447 123.845 169.501 123.864C172.427 123.999 175.376 123.647 177.998 122.424C178.625 122.087 179.019 121.494 179.285 121.017C180.235 118.984 180.824 116.812 181.285 114.756C181.747 112.7 182.58 110.54 181.207 108.521C180.404 107.384 178.859 106.457 177.801 105.553C176.383 104.51 174.965 103.467 173.431 102.296C170.595 100.21 167.747 98.3679 164.773 96.6419C160.241 94.2329 155.964 91.5914 151.815 88.8336C148.491 86.7248 144.076 84.4434 143.037 80.4854C142.944 79.8701 142.577 80.8237 142.577 80.8237C142.577 80.8237 141.578 82.9838 141.289 83.948C140.861 85.2722 140.452 86.8059 140.452 86.8059C140.452 86.8059 139.544 89.9766 139.754 90.7195Z" fill="url(#paint14_linear_110_11263)"/>
<path d="M158.5 148L157.5 146.5C157.5 146.5 151.742 146.206 148.827 145.826C145.669 145.436 142.382 145.162 139.178 145.747C137.948 145.934 136.695 146.609 135.918 147.551C135.13 148.736 134.691 150.305 134.379 151.756C133.952 153.081 133.64 154.532 133.212 155.857C133.062 156.461 132.901 157.309 132.867 158.04C135.801 155.366 145.277 156.537 145.277 156.537C145.277 156.537 146.459 156.697 146.729 156.848C147 157 148.5 157 148.5 157C148.5 157 149.793 157.421 151.5 157.5C154.426 157.635 157.377 157.223 160 156C161.125 155.441 162.227 154.633 162.888 153.564C162.76 153.68 158.5 148 158.5 148Z" fill="url(#paint15_linear_110_11263)"/>
<path d="M169.756 113.135C167.933 112.928 166.11 112.722 164.415 112.399C157.505 111.224 150.573 110.537 143.502 110.21C141.795 110.131 140.089 110.052 138.382 109.973C136.919 109.905 135.34 109.71 134.087 110.386C133.588 110.607 133.194 111.2 132.928 111.676C131.978 113.71 131.389 115.882 130.928 117.938C130.616 119.39 130.061 120.831 130.237 122.306L130.642 121.469C130.642 121.469 132.822 119.248 141.914 120.768C144.596 120.892 147.151 121.133 149.949 121.384C153.479 121.67 156.998 122.199 160.516 122.728C163.431 123.107 166.334 123.731 169.387 123.75C172.313 123.885 175.262 123.532 177.884 122.309C178.255 122.204 178.51 121.972 178.649 121.612C178.533 121.484 178.612 119.777 169.756 113.135Z" fill="url(#paint16_linear_110_11263)"/>
<path d="M152.614 164.732C152.741 164.616 152.625 164.488 152.753 164.372C150.377 168.172 144.735 168.644 144.735 168.644C142.878 169.169 140.904 169.567 139.047 170.092C135.948 171.048 132.816 172.736 131.09 175.711C130.024 177.617 129.424 180.033 128.834 182.205C128.545 183.169 128.245 184.377 128.072 185.469C128.072 185.469 127.888 186.804 128.282 186.212C130.414 182.4 134.871 181.14 138.829 180.101C141.057 179.471 143.275 179.085 145.514 178.211C147.627 177.453 148.913 176.047 149.863 174.013C149.99 173.897 150.129 173.537 150.279 172.933C151.379 170.296 152.246 167.403 152.614 164.732Z" fill="url(#paint17_linear_110_11263)"/>
<g opacity="0.9" filter="url(#filter7_f_110_11263)">
<path d="M188.22 174.616C188.061 174.575 187.903 174.534 187.746 174.494C184.158 173.574 181.208 172.818 179.5 172.866C158.599 173.454 159.309 195.426 159.486 200.919C159.491 201.083 159.496 201.232 159.5 201.366C159.537 202.667 160.148 201.768 161.491 199.793C164.906 194.773 173.051 182.8 188.5 182.366C190.113 182.32 192.05 182.409 194.197 182.531L189.08 176.276L188.22 174.616Z" fill="#262646"/>
</g>
<path d="M223.434 164.426C221.661 158.871 219.703 153.102 218.858 147.218C218.562 144.587 218.864 142.003 220.047 139.688C221.223 137.473 222.759 135.787 225.261 134.578C228.161 133.4 233.069 133.482 234.473 133.491C241.866 133.867 249.398 133.752 256.71 131.313C261.336 129.869 265.78 126.905 267.25 122.206C267.396 121.615 267.535 121.124 267.681 120.534C267.804 120.243 262.749 120.751 262.542 120.835C261.322 121.041 257.687 121.359 257.533 122.049C256.852 126.911 251.771 130.326 248.296 131.159C245.435 131.838 240.679 132.37 237.88 132.252C233.777 132.133 230.096 131.745 226.045 132.232C222.701 132.673 219.325 133.513 216.302 134.982C211.621 137.125 208.488 141.294 208.482 146.509C208.563 149.324 209.251 152.086 209.938 154.848C210.702 157.916 211.565 160.993 212.636 163.985C213.193 165.834 214.287 168.527 214.4 170.943C214.573 173.866 213.581 176.296 212.07 176.379C209.247 176.56 206.702 175.759 204.041 175.15C198.444 173.611 192.947 172.078 187.072 171.52C183.284 171.224 179.456 171.427 175.805 171.945C172.154 172.463 168.295 173.064 165.034 175.017C160.183 178.049 157.93 183.791 156.513 189.097C155.08 194.602 154.422 200.469 151.617 205.566C149.043 210.28 144.429 214.133 139.281 215.838C139.074 215.922 138.867 216.006 138.667 215.99C138.767 215.998 137.54 216.304 138.23 216.458C139.02 216.62 139.833 216.483 140.538 216.437C142.855 216.317 145.294 215.905 147.45 215.271C152.79 213.682 157.449 210.534 160.621 205.867C163.901 201.108 164.958 195.272 166.191 189.751C167.325 184.223 169.187 178.35 173.785 174.696C174.645 173.961 175.581 173.532 176.625 173.012C178.818 173.183 180.904 173.446 182.982 173.809C188.71 174.958 194.192 176.689 199.805 178.03C202.565 178.646 205.249 178.956 207.956 178.967C210.771 178.885 213.418 178.389 216.156 178.001C217.882 177.735 219.524 177.261 220.99 176.472C225.686 174.131 224.71 168.638 223.434 164.426Z" fill="url(#paint18_linear_110_11263)"/>
<path d="M249 131C248.463 131.459 242.815 133.324 242.5 133.5C245 134 253.502 132.568 256.702 131.413C261.328 129.968 265.634 127.496 267.203 122.804C267.349 122.213 267.627 121.232 267.773 120.641C267.896 120.35 262.841 120.858 262.634 120.943C261.414 121.148 257.886 121.375 257.624 122.157C256.883 126.512 253.151 129.217 249 131Z" fill="url(#paint19_linear_110_11263)"/>
<path d="M166.398 189.667C167.631 184.147 169.463 178.672 173.961 175.011C174.821 174.276 176.701 173.319 176.801 173.327C177.76 172.599 179.011 171.995 179.939 171.666C178.62 171.864 177.93 171.71 175.913 171.853C173.895 171.997 168.403 172.973 165.141 174.925C160.291 177.957 157.922 183.891 156.605 189.204C155.165 194.809 154.514 200.576 151.709 205.674C149.135 210.388 144.621 214.248 139.473 215.953C139.266 216.037 139.058 216.121 138.859 216.106C138.959 216.114 137.731 216.419 138.421 216.573C139.211 216.735 140.024 216.598 140.73 216.553C143.046 216.432 145.486 216.021 147.642 215.387C152.981 213.797 157.648 210.55 160.821 205.883C164.208 201.031 165.066 195.18 166.398 189.667Z" fill="url(#paint20_linear_110_11263)"/>
<path d="M223.811 163.961C222.038 158.406 220.081 152.637 219.236 146.753C218.939 144.122 219.241 141.538 220.425 139.223C221.601 137.008 223.281 135.527 225.384 134.286C226.419 133.866 228.452 133.523 228.452 133.523C228.452 133.523 226.804 132.501 225.5 132.5C222.754 132.988 219.166 133.508 216.871 134.633C211.868 137.051 208.506 140.869 208.5 146.084C208.581 148.899 208.713 151.815 209.5 154.584C210.264 157.653 211.453 160.969 212.524 163.961C213.824 167.874 215.5 174.584 212.524 176.22C212.37 176.911 211.487 177.945 211.125 178.719C212.245 178.506 215.989 178.096 217.109 177.882C218.835 177.615 220.078 177.111 221.543 176.322C226.064 173.666 225.088 168.173 223.811 163.961Z" fill="url(#paint21_linear_110_11263)"/>
<path d="M141.203 213.7C118.403 191.2 103.3 166.1 107.5 151L53.6031 275.6C50.5031 282.3 52.0031 290.3 57.2031 295.5L58.7031 297C63.9031 302.2 71.9031 303.7 78.6031 300.6L205 243.5C190.2 248.8 164.403 236.6 141.203 213.7Z" fill="url(#paint22_linear_110_11263)"/>
<path d="M142.867 211.5C118.167 187.2 106.067 160 116.367 149L112 144C92.3256 163.674 124.974 202.103 138.219 215.2C165.019 241.6 196.367 252.6 208.867 240.5L205.867 238C194.567 247.4 167.067 235.4 142.867 211.5Z" fill="url(#paint23_linear_110_11263)"/>
<defs>
<filter id="filter0_b_110_11263" x="28.5559" y="28.634" width="294.888" height="294.889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="1.83987"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_110_11263"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_110_11263" result="shape"/>
</filter>
<filter id="filter1_f_110_11263" x="35.0227" y="256.457" width="213.982" height="67.1194" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="8.5" result="effect1_foregroundBlur_110_11263"/>
</filter>
<filter id="filter2_f_110_11263" x="158.698" y="79.4939" width="47.0718" height="41.4954" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_110_11263"/>
</filter>
<filter id="filter3_f_110_11263" x="285.253" y="279.654" width="29.2119" height="20.2253" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_110_11263"/>
</filter>
<filter id="filter4_f_110_11263" x="232.058" y="282.549" width="45.7441" height="31.3157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_110_11263"/>
</filter>
<filter id="filter5_f_110_11263" x="157.001" y="208.5" width="64.499" height="43.6409" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_110_11263"/>
</filter>
<filter id="filter6_f_110_11263" x="132" y="140.5" width="36.4014" height="50.2791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_110_11263"/>
</filter>
<filter id="filter7_f_110_11263" x="149.438" y="162.864" width="54.76" height="49.1123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_110_11263"/>
</filter>
<linearGradient id="paint0_linear_110_11263" x1="76.1565" y1="296.915" x2="194.729" y2="295.368" gradientUnits="userSpaceOnUse">
<stop stop-color="#3F3F71" stop-opacity="0.91"/>
<stop offset="0.476193" stop-color="#6464BB" stop-opacity="0.54"/>
<stop offset="1" stop-color="#6B6BBD" stop-opacity="0.22"/>
</linearGradient>
<linearGradient id="paint1_linear_110_11263" x1="264.252" y1="183.521" x2="256.001" y2="171.69" gradientUnits="userSpaceOnUse">
<stop stop-color="#0BA893"/>
<stop offset="1" stop-color="#16DCC1"/>
</linearGradient>
<linearGradient id="paint2_linear_110_11263" x1="239.5" y1="91.5" x2="253.5" y2="100.5" gradientUnits="userSpaceOnUse">
<stop offset="0.000451009" stop-color="#0BA893"/>
<stop offset="1" stop-color="#16DCC1"/>
</linearGradient>
<linearGradient id="paint3_linear_110_11263" x1="205.485" y1="103.032" x2="207.255" y2="108.56" gradientUnits="userSpaceOnUse">
<stop offset="0.411458" stop-color="#FFE300"/>
<stop offset="1" stop-color="#E2B104"/>
</linearGradient>
<linearGradient id="paint4_linear_110_11263" x1="290.123" y1="195.99" x2="290.123" y2="205.295" gradientUnits="userSpaceOnUse">
<stop stop-color="#E2B104"/>
<stop offset="1" stop-color="#FFE300"/>
</linearGradient>
<linearGradient id="paint5_linear_110_11263" x1="229.837" y1="54.3343" x2="238.073" y2="50.9546" gradientUnits="userSpaceOnUse">
<stop stop-color="#16DCC1"/>
<stop offset="1" stop-color="#0BA893"/>
</linearGradient>
<linearGradient id="paint6_linear_110_11263" x1="296.197" y1="255.194" x2="302.067" y2="253.194" gradientUnits="userSpaceOnUse">
<stop stop-color="#16DCC1"/>
<stop offset="1" stop-color="#0BA893"/>
</linearGradient>
<linearGradient id="paint7_linear_110_11263" x1="307.728" y1="128.94" x2="307.728" y2="137.607" gradientUnits="userSpaceOnUse">
<stop stop-color="#CD2113"/>
<stop offset="1" stop-color="#EE8279"/>
</linearGradient>
<linearGradient id="paint8_linear_110_11263" x1="15.4144" y1="21.2075" x2="85.5572" y2="71.0592" gradientUnits="userSpaceOnUse">
<stop stop-color="#525296"/>
<stop offset="1" stop-color="#AEB0F1"/>
</linearGradient>
<linearGradient id="paint9_linear_110_11263" x1="55.6398" y1="-16.8368" x2="70.3905" y2="71.7645" gradientUnits="userSpaceOnUse">
<stop stop-color="#525296"/>
<stop offset="0.776042" stop-color="#333357"/>
<stop offset="1" stop-color="#525296"/>
</linearGradient>
<linearGradient id="paint10_linear_110_11263" x1="260.705" y1="218.85" x2="166.545" y2="212.913" gradientUnits="userSpaceOnUse">
<stop offset="0.0113644" stop-color="#FFEF70"/>
<stop offset="0.520189" stop-color="#FFE300"/>
<stop offset="0.920038" stop-color="#EAC10B"/>
</linearGradient>
<linearGradient id="paint11_linear_110_11263" x1="298" y1="90.5" x2="281.5" y2="75.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#BD9403"/>
<stop offset="1" stop-color="#F5D029"/>
</linearGradient>
<linearGradient id="paint12_linear_110_11263" x1="255.717" y1="254.223" x2="263.5" y2="272" gradientUnits="userSpaceOnUse">
<stop stop-color="#EE8279"/>
<stop offset="1" stop-color="#CD2113"/>
</linearGradient>
<linearGradient id="paint13_linear_110_11263" x1="180.351" y1="73.0624" x2="182.31" y2="51.2184" gradientUnits="userSpaceOnUse">
<stop stop-color="#CD2113"/>
<stop offset="1" stop-color="#EE8279"/>
</linearGradient>
<linearGradient id="paint14_linear_110_11263" x1="172.133" y1="144.217" x2="117" y2="107" gradientUnits="userSpaceOnUse">
<stop stop-color="#055F53"/>
<stop offset="1" stop-color="#16DCC1"/>
</linearGradient>
<linearGradient id="paint15_linear_110_11263" x1="164.704" y1="152.883" x2="135.213" y2="150.53" gradientUnits="userSpaceOnUse">
<stop stop-color="#055F53"/>
<stop offset="1" stop-color="#12C7AE"/>
</linearGradient>
<linearGradient id="paint16_linear_110_11263" x1="177.821" y1="118.917" x2="132.138" y2="115.958" gradientUnits="userSpaceOnUse">
<stop stop-color="#055F53"/>
<stop offset="1" stop-color="#16DCC1"/>
</linearGradient>
<linearGradient id="paint17_linear_110_11263" x1="153.609" y1="165.61" x2="128.887" y2="183.197" gradientUnits="userSpaceOnUse">
<stop stop-color="#12C7AE"/>
<stop offset="1" stop-color="#055F53"/>
</linearGradient>
<linearGradient id="paint18_linear_110_11263" x1="245.031" y1="171.901" x2="245.53" y2="171.94" gradientUnits="userSpaceOnUse">
<stop stop-color="#A11409"/>
<stop offset="1" stop-color="#CD2113"/>
</linearGradient>
<linearGradient id="paint19_linear_110_11263" x1="265.073" y1="115.051" x2="248.468" y2="140.596" gradientUnits="userSpaceOnUse">
<stop stop-color="#F05245"/>
<stop offset="1" stop-color="#A11409"/>
</linearGradient>
<linearGradient id="paint20_linear_110_11263" x1="172.716" y1="173.917" x2="144.836" y2="218.193" gradientUnits="userSpaceOnUse">
<stop stop-color="#F05245"/>
<stop offset="1" stop-color="#A11409"/>
</linearGradient>
<linearGradient id="paint21_linear_110_11263" x1="219.178" y1="131.796" x2="215.492" y2="179.06" gradientUnits="userSpaceOnUse">
<stop stop-color="#A11409"/>
<stop offset="0.526042" stop-color="#F05245"/>
<stop offset="1" stop-color="#A11409"/>
</linearGradient>
<linearGradient id="paint22_linear_110_11263" x1="150.5" y1="278" x2="70" y2="208" gradientUnits="userSpaceOnUse">
<stop offset="0.0227951" stop-color="#333357"/>
<stop offset="0.560264" stop-color="#525296"/>
<stop offset="1" stop-color="#AEB0F1"/>
</linearGradient>
<linearGradient id="paint23_linear_110_11263" x1="116.5" y1="161.5" x2="199.831" y2="252.237" gradientUnits="userSpaceOnUse">
<stop offset="0.09375" stop-color="#525296"/>
<stop offset="1" stop-color="#AEB0F1"/>
</linearGradient>
</defs>
</svg>
`;

const atomicGeneratedAnswerFeedbackModalCss = "*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}::before,::after{--tw-content:''}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--atomic-font-family);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;}body{margin:0;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0;}button,select{text-transform:none}button,input:where([type='button']),input:where([type='reset']),input:where([type='submit']){-webkit-appearance:button;background-color:transparent;background-image:none;}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af;}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af;}button,[role=\"button\"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto}[hidden]{display:none}:host{display:block;--tw-ring-inset:var(--tw-empty,  )}:host,button,input,select{font-family:var(--atomic-font-family);font-size:var(--atomic-text-base);font-weight:var(--atomic-font-normal)}:host(.atomic-hidden){display:none}*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.\\!container{width:100% !important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px !important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px !important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px !important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px !important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px !important}.container{max-width:1536px}}.\\!link{color:var(--atomic-primary)}.\\!link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link.focus-visible.js-focus-visible,.js-focus-visible .\\!link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.\\!link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link{color:var(--atomic-primary)}.link:hover{color:var(--atomic-primary-light);text-decoration-line:underline}.link.focus-visible.js-focus-visible,.js-focus-visible .link.focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.link:focus-visible{color:var(--atomic-primary-light);text-decoration-line:underline}.input-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.input-primary:hover{border-color:var(--atomic-primary-light)}.input-primary.focus-visible.js-focus-visible,.js-focus-visible .input-primary.focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.input-primary:focus-visible{border-color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-radio::before{--tw-content:attr(value);content:var(--tw-content)}.btn-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-primary);color:var(--atomic-on-primary)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-primary:hover{background-color:var(--atomic-primary-light)}.btn-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-primary.focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:focus-visible{background-color:var(--atomic-primary-light);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-primary:disabled{cursor:not-allowed;background-color:var(--atomic-disabled)}.btn-outline-primary{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-primary:hover{border-color:var(--atomic-primary-light);color:var(--atomic-primary-light)}.btn-outline-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-primary.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-primary:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-neutral)}.btn-text-primary{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-primary)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-primary:hover{background-color:var(--atomic-neutral-light)}.btn-text-primary.focus-visible.js-focus-visible,.js-focus-visible .btn-text-primary.focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-primary:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-neutral:hover{border-color:var(--atomic-primary);color:var(--atomic-primary)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:focus-visible{border-color:var(--atomic-primary);color:var(--atomic-primary);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-neutral:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error{border-radius:var(--atomic-border-radius);border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-outline-bg-error:hover{border-color:var(--atomic-error);color:var(--atomic-error)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:focus-visible{border-color:var(--atomic-error);color:var(--atomic-error);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--atomic-ring-primary)}.btn-outline-bg-error:disabled{cursor:not-allowed;border-color:var(--atomic-neutral);color:var(--atomic-on-background);opacity:0.5}.btn-outline-bg-error:hover{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error.focus-visible.js-focus-visible,.js-focus-visible .btn-outline-bg-error.focus-visible{background-color:var(--atomic-neutral-light)}.btn-outline-bg-error:focus-visible{background-color:var(--atomic-neutral-light)}.btn-text-neutral{border-radius:var(--atomic-border-radius);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-text-neutral:hover{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-text-neutral.focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-neutral:focus-visible{background-color:var(--atomic-neutral-light);color:var(--atomic-primary)}.btn-text-transparent{color:var(--atomic-on-background)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{outline-color:var(--atomic-primary-light)}.btn-text-transparent:hover{color:var(--atomic-primary-light)}.btn-text-transparent.focus-visible.js-focus-visible,.js-focus-visible .btn-text-transparent.focus-visible{color:var(--atomic-primary-light)}.btn-text-transparent:focus-visible{color:var(--atomic-primary-light)}.btn-square-neutral{border-width:1px;border-color:var(--atomic-neutral);background-color:var(--atomic-background);color:var(--atomic-on-background)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:focus-visible{outline:2px solid transparent;outline-offset:2px}.btn-square-neutral:hover{background-color:var(--atomic-neutral-light)}.btn-square-neutral.focus-visible.js-focus-visible,.js-focus-visible .btn-square-neutral.focus-visible{background-color:var(--atomic-neutral-light)}.btn-square-neutral:focus-visible{background-color:var(--atomic-neutral-light)}.btn-pill{border-radius:var(--atomic-border-radius-xl)}.btn-page{display:grid;place-items:center;border-width:0px;font-size:var(--atomic-text-lg)}.btn-page:hover{border-width:1px}.btn-page.focus-visible.js-focus-visible,.js-focus-visible .btn-page.focus-visible{border-width:1px}.btn-page:focus-visible{border-width:1px}.btn-page.selected{border-width:2px;border-color:var(--atomic-primary);font-weight:var(--atomic-font-bold)}.pointer-events-none{pointer-events:none}.pointer-events-auto{pointer-events:auto}.visible{visibility:visible}.invisible{visibility:hidden}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-0.5rem}.-top-2{top:-0.5rem}.bottom-0{bottom:0px}.bottom-2{bottom:0.5rem}.bottom-px{bottom:1px}.left-0{left:0px}.right-0{right:0px}.right-20{right:5rem}.right-6{right:1.5rem}.right-px{right:1px}.top-0{top:0px}.top-6{top:1.5rem}.top-\\[50\\%\\]{top:50%}.top-full{top:100%}.top-px{top:1px}.z-0{z-index:0}.z-1{z-index:1}.z-10{z-index:10}.z-\\[9998\\]{z-index:9998}.z-\\[9999\\]{z-index:9999}.order-last{order:9999}.col-span-2{grid-column:span 2 / span 2}.m-0{margin:0px}.m-2{margin:0.5rem}.-my-px{margin-top:-1px;margin-bottom:-1px}.mx-0{margin-left:0px;margin-right:0px}.mx-0\\.5{margin-left:0.125rem;margin-right:0.125rem}.mx-1{margin-left:0.25rem;margin-right:0.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:0.5rem;margin-bottom:0.5rem}.my-3{margin-top:0.75rem;margin-bottom:0.75rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-auto{margin-top:auto;margin-bottom:auto}.-mr-px{margin-right:-1px}.mb-0{margin-bottom:0px}.mb-1{margin-bottom:0.25rem}.mb-2{margin-bottom:0.5rem}.mb-3{margin-bottom:0.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.ml-1{margin-left:0.25rem}.ml-2{margin-left:0.5rem}.ml-4{margin-left:1rem}.ml-6{margin-left:1.5rem}.ml-auto{margin-left:auto}.mr-0{margin-right:0px}.mr-0\\.5{margin-right:0.125rem}.mr-1{margin-right:0.25rem}.mr-1\\.5{margin-right:0.375rem}.mr-2{margin-right:0.5rem}.mr-3{margin-right:0.75rem}.mr-6{margin-right:1.5rem}.mt-0{margin-top:0px}.mt-1{margin-top:0.25rem}.mt-1\\.5{margin-top:0.375rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:0.5rem}.mt-2\\.5{margin-top:0.625rem}.mt-3{margin-top:0.75rem}.mt-4{margin-top:1rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-px{margin-top:1px}.box-border{box-sizing:border-box}.line-clamp-1{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.line-clamp-4{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4}.line-clamp-none{overflow:visible;display:block;-webkit-box-orient:horizontal;-webkit-line-clamp:none}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-12{height:3rem}.h-2{height:0.5rem}.h-2\\.5{height:0.625rem}.h-3{height:0.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[2\\.6rem\\]{height:2.6rem}.h-auto{height:auto}.h-full{height:100%}.min-h-\\[2\\.5rem\\]{min-height:2.5rem}.min-h-\\[40px\\]{min-height:40px}.w-0{width:0px}.w-1{width:0.25rem}.w-1\\/2{width:50%}.w-10{width:2.5rem}.w-12{width:3rem}.w-2{width:0.5rem}.w-2\\.5{width:0.625rem}.w-20{width:5rem}.w-28{width:7rem}.w-3{width:0.75rem}.w-3\\.5{width:0.875rem}.w-3\\/5{width:60%}.w-32{width:8rem}.w-4{width:1rem}.w-44{width:11rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-7{width:1.75rem}.w-72{width:18rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[2\\.6rem\\]{width:2.6rem}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[2\\.5rem\\]{min-width:2.5rem}.min-w-\\[6rem\\]{min-width:6rem}.min-w-full{min-width:100%}.max-w-\\[15rem\\]{max-width:15rem}.max-w-\\[80\\%\\]{max-width:80%}.max-w-full{max-width:100%}.max-w-lg{max-width:32rem}.max-w-max{max-width:-moz-max-content;max-width:max-content}.flex-1{flex:1 1 0%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.basis-1\\/2{flex-basis:50%}.basis-8{flex-basis:2rem}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-1\\/2{--tw-translate-x:50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-100{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.scale-75{--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}@keyframes scaleUp{0%{transform:scale(0.7) translateY(150vh);opacity:0.7}100%{transform:scale(1) translateY(0px);opacity:1}}.animate-scaleUpModal{animation:scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards}@keyframes slideDown{0%{transform:translateY(0px);opacity:1}100%{transform:translateY(150vh);opacity:0.7}}.animate-slideDownModal{animation:slideDown .5s linear forwards}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize-none{resize:none}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-\\[min-content_auto\\]{grid-template-columns:min-content auto}.grid-cols-min-1fr{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.place-items-center{place-items:center}.items-start{align-items:flex-start}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-0{gap:0px}.gap-0\\.5{gap:0.125rem}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-3{gap:0.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-1{-moz-column-gap:0.25rem;column-gap:0.25rem}.gap-x-1\\.5{-moz-column-gap:0.375rem;column-gap:0.375rem}.gap-x-2{-moz-column-gap:0.5rem;column-gap:0.5rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-y-0{row-gap:0px}.gap-y-0\\.5{row-gap:0.125rem}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.25rem * var(--tw-space-x-reverse));margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))}.space-x-1\\.5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.375rem * var(--tw-space-x-reverse));margin-left:calc(0.375rem * calc(1 - var(--tw-space-x-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-neutral>:not([hidden])~:not([hidden]){border-color:var(--atomic-neutral)}.self-start{align-self:flex-start}.self-center{align-self:center}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.overflow-x-scroll{overflow-x:scroll}.scroll-smooth{scroll-behavior:smooth}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.break-all{word-break:break-all}.rounded{border-radius:var(--atomic-border-radius)}.rounded-\\[100\\%\\]{border-radius:100%}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:var(--atomic-border-radius-lg)}.rounded-md{border-radius:var(--atomic-border-radius-md)}.rounded-none{border-radius:0px}.rounded-l-none{border-top-left-radius:0px;border-bottom-left-radius:0px}.rounded-r-md{border-top-right-radius:var(--atomic-border-radius-md);border-bottom-right-radius:var(--atomic-border-radius-md)}.border{border-width:1px}.border-0{border-width:0px}.border-b{border-bottom-width:1px}.border-l{border-left-width:1px}.border-r{border-right-width:1px}.border-t{border-top-width:1px}.border-solid{border-style:solid}.border-neutral{border-color:var(--atomic-neutral)}.border-neutral-dark{border-color:var(--atomic-neutral-dark)}.border-primary{border-color:var(--atomic-primary)}.bg-\\[\\#F1F2FF\\]{--tw-bg-opacity:1;background-color:rgb(241 242 255 / var(--tw-bg-opacity))}.bg-background{background-color:var(--atomic-background)}.bg-error{background-color:var(--atomic-error)}.bg-neutral{background-color:var(--atomic-neutral)}.bg-neutral-dark{background-color:var(--atomic-neutral-dark)}.bg-neutral-light{background-color:var(--atomic-neutral-light)}.bg-primary{background-color:var(--atomic-primary)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-gradient-to-l{background-image:linear-gradient(to left, var(--tw-gradient-stops))}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-background-60{--tw-gradient-from:var(--atomic-background) 60% var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.fill-current{fill:currentColor}.stroke-\\[1\\.25\\]{stroke-width:1.25}.p-1{padding:0.25rem}.p-2{padding:0.5rem}.p-2\\.5{padding:0.625rem}.p-3{padding:0.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-7{padding:1.75rem}.p-8{padding:2rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.px-2\\.5{padding-left:0.625rem;padding-right:0.625rem}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-2\\.5{padding-top:0.625rem;padding-bottom:0.625rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-3\\.5{padding-top:0.875rem;padding-bottom:0.875rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-\\[0\\.625rem\\]{padding-top:0.625rem;padding-bottom:0.625rem}.pb-1{padding-bottom:0.25rem}.pb-3{padding-bottom:0.75rem}.pb-4{padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-0{padding-left:0px}.pl-1{padding-left:0.25rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:0.75rem}.pl-9{padding-left:2.25rem}.pr-2{padding-right:0.5rem}.pr-24{padding-right:6rem}.pr-6{padding-right:1.5rem}.pt-0{padding-top:0px}.pt-0\\.5{padding-top:0.125rem}.text-left{text-align:left}.text-center{text-align:center}.align-baseline{vertical-align:baseline}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.text-2xl{font-size:var(--atomic-text-2xl)}.text-base{font-size:var(--atomic-text-base)}.text-lg{font-size:var(--atomic-text-lg)}.text-sm{font-size:var(--atomic-text-sm)}.text-xl{font-size:var(--atomic-text-xl)}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:var(--atomic-font-bold)}.font-light{font-weight:300}.font-medium{font-weight:500}.font-normal{font-weight:var(--atomic-font-normal)}.font-semibold{font-weight:600}.italic{font-style:italic}.leading-10{line-height:2.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-8{line-height:2rem}.text-\\[\\#54698D\\]{--tw-text-opacity:1;color:rgb(84 105 141 / var(--tw-text-opacity))}.text-error{color:var(--atomic-error)}.text-inherit{color:inherit}.text-neutral{color:var(--atomic-neutral)}.text-neutral-dark{color:var(--atomic-neutral-dark)}.text-on-background{color:var(--atomic-on-background)}.text-on-primary{color:var(--atomic-on-primary)}.text-primary{color:var(--atomic-primary)}.text-success{color:var(--atomic-success)}.text-transparent{color:transparent}.line-through{text-decoration-line:line-through}.placeholder-neutral-dark::-moz-placeholder{color:var(--atomic-neutral-dark)}.placeholder-neutral-dark::placeholder{color:var(--atomic-neutral-dark)}.opacity-0{opacity:0}.opacity-50{opacity:0.5}.opacity-80{opacity:0.8}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-inner-primary{--tw-shadow:inset 0 0 0 1px var(--atomic-primary);--tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.outline-error{outline-color:var(--atomic-error)}.outline-neutral{outline-color:var(--atomic-neutral)}.outline-primary{outline-color:var(--atomic-primary)}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.ring-primary{--tw-ring-color:var(--atomic-primary)}.ring-ring-primary{--tw-ring-color:var(--atomic-ring-primary)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-visi-opacity{transition-property:visibility, opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.no-outline.focus-visible.js-focus-visible,.js-focus-visible .no-outline.focus-visible{outline:2px solid transparent;outline-offset:2px}.no-outline:focus-visible{outline:2px solid transparent;outline-offset:2px}.accessibility-only{position:absolute;display:block;height:0;overflow:hidden;margin:0}.text-inherit{font-size:inherit}.cursor-inherit{cursor:inherit}.shadow-lg{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow:0px 2px 8px rgba(229, 232, 232, 0.75)}.text-bg-primary{color:var(--atomic-primary);background:var(--atomic-primary-background)}.ripple{position:absolute;pointer-events:none;transform:scale(0);border-radius:50%;animation:ripple var(--animation-duration) linear}.ripple-relative{position:relative}.ripple-parent{overflow:hidden}@keyframes ripple{to{transform:scale(4);opacity:0}}.focus-within\\:border-disabled:focus-within{border-color:var(--atomic-disabled)}.focus-within\\:border-primary:focus-within{border-color:var(--atomic-primary)}.focus-within\\:ring:focus-within{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-neutral:focus-within{--tw-ring-color:var(--atomic-neutral)}.focus-within\\:ring-ring-primary:focus-within{--tw-ring-color:var(--atomic-ring-primary)}.hover\\:border-error:hover{border-color:var(--atomic-error)}.hover\\:border-primary-light:hover{border-color:var(--atomic-primary-light)}.hover\\:bg-error:hover{background-color:var(--atomic-error)}.hover\\:bg-primary-light:hover{background-color:var(--atomic-primary-light)}.hover\\:bg-transparent:hover{background-color:transparent}.hover\\:fill-white:hover{fill:#fff}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}.hover\\:shadow:hover{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.focus\\:opacity-100:focus{opacity:1}.focus-visible\\:border-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-error.focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-error:focus-visible{border-color:var(--atomic-error)}.focus-visible\\:border-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:border-primary-light.focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:border-primary-light:focus-visible{border-color:var(--atomic-primary-light)}.focus-visible\\:bg-error.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-error.focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-error:focus-visible{background-color:var(--atomic-error)}.focus-visible\\:bg-neutral-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-neutral-light.focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-neutral-light:focus-visible{background-color:var(--atomic-neutral-light)}.focus-visible\\:bg-primary-light.focus-visible.js-focus-visible,.js-focus-visible .focus-visible\\:bg-primary-light.focus-visible{background-color:var(--atomic-primary-light)}.focus-visible\\:bg-primary-light:focus-visible{background-color:var(--atomic-primary-light)}.group:hover .group-hover\\:visible{visibility:visible}.group:hover .group-hover\\:text-primary{color:var(--atomic-primary)}.group:hover .group-hover\\:text-primary-light{color:var(--atomic-primary-light)}.group:focus .group-focus\\:text-primary{color:var(--atomic-primary)}.group:focus .group-focus\\:text-primary-light{color:var(--atomic-primary-light)}.peer:hover~.peer-hover\\:text-error{color:var(--atomic-error)}@media (min-width: 1024px){.desktop-only\\:mt-6{margin-top:1.5rem}.desktop-only\\:flex{display:flex}}@media not all and (min-width: 1024px){.mobile-only\\:mt-4{margin-top:1rem}.mobile-only\\:hidden{display:none}.mobile-only\\:h-10{height:2.5rem}.mobile-only\\:h-2{height:0.5rem}.mobile-only\\:h-3{height:0.75rem}.mobile-only\\:w-10{width:2.5rem}.mobile-only\\:w-2{width:0.5rem}.mobile-only\\:w-3{width:0.75rem}}";
const AtomicGeneratedAnswerFeedbackModalStyle0 = atomicGeneratedAnswerFeedbackModalCss;

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
const AtomicGeneratedAnswerFeedbackModal$1 = /*@__PURE__*/ proxyCustomElement(class AtomicGeneratedAnswerFeedbackModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.feedbackSent = createEvent(this, "feedbackSent", 7);
        /**
         * Indicates whether the modal is open.
         */
        this.isOpen = false;
        this.feedbackSubmitted = false;
        this.formId = randomID('atomic-generated-answer-feedback-modal-form-');
        this.updateBreakpoints = once(() => updateBreakpoints(this.host));
        this.isOpen = false;
        this.generatedAnswer = undefined;
        this.error = undefined;
        this.currentAnswer = undefined;
        this.feedbackSubmitted = false;
    }
    watchToggleOpen(isOpen) {
        if (isOpen) {
            this.generatedAnswer.openFeedbackModal();
        }
    }
    setIsOpen(isOpen) {
        this.isOpen = isOpen;
    }
    close() {
        this.feedbackSubmitted = false;
        if (this.detailsInputRef) {
            this.detailsInputRef.value = '';
        }
        this.currentAnswer = undefined;
        this.setIsOpen(false);
        this.generatedAnswer.closeFeedbackModal();
    }
    setCurrentAnswer(answer) {
        this.currentAnswer = answer;
    }
    sendFeedback() {
        if (this.currentAnswer === 'other') {
            this.generatedAnswer.sendDetailedFeedback(this.detailsInputRef.value);
        }
        else {
            this.generatedAnswer.sendFeedback(this.currentAnswer);
        }
        this.feedbackSent.emit();
    }
    renderHeader() {
        return (h("div", { slot: "header", part: "modal-header", class: "w-full flex justify-between items-center" }, h("h1", null, this.bindings.i18n.t('feedback')), h(IconButton, { style: "text-transparent", class: "search-clear-button", onClick: () => this.close(), icon: CloseIcon, partPrefix: 'close', ariaLabel: this.bindings.i18n.t('modal-done') })));
    }
    renderOptions() {
        return (h("fieldset", null, h("legend", { part: "reason-title", class: "text-base" }, this.bindings.i18n.t('generated-answer-feedback-instructions')), AtomicGeneratedAnswerFeedbackModal.options.map(({ id, localeKey, correspondingAnswer }) => (h("div", { class: `flex items-center ${correspondingAnswer} mobile-only:mt-4 desktop-only:mt-6`, key: id, part: "reason" }, h("input", { part: "reason-radio", type: "radio", name: "answer", id: id, checked: this.currentAnswer === correspondingAnswer, onChange: (e) => {
                var _a;
                return ((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.checked) &&
                    this.setCurrentAnswer(correspondingAnswer);
            }, class: "mr-2", required: true }), h("label", { part: "reason-label", htmlFor: id }, this.bindings.i18n.t(localeKey)))))));
    }
    renderDetails() {
        if (this.currentAnswer !== 'other') {
            return;
        }
        return (h("fieldset", null, h("textarea", { part: "details-input", name: "answer-details", ref: (detailsInput) => (this.detailsInputRef = detailsInput), class: "mt-2 p-2 w-full text-base leading-5 border border-neutral resize-none rounded", rows: 4, placeholder: this.bindings.i18n.t('add-details'), required: true })));
    }
    renderBody() {
        return !this.feedbackSubmitted ? (h("form", { part: "form", id: this.formId, slot: "body", onSubmit: (e) => {
                e.preventDefault();
                this.feedbackSubmitted = true;
                this.sendFeedback();
            }, class: "flex flex-col gap-8 text-base leading-4 text-neutral-dark p-2" }, this.renderOptions(), this.renderDetails())) : (h("div", { slot: "body", class: "flex flex-col items-center gap-4 my-4" }, h("atomic-icon", { icon: Success, class: "w-48" }), h("p", { class: "text-base" }, this.bindings.i18n.t('generated-answer-feedback-success'))));
    }
    renderFooter() {
        return (h("div", { slot: "footer", part: "modalFooter" }, !this.feedbackSubmitted ? (h("div", { part: "buttons", class: "flex justify-end gap-2 px-4" }, h(Button, { part: "cancel-button", style: "outline-neutral", class: "text-primary flex justify-center text-sm leading-4 p-2", ariaLabel: this.bindings.i18n.t('close'), onClick: () => this.close() }, this.bindings.i18n.t('close')), h(Button, { part: "submit-button", style: "primary", type: "submit", form: this.formId, class: "flex justify-center text-sm leading-4 p-2", ariaLabel: this.bindings.i18n.t('feedback-send') }, this.bindings.i18n.t('feedback-send')))) : (h("div", { part: "buttons", class: "flex justify-end gap-2 p-2" }, h(Button, { part: "cancel-button", style: "primary", onClick: () => this.close(), class: "flex justify-center text-sm leading-4 p-2", ariaLabel: this.bindings.i18n.t('modal-done') }, this.bindings.i18n.t('modal-done'))))));
    }
    render() {
        this.updateBreakpoints();
        return (h("atomic-modal", { key: '2ae04870cc12d1a3f074ecaed5bc7c68b418760a', fullscreen: false, isOpen: this.isOpen, close: () => this.close(), container: this.host, exportparts: "backdrop,container,header,header-wrapper,header-ruler,body,body-wrapper,footer,footer-wrapper,footer-wrapper" }, this.renderHeader(), this.renderBody(), this.renderFooter()));
    }
    get host() { return this; }
    static get watchers() { return {
        "isOpen": ["watchToggleOpen"]
    }; }
    static get style() { return AtomicGeneratedAnswerFeedbackModalStyle0; }
}, [1, "atomic-generated-answer-feedback-modal", {
        "isOpen": [1540, "is-open"],
        "generatedAnswer": [1040],
        "error": [32],
        "currentAnswer": [32],
        "feedbackSubmitted": [32]
    }, undefined, {
        "isOpen": ["watchToggleOpen"]
    }]);
AtomicGeneratedAnswerFeedbackModal$1.options = [
    {
        id: 'irrelevant',
        localeKey: 'irrelevant',
        correspondingAnswer: 'irrelevant',
    },
    {
        id: 'notAccurate',
        localeKey: 'not-accurate',
        correspondingAnswer: 'notAccurate',
    },
    {
        id: 'outOfDate',
        localeKey: 'out-of-date',
        correspondingAnswer: 'outOfDate',
    },
    {
        id: 'harmful',
        localeKey: 'harmful',
        correspondingAnswer: 'harmful',
    },
    {
        id: 'other',
        localeKey: 'other',
        correspondingAnswer: 'other',
    },
];
__decorate([
    InitializeBindings()
], AtomicGeneratedAnswerFeedbackModal$1.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-generated-answer-feedback-modal", "atomic-component-error", "atomic-focus-trap", "atomic-icon", "atomic-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-generated-answer-feedback-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicGeneratedAnswerFeedbackModal$1);
            }
            break;
        case "atomic-component-error":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atomic-focus-trap":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atomic-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicGeneratedAnswerFeedbackModal = AtomicGeneratedAnswerFeedbackModal$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicGeneratedAnswerFeedbackModal, defineCustomElement };

//# sourceMappingURL=atomic-generated-answer-feedback-modal.js.map