import { r as registerInstance, h } from './index-53978573.js';

/**
 * @license
 *
 * Copyright 2024 Coveo Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// ponyfills/fetch-ponyfill-browser.js
var require_fetch_ponyfill_browser = __commonJS({
  "ponyfills/fetch-ponyfill-browser.js"(exports, module) {
    "use strict";
    module.exports = fetch;
  }
});

// node_modules/exponential-backoff/dist/options.js
var require_options = __commonJS({
  "node_modules/exponential-backoff/dist/options.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaultOptions = {
      delayFirstAttempt: false,
      jitter: "none",
      maxDelay: Infinity,
      numOfAttempts: 10,
      retry: function() {
        return true;
      },
      startingDelay: 100,
      timeMultiple: 2
    };
    function getSanitizedOptions(options) {
      var sanitized = __assign(__assign({}, defaultOptions), options);
      if (sanitized.numOfAttempts < 1) {
        sanitized.numOfAttempts = 1;
      }
      return sanitized;
    }
    exports.getSanitizedOptions = getSanitizedOptions;
  }
});

// node_modules/exponential-backoff/dist/jitter/full/full.jitter.js
var require_full_jitter = __commonJS({
  "node_modules/exponential-backoff/dist/jitter/full/full.jitter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fullJitter(delay) {
      var jitteredDelay = Math.random() * delay;
      return Math.round(jitteredDelay);
    }
    exports.fullJitter = fullJitter;
  }
});

// node_modules/exponential-backoff/dist/jitter/no/no.jitter.js
var require_no_jitter = __commonJS({
  "node_modules/exponential-backoff/dist/jitter/no/no.jitter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function noJitter(delay) {
      return delay;
    }
    exports.noJitter = noJitter;
  }
});

// node_modules/exponential-backoff/dist/jitter/jitter.factory.js
var require_jitter_factory = __commonJS({
  "node_modules/exponential-backoff/dist/jitter/jitter.factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var full_jitter_1 = require_full_jitter();
    var no_jitter_1 = require_no_jitter();
    function JitterFactory(options) {
      switch (options.jitter) {
        case "full":
          return full_jitter_1.fullJitter;
        case "none":
        default:
          return no_jitter_1.noJitter;
      }
    }
    exports.JitterFactory = JitterFactory;
  }
});

// node_modules/exponential-backoff/dist/delay/delay.base.js
var require_delay_base = __commonJS({
  "node_modules/exponential-backoff/dist/delay/delay.base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jitter_factory_1 = require_jitter_factory();
    var Delay = (
      /** @class */
      function() {
        function Delay2(options) {
          this.options = options;
          this.attempt = 0;
        }
        Delay2.prototype.apply = function() {
          var _this = this;
          return new Promise(function(resolve) {
            return setTimeout(resolve, _this.jitteredDelay);
          });
        };
        Delay2.prototype.setAttemptNumber = function(attempt2) {
          this.attempt = attempt2;
        };
        Object.defineProperty(Delay2.prototype, "jitteredDelay", {
          get: function() {
            var jitter = jitter_factory_1.JitterFactory(this.options);
            return jitter(this.delay);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Delay2.prototype, "delay", {
          get: function() {
            var constant = this.options.startingDelay;
            var base = this.options.timeMultiple;
            var power = this.numOfDelayedAttempts;
            var delay = constant * Math.pow(base, power);
            return Math.min(delay, this.options.maxDelay);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Delay2.prototype, "numOfDelayedAttempts", {
          get: function() {
            return this.attempt;
          },
          enumerable: true,
          configurable: true
        });
        return Delay2;
      }()
    );
    exports.Delay = Delay;
  }
});

// node_modules/exponential-backoff/dist/delay/skip-first/skip-first.delay.js
var require_skip_first_delay = __commonJS({
  "node_modules/exponential-backoff/dist/delay/skip-first/skip-first.delay.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f2, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f2 = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var delay_base_1 = require_delay_base();
    var SkipFirstDelay = (
      /** @class */
      function(_super) {
        __extends(SkipFirstDelay2, _super);
        function SkipFirstDelay2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        SkipFirstDelay2.prototype.apply = function() {
          return __awaiter2(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              return [2, this.isFirstAttempt ? true : _super.prototype.apply.call(this)];
            });
          });
        };
        Object.defineProperty(SkipFirstDelay2.prototype, "isFirstAttempt", {
          get: function() {
            return this.attempt === 0;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(SkipFirstDelay2.prototype, "numOfDelayedAttempts", {
          get: function() {
            return this.attempt - 1;
          },
          enumerable: true,
          configurable: true
        });
        return SkipFirstDelay2;
      }(delay_base_1.Delay)
    );
    exports.SkipFirstDelay = SkipFirstDelay;
  }
});

// node_modules/exponential-backoff/dist/delay/always/always.delay.js
var require_always_delay = __commonJS({
  "node_modules/exponential-backoff/dist/delay/always/always.delay.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var delay_base_1 = require_delay_base();
    var AlwaysDelay = (
      /** @class */
      function(_super) {
        __extends(AlwaysDelay2, _super);
        function AlwaysDelay2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return AlwaysDelay2;
      }(delay_base_1.Delay)
    );
    exports.AlwaysDelay = AlwaysDelay;
  }
});

// node_modules/exponential-backoff/dist/delay/delay.factory.js
var require_delay_factory = __commonJS({
  "node_modules/exponential-backoff/dist/delay/delay.factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var skip_first_delay_1 = require_skip_first_delay();
    var always_delay_1 = require_always_delay();
    function DelayFactory(options, attempt2) {
      var delay = initDelayClass(options);
      delay.setAttemptNumber(attempt2);
      return delay;
    }
    exports.DelayFactory = DelayFactory;
    function initDelayClass(options) {
      if (!options.delayFirstAttempt) {
        return new skip_first_delay_1.SkipFirstDelay(options);
      }
      return new always_delay_1.AlwaysDelay(options);
    }
  }
});

// node_modules/exponential-backoff/dist/backoff.js
var require_backoff = __commonJS({
  "node_modules/exponential-backoff/dist/backoff.js"(exports) {
    "use strict";
    var __awaiter2 = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1) throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f2, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f2 = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var options_1 = require_options();
    var delay_factory_1 = require_delay_factory();
    function backOff2(request, options) {
      if (options === void 0) {
        options = {};
      }
      return __awaiter2(this, void 0, void 0, function() {
        var sanitizedOptions, backOff3;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              sanitizedOptions = options_1.getSanitizedOptions(options);
              backOff3 = new BackOff(request, sanitizedOptions);
              return [4, backOff3.execute()];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    }
    exports.backOff = backOff2;
    var BackOff = (
      /** @class */
      function() {
        function BackOff2(request, options) {
          this.request = request;
          this.options = options;
          this.attemptNumber = 0;
        }
        BackOff2.prototype.execute = function() {
          return __awaiter2(this, void 0, void 0, function() {
            var e_1, shouldRetry;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  if (!!this.attemptLimitReached) return [3, 7];
                  _a.label = 1;
                case 1:
                  _a.trys.push([1, 4, , 6]);
                  return [4, this.applyDelay()];
                case 2:
                  _a.sent();
                  return [4, this.request()];
                case 3:
                  return [2, _a.sent()];
                case 4:
                  e_1 = _a.sent();
                  this.attemptNumber++;
                  return [4, this.options.retry(e_1, this.attemptNumber)];
                case 5:
                  shouldRetry = _a.sent();
                  if (!shouldRetry || this.attemptLimitReached) {
                    throw e_1;
                  }
                  return [3, 6];
                case 6:
                  return [3, 0];
                case 7:
                  throw new Error("Something went wrong.");
              }
            });
          });
        };
        Object.defineProperty(BackOff2.prototype, "attemptLimitReached", {
          get: function() {
            return this.attemptNumber >= this.options.numOfAttempts;
          },
          enumerable: true,
          configurable: true
        });
        BackOff2.prototype.applyDelay = function() {
          return __awaiter2(this, void 0, void 0, function() {
            var delay;
            return __generator(this, function(_a) {
              switch (_a.label) {
                case 0:
                  delay = delay_factory_1.DelayFactory(this.options, this.attemptNumber);
                  return [4, delay.apply()];
                case 1:
                  _a.sent();
                  return [
                    2
                    /*return*/
                  ];
              }
            });
          });
        };
        return BackOff2;
      }()
    );
  }
});

// ../../node_modules/abab/lib/atob.js
var require_atob = __commonJS({
  "../../node_modules/abab/lib/atob.js"(exports, module) {
    "use strict";
    function atob(data) {
      if (arguments.length === 0) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      data = `${data}`;
      data = data.replace(/[ \t\n\f\r]/g, "");
      if (data.length % 4 === 0) {
        data = data.replace(/==?$/, "");
      }
      if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) {
        return null;
      }
      let output = "";
      let buffer = 0;
      let accumulatedBits = 0;
      for (let i = 0; i < data.length; i++) {
        buffer <<= 6;
        buffer |= atobLookup(data[i]);
        accumulatedBits += 6;
        if (accumulatedBits === 24) {
          output += String.fromCharCode((buffer & 16711680) >> 16);
          output += String.fromCharCode((buffer & 65280) >> 8);
          output += String.fromCharCode(buffer & 255);
          buffer = accumulatedBits = 0;
        }
      }
      if (accumulatedBits === 12) {
        buffer >>= 4;
        output += String.fromCharCode(buffer);
      } else if (accumulatedBits === 18) {
        buffer >>= 2;
        output += String.fromCharCode((buffer & 65280) >> 8);
        output += String.fromCharCode(buffer & 255);
      }
      return output;
    }
    var keystr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function atobLookup(chr) {
      const index = keystr.indexOf(chr);
      return index < 0 ? void 0 : index;
    }
    module.exports = atob;
  }
});

// ../../node_modules/abab/lib/btoa.js
var require_btoa = __commonJS({
  "../../node_modules/abab/lib/btoa.js"(exports, module) {
    "use strict";
    function btoa2(s) {
      if (arguments.length === 0) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      let i;
      s = `${s}`;
      for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) {
          return null;
        }
      }
      let out = "";
      for (i = 0; i < s.length; i += 3) {
        const groupsOfSix = [void 0, void 0, void 0, void 0];
        groupsOfSix[0] = s.charCodeAt(i) >> 2;
        groupsOfSix[1] = (s.charCodeAt(i) & 3) << 4;
        if (s.length > i + 1) {
          groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
          groupsOfSix[2] = (s.charCodeAt(i + 1) & 15) << 2;
        }
        if (s.length > i + 2) {
          groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
          groupsOfSix[3] = s.charCodeAt(i + 2) & 63;
        }
        for (let j = 0; j < groupsOfSix.length; j++) {
          if (typeof groupsOfSix[j] === "undefined") {
            out += "=";
          } else {
            out += btoaLookup(groupsOfSix[j]);
          }
        }
      }
      return out;
    }
    var keystr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function btoaLookup(index) {
      if (index >= 0 && index < 64) {
        return keystr[index];
      }
      return void 0;
    }
    module.exports = btoa2;
  }
});

// ../../node_modules/abab/index.js
var require_abab = __commonJS({
  "../../node_modules/abab/index.js"(exports, module) {
    "use strict";
    var atob = require_atob();
    var btoa2 = require_btoa();
    module.exports = {
      atob,
      btoa: btoa2
    };
  }
});

// ../../node_modules/node-abort-controller/browser.js
var require_browser = __commonJS({
  "../../node_modules/node-abort-controller/browser.js"(exports, module) {
    "use strict";
    var _global = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : (
      /* otherwise */
      void 0
    );
    if (!_global) {
      throw new Error(
        `Unable to find global scope. Are you sure this is running in the browser?`
      );
    }
    if (!_global.AbortController) {
      throw new Error(
        `Could not find "AbortController" in the global scope. You need to polyfill it first`
      );
    }
    module.exports.AbortController = _global.AbortController;
  }
});

// ponyfills/magic-cookie-browser.js
var require_magic_cookie_browser = __commonJS({
  "ponyfills/magic-cookie-browser.js"(exports, module) {
    "use strict";
    var pendragonCookieValueMatcher = /(^|; )Coveo-Pendragon=([^;]*)/;
    module.exports = () => pendragonCookieValueMatcher.exec(document.cookie)?.pop() || null;
  }
});

// ../../node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "../../node_modules/dayjs/dayjs.min.js"(exports, module) {
    "use strict";
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r2 = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f2 = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r3 = String(t2);
        return !r3 || r3.length >= e2 ? t2 : "" + Array(e2 + 1 - r3.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r3 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r3 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r3, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r3 + (s2 ? -1 : 1), c);
        return +(-(r3 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r2, Q: f2 }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r3) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r3 && i2 && (g = i2), i2 || !r3 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r3 = e2.match($);
              if (r3) {
                var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r3 = !!b.u(e2) || e2, f3 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r3 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h:
              return r3 ? l2(1, 0) : l2(31, 11);
            case c:
              return r3 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f3 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f3 + "Date", n2[d] = f3 + "Date", n2[c] = f3 + "Month", n2[h] = f3 + "FullYear", n2[u] = f3 + "Hours", n2[s] = f3 + "Minutes", n2[i] = f3 + "Seconds", n2[r2] = f3 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r3, f3) {
          var d2, l2 = this;
          r3 = Number(r3);
          var $2 = b.p(f3), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r3)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r3);
          if ($2 === h) return this.set(h, this.$y + r3);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r3 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f3 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r3)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f3 || function(t3, e3, n3) {
            var r4 = t3 < 12 ? "AM" : "PM";
            return n3 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y, function(t3, r4) {
            return r4 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r3, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f2:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r3 = w(t2, e2, true);
          return r3 && (n2.$L = r3), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// ../../node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "../../node_modules/dayjs/plugin/timezone.js"(exports, module) {
    "use strict";
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    }(exports, function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r2, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r3 = function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r4 = e[o3];
            return r4 || (r4 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r4), r4;
          }(n2, i2);
          return r3.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r3 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f3 = i2[u2], s2 = f3.type, m = f3.value, c = t[s2];
            c >= 0 && (r3[c] = parseInt(m, 10));
          }
          var d = r3[3], l = 24 === d ? 0 : d, h = r3[0] + "-" + r3[1] + "-" + r3[2] + " " + l + ":" + r3[4] + ":" + r3[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f2 = i.prototype;
        f2.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r2);
          var n2 = this.utcOffset(), i2 = this.toDate(), a2 = i2.toLocaleString("en-US", { timeZone: t2 }), u2 = Math.round((i2 - new Date(a2)) / 1e3 / 60), f3 = o(a2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u2, true);
          if (e2) {
            var s2 = f3.utcOffset();
            f3 = f3.add(n2 - s2, "minute");
          }
          return f3.$x.$timezone = t2, f3;
        }, f2.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          });
          return n2 && n2.value;
        };
        var s = f2.startOf;
        f2.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone) return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r2, f3 = u(+o(), a2);
          if ("string" != typeof t2) return o(t2).tz(a2);
          var s2 = function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2) return [i3, e3];
            var r3 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r3 ? [i3, o2] : [t3 - 60 * Math.min(o2, r3) * 1e3, Math.max(o2, r3)];
          }(o.utc(t2, i2).valueOf(), f3, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r2 = t2;
        };
      };
    });
  }
});

// ../../node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "../../node_modules/dayjs/plugin/utc.js"(exports, module) {
    "use strict";
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    }(exports, function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f2, n) {
        var u = f2.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f2(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var o = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
        };
        var r2 = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else r2.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f3) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f4 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f4[0], u3 = 60 * +f4[1] + +f4[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          }(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
          if (f3) return o2.$offset = u2, o2.$u = 0 === s2, o2;
          if (0 !== s2) {
            var r3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (o2 = this.local().add(u2 + r3, t)).$offset = u2, o2.$x.$localOffset = r3;
          } else o2 = this.utc();
          return o2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f3 = n(t2).local();
          return c.call(s2, f3, i2, e2);
        };
      };
    });
  }
});

// ../../node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "../../node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o) {
      try {
        return JSON.stringify(o);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f2, args, opts) {
      var ss = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f2 === "object" && f2 !== null) {
        var len = args.length + offset;
        if (len === 1) return f2;
        var objects = new Array(len);
        objects[0] = ss(f2);
        for (var index = 1; index < len; index++) {
          objects[index] = ss(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f2 !== "string") {
        return f2;
      }
      var argLen = args.length;
      if (argLen === 0) return f2;
      var str = "";
      var a = 1 - offset;
      var lastPos = -1;
      var flen = f2 && f2.length || 0;
      for (var i = 0; i < flen; ) {
        if (f2.charCodeAt(i) === 37 && i + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f2.charCodeAt(i + 1)) {
            case 100:
            case 102:
              if (a >= argLen)
                break;
              if (args[a] == null) break;
              if (lastPos < i)
                str += f2.slice(lastPos, i);
              str += Number(args[a]);
              lastPos = i + 2;
              i++;
              break;
            case 105:
              if (a >= argLen)
                break;
              if (args[a] == null) break;
              if (lastPos < i)
                str += f2.slice(lastPos, i);
              str += Math.floor(Number(args[a]));
              lastPos = i + 2;
              i++;
              break;
            case 79:
            case 111:
            case 106:
              if (a >= argLen)
                break;
              if (args[a] === void 0) break;
              if (lastPos < i)
                str += f2.slice(lastPos, i);
              var type = typeof args[a];
              if (type === "string") {
                str += "'" + args[a] + "'";
                lastPos = i + 2;
                i++;
                break;
              }
              if (type === "function") {
                str += args[a].name || "<anonymous>";
                lastPos = i + 2;
                i++;
                break;
              }
              str += ss(args[a]);
              lastPos = i + 2;
              i++;
              break;
            case 115:
              if (a >= argLen)
                break;
              if (lastPos < i)
                str += f2.slice(lastPos, i);
              str += String(args[a]);
              lastPos = i + 2;
              i++;
              break;
            case 37:
              if (lastPos < i)
                str += f2.slice(lastPos, i);
              str += "%";
              lastPos = i + 2;
              i++;
              a--;
              break;
          }
          ++a;
        }
        ++i;
      }
      if (lastPos === -1)
        return f2;
      else if (lastPos < flen) {
        str += f2.slice(lastPos);
      }
      return str;
    }
  }
});

// ../../node_modules/pino/browser.js
var require_browser2 = __commonJS({
  "../../node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino2;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue,
      errWithCause: asErrValue
    };
    function levelToValue(level, logger) {
      return level === "silent" ? Infinity : logger.levels.values[level];
    }
    var baseLogFunctionSymbol = Symbol("pino.logFuncs");
    var hierarchySymbol = Symbol("pino.hierarchy");
    var logFallbackMap = {
      error: "log",
      fatal: "error",
      warn: "error",
      info: "log",
      debug: "log",
      trace: "log"
    };
    function appendChildLogger(parentLogger, childLogger) {
      const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
      };
      childLogger[hierarchySymbol] = newEntry;
    }
    function setupBaseLogFunctions(logger, levels, proto2) {
      const logFunctions = {};
      levels.forEach((level) => {
        logFunctions[level] = proto2[level] ? proto2[level] : _console[level] || _console[logFallbackMap[level] || "log"] || noop;
      });
      logger[baseLogFunctionSymbol] = logFunctions;
    }
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
          return k !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino2(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto2 = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const customLevels = Object.keys(opts.customLevels || {});
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"].concat(customLevels);
      if (typeof proto2 === "function") {
        levels.forEach(function(level2) {
          proto2[level2] = proto2;
        });
      }
      if (opts.enabled === false || opts.browser.disabled) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto2);
      if (!logger.log) logger.log = noop;
      setupBaseLogFunctions(logger, levels, proto2);
      appendChildLogger({}, logger);
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = getLevels(opts);
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return levelToValue(this.level, this);
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(this, setOpts, logger, "error");
        set2(this, setOpts, logger, "fatal");
        set2(this, setOpts, logger, "warn");
        set2(this, setOpts, logger, "info");
        set2(this, setOpts, logger, "debug");
        set2(this, setOpts, logger, "trace");
        customLevels.forEach((level3) => {
          set2(this, setOpts, logger, level3);
        });
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.bindings = bindings;
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        const newLogger = new Child(this);
        appendChildLogger(this, newLogger);
        newLogger.level = this.level;
        return newLogger;
      }
      return logger;
    }
    function getLevels(opts) {
      const customLevels = opts.customLevels || {};
      const values = Object.assign({}, pino2.levels.values, customLevels);
      const labels = Object.assign({}, pino2.levels.labels, invertObject(customLevels));
      return {
        values,
        labels
      };
    }
    function invertObject(obj) {
      const inverted = {};
      Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
      });
      return inverted;
    }
    pino2.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino2.stdSerializers = stdSerializers;
    pino2.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function getBindingChain(logger) {
      const bindings = [];
      if (logger.bindings) {
        bindings.push(logger.bindings);
      }
      let hierarchy = logger[hierarchySymbol];
      while (hierarchy.parent) {
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
          bindings.push(hierarchy.logger.bindings);
        }
      }
      return bindings.reverse();
    }
    function set2(self2, opts, rootLogger, level) {
      Object.defineProperty(self2, level, {
        value: levelToValue(self2.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
      });
      if (!opts.transmit && self2[level] === noop) {
        return;
      }
      self2[level] = createWrap(self2, opts, rootLogger, level);
      const bindings = getBindingChain(self2);
      if (bindings.length === 0) {
        return;
      }
      self2[level] = prependBindingsInArguments(bindings, self2[level]);
    }
    function prependBindingsInArguments(bindings, logFunc) {
      return function() {
        return logFunc.apply(this, [...bindings, ...arguments]);
      };
    }
    function createWrap(self2, opts, rootLogger, level) {
      return /* @__PURE__ */ function(write) {
        return function LOG() {
          const ts = opts.timestamp();
          const args = new Array(arguments.length);
          const proto2 = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i = 0; i < args.length; i++) args[i] = arguments[i];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject || opts.formatters) {
            write.call(proto2, asObject(this, level, args, ts, opts.formatters));
          } else write.apply(proto2, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || self2._level;
            const transmitValue = rootLogger.levels.values[transmitLevel];
            const methodValue = rootLogger.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: rootLogger.levels.values[opts.transmit.level || self2._level],
              send: opts.transmit.send,
              val: levelToValue(self2._level, rootLogger)
            }, args);
          }
        };
      }(self2[baseLogFunctionSymbol][level]);
    }
    function asObject(logger, level, args, ts, formatters = {}) {
      const {
        level: levelFormatter = () => logger.levels.values[level],
        log: logObjectFormatter = (obj) => obj
      } = formatters;
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const logObject = {};
      if (ts) {
        logObject.time = ts;
      }
      logObject.level = levelFormatter(level, logger.levels.values[level]);
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(logObject, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) logObject.msg = msg;
      const formattedLogObject = logObjectFormatter(logObject);
      return formattedLogObject;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i in args) {
        if (stdErrSerialize && args[i] instanceof Error) {
          args[i] = pino2.stdSerializers.err(args[i]);
        } else if (typeof args[i] === "object" && !Array.isArray(args[i])) {
          for (const k in args[i]) {
            if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
              args[i][k] = serializers[k](args[i][k]);
            }
          }
        }
      }
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a) {
      return a;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o) {
        return typeof o !== "undefined" && o;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
    module.exports.default = pino2;
    module.exports.pino = pino2;
  }
});

// src/api/analytics/analytics-crypto-polyfill.ts
var getGlobalCrypto = () => global.crypto;
var polyfillCryptoNode = () => {
  if (typeof window !== "undefined") {
    return;
  }
  if (!getGlobalCrypto()) {
    global.crypto = __require("crypto");
  }
  if (!getGlobalCrypto().getRandomValues && getGlobalCrypto().webcrypto) {
    global.crypto.getRandomValues = getGlobalCrypto().webcrypto.getRandomValues.bind(
      getGlobalCrypto().webcrypto
    );
  }
};

// ../bueno/dist/browser/bueno.esm.js
function buildSchemaValidationError(errors, context) {
  const message = `
  The following properties are invalid:

    ${errors.join("\n	")}
  
  ${context}
  `;
  return new SchemaValidationError(message);
}
var SchemaValidationError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "SchemaValidationError";
  }
};
var Schema = class {
  constructor(definition) {
    this.definition = definition;
  }
  validate(values = {}, message = "") {
    const mergedValues = {
      ...this.default,
      ...values
    };
    const errors = [];
    for (const property in this.definition) {
      const error = this.definition[property].validate(mergedValues[property]);
      error && errors.push(`${property}: ${error}`);
    }
    if (errors.length) {
      throw buildSchemaValidationError(errors, message);
    }
    return mergedValues;
  }
  get default() {
    const defaultValues = {};
    for (const property in this.definition) {
      const defaultValue = this.definition[property].default;
      if (defaultValue !== void 0) {
        defaultValues[property] = defaultValue;
      }
    }
    return defaultValues;
  }
};
var Value = class {
  constructor(baseConfig = {}) {
    this.baseConfig = baseConfig;
  }
  validate(value) {
    if (this.baseConfig.required && isNullOrUndefined(value)) {
      return "value is required.";
    }
    return null;
  }
  get default() {
    return this.baseConfig.default instanceof Function ? this.baseConfig.default() : this.baseConfig.default;
  }
  get required() {
    return this.baseConfig.required === true;
  }
};
function isUndefined(value) {
  return value === void 0;
}
function isNull(value) {
  return value === null;
}
function isNullOrUndefined(value) {
  return isUndefined(value) || isNull(value);
}
var NumberValue = class {
  constructor(config = {}) {
    this.config = config;
    this.value = new Value(config);
  }
  validate(value) {
    const valueValidation = this.value.validate(value);
    if (valueValidation) {
      return valueValidation;
    }
    if (!isNumberOrUndefined(value)) {
      return "value is not a number.";
    }
    if (value < this.config.min) {
      return `minimum value of ${this.config.min} not respected.`;
    }
    if (value > this.config.max) {
      return `maximum value of ${this.config.max} not respected.`;
    }
    return null;
  }
  get default() {
    return this.value.default;
  }
  get required() {
    return this.value.required;
  }
};
function isNumberOrUndefined(value) {
  return isUndefined(value) || isNumber(value);
}
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
var BooleanValue = class {
  constructor(config = {}) {
    this.value = new Value(config);
  }
  validate(value) {
    const valueValidation = this.value.validate(value);
    if (valueValidation) {
      return valueValidation;
    }
    if (!isBooleanOrUndefined(value)) {
      return "value is not a boolean.";
    }
    return null;
  }
  get default() {
    return this.value.default;
  }
  get required() {
    return this.value.required;
  }
};
function isBooleanOrUndefined(value) {
  return isUndefined(value) || isBoolean(value);
}
function isBoolean(value) {
  return typeof value === "boolean";
}
var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var StringValue = class {
  constructor(config = {}) {
    this.config = {
      emptyAllowed: true,
      url: false,
      ...config
    };
    this.value = new Value(this.config);
  }
  validate(value) {
    const { emptyAllowed, url, regex, constrainTo } = this.config;
    const valueValidation = this.value.validate(value);
    if (valueValidation) {
      return valueValidation;
    }
    if (isUndefined(value)) {
      return null;
    }
    if (!isString(value)) {
      return "value is not a string.";
    }
    if (!emptyAllowed && !value.length) {
      return "value is an empty string.";
    }
    if (url && !urlRegex.test(value)) {
      return "value is not a valid URL.";
    }
    if (regex && !regex.test(value)) {
      return `value did not match provided regex ${regex}`;
    }
    if (constrainTo && !constrainTo.includes(value)) {
      const values = constrainTo.join(", ");
      return `value should be one of: ${values}.`;
    }
    return null;
  }
  get default() {
    return this.value.default;
  }
  get required() {
    return this.value.required;
  }
};
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
var RecordValue = class {
  constructor(config = {}) {
    this.config = {
      options: { required: false },
      values: {},
      ...config
    };
  }
  validate(input) {
    if (isUndefined(input)) {
      return this.config.options.required ? "value is required and is currently undefined" : null;
    }
    if (!isRecord(input)) {
      return "value is not an object";
    }
    for (const [k, v] of Object.entries(this.config.values)) {
      if (v.required && isNullOrUndefined(input[k])) {
        return `value does not contain ${k}`;
      }
    }
    let out = "";
    for (const [key, validator] of Object.entries(this.config.values)) {
      const value = input[key];
      const invalidValue = validator.validate(value);
      if (invalidValue !== null) {
        out += " " + invalidValue;
      }
    }
    return out === "" ? null : out;
  }
  get default() {
    return void 0;
  }
  get required() {
    return !!this.config.options.required;
  }
};
function isRecord(value) {
  return value !== void 0 && typeof value === "object";
}
var ArrayValue = class {
  constructor(config = {}) {
    this.config = config;
    this.value = new Value(this.config);
  }
  validate(input) {
    if (!isNullOrUndefined(input) && !Array.isArray(input)) {
      return "value is not an array";
    }
    const invalid = this.value.validate(input);
    if (invalid !== null) {
      return invalid;
    }
    if (isNullOrUndefined(input)) {
      return null;
    }
    if (this.config.max !== void 0 && input.length > this.config.max) {
      return `value contains more than ${this.config.max}`;
    }
    if (this.config.min !== void 0 && input.length < this.config.min) {
      return `value contains less than ${this.config.min}`;
    }
    if (this.config.each !== void 0) {
      let out = "";
      input.forEach((el) => {
        if (this.config.each.required && isNullOrUndefined(el)) {
          out = `value is null or undefined: ${input.join(",")}`;
        }
        const isInvalid = this.validatePrimitiveValue(el, this.config.each);
        if (isInvalid !== null) {
          out += " " + isInvalid;
        }
      });
      return out === "" ? null : out;
    }
    return null;
  }
  validatePrimitiveValue(v, validator) {
    if (isBoolean(v)) {
      return validator.validate(v);
    } else if (isString(v)) {
      return validator.validate(v);
    } else if (isNumber(v)) {
      return validator.validate(v);
    } else if (isRecord(v)) {
      return validator.validate(v);
    }
    return "value is not a primitive value";
  }
  get default() {
    return void 0;
  }
  get required() {
    return this.value.required;
  }
};
function isArray(value) {
  return Array.isArray(value);
}
var EnumValue = class {
  constructor(config) {
    this.config = config;
    this.value = new Value(config);
  }
  validate(value) {
    const invalid = this.value.validate(value);
    if (invalid !== null) {
      return invalid;
    }
    if (isUndefined(value)) {
      return null;
    }
    const valueInEnum = Object.values(this.config.enum).find(
      (enumValue) => enumValue === value
    );
    if (!valueInEnum) {
      return "value is not in enum.";
    }
    return null;
  }
  get default() {
    return this.value.default;
  }
  get required() {
    return this.value.required;
  }
};

// src/api/preprocess-request.ts
var NoopPreprocessRequest = (request) => request;

// src/features/search/search-state.ts
function emptyQuestionAnswer() {
  return {
    answerSnippet: "",
    documentId: {
      contentIdKey: "",
      contentIdValue: ""
    },
    question: "",
    relatedQuestions: [],
    score: 0
  };
}
function getSearchInitialState() {
  return {
    response: {
      results: [],
      searchUid: "",
      totalCountFiltered: 0,
      facets: [],
      generateAutomaticFacets: { facets: [] },
      queryCorrections: [],
      triggers: [],
      questionAnswer: emptyQuestionAnswer(),
      pipeline: "",
      splitTestRun: "",
      termsToHighlight: {},
      phrasesToHighlight: {},
      extendedResults: {}
    },
    duration: 0,
    queryExecuted: "",
    error: null,
    automaticallyCorrected: false,
    isLoading: false,
    results: [],
    searchResponseId: "",
    requestId: "",
    questionAnswer: emptyQuestionAnswer(),
    extendedResults: {}
  };
}

// src/api/api-client-utils.ts
function pickNonBaseParams(req) {
  const { url, accessToken, organizationId, authentication, ...nonBase } = req;
  return nonBase;
}
var unwrapError = (payload) => {
  const { response } = payload;
  if (response.body) {
    return unwrapSearchApiError(payload);
  }
  return unwrapClientError(response);
};
var unwrapSearchApiError = (payload) => {
  if (isSearchAPIException(payload)) {
    return unwrapErrorByException(payload);
  }
  if (isSearchAPIErrorWithStatusCode(payload)) {
    return payload.body;
  }
  return { message: "unknown", statusCode: 0, type: "unknown" };
};
var unwrapClientError = (response) => {
  const body = JSON.parse(
    JSON.stringify(response, Object.getOwnPropertyNames(response))
  );
  return {
    ...body,
    message: `Client side error: ${body.message || ""}`,
    statusCode: 400,
    type: "ClientError"
  };
};
function isSearchAPIErrorWithStatusCode(r2) {
  return r2.body.statusCode !== void 0;
}
function isSearchAPIException(r2) {
  return r2.body.exception !== void 0;
}
var unwrapErrorByException = (res) => ({
  message: res.body.exception.code,
  statusCode: res.response.status,
  type: res.body.exception.code
});

// src/api/platform-client.ts
var import_please_give_me_fetch = __toESM(require_fetch_ponyfill_browser());
var import_exponential_backoff = __toESM(require_backoff());

// src/utils/errors.ts
var loadReducerError = new Error("Failed to load reducers.");
var ExpiredTokenError = class extends Error {
  constructor() {
    super();
    this.name = "ExpiredToken";
    this.message = "The token being used to perform the request is expired.";
  }
};
var DisconnectedError = class extends Error {
  constructor(url, statusCode) {
    super();
    this.name = "Disconnected";
    this.message = `Client could not connect to the following URL: ${url}`;
    this.statusCode = statusCode ?? 0;
  }
};

// src/utils/utils.ts
var import_abab = __toESM(require_abab());
var doNotTrackValues = /* @__PURE__ */ new Set(["1", 1, "yes", true]);
function doNotTrack() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  const nav = navigator;
  const win = window;
  return [
    nav.globalPrivacyControl,
    nav.doNotTrack,
    nav.msDoNotTrack,
    win.doNotTrack
  ].some((value) => doNotTrackValues.has(value));
}
function fromEntries(values) {
  const newObject = {};
  for (const [key, value] of values) {
    newObject[key] = value;
  }
  return newObject;
}
function clone(value) {
  if (typeof value !== "object") {
    return value;
  }
  if (!value) {
    return value;
  }
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    return value;
  }
}

// src/api/form-url-encoder.ts
function encodeAsFormUrl(obj) {
  const body = [];
  for (const property in obj) {
    const key = encodeURIComponent(property);
    const value = encodeURIComponent(obj[property]);
    body.push(`${key}=${value}`);
  }
  return body.join("&");
}
function canBeFormUrlEncoded(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (!obj) {
    return false;
  }
  return Object.values(obj).every(isPrimitive);
}
function isPrimitive(val) {
  return typeof val === "string" || typeof val === "number" || typeof val === "boolean";
}

// src/api/platform-client.ts
function isThrottled(status) {
  return status === 429;
}
var PlatformClient = class _PlatformClient {
  static async call(options) {
    const defaultRequestOptions = buildDefaultRequestOptions(options);
    const { logger } = options;
    const requestInfo = await _PlatformClient.preprocessRequest(
      defaultRequestOptions,
      options
    );
    logger.info(requestInfo, "Platform request");
    const { url, ...requestData } = requestInfo;
    const request = async () => {
      const response = await (0, import_please_give_me_fetch.default)(url, requestData);
      if (isThrottled(response.status)) {
        throw response;
      }
      return response;
    };
    try {
      const response = await (0, import_exponential_backoff.backOff)(request, {
        retry: (e) => {
          const shouldRetry = e && isThrottled(e.status);
          shouldRetry && logger.info("Platform retrying request");
          return shouldRetry;
        }
      });
      if (response.status === 419) {
        logger.info("Platform renewing token");
        throw new ExpiredTokenError();
      }
      if (response.status === 404) {
        throw new DisconnectedError(url, response.status);
      }
      logger.info({ response, requestInfo }, "Platform response");
      return response;
    } catch (error) {
      if (error.message === "Failed to fetch") {
        return new DisconnectedError(url);
      }
      return error;
    }
  }
  static async preprocessRequest(defaultRequestOptions, options) {
    const { origin, preprocessRequest, logger, requestMetadata } = options;
    const { signal, ...withoutSignal } = defaultRequestOptions;
    const untaintedOutput = clone(withoutSignal);
    try {
      const processedRequest = await preprocessRequest(
        defaultRequestOptions,
        origin,
        requestMetadata
      );
      return {
        ...defaultRequestOptions,
        ...processedRequest
      };
    } catch (e) {
      logger.error(
        e,
        "Platform request preprocessing failed. Returning default request options."
      );
    }
    return untaintedOutput;
  }
};
function coveoCloudURL(subdomain, options) {
  const urlEnv = !options || !options.environment || options.environment === "prod" ? "" : options.environment;
  const urlRegion = !options || !options.region || options.region === "us" ? "" : `-${options.region}`;
  return `https://${subdomain}${urlEnv}${urlRegion}.cloud.coveo.com`;
}
function getOrganizationEndpoints(orgId, env = "prod") {
  const envSuffix = env === "prod" ? "" : env;
  const platform = `https://${orgId}.org${envSuffix}.coveo.com`;
  const analytics = `https://${orgId}.analytics.org${envSuffix}.coveo.com`;
  const search = `${platform}/rest/search/v2`;
  const admin = `https://${orgId}.admin.org${envSuffix}.coveo.com`;
  return { platform, analytics, search, admin };
}
function platformUrl(options) {
  if (options?.multiRegionSubDomain) {
    return `https://${options.multiRegionSubDomain}.org.coveo.com`;
  }
  return coveoCloudURL("platform", options);
}
function analyticsUrl(options) {
  return coveoCloudURL("analytics", options);
}
function buildDefaultRequestOptions(options) {
  const { url, method, requestParams, contentType, accessToken, signal } = options;
  const isMethodWithBody = options.method === "POST" || options.method === "PUT";
  const body = encodeBody(requestParams, contentType);
  return {
    url,
    method,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${accessToken}`,
      ...options.headers
    },
    ...isMethodWithBody && { body },
    signal
  };
}
function encodeBody(body, contentType) {
  if (contentType === "application/x-www-form-urlencoded") {
    return canBeFormUrlEncoded(body) ? encodeAsFormUrl(body) : "";
  }
  return JSON.stringify(body);
}

// src/utils/abort-controller-polyfill.ts
function createAbortController() {
  if (typeof window === "undefined") {
    const { AbortController: nodeAbort } = require_browser();
    return new nodeAbort();
  }
  return typeof AbortController === "undefined" ? null : new AbortController();
}

// src/api/search/api-calls-queue.ts
var APICallsQueue = class {
  constructor() {
    this.currentAbortController = null;
  }
  /**
   * Enqueue an API call so that it can get cancelled if another call is enqueued before it finishes.
   */
  async enqueue(call, options) {
    const lastAbortController = this.currentAbortController;
    const abortController = this.currentAbortController = createAbortController();
    if (lastAbortController) {
      if (options.warnOnAbort) {
        options.logger.warn("Cancelling current pending search query");
      }
      lastAbortController.abort();
    }
    try {
      return await call(abortController?.signal ?? null);
    } finally {
      if (this.currentAbortController === abortController) {
        this.currentAbortController = null;
      }
    }
  }
};

// src/utils/url-utils.ts
var URLPath = class {
  constructor(basePath) {
    this._params = {};
    this._basePath = basePath;
  }
  addParam(name, value) {
    this._params = {
      ...this.params,
      [name]: value
    };
  }
  get basePath() {
    return this._basePath;
  }
  get params() {
    return this._params;
  }
  get hasParams() {
    return Object.entries(this._params).length;
  }
  get href() {
    return this.hasParams ? `${this.basePath}?${Object.entries(this.params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join("&")}` : this.basePath;
  }
};
var isCoveoPlatformURL = (url) => /^https:\/\/platform(dev|stg|hipaa)?(-)?(eu|au)?\.cloud\.coveo\.com/.test(
  url
);
var matchCoveoOrganizationEndpointUrl = (url, organizationId) => {
  const match = matchCoveoOrganizationEndpointUrlAnyOrganization(url);
  return match && match.organizationId === organizationId ? match : null;
};
var matchCoveoOrganizationEndpointUrlAnyOrganization = (url) => {
  const match = url.match(
    /^https:\/\/(?<organizationId>\w+)\.org(?<environment>dev|stg|hipaa)?\.coveo\.com/
  );
  return match?.groups ? match.groups : null;
};

// src/api/search/encoding-finder.ts
function findEncoding(response) {
  const contentType = response.headers.get("content-type") || "";
  const charset = contentType.split(";").find((part) => part.indexOf("charset=") !== -1) || "";
  return charset.split("=")[1] || "UTF-8";
}

// src/api/search/search-api-params.ts
var baseSearchRequest = (req, method, contentType, path) => {
  const url = new URLPath(`${req.url}${path}`);
  url.addParam("organizationId", req.organizationId);
  if (req.authentication) {
    url.addParam("authentication", req.authentication);
  }
  return {
    accessToken: req.accessToken,
    method,
    contentType,
    url: url.href,
    origin: "searchApiFetch"
  };
};

// src/api/search/html/html-api-client.ts
var getHtml = async (req, options) => {
  const response = await PlatformClient.call({
    ...baseSearchRequest(
      req,
      "POST",
      "application/x-www-form-urlencoded",
      "/html"
    ),
    requestParams: pickNonBaseParams(req),
    requestMetadata: { method: "html" },
    ...options
  });
  if (response instanceof Error) {
    throw response;
  }
  const encoding = findEncoding(response);
  const buffer = await response.arrayBuffer();
  const decoder = new TextDecoder(encoding);
  const body = decoder.decode(buffer);
  if (isSuccessHtmlResponse(body)) {
    return { success: body };
  }
  return { error: unwrapError({ response, body }) };
};
function isSuccessHtmlResponse(body) {
  return typeof body === "string";
}

// src/api/search/search-api-error-response.ts
function buildDisconnectedError(error) {
  return {
    statusCode: error.statusCode,
    type: error.name,
    message: error.message
  };
}
function buildIgnoredAbortedError(error) {
  return {
    statusCode: error.code,
    type: error.name,
    message: error.message,
    ignored: true
  };
}
function buildAPIResponseFromErrorOrThrow(error, disableAbortWarning) {
  if (disableAbortWarning && error.name === "AbortError") {
    return {
      error: buildIgnoredAbortedError(error)
    };
  }
  if (error instanceof DisconnectedError) {
    return { error: buildDisconnectedError(error) };
  }
  throw error;
}

// src/api/search/search-api-client.ts
var SearchAPIClient = class {
  constructor(options) {
    this.options = options;
    this.apiCallsQueues = {
      unknown: new APICallsQueue(),
      mainSearch: new APICallsQueue(),
      facetValues: new APICallsQueue(),
      foldingCollection: new APICallsQueue(),
      instantResults: new APICallsQueue()
    };
  }
  async plan(req) {
    const response = await PlatformClient.call({
      ...baseSearchRequest(req, "POST", "application/json", "/plan"),
      requestParams: pickNonBaseParams(req),
      requestMetadata: { method: "plan" },
      ...this.options
    });
    if (response instanceof Error) {
      return buildAPIResponseFromErrorOrThrow(response);
    }
    const body = await response.json();
    if (isSuccessPlanResponse(body)) {
      return { success: body };
    }
    return {
      error: unwrapError({ response, body })
    };
  }
  async querySuggest(req) {
    const response = await PlatformClient.call({
      ...baseSearchRequest(req, "POST", "application/json", "/querySuggest"),
      requestMetadata: { method: "querySuggest" },
      requestParams: pickNonBaseParams(req),
      ...this.options
    });
    if (response instanceof Error) {
      return buildAPIResponseFromErrorOrThrow(response);
    }
    const body = await response.json();
    const payload = { response, body };
    if (isSuccessQuerySuggestionsResponse(body)) {
      const processedResponse = await this.options.postprocessQuerySuggestResponseMiddleware(payload);
      return {
        success: processedResponse.body
      };
    }
    return {
      error: unwrapError(payload)
    };
  }
  async search(req, options) {
    const origin = options?.origin ?? "unknown";
    const response = await this.apiCallsQueues[origin].enqueue(
      (signal) => PlatformClient.call({
        ...baseSearchRequest(req, "POST", "application/json", ""),
        requestParams: pickNonBaseParams(req),
        requestMetadata: { method: "search", origin: options?.origin },
        ...this.options,
        signal: signal ?? void 0
      }),
      { logger: this.options.logger, warnOnAbort: !options?.disableAbortWarning }
    );
    if (response instanceof Error) {
      return buildAPIResponseFromErrorOrThrow(
        response,
        options?.disableAbortWarning
      );
    }
    const body = await response.json();
    const payload = { response, body };
    if (isSuccessSearchResponse(body)) {
      payload.body = shimResponse(body);
      const processedResponse = await this.options.postprocessSearchResponseMiddleware(payload);
      return {
        success: processedResponse.body
      };
    }
    return {
      error: unwrapError(payload)
    };
  }
  async facetSearch(req) {
    const response = await PlatformClient.call({
      ...baseSearchRequest(req, "POST", "application/json", "/facet"),
      requestParams: pickNonBaseParams(req),
      requestMetadata: { method: "facetSearch" },
      ...this.options
    });
    if (response instanceof Error) {
      throw response;
    }
    const body = await response.json();
    const payload = { response, body };
    const processedResponse = await this.options.postprocessFacetSearchResponseMiddleware(payload);
    return processedResponse.body;
  }
  async recommendations(req) {
    const response = await PlatformClient.call({
      ...baseSearchRequest(req, "POST", "application/json", ""),
      requestParams: pickNonBaseParams(req),
      requestMetadata: { method: "recommendations" },
      ...this.options
    });
    if (response instanceof Error) {
      throw response;
    }
    const body = await response.json();
    if (isSuccessSearchResponse(body)) {
      return { success: body };
    }
    return {
      error: unwrapError({ response, body })
    };
  }
  async html(req) {
    return getHtml(req, { ...this.options });
  }
  async productRecommendations(req) {
    const response = await PlatformClient.call({
      ...baseSearchRequest(req, "POST", "application/json", ""),
      requestParams: pickNonBaseParams(req),
      requestMetadata: { method: "productRecommendations" },
      ...this.options
    });
    if (response instanceof Error) {
      throw response;
    }
    const body = await response.json();
    if (isSuccessSearchResponse(body)) {
      return { success: body };
    }
    return {
      error: unwrapError({ response, body })
    };
  }
  async fieldDescriptions(req) {
    const response = await PlatformClient.call({
      ...baseSearchRequest(req, "GET", "application/json", "/fields"),
      requestParams: {},
      requestMetadata: { method: "fieldDescriptions" },
      ...this.options
    });
    if (response instanceof Error) {
      throw response;
    }
    const body = await response.json();
    if (isSuccessFieldsDescriptionResponse(body)) {
      return { success: body };
    }
    return {
      error: unwrapError({ response, body })
    };
  }
};
var isErrorResponse = (r2) => {
  return r2.error !== void 0;
};
function isSuccessSearchResponse(body) {
  return body.results !== void 0;
}
function shimResponse(response) {
  const empty = emptyQuestionAnswer();
  if (isNullOrUndefined(response.questionAnswer)) {
    response.questionAnswer = empty;
    return response;
  }
  response.questionAnswer = { ...empty, ...response.questionAnswer };
  return response;
}
function isSuccessQuerySuggestionsResponse(body) {
  return body.completions !== void 0;
}
function isSuccessPlanResponse(body) {
  return body.preprocessingOutput !== void 0;
}
function isSuccessFieldsDescriptionResponse(body) {
  return body.fields !== void 0;
}

// src/api/search/search-api-client-middleware.ts
var NoopPostprocessSearchResponseMiddleware = (response) => response;
var NoopPostprocessFacetSearchResponseMiddleware = (response) => response;
var NoopPostprocessQuerySuggestResponseMiddleware = (response) => response;

// node_modules/redux/dist/redux.mjs
function formatProdErrorMessage(code) {
  return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
  INIT: `@@redux/INIT${ randomString()}`,
  REPLACE: `@@redux/REPLACE${ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  let proto2 = obj;
  while (Object.getPrototypeOf(proto2) !== null) {
    proto2 = Object.getPrototypeOf(proto2);
  }
  return Object.getPrototypeOf(obj) === proto2 || Object.getPrototypeOf(obj) === null;
}
function createStore(reducer, preloadedState, enhancer) {
  if (typeof reducer !== "function") {
    throw new Error(true ? formatProdErrorMessage(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
  }
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(true ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(true ? formatProdErrorMessage(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = /* @__PURE__ */ new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = /* @__PURE__ */ new Map();
      currentListeners.forEach((listener2, key) => {
        nextListeners.set(key, listener2);
      });
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(true ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    }
    return currentState;
  }
  function subscribe(listener2) {
    if (typeof listener2 !== "function") {
      throw new Error(true ? formatProdErrorMessage(4) : `Expected the listener to be a function. Instead, received: '${kindOf(listener2)}'`);
    }
    if (isDispatching) {
      throw new Error(true ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    }
    let isSubscribed = true;
    ensureCanMutateNextListeners();
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener2);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(true ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(true ? formatProdErrorMessage(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    }
    if (typeof action.type === "undefined") {
      throw new Error(true ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }
    if (typeof action.type !== "string") {
      throw new Error(true ? formatProdErrorMessage(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
    }
    if (isDispatching) {
      throw new Error(true ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    const listeners = currentListeners = nextListeners;
    listeners.forEach((listener2) => {
      listener2();
    });
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(true ? formatProdErrorMessage(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
    }
    currentReducer = nextReducer;
    dispatch({
      type: actionTypes_default.REPLACE
    });
  }
  function observable() {
    const outerSubscribe = subscribe;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(true ? formatProdErrorMessage(11) : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
        }
        function observeState() {
          const observerAsObserver = observer;
          if (observerAsObserver.next) {
            observerAsObserver.next(getState());
          }
        }
        observeState();
        const unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      },
      [symbol_observable_default]() {
        return this;
      }
    };
  }
  dispatch({
    type: actionTypes_default.INIT
  });
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [symbol_observable_default]: observable
  };
  return store;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach((key) => {
    const reducer = reducers[key];
    const initialState = reducer(void 0, {
      type: actionTypes_default.INIT
    });
    if (typeof initialState === "undefined") {
      throw new Error(true ? formatProdErrorMessage(12) : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    }
    if (typeof reducer(void 0, {
      type: actionTypes_default.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(true ? formatProdErrorMessage(13) : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
    }
  });
}
function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (false) {
      if (typeof reducers[key] === "undefined") {
        warning(`No reducer provided for key "${key}"`);
      }
    }
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  let unexpectedKeyCache;
  if (false) {
    unexpectedKeyCache = {};
  }
  let shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state = {}, action) {
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    if (false) {
      const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        const actionType = action && action.type;
        throw new Error(true ? formatProdErrorMessage(14) : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
function applyMiddleware(...middlewares) {
  return (createStore22) => (reducer, preloadedState) => {
    const store = createStore22(reducer, preloadedState);
    let dispatch = () => {
      throw new Error(true ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);
    return {
      ...store,
      dispatch
    };
  };
}
function isAction(action) {
  return isPlainObject(action) && "type" in action && typeof action.type === "string";
}

// node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
function die(error, ...args) {
  if (false) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject2(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject2(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto2 = getPrototypeOf(value);
  if (proto2 === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto2, "constructor") && proto2.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Object.entries(obj).forEach(([key, value]) => {
      iter(key, value, obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  if (!strict && isPlainObject2(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */ Object.create(null);
      return Object.assign(obj, base);
    }
    return { ...base };
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set)
      descriptors[key] = {
        configurable: true,
        writable: true,
        // could live with !!desc.set as well here...
        enumerable: desc.enumerable,
        value: base[key]
      };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    each(obj, (_key, value) => freeze(value, true), true);
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
      true
      // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (false)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if (!parentState || !parentState.scope_.parent_)
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray2 = Array.isArray(base);
  const state = {
    type_: isArray2 ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray2) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (false)
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (false)
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto2 = getPrototypeOf(source);
  while (proto2) {
    const desc = Object.getOwnPropertyDescriptor(proto2, prop);
    if (desc)
      return desc;
    proto2 = getPrototypeOf(proto2);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self2 = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);

// node_modules/reselect/dist/reselect.mjs
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var REDUX_PROXY_LABEL = Symbol();
var proto = Object.getPrototypeOf({});
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
    }
    terminatedNode.s = TERMINATED;
    if (resultEqualityCheck) {
      const lastResultValue = lastResult?.deref?.() ?? lastResult;
      if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
        result = lastResultValue;
        resultsCount !== 0 && resultsCount--;
      }
      const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
      lastResult = needsWeakRef ? new Ref(result) : result;
    }
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (false) {
        const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
        if (identityFunctionCheck.shouldRun) {
          identityFunctionCheck.run(
            resultFunc,
            inputSelectorResults,
            lastResult
          );
        }
        if (inputStabilityCheck.shouldRun) {
          const inputSelectorResultsCopy = collectInputSelectorResults(
            dependencies,
            arguments
          );
          inputStabilityCheck.run(
            { inputSelectorResults, inputSelectorResultsCopy },
            { memoize, memoizeOptions: finalMemoizeOptions },
            arguments
          );
        }
        if (firstRun)
          firstRun = false;
      }
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

// node_modules/redux-thunk/dist/redux-thunk.mjs
function createThunkMiddleware(extraArgument) {
  const middleware = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }
    return next(action);
  };
  return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;

// node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs
var createDraftSafeSelectorCreator = (...args) => {
  const createSelector2 = createSelectorCreator(...args);
  const createDraftSafeSelector2 = Object.assign((...args2) => {
    const selector = createSelector2(...args2);
    const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
    Object.assign(wrappedSelector, selector);
    return wrappedSelector;
  }, {
    withTypes: () => createDraftSafeSelector2
  });
  return createDraftSafeSelector2;
};
var createDraftSafeSelector = createDraftSafeSelectorCreator(weakMapMemoize);
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function() {
  return function(noop3) {
    return noop3;
  };
};
var hasMatchFunction = (v) => {
  return v && typeof v.match === "function";
};
function createAction(type, prepareAction) {
  function actionCreator(...args) {
    if (prepareAction) {
      let prepared = prepareAction(...args);
      if (!prepared) {
        throw new Error(true ? formatProdErrorMessage2(0) : "prepareAction did not return an object");
      }
      return {
        type,
        payload: prepared.payload,
        ..."meta" in prepared && {
          meta: prepared.meta
        },
        ..."error" in prepared && {
          error: prepared.error
        }
      };
    }
    return {
      type,
      payload: args[0]
    };
  }
  actionCreator.toString = () => `${type}`;
  actionCreator.type = type;
  actionCreator.match = (action) => isAction(action) && action.type === type;
  return actionCreator;
}
var Tuple = class _Tuple extends Array {
  constructor(...items) {
    super(...items);
    Object.setPrototypeOf(this, _Tuple.prototype);
  }
  static get [Symbol.species]() {
    return _Tuple;
  }
  concat(...arr) {
    return super.concat.apply(this, arr);
  }
  prepend(...arr) {
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new _Tuple(...arr[0].concat(this));
    }
    return new _Tuple(...arr.concat(this));
  }
};
function freezeDraftable(val) {
  return isDraftable(val) ? produce(val, () => {
  }) : val;
}
function isBoolean2(x) {
  return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
  const {
    thunk: thunk2 = true,
    immutableCheck = true,
    serializableCheck = true,
    actionCreatorCheck = true
  } = options ?? {};
  let middlewareArray = new Tuple();
  if (thunk2) {
    if (isBoolean2(thunk2)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(withExtraArgument(thunk2.extraArgument));
    }
  }
  if (false) {
    if (immutableCheck) {
      let immutableOptions = {};
      if (!isBoolean2(immutableCheck)) {
        immutableOptions = immutableCheck;
      }
      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
      let serializableOptions = {};
      if (!isBoolean2(serializableCheck)) {
        serializableOptions = serializableCheck;
      }
      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
    if (actionCreatorCheck) {
      let actionCreatorOptions = {};
      if (!isBoolean2(actionCreatorCheck)) {
        actionCreatorOptions = actionCreatorCheck;
      }
      middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
    }
  }
  return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var createQueueWithTimer = (timeout) => {
  return (notify) => {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = (options = {
  type: "raf"
}) => (next) => (...args) => {
  const store = next(...args);
  let notifying = true;
  let shouldNotifyAtEndOfTick = false;
  let notificationQueued = false;
  const listeners = /* @__PURE__ */ new Set();
  const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
  const notifyListeners = () => {
    notificationQueued = false;
    if (shouldNotifyAtEndOfTick) {
      shouldNotifyAtEndOfTick = false;
      listeners.forEach((l) => l());
    }
  };
  return Object.assign({}, store, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(listener2) {
      const wrappedListener = () => notifying && listener2();
      const unsubscribe = store.subscribe(wrappedListener);
      listeners.add(listener2);
      return () => {
        unsubscribe();
        listeners.delete(listener2);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(action) {
      try {
        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
        shouldNotifyAtEndOfTick = !notifying;
        if (shouldNotifyAtEndOfTick) {
          if (!notificationQueued) {
            notificationQueued = true;
            queueCallback(notifyListeners);
          }
        }
        return store.dispatch(action);
      } finally {
        notifying = true;
      }
    }
  });
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
  const {
    autoBatch = true
  } = options ?? {};
  let enhancerArray = new Tuple(middlewareEnhancer);
  if (autoBatch) {
    enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
  }
  return enhancerArray;
};
var IS_PRODUCTION = true;
function configureStore(options) {
  const getDefaultMiddleware = buildGetDefaultMiddleware();
  const {
    reducer = void 0,
    middleware,
    devTools = true,
    preloadedState = void 0,
    enhancers = void 0
  } = options || {};
  let rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error(true ? formatProdErrorMessage2(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  }
  if (!IS_PRODUCTION && middleware && typeof middleware !== "function") {
    throw new Error(true ? formatProdErrorMessage2(2) : "`middleware` field must be a callback");
  }
  let finalMiddleware;
  if (typeof middleware === "function") {
    finalMiddleware = middleware(getDefaultMiddleware);
    if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
      throw new Error(true ? formatProdErrorMessage2(3) : "when using a middleware builder function, an array of middleware must be returned");
    }
  } else {
    finalMiddleware = getDefaultMiddleware();
  }
  if (!IS_PRODUCTION && finalMiddleware.some((item) => typeof item !== "function")) {
    throw new Error(true ? formatProdErrorMessage2(4) : "each middleware provided to configureStore must be a function");
  }
  let finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools({
      // Enable capture of stack traces for dispatched Redux actions
      trace: !IS_PRODUCTION,
      ...typeof devTools === "object" && devTools
    });
  }
  const middlewareEnhancer = applyMiddleware(...finalMiddleware);
  const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
  if (!IS_PRODUCTION && enhancers && typeof enhancers !== "function") {
    throw new Error(true ? formatProdErrorMessage2(5) : "`enhancers` field must be a callback");
  }
  let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
  if (!IS_PRODUCTION && !Array.isArray(storeEnhancers)) {
    throw new Error(true ? formatProdErrorMessage2(6) : "`enhancers` callback must return an array");
  }
  if (!IS_PRODUCTION && storeEnhancers.some((item) => typeof item !== "function")) {
    throw new Error(true ? formatProdErrorMessage2(7) : "each enhancer provided to configureStore must be a function");
  }
  if (!IS_PRODUCTION && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
    console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  }
  const composedEnhancer = finalCompose(...storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
  const actionsMap = {};
  const actionMatchers = [];
  let defaultCaseReducer;
  const builder = {
    addCase(typeOrActionCreator, reducer) {
      if (false) {
        if (actionMatchers.length > 0) {
          throw new Error(true ? formatProdErrorMessage2(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        }
        if (defaultCaseReducer) {
          throw new Error(true ? formatProdErrorMessage2(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }
      const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error(true ? formatProdErrorMessage2(28) : "`builder.addCase` cannot be called with an empty action type");
      }
      if (type in actionsMap) {
        throw new Error(true ? formatProdErrorMessage2(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher(matcher, reducer) {
      if (false) {
        if (defaultCaseReducer) {
          throw new Error(true ? formatProdErrorMessage2(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }
      actionMatchers.push({
        matcher,
        reducer
      });
      return builder;
    },
    addDefaultCase(reducer) {
      if (false) {
        if (defaultCaseReducer) {
          throw new Error(true ? formatProdErrorMessage2(31) : "`builder.addDefaultCase` can only be called once");
        }
      }
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x) {
  return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
  if (false) {
    if (typeof mapOrBuilderCallback === "object") {
      throw new Error(true ? formatProdErrorMessage2(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
    }
  }
  let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
  let getInitialState;
  if (isStateFunction(initialState)) {
    getInitialState = () => freezeDraftable(initialState());
  } else {
    const frozenInitialState = freezeDraftable(initialState);
    getInitialState = () => frozenInitialState;
  }
  function reducer(state = getInitialState(), action) {
    let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({
      matcher
    }) => matcher(action)).map(({
      reducer: reducer2
    }) => reducer2)];
    if (caseReducers.filter((cr) => !!cr).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce((previousState, caseReducer) => {
      if (caseReducer) {
        if (isDraft(previousState)) {
          const draft = previousState;
          const result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!isDraftable(previousState)) {
          const result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw new Error(true ? formatProdErrorMessage2(9) : "A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return produce(previousState, (draft) => {
            return caseReducer(draft, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
var matches = (matcher, action) => {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf(...matchers) {
  return (action) => {
    return matchers.some((matcher) => matches(matcher, action));
  };
}
var commonProperties = ["name", "message", "stack", "code"];
var RejectWithValue = class {
  constructor(payload, meta) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    __publicField(this, "_type");
    this.payload = payload;
    this.meta = meta;
  }
};
var FulfillWithMeta = class {
  constructor(payload, meta) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    __publicField(this, "_type");
    this.payload = payload;
    this.meta = meta;
  }
};
var miniSerializeError = (value) => {
  if (typeof value === "object" && value !== null) {
    const simpleError = {};
    for (const property of commonProperties) {
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return {
    message: String(value)
  };
};
var createAsyncThunk = /* @__PURE__ */ (() => {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
      payload,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "fulfilled"
      }
    }));
    const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
      payload: void 0,
      meta: {
        ...meta || {},
        arg,
        requestId,
        requestStatus: "pending"
      }
    }));
    const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: {
        ...meta || {},
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: error?.name === "AbortError",
        condition: error?.name === "ConditionError"
      }
    }));
    function actionCreator(arg) {
      return (dispatch, getState, extra) => {
        const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
        const abortController = new AbortController();
        let abortHandler;
        let abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        const promise = async function() {
          let finalAction;
          try {
            let conditionResult = options?.condition?.(arg, {
              getState,
              extra
            });
            if (isThenable(conditionResult)) {
              conditionResult = await conditionResult;
            }
            if (conditionResult === false || abortController.signal.aborted) {
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            }
            const abortedPromise = new Promise((_, reject) => {
              abortHandler = () => {
                reject({
                  name: "AbortError",
                  message: abortReason || "Aborted"
                });
              };
              abortController.signal.addEventListener("abort", abortHandler);
            });
            dispatch(pending(requestId, arg, options?.getPendingMeta?.({
              requestId,
              arg
            }, {
              getState,
              extra
            })));
            finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
              dispatch,
              getState,
              extra,
              requestId,
              signal: abortController.signal,
              abort,
              rejectWithValue: (value, meta) => {
                return new RejectWithValue(value, meta);
              },
              fulfillWithValue: (value, meta) => {
                return new FulfillWithMeta(value, meta);
              }
            })).then((result) => {
              if (result instanceof RejectWithValue) {
                throw result;
              }
              if (result instanceof FulfillWithMeta) {
                return fulfilled(result.payload, requestId, arg, result.meta);
              }
              return fulfilled(result, requestId, arg);
            })]);
          } catch (err) {
            finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
          } finally {
            if (abortHandler) {
              abortController.signal.removeEventListener("abort", abortHandler);
            }
          }
          const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
          if (!skipDispatch) {
            dispatch(finalAction);
          }
          return finalAction;
        }();
        return Object.assign(promise, {
          abort,
          requestId,
          arg,
          unwrap() {
            return promise.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      settled: isAnyOf(rejected, fulfilled),
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = () => createAsyncThunk2;
  return createAsyncThunk2;
})();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
  [asyncThunkSymbol]: createAsyncThunk
};
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var assertFunction = (func, expected) => {
  if (typeof func !== "function") {
    throw new Error(true ? formatProdErrorMessage2(32) : `${expected} is not a function`);
  }
};
var {
  assign
} = Object;
var alm = "listenerMiddleware";
var getListenerEntryPropsFrom = (options) => {
  let {
    type,
    actionCreator,
    matcher,
    predicate,
    effect
  } = options;
  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate) {
  } else {
    throw new Error(true ? formatProdErrorMessage2(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  }
  assertFunction(effect, "options.listener");
  return {
    predicate,
    type,
    effect
  };
};
var createListenerEntry = Object.assign((options) => {
  const {
    type,
    predicate,
    effect
  } = getListenerEntryPropsFrom(options);
  const id = nanoid();
  const entry = {
    id,
    effect,
    type,
    predicate,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(true ? formatProdErrorMessage2(22) : "Unsubscribe not initialized");
    }
  };
  return entry;
}, {
  withTypes: () => createListenerEntry
});
var addListener = Object.assign(createAction(`${alm}/add`), {
  withTypes: () => addListener
});
var clearAllListeners = createAction(`${alm}/removeAll`);
var removeListener = Object.assign(createAction(`${alm}/remove`), {
  withTypes: () => removeListener
});
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
function formatProdErrorMessage2(code) {
  return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}

// src/utils/validate-payload.ts
var requiredNonEmptyString = new StringValue({
  required: true,
  emptyAllowed: false
});
var nonEmptyString = new StringValue({
  required: false,
  emptyAllowed: false
});
var requiredEmptyAllowedString = new StringValue({
  required: true,
  emptyAllowed: true
});
var nonRequiredEmptyAllowedString = new StringValue({
  required: false,
  emptyAllowed: true
});
var nonEmptyStringArray = new ArrayValue({
  each: requiredNonEmptyString,
  required: true
});
var optionalNonEmptyVersionString = new StringValue({
  required: false,
  emptyAllowed: false,
  regex: /^\d+\.\d+\.\d+$/
});
var serializeSchemaValidationError = ({
  message,
  name,
  stack
}) => ({ message, name, stack });
var validatePayloadAndThrow = (payload, definition) => {
  const isSchemaValue = "required" in definition;
  if (isSchemaValue) {
    return {
      payload: new Schema({
        value: definition
      }).validate({ value: payload }).value
    };
  }
  const asRecordValue = new RecordValue({
    options: { required: true },
    values: definition
  });
  const isInvalid = asRecordValue.validate(payload);
  if (isInvalid) {
    throw new SchemaValidationError(isInvalid);
  }
  return { payload };
};
var validatePayload = (payload, definition) => {
  try {
    return validatePayloadAndThrow(payload, definition);
  } catch (error) {
    return {
      payload,
      error: serializeSchemaValidationError(error)
    };
  }
};
var validateInitialState = (engine, schema, obj, functionName) => {
  const message = `Check the initialState of ${functionName}`;
  return validateObject(
    engine,
    schema,
    obj,
    message,
    "Controller initialization error"
  );
};
var validateOptions = (engine, schema, obj, functionName) => {
  const message = `Check the options of ${functionName}`;
  return validateObject(
    engine,
    schema,
    obj,
    message,
    "Controller initialization error"
  );
};
var validateObject = (engine, schema, obj, validationMessage, errorMessage) => {
  try {
    return schema.validate(obj, validationMessage);
  } catch (error) {
    engine.logger.error(error, errorMessage);
    throw error;
  }
};

// src/utils/version.ts
var VERSION = "2.63.3";
var COVEO_FRAMEWORK = ["@coveo/atomic", "@coveo/quantic"];

// src/features/configuration/configuration-actions.ts
var originSchemaOnConfigUpdate = () => nonEmptyString;
var originSchemaOnUpdate = () => requiredNonEmptyString;
var updateBasicConfiguration = createAction(
  "configuration/updateBasicConfiguration",
  (payload) => validatePayload(payload, {
    accessToken: nonEmptyString,
    organizationId: nonEmptyString,
    platformUrl: nonEmptyString
  })
);
var updateSearchConfiguration = createAction(
  "configuration/updateSearchConfiguration",
  (payload) => {
    return validatePayload(payload, {
      apiBaseUrl: nonEmptyString,
      pipeline: new StringValue({ required: false, emptyAllowed: true }),
      searchHub: nonEmptyString,
      timezone: nonEmptyString,
      locale: nonEmptyString,
      authenticationProviders: new ArrayValue({
        required: false,
        each: requiredNonEmptyString
      })
    });
  }
);
var analyticsConfigurationSchema = {
  enabled: new BooleanValue({ default: true }),
  originContext: originSchemaOnConfigUpdate(),
  originLevel2: originSchemaOnConfigUpdate(),
  originLevel3: originSchemaOnConfigUpdate(),
  apiBaseUrl: nonEmptyString,
  nextApiBaseUrl: nonEmptyString,
  runtimeEnvironment: new Value(),
  anonymous: new BooleanValue({ default: false }),
  deviceId: nonEmptyString,
  userDisplayName: nonEmptyString,
  documentLocation: nonEmptyString,
  trackingId: nonEmptyString,
  analyticsMode: new StringValue({
    constrainTo: ["legacy", "next"],
    required: false,
    default: "legacy"
  }),
  source: new RecordValue({
    options: { required: false },
    values: COVEO_FRAMEWORK.reduce(
      (acc, framework) => {
        acc[framework] = optionalNonEmptyVersionString;
        return acc;
      },
      {}
    )
  })
};
var updateAnalyticsConfiguration = createAction(
  "configuration/updateAnalyticsConfiguration",
  (payload) => {
    if (doNotTrack()) {
      payload.enabled = false;
    }
    return validatePayload(payload, analyticsConfigurationSchema);
  }
);
var disableAnalytics = createAction("configuration/analytics/disable");
var enableAnalytics = createAction("configuration/analytics/enable");
var setOriginLevel2 = createAction(
  "configuration/analytics/originlevel2",
  (payload) => validatePayload(payload, { originLevel2: originSchemaOnUpdate() })
);
var setOriginLevel3 = createAction(
  "configuration/analytics/originlevel3",
  (payload) => validatePayload(payload, { originLevel3: originSchemaOnUpdate() })
);

// node_modules/coveo.analytics/dist/browser.mjs
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var EventType;
(function(EventType2) {
  EventType2["search"] = "search";
  EventType2["click"] = "click";
  EventType2["custom"] = "custom";
  EventType2["view"] = "view";
  EventType2["collect"] = "collect";
})(EventType || (EventType = {}));
function hasWindow() {
  return typeof window !== "undefined";
}
function hasNavigator() {
  return typeof navigator !== "undefined";
}
function hasDocument() {
  return typeof document !== "undefined";
}
function hasLocalStorage() {
  try {
    return typeof localStorage !== "undefined";
  } catch (error) {
    return false;
  }
}
function hasSessionStorage() {
  try {
    return typeof sessionStorage !== "undefined";
  } catch (error) {
    return false;
  }
}
function hasCookieStorage() {
  return hasNavigator() && navigator.cookieEnabled;
}
var eventTypesForDefaultValues = [EventType.click, EventType.custom, EventType.search, EventType.view];
var addDefaultValues = (eventType, payload) => {
  return eventTypesForDefaultValues.indexOf(eventType) !== -1 ? Object.assign({ language: hasDocument() ? document.documentElement.lang : "unknown", userAgent: hasNavigator() ? navigator.userAgent : "unknown" }, payload) : payload;
};
var Cookie = class _Cookie {
  static set(name, value, expire) {
    var domain, expirationDate, domainParts, host;
    if (expire) {
      expirationDate = /* @__PURE__ */ new Date();
      expirationDate.setTime(expirationDate.getTime() + expire);
    }
    host = window.location.hostname;
    if (host.indexOf(".") === -1) {
      writeCookie(name, value, expirationDate);
    } else {
      domainParts = host.split(".");
      domain = domainParts[domainParts.length - 2] + "." + domainParts[domainParts.length - 1];
      writeCookie(name, value, expirationDate, domain);
    }
  }
  static get(name) {
    var cookiePrefix = name + "=";
    var cookieArray = document.cookie.split(";");
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      cookie = cookie.replace(/^\s+/, "");
      if (cookie.lastIndexOf(cookiePrefix, 0) === 0) {
        return cookie.substring(cookiePrefix.length, cookie.length);
      }
    }
    return null;
  }
  static erase(name) {
    _Cookie.set(name, "", -1);
  }
};
function writeCookie(name, value, expirationDate, domain) {
  document.cookie = `${name}=${value}` + (expirationDate ? `;expires=${expirationDate.toUTCString()}` : "") + (domain ? `;domain=${domain}` : "") + ";path=/;SameSite=Lax";
}
function getAvailableStorage() {
  if (hasLocalStorage()) {
    return localStorage;
  }
  if (hasCookieStorage()) {
    return new CookieStorage();
  }
  if (hasSessionStorage()) {
    return sessionStorage;
  }
  return new NullStorage();
}
var CookieStorage = class _CookieStorage {
  getItem(key) {
    return Cookie.get(`${_CookieStorage.prefix}${key}`);
  }
  removeItem(key) {
    Cookie.erase(`${_CookieStorage.prefix}${key}`);
  }
  setItem(key, data, expire) {
    Cookie.set(`${_CookieStorage.prefix}${key}`, data, expire);
  }
};
CookieStorage.prefix = "coveo_";
var CookieAndLocalStorage = class {
  constructor() {
    this.cookieStorage = new CookieStorage();
  }
  getItem(key) {
    return localStorage.getItem(key) || this.cookieStorage.getItem(key);
  }
  removeItem(key) {
    this.cookieStorage.removeItem(key);
    localStorage.removeItem(key);
  }
  setItem(key, data) {
    localStorage.setItem(key, data);
    this.cookieStorage.setItem(key, data, 31556926e3);
  }
};
var NullStorage = class {
  getItem(key) {
    return null;
  }
  removeItem(key) {
  }
  setItem(key, data) {
  }
};
var STORE_KEY = "__coveo.analytics.history";
var MAX_NUMBER_OF_HISTORY_ELEMENTS = 20;
var MIN_THRESHOLD_FOR_DUPLICATE_VALUE = 1e3 * 60;
var MAX_VALUE_SIZE = 75;
var HistoryStore = class {
  constructor(store) {
    this.store = store || getAvailableStorage();
  }
  addElement(elem) {
    elem.internalTime = (/* @__PURE__ */ new Date()).getTime();
    elem = this.cropQueryElement(this.stripEmptyQuery(elem));
    let currentHistory = this.getHistoryWithInternalTime();
    if (currentHistory != null) {
      if (this.isValidEntry(elem)) {
        this.setHistory([elem].concat(currentHistory));
      }
    } else {
      this.setHistory([elem]);
    }
  }
  addElementAsync(elem) {
    return __awaiter(this, void 0, void 0, function* () {
      elem.internalTime = (/* @__PURE__ */ new Date()).getTime();
      elem = this.cropQueryElement(this.stripEmptyQuery(elem));
      let currentHistory = yield this.getHistoryWithInternalTimeAsync();
      if (currentHistory != null) {
        if (this.isValidEntry(elem)) {
          this.setHistory([elem].concat(currentHistory));
        }
      } else {
        this.setHistory([elem]);
      }
    });
  }
  getHistory() {
    const history2 = this.getHistoryWithInternalTime();
    return this.stripEmptyQueries(this.stripInternalTime(history2));
  }
  getHistoryAsync() {
    return __awaiter(this, void 0, void 0, function* () {
      const history2 = yield this.getHistoryWithInternalTimeAsync();
      return this.stripEmptyQueries(this.stripInternalTime(history2));
    });
  }
  getHistoryWithInternalTime() {
    try {
      const elements = this.store.getItem(STORE_KEY);
      if (elements && typeof elements === "string") {
        return JSON.parse(elements);
      } else {
        return [];
      }
    } catch (e) {
      return [];
    }
  }
  getHistoryWithInternalTimeAsync() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const elements = yield this.store.getItem(STORE_KEY);
        if (elements) {
          return JSON.parse(elements);
        } else {
          return [];
        }
      } catch (e) {
        return [];
      }
    });
  }
  setHistory(history2) {
    try {
      this.store.setItem(STORE_KEY, JSON.stringify(history2.slice(0, MAX_NUMBER_OF_HISTORY_ELEMENTS)));
    } catch (e) {
    }
  }
  clear() {
    try {
      this.store.removeItem(STORE_KEY);
    } catch (e) {
    }
  }
  getMostRecentElement() {
    let currentHistory = this.getHistoryWithInternalTime();
    if (Array.isArray(currentHistory)) {
      const sorted = currentHistory.sort((first, second) => {
        return (second.internalTime || 0) - (first.internalTime || 0);
      });
      return sorted[0];
    }
    return null;
  }
  cropQueryElement(part) {
    if (part.name && part.value && part.name.toLowerCase() === "query") {
      part.value = part.value.slice(0, MAX_VALUE_SIZE);
    }
    return part;
  }
  isValidEntry(elem) {
    let lastEntry = this.getMostRecentElement();
    if (lastEntry && lastEntry.value == elem.value) {
      return (elem.internalTime || 0) - (lastEntry.internalTime || 0) > MIN_THRESHOLD_FOR_DUPLICATE_VALUE;
    }
    return true;
  }
  stripInternalTime(history2) {
    if (Array.isArray(history2)) {
      return history2.map((part) => {
        const { name, time, value } = part;
        return { name, time, value };
      });
    }
    return [];
  }
  stripEmptyQuery(part) {
    const { name, time, value } = part;
    if (name && typeof value === "string" && name.toLowerCase() === "query" && value.trim() === "") {
      return { name, time };
    }
    return part;
  }
  stripEmptyQueries(history2) {
    return history2.map((part) => this.stripEmptyQuery(part));
  }
};
var history = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  HistoryStore,
  MAX_NUMBER_OF_HISTORY_ELEMENTS,
  MAX_VALUE_SIZE,
  MIN_THRESHOLD_FOR_DUPLICATE_VALUE,
  STORE_KEY,
  default: HistoryStore
});
var enhanceViewEvent = (eventType, payload) => __awaiter(void 0, void 0, void 0, function* () {
  if (eventType === EventType.view) {
    yield addPageViewToHistory(payload.contentIdValue);
    return Object.assign({ location: window.location.toString(), referrer: document.referrer, title: document.title }, payload);
  }
  return payload;
});
var addPageViewToHistory = (pageViewValue) => __awaiter(void 0, void 0, void 0, function* () {
  const store = new HistoryStore();
  const historyElement = {
    name: "PageView",
    value: pageViewValue,
    time: (/* @__PURE__ */ new Date()).toISOString()
  };
  yield store.addElementAsync(historyElement);
});
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v;
  const arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL$1 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL$1;
  return generateUUID;
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  const K = [1518500249, 1859775393, 2400959708, 3395469782];
  const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);
    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }
    M[i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var v5 = v35("v5", 80, sha1);
var uuidv5 = v5;
var libVersion = "2.30.2";
var getFormattedLocation = (location) => `${location.protocol}//${location.hostname}${location.pathname.indexOf("/") === 0 ? location.pathname : `/${location.pathname}`}${location.search}`;
var BasePluginEventTypes = {
  pageview: "pageview",
  event: "event"
};
var Plugin = class {
  constructor({ client, uuidGenerator = v4 }) {
    this.client = client;
    this.uuidGenerator = uuidGenerator;
  }
};
var BasePlugin = class extends Plugin {
  constructor({ client, uuidGenerator = v4 }) {
    super({ client, uuidGenerator });
    this.actionData = {};
    this.pageViewId = uuidGenerator();
    this.nextPageViewId = this.pageViewId;
    this.currentLocation = getFormattedLocation(window.location);
    this.lastReferrer = hasDocument() ? document.referrer : "";
    this.addHooks();
  }
  getApi(name) {
    switch (name) {
      case "setAction":
        return this.setAction;
      default:
        return null;
    }
  }
  setAction(action, options) {
    this.action = action;
    this.actionData = options;
  }
  clearData() {
    this.clearPluginData();
    this.action = void 0;
    this.actionData = {};
  }
  getLocationInformation(eventType, payload) {
    return Object.assign({ hitType: eventType }, this.getNextValues(eventType, payload));
  }
  updateLocationInformation(eventType, payload) {
    this.updateLocationForNextPageView(eventType, payload);
  }
  getDefaultContextInformation(eventType) {
    const documentContext = {
      title: hasDocument() ? document.title : "",
      encoding: hasDocument() ? document.characterSet : "UTF-8"
    };
    const screenContext = {
      screenResolution: `${screen.width}x${screen.height}`,
      screenColor: `${screen.colorDepth}-bit`
    };
    const navigatorContext = {
      language: navigator.language,
      userAgent: navigator.userAgent
    };
    const eventContext = {
      time: Date.now(),
      eventId: this.uuidGenerator()
    };
    return Object.assign(Object.assign(Object.assign(Object.assign({}, eventContext), screenContext), navigatorContext), documentContext);
  }
  updateLocationForNextPageView(eventType, payload) {
    const { pageViewId, referrer, location } = this.getNextValues(eventType, payload);
    this.lastReferrer = referrer;
    this.pageViewId = pageViewId;
    this.currentLocation = location;
    if (eventType === BasePluginEventTypes.pageview) {
      this.nextPageViewId = this.uuidGenerator();
      this.hasSentFirstPageView = true;
    }
  }
  getNextValues(eventType, payload) {
    return {
      pageViewId: eventType === BasePluginEventTypes.pageview ? this.nextPageViewId : this.pageViewId,
      referrer: eventType === BasePluginEventTypes.pageview && this.hasSentFirstPageView ? this.currentLocation : this.lastReferrer,
      location: eventType === BasePluginEventTypes.pageview ? this.getCurrentLocationFromPayload(payload) : this.currentLocation
    };
  }
  getCurrentLocationFromPayload(payload) {
    if (!!payload.page) {
      const removeStartingSlash = (page) => page.replace(/^\/?(.*)$/, "/$1");
      const extractHostnamePart = (location) => location.split("/").slice(0, 3).join("/");
      return `${extractHostnamePart(this.currentLocation)}${removeStartingSlash(payload.page)}`;
    } else {
      return getFormattedLocation(window.location);
    }
  }
};
var CoveoLinkParam = class _CoveoLinkParam {
  constructor(clientId, timestamp) {
    if (!validate(clientId))
      throw Error("Not a valid uuid");
    this.clientId = clientId;
    this.creationDate = Math.floor(timestamp / 1e3);
  }
  toString() {
    return this.clientId.replace(/-/g, "") + "." + this.creationDate.toString();
  }
  get expired() {
    const age = Math.floor(Date.now() / 1e3) - this.creationDate;
    return age < 0 || age > _CoveoLinkParam.expirationTime;
  }
  validate(referrerString, referrerList) {
    return !this.expired && this.matchReferrer(referrerString, referrerList);
  }
  matchReferrer(referrerString, referrerList) {
    try {
      const url = new URL(referrerString);
      return referrerList.some((value) => {
        const hostRegExp = new RegExp(value.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*") + "$");
        return hostRegExp.test(url.host);
      });
    } catch (error) {
      return false;
    }
  }
  static fromString(input) {
    const parts = input.split(".");
    if (parts.length !== 2) {
      return null;
    }
    const [clientIdPart, creationDate] = parts;
    if (clientIdPart.length !== 32 || isNaN(parseInt(creationDate))) {
      return null;
    }
    const clientId = clientIdPart.substring(0, 8) + "-" + clientIdPart.substring(8, 12) + "-" + clientIdPart.substring(12, 16) + "-" + clientIdPart.substring(16, 20) + "-" + clientIdPart.substring(20, 32);
    if (validate(clientId)) {
      return new _CoveoLinkParam(clientId, Number.parseInt(creationDate) * 1e3);
    } else {
      return null;
    }
  }
};
CoveoLinkParam.cvo_cid = "cvo_cid";
CoveoLinkParam.expirationTime = 120;
var LinkPlugin = class extends Plugin {
  constructor({ client, uuidGenerator = v4 }) {
    super({ client, uuidGenerator });
  }
  getApi(name) {
    switch (name) {
      case "decorate":
        return this.decorate;
      case "acceptFrom":
        return this.acceptFrom;
      default:
        return null;
    }
  }
  decorate(urlString) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.client.getCurrentVisitorId) {
        throw new Error("Could not retrieve current clientId");
      }
      try {
        const url = new URL(urlString);
        const clientId = yield this.client.getCurrentVisitorId();
        url.searchParams.set(CoveoLinkParam.cvo_cid, new CoveoLinkParam(clientId, Date.now()).toString());
        return url.toString();
      } catch (error) {
        throw new Error("Invalid URL provided");
      }
    });
  }
  acceptFrom(acceptedReferrers) {
    this.client.setAcceptedLinkReferrers(acceptedReferrers);
  }
};
LinkPlugin.Id = "link";
var keysOf = Object.keys;
function isObject(o) {
  return o !== null && typeof o === "object" && !Array.isArray(o);
}
var ticketKeysMapping = {
  id: "svc_ticket_id",
  subject: "svc_ticket_subject",
  description: "svc_ticket_description",
  category: "svc_ticket_category",
  productId: "svc_ticket_product_id",
  custom: "svc_ticket_custom"
};
var ticketKeysMappingValues = keysOf(ticketKeysMapping).map((key) => ticketKeysMapping[key]);
var ticketSubKeysMatchGroup = [...ticketKeysMappingValues].join("|");
var ticketKeyRegex = new RegExp(`^(${ticketSubKeysMatchGroup}$)`);
var serviceActionsKeysMapping = {
  svcAction: "svc_action",
  svcActionData: "svc_action_data"
};
var convertTicketToMeasurementProtocol = (ticket) => {
  return keysOf(ticket).filter((key) => ticket[key] !== void 0).reduce((mappedTicket, key) => {
    const newKey = ticketKeysMapping[key] || key;
    return Object.assign(Object.assign({}, mappedTicket), { [newKey]: ticket[key] });
  }, {});
};
var isTicketKey = (key) => ticketKeyRegex.test(key);
var isServiceKey = [isTicketKey];
var productKeysMapping = {
  id: "id",
  name: "nm",
  brand: "br",
  category: "ca",
  variant: "va",
  price: "pr",
  quantity: "qt",
  coupon: "cc",
  position: "ps",
  group: "group"
};
var impressionKeysMapping = {
  id: "id",
  name: "nm",
  brand: "br",
  category: "ca",
  variant: "va",
  position: "ps",
  price: "pr",
  group: "group"
};
var productActionsKeysMapping = {
  action: "pa",
  list: "pal",
  listSource: "pls"
};
var transactionActionsKeysMapping = {
  id: "ti",
  revenue: "tr",
  tax: "tt",
  shipping: "ts",
  coupon: "tcc",
  affiliation: "ta",
  step: "cos",
  option: "col"
};
var coveoCommerceExtensionKeys = [
  "loyaltyCardId",
  "loyaltyTier",
  "thirdPartyPersona",
  "companyName",
  "favoriteStore",
  "storeName",
  "userIndustry",
  "userRole",
  "userDepartment",
  "businessUnit"
];
var quoteActionsKeysMapping = {
  id: "quoteId",
  affiliation: "quoteAffiliation"
};
var reviewActionsKeysMapping = {
  id: "reviewId",
  rating: "reviewRating",
  comment: "reviewComment"
};
var commerceActionKeysMappingPerAction = {
  add: productActionsKeysMapping,
  bookmark_add: productActionsKeysMapping,
  bookmark_remove: productActionsKeysMapping,
  click: productActionsKeysMapping,
  checkout: productActionsKeysMapping,
  checkout_option: productActionsKeysMapping,
  detail: productActionsKeysMapping,
  impression: productActionsKeysMapping,
  remove: productActionsKeysMapping,
  refund: Object.assign(Object.assign({}, productActionsKeysMapping), transactionActionsKeysMapping),
  purchase: Object.assign(Object.assign({}, productActionsKeysMapping), transactionActionsKeysMapping),
  quickview: productActionsKeysMapping,
  quote: Object.assign(Object.assign({}, productActionsKeysMapping), quoteActionsKeysMapping),
  review: Object.assign(Object.assign({}, productActionsKeysMapping), reviewActionsKeysMapping)
};
var productKeysMappingValues = keysOf(productKeysMapping).map((key) => productKeysMapping[key]);
var impressionKeysMappingValues = keysOf(impressionKeysMapping).map((key) => impressionKeysMapping[key]);
var productActionsKeysMappingValues = keysOf(productActionsKeysMapping).map((key) => productActionsKeysMapping[key]);
var transactionActionsKeysMappingValues = keysOf(transactionActionsKeysMapping).map((key) => transactionActionsKeysMapping[key]);
var reviewKeysMappingValues = keysOf(reviewActionsKeysMapping).map((key) => reviewActionsKeysMapping[key]);
var quoteKeysMappingValues = keysOf(quoteActionsKeysMapping).map((key) => quoteActionsKeysMapping[key]);
var productSubKeysMatchGroup = [...productKeysMappingValues, "custom"].join("|");
var impressionSubKeysMatchGroup = [...impressionKeysMappingValues, "custom"].join("|");
var productPrefixMatchGroup = "(pr[0-9]+)";
var impressionPrefixMatchGroup = "(il[0-9]+pi[0-9]+)";
var productKeyRegex = new RegExp(`^${productPrefixMatchGroup}(${productSubKeysMatchGroup})$`);
var impressionKeyRegex = new RegExp(`^(${impressionPrefixMatchGroup}(${impressionSubKeysMatchGroup}))|(il[0-9]+nm)$`);
var productActionsKeyRegex = new RegExp(`^(${productActionsKeysMappingValues.join("|")})$`);
var transactionActionsKeyRegex = new RegExp(`^(${transactionActionsKeysMappingValues.join("|")})$`);
var customProductKeyRegex = new RegExp(`^${productPrefixMatchGroup}custom$`);
var customImpressionKeyRegex = new RegExp(`^${impressionPrefixMatchGroup}custom$`);
var coveoCommerceExtensionKeysRegex = new RegExp(`^(${[...coveoCommerceExtensionKeys, ...reviewKeysMappingValues, ...quoteKeysMappingValues].join("|")})$`);
var isProductKey = (key) => productKeyRegex.test(key);
var isImpressionKey = (key) => impressionKeyRegex.test(key);
var isProductActionsKey = (key) => productActionsKeyRegex.test(key);
var isTransactionActionsKeyRegex = (key) => transactionActionsKeyRegex.test(key);
var isCoveoCommerceExtensionKey = (key) => coveoCommerceExtensionKeysRegex.test(key);
var isCommerceKey = [
  isImpressionKey,
  isProductKey,
  isProductActionsKey,
  isTransactionActionsKeyRegex,
  isCoveoCommerceExtensionKey
];
var isCustomCommerceKey = [customProductKeyRegex, customImpressionKeyRegex];
var globalParamKeysMapping = {
  anonymizeIp: "aip"
};
var eventKeysMapping = {
  eventCategory: "ec",
  eventAction: "ea",
  eventLabel: "el",
  eventValue: "ev",
  page: "dp",
  visitorId: "cid",
  clientId: "cid",
  userId: "uid",
  currencyCode: "cu"
};
var contextInformationMapping = {
  hitType: "t",
  pageViewId: "pid",
  encoding: "de",
  location: "dl",
  referrer: "dr",
  screenColor: "sd",
  screenResolution: "sr",
  title: "dt",
  userAgent: "ua",
  language: "ul",
  eventId: "z",
  time: "tm"
};
var coveoExtensionsKeys = [
  "contentId",
  "contentIdKey",
  "contentType",
  "searchHub",
  "tab",
  "searchUid",
  "permanentId",
  "contentLocale",
  "trackingId"
];
var baseMeasurementProtocolKeysMapping = Object.assign(Object.assign(Object.assign(Object.assign({}, globalParamKeysMapping), eventKeysMapping), contextInformationMapping), coveoExtensionsKeys.reduce((all, key) => Object.assign(Object.assign({}, all), { [key]: key }), {}));
var measurementProtocolKeysMapping = Object.assign(Object.assign({}, baseMeasurementProtocolKeysMapping), serviceActionsKeysMapping);
var convertKeysToMeasurementProtocol = (params) => {
  const keysMappingForAction = !!params.action && commerceActionKeysMappingPerAction[params.action] || {};
  return keysOf(params).reduce((mappedKeys, key) => {
    const newKey = keysMappingForAction[key] || measurementProtocolKeysMapping[key] || key;
    return Object.assign(Object.assign({}, mappedKeys), { [newKey]: params[key] });
  }, {});
};
var measurementProtocolKeysMappingValues = keysOf(measurementProtocolKeysMapping).map((key) => measurementProtocolKeysMapping[key]);
var isKnownMeasurementProtocolKey = (key) => measurementProtocolKeysMappingValues.indexOf(key) !== -1;
var isCustomKey = (key) => key === "custom";
var isMeasurementProtocolKey = (key) => {
  return [...isCommerceKey, ...isServiceKey, isKnownMeasurementProtocolKey, isCustomKey].some((test) => test(key));
};
var convertCustomMeasurementProtocolKeys = (data) => {
  return keysOf(data).reduce((all, current2) => {
    const match = getFirstCustomMeasurementProtocolKeyMatch(current2);
    if (match) {
      return Object.assign(Object.assign({}, all), convertCustomObject(match, data[current2]));
    } else {
      return Object.assign(Object.assign({}, all), { [current2]: data[current2] });
    }
  }, {});
};
var getFirstCustomMeasurementProtocolKeyMatch = (key) => {
  let matchedKey = void 0;
  [...isCustomCommerceKey].every((regex) => {
    var _a;
    matchedKey = (_a = regex.exec(key)) === null || _a === void 0 ? void 0 : _a[1];
    return !Boolean(matchedKey);
  });
  return matchedKey;
};
var convertCustomObject = (prefix, customData) => {
  return keysOf(customData).reduce((allCustom, currentCustomKey) => Object.assign(Object.assign({}, allCustom), { [`${prefix}${currentCustomKey}`]: customData[currentCustomKey] }), {});
};
var AnalyticsBeaconClient = class {
  constructor(opts) {
    this.opts = opts;
  }
  sendEvent(eventType, originalPayload) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.isAvailable()) {
        throw new Error(`navigator.sendBeacon is not supported in this browser. Consider adding a polyfill like "sendbeacon-polyfill".`);
      }
      const { baseUrl, preprocessRequest } = this.opts;
      const paramsFragments = yield this.getQueryParamsForEventType(eventType);
      const { url, payload } = yield this.preProcessRequestAsPotentialJSONString(`${baseUrl}/analytics/${eventType}?${paramsFragments}`, originalPayload, preprocessRequest);
      const parsedRequestData = this.encodeForEventType(eventType, payload);
      const body = new Blob([parsedRequestData], {
        type: "application/x-www-form-urlencoded"
      });
      navigator.sendBeacon(url, body);
      return;
    });
  }
  isAvailable() {
    return "sendBeacon" in navigator;
  }
  deleteHttpCookieVisitorId() {
    return Promise.resolve();
  }
  preProcessRequestAsPotentialJSONString(originalURL, originalPayload, preprocessRequest) {
    return __awaiter(this, void 0, void 0, function* () {
      let returnedUrl = originalURL;
      let returnedPayload = originalPayload;
      if (preprocessRequest) {
        const processedRequest = yield preprocessRequest({ url: originalURL, body: JSON.stringify(originalPayload) }, "analyticsBeacon");
        const { url: processedURL, body: processedBody } = processedRequest;
        returnedUrl = processedURL || originalURL;
        try {
          returnedPayload = JSON.parse(processedBody);
        } catch (e) {
          console.error("Unable to process the request body as a JSON string", e);
        }
      }
      return {
        payload: returnedPayload,
        url: returnedUrl
      };
    });
  }
  encodeForEventType(eventType, payload) {
    return this.isEventTypeLegacy(eventType) ? this.encodeEventToJson(eventType, payload) : this.encodeEventToJson(eventType, payload, this.opts.token);
  }
  getQueryParamsForEventType(eventType) {
    return __awaiter(this, void 0, void 0, function* () {
      const { token, visitorIdProvider } = this.opts;
      const visitorId = yield visitorIdProvider.getCurrentVisitorId();
      return [
        token && this.isEventTypeLegacy(eventType) ? `access_token=${token}` : "",
        visitorId ? `visitorId=${visitorId}` : "",
        "discardVisitInfo=true"
      ].filter((p) => !!p).join("&");
    });
  }
  isEventTypeLegacy(eventType) {
    return [EventType.click, EventType.custom, EventType.search, EventType.view].indexOf(eventType) !== -1;
  }
  encodeEventToJson(eventType, payload, access_token) {
    let encoded = `${eventType}Event=${encodeURIComponent(JSON.stringify(payload))}`;
    if (access_token) {
      encoded = `access_token=${encodeURIComponent(access_token)}&${encoded}`;
    }
    return encoded;
  }
};
var NoopAnalyticsClient = class {
  sendEvent(_, __) {
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.resolve();
    });
  }
  deleteHttpCookieVisitorId() {
    return __awaiter(this, void 0, void 0, function* () {
      return Promise.resolve();
    });
  }
};
var fetch$1 = window.fetch;
var AnalyticsFetchClient = class {
  constructor(opts) {
    this.opts = opts;
  }
  sendEvent(eventType, payload) {
    return __awaiter(this, void 0, void 0, function* () {
      const { baseUrl, visitorIdProvider, preprocessRequest } = this.opts;
      const visitorIdParam = this.shouldAppendVisitorId(eventType) ? yield this.getVisitorIdParam() : "";
      const defaultOptions = {
        url: `${baseUrl}/analytics/${eventType}${visitorIdParam}`,
        credentials: "include",
        mode: "cors",
        headers: this.getHeaders(),
        method: "POST",
        body: JSON.stringify(payload)
      };
      const _a = Object.assign(Object.assign({}, defaultOptions), preprocessRequest ? yield preprocessRequest(defaultOptions, "analyticsFetch") : {}), { url } = _a, fetchData = __rest(_a, ["url"]);
      let response;
      try {
        response = yield fetch$1(url, fetchData);
      } catch (error) {
        console.error("An error has occured when sending the event.", error);
        return;
      }
      if (response.ok) {
        const visit = yield response.json();
        if (visit.visitorId) {
          visitorIdProvider.setCurrentVisitorId(visit.visitorId);
        }
        return visit;
      } else {
        try {
          response.json();
        } catch (_b) {
        }
        console.error(`An error has occured when sending the "${eventType}" event.`, response, payload);
        throw new Error(`An error has occurred when sending the "${eventType}" event. Check the console logs for more details.`);
      }
    });
  }
  deleteHttpCookieVisitorId() {
    return __awaiter(this, void 0, void 0, function* () {
      const { baseUrl } = this.opts;
      const url = `${baseUrl}/analytics/visit`;
      yield fetch$1(url, { headers: this.getHeaders(), method: "DELETE" });
    });
  }
  shouldAppendVisitorId(eventType) {
    return [EventType.click, EventType.custom, EventType.search, EventType.view].indexOf(eventType) !== -1;
  }
  getVisitorIdParam() {
    return __awaiter(this, void 0, void 0, function* () {
      const { visitorIdProvider } = this.opts;
      const visitorId = yield visitorIdProvider.getCurrentVisitorId();
      return visitorId ? `?visitor=${visitorId}` : "";
    });
  }
  getHeaders() {
    const { token } = this.opts;
    return Object.assign(Object.assign({}, token ? { Authorization: `Bearer ${token}` } : {}), { "Content-Type": `application/json` });
  }
};
var BrowserRuntime = class {
  constructor(clientOptions, getUnprocessedRequests) {
    if (hasLocalStorage() && hasCookieStorage()) {
      this.storage = new CookieAndLocalStorage();
    } else if (hasLocalStorage()) {
      this.storage = localStorage;
    } else {
      console.warn("BrowserRuntime detected no valid storage available.", this);
      this.storage = new NullStorage();
    }
    this.client = new AnalyticsFetchClient(clientOptions);
    this.beaconClient = new AnalyticsBeaconClient(clientOptions);
    window.addEventListener("beforeunload", () => {
      const requests = getUnprocessedRequests();
      for (let { eventType, payload } of requests) {
        this.beaconClient.sendEvent(eventType, payload);
      }
    });
  }
  getClientDependingOnEventType(eventType) {
    return eventType === "click" && this.beaconClient.isAvailable() ? this.beaconClient : this.client;
  }
};
var NodeJSRuntime = class {
  constructor(clientOptions, storage) {
    this.storage = storage || new NullStorage();
    this.client = new AnalyticsFetchClient(clientOptions);
  }
  getClientDependingOnEventType(eventType) {
    return this.client;
  }
};
var NoopRuntime = class {
  constructor() {
    this.storage = new NullStorage();
    this.client = new NoopAnalyticsClient();
  }
  getClientDependingOnEventType(eventType) {
    return this.client;
  }
};
var API_KEY_PREFIX = "xx";
var isApiKey = (token) => (token === null || token === void 0 ? void 0 : token.startsWith(API_KEY_PREFIX)) || false;
var ReactNativeRuntimeWarning = `
        We've detected you're using React Native but have not provided the corresponding runtime, 
        for an optimal experience please use the "coveo.analytics/react-native" subpackage.
        Follow the Readme on how to set it up: https://github.com/coveo/coveo.analytics.js#using-react-native
    `;
function isReactNative() {
  return typeof navigator != "undefined" && navigator.product == "ReactNative";
}
var doNotTrackValues2 = ["1", 1, "yes", true];
function doNotTrack2() {
  return hasNavigator() && [
    navigator.globalPrivacyControl,
    navigator.doNotTrack,
    navigator.msDoNotTrack,
    window.doNotTrack
  ].some((value) => doNotTrackValues2.indexOf(value) !== -1);
}
var Version = "v15";
var Endpoints = {
  default: "https://analytics.cloud.coveo.com/rest/ua",
  production: "https://analytics.cloud.coveo.com/rest/ua",
  hipaa: "https://analyticshipaa.cloud.coveo.com/rest/ua"
};
function buildBaseUrl(endpoint = Endpoints.default, apiVersion = Version, isCustomEndpoint = false) {
  endpoint = endpoint.replace(/\/$/, "");
  if (isCustomEndpoint) {
    return `${endpoint}/${apiVersion}`;
  }
  const hasUARestEndpoint = endpoint.endsWith("/rest") || endpoint.endsWith("/rest/ua");
  return `${endpoint}${hasUARestEndpoint ? "" : "/rest"}/${apiVersion}`;
}
var COVEO_NAMESPACE = "38824e1f-37f5-42d3-8372-a4b8fa9df946";
var CoveoAnalyticsClient = class {
  get defaultOptions() {
    return {
      endpoint: Endpoints.default,
      isCustomEndpoint: false,
      token: "",
      version: Version,
      beforeSendHooks: [],
      afterSendHooks: []
    };
  }
  get version() {
    return libVersion;
  }
  constructor(opts) {
    this.acceptedLinkReferrers = [];
    if (!opts) {
      throw new Error("You have to pass options to this constructor");
    }
    this.options = Object.assign(Object.assign({}, this.defaultOptions), opts);
    this.visitorId = "";
    this.bufferedRequests = [];
    this.beforeSendHooks = [enhanceViewEvent, addDefaultValues].concat(this.options.beforeSendHooks);
    this.afterSendHooks = this.options.afterSendHooks;
    this.eventTypeMapping = {};
    const clientsOptions = {
      baseUrl: this.baseUrl,
      token: this.options.token,
      visitorIdProvider: this,
      preprocessRequest: this.options.preprocessRequest
    };
    if (doNotTrack2()) {
      this.runtime = new NoopRuntime();
    } else {
      this.runtime = this.options.runtimeEnvironment || this.initRuntime(clientsOptions);
    }
    this.addEventTypeMapping(EventType.view, { newEventType: EventType.view, addClientIdParameter: true });
    this.addEventTypeMapping(EventType.click, { newEventType: EventType.click, addClientIdParameter: true });
    this.addEventTypeMapping(EventType.custom, { newEventType: EventType.custom, addClientIdParameter: true });
    this.addEventTypeMapping(EventType.search, { newEventType: EventType.search, addClientIdParameter: true });
  }
  initRuntime(clientsOptions) {
    if (hasWindow() && hasDocument()) {
      return new BrowserRuntime(clientsOptions, () => {
        const copy = [...this.bufferedRequests];
        this.bufferedRequests = [];
        return copy;
      });
    } else if (isReactNative()) {
      console.warn(ReactNativeRuntimeWarning);
    }
    return new NodeJSRuntime(clientsOptions);
  }
  get storage() {
    return this.runtime.storage;
  }
  determineVisitorId() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        return hasWindow() && this.extractClientIdFromLink(window.location.href) || (yield this.storage.getItem("visitorId")) || v4();
      } catch (err) {
        console.log("Could not get visitor ID from the current runtime environment storage. Using a random ID instead.", err);
        return v4();
      }
    });
  }
  getCurrentVisitorId() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.visitorId) {
        const id = yield this.determineVisitorId();
        yield this.setCurrentVisitorId(id);
      }
      return this.visitorId;
    });
  }
  setCurrentVisitorId(visitorId) {
    return __awaiter(this, void 0, void 0, function* () {
      this.visitorId = visitorId;
      yield this.storage.setItem("visitorId", visitorId);
    });
  }
  setClientId(value, namespace) {
    return __awaiter(this, void 0, void 0, function* () {
      if (validate(value)) {
        this.setCurrentVisitorId(value.toLowerCase());
      } else {
        if (!namespace) {
          throw Error("Cannot generate uuid client id without a specific namespace string.");
        }
        this.setCurrentVisitorId(uuidv5(value, uuidv5(namespace, COVEO_NAMESPACE)));
      }
    });
  }
  getParameters(eventType, ...payload) {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.resolveParameters(eventType, ...payload);
    });
  }
  getPayload(eventType, ...payload) {
    return __awaiter(this, void 0, void 0, function* () {
      const parametersToSend = yield this.resolveParameters(eventType, ...payload);
      return yield this.resolvePayloadForParameters(eventType, parametersToSend);
    });
  }
  get currentVisitorId() {
    const visitorId = this.visitorId || this.storage.getItem("visitorId");
    if (typeof visitorId !== "string") {
      this.setCurrentVisitorId(v4());
    }
    return this.visitorId;
  }
  set currentVisitorId(visitorId) {
    this.visitorId = visitorId;
    this.storage.setItem("visitorId", visitorId);
  }
  extractClientIdFromLink(urlString) {
    if (doNotTrack2()) {
      return null;
    }
    try {
      const linkParam = new URL(urlString).searchParams.get(CoveoLinkParam.cvo_cid);
      if (linkParam == null) {
        return null;
      }
      const linker = CoveoLinkParam.fromString(linkParam);
      if (!linker || !hasDocument() || !linker.validate(document.referrer, this.acceptedLinkReferrers)) {
        return null;
      }
      return linker.clientId;
    } catch (error) {
    }
    return null;
  }
  resolveParameters(eventType, ...payload) {
    return __awaiter(this, void 0, void 0, function* () {
      const { variableLengthArgumentsNames = [], addVisitorIdParameter = false, usesMeasurementProtocol = false, addClientIdParameter = false } = this.eventTypeMapping[eventType] || {};
      const processVariableArgumentNamesStep = (currentPayload) => variableLengthArgumentsNames.length > 0 ? this.parseVariableArgumentsPayload(variableLengthArgumentsNames, currentPayload) : currentPayload[0];
      const addVisitorIdStep = (currentPayload) => __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, currentPayload), { visitorId: addVisitorIdParameter ? yield this.getCurrentVisitorId() : "" });
      });
      const addClientIdStep = (currentPayload) => __awaiter(this, void 0, void 0, function* () {
        if (addClientIdParameter) {
          return Object.assign(Object.assign({}, currentPayload), { clientId: yield this.getCurrentVisitorId() });
        }
        return currentPayload;
      });
      const setAnonymousUserStep = (currentPayload) => usesMeasurementProtocol ? this.ensureAnonymousUserWhenUsingApiKey(currentPayload) : currentPayload;
      const processBeforeSendHooksStep = (currentPayload) => this.beforeSendHooks.reduce((promisePayload, current2) => __awaiter(this, void 0, void 0, function* () {
        const payload2 = yield promisePayload;
        return yield current2(eventType, payload2);
      }), currentPayload);
      const parametersToSend = yield [
        processVariableArgumentNamesStep,
        addVisitorIdStep,
        addClientIdStep,
        setAnonymousUserStep,
        processBeforeSendHooksStep
      ].reduce((payloadPromise, step) => __awaiter(this, void 0, void 0, function* () {
        const payload2 = yield payloadPromise;
        return yield step(payload2);
      }), Promise.resolve(payload));
      return parametersToSend;
    });
  }
  resolvePayloadForParameters(eventType, parameters) {
    return __awaiter(this, void 0, void 0, function* () {
      const { usesMeasurementProtocol = false } = this.eventTypeMapping[eventType] || {};
      const addTrackingIdStep = (currentPayload) => this.setTrackingIdIfTrackingIdNotPresent(currentPayload);
      const cleanPayloadStep = (currentPayload) => this.removeEmptyPayloadValues(currentPayload, eventType);
      const validateParams = (currentPayload) => this.validateParams(currentPayload, eventType);
      const processMeasurementProtocolConversionStep = (currentPayload) => usesMeasurementProtocol ? convertKeysToMeasurementProtocol(currentPayload) : currentPayload;
      const removeUnknownParameters = (currentPayload) => usesMeasurementProtocol ? this.removeUnknownParameters(currentPayload) : currentPayload;
      const processCustomParameters = (currentPayload) => usesMeasurementProtocol ? this.processCustomParameters(currentPayload) : this.mapCustomParametersToCustomData(currentPayload);
      const payloadToSend = yield [
        addTrackingIdStep,
        cleanPayloadStep,
        validateParams,
        processMeasurementProtocolConversionStep,
        removeUnknownParameters,
        processCustomParameters
      ].reduce((payloadPromise, step) => __awaiter(this, void 0, void 0, function* () {
        const payload = yield payloadPromise;
        return yield step(payload);
      }), Promise.resolve(parameters));
      return payloadToSend;
    });
  }
  makeEvent(eventType, ...payload) {
    return __awaiter(this, void 0, void 0, function* () {
      const { newEventType: eventTypeToSend = eventType } = this.eventTypeMapping[eventType] || {};
      const parametersToSend = yield this.resolveParameters(eventType, ...payload);
      const payloadToSend = yield this.resolvePayloadForParameters(eventType, parametersToSend);
      return {
        eventType: eventTypeToSend,
        payload: payloadToSend,
        log: (remainingPayload) => __awaiter(this, void 0, void 0, function* () {
          this.bufferedRequests.push({
            eventType: eventTypeToSend,
            payload: Object.assign(Object.assign({}, payloadToSend), remainingPayload)
          });
          yield Promise.all(this.afterSendHooks.map((hook) => hook(eventType, Object.assign(Object.assign({}, parametersToSend), remainingPayload))));
          yield this.deferExecution();
          return yield this.sendFromBuffer();
        })
      };
    });
  }
  sendEvent(eventType, ...payload) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeEvent(eventType, ...payload)).log({});
    });
  }
  deferExecution() {
    return new Promise((resolve) => setTimeout(resolve, 0));
  }
  sendFromBuffer() {
    return __awaiter(this, void 0, void 0, function* () {
      const popped = this.bufferedRequests.shift();
      if (popped) {
        const { eventType, payload } = popped;
        return this.runtime.getClientDependingOnEventType(eventType).sendEvent(eventType, payload);
      }
    });
  }
  clear() {
    this.storage.removeItem("visitorId");
    const store = new HistoryStore();
    store.clear();
  }
  deleteHttpOnlyVisitorId() {
    this.runtime.client.deleteHttpCookieVisitorId();
  }
  makeSearchEvent(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeEvent(EventType.search, request);
    });
  }
  sendSearchEvent(_a) {
    var { searchQueryUid } = _a, preparedRequest = __rest(_a, ["searchQueryUid"]);
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSearchEvent(preparedRequest)).log({ searchQueryUid });
    });
  }
  makeClickEvent(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeEvent(EventType.click, request);
    });
  }
  sendClickEvent(_a) {
    var { searchQueryUid } = _a, preparedRequest = __rest(_a, ["searchQueryUid"]);
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeClickEvent(preparedRequest)).log({ searchQueryUid });
    });
  }
  makeCustomEvent(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeEvent(EventType.custom, request);
    });
  }
  sendCustomEvent(_a) {
    var { lastSearchQueryUid } = _a, preparedRequest = __rest(_a, ["lastSearchQueryUid"]);
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCustomEvent(preparedRequest)).log({ lastSearchQueryUid });
    });
  }
  makeViewEvent(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return this.makeEvent(EventType.view, request);
    });
  }
  sendViewEvent(request) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeViewEvent(request)).log({});
    });
  }
  getVisit() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.baseUrl}/analytics/visit`);
      const visit = yield response.json();
      this.visitorId = visit.visitorId;
      return visit;
    });
  }
  getHealth() {
    return __awaiter(this, void 0, void 0, function* () {
      const response = yield fetch(`${this.baseUrl}/analytics/monitoring/health`);
      return yield response.json();
    });
  }
  registerBeforeSendEventHook(hook) {
    this.beforeSendHooks.push(hook);
  }
  registerAfterSendEventHook(hook) {
    this.afterSendHooks.push(hook);
  }
  addEventTypeMapping(eventType, eventConfig) {
    this.eventTypeMapping[eventType] = eventConfig;
  }
  setAcceptedLinkReferrers(hosts) {
    if (Array.isArray(hosts) && hosts.every((host) => typeof host == "string"))
      this.acceptedLinkReferrers = hosts;
    else
      throw Error("Parameter should be an array of domain strings");
  }
  parseVariableArgumentsPayload(fieldsOrder, payload) {
    const parsedArguments = {};
    for (let i = 0, length = payload.length; i < length; i++) {
      const currentArgument = payload[i];
      if (typeof currentArgument === "string") {
        parsedArguments[fieldsOrder[i]] = currentArgument;
      } else if (typeof currentArgument === "object") {
        return Object.assign(Object.assign({}, parsedArguments), currentArgument);
      }
    }
    return parsedArguments;
  }
  isKeyAllowedEmpty(evtType, key) {
    const keysThatCanBeEmpty = {
      [EventType.search]: ["queryText"]
    };
    const match = keysThatCanBeEmpty[evtType] || [];
    return match.indexOf(key) !== -1;
  }
  removeEmptyPayloadValues(payload, eventType) {
    const isNotEmptyValue = (value) => typeof value !== "undefined" && value !== null && value !== "";
    return Object.keys(payload).filter((key) => this.isKeyAllowedEmpty(eventType, key) || isNotEmptyValue(payload[key])).reduce((newPayload, key) => Object.assign(Object.assign({}, newPayload), { [key]: payload[key] }), {});
  }
  removeUnknownParameters(payload) {
    const newPayload = Object.keys(payload).filter((key) => {
      if (isMeasurementProtocolKey(key)) {
        return true;
      } else {
        console.log(key, "is not processed by coveoua");
      }
    }).reduce((newPayload2, key) => Object.assign(Object.assign({}, newPayload2), { [key]: payload[key] }), {});
    return newPayload;
  }
  processCustomParameters(payload) {
    const { custom } = payload, rest = __rest(payload, ["custom"]);
    let lowercasedCustom = {};
    if (custom && isObject(custom)) {
      lowercasedCustom = this.lowercaseKeys(custom);
    }
    const newPayload = convertCustomMeasurementProtocolKeys(rest);
    return Object.assign(Object.assign({}, lowercasedCustom), newPayload);
  }
  mapCustomParametersToCustomData(payload) {
    const { custom } = payload, rest = __rest(payload, ["custom"]);
    if (custom && isObject(custom)) {
      const lowercasedCustom = this.lowercaseKeys(custom);
      return Object.assign(Object.assign({}, rest), { customData: Object.assign(Object.assign({}, lowercasedCustom), payload.customData) });
    } else {
      return payload;
    }
  }
  lowercaseKeys(custom) {
    const keys = Object.keys(custom);
    let result = {};
    keys.forEach((key) => {
      result[key.toLowerCase()] = custom[key];
    });
    return result;
  }
  validateParams(payload, eventType) {
    const { anonymizeIp } = payload, rest = __rest(payload, ["anonymizeIp"]);
    if (anonymizeIp !== void 0) {
      if (["0", "false", "undefined", "null", "{}", "[]", ""].indexOf(`${anonymizeIp}`.toLowerCase()) == -1) {
        rest.anonymizeIp = 1;
      }
    }
    if (eventType == EventType.view || eventType == EventType.click || eventType == EventType.search || eventType == EventType.custom) {
      rest.originLevel3 = this.limit(rest.originLevel3, 128);
    }
    if (eventType == EventType.view) {
      rest.location = this.limit(rest.location, 128);
    }
    if (eventType == "pageview" || eventType == "event") {
      rest.referrer = this.limit(rest.referrer, 2048);
      rest.location = this.limit(rest.location, 2048);
      rest.page = this.limit(rest.page, 2048);
    }
    return rest;
  }
  ensureAnonymousUserWhenUsingApiKey(payload) {
    const { userId } = payload, rest = __rest(payload, ["userId"]);
    if (isApiKey(this.options.token) && !userId) {
      rest["userId"] = "anonymous";
      return rest;
    } else {
      return payload;
    }
  }
  setTrackingIdIfTrackingIdNotPresent(payload) {
    const { trackingId } = payload, rest = __rest(payload, ["trackingId"]);
    if (trackingId) {
      return payload;
    }
    if (rest.hasOwnProperty("custom") && isObject(rest.custom)) {
      if (rest.custom.hasOwnProperty("context_website") || rest.custom.hasOwnProperty("siteName")) {
        rest["trackingId"] = rest.custom.context_website || rest.custom.siteName;
      }
    }
    if (rest.hasOwnProperty("customData") && isObject(rest.customData)) {
      if (rest.customData.hasOwnProperty("context_website") || rest.customData.hasOwnProperty("siteName")) {
        rest["trackingId"] = rest.customData.context_website || rest.customData.siteName;
      }
    }
    return rest;
  }
  limit(input, length) {
    if (typeof input !== "string") {
      return input;
    }
    return input.substring(0, length);
  }
  get baseUrl() {
    return buildBaseUrl(this.options.endpoint, this.options.version, this.options.isCustomEndpoint);
  }
};
var InsightEvents;
(function(InsightEvents2) {
  InsightEvents2["contextChanged"] = "contextChanged";
  InsightEvents2["expandToFullUI"] = "expandToFullUI";
  InsightEvents2["openUserActions"] = "openUserActions";
  InsightEvents2["showPrecedingSessions"] = "showPrecedingSessions";
  InsightEvents2["showFollowingSessions"] = "showFollowingSessions";
  InsightEvents2["clickViewedDocument"] = "clickViewedDocument";
  InsightEvents2["clickPageView"] = "clickPageView";
  InsightEvents2["createArticle"] = "createArticle";
})(InsightEvents || (InsightEvents = {}));
var SearchPageEvents;
(function(SearchPageEvents2) {
  SearchPageEvents2["interfaceLoad"] = "interfaceLoad";
  SearchPageEvents2["interfaceChange"] = "interfaceChange";
  SearchPageEvents2["didyoumeanAutomatic"] = "didyoumeanAutomatic";
  SearchPageEvents2["didyoumeanClick"] = "didyoumeanClick";
  SearchPageEvents2["resultsSort"] = "resultsSort";
  SearchPageEvents2["searchboxSubmit"] = "searchboxSubmit";
  SearchPageEvents2["searchboxClear"] = "searchboxClear";
  SearchPageEvents2["searchboxAsYouType"] = "searchboxAsYouType";
  SearchPageEvents2["breadcrumbFacet"] = "breadcrumbFacet";
  SearchPageEvents2["breadcrumbResetAll"] = "breadcrumbResetAll";
  SearchPageEvents2["documentQuickview"] = "documentQuickview";
  SearchPageEvents2["documentOpen"] = "documentOpen";
  SearchPageEvents2["omniboxAnalytics"] = "omniboxAnalytics";
  SearchPageEvents2["omniboxFromLink"] = "omniboxFromLink";
  SearchPageEvents2["searchFromLink"] = "searchFromLink";
  SearchPageEvents2["triggerNotify"] = "notify";
  SearchPageEvents2["triggerExecute"] = "execute";
  SearchPageEvents2["triggerQuery"] = "query";
  SearchPageEvents2["undoTriggerQuery"] = "undoQuery";
  SearchPageEvents2["triggerRedirect"] = "redirect";
  SearchPageEvents2["pagerResize"] = "pagerResize";
  SearchPageEvents2["pagerNumber"] = "pagerNumber";
  SearchPageEvents2["pagerNext"] = "pagerNext";
  SearchPageEvents2["pagerPrevious"] = "pagerPrevious";
  SearchPageEvents2["pagerScrolling"] = "pagerScrolling";
  SearchPageEvents2["staticFilterClearAll"] = "staticFilterClearAll";
  SearchPageEvents2["staticFilterSelect"] = "staticFilterSelect";
  SearchPageEvents2["staticFilterDeselect"] = "staticFilterDeselect";
  SearchPageEvents2["facetClearAll"] = "facetClearAll";
  SearchPageEvents2["facetSearch"] = "facetSearch";
  SearchPageEvents2["facetSelect"] = "facetSelect";
  SearchPageEvents2["facetSelectAll"] = "facetSelectAll";
  SearchPageEvents2["facetDeselect"] = "facetDeselect";
  SearchPageEvents2["facetExclude"] = "facetExclude";
  SearchPageEvents2["facetUnexclude"] = "facetUnexclude";
  SearchPageEvents2["facetUpdateSort"] = "facetUpdateSort";
  SearchPageEvents2["facetShowMore"] = "showMoreFacetResults";
  SearchPageEvents2["facetShowLess"] = "showLessFacetResults";
  SearchPageEvents2["queryError"] = "query";
  SearchPageEvents2["queryErrorBack"] = "errorBack";
  SearchPageEvents2["queryErrorClear"] = "errorClearQuery";
  SearchPageEvents2["queryErrorRetry"] = "errorRetry";
  SearchPageEvents2["recommendation"] = "recommendation";
  SearchPageEvents2["recommendationInterfaceLoad"] = "recommendationInterfaceLoad";
  SearchPageEvents2["recommendationOpen"] = "recommendationOpen";
  SearchPageEvents2["likeSmartSnippet"] = "likeSmartSnippet";
  SearchPageEvents2["dislikeSmartSnippet"] = "dislikeSmartSnippet";
  SearchPageEvents2["expandSmartSnippet"] = "expandSmartSnippet";
  SearchPageEvents2["collapseSmartSnippet"] = "collapseSmartSnippet";
  SearchPageEvents2["openSmartSnippetFeedbackModal"] = "openSmartSnippetFeedbackModal";
  SearchPageEvents2["closeSmartSnippetFeedbackModal"] = "closeSmartSnippetFeedbackModal";
  SearchPageEvents2["sendSmartSnippetReason"] = "sendSmartSnippetReason";
  SearchPageEvents2["expandSmartSnippetSuggestion"] = "expandSmartSnippetSuggestion";
  SearchPageEvents2["collapseSmartSnippetSuggestion"] = "collapseSmartSnippetSuggestion";
  SearchPageEvents2["showMoreSmartSnippetSuggestion"] = "showMoreSmartSnippetSuggestion";
  SearchPageEvents2["showLessSmartSnippetSuggestion"] = "showLessSmartSnippetSuggestion";
  SearchPageEvents2["openSmartSnippetSource"] = "openSmartSnippetSource";
  SearchPageEvents2["openSmartSnippetSuggestionSource"] = "openSmartSnippetSuggestionSource";
  SearchPageEvents2["openSmartSnippetInlineLink"] = "openSmartSnippetInlineLink";
  SearchPageEvents2["openSmartSnippetSuggestionInlineLink"] = "openSmartSnippetSuggestionInlineLink";
  SearchPageEvents2["recentQueryClick"] = "recentQueriesClick";
  SearchPageEvents2["clearRecentQueries"] = "clearRecentQueries";
  SearchPageEvents2["recentResultClick"] = "recentResultClick";
  SearchPageEvents2["clearRecentResults"] = "clearRecentResults";
  SearchPageEvents2["noResultsBack"] = "noResultsBack";
  SearchPageEvents2["showMoreFoldedResults"] = "showMoreFoldedResults";
  SearchPageEvents2["showLessFoldedResults"] = "showLessFoldedResults";
  SearchPageEvents2["copyToClipboard"] = "copyToClipboard";
  SearchPageEvents2["caseSendEmail"] = "Case.SendEmail";
  SearchPageEvents2["feedItemTextPost"] = "FeedItem.TextPost";
  SearchPageEvents2["caseAttach"] = "caseAttach";
  SearchPageEvents2["caseDetach"] = "caseDetach";
  SearchPageEvents2["retryGeneratedAnswer"] = "retryGeneratedAnswer";
  SearchPageEvents2["likeGeneratedAnswer"] = "likeGeneratedAnswer";
  SearchPageEvents2["dislikeGeneratedAnswer"] = "dislikeGeneratedAnswer";
  SearchPageEvents2["openGeneratedAnswerSource"] = "openGeneratedAnswerSource";
  SearchPageEvents2["generatedAnswerStreamEnd"] = "generatedAnswerStreamEnd";
  SearchPageEvents2["generatedAnswerSourceHover"] = "generatedAnswerSourceHover";
  SearchPageEvents2["generatedAnswerCopyToClipboard"] = "generatedAnswerCopyToClipboard";
  SearchPageEvents2["generatedAnswerHideAnswers"] = "generatedAnswerHideAnswers";
  SearchPageEvents2["generatedAnswerShowAnswers"] = "generatedAnswerShowAnswers";
  SearchPageEvents2["generatedAnswerExpand"] = "generatedAnswerExpand";
  SearchPageEvents2["generatedAnswerCollapse"] = "generatedAnswerCollapse";
  SearchPageEvents2["generatedAnswerFeedbackSubmit"] = "generatedAnswerFeedbackSubmit";
  SearchPageEvents2["rephraseGeneratedAnswer"] = "rephraseGeneratedAnswer";
})(SearchPageEvents || (SearchPageEvents = {}));
var CustomEventsTypes = {
  [SearchPageEvents.triggerNotify]: "queryPipelineTriggers",
  [SearchPageEvents.triggerExecute]: "queryPipelineTriggers",
  [SearchPageEvents.triggerQuery]: "queryPipelineTriggers",
  [SearchPageEvents.triggerRedirect]: "queryPipelineTriggers",
  [SearchPageEvents.queryError]: "errors",
  [SearchPageEvents.queryErrorBack]: "errors",
  [SearchPageEvents.queryErrorClear]: "errors",
  [SearchPageEvents.queryErrorRetry]: "errors",
  [SearchPageEvents.pagerNext]: "getMoreResults",
  [SearchPageEvents.pagerPrevious]: "getMoreResults",
  [SearchPageEvents.pagerNumber]: "getMoreResults",
  [SearchPageEvents.pagerResize]: "getMoreResults",
  [SearchPageEvents.pagerScrolling]: "getMoreResults",
  [SearchPageEvents.facetSearch]: "facet",
  [SearchPageEvents.facetShowLess]: "facet",
  [SearchPageEvents.facetShowMore]: "facet",
  [SearchPageEvents.recommendation]: "recommendation",
  [SearchPageEvents.likeSmartSnippet]: "smartSnippet",
  [SearchPageEvents.dislikeSmartSnippet]: "smartSnippet",
  [SearchPageEvents.expandSmartSnippet]: "smartSnippet",
  [SearchPageEvents.collapseSmartSnippet]: "smartSnippet",
  [SearchPageEvents.openSmartSnippetFeedbackModal]: "smartSnippet",
  [SearchPageEvents.closeSmartSnippetFeedbackModal]: "smartSnippet",
  [SearchPageEvents.sendSmartSnippetReason]: "smartSnippet",
  [SearchPageEvents.expandSmartSnippetSuggestion]: "smartSnippetSuggestions",
  [SearchPageEvents.collapseSmartSnippetSuggestion]: "smartSnippetSuggestions",
  [SearchPageEvents.showMoreSmartSnippetSuggestion]: "smartSnippetSuggestions",
  [SearchPageEvents.showLessSmartSnippetSuggestion]: "smartSnippetSuggestions",
  [SearchPageEvents.clearRecentQueries]: "recentQueries",
  [SearchPageEvents.recentResultClick]: "recentlyClickedDocuments",
  [SearchPageEvents.clearRecentResults]: "recentlyClickedDocuments",
  [SearchPageEvents.showLessFoldedResults]: "folding",
  [SearchPageEvents.caseDetach]: "case",
  [SearchPageEvents.likeGeneratedAnswer]: "generatedAnswer",
  [SearchPageEvents.dislikeGeneratedAnswer]: "generatedAnswer",
  [SearchPageEvents.openGeneratedAnswerSource]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerStreamEnd]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerSourceHover]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerCopyToClipboard]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerHideAnswers]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerShowAnswers]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerExpand]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerCollapse]: "generatedAnswer",
  [SearchPageEvents.generatedAnswerFeedbackSubmit]: "generatedAnswer",
  [InsightEvents.expandToFullUI]: "interface",
  [InsightEvents.openUserActions]: "User Actions",
  [InsightEvents.showPrecedingSessions]: "User Actions",
  [InsightEvents.showFollowingSessions]: "User Actions",
  [InsightEvents.clickViewedDocument]: "User Actions",
  [InsightEvents.clickPageView]: "User Actions",
  [InsightEvents.createArticle]: "createArticle"
};
var NoopAnalytics = class {
  constructor() {
    this.runtime = new NoopRuntime();
    this.currentVisitorId = "";
  }
  getPayload() {
    return Promise.resolve();
  }
  getParameters() {
    return Promise.resolve();
  }
  makeEvent(eventType) {
    return Promise.resolve({ eventType, payload: null, log: () => Promise.resolve() });
  }
  sendEvent() {
    return Promise.resolve();
  }
  makeSearchEvent() {
    return this.makeEvent(EventType.search);
  }
  sendSearchEvent() {
    return Promise.resolve();
  }
  makeClickEvent() {
    return this.makeEvent(EventType.click);
  }
  sendClickEvent() {
    return Promise.resolve();
  }
  makeCustomEvent() {
    return this.makeEvent(EventType.custom);
  }
  sendCustomEvent() {
    return Promise.resolve();
  }
  makeViewEvent() {
    return this.makeEvent(EventType.view);
  }
  sendViewEvent() {
    return Promise.resolve();
  }
  getVisit() {
    return Promise.resolve({ id: "", visitorId: "" });
  }
  getHealth() {
    return Promise.resolve({ status: "" });
  }
  registerBeforeSendEventHook() {
  }
  registerAfterSendEventHook() {
  }
  addEventTypeMapping() {
  }
  get version() {
    return libVersion;
  }
};
function filterConsecutiveRepeatedValues(rawData) {
  let prev = "";
  return rawData.filter((value) => {
    const isDifferent = value !== prev;
    prev = value;
    return isDifferent;
  });
}
function removeSemicolons(rawData) {
  return rawData.map((value) => {
    return value.replace(/;/g, "");
  });
}
function getDataString(data) {
  const ANALYTICS_LENGTH_LIMIT = 256;
  const formattedData = data.join(";");
  if (formattedData.length <= ANALYTICS_LENGTH_LIMIT) {
    return formattedData;
  }
  return getDataString(data.slice(1));
}
var formatArrayForCoveoCustomData = (rawData) => {
  const dataWithoutSemicolons = removeSemicolons(rawData);
  const dataWithoutRepeatedValues = filterConsecutiveRepeatedValues(dataWithoutSemicolons);
  return getDataString(dataWithoutRepeatedValues);
};
function formatOmniboxMetadata(meta) {
  const partialQueries = typeof meta.partialQueries === "string" ? meta.partialQueries : formatArrayForCoveoCustomData(meta.partialQueries);
  const suggestions = typeof meta.suggestions === "string" ? meta.suggestions : formatArrayForCoveoCustomData(meta.suggestions);
  return Object.assign(Object.assign({}, meta), {
    partialQueries,
    suggestions
  });
}
var CoveoSearchPageClient = class {
  constructor(opts, provider) {
    this.opts = opts;
    this.provider = provider;
    const shouldDisableAnalytics = opts.enableAnalytics === false || doNotTrack2();
    this.coveoAnalyticsClient = shouldDisableAnalytics ? new NoopAnalytics() : new CoveoAnalyticsClient(opts);
  }
  disable() {
    this.coveoAnalyticsClient = new NoopAnalytics();
  }
  enable() {
    this.coveoAnalyticsClient = new CoveoAnalyticsClient(this.opts);
  }
  makeInterfaceLoad() {
    return this.makeSearchEvent(SearchPageEvents.interfaceLoad);
  }
  logInterfaceLoad() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeInterfaceLoad()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeRecommendationInterfaceLoad() {
    return this.makeSearchEvent(SearchPageEvents.recommendationInterfaceLoad);
  }
  logRecommendationInterfaceLoad() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRecommendationInterfaceLoad()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeRecommendation() {
    return this.makeCustomEvent(SearchPageEvents.recommendation);
  }
  logRecommendation() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRecommendation()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeRecommendationOpen(info, identifier) {
    return this.makeClickEvent(SearchPageEvents.recommendationOpen, info, identifier);
  }
  logRecommendationOpen(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRecommendationOpen(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeStaticFilterClearAll(meta) {
    return this.makeSearchEvent(SearchPageEvents.staticFilterClearAll, meta);
  }
  logStaticFilterClearAll(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeStaticFilterClearAll(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeStaticFilterSelect(meta) {
    return this.makeSearchEvent(SearchPageEvents.staticFilterSelect, meta);
  }
  logStaticFilterSelect(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeStaticFilterSelect(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeStaticFilterDeselect(meta) {
    return this.makeSearchEvent(SearchPageEvents.staticFilterDeselect, meta);
  }
  logStaticFilterDeselect(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeStaticFilterDeselect(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFetchMoreResults() {
    return this.makeCustomEvent(SearchPageEvents.pagerScrolling, { type: "getMoreResults" });
  }
  logFetchMoreResults() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFetchMoreResults()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeInterfaceChange(metadata) {
    return this.makeSearchEvent(SearchPageEvents.interfaceChange, metadata);
  }
  logInterfaceChange(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeInterfaceChange(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeDidYouMeanAutomatic() {
    return this.makeSearchEvent(SearchPageEvents.didyoumeanAutomatic);
  }
  logDidYouMeanAutomatic() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeDidYouMeanAutomatic()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeDidYouMeanClick() {
    return this.makeSearchEvent(SearchPageEvents.didyoumeanClick);
  }
  logDidYouMeanClick() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeDidYouMeanClick()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeResultsSort(metadata) {
    return this.makeSearchEvent(SearchPageEvents.resultsSort, metadata);
  }
  logResultsSort(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeResultsSort(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeSearchboxSubmit() {
    return this.makeSearchEvent(SearchPageEvents.searchboxSubmit);
  }
  logSearchboxSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSearchboxSubmit()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeSearchboxClear() {
    return this.makeSearchEvent(SearchPageEvents.searchboxClear);
  }
  logSearchboxClear() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSearchboxClear()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeSearchboxAsYouType() {
    return this.makeSearchEvent(SearchPageEvents.searchboxAsYouType);
  }
  logSearchboxAsYouType() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSearchboxAsYouType()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeBreadcrumbFacet(metadata) {
    return this.makeSearchEvent(SearchPageEvents.breadcrumbFacet, metadata);
  }
  logBreadcrumbFacet(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeBreadcrumbFacet(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeBreadcrumbResetAll() {
    return this.makeSearchEvent(SearchPageEvents.breadcrumbResetAll);
  }
  logBreadcrumbResetAll() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeBreadcrumbResetAll()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeDocumentQuickview(info, identifier) {
    return this.makeClickEvent(SearchPageEvents.documentQuickview, info, identifier);
  }
  logDocumentQuickview(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeDocumentQuickview(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeDocumentOpen(info, identifier) {
    return this.makeClickEvent(SearchPageEvents.documentOpen, info, identifier);
  }
  logDocumentOpen(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeDocumentOpen(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeOmniboxAnalytics(meta) {
    return this.makeSearchEvent(SearchPageEvents.omniboxAnalytics, formatOmniboxMetadata(meta));
  }
  logOmniboxAnalytics(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOmniboxAnalytics(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeOmniboxFromLink(meta) {
    return this.makeSearchEvent(SearchPageEvents.omniboxFromLink, formatOmniboxMetadata(meta));
  }
  logOmniboxFromLink(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOmniboxFromLink(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeSearchFromLink() {
    return this.makeSearchEvent(SearchPageEvents.searchFromLink);
  }
  logSearchFromLink() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSearchFromLink()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeTriggerNotify(meta) {
    return this.makeCustomEvent(SearchPageEvents.triggerNotify, meta);
  }
  logTriggerNotify(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeTriggerNotify(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeTriggerExecute(meta) {
    return this.makeCustomEvent(SearchPageEvents.triggerExecute, meta);
  }
  logTriggerExecute(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeTriggerExecute(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeTriggerQuery() {
    return this.makeCustomEvent(SearchPageEvents.triggerQuery, { query: this.provider.getSearchEventRequestPayload().queryText }, "queryPipelineTriggers");
  }
  logTriggerQuery() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeTriggerQuery()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeUndoTriggerQuery(meta) {
    return this.makeSearchEvent(SearchPageEvents.undoTriggerQuery, meta);
  }
  logUndoTriggerQuery(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeUndoTriggerQuery(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeTriggerRedirect(meta) {
    return this.makeCustomEvent(SearchPageEvents.triggerRedirect, Object.assign(Object.assign({}, meta), { query: this.provider.getSearchEventRequestPayload().queryText }));
  }
  logTriggerRedirect(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeTriggerRedirect(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makePagerResize(meta) {
    return this.makeCustomEvent(SearchPageEvents.pagerResize, meta);
  }
  logPagerResize(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makePagerResize(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makePagerNumber(meta) {
    return this.makeCustomEvent(SearchPageEvents.pagerNumber, meta);
  }
  logPagerNumber(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makePagerNumber(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makePagerNext(meta) {
    return this.makeCustomEvent(SearchPageEvents.pagerNext, meta);
  }
  logPagerNext(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makePagerNext(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makePagerPrevious(meta) {
    return this.makeCustomEvent(SearchPageEvents.pagerPrevious, meta);
  }
  logPagerPrevious(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makePagerPrevious(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makePagerScrolling() {
    return this.makeCustomEvent(SearchPageEvents.pagerScrolling);
  }
  logPagerScrolling() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makePagerScrolling()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetClearAll(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetClearAll, meta);
  }
  logFacetClearAll(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetClearAll(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetSearch(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetSearch, meta);
  }
  logFacetSearch(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetSearch(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetSelect(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetSelect, meta);
  }
  logFacetSelect(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetSelect(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetDeselect(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetDeselect, meta);
  }
  logFacetDeselect(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetDeselect(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetExclude(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetExclude, meta);
  }
  logFacetExclude(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetExclude(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetUnexclude(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetUnexclude, meta);
  }
  logFacetUnexclude(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetUnexclude(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetSelectAll(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetSelectAll, meta);
  }
  logFacetSelectAll(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetSelectAll(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetUpdateSort(meta) {
    return this.makeSearchEvent(SearchPageEvents.facetUpdateSort, meta);
  }
  logFacetUpdateSort(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetUpdateSort(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetShowMore(meta) {
    return this.makeCustomEvent(SearchPageEvents.facetShowMore, meta);
  }
  logFacetShowMore(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetShowMore(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeFacetShowLess(meta) {
    return this.makeCustomEvent(SearchPageEvents.facetShowLess, meta);
  }
  logFacetShowLess(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeFacetShowLess(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeQueryError(meta) {
    return this.makeCustomEvent(SearchPageEvents.queryError, meta);
  }
  logQueryError(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeQueryError(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeQueryErrorBack() {
    return __awaiter(this, void 0, void 0, function* () {
      const customEventBuilder = yield this.makeCustomEvent(SearchPageEvents.queryErrorBack);
      return {
        description: customEventBuilder.description,
        log: () => __awaiter(this, void 0, void 0, function* () {
          yield customEventBuilder.log({ searchUID: this.provider.getSearchUID() });
          return this.logSearchEvent(SearchPageEvents.queryErrorBack);
        })
      };
    });
  }
  logQueryErrorBack() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeQueryErrorBack()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeQueryErrorRetry() {
    return __awaiter(this, void 0, void 0, function* () {
      const customEventBuilder = yield this.makeCustomEvent(SearchPageEvents.queryErrorRetry);
      return {
        description: customEventBuilder.description,
        log: () => __awaiter(this, void 0, void 0, function* () {
          yield customEventBuilder.log({ searchUID: this.provider.getSearchUID() });
          return this.logSearchEvent(SearchPageEvents.queryErrorRetry);
        })
      };
    });
  }
  logQueryErrorRetry() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeQueryErrorRetry()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeQueryErrorClear() {
    return __awaiter(this, void 0, void 0, function* () {
      const customEventBuilder = yield this.makeCustomEvent(SearchPageEvents.queryErrorClear);
      return {
        description: customEventBuilder.description,
        log: () => __awaiter(this, void 0, void 0, function* () {
          yield customEventBuilder.log({ searchUID: this.provider.getSearchUID() });
          return this.logSearchEvent(SearchPageEvents.queryErrorClear);
        })
      };
    });
  }
  logQueryErrorClear() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeQueryErrorClear()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeLikeSmartSnippet() {
    return this.makeCustomEvent(SearchPageEvents.likeSmartSnippet);
  }
  logLikeSmartSnippet() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeLikeSmartSnippet()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeDislikeSmartSnippet() {
    return this.makeCustomEvent(SearchPageEvents.dislikeSmartSnippet);
  }
  logDislikeSmartSnippet() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeDislikeSmartSnippet()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeExpandSmartSnippet() {
    return this.makeCustomEvent(SearchPageEvents.expandSmartSnippet);
  }
  logExpandSmartSnippet() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeExpandSmartSnippet()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeCollapseSmartSnippet() {
    return this.makeCustomEvent(SearchPageEvents.collapseSmartSnippet);
  }
  logCollapseSmartSnippet() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCollapseSmartSnippet()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeOpenSmartSnippetFeedbackModal() {
    return this.makeCustomEvent(SearchPageEvents.openSmartSnippetFeedbackModal);
  }
  logOpenSmartSnippetFeedbackModal() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOpenSmartSnippetFeedbackModal()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeCloseSmartSnippetFeedbackModal() {
    return this.makeCustomEvent(SearchPageEvents.closeSmartSnippetFeedbackModal);
  }
  logCloseSmartSnippetFeedbackModal() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCloseSmartSnippetFeedbackModal()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeSmartSnippetFeedbackReason(reason, details) {
    return this.makeCustomEvent(SearchPageEvents.sendSmartSnippetReason, { reason, details });
  }
  logSmartSnippetFeedbackReason(reason, details) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSmartSnippetFeedbackReason(reason, details)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeExpandSmartSnippetSuggestion(snippet) {
    return this.makeCustomEvent(SearchPageEvents.expandSmartSnippetSuggestion, "documentId" in snippet ? snippet : { documentId: snippet });
  }
  logExpandSmartSnippetSuggestion(snippet) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeExpandSmartSnippetSuggestion(snippet)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeCollapseSmartSnippetSuggestion(snippet) {
    return this.makeCustomEvent(SearchPageEvents.collapseSmartSnippetSuggestion, "documentId" in snippet ? snippet : { documentId: snippet });
  }
  logCollapseSmartSnippetSuggestion(snippet) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCollapseSmartSnippetSuggestion(snippet)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeShowMoreSmartSnippetSuggestion(snippet) {
    return this.makeCustomEvent(SearchPageEvents.showMoreSmartSnippetSuggestion, snippet);
  }
  logShowMoreSmartSnippetSuggestion(snippet) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeShowMoreSmartSnippetSuggestion(snippet)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeShowLessSmartSnippetSuggestion(snippet) {
    return this.makeCustomEvent(SearchPageEvents.showLessSmartSnippetSuggestion, snippet);
  }
  logShowLessSmartSnippetSuggestion(snippet) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeShowLessSmartSnippetSuggestion(snippet)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeOpenSmartSnippetSource(info, identifier) {
    return this.makeClickEvent(SearchPageEvents.openSmartSnippetSource, info, identifier);
  }
  logOpenSmartSnippetSource(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOpenSmartSnippetSource(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeOpenSmartSnippetSuggestionSource(info, snippet) {
    return this.makeClickEvent(SearchPageEvents.openSmartSnippetSuggestionSource, info, { contentIDKey: snippet.documentId.contentIdKey, contentIDValue: snippet.documentId.contentIdValue }, snippet);
  }
  makeCopyToClipboard(info, identifier) {
    return this.makeClickEvent(SearchPageEvents.copyToClipboard, info, identifier);
  }
  logCopyToClipboard(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCopyToClipboard(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  logOpenSmartSnippetSuggestionSource(info, snippet) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOpenSmartSnippetSuggestionSource(info, snippet)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeOpenSmartSnippetInlineLink(info, identifierAndLink) {
    return this.makeClickEvent(SearchPageEvents.openSmartSnippetInlineLink, info, { contentIDKey: identifierAndLink.contentIDKey, contentIDValue: identifierAndLink.contentIDValue }, identifierAndLink);
  }
  logOpenSmartSnippetInlineLink(info, identifierAndLink) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOpenSmartSnippetInlineLink(info, identifierAndLink)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeOpenSmartSnippetSuggestionInlineLink(info, snippetAndLink) {
    return this.makeClickEvent(SearchPageEvents.openSmartSnippetSuggestionInlineLink, info, {
      contentIDKey: snippetAndLink.documentId.contentIdKey,
      contentIDValue: snippetAndLink.documentId.contentIdValue
    }, snippetAndLink);
  }
  logOpenSmartSnippetSuggestionInlineLink(info, snippetAndLink) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOpenSmartSnippetSuggestionInlineLink(info, snippetAndLink)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeRecentQueryClick() {
    return this.makeSearchEvent(SearchPageEvents.recentQueryClick);
  }
  logRecentQueryClick() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRecentQueryClick()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeClearRecentQueries() {
    return this.makeCustomEvent(SearchPageEvents.clearRecentQueries);
  }
  logClearRecentQueries() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeClearRecentQueries()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeRecentResultClick(info, identifier) {
    return this.makeCustomEvent(SearchPageEvents.recentResultClick, { info, identifier });
  }
  logRecentResultClick(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRecentResultClick(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeClearRecentResults() {
    return this.makeCustomEvent(SearchPageEvents.clearRecentResults);
  }
  logClearRecentResults() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeClearRecentResults()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeNoResultsBack() {
    return this.makeSearchEvent(SearchPageEvents.noResultsBack);
  }
  logNoResultsBack() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeNoResultsBack()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeShowMoreFoldedResults(info, identifier) {
    return this.makeClickEvent(SearchPageEvents.showMoreFoldedResults, info, identifier);
  }
  logShowMoreFoldedResults(info, identifier) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeShowMoreFoldedResults(info, identifier)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeShowLessFoldedResults() {
    return this.makeCustomEvent(SearchPageEvents.showLessFoldedResults);
  }
  logShowLessFoldedResults() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeShowLessFoldedResults()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeEventDescription(preparedEvent, actionCause) {
    var _a;
    return { actionCause, customData: (_a = preparedEvent.payload) === null || _a === void 0 ? void 0 : _a.customData };
  }
  makeCustomEvent(event, metadata, eventType = CustomEventsTypes[event]) {
    return __awaiter(this, void 0, void 0, function* () {
      this.coveoAnalyticsClient.getParameters;
      const customData = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), metadata);
      const request = Object.assign(Object.assign({}, yield this.getBaseEventRequest(customData)), { eventType, eventValue: event });
      const preparedEvent = yield this.coveoAnalyticsClient.makeCustomEvent(request);
      return {
        description: this.makeEventDescription(preparedEvent, event),
        log: ({ searchUID }) => preparedEvent.log({ lastSearchQueryUid: searchUID })
      };
    });
  }
  logCustomEvent(event, metadata, eventType = CustomEventsTypes[event]) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCustomEvent(event, metadata, eventType)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeCustomEventWithType(eventValue, eventType, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      const customData = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), metadata);
      const payload = Object.assign(Object.assign({}, yield this.getBaseEventRequest(customData)), {
        eventType,
        eventValue
      });
      const preparedEvent = yield this.coveoAnalyticsClient.makeCustomEvent(payload);
      return {
        description: this.makeEventDescription(preparedEvent, eventValue),
        log: ({ searchUID }) => preparedEvent.log({ lastSearchQueryUid: searchUID })
      };
    });
  }
  logCustomEventWithType(eventValue, eventType, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeCustomEventWithType(eventValue, eventType, metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  logSearchEvent(event, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeSearchEvent(event, metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeSearchEvent(event, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      const request = yield this.getBaseSearchEventRequest(event, metadata);
      const preparedEvent = yield this.coveoAnalyticsClient.makeSearchEvent(request);
      return {
        description: this.makeEventDescription(preparedEvent, event),
        log: ({ searchUID }) => preparedEvent.log({ searchQueryUid: searchUID })
      };
    });
  }
  makeClickEvent(event, info, identifier, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      const request = Object.assign(Object.assign(Object.assign({}, info), yield this.getBaseEventRequest(Object.assign(Object.assign({}, identifier), metadata))), { queryPipeline: this.provider.getPipeline(), actionCause: event });
      const preparedEvent = yield this.coveoAnalyticsClient.makeClickEvent(request);
      return {
        description: this.makeEventDescription(preparedEvent, event),
        log: ({ searchUID }) => preparedEvent.log({ searchQueryUid: searchUID })
      };
    });
  }
  logClickEvent(event, info, identifier, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeClickEvent(event, info, identifier, metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  getBaseSearchEventRequest(event, metadata) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
      return Object.assign(Object.assign(Object.assign({}, yield this.getBaseEventRequest(Object.assign(Object.assign({}, metadata), (_b = (_a = this.provider).getGeneratedAnswerMetadata) === null || _b === void 0 ? void 0 : _b.call(_a)))), this.provider.getSearchEventRequestPayload()), { queryPipeline: this.provider.getPipeline(), actionCause: event });
    });
  }
  getBaseEventRequest(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      const customData = Object.assign(Object.assign({}, this.provider.getBaseMetadata()), metadata);
      return Object.assign(Object.assign(Object.assign({}, this.getOrigins()), this.getSplitTestRun()), { customData, language: this.provider.getLanguage(), facetState: this.provider.getFacetState ? this.provider.getFacetState() : [], anonymous: this.provider.getIsAnonymous(), clientId: yield this.getClientId() });
    });
  }
  getOrigins() {
    var _a, _b;
    return {
      originContext: (_b = (_a = this.provider).getOriginContext) === null || _b === void 0 ? void 0 : _b.call(_a),
      originLevel1: this.provider.getOriginLevel1(),
      originLevel2: this.provider.getOriginLevel2(),
      originLevel3: this.provider.getOriginLevel3()
    };
  }
  getClientId() {
    return this.coveoAnalyticsClient instanceof CoveoAnalyticsClient ? this.coveoAnalyticsClient.getCurrentVisitorId() : void 0;
  }
  getSplitTestRun() {
    const splitTestRunName = this.provider.getSplitTestRunName ? this.provider.getSplitTestRunName() : "";
    const splitTestRunVersion = this.provider.getSplitTestRunVersion ? this.provider.getSplitTestRunVersion() : "";
    return Object.assign(Object.assign({}, splitTestRunName && { splitTestRunName }), splitTestRunVersion && { splitTestRunVersion });
  }
  makeLikeGeneratedAnswer(metadata) {
    return this.makeCustomEvent(SearchPageEvents.likeGeneratedAnswer, metadata);
  }
  logLikeGeneratedAnswer(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeLikeGeneratedAnswer(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeDislikeGeneratedAnswer(metadata) {
    return this.makeCustomEvent(SearchPageEvents.dislikeGeneratedAnswer, metadata);
  }
  logDislikeGeneratedAnswer(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeDislikeGeneratedAnswer(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeOpenGeneratedAnswerSource(metadata) {
    return this.makeCustomEvent(SearchPageEvents.openGeneratedAnswerSource, metadata);
  }
  logOpenGeneratedAnswerSource(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeOpenGeneratedAnswerSource(metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeGeneratedAnswerSourceHover(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerSourceHover, metadata);
  }
  logGeneratedAnswerSourceHover(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerSourceHover(metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeGeneratedAnswerCopyToClipboard(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerCopyToClipboard, metadata);
  }
  logGeneratedAnswerCopyToClipboard(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerCopyToClipboard(metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeGeneratedAnswerHideAnswers(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerHideAnswers, metadata);
  }
  logGeneratedAnswerHideAnswers(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerHideAnswers(metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeGeneratedAnswerShowAnswers(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerShowAnswers, metadata);
  }
  logGeneratedAnswerShowAnswers(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerShowAnswers(metadata)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeGeneratedAnswerExpand(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerExpand, metadata);
  }
  logGeneratedAnswerExpand(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerExpand(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeGeneratedAnswerCollapse(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerCollapse, metadata);
  }
  logGeneratedAnswerCollapse(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerCollapse(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeGeneratedAnswerFeedbackSubmit(meta) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerFeedbackSubmit, meta);
  }
  logGeneratedAnswerFeedbackSubmit(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerFeedbackSubmit(meta)).log({
        searchUID: this.provider.getSearchUID()
      });
    });
  }
  makeRephraseGeneratedAnswer(meta) {
    return this.makeSearchEvent(SearchPageEvents.rephraseGeneratedAnswer, meta);
  }
  logRephraseGeneratedAnswer(meta) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRephraseGeneratedAnswer(meta)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeRetryGeneratedAnswer() {
    return this.makeSearchEvent(SearchPageEvents.retryGeneratedAnswer);
  }
  logRetryGeneratedAnswer() {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeRetryGeneratedAnswer()).log({ searchUID: this.provider.getSearchUID() });
    });
  }
  makeGeneratedAnswerStreamEnd(metadata) {
    return this.makeCustomEvent(SearchPageEvents.generatedAnswerStreamEnd, metadata);
  }
  logGeneratedAnswerStreamEnd(metadata) {
    return __awaiter(this, void 0, void 0, function* () {
      return (yield this.makeGeneratedAnswerStreamEnd(metadata)).log({ searchUID: this.provider.getSearchUID() });
    });
  }
};
var SVCPluginEventTypes = Object.assign({}, BasePluginEventTypes);
var allSVCEventTypes = Object.keys(SVCPluginEventTypes).map((key) => SVCPluginEventTypes[key]);
var SVCPlugin = class extends BasePlugin {
  constructor({ client, uuidGenerator = v4 }) {
    super({ client, uuidGenerator });
    this.ticket = {};
  }
  getApi(name) {
    const superCall = super.getApi(name);
    if (superCall !== null)
      return superCall;
    switch (name) {
      case "setTicket":
        return this.setTicket;
      default:
        return null;
    }
  }
  addHooks() {
    this.addHooksForEvent();
    this.addHooksForPageView();
    this.addHooksForSVCEvents();
  }
  setTicket(ticket) {
    this.ticket = ticket;
  }
  clearPluginData() {
    this.ticket = {};
  }
  addHooksForSVCEvents() {
    this.client.registerBeforeSendEventHook((eventType, ...[payload]) => {
      return allSVCEventTypes.indexOf(eventType) !== -1 ? this.addSVCDataToPayload(eventType, payload) : payload;
    });
    this.client.registerAfterSendEventHook((eventType, ...[payload]) => {
      if (allSVCEventTypes.indexOf(eventType) !== -1) {
        this.updateLocationInformation(eventType, payload);
      }
      return payload;
    });
  }
  addHooksForPageView() {
    this.client.addEventTypeMapping(SVCPluginEventTypes.pageview, {
      newEventType: EventType.collect,
      variableLengthArgumentsNames: ["page"],
      addVisitorIdParameter: true,
      usesMeasurementProtocol: true
    });
  }
  addHooksForEvent() {
    this.client.addEventTypeMapping(SVCPluginEventTypes.event, {
      newEventType: EventType.collect,
      variableLengthArgumentsNames: ["eventCategory", "eventAction", "eventLabel", "eventValue"],
      addVisitorIdParameter: true,
      usesMeasurementProtocol: true
    });
  }
  addSVCDataToPayload(eventType, payload) {
    var _a;
    const svcPayload = Object.assign(Object.assign(Object.assign(Object.assign({}, this.getLocationInformation(eventType, payload)), this.getDefaultContextInformation(eventType)), this.action ? { svcAction: this.action } : {}), Object.keys((_a = this.actionData) !== null && _a !== void 0 ? _a : {}).length > 0 ? { svcActionData: this.actionData } : {});
    const ticketPayload = this.getTicketPayload();
    this.clearData();
    return Object.assign(Object.assign(Object.assign({}, ticketPayload), svcPayload), payload);
  }
  getTicketPayload() {
    return convertTicketToMeasurementProtocol(this.ticket);
  }
};
SVCPlugin.Id = "svc";
var CaseAssistEvents;
(function(CaseAssistEvents2) {
  CaseAssistEvents2["click"] = "click";
  CaseAssistEvents2["flowStart"] = "flowStart";
})(CaseAssistEvents || (CaseAssistEvents = {}));
var CaseAssistActions;
(function(CaseAssistActions2) {
  CaseAssistActions2["enterInterface"] = "ticket_create_start";
  CaseAssistActions2["fieldUpdate"] = "ticket_field_update";
  CaseAssistActions2["fieldSuggestionClick"] = "ticket_classification_click";
  CaseAssistActions2["suggestionClick"] = "suggestion_click";
  CaseAssistActions2["suggestionRate"] = "suggestion_rate";
  CaseAssistActions2["nextCaseStep"] = "ticket_next_stage";
  CaseAssistActions2["caseCancelled"] = "ticket_cancel";
  CaseAssistActions2["caseSolved"] = "ticket_cancel";
  CaseAssistActions2["caseCreated"] = "ticket_create";
})(CaseAssistActions || (CaseAssistActions = {}));
var CaseCancelledReasons;
(function(CaseCancelledReasons2) {
  CaseCancelledReasons2["quit"] = "Quit";
  CaseCancelledReasons2["solved"] = "Solved";
})(CaseCancelledReasons || (CaseCancelledReasons = {}));
var CaseAssistClient = class {
  constructor(options, provider) {
    var _a;
    this.options = options;
    this.provider = provider;
    const analyticsEnabled = ((_a = options.enableAnalytics) !== null && _a !== void 0 ? _a : true) && !doNotTrack2();
    this.coveoAnalyticsClient = analyticsEnabled ? new CoveoAnalyticsClient(options) : new NoopAnalytics();
    this.svc = new SVCPlugin({ client: this.coveoAnalyticsClient });
  }
  disable() {
    this.coveoAnalyticsClient = new NoopAnalytics();
    this.svc = new SVCPlugin({ client: this.coveoAnalyticsClient });
  }
  enable() {
    this.coveoAnalyticsClient = new CoveoAnalyticsClient(this.options);
    this.svc = new SVCPlugin({ client: this.coveoAnalyticsClient });
  }
  logEnterInterface(meta) {
    this.svc.setAction(CaseAssistActions.enterInterface);
    this.svc.setTicket(meta.ticket);
    return this.sendFlowStartEvent();
  }
  logUpdateCaseField(meta) {
    this.svc.setAction(CaseAssistActions.fieldUpdate, {
      fieldName: meta.fieldName
    });
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logSelectFieldSuggestion(meta) {
    this.svc.setAction(CaseAssistActions.fieldSuggestionClick, meta.suggestion);
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logSelectDocumentSuggestion(meta) {
    this.svc.setAction(CaseAssistActions.suggestionClick, meta.suggestion);
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logRateDocumentSuggestion(meta) {
    this.svc.setAction(CaseAssistActions.suggestionRate, Object.assign({ rate: meta.rating }, meta.suggestion));
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logMoveToNextCaseStep(meta) {
    this.svc.setAction(CaseAssistActions.nextCaseStep, {
      stage: meta === null || meta === void 0 ? void 0 : meta.stage
    });
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logCaseCancelled(meta) {
    this.svc.setAction(CaseAssistActions.caseCancelled, {
      reason: CaseCancelledReasons.quit
    });
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logCaseSolved(meta) {
    this.svc.setAction(CaseAssistActions.caseSolved, {
      reason: CaseCancelledReasons.solved
    });
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  logCaseCreated(meta) {
    this.svc.setAction(CaseAssistActions.caseCreated);
    this.svc.setTicket(meta.ticket);
    return this.sendClickEvent();
  }
  sendFlowStartEvent() {
    return this.coveoAnalyticsClient.sendEvent("event", "svc", CaseAssistEvents.flowStart, this.provider ? {
      searchHub: this.provider.getOriginLevel1()
    } : null);
  }
  sendClickEvent() {
    return this.coveoAnalyticsClient.sendEvent("event", "svc", CaseAssistEvents.click, this.provider ? {
      searchHub: this.provider.getOriginLevel1()
    } : null);
  }
};

// src/api/analytics/coveo-analytics-utils.ts
var getVisitorID = (options) => new CoveoAnalyticsClient(options).getCurrentVisitorId();
var historyStore = new history.HistoryStore();
var wrapPreprocessRequest = (logger, preprocessRequest) => {
  return typeof preprocessRequest === "function" ? (...args) => {
    const untaintedOutput = clone(args[0]);
    try {
      return preprocessRequest.apply(preprocessRequest, args);
    } catch (e) {
      logger.error(
        e,
        "Error in analytics preprocessRequest. Returning original request."
      );
      return untaintedOutput;
    }
  } : void 0;
};
var wrapAnalyticsClientSendEventHook = (logger, hook) => {
  return (...args) => {
    const untaintedOutput = clone(args[1]);
    try {
      return hook.apply(hook, args);
    } catch (e) {
      logger.error(
        e,
        "Error in analytics hook. Returning original request."
      );
      return untaintedOutput;
    }
  };
};

// src/api/search/search/product-recommendation.ts
var ProductRecommendationDefaultFields = [
  "uri",
  "urihash",
  "documentUri",
  "documentUriHash",
  "permanentid",
  "ec_name",
  "ec_brand",
  "ec_category",
  "ec_item_group_id",
  "ec_price",
  "ec_promo_price",
  "ec_shortdesc",
  "ec_thumbnails",
  "ec_images",
  "ec_in_stock",
  "ec_rating",
  "childResults",
  "totalNumberOfChildResults"
];

// src/features/product-recommendations/product-recommendations-state.ts
var getProductRecommendationsInitialState = () => ({
  id: "",
  skus: [],
  maxNumberOfRecommendations: 5,
  filter: {
    brand: "",
    category: ""
  },
  additionalFields: [],
  recommendations: [],
  error: null,
  isLoading: false,
  searchUid: "",
  duration: 0
});

// src/features/search-hub/search-hub-state.ts
var getSearchHubInitialState = () => "default";

// src/api/analytics/base-analytics.ts
var getLanguage = (state) => {
  const langKey = state.configuration.search.locale.split("-")[0];
  if (!langKey || langKey.length !== 2) {
    return "en";
  }
  return langKey;
};
var BaseAnalyticsProvider = class {
  constructor(getState) {
    this.getState = getState;
    this.state = getState();
  }
  getLanguage() {
    return getLanguage(this.state);
  }
  getBaseMetadata() {
    const { context, configuration: configuration2 } = this.state;
    const contextValues = context?.contextValues || {};
    const formattedObject = {};
    for (const [key, value] of Object.entries(contextValues)) {
      const formattedKey = `context_${key}`;
      formattedObject[formattedKey] = value;
    }
    if (configuration2.analytics.analyticsMode === "legacy") {
      formattedObject["coveoHeadlessVersion"] = VERSION;
    }
    return formattedObject;
  }
  getOriginContext() {
    return this.state.configuration.analytics.originContext;
  }
  getOriginLevel1() {
    return this.state.searchHub || getSearchHubInitialState();
  }
  getOriginLevel2() {
    return this.state.configuration.analytics.originLevel2;
  }
  getOriginLevel3() {
    return this.state.configuration.analytics.originLevel3;
  }
  getIsAnonymous() {
    return this.state.configuration.analytics.anonymous;
  }
};

// src/api/analytics/product-recommendations-analytics.ts
var ProductRecommendationAnalyticsProvider = class extends BaseAnalyticsProvider {
  constructor() {
    super(...arguments);
    this.initialState = getProductRecommendationsInitialState();
  }
  getPipeline() {
    return "";
  }
  getSearchEventRequestPayload() {
    return {
      queryText: "",
      responseTime: this.responseTime,
      results: this.mapResultsToAnalyticsDocument(),
      numberOfResults: this.numberOfResults
    };
  }
  getSearchUID() {
    const newState = this.getState();
    return newState.productRecommendations?.searchUid || this.initialState.searchUid;
  }
  mapResultsToAnalyticsDocument() {
    return this.state.productRecommendations?.recommendations.map((r2) => ({
      documentUri: r2.documentUri,
      documentUriHash: r2.documentUriHash,
      permanentid: r2.permanentid
    }));
  }
  get responseTime() {
    return this.state.productRecommendations?.duration || this.initialState.duration;
  }
  get numberOfResults() {
    return this.state.productRecommendations?.recommendations.length || this.initialState.recommendations.length;
  }
};

// ../../node_modules/@coveo/relay/lib/relay.js
function emit({ config, environment, event, listenerManager }) {
  const { url, token, mode } = config;
  const isEnabled = mode !== "disabled";
  if (isEnabled) {
    listenerManager.call(event);
    environment.send(url, token, event);
  }
}
var REGEX2 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate2(uuid) {
  return typeof uuid === "string" && REGEX2.test(uuid);
}
function createClientIdManager(environmentManager) {
  const key = "visitorId";
  return {
    getClientId: () => {
      const environment = environmentManager.get();
      const storage = environment.storage;
      const existingClientId = storage.getItem(key);
      const clientId = existingClientId && validate2(existingClientId) ? existingClientId : environment.generateUUID();
      storage.setItem(key, clientId);
      return clientId;
    },
    clear: () => {
      environmentManager.get().storage.removeItem(key);
    }
  };
}
var version = "0.7.7";
function getEventConfig(config) {
  const { trackingId } = config;
  return { trackingId };
}
function getSource(config) {
  return (config.source || []).concat([`relay@${version}`]);
}
function createMeta(type, config, environment, clientIdManager) {
  const { getReferrer: getReferrer2, getLocation, getUserAgent } = environment;
  const eventConfig = getEventConfig(config);
  const clientId = clientIdManager.getClientId();
  return Object.freeze({
    type,
    config: eventConfig,
    ts: Date.now(),
    source: getSource(config),
    clientId,
    userAgent: getUserAgent(),
    referrer: getReferrer2(),
    location: getLocation()
  });
}
function createRelayEvent(type, payload, config, environment, clientIdManager) {
  return {
    ...payload,
    meta: createMeta(type, config, environment, clientIdManager)
  };
}
var ANY_EVENT_TYPE = "*";
function createListenerManager() {
  const listeners = [];
  function getListenerIndex({ type, callback }) {
    return listeners.findIndex((listener2) => listener2.type === type && listener2.callback === callback);
  }
  function isMatchesType(listener2, type) {
    return listener2.type === "*" || type === listener2.type;
  }
  function add(listener2) {
    if (getListenerIndex(listener2) < 0) {
      listeners.push(listener2);
    }
    return () => remove(listener2.type, listener2.callback);
  }
  function call(event) {
    listeners.forEach((listener2) => {
      if (isMatchesType(listener2, event.meta.type)) {
        try {
          listener2.callback(event);
        } catch (e) {
          console.error(e);
        }
      }
    });
  }
  function removeMultiple(type) {
    if (type === ANY_EVENT_TYPE) {
      listeners.length = 0;
    } else {
      for (let i = listeners.length - 1; i >= 0; i--) {
        if (listeners[i].type === type) {
          listeners.splice(i, 1);
        }
      }
    }
  }
  function removeOne(listener2) {
    const index = getListenerIndex(listener2);
    if (index >= 0) {
      listeners.splice(index, 1);
    }
  }
  function remove(type, callback) {
    callback ? removeOne({ type, callback }) : removeMultiple(type);
  }
  return {
    add,
    call,
    remove
  };
}
function pick({ url, token, trackingId, ...rest }) {
  return Object.freeze({
    url,
    token,
    trackingId,
    ...!!rest.mode && { mode: rest.mode },
    ...!!rest.source && { source: rest.source }
  });
}
function createConfigManager(initialConfig) {
  let _config = pick(initialConfig);
  return {
    get: () => _config,
    update: (updatedConfig) => {
      _config = pick({ ..._config, ...updatedConfig });
    }
  };
}
function createExplorerMessenger() {
  const isBrowser3 = typeof window !== "undefined";
  return {
    sendMessage(message) {
      isBrowser3 && window.postMessage(message, "*");
    }
  };
}
var cookieManager = createCookieManager();
function createCookieManager() {
  const prefix = "coveo_";
  const getDomain = (host) => {
    const parts = host.split(".").slice(-2);
    return parts.length == 2 ? parts.join(".") : "";
  };
  return {
    getItem(key) {
      const cookiePrefix = `${prefix}${key}=`;
      const cookieArray = document.cookie.split(";");
      for (const cookie of cookieArray) {
        const prettifyCookie = cookie.replace(/^\s+/, "");
        if (prettifyCookie.lastIndexOf(cookiePrefix, 0) === 0) {
          return prettifyCookie.substring(cookiePrefix.length, prettifyCookie.length);
        }
      }
      return null;
    },
    setItem(key, data, expire) {
      const domain = getDomain(window.location.hostname);
      const expireSection = `;expires=${new Date(( new Date()).getTime() + expire).toUTCString()}`;
      const domainSection = domain ? `;domain=${domain}` : "";
      document.cookie = `${prefix}${key}=${data}${expireSection}${domainSection};path=/;SameSite=Lax`;
    },
    removeItem(key) {
      this.setItem(key, "", -1);
    }
  };
}
function createBrowserStorage() {
  return {
    getItem(key) {
      return cookieManager.getItem(key) || localStorage.getItem(key);
    },
    removeItem(key) {
      cookieManager.removeItem(key);
      localStorage.removeItem(key);
    },
    setItem(key, data) {
      const oneYear = 31556952e3;
      localStorage.setItem(key, data);
      cookieManager.setItem(key, data, oneYear);
    }
  };
}
function getReferrer() {
  const referrer = document.referrer;
  return referrer === "" ? null : referrer;
}
function buildBrowserEnvironment() {
  return {
    runtime: "browser",
    send: (url, token, event) => {
      const response = navigator.sendBeacon(`${url}?access_token=${token}`, new Blob([JSON.stringify([event])], {
        type: "application/json"
      }));
      const messenger = createExplorerMessenger();
      messenger.sendMessage({ kind: "EVENT_PROTOCOL", event, url, token });
      if (!response) {
        throw new Error(`Failed to send the event(s) because the payload size exceeded the maximum allowed size (32 KB). Please contact support if the problem persists.`);
      }
    },
    getReferrer: () => getReferrer(),
    getLocation: () => window.location.href,
    getUserAgent: () => navigator.userAgent,
    generateUUID: () => crypto.randomUUID(),
    storage: createBrowserStorage()
  };
}
function createNullStorage() {
  return {
    getItem() {
      return null;
    },
    removeItem() {
      return;
    },
    setItem() {
      return;
    }
  };
}
function buildNullEnvironment() {
  return {
    runtime: "null",
    send: () => void 0,
    getReferrer: () => null,
    getLocation: () => null,
    getUserAgent: () => null,
    generateUUID: () => "",
    storage: createNullStorage()
  };
}
function buildEnvironment(configManager) {
  const active = configManager.get().mode !== "disabled";
  if (active && isBrowser()) {
    return buildBrowserEnvironment();
  }
  return buildNullEnvironment();
}
function isBrowser() {
  try {
    return typeof window === "object";
  } catch (e) {
    return false;
  }
}
function createEnvironmentManager(configManager) {
  return {
    get: () => Object.freeze(buildEnvironment(configManager))
  };
}
function createRelay(initialConfig) {
  const configManager = createConfigManager(initialConfig);
  const listenerManager = createListenerManager();
  const environmentManager = createEnvironmentManager(configManager);
  const clientIdManager = createClientIdManager(environmentManager);
  return {
    emit: (type, payload) => {
      const config = configManager.get();
      const environment = environmentManager.get();
      const event = createRelayEvent(type, payload, config, environment, clientIdManager);
      return emit({
        config,
        environment,
        event,
        listenerManager
      });
    },
    getMeta: (type) => createMeta(type, configManager.get(), environmentManager.get(), clientIdManager),
    on: (type, callback) => listenerManager.add({ type, callback }),
    off: (type, callback) => listenerManager.remove(type, callback),
    updateConfig: (config) => configManager.update(config),
    version,
    clearStorage: () => {
      clientIdManager.clear();
    }
  };
}

// src/api/analytics/analytics-selectors.ts
var getAnalyticsSource = createSelector(
  (state) => state.source,
  (source) => [`@coveo/headless@${VERSION}`].concat(
    Object.entries(source).map(
      ([frameworkName, frameworkVersion]) => `${frameworkName}@${frameworkVersion}`
    )
  )
);

// src/api/analytics/analytics-relay-client.ts
var getRelayInstanceFromState = createSelector(
  (state) => state.configuration.accessToken,
  (state) => state.configuration.analytics,
  (state) => getAnalyticsSource(state.configuration.analytics),
  (token, { trackingId, nextApiBaseUrl, enabled }, source) => createRelay({
    mode: enabled ? "emit" : "disabled",
    url: nextApiBaseUrl,
    token,
    trackingId,
    source
  })
);

// src/api/analytics/case-assist-analytics.ts
var CaseAssistAnalyticsProvider = class {
  constructor(getState) {
    this.state = getState();
  }
  getSearchUID() {
    return null;
  }
  getOriginLevel1() {
    return this.state.searchHub || getSearchHubInitialState();
  }
};
var configureCaseAssistAnalytics = ({
  logger,
  getState,
  analyticsClientMiddleware = (_, p) => p,
  preprocessRequest,
  provider = new CaseAssistAnalyticsProvider(getState)
}) => {
  const state = getState();
  const token = state.configuration.accessToken;
  const endpoint = state.configuration.analytics.apiBaseUrl;
  const runtimeEnvironment = state.configuration.analytics.runtimeEnvironment;
  const enableAnalytics2 = state.configuration.analytics.enabled;
  const client = new CaseAssistClient(
    {
      enableAnalytics: enableAnalytics2,
      token,
      endpoint,
      runtimeEnvironment,
      preprocessRequest: wrapPreprocessRequest(logger, preprocessRequest),
      beforeSendHooks: [
        wrapAnalyticsClientSendEventHook(logger, analyticsClientMiddleware),
        (type, payload) => {
          logger.info(
            {
              ...payload,
              type,
              endpoint,
              token
            },
            "Analytics request"
          );
          return payload;
        }
      ]
    },
    provider
  );
  if (!enableAnalytics2) {
    client.disable();
  }
  return client;
};

// src/features/product-listing/product-listing-state.ts
var getProductListingInitialState = () => ({
  url: "",
  clientId: "",
  additionalFields: [],
  advancedParameters: {
    debug: false
  },
  products: [],
  facets: {
    results: []
  },
  error: null,
  isLoading: false,
  responseId: ""
});

// src/api/analytics/commerce-analytics.ts
var CommerceAnalyticsProvider = class extends BaseAnalyticsProvider {
  constructor() {
    super(...arguments);
    this.initialState = getProductListingInitialState();
  }
  getPipeline() {
    return "";
  }
  getSearchEventRequestPayload() {
    return {
      queryText: "",
      responseTime: 0,
      results: this.mapResultsToAnalyticsDocument(),
      numberOfResults: this.numberOfResults
    };
  }
  getSearchUID() {
    const newState = this.getState();
    return newState.productListing?.responseId || this.initialState.responseId;
  }
  mapResultsToAnalyticsDocument() {
    return this.state.productListing?.products.map((p) => ({
      documentUri: p.clickUri,
      documentUriHash: p.permanentid,
      permanentid: p.permanentid
    }));
  }
  get numberOfResults() {
    return this.state.productListing.products.length;
  }
};
var configureCommerceAnalytics = ({
  logger,
  getState,
  analyticsClientMiddleware = (_, p) => p,
  preprocessRequest,
  provider = new CommerceAnalyticsProvider(getState)
}) => {
  const state = getState();
  const token = state.configuration.accessToken;
  const endpoint = state.configuration.analytics.apiBaseUrl;
  const runtimeEnvironment = state.configuration.analytics.runtimeEnvironment;
  const enabled = state.configuration.analytics.enabled;
  const client = new CoveoSearchPageClient(
    {
      token,
      endpoint,
      runtimeEnvironment,
      preprocessRequest: wrapPreprocessRequest(logger, preprocessRequest),
      beforeSendHooks: [
        wrapAnalyticsClientSendEventHook(logger, analyticsClientMiddleware),
        (type, payload) => {
          logger.info(
            {
              ...payload,
              type,
              endpoint,
              token
            },
            "Analytics request"
          );
          return payload;
        }
      ]
    },
    provider
  );
  if (!enabled) {
    client.disable();
  }
  return client;
};

// src/features/facets/automatic-facet-set/automatic-facet-set-constants.ts
var DESIRED_COUNT_DEFAULT = 5;
var NUMBER_OF_VALUE_DEFAULT = 8;

// src/features/facets/automatic-facet-set/automatic-facet-set-state.ts
function getAutomaticFacetSetInitialState() {
  return {
    desiredCount: DESIRED_COUNT_DEFAULT,
    numberOfValues: NUMBER_OF_VALUE_DEFAULT,
    set: {}
  };
}

// src/features/facets/category-facet-set/category-facet-utils.ts
function findActiveValueAncestry(valuesAsTree) {
  const { activeValue, ancestryMap } = getActiveValueAndAncestryFromValueTree(valuesAsTree);
  return activeValue ? getActiveValueAncestry(activeValue, ancestryMap) : [];
}
function getActiveValueAndAncestryFromValueTree(valuesAsTrees) {
  const valueToVisit = [...valuesAsTrees];
  const ancestryMap = /* @__PURE__ */ new Map();
  while (valueToVisit.length > 0) {
    const currentValue = valueToVisit.shift();
    if (currentValue.state === "selected") {
      return { activeValue: currentValue, ancestryMap };
    }
    if (ancestryMap) {
      for (const childValue of currentValue.children) {
        ancestryMap.set(childValue, currentValue);
      }
    }
    valueToVisit.unshift(...currentValue.children);
  }
  return {};
}
function getActiveValueAncestry(activeValue, valueToParentMap) {
  const activeValueAncestry = [];
  if (!activeValue) {
    return [];
  }
  let lastParent = activeValue;
  do {
    activeValueAncestry.unshift(lastParent);
    lastParent = valueToParentMap.get(lastParent);
  } while (lastParent);
  return activeValueAncestry;
}

// src/features/facets/category-facet-set/category-facet-set-selectors.ts
var categoryFacetRequestSelector = (state, id) => {
  return state.categoryFacetSet[id]?.request;
};
var categoryFacetRequestSelectedValuesSelector = (state, facetId) => {
  const facetRequest = categoryFacetRequestSelector(state, facetId);
  return findActiveValueAncestry(facetRequest?.currentValues ?? []);
};

// src/features/facets/category-facet-set/category-facet-set-state.ts
function getCategoryFacetSetInitialState() {
  return {};
}

// src/features/facets/range-facets/date-facet-set/date-facet-set-state.ts
function getDateFacetSetInitialState() {
  return {};
}

// src/features/facets/range-facets/numeric-facet-set/numeric-facet-set-state.ts
function getNumericFacetSetInitialState() {
  return {};
}

// src/features/facets/facet-set/facet-set-state.ts
function getFacetSetInitialState() {
  return {};
}

// src/features/facets/facet-set/facet-set-analytics-actions-utils.ts
function getStateNeededForFacetMetadata(s) {
  return {
    facetSet: s.facetSet ?? getFacetSetInitialState(),
    categoryFacetSet: s.categoryFacetSet ?? getCategoryFacetSetInitialState(),
    dateFacetSet: s.dateFacetSet ?? getDateFacetSetInitialState(),
    numericFacetSet: s.numericFacetSet ?? getNumericFacetSetInitialState(),
    automaticFacetSet: s.automaticFacetSet ?? getAutomaticFacetSetInitialState()
  };
}
var buildFacetStateMetadata = (state) => {
  const facetState = [];
  getFacetRequests(state).forEach((facetRequest, facetIndex) => {
    const facetType = getFacetType(state, facetRequest.facetId);
    const facetRequestAnalytics = mapFacetRequestToAnalytics(
      facetRequest,
      facetIndex + 1
    );
    if (isCategoryFacetRequest(facetRequest)) {
      const hasSelectedValue = !!categoryFacetRequestSelectedValuesSelector(
        state,
        facetRequest.facetId
      ).length;
      if (!hasSelectedValue) {
        return;
      }
      facetState.push({
        ...facetRequestAnalytics,
        ...mapCategoryFacetValueToAnalytics(state, facetRequest.facetId),
        facetType,
        state: "selected"
      });
      return;
    }
    facetRequest.currentValues.forEach((facetValue, facetValueIndex) => {
      if (facetValue.state === "idle") {
        return;
      }
      const facetValueAnalytics = mapFacetValueToAnalytics(
        facetValue,
        facetValueIndex + 1,
        facetType
      );
      const facetDisplayValueAnalytics = isSpecificFacetRequest(facetRequest) ? mapFacetDisplayValueToAnalytics(facetValue) : mapRangeDisplayFacetValueToAnalytics(
        facetValue
      );
      facetState.push({
        ...facetRequestAnalytics,
        ...facetValueAnalytics,
        ...facetDisplayValueAnalytics
      });
    });
  });
  getAutomaticFacets(state).forEach((facet, facetIndex) => {
    const facetAnalytics = mapAutomaticFacetToAnalytics(facet, facetIndex + 1);
    facet.values.forEach((facetValue, facetValueIndex) => {
      if (facetValue.state === "idle") {
        return;
      }
      const facetValueAnalytics = mapFacetValueToAnalytics(
        facetValue,
        facetValueIndex + 1,
        "specific"
      );
      const facetDisplayValueAnalytics = mapFacetDisplayValueToAnalytics(facetValue);
      facetState.push({
        ...facetAnalytics,
        ...facetValueAnalytics,
        ...facetDisplayValueAnalytics
      });
    });
  });
  return facetState;
};
var isSpecificFacetRequest = (request) => request.type === "specific";
var isCategoryFacetRequest = (request) => request.type === "hierarchical";
var getFacetRequests = (state) => {
  return [
    ...Object.values(state.facetSet),
    ...Object.values(state.categoryFacetSet),
    ...Object.values(state.dateFacetSet),
    ...Object.values(state.numericFacetSet)
  ].map((facet) => facet.request);
};
var getAutomaticFacets = (state) => {
  return [...Object.values(state.automaticFacetSet.set)].map(
    (facet) => facet.response
  );
};
var mapFacetValueToAnalytics = (facetValue, valuePosition, facetType) => {
  return {
    state: facetValue.state,
    valuePosition,
    facetType
  };
};
var mapRangeDisplayFacetValueToAnalytics = (facetValue) => {
  return {
    displayValue: `${facetValue.start}..${facetValue.end}`,
    value: `${facetValue.start}..${facetValue.end}`,
    start: facetValue.start,
    end: facetValue.end,
    endInclusive: facetValue.endInclusive
  };
};
var mapFacetDisplayValueToAnalytics = (facetValue) => {
  return {
    displayValue: facetValue.value,
    value: facetValue.value
  };
};
var getCategoryFacetSelectedValue = (state, facetId) => {
  const selectedCategoryFacetValues = categoryFacetRequestSelectedValuesSelector(state, facetId);
  return selectedCategoryFacetValues.map((selectedCategoryFacetValue) => selectedCategoryFacetValue.value).join(";");
};
var mapCategoryFacetValueToAnalytics = (state, facetId) => {
  const valuePosition = 1;
  const value = getCategoryFacetSelectedValue(state, facetId);
  return {
    value,
    valuePosition,
    displayValue: value
  };
};
var mapAutomaticFacetToAnalytics = (facet, facetPosition) => {
  return {
    title: getFacetTitle(facet.field, facet.field),
    field: facet.field,
    id: facet.field,
    facetPosition
  };
};
var mapFacetRequestToAnalytics = (request, facetPosition) => {
  return {
    title: getFacetTitle(request.field, request.facetId),
    field: request.field,
    id: request.facetId,
    facetPosition
  };
};
var getFacetTitle = (field, facetId) => {
  return `${field}_${facetId}`;
};
var getFacetRequest = (state, facetId) => {
  return state.facetSet[facetId]?.request || state.categoryFacetSet[facetId]?.request || state.dateFacetSet[facetId]?.request || state.numericFacetSet[facetId]?.request || state.automaticFacetSet.set[facetId]?.response;
};
var getFacetType = (state, facetId) => {
  const facet = getFacetRequest(state, facetId);
  return facet ? facet.type : "specific";
};

// src/features/query/query-state.ts
var getQueryInitialState = () => ({
  q: "",
  enableQuerySyntax: false
});

// src/api/analytics/product-listing-analytics.ts
var ProductListingAnalyticsProvider = class extends BaseAnalyticsProvider {
  constructor() {
    super(...arguments);
    this.initialState = getProductListingInitialState();
  }
  getPipeline() {
    return "";
  }
  getSearchEventRequestPayload() {
    return {
      queryText: "",
      responseTime: 0,
      results: this.mapResultsToAnalyticsDocument(),
      numberOfResults: this.numberOfResults
    };
  }
  getSearchUID() {
    const newState = this.getState();
    return newState.productListing?.responseId || this.initialState.responseId;
  }
  mapResultsToAnalyticsDocument() {
    return this.state.productListing?.products.map((p) => ({
      documentUri: p.documentUri,
      documentUriHash: p.documentUriHash,
      permanentid: p.permanentid
    }));
  }
  get numberOfResults() {
    return this.state.productListing.products.length;
  }
};
var configureProductListingAnalytics = ({
  logger,
  getState,
  analyticsClientMiddleware = (_, p) => p,
  preprocessRequest,
  provider = new ProductListingAnalyticsProvider(getState)
}) => {
  const state = getState();
  const token = state.configuration.accessToken;
  const endpoint = state.configuration.analytics.apiBaseUrl;
  const runtimeEnvironment = state.configuration.analytics.runtimeEnvironment;
  const enabled = state.configuration.analytics.enabled;
  const client = new CoveoSearchPageClient(
    {
      token,
      endpoint,
      runtimeEnvironment,
      preprocessRequest: wrapPreprocessRequest(logger, preprocessRequest),
      beforeSendHooks: [
        wrapAnalyticsClientSendEventHook(logger, analyticsClientMiddleware),
        (type, payload) => {
          logger.info(
            {
              ...payload,
              type,
              endpoint,
              token
            },
            "Analytics request"
          );
          return payload;
        }
      ]
    },
    provider
  );
  if (!enabled) {
    client.disable();
  }
  return client;
};

// src/features/sort-criteria/criteria.ts
var SortOrder = /* @__PURE__ */ ((SortOrder2) => {
  SortOrder2["Ascending"] = "ascending";
  SortOrder2["Descending"] = "descending";
  return SortOrder2;
})(SortOrder || {});
var SortBy = /* @__PURE__ */ ((SortBy2) => {
  SortBy2["Relevancy"] = "relevancy";
  SortBy2["QRE"] = "qre";
  SortBy2["Date"] = "date";
  SortBy2["Field"] = "field";
  SortBy2["NoSort"] = "nosort";
  return SortBy2;
})(SortBy || {});
var buildCriterionExpression = (criterion) => {
  if (isArray(criterion)) {
    return criterion.map((c) => buildCriterionExpression(c)).join(",");
  }
  switch (criterion.by) {
    case "relevancy" /* Relevancy */:
    case "qre" /* QRE */:
    case "nosort" /* NoSort */:
      return criterion.by;
    case "date" /* Date */:
      return `date ${criterion.order}`;
    case "field" /* Field */:
      return `@${criterion.field} ${criterion.order}`;
    default:
      return "";
  }
};
var buildRelevanceSortCriterion = () => ({
  by: "relevancy" /* Relevancy */
});
var criterionDefinition = new RecordValue({
  values: {
    by: new EnumValue({ enum: SortBy, required: true }),
    order: new EnumValue({ enum: SortOrder }),
    field: new StringValue()
  }
});

// src/features/sort-criteria/sort-criteria-state.ts
function getSortCriteriaInitialState() {
  return buildCriterionExpression(buildRelevanceSortCriterion());
}

// src/api/analytics/search-analytics.ts
var _SearchAnalyticsProvider = class _SearchAnalyticsProvider extends BaseAnalyticsProvider {
  constructor() {
    super(...arguments);
    this.getFacetRequest = (id) => {
      return this.state.facetSet?.[id]?.request || this.state.categoryFacetSet?.[id]?.request || this.state.dateFacetSet?.[id]?.request || this.state.numericFacetSet?.[id]?.request || this.state.automaticFacetSet?.set[id]?.response;
    };
  }
  getFacetState() {
    return buildFacetStateMetadata(
      getStateNeededForFacetMetadata(this.getState())
    );
  }
  getPipeline() {
    return this.state.pipeline || this.state.search?.response.pipeline || _SearchAnalyticsProvider.fallbackPipelineName;
  }
  getSearchEventRequestPayload() {
    return {
      queryText: this.queryText,
      responseTime: this.responseTime,
      results: this.resultURIs,
      numberOfResults: this.numberOfResults
    };
  }
  getSearchUID() {
    const newState = this.getState();
    return newState.search?.searchResponseId || newState.search?.response.searchUid || getSearchInitialState().response.searchUid;
  }
  getSplitTestRunName() {
    return this.state.search?.response.splitTestRun;
  }
  getSplitTestRunVersion() {
    const hasSplitTestRun = !!this.getSplitTestRunName();
    const effectivePipelineWithSplitTestRun = this.state.search?.response.pipeline || this.state.pipeline || _SearchAnalyticsProvider.fallbackPipelineName;
    return hasSplitTestRun ? effectivePipelineWithSplitTestRun : void 0;
  }
  getBaseMetadata() {
    const state = this.getState();
    const baseObject = super.getBaseMetadata();
    const generativeQuestionAnsweringId = state.search?.response?.extendedResults?.generativeQuestionAnsweringId;
    if (generativeQuestionAnsweringId) {
      baseObject["generativeQuestionAnsweringId"] = generativeQuestionAnsweringId;
    }
    return baseObject;
  }
  getFacetMetadata(facetId, facetValue) {
    const facetRequest = this.getFacetRequest(facetId);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId,
      facetField,
      facetValue,
      facetTitle: `${facetField}_${facetId}`
    };
  }
  getFacetClearAllMetadata(facetId) {
    const facetRequest = this.getFacetRequest(facetId);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId,
      facetField,
      facetTitle: `${facetField}_${facetId}`
    };
  }
  getFacetUpdateSortMetadata(facetId, criteria) {
    const facetRequest = this.getFacetRequest(facetId);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId,
      facetField,
      criteria,
      facetTitle: `${facetField}_${facetId}`
    };
  }
  getRangeBreadcrumbFacetMetadata(facetId, facetValue) {
    const facetRequest = this.getFacetRequest(facetId);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId,
      facetField,
      facetRangeEnd: facetValue.end,
      facetRangeEndInclusive: facetValue.endInclusive,
      facetRangeStart: facetValue.start,
      facetTitle: `${facetField}_${facetId}`
    };
  }
  getResultSortMetadata() {
    return {
      ...this.getBaseMetadata(),
      resultsSortBy: this.state.sortCriteria ?? getSortCriteriaInitialState()
    };
  }
  getStaticFilterToggleMetadata(staticFilterId, staticFilterValue) {
    return {
      ...this.getBaseMetadata(),
      staticFilterId,
      staticFilterValue
    };
  }
  getStaticFilterClearAllMetadata(staticFilterId) {
    return {
      ...this.getBaseMetadata(),
      staticFilterId
    };
  }
  getUndoTriggerQueryMetadata(undoneQuery) {
    return {
      ...this.getBaseMetadata(),
      undoneQuery
    };
  }
  getCategoryBreadcrumbFacetMetadata(categoryFacetId, categoryFacetPath) {
    const facetRequest = this.getFacetRequest(categoryFacetId);
    const categoryFacetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      categoryFacetId,
      categoryFacetField,
      categoryFacetPath,
      categoryFacetTitle: `${categoryFacetField}_${categoryFacetId}`
    };
  }
  getOmniboxAnalyticsMetadata(id, suggestion) {
    const querySuggest = this.state.querySuggest && this.state.querySuggest[id];
    const suggestions = querySuggest.completions.map(
      (completion) => completion.expression
    );
    const lastIndex = querySuggest.partialQueries.length - 1;
    const partialQuery = querySuggest.partialQueries[lastIndex] || "";
    const querySuggestResponseId = querySuggest.responseId;
    return {
      ...this.getBaseMetadata(),
      suggestionRanking: suggestions.indexOf(suggestion),
      partialQuery,
      partialQueries: querySuggest.partialQueries.length > 0 ? querySuggest.partialQueries : "",
      suggestions: suggestions.length > 0 ? suggestions : "",
      querySuggestResponseId
    };
  }
  getInterfaceChangeMetadata() {
    return {
      ...this.getBaseMetadata(),
      interfaceChangeTo: this.state.configuration.analytics.originLevel2
    };
  }
  getOmniboxFromLinkMetadata(metadata) {
    return {
      ...this.getBaseMetadata(),
      ...metadata
    };
  }
  getGeneratedAnswerMetadata() {
    const state = this.getState();
    const formattedObject = {};
    if (state.generatedAnswer?.isVisible !== void 0) {
      formattedObject["showGeneratedAnswer"] = state.generatedAnswer.isVisible;
    }
    return formattedObject;
  }
  get resultURIs() {
    return this.results?.map((r2) => ({
      documentUri: r2.uri,
      documentUriHash: r2.raw.urihash
    }));
  }
  get results() {
    return this.state.search?.response.results;
  }
  get queryText() {
    return this.state.query?.q || getQueryInitialState().q;
  }
  get responseTime() {
    return this.state.search?.duration || getSearchInitialState().duration;
  }
  get numberOfResults() {
    return this.state.search?.response.totalCountFiltered || getSearchInitialState().response.totalCountFiltered;
  }
};
_SearchAnalyticsProvider.fallbackPipelineName = "default";
var SearchAnalyticsProvider = _SearchAnalyticsProvider;
var configureLegacyAnalytics = ({
  logger,
  getState,
  analyticsClientMiddleware = (_, p) => p,
  preprocessRequest,
  provider = new SearchAnalyticsProvider(getState)
}) => {
  const state = getState();
  const token = state.configuration.accessToken;
  const endpoint = state.configuration.analytics.apiBaseUrl;
  const runtimeEnvironment = state.configuration.analytics.runtimeEnvironment;
  const enableAnalytics2 = state.configuration.analytics.enabled;
  const client = new CoveoSearchPageClient(
    {
      token,
      endpoint,
      runtimeEnvironment,
      preprocessRequest: wrapPreprocessRequest(logger, preprocessRequest),
      beforeSendHooks: [
        wrapAnalyticsClientSendEventHook(logger, analyticsClientMiddleware),
        (type, payload) => {
          logger.info(
            {
              ...payload,
              type,
              endpoint,
              token
            },
            "Analytics request"
          );
          return payload;
        }
      ]
    },
    provider
  );
  if (!enableAnalytics2) {
    client.disable();
  }
  return client;
};

// src/features/analytics/analytics-utils.ts
function makeInstantlyCallable(action) {
  return Object.assign(action, { instantlyCallable: true });
}
function makePreparableAnalyticsAction(prefix, buildEvent) {
  const createAnalyticsAction = (body) => makeInstantlyCallable(
    createAsyncThunk(prefix, body)
  );
  const rootAction = createAnalyticsAction(async (_, { getState, extra }) => {
    const { analyticsClientMiddleware, preprocessRequest, logger } = extra;
    return await (await buildEvent({
      getState,
      analyticsClientMiddleware,
      preprocessRequest,
      logger
    })).log({ state: getState(), extra });
  });
  const prepare = async ({
    getState,
    analyticsClientMiddleware,
    preprocessRequest,
    logger
  }) => {
    const { description, log } = await buildEvent({
      getState,
      analyticsClientMiddleware,
      preprocessRequest,
      logger
    });
    return {
      description,
      action: createAnalyticsAction(
        async (_, { getState: getNewState, extra: newExtra }) => {
          return await log({ state: getNewState(), extra: newExtra });
        }
      )
    };
  };
  Object.assign(rootAction, {
    prepare
  });
  return rootAction;
}
var makeAnalyticsActionFactory = (configurator, legacyGetBuilderConverter, providerClass) => {
  function makeAnalyticsAction2(...params) {
    const options = params.length === 1 ? {
      ...params[0],
      __legacy__getBuilder: legacyGetBuilderConverter(
        params[0].__legacy__getBuilder
      ),
      analyticsConfigurator: configurator,
      providerClass
    } : {
      prefix: params[0],
      __legacy__getBuilder: legacyGetBuilderConverter(params[1]),
      __legacy__provider: params[2],
      analyticsConfigurator: configurator,
      providerClass
    };
    return internalMakeAnalyticsAction(options);
  }
  return makeAnalyticsAction2;
};
var shouldSendLegacyEvent = (state) => state.configuration.analytics.analyticsMode === "legacy";
var shouldSendNextEvent = (state) => state.configuration.analytics.analyticsMode === "next";
var internalMakeAnalyticsAction = ({
  prefix,
  __legacy__getBuilder,
  __legacy__provider,
  analyticsPayloadBuilder,
  analyticsType,
  analyticsConfigurator,
  providerClass
}) => {
  __legacy__provider ?? (__legacy__provider = (getState) => new providerClass(getState));
  return makePreparableAnalyticsAction(
    prefix,
    async ({
      getState,
      analyticsClientMiddleware,
      preprocessRequest,
      logger
    }) => {
      const loggers = [];
      const analyticsAction = {
        log: async ({ state: state2 }) => {
          for (const log of loggers) {
            await log(state2);
          }
        }
      };
      const state = getState();
      const client = analyticsConfigurator({
        getState,
        logger,
        analyticsClientMiddleware,
        preprocessRequest,
        provider: __legacy__provider(getState)
      });
      const builder = await __legacy__getBuilder(client, getState());
      analyticsAction.description = builder?.description;
      loggers.push(async (state2) => {
        if (shouldSendLegacyEvent(state2)) {
          await logLegacyEvent(
            builder,
            __legacy__provider,
            state2,
            logger,
            client.coveoAnalyticsClient
          );
        }
      });
      const { emit: emit2 } = getRelayInstanceFromState(state);
      loggers.push(async (state2) => {
        if (shouldSendNextEvent(state2) && analyticsType && analyticsPayloadBuilder) {
          const payload = analyticsPayloadBuilder(state2);
          await logNextEvent(emit2, analyticsType, payload);
        }
      });
      return analyticsAction;
    }
  );
};
async function logLegacyEvent(builder, __legacy__provider, state, logger, client) {
  __legacy__provider(() => state);
  const response = await builder?.log({
    searchUID: __legacy__provider(() => state).getSearchUID()
  });
  logger.info({ client, response }, "Analytics response");
}
var fromLogToLegacyBuilderFactory = (actionCause) => {
  const fromLogToLegacyBuilder = (log) => {
    return (client, state) => Promise.resolve({
      description: { actionCause },
      log: async (_metadata) => {
        log(client, state);
      }
    });
  };
  return fromLogToLegacyBuilder;
};
var makeAnalyticsAction = makeAnalyticsActionFactory(configureLegacyAnalytics, (original) => original, SearchAnalyticsProvider);
var makeCaseAssistAnalyticsAction = makeAnalyticsActionFactory(
  configureCaseAssistAnalytics,
  fromLogToLegacyBuilderFactory("caseAssist"),
  CaseAssistAnalyticsProvider
);
var makeCommerceAnalyticsAction = makeAnalyticsActionFactory(
  configureCommerceAnalytics,
  (original) => original,
  CommerceAnalyticsProvider
);
var makeProductListingAnalyticsAction = makeAnalyticsActionFactory(
  configureProductListingAnalytics,
  (original) => original,
  ProductListingAnalyticsProvider
);
var rawPartialDefinition = {
  urihash: new StringValue(),
  sourcetype: new StringValue(),
  permanentid: new StringValue()
};
var resultPartialDefinition = {
  uniqueId: requiredNonEmptyString,
  raw: new RecordValue({ values: rawPartialDefinition }),
  title: requiredNonEmptyString,
  uri: requiredNonEmptyString,
  clickUri: requiredNonEmptyString,
  rankingModifier: new StringValue({ required: false, emptyAllowed: true })
};
async function logNextEvent(emitEvent, type, payload) {
  await emitEvent(type, payload);
  return;
}

// src/features/product-recommendations/product-recommendations-analytics.actions.ts
var logProductRecommendations = () => makeAnalyticsAction(
  "analytics/productRecommendations/load",
  (client) => client.makeRecommendationInterfaceLoad(),
  (getState) => new ProductRecommendationAnalyticsProvider(getState)
);
var partialRecommendationInformation = (result, state) => {
  const resultIndex = state.productRecommendations?.recommendations.findIndex(
    ({ permanentid }) => result.permanentid === permanentid
  ) || 0;
  return buildPartialDocumentInformation(result, resultIndex);
};
function buildPartialDocumentInformation(productRecommendation, resultIndex) {
  return {
    collectionName: "",
    documentAuthor: "",
    documentPosition: resultIndex + 1,
    documentTitle: productRecommendation.ec_name || "",
    documentUri: productRecommendation.documentUri,
    documentUriHash: productRecommendation.documentUriHash,
    documentUrl: productRecommendation.clickUri,
    rankingModifier: "",
    sourceName: "unknown",
    queryPipeline: ""
  };
}
var documentIdentifier = (productRecommendation) => {
  if (!productRecommendation.permanentid) {
    console.warn(
      "Missing field permanentid on productRecommendation. This might cause many issues with your Coveo deployment. See https://docs.coveo.com/en/1913 and https://docs.coveo.com/en/1640 for more information.",
      productRecommendation
    );
  }
  return {
    contentIDKey: "permanentid",
    contentIDValue: productRecommendation.permanentid || ""
  };
};
function mapProductRecommendationToResult(productRecommendation) {
  return {
    uniqueId: productRecommendation.permanentid,
    title: productRecommendation.ec_name || "",
    uri: productRecommendation.documentUri,
    clickUri: productRecommendation.clickUri
  };
}
function partialResultPayload(productRecommendation) {
  const result = mapProductRecommendationToResult(productRecommendation);
  return Object.assign(
    {},
    ...Object.keys(resultPartialDefinition).map((key) => ({
      [key]: result[key]
    }))
  );
}
var validateResultPayload = (productRecommendation) => new Schema(resultPartialDefinition).validate(
  partialResultPayload(productRecommendation)
);
var logProductRecommendationOpen = (productRecommendation) => makeAnalyticsAction(
  "analytics/productRecommendation/open",
  (client, state) => {
    validateResultPayload(productRecommendation);
    return client.makeRecommendationOpen(
      partialRecommendationInformation(productRecommendation, state),
      documentIdentifier(productRecommendation)
    );
  },
  (getState) => new ProductRecommendationAnalyticsProvider(getState)
);

// src/features/product-recommendations/product-recommendations-actions.ts
function isResultWithChildren(result) {
  return result && "childResults" in result && "totalNumberOfChildResults" in result;
}
var setProductRecommendationsRecommenderId = createAction(
  "productrecommendations/setId",
  (payload) => validatePayload(payload, {
    id: requiredNonEmptyString
  })
);
var setProductRecommendationsSkus = createAction(
  "productrecommendations/setSku",
  (payload) => validatePayload(payload, {
    skus: new ArrayValue({
      required: true,
      min: 1,
      each: nonEmptyString
    })
  })
);
var setProductRecommendationsBrandFilter = createAction(
  "productrecommendations/setBrand",
  (payload) => validatePayload(payload, {
    brand: new StringValue({ required: true, emptyAllowed: true })
  })
);
var setProductRecommendationsCategoryFilter = createAction(
  "productrecommendations/setCategory",
  (payload) => validatePayload(payload, {
    category: new StringValue({ required: true, emptyAllowed: true })
  })
);
var setProductRecommendationsAdditionalFields = createAction(
  "productrecommendations/setAdditionalFields",
  (payload) => validatePayload(payload, {
    additionalFields: new ArrayValue({
      required: true,
      each: nonEmptyString
    })
  })
);
var setProductRecommendationsMaxNumberOfRecommendations = createAction(
  "productrecommendations/setMaxNumberOfRecommendations",
  (payload) => validatePayload(payload, {
    number: new NumberValue({ required: true, max: 50, min: 1 })
  })
);
var getProductRecommendations = createAsyncThunk(
  "productRecommendations/get",
  async (_, { getState, rejectWithValue, extra: { apiClient } }) => {
    const state = getState();
    const startedAt = (/* @__PURE__ */ new Date()).getTime();
    const fetched = await apiClient.productRecommendations(
      await buildProductRecommendationsRequest(state)
    );
    const duration = (/* @__PURE__ */ new Date()).getTime() - startedAt;
    if (isErrorResponse(fetched)) {
      return rejectWithValue(fetched.error);
    }
    const additionalFields = state.productRecommendations.additionalFields || [];
    return {
      recommendations: fetched.success.results.map(
        (result) => mapResultToProductResult(result, { additionalFields })
      ),
      analyticsAction: logProductRecommendations(),
      searchUid: fetched.success.searchUid,
      duration
    };
  }
);
var mapResultToProductResult = (result, { additionalFields }) => {
  const ec_price = result.raw.ec_price;
  const ec_promo_price = result.raw.ec_promo_price;
  const ec_in_stock = result.raw.ec_in_stock;
  const recommendation = {
    documentUri: result.uri,
    documentUriHash: result.raw.urihash,
    permanentid: result.raw.permanentid,
    clickUri: result.clickUri,
    ec_name: result.raw.ec_name,
    ec_brand: result.raw.ec_brand,
    ec_category: result.raw.ec_category,
    ec_item_group_id: result.raw.ec_item_group_id,
    ec_price,
    ec_shortdesc: result.raw.ec_shortdesc,
    ec_thumbnails: result.raw.ec_thumbnails,
    ec_images: result.raw.ec_images,
    ec_promo_price: ec_promo_price === void 0 || ec_price !== void 0 && ec_promo_price >= ec_price ? void 0 : ec_promo_price,
    ec_in_stock: ec_in_stock === void 0 ? void 0 : ec_in_stock.toLowerCase() === "yes" || ec_in_stock.toLowerCase() === "true",
    ec_rating: result.raw.ec_rating,
    additionalFields: additionalFields.reduce(
      (all, field) => ({ ...all, [field]: result.raw[field] }),
      {}
    ),
    childResults: [],
    totalNumberOfChildResults: 0
  };
  if (isResultWithChildren(result)) {
    recommendation.childResults = result.childResults.map(
      (childResult) => mapResultToProductResult(childResult, { additionalFields })
    );
    recommendation.totalNumberOfChildResults = result.totalNumberOfChildResults;
  }
  return recommendation;
};
var buildProductRecommendationsRequest = async (s) => {
  return {
    accessToken: s.configuration.accessToken,
    organizationId: s.configuration.organizationId,
    url: s.configuration.search.apiBaseUrl,
    locale: s.configuration.search.locale,
    timezone: s.configuration.search.timezone,
    ...s.configuration.analytics.enabled && {
      visitorId: await getVisitorID(s.configuration.analytics)
    },
    recommendation: s.productRecommendations.id,
    numberOfResults: s.productRecommendations.maxNumberOfRecommendations,
    fieldsToInclude: [
      ...ProductRecommendationDefaultFields,
      ...s.productRecommendations.additionalFields || []
    ],
    mlParameters: {
      ...s.productRecommendations.skus && s.productRecommendations.skus.length > 0 && {
        itemIds: s.productRecommendations.skus
      },
      ...s.productRecommendations.filter.brand && {
        brandFilter: s.productRecommendations.filter.brand
      },
      ...s.productRecommendations.filter.category && {
        categoryFilter: s.productRecommendations.filter.category
      }
    },
    actionsHistory: s.configuration.analytics.enabled ? historyStore.getHistory() : [],
    ...s.context && {
      context: s.context.contextValues
    },
    ...s.dictionaryFieldContext && {
      dictionaryFieldContext: s.dictionaryFieldContext.contextValues
    },
    ...s.searchHub && {
      searchHub: s.searchHub
    }
  };
};

// src/features/product-recommendations/product-recommendations-slice.ts
var productRecommendationsReducer = createReducer(
  getProductRecommendationsInitialState(),
  (builder) => {
    builder.addCase(setProductRecommendationsRecommenderId, (state, action) => {
      state.id = action.payload.id;
    }).addCase(setProductRecommendationsSkus, (state, action) => {
      state.skus = action.payload.skus;
    }).addCase(setProductRecommendationsBrandFilter, (state, action) => {
      state.filter.brand = action.payload.brand;
    }).addCase(setProductRecommendationsCategoryFilter, (state, action) => {
      state.filter.category = action.payload.category;
    }).addCase(
      setProductRecommendationsMaxNumberOfRecommendations,
      (state, action) => {
        state.maxNumberOfRecommendations = action.payload.number;
      }
    ).addCase(setProductRecommendationsAdditionalFields, (state, action) => {
      state.additionalFields = action.payload.additionalFields;
    }).addCase(getProductRecommendations.rejected, (state, action) => {
      state.error = action.payload ? action.payload : null;
      state.isLoading = false;
    }).addCase(getProductRecommendations.fulfilled, (state, action) => {
      state.error = null;
      state.searchUid = action.payload.searchUid;
      state.recommendations = action.payload.recommendations;
      state.isLoading = false;
    }).addCase(getProductRecommendations.pending, (state) => {
      state.isLoading = true;
    });
  }
);

// src/features/search-hub/search-hub-actions.ts
var setSearchHub = createAction(
  "searchHub/set",
  (payload) => validatePayload(
    payload,
    new StringValue({ required: true, emptyAllowed: true })
  )
);

// src/features/history/history-actions.ts
var undo = createAction("history/undo");
var redo = createAction("history/redo");
var snapshot = createAction("history/snapshot");
var back = createAsyncThunk("history/back", async (_, { dispatch }) => {
  dispatch(undo());
  await dispatch(change());
});
var forward = createAsyncThunk(
  "history/forward",
  async (_, { dispatch }) => {
    dispatch(redo());
    await dispatch(change());
  }
);
var change = createAsyncThunk(
  "history/change",
  async (_, { getState }) => {
    const s = getState();
    return s.history.present;
  }
);

// src/features/search-hub/search-hub-slice.ts
var searchHubReducer = createReducer(
  getSearchHubInitialState(),
  (builder) => {
    builder.addCase(setSearchHub, (_, action) => action.payload).addCase(
      change.fulfilled,
      (state, action) => action.payload?.searchHub ?? state
    ).addCase(
      updateSearchConfiguration,
      (state, action) => action.payload.searchHub || state
    );
  }
);

// src/features/debug/version-slice.ts
var versionReducer = createReducer(VERSION, (builder) => builder);

// src/utils/runtime.ts
function isBrowser2() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

// src/app/analytics-middleware.ts
function isAnalyticsAction(action) {
  const analytics = action.payload?.analyticsAction;
  return isActionWithType(action) && !isNullOrUndefined(analytics);
}
function isActionWithType(action) {
  return "type" in action;
}
var analyticsMiddleware = (api) => (next) => (action) => {
  let analytics = void 0;
  if (isAnalyticsAction(action)) {
    analytics = action.payload.analyticsAction;
    delete action.payload.analyticsAction;
  }
  const ret = next(action);
  if (isActionWithType(action)) {
    if (action.type === "search/executeSearch/fullfilled" && analytics === void 0) {
      console.error("No analytics action associated with search:", action);
    }
    if (action.type === "recommendation/get/fullfilled" && analytics === void 0) {
      console.error(
        "No analytics action associated with recommendation:",
        action
      );
    }
    if (action.type === "productRecommendations/get/fullfilled" && analytics === void 0) {
      console.error(
        "No analytics action associated with product recommendation:",
        action
      );
    }
  }
  if (analytics !== void 0) {
    api.dispatch(analytics);
  }
  return ret;
};

// src/features/configuration/configuration-slice.ts
var import_pendragon = __toESM(require_magic_cookie_browser());

// src/features/search-parameters/search-parameter-schema.ts
var searchParametersDefinition = {
  q: new StringValue(),
  enableQuerySyntax: new BooleanValue(),
  aq: new StringValue(),
  cq: new StringValue(),
  firstResult: new NumberValue({ min: 0 }),
  numberOfResults: new NumberValue({ min: 0 }),
  sortCriteria: new StringValue(),
  f: new RecordValue(),
  fExcluded: new RecordValue(),
  cf: new RecordValue(),
  nf: new RecordValue(),
  df: new RecordValue(),
  debug: new BooleanValue(),
  sf: new RecordValue(),
  tab: new StringValue(),
  af: new RecordValue()
};

// src/features/search-parameters/search-parameter-actions.ts
var restoreSearchParameters = createAction(
  "searchParameters/restore",
  (payload) => validatePayload(payload, searchParametersDefinition)
);

// src/features/tab-set/tab-set-actions.ts
var registerTab = createAction(
  "tab/register",
  (payload) => {
    const schema = new RecordValue({
      values: {
        id: requiredNonEmptyString,
        expression: requiredEmptyAllowedString
      }
    });
    return validatePayload(payload, schema);
  }
);
var updateActiveTab = createAction(
  "tab/updateActiveTab",
  (id) => {
    return validatePayload(id, requiredNonEmptyString);
  }
);

// src/features/configuration/configuration-state.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_timezone = __toESM(require_timezone());
var import_utc = __toESM(require_utc());
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_timezone.default);
var searchAPIEndpoint = "/rest/search/v2";
var analyticsAPIEndpoint = "/rest/ua";
var getConfigurationInitialState = () => ({
  organizationId: "",
  accessToken: "",
  platformUrl: platformUrl(),
  search: {
    apiBaseUrl: `${platformUrl()}${searchAPIEndpoint}`,
    locale: "en-US",
    timezone: import_dayjs.default.tz.guess(),
    authenticationProviders: []
  },
  analytics: {
    enabled: true,
    apiBaseUrl: `${analyticsUrl()}${analyticsAPIEndpoint}`,
    nextApiBaseUrl: "",
    originContext: "Search",
    originLevel2: "default",
    originLevel3: "default",
    anonymous: false,
    deviceId: "",
    userDisplayName: "",
    documentLocation: "",
    trackingId: "",
    analyticsMode: "legacy",
    source: {}
  }
});

// src/features/configuration/configuration-slice.ts
function legacyAnalyticsUrlFromPlatformUrl(platformUrl2, organizationId) {
  const matchCoveoPlatformURL = isCoveoPlatformURL(platformUrl2);
  if (matchCoveoPlatformURL) {
    return platformUrl2.replace(/^(https:\/\/)platform/, "$1analytics") + analyticsAPIEndpoint;
  }
  const matchCoveoOrganizationEndpoints = matchCoveoOrganizationEndpointUrl(
    platformUrl2,
    organizationId
  );
  if (matchCoveoOrganizationEndpoints) {
    return getOrganizationEndpoints(
      organizationId,
      matchCoveoOrganizationEndpoints.environment
    ).analytics;
  }
  return platformUrl2;
}
var configurationReducer = createReducer(
  getConfigurationInitialState(),
  (builder) => builder.addCase(updateBasicConfiguration, (state, action) => {
    if (action.payload.accessToken) {
      state.accessToken = action.payload.accessToken;
    }
    if (action.payload.organizationId) {
      state.organizationId = action.payload.organizationId;
    }
    if (action.payload.platformUrl) {
      state.platformUrl = action.payload.platformUrl;
      state.search.apiBaseUrl = `${action.payload.platformUrl}${searchAPIEndpoint}`;
      state.analytics.apiBaseUrl = legacyAnalyticsUrlFromPlatformUrl(
        action.payload.platformUrl,
        state.organizationId
      );
    }
  }).addCase(updateSearchConfiguration, (state, action) => {
    if (action.payload.apiBaseUrl) {
      state.search.apiBaseUrl = action.payload.apiBaseUrl;
    }
    if (action.payload.locale) {
      state.search.locale = action.payload.locale;
    }
    if (action.payload.timezone) {
      state.search.timezone = action.payload.timezone;
    }
    if (action.payload.authenticationProviders) {
      state.search.authenticationProviders = action.payload.authenticationProviders;
    }
  }).addCase(updateAnalyticsConfiguration, (state, action) => {
    if (!isNullOrUndefined(action.payload.enabled)) {
      state.analytics.enabled = action.payload.enabled;
    }
    if (!isNullOrUndefined(action.payload.originContext)) {
      state.analytics.originContext = action.payload.originContext;
    }
    if (!isNullOrUndefined(action.payload.originLevel2)) {
      state.analytics.originLevel2 = action.payload.originLevel2;
    }
    if (!isNullOrUndefined(action.payload.originLevel3)) {
      state.analytics.originLevel3 = action.payload.originLevel3;
    }
    if (!isNullOrUndefined(action.payload.apiBaseUrl)) {
      state.analytics.apiBaseUrl = action.payload.apiBaseUrl;
    }
    if (!isNullOrUndefined(action.payload.nextApiBaseUrl)) {
      state.analytics.nextApiBaseUrl = action.payload.nextApiBaseUrl;
    }
    if (!isNullOrUndefined(action.payload.trackingId)) {
      state.analytics.trackingId = action.payload.trackingId;
    }
    if (!isNullOrUndefined(action.payload.analyticsMode)) {
      state.analytics.analyticsMode = action.payload.analyticsMode;
    }
    if (!isNullOrUndefined(action.payload.source)) {
      state.analytics.source = action.payload.source;
    }
    const magicCookie = (0, import_pendragon.default)();
    if (magicCookie) {
      state.analytics.analyticsMode = "next";
      state.analytics.trackingId = magicCookie;
    }
    if (!isNullOrUndefined(action.payload.runtimeEnvironment)) {
      state.analytics.runtimeEnvironment = action.payload.runtimeEnvironment;
    }
    if (!isNullOrUndefined(action.payload.anonymous)) {
      state.analytics.anonymous = action.payload.anonymous;
    }
    if (!isNullOrUndefined(action.payload.deviceId)) {
      state.analytics.deviceId = action.payload.deviceId;
    }
    if (!isNullOrUndefined(action.payload.userDisplayName)) {
      state.analytics.userDisplayName = action.payload.userDisplayName;
    }
    if (!isNullOrUndefined(action.payload.documentLocation)) {
      state.analytics.documentLocation = action.payload.documentLocation;
    }
  }).addCase(disableAnalytics, (state) => {
    state.analytics.enabled = false;
  }).addCase(enableAnalytics, (state) => {
    state.analytics.enabled = true;
  }).addCase(setOriginLevel2, (state, action) => {
    state.analytics.originLevel2 = action.payload.originLevel2;
  }).addCase(setOriginLevel3, (state, action) => {
    state.analytics.originLevel3 = action.payload.originLevel3;
  }).addCase(updateActiveTab, (state, action) => {
    state.analytics.originLevel2 = action.payload;
  }).addCase(restoreSearchParameters, (state, action) => {
    state.analytics.originLevel2 = action.payload.tab || state.analytics.originLevel2;
  })
);

// src/app/common-reducers.ts
var configuration = configurationReducer;

// src/app/instantly-callable-middleware.ts
function isInstantlyCallableThunkAction(action) {
  return action.instantlyCallable;
}
var instantlyCallableThunkActionMiddleware = () => (next) => (action) => next(isInstantlyCallableThunkAction(action) ? action() : action);

// src/app/logger-middlewares.ts
var logActionErrorMiddleware = (logger) => () => (next) => (action) => {
  const unknownAction = action;
  if (!unknownAction.error) {
    return next(action);
  }
  const error = unknownAction.error;
  if (!unknownAction.payload?.ignored) {
    logger.error(
      error.stack || error.message || error.name || "Error",
      `Action dispatch error ${unknownAction.type}`,
      action
    );
  }
  if (unknownAction.error.name === "SchemaValidationError") {
    return;
  }
  return next(action);
};
var logActionMiddleware = (logger) => (api) => (next) => (action) => {
  logger.debug(
    {
      action,
      nextState: api.getState()
    },
    `Action dispatched: ${action.type}`
  );
  return next(action);
};

// src/app/navigatorContextProvider.ts
var defaultBrowserNavigatorContextProvider = () => ({
  referrer: document.referrer,
  userAgent: navigator.userAgent,
  location: window.location.href
});
var defaultNodeJSNavigatorContextProvider = () => ({
  referrer: "default",
  userAgent: "Node.js",
  location: "default"
});

// src/app/reducer-manager.ts
function createReducerManager(initialReducers, preloadedState) {
  const reducers = { ...initialReducers };
  let crossReducer;
  const rootReducer = (combined) => {
    return (state, action) => {
      const intermediate = combined(state, action);
      const final = crossReducer ? crossReducer(intermediate, action) : intermediate;
      return final;
    };
  };
  return {
    get combinedReducer() {
      const placeholderReducers = fromEntries(
        Object.entries(preloadedState).filter(([key]) => !(key in reducers)).map(([key, value]) => [key, () => value])
      );
      return rootReducer(
        combineReducers({ ...placeholderReducers, ...reducers })
      );
    },
    containsAll(newReducers) {
      const keys = Object.keys(newReducers);
      return keys.every((key) => key in reducers);
    },
    add(newReducers) {
      Object.keys(newReducers).filter((key) => !(key in reducers)).forEach((key) => reducers[key] = newReducers[key]);
    },
    addCrossReducer(reducer) {
      crossReducer = reducer;
    }
  };
}

// node_modules/ts-debounce/dist/src/index.esm.js
function r(r2, e, n) {
  var i, t, o;
  void 0 === e && (e = 50), void 0 === n && (n = {});
  var a = null != (i = n.isImmediate) && i, u = null != (t = n.callback) && t, c = n.maxWait, v = Date.now(), l = [];
  function f2() {
    if (void 0 !== c) {
      var r3 = Date.now() - v;
      if (r3 + e >= c) return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && void 0 === o;
      if (void 0 !== o && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f2()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    void 0 !== o && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}

// src/app/renew-access-token-middleware.ts
function createRenewAccessTokenMiddleware(logger, renewToken) {
  let accessTokenRenewalsAttempts = 0;
  const resetRenewalTriesAfterDelay = r(
    () => accessTokenRenewalsAttempts = 0,
    500
  );
  return (store) => (next) => async (action) => {
    const isThunk = typeof action === "function";
    if (!isThunk) {
      return next(action);
    }
    const payload = await next(action);
    if (!isExpiredTokenError(payload)) {
      return payload;
    }
    if (typeof renewToken !== "function") {
      logger.warn(
        "Unable to renew the expired token because a renew function was not provided. Please specify the #renewAccessToken option when initializing the engine."
      );
      return payload;
    }
    if (accessTokenRenewalsAttempts >= 5) {
      logger.warn(
        "Attempted to renew the token but was not successful. Please check the #renewAccessToken function."
      );
      return payload;
    }
    accessTokenRenewalsAttempts++;
    resetRenewalTriesAfterDelay();
    const accessToken = await attempt(renewToken);
    store.dispatch(updateBasicConfiguration({ accessToken }));
    store.dispatch(action);
    return;
  };
}
function isExpiredTokenError(action) {
  return action?.error?.name === new ExpiredTokenError().name;
}
async function attempt(fn) {
  try {
    return await fn();
  } catch (e) {
    return "";
  }
}

// src/app/store.ts
function configureStore2({
  reducer,
  preloadedState,
  middlewares = [],
  thunkExtraArguments,
  name
}) {
  return configureStore({
    reducer,
    preloadedState,
    devTools: {
      stateSanitizer: (state) => state.history ? { ...state, history: "<<OMIT>>" } : state,
      name,
      shouldHotReload: false
      // KIT-961 -> Redux dev tool + hot reloading interacts badly with replaceReducers mechanism.
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: thunkExtraArguments } }).prepend(...middlewares).concat(logActionMiddleware(thunkExtraArguments.logger))
  });
}

// src/app/engine.ts
var coreReducers = { configuration, version: versionReducer };
function getUpdateAnalyticsConfigurationPayload(configuration2, logger) {
  const apiBaseUrl = configuration2.organizationEndpoints?.analytics || void 0;
  const { analyticsClientMiddleware: _, ...payload } = configuration2.analytics ?? {};
  const payloadWithURL = {
    ...payload,
    nextApiBaseUrl: `${apiBaseUrl}/rest/organizations/${configuration2.organizationId}/events/v1`,
    apiBaseUrl
  };
  if (doNotTrack()) {
    logger.info("Analytics disabled since doNotTrack is active.");
    return {
      ...payloadWithURL,
      enabled: false
    };
  }
  if (payloadWithURL.analyticsMode === "next" && !payload.trackingId) {
    throw new InvalidEngineConfiguration(
      'analytics.trackingId is required when analytics.analyticsMode="next"'
    );
  }
  return payloadWithURL;
}
function buildEngine(options, thunkExtraArguments) {
  const engine = buildCoreEngine(options, thunkExtraArguments);
  const { accessToken, organizationId } = options.configuration;
  const { organizationEndpoints } = options.configuration;
  const platformUrl2 = organizationEndpoints?.platform || options.configuration.platformUrl;
  if (shouldWarnAboutPlatformURL(options.configuration)) {
    engine.logger.warn(
      `The \`platformUrl\` (${options.configuration.platformUrl}) option will be deprecated in the next major version. Consider using the \`organizationEndpoints\` option instead. See [Organization endpoints](https://docs.coveo.com/en/mcc80216).`
    );
  }
  if (shouldWarnAboutOrganizationEndpoints(options.configuration)) {
    engine.logger.warn(
      "The `organizationEndpoints` options was not explicitly set in the Headless engine configuration. Coveo recommends setting this option, as it has resiliency benefits and simplifies the overall configuration for multi-region deployments. See [Organization endpoints](https://docs.coveo.com/en/mcc80216)."
    );
  } else if (shouldWarnAboutMismatchBetweenOrganizationIDAndOrganizationEndpoints(
    options.configuration
  )) {
    engine.logger.warn(
      `There is a mismatch between the \`organizationId\` option (${options.configuration.organizationId}) and the organization configured in the \`organizationEndpoints\` option (${options.configuration.organizationEndpoints?.platform}). This could lead to issues that are complex to troubleshoot. Please make sure both values match.`
    );
  }
  engine.dispatch(
    updateBasicConfiguration({
      accessToken,
      organizationId,
      platformUrl: platformUrl2
    })
  );
  const analyticsPayload = getUpdateAnalyticsConfigurationPayload(
    options.configuration,
    engine.logger
  );
  if (analyticsPayload) {
    engine.dispatch(updateAnalyticsConfiguration(analyticsPayload));
  }
  return engine;
}
function buildCoreEngine(options, thunkExtraArguments) {
  const { reducers } = options;
  const reducerManager = createReducerManager(
    { ...coreReducers, ...reducers },
    options.preloadedState ?? {}
  );
  if (options.crossReducer) {
    reducerManager.addCrossReducer(options.crossReducer);
  }
  const logger = thunkExtraArguments.logger;
  const navigatorContextProvider = options.navigatorContextProvider ?? isBrowser2() ? defaultBrowserNavigatorContextProvider : defaultNodeJSNavigatorContextProvider;
  const thunkExtraArgumentsWithRelay = {
    ...thunkExtraArguments,
    get relay() {
      return getRelayInstanceFromState(engine.state);
    },
    get navigatorContext() {
      return navigatorContextProvider();
    }
  };
  const store = createStore2(
    options,
    thunkExtraArgumentsWithRelay,
    reducerManager
  );
  const engine = {
    addReducers(reducers2) {
      if (reducerManager.containsAll(reducers2)) {
        return;
      }
      reducerManager.add(reducers2);
      store.replaceReducer(reducerManager.combinedReducer);
    },
    dispatch: store.dispatch,
    subscribe: store.subscribe,
    enableAnalytics() {
      store.dispatch(enableAnalytics());
    },
    disableAnalytics() {
      store.dispatch(disableAnalytics());
    },
    get state() {
      return store.getState();
    },
    get relay() {
      return getRelayInstanceFromState(this.state);
    },
    get navigatorContext() {
      return navigatorContextProvider();
    },
    logger,
    store
  };
  return engine;
}
function createStore2(options, thunkExtraArguments, reducerManager) {
  const { preloadedState, configuration: configuration2 } = options;
  const name = configuration2.name || "coveo-headless";
  const middlewares = createMiddleware(options, thunkExtraArguments.logger);
  return configureStore2({
    preloadedState,
    reducer: reducerManager.combinedReducer,
    middlewares,
    thunkExtraArguments,
    name
  });
}
function createMiddleware(options, logger) {
  const { renewAccessToken } = options.configuration;
  const renewTokenMiddleware = createRenewAccessTokenMiddleware(
    logger,
    renewAccessToken
  );
  return [
    instantlyCallableThunkActionMiddleware,
    renewTokenMiddleware,
    logActionErrorMiddleware(logger),
    analyticsMiddleware
  ].concat(options.middlewares || []);
}
function shouldWarnAboutOrganizationEndpoints(configuration2) {
  return isUndefined(configuration2.organizationEndpoints);
}
function shouldWarnAboutPlatformURL(configuration2) {
  return !isNullOrUndefined(configuration2.platformUrl) || isNullOrUndefined(configuration2.organizationEndpoints?.platform);
}
function shouldWarnAboutMismatchBetweenOrganizationIDAndOrganizationEndpoints(configuration2) {
  const { platform } = configuration2.organizationEndpoints;
  if (isUndefined(platform)) {
    return false;
  }
  const match = matchCoveoOrganizationEndpointUrlAnyOrganization(platform);
  return match && match.organizationId !== configuration2.organizationId;
}
var InvalidEngineConfiguration = class extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidEngineConfiguration";
  }
};

// src/app/logger.ts
var import_pino = __toESM(require_browser2());
function buildLogger(options) {
  return (0, import_pino.default)({
    name: "@coveo/headless",
    level: options?.level || "warn",
    formatters: {
      log: options?.logFormatter
    }
  });
}

// src/app/thunk-extra-arguments.ts
function buildThunkExtraArguments(configuration2, logger) {
  const analyticsClientMiddleware = getAnalyticsClientMiddleware(configuration2);
  const validatePayload2 = validatePayloadAndThrow;
  const preprocessRequest = getPreprocessRequest(configuration2);
  return {
    analyticsClientMiddleware,
    validatePayload: validatePayload2,
    preprocessRequest,
    logger
  };
}
function getAnalyticsClientMiddleware(configuration2) {
  const { analytics } = configuration2;
  const NoopAnalyticsMiddleware = (_, p) => p;
  return analytics?.analyticsClientMiddleware || NoopAnalyticsMiddleware;
}
function getPreprocessRequest(configuration2) {
  return configuration2.preprocessRequest || NoopPreprocessRequest;
}

// src/app/engine-configuration.ts
var engineConfigurationDefinitions = {
  organizationId: requiredNonEmptyString,
  accessToken: requiredNonEmptyString,
  platformUrl: new StringValue({
    required: false,
    emptyAllowed: false
  }),
  name: new StringValue({
    required: false,
    emptyAllowed: false
  }),
  analytics: new RecordValue({
    options: {
      required: false
    },
    values: {
      enabled: new BooleanValue({
        required: false
      }),
      originContext: new StringValue({
        required: false
      }),
      originLevel2: new StringValue({
        required: false
      }),
      originLevel3: new StringValue({
        required: false
      }),
      analyticsMode: new StringValue({
        constrainTo: ["legacy", "next"],
        required: false
      })
    }
  })
};
function getSampleEngineConfiguration() {
  return {
    organizationId: "searchuisamples",
    // deepcode ignore HardcodedNonCryptoSecret: Public key freely available for our documentation
    accessToken: "xx564559b1-0045-48e1-953c-3addd1ee4457",
    organizationEndpoints: getOrganizationEndpoints("searchuisamples")
  };
}

// src/app/product-recommendation-engine/product-recommendation-engine-configuration.ts
var engineConfigurationDefinitions2 = {
  organizationId: requiredNonEmptyString,
  accessToken: requiredNonEmptyString,
  platformUrl: new StringValue({
    required: false,
    emptyAllowed: false
  }),
  name: new StringValue({
    required: false,
    emptyAllowed: false
  }),
  analytics: new RecordValue({
    options: {
      required: false
    },
    values: {
      enabled: new BooleanValue({
        required: false
      }),
      originContext: new StringValue({
        required: false
      }),
      originLevel2: new StringValue({
        required: false
      }),
      originLevel3: new StringValue({
        required: false
      }),
      analyticsMode: new StringValue({
        constrainTo: ["legacy"],
        required: false
      })
    }
  }),
  searchHub: nonEmptyString,
  locale: nonEmptyString,
  timezone: nonEmptyString
};
var productRecommendationEngineConfigurationSchema = new Schema(
  engineConfigurationDefinitions2
);
function getSampleProductRecommendationEngineConfiguration() {
  return {
    ...getSampleEngineConfiguration(),
    searchHub: "default"
  };
}

// src/app/product-recommendation-engine/product-recommendation-engine.ts
var productRecommendationEngineReducers = { searchHub: searchHubReducer, productRecommendations: productRecommendationsReducer };
function buildProductRecommendationEngine(options) {
  const logger = buildLogger(options.loggerOptions);
  validateConfiguration(options.configuration, logger);
  const searchAPIClient = createSearchAPIClient(options.configuration, logger);
  const thunkArguments = {
    ...buildThunkExtraArguments(options.configuration, logger),
    apiClient: searchAPIClient
  };
  const augmentedOptions = {
    ...options,
    reducers: productRecommendationEngineReducers
  };
  const engine = buildEngine(augmentedOptions, thunkArguments);
  const { searchHub, timezone: timezone2, locale } = options.configuration;
  engine.dispatch(updateSearchConfiguration({ timezone: timezone2, locale }));
  if (!isNullOrUndefined(searchHub)) {
    engine.dispatch(setSearchHub(searchHub));
  }
  return {
    ...engine,
    get state() {
      return engine.state;
    }
  };
}
function validateConfiguration(configuration2, logger) {
  try {
    productRecommendationEngineConfigurationSchema.validate(configuration2);
  } catch (error) {
    logger.error("Product Recommendation engine configuration error", error);
    throw error;
  }
}
function createSearchAPIClient(configuration2, logger) {
  return new SearchAPIClient({
    logger,
    preprocessRequest: configuration2.preprocessRequest || NoopPreprocessRequest,
    postprocessSearchResponseMiddleware: NoopPostprocessSearchResponseMiddleware,
    postprocessFacetSearchResponseMiddleware: NoopPostprocessFacetSearchResponseMiddleware,
    postprocessQuerySuggestResponseMiddleware: NoopPostprocessQuerySuggestResponseMiddleware
  });
}

// src/features/configuration/configuration-actions-loader.ts
function loadConfigurationActions(engine) {
  engine.addReducers({ configuration });
  return {
    disableAnalytics,
    enableAnalytics,
    setOriginLevel2,
    setOriginLevel3,
    updateAnalyticsConfiguration,
    updateBasicConfiguration
  };
}

// src/features/product-recommendations/product-recommendations-actions-loader.ts
function loadProductRecommendationsActions(engine) {
  engine.addReducers({ productRecommendations: productRecommendationsReducer });
  return {
    getProductRecommendations,
    setProductRecommendationsAdditionalFields,
    setProductRecommendationsBrandFilter,
    setProductRecommendationsCategoryFilter,
    setProductRecommendationsMaxNumberOfRecommendations,
    setProductRecommendationsRecommenderId,
    setProductRecommendationsSkus
  };
}

// src/features/product-recommendations/product-recommendations-click-analytics-actions-loader.ts
function loadClickAnalyticsActions(engine) {
  engine.addReducers({});
  return {
    logProductRecommendationOpen
  };
}

// src/features/context/context-actions.ts
var nonEmptyArray = new ArrayValue({
  each: requiredNonEmptyString,
  required: true
});
var nonEmptyPayload = (contextKey, contextValue) => {
  validatePayload(contextKey, requiredNonEmptyString);
  if (isString(contextValue)) {
    validatePayload(contextValue, requiredNonEmptyString);
  } else {
    validatePayload(contextValue, nonEmptyArray);
  }
  return { payload: { contextKey, contextValue } };
};
var setContext = createAction(
  "context/set",
  (payload) => {
    for (const [k, v] of Object.entries(payload)) {
      nonEmptyPayload(k, v);
    }
    return { payload };
  }
);
var addContext = createAction(
  "context/add",
  (payload) => nonEmptyPayload(payload.contextKey, payload.contextValue)
);
var removeContext = createAction(
  "context/remove",
  (payload) => validatePayload(payload, requiredNonEmptyString)
);

// src/features/context/context-state.ts
function getContextInitialState() {
  return {
    contextValues: {}
  };
}

// src/features/context/context-slice.ts
var contextReducer = createReducer(
  getContextInitialState(),
  (builder) => {
    builder.addCase(setContext, (state, action) => {
      state.contextValues = action.payload;
    }).addCase(addContext, (state, action) => {
      state.contextValues[action.payload.contextKey] = action.payload.contextValue;
    }).addCase(removeContext, (state, action) => {
      delete state.contextValues[action.payload];
    }).addCase(change.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.contextValues = action.payload.context.contextValues;
    });
  }
);

// src/features/context/context-actions-loader.ts
function loadContextActions(engine) {
  engine.addReducers({ context: contextReducer });
  return {
    addContext,
    removeContext,
    setContext
  };
}

// src/features/dictionary-field-context/dictionary-field-context-actions.ts
var setContext2 = createAction(
  "dictionaryFieldContext/set",
  (payload) => {
    const objSchema = new RecordValue({ options: { required: true } });
    const objError = validatePayload(payload, objSchema).error;
    if (objError) {
      return { payload, error: objError };
    }
    const values = Object.values(payload);
    const valueSchema = new ArrayValue({ each: requiredEmptyAllowedString });
    const valuesError = validatePayload(values, valueSchema).error;
    if (valuesError) {
      return { payload, error: valuesError };
    }
    return { payload };
  }
);
var addContext2 = createAction(
  "dictionaryFieldContext/add",
  (payload) => {
    const schema = new RecordValue({
      options: { required: true },
      values: {
        field: requiredEmptyAllowedString,
        key: requiredEmptyAllowedString
      }
    });
    return validatePayload(
      payload,
      schema
    );
  }
);
var removeContext2 = createAction(
  "dictionaryFieldContext/remove",
  (payload) => {
    return validatePayload(payload, requiredEmptyAllowedString);
  }
);

// src/features/dictionary-field-context/dictionary-field-context-state.ts
function getDictionaryFieldContextInitialState() {
  return {
    contextValues: {}
  };
}

// src/features/dictionary-field-context/dictionary-field-context-slice.ts
var dictionaryFieldContextReducer = createReducer(
  getDictionaryFieldContextInitialState(),
  (builder) => {
    builder.addCase(setContext2, (state, action) => {
      state.contextValues = action.payload;
    }).addCase(addContext2, (state, action) => {
      const { field, key } = action.payload;
      state.contextValues[field] = key;
    }).addCase(removeContext2, (state, action) => {
      delete state.contextValues[action.payload];
    }).addCase(change.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.contextValues = action.payload.dictionaryFieldContext.contextValues;
    });
  }
);

// src/features/dictionary-field-context/dictionary-field-context-actions-loader.ts
function loadDictionaryFieldContextActions(engine) {
  engine.addReducers({ dictionaryFieldContext: dictionaryFieldContextReducer });
  return {
    addContext: addContext2,
    removeContext: removeContext2,
    setContext: setContext2
  };
}

// src/features/search-hub/search-hub-actions-loader.ts
function loadSearchHubActions(engine) {
  engine.addReducers({ searchHub: searchHubReducer });
  return { setSearchHub };
}

// src/controllers/controller/headless-controller.ts
function buildController(engine) {
  let prevState;
  const listeners = /* @__PURE__ */ new Map();
  const hasNoListeners = () => listeners.size === 0;
  const hasStateChanged = (currentState) => {
    try {
      const stringifiedState = JSON.stringify(currentState);
      const hasChanged = prevState !== stringifiedState;
      prevState = stringifiedState;
      return hasChanged;
    } catch (e) {
      console.warn(
        'Could not detect if state has changed, check the controller "get state method"',
        e
      );
      return true;
    }
  };
  return {
    subscribe(listener2) {
      listener2();
      const symbol = Symbol();
      let unsubscribe;
      if (hasNoListeners()) {
        prevState = JSON.stringify(this.state);
        unsubscribe = engine.subscribe(() => {
          if (hasStateChanged(this.state)) {
            listeners.forEach((listener3) => listener3());
          }
        });
      }
      listeners.set(symbol, listener2);
      return () => {
        listeners.delete(symbol);
        if (hasNoListeners()) {
          unsubscribe && unsubscribe();
        }
      };
    },
    get state() {
      return {};
    }
  };
}

// src/controllers/product-recommendations/headless-base-product-recommendations.ts
var baseProductRecommendationsOptionsSchema = {
  additionalFields: new ArrayValue({
    required: false,
    each: nonEmptyString
  }),
  skus: new ArrayValue({
    required: false,
    each: nonEmptyString
  }),
  maxNumberOfRecommendations: new NumberValue({
    required: false,
    max: 50,
    min: 1,
    default: 5
  })
};
var optionsSchema = new Schema({
  id: requiredNonEmptyString,
  ...baseProductRecommendationsOptionsSchema
});
var buildBaseProductRecommendationsList = (engine, props = {}) => {
  if (!loadBaseProductRecommendationsReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine.state;
  const options = validateOptions(
    engine,
    optionsSchema,
    props.options,
    "buildBaseProductRecommendationsList"
  );
  dispatch(
    setProductRecommendationsRecommenderId({
      id: options.id
    })
  );
  dispatch(
    setProductRecommendationsMaxNumberOfRecommendations({
      number: options.maxNumberOfRecommendations
    })
  );
  if (options.additionalFields) {
    dispatch(
      setProductRecommendationsAdditionalFields({
        additionalFields: options.additionalFields
      })
    );
  }
  if (options.skus) {
    dispatch(
      setProductRecommendationsSkus({
        skus: options.skus
      })
    );
  }
  return {
    ...controller,
    setSkus(skus) {
      dispatch(setProductRecommendationsSkus({ skus }));
    },
    refresh() {
      dispatch(getProductRecommendations());
    },
    get state() {
      const {
        skus,
        maxNumberOfRecommendations,
        recommendations,
        error,
        isLoading
      } = getState().productRecommendations;
      return {
        skus,
        maxNumberOfRecommendations,
        recommendations,
        error,
        isLoading
      };
    }
  };
};
function loadBaseProductRecommendationsReducers(engine) {
  engine.addReducers({ productRecommendations: productRecommendationsReducer, configuration });
  return true;
}

// src/controllers/product-recommendations/headless-frequently-bought-together.ts
var optionsSchema2 = new Schema({
  sku: new StringValue({ required: true, emptyAllowed: false }),
  maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
  additionalFields: baseProductRecommendationsOptionsSchema.additionalFields
});
function buildFrequentlyBoughtTogetherList(engine, props) {
  const options = validateOptions(
    engine,
    optionsSchema2,
    props.options,
    "buildFrequentlyBoughtTogetherList"
  );
  const controller = buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      maxNumberOfRecommendations: options.maxNumberOfRecommendations,
      additionalFields: options.additionalFields,
      skus: [options.sku],
      id: "frequentBought"
    }
  });
  const { setSkus, ...rest } = controller;
  return {
    ...rest,
    setSku(sku) {
      setSkus([sku]);
    },
    get state() {
      const { skus, ...rest2 } = controller.state;
      return {
        ...rest2,
        sku: skus[0]
      };
    }
  };
}

// src/controllers/product-recommendations/headless-cart-recommendations.ts
var optionsSchema3 = new Schema({
  ...baseProductRecommendationsOptionsSchema
});
function buildCartRecommendationsList(engine, props) {
  const options = validateOptions(
    engine,
    optionsSchema3,
    props.options,
    "buildCartRecommendationsList"
  );
  return buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "cart"
    }
  });
}

// src/controllers/product-recommendations/headless-frequently-viewed-together.ts
var optionsSchema4 = new Schema({
  ...baseProductRecommendationsOptionsSchema
});
function buildFrequentlyViewedTogetherList(engine, props) {
  const options = validateOptions(
    engine,
    optionsSchema4,
    props.options,
    "buildFrequentlyViewedTogetherList"
  );
  return buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "frequentViewed"
    }
  });
}

// src/controllers/product-recommendations/headless-popular-bought-recommendations.ts
var optionsSchema5 = new Schema({
  maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
  additionalFields: baseProductRecommendationsOptionsSchema.additionalFields
});
function buildPopularBoughtRecommendationsList(engine, props = {}) {
  const options = validateOptions(
    engine,
    optionsSchema5,
    props.options,
    "buildPopularBoughtRecommendationsList"
  );
  const controller = buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "popularBought"
    }
  });
  const { setSkus, ...rest } = controller;
  return {
    ...rest,
    get state() {
      const { skus, ...rest2 } = controller.state;
      return {
        ...rest2
      };
    }
  };
}

// src/controllers/product-recommendations/headless-popular-viewed-recommendations.ts
var optionsSchema6 = new Schema({
  maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
  additionalFields: baseProductRecommendationsOptionsSchema.additionalFields
});
function buildPopularViewedRecommendationsList(engine, props = {}) {
  const options = validateOptions(
    engine,
    optionsSchema6,
    props.options,
    "buildPopularViewedRecommendationsList"
  );
  const controller = buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "popularViewed"
    }
  });
  const { setSkus, ...rest } = controller;
  return {
    ...rest,
    get state() {
      const { skus, ...rest2 } = controller.state;
      return {
        ...rest2
      };
    }
  };
}

// src/controllers/product-recommendations/headless-user-interest-recommendations.ts
var optionsSchema7 = new Schema({
  maxNumberOfRecommendations: baseProductRecommendationsOptionsSchema.maxNumberOfRecommendations,
  additionalFields: baseProductRecommendationsOptionsSchema.additionalFields
});
function buildUserInterestRecommendationsList(engine, props) {
  const options = validateOptions(
    engine,
    optionsSchema7,
    props.options,
    "buildUserInterestRecommendationsList"
  );
  const controller = buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "user"
    }
  });
  const { setSkus, ...rest } = controller;
  return {
    ...rest,
    get state() {
      const { skus, ...rest2 } = controller.state;
      return {
        ...rest2
      };
    }
  };
}

// src/controllers/core/context/headless-context-reserved-keys.ts
var ReservedContextKeys = ["caseId", "caseNumber"];
var ReservedContextKeysToControllerMap = {
  caseId: "caseContext",
  caseNumber: "caseContext"
};
var ReservedContextKeyError = class extends Error {
  constructor(key) {
    super(
      `The key "${key}" is reserved for internal use. Use ${ReservedContextKeysToControllerMap[key]} to set this value.}`
    );
  }
};
function isReservedContextKey(contextKey) {
  return ReservedContextKeys.includes(contextKey);
}

// src/controllers/core/context/headless-core-context.ts
var initialStateSchema = new Schema({
  values: new RecordValue({
    options: { required: false }
  })
});
function buildCoreContext(engine, props = {}) {
  if (!loadContextReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine.state;
  const initialState = validateInitialState(
    engine,
    initialStateSchema,
    props.initialState,
    "buildContext"
  );
  if (initialState.values) {
    dispatch(setContext(initialState.values));
  }
  return {
    ...controller,
    get state() {
      return {
        values: getState().context.contextValues
      };
    },
    set(context) {
      dispatch(setContext(context));
    },
    ...getState().configuration.analytics.analyticsMode === "legacy" ? legacyCoreContext(dispatch) : nextCoreContext(dispatch)
  };
}
var legacyCoreContext = (dispatch) => ({
  add(contextKey, contextValue) {
    dispatch(addContext({ contextKey, contextValue }));
  },
  remove(key) {
    dispatch(removeContext(key));
  }
});
var nextCoreContext = (dispatch) => ({
  add(contextKey, contextValue) {
    if (isReservedContextKey(contextKey)) {
      throw new ReservedContextKeyError(contextKey);
    }
    dispatch(addContext({ contextKey, contextValue }));
  },
  remove(contextKey) {
    if (isReservedContextKey(contextKey)) {
      throw new ReservedContextKeyError(contextKey);
    }
    dispatch(removeContext(contextKey));
  }
});
function loadContextReducers(engine) {
  engine.addReducers({ context: contextReducer });
  return true;
}

// src/controllers/context/headless-context.ts
function buildContext(engine, props) {
  return buildCoreContext(engine, props);
}

// src/controllers/dictionary-field-context/headless-dictionary-field-context.ts
function buildDictionaryFieldContext(engine) {
  if (!loadReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine.state;
  return {
    ...controller,
    get state() {
      return {
        values: getState().dictionaryFieldContext.contextValues
      };
    },
    set(context) {
      dispatch(setContext2(context));
    },
    add(field, key) {
      dispatch(addContext2({ field, key }));
    },
    remove(field) {
      dispatch(removeContext2(field));
    }
  };
}
function loadReducers(engine) {
  engine.addReducers({ dictionaryFieldContext: dictionaryFieldContextReducer });
  return true;
}

// src/controllers/product-recommendations/headless-frequently-viewed-same-category.ts
var optionsSchema8 = new Schema({
  ...baseProductRecommendationsOptionsSchema
});
function buildFrequentlyViewedSameCategoryList(engine, props) {
  const options = validateOptions(
    engine,
    optionsSchema8,
    props.options,
    "buildFrequentlyViewedSameCategoryList"
  );
  return buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "frequentViewedSameCategory"
    }
  });
}

// src/controllers/product-recommendations/headless-frequently-viewed-different-category.ts
var optionsSchema9 = new Schema({
  ...baseProductRecommendationsOptionsSchema
});
function buildFrequentlyViewedDifferentCategoryList(engine, props) {
  const options = validateOptions(
    engine,
    optionsSchema9,
    props.options,
    "buildFrequentlyViewedDifferentCategoryList"
  );
  return buildBaseProductRecommendationsList(engine, {
    ...props,
    options: {
      ...options,
      id: "frequentViewedDifferentCategory"
    }
  });
}

// src/product-recommendation.index.ts
polyfillCryptoNode();
/**
 * @license
 *
 * Copyright 2024 Coveo Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const AtomicProductRecommendations = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.unsubscribe = () => { };
        this.state = undefined;
    }
    componentWillLoad() {
        const sampleConfiguration = getSampleProductRecommendationEngineConfiguration();
        this.engine = buildProductRecommendationEngine({
            configuration: {
                ...sampleConfiguration,
                searchHub: 'frequently_bought_recommendations',
            },
        });
        this.frequentlyBoughtTogether = buildFrequentlyBoughtTogetherList(this.engine, {
            options: {
                sku: 'abc',
            },
        });
        this.unsubscribe = this.frequentlyBoughtTogether.subscribe(() => this.updateState());
        this.frequentlyBoughtTogether.refresh();
    }
    disconnectedCallback() {
        this.unsubscribe();
    }
    updateState() {
        this.state = this.frequentlyBoughtTogether.state;
    }
    render() {
        return (h("div", { key: 'e6d6b54c75f4c22bc4695c36a2b1ca61ff305548' }, "FREQUENTLY BOUGHT TOGETHER:", h("ul", { key: 'dcafc685b0c2c1e08d2980d2ae787a197c7fe2df' }, this.state.recommendations.map((p) => (h("li", null, p.ec_name))))));
    }
};

export { AtomicProductRecommendations as atomic_frequently_bought_together };

//# sourceMappingURL=atomic-frequently-bought-together.entry.js.map