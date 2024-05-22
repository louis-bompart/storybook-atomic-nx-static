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

// ../../node_modules/dayjs/plugin/quarterOfYear.js
var require_quarterOfYear = __commonJS({
  "../../node_modules/dayjs/plugin/quarterOfYear.js"(exports, module) {
    "use strict";
    !function(t, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_quarterOfYear = n();
    }(exports, function() {
      "use strict";
      var t = "month", n = "quarter";
      return function(e, i) {
        var r2 = i.prototype;
        r2.quarter = function(t2) {
          return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
        };
        var s = r2.add;
        r2.add = function(e2, i2) {
          return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
        };
        var u = r2.startOf;
        r2.startOf = function(e2, i2) {
          var r3 = this.$utils(), s2 = !!r3.u(i2) || i2;
          if (r3.p(e2) === n) {
            var o = this.quarter() - 1;
            return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
          }
          return u.bind(this)(e2, i2);
        };
      };
    });
  }
});

// ../../node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "../../node_modules/dayjs/plugin/customParseFormat.js"(exports, module) {
    "use strict";
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    }(exports, function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d\d/, r2 = /\d\d?/, i = /\d*[^-_:/,()\s\d]+/, o = {}, s = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var a = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, f2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        }(e2);
      }], h = function(e2) {
        var t2 = o[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, u = function(e2, t2) {
        var n2, r3 = o.meridiem;
        if (r3) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r3(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, d = { A: [i, function(e2) {
        this.afternoon = u(e2, false);
      }], a: [i, function(e2) {
        this.afternoon = u(e2, true);
      }], S: [/\d/, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [n, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [r2, a("seconds")], ss: [r2, a("seconds")], m: [r2, a("minutes")], mm: [r2, a("minutes")], H: [r2, a("hours")], h: [r2, a("hours")], HH: [r2, a("hours")], hh: [r2, a("hours")], D: [r2, a("day")], DD: [n, a("day")], Do: [i, function(e2) {
        var t2 = o.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r3 = 1; r3 <= 31; r3 += 1) t2(r3).replace(/\[|\]/g, "") === e2 && (this.day = r3);
      }], M: [r2, a("month")], MM: [n, a("month")], MMM: [i, function(e2) {
        var t2 = h("months"), n2 = (h("monthsShort") || t2.map(function(e3) {
          return e3.slice(0, 3);
        })).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [i, function(e2) {
        var t2 = h("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, a("year")], YY: [n, function(e2) {
        this.year = s(e2);
      }], YYYY: [/\d{4}/, a("year")], Z: f2, ZZ: f2 };
      function c(n2) {
        var r3, i2;
        r3 = n2, i2 = o && o.formats;
        for (var s2 = (n2 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t2, n3, r4) {
          var o2 = r4 && r4.toUpperCase();
          return n3 || i2[r4] || e[r4] || i2[o2].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e2, t3, n4) {
            return t3 || n4.slice(1);
          });
        })).match(t), a2 = s2.length, f3 = 0; f3 < a2; f3 += 1) {
          var h2 = s2[f3], u2 = d[h2], c2 = u2 && u2[0], l = u2 && u2[1];
          s2[f3] = l ? { regex: c2, parser: l } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r4 = 0; n3 < a2; n3 += 1) {
            var i3 = s2[n3];
            if ("string" == typeof i3) r4 += i3.length;
            else {
              var o2 = i3.regex, f4 = i3.parser, h3 = e2.slice(r4), u3 = o2.exec(h3)[0];
              f4.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          }(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (s = e2.parseTwoDigitYear);
        var r3 = t2.prototype, i2 = r3.parse;
        r3.parse = function(e3) {
          var t3 = e3.date, r4 = e3.utc, s2 = e3.args;
          this.$u = r4;
          var a2 = s2[1];
          if ("string" == typeof a2) {
            var f3 = true === s2[2], h2 = true === s2[3], u2 = f3 || h2, d2 = s2[2];
            h2 && (d2 = s2[2]), o = this.$locale(), !f3 && d2 && (o = n2.Ls[d2]), this.$d = function(e4, t4, n3) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var r5 = c(t4)(e4), i3 = r5.year, o2 = r5.month, s3 = r5.day, a3 = r5.hours, f4 = r5.minutes, h3 = r5.seconds, u3 = r5.milliseconds, d3 = r5.zone, l2 = /* @__PURE__ */ new Date(), m2 = s3 || (i3 || o2 ? 1 : l2.getDate()), M2 = i3 || l2.getFullYear(), Y = 0;
                i3 && !o2 || (Y = o2 > 0 ? o2 - 1 : l2.getMonth());
                var p = a3 || 0, v = f4 || 0, D = h3 || 0, g = u3 || 0;
                return d3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g + 60 * d3.offset * 1e3)) : n3 ? new Date(Date.UTC(M2, Y, m2, p, v, D, g)) : new Date(M2, Y, m2, p, v, D, g);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            }(t3, a2, r4), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), o = {};
          } else if (a2 instanceof Array) for (var l = a2.length, m = 1; m <= l; m += 1) {
            s2[1] = a2[m - 1];
            var M = n2.apply(this, s2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === l && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    });
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
var require_browser = __commonJS({
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
    function shouldSerialize(serialize3, serializers) {
      if (Array.isArray(serialize3)) {
        const hasToFilter = serialize3.filter(function(k) {
          return k !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize3 === true) {
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
      const serialize3 = shouldSerialize(opts.browser.serialize, serializers);
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
        serialize: serialize3,
        asObject: opts.browser.asObject,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = getLevels(opts);
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize3;
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
        if (serialize3 && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize3 && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize3;
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
    function applySerializers(args, serialize3, serializers, stdErrSerialize) {
      for (const i in args) {
        if (stdErrSerialize && args[i] instanceof Error) {
          args[i] = pino2.stdSerializers.err(args[i]);
        } else if (typeof args[i] === "object" && !Array.isArray(args[i])) {
          for (const k in args[i]) {
            if (serialize3 && serialize3.indexOf(k) > -1 && k in serializers) {
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
var randomID = (prepend, length = 5) => prepend + Math.random().toString(36).substring(2, 2 + length);
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

// src/api/commerce/common/request.ts
var buildRequest = (req, path) => {
  return {
    ...baseRequest(req, path),
    requestParams: prepareRequestParams(req)
  };
};
var prepareRequestParams = (req) => {
  const {
    trackingId,
    clientId,
    context,
    language,
    country,
    currency,
    page,
    perPage,
    facets,
    sort
  } = req;
  return {
    trackingId,
    clientId,
    context,
    language,
    country,
    currency,
    page,
    perPage,
    facets,
    sort
  };
};
var baseRequest = (req, path) => {
  const { url, organizationId, accessToken } = req;
  const baseUrl = `${url}/rest/organizations/${organizationId}/commerce/v2/${path}`;
  return {
    accessToken,
    method: "POST",
    contentType: "application/json",
    url: baseUrl,
    origin: "commerceApiFetch"
  };
};

// src/api/commerce/recommendations/recommendations-request.ts
var buildRecommendationsRequest = (req, path) => {
  return {
    ...baseRequest(req, path),
    requestParams: prepareRecommendationsRequestParams(req)
  };
};
var prepareRecommendationsRequestParams = (req) => {
  const {
    slotId,
    trackingId,
    clientId,
    context,
    language,
    country,
    currency,
    page
  } = req;
  return {
    slotId,
    trackingId,
    clientId,
    context,
    language,
    country,
    currency,
    page
  };
};

// src/api/commerce/search/query-suggest/query-suggest-request.ts
var buildQuerySuggestRequest = (req) => {
  return {
    ...baseRequest(req, "search/querySuggest"),
    requestParams: prepareRequestParams2(req)
  };
};
var prepareRequestParams2 = (req) => {
  const { trackingId, query: query2, clientId, context, language, country, currency } = req;
  return {
    trackingId,
    query: query2,
    clientId,
    context,
    language,
    country,
    currency
  };
};

// src/api/commerce/commerce-api-client.ts
var isErrorResponse = (r2) => {
  return r2.error !== void 0;
};
var CommerceAPIClient = class {
  constructor(options) {
    this.options = options;
  }
  async getProductListing(req) {
    return this.query({
      ...buildRequest(req, "listing"),
      ...this.options
    });
  }
  async getRecommendations(req) {
    return this.query({
      ...buildRecommendationsRequest(req, "recommendations"),
      ...this.options
    });
  }
  async search(req) {
    const requestOptions = buildRequest(req, "search");
    return this.query({
      ...requestOptions,
      requestParams: {
        ...requestOptions.requestParams,
        query: req?.query
      },
      ...this.options
    });
  }
  async productSuggestions(req) {
    const requestOptions = buildRequest(req, "search/productSuggest");
    return this.query({
      ...requestOptions,
      requestParams: {
        ...requestOptions.requestParams,
        query: req?.query
      },
      ...this.options
    });
  }
  async querySuggest(req) {
    const requestOptions = buildQuerySuggestRequest(req);
    return this.query({
      ...requestOptions,
      requestParams: {
        ...requestOptions.requestParams,
        query: req?.query
      },
      ...this.options
    });
  }
  async facetSearch(req) {
    const requestOptions = buildRequest(req, "facet");
    return this.query({
      ...requestOptions,
      requestParams: {
        ...requestOptions.requestParams,
        facetId: req?.facetId,
        facetQuery: req?.facetQuery,
        query: req?.query
      },
      ...this.options
    });
  }
  // eslint-disable-next-line @cspell/spellchecker
  // TODO: CAPI-867 - Use Commerce API's equivalent of the /plan endpoint when it becomes available.
  async plan(req) {
    const requestOptions = buildRequest(req, "search");
    return this.query({
      ...requestOptions,
      requestParams: {
        ...requestOptions.requestParams,
        query: req?.query
      },
      ...this.options
    });
  }
  async query(options) {
    const response = await PlatformClient.call(options);
    if (response instanceof Error) {
      return buildAPIResponseFromErrorOrThrow(response);
    }
    const body = await response.json();
    return response.ok ? { success: body } : { error: body };
  }
};

// src/api/preprocess-request.ts
var NoopPreprocessRequest = (request) => request;

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
  let keys2 = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys2.length; i++) {
    const key = keys2[i];
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
  const isArray3 = Array.isArray(base);
  const state = {
    type_: isArray3 ? 1 : 0,
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
  if (isArray3) {
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
function isBoolean(x) {
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
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(withExtraArgument(thunk2.extraArgument));
    }
  }
  if (false) {
    if (immutableCheck) {
      let immutableOptions = {};
      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }
      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }
    if (serializableCheck) {
      let serializableOptions = {};
      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }
      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
    if (actionCreatorCheck) {
      let actionCreatorOptions = {};
      if (!isBoolean(actionCreatorCheck)) {
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
  let id2 = "";
  let i = size;
  while (i--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
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
  const id2 = nanoid();
  const entry = {
    id: id2,
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
  constructor(definition3) {
    this.definition = definition3;
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
  return isUndefined(value) || isBoolean2(value);
}
function isBoolean2(value) {
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
    if (isBoolean2(v)) {
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
var validatePayloadAndThrow = (payload, definition3) => {
  const isSchemaValue = "required" in definition3;
  if (isSchemaValue) {
    return {
      payload: new Schema({
        value: definition3
      }).validate({ value: payload }).value
    };
  }
  const asRecordValue = new RecordValue({
    options: { required: true },
    values: definition3
  });
  const isInvalid = asRecordValue.validate(payload);
  if (isInvalid) {
    throw new SchemaValidationError(isInvalid);
  }
  return { payload };
};
var validatePayload = (payload, definition3) => {
  try {
    return validatePayloadAndThrow(payload, definition3);
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

// src/features/commerce/context/context-selector.ts
function getCurrency(state) {
  return state.currency;
}

// src/features/commerce/context/cart/cart-selector.ts
var getECPurchasePayload = (transaction, state) => ({
  currency: getCurrency(state.commerceContext),
  products: productQuantitySelector(state.cart),
  transaction
});
var itemsSelector = createSelector(
  (cartState) => cartState.cart,
  (cartState) => cartState.cartItems,
  (cart, cartItems) => cartItems.map((key) => cart[key])
);
var productQuantitySelector = createSelector(
  itemsSelector,
  (items) => items.map(({ quantity, ...product }) => ({
    quantity,
    product
  }))
);

// src/features/commerce/context/cart/cart-validation.ts
var itemPayloadDefinition = {
  productId: requiredNonEmptyString,
  quantity: new NumberValue({
    required: true,
    min: 0
  }),
  name: new StringValue({ required: false }),
  price: new NumberValue({ required: false, min: 0 })
};
var setItemsPayloadDefinition = new ArrayValue({
  each: new RecordValue({
    values: {
      ...itemPayloadDefinition
    }
  })
});
var cartDefinition = {
  items: setItemsPayloadDefinition
};
var cartSchema = new Schema(cartDefinition);

// src/features/commerce/context/cart/cart-actions.ts
var purchase = createAsyncThunk(
  "commerce/cart/purchase",
  async (transaction, { extra, getState }) => {
    const payload = getECPurchasePayload(transaction, getState());
    const { relay } = extra;
    relay.emit("ec.purchase", payload);
  }
);
var setItems = createAction(
  "commerce/cart/setItems",
  (payload) => validatePayload(payload, setItemsPayloadDefinition)
);
var updateItemQuantity = createAction(
  "commerce/cart/updateItemQuantity",
  (payload) => validatePayload(payload, itemPayloadDefinition)
);

// src/app/state-key.ts
var stateKeyDescription = "coveo-headless-internal-state";
var stateKey = Symbol.for(stateKeyDescription);
var redactEngine = (engine) => new Proxy(engine, {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter((key) => key !== stateKey);
  },
  get(target, prop, receiver) {
    if (typeof prop === "symbol" && prop.description === stateKeyDescription && prop !== stateKey) {
      engine.logger.warn(
        "You might be loading Headless twice. Please check your setup.\nIf you are trying to access the inner state... Don't"
      );
    }
    return Reflect.get(target, prop, receiver);
  }
});

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

// src/controllers/commerce/context/cart/headless-cart-selectors.ts
function itemSelector(cartState, item) {
  return cartState.cart[createCartKey(item)];
}
var totalQuantitySelector = createSelector(
  itemsSelector,
  (items) => items.reduce((prev, cur) => prev + cur.quantity, 0)
);
var totalPriceSelector = createSelector(
  itemsSelector,
  (items) => items.reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
);

// src/controllers/commerce/context/cart/headless-cart.ts
function buildCart(engine, props = {}) {
  if (!loadBaseCartReducers(engine)) {
    throw loadReducerError;
  }
  const { dispatch } = engine;
  const controller = buildController(engine);
  const getState = () => engine[stateKey].cart;
  const initialState = {
    ...props.initialState
  };
  validateInitialState(engine, cartSchema, initialState, "buildCart");
  if (initialState.items !== void 0) {
    dispatch(setItems(initialState.items));
  }
  function isNewQuantityDifferent(currentItem, prevItem) {
    return prevItem ? prevItem.quantity !== currentItem.quantity : true;
  }
  function getCartAction(currentItem, prevItem) {
    const isCurrentQuantityGreater = !prevItem || currentItem.quantity > prevItem.quantity;
    return isCurrentQuantityGreater ? "add" : "remove";
  }
  function getCurrency2() {
    return engine[stateKey].commerceContext.currency;
  }
  function isEqual(currentItem, prevItem) {
    return prevItem ? currentItem.name === prevItem.name && currentItem.price === prevItem.price && currentItem.quantity === prevItem.quantity : false;
  }
  function createEcCartActionPayload(currentItem, prevItem) {
    const { quantity: currentQuantity, ...product } = currentItem;
    const action = getCartAction(currentItem, prevItem);
    const quantity = !prevItem ? currentQuantity : Math.abs(currentQuantity - prevItem.quantity);
    const currency = getCurrency2();
    return {
      action,
      currency,
      quantity,
      product
    };
  }
  return {
    ...controller,
    empty: function() {
      for (const item of itemsSelector(getState())) {
        this.updateItemQuantity({ ...item, quantity: 0 });
      }
    },
    purchase(transaction) {
      dispatch(purchase(transaction));
    },
    updateItemQuantity(item) {
      const prevItem = itemSelector(getState(), item);
      const doesNotNeedUpdate = !prevItem && item.quantity <= 0;
      if (doesNotNeedUpdate || isEqual(item, prevItem)) {
        return;
      }
      if (isNewQuantityDifferent(item, prevItem)) {
        engine.relay.emit(
          "ec.cartAction",
          createEcCartActionPayload(item, prevItem)
        );
      }
      dispatch(updateItemQuantity(item));
    },
    get state() {
      const cartState = getState();
      return {
        items: itemsSelector(cartState),
        totalQuantity: totalQuantitySelector(cartState),
        totalPrice: totalPriceSelector(cartState)
      };
    }
  };
}
function createCartKey(item) {
  return `${item.productId},${item.name},${item.price}`;
}
function loadBaseCartReducers(engine) {
  engine.addReducers({ cart: cartReducer });
  return true;
}

// src/features/commerce/context/cart/cart-state.ts
var getCartInitialState = () => ({
  cartItems: [],
  cart: {},
  purchasedItems: [],
  purchased: {}
});
var getProductsFromCartState = (state) => getProductsFromCart(state.cartItems, state.cart);
var getProductsFromCartPurchasedState = (state) => getProductsFromCart(state.purchasedItems, state.purchased);
function getProductsFromCart(items, itemMap) {
  const productsMap = items.reduce(
    (acc, key) => {
      const { productId, quantity } = itemMap[key];
      if (!(productId in acc)) {
        acc[productId] = {
          productId,
          quantity: 0
        };
      }
      acc[productId].quantity += quantity;
      return acc;
    },
    {}
  );
  return [...Object.values(productsMap)];
}

// src/features/commerce/context/cart/cart-slice.ts
var cartReducer = createReducer(
  getCartInitialState(),
  (builder) => {
    builder.addCase(setItems, (state, { payload }) => {
      const { cart, cartItems } = payload.reduce((acc, item) => {
        const key = createCartKey(item);
        return {
          cartItems: [...acc.cartItems, key],
          cart: {
            ...acc.cart,
            [key]: item
          },
          purchasedItems: [],
          purchased: {}
        };
      }, getCartInitialState());
      setItemsInState(state, cartItems, cart);
    }).addCase(updateItemQuantity, (state, { payload }) => {
      const key = createCartKey(payload);
      if (!(key in state.cart)) {
        createItemInCart(payload, state);
        return;
      }
      if (payload.quantity <= 0) {
        deleteProductFromCart(payload, state);
        return;
      }
      state.cart[key] = payload;
      return;
    }).addCase(purchase.fulfilled, (state) => {
      setItemsAsPurchased(state);
      const { cart, cartItems } = getCartInitialState();
      setItemsInState(state, cartItems, cart);
    });
  }
);
function setItemsInState(state, cartItems, cart) {
  state.cartItems = cartItems;
  state.cart = cart;
}
function createItemInCart(item, state) {
  if (item.quantity <= 0) {
    return;
  }
  const key = createCartKey(item);
  state.cartItems = [...state.cartItems, key];
  state.cart[key] = item;
}
function deleteProductFromCart(item, state) {
  const key = createCartKey(item);
  state.cartItems = state.cartItems.filter((cartKey) => cartKey !== key);
  delete state.cart[key];
}
function setItemsAsPurchased(state) {
  for (const key of state.cartItems) {
    if (key in state.purchased) {
      state.purchased[key].quantity += state.cart[key].quantity;
      continue;
    }
    state.purchasedItems = [...state.purchasedItems, key];
    state.purchased[key] = state.cart[key];
  }
}

// src/features/commerce/context/context-validation.ts
var currencies = Intl.supportedValuesOf("currency");
var currencyDefinition = new StringValue({
  required: true,
  emptyAllowed: false,
  constrainTo: currencies
});
var viewDefinition = {
  url: requiredNonEmptyString,
  referrer: nonRequiredEmptyAllowedString
};
var userDefinition = {
  userId: nonEmptyString,
  email: nonEmptyString,
  userIp: nonEmptyString,
  userAgent: nonEmptyString
};
var cartItemDefinition = new RecordValue({
  options: {
    required: true
  },
  values: {
    productId: nonEmptyString,
    sku: nonEmptyString,
    name: nonEmptyString,
    price: nonEmptyString,
    quantity: nonEmptyString
  }
});
var cartDefinition2 = {
  items: new ArrayValue({
    each: cartItemDefinition
  })
};
var contextDefinition = {
  language: requiredNonEmptyString,
  country: requiredNonEmptyString,
  currency: currencyDefinition,
  user: new RecordValue({
    values: userDefinition
  }),
  view: new RecordValue({
    options: { required: true },
    values: viewDefinition
  })
};
var contextSchema = new Schema(contextDefinition);

// src/features/commerce/context/context-actions.ts
var setContext = createAction(
  "commerce/setContext",
  (payload) => validatePayload(payload, contextDefinition)
);
var setUser = createAction(
  "commerce/setUser",
  (payload) => {
    if (isNullOrUndefined(payload.userId) && isNullOrUndefined(payload.email)) {
      return {
        payload,
        error: serializeSchemaValidationError(
          new SchemaValidationError(
            "Either userId or email is required"
          )
        )
      };
    }
    return validatePayload(payload, userDefinition);
  }
);
var setView = createAction(
  "commerce/setView",
  (payload) => validatePayload(payload, viewDefinition)
);

// src/features/commerce/context/context-state.ts
var getContextInitialState = () => ({
  language: "",
  country: "",
  currency: "",
  view: {
    url: ""
  }
});

// src/features/commerce/context/context-slice.ts
var contextReducer = createReducer(
  getContextInitialState(),
  (builder) => {
    builder.addCase(setContext, (_, { payload }) => {
      return payload;
    }).addCase(setUser, (state, { payload }) => {
      state.user = payload;
    }).addCase(setView, (state, { payload }) => {
      state.view = payload;
    });
  }
);

// src/features/breadcrumb/breadcrumb-actions.ts
var deselectAllBreadcrumbs = createAction("breadcrumb/deselectAll");
var deselectAllNonBreadcrumbs = createAction(
  "breadcrumb/deselectAllNonBreadcrumbs"
);

// src/features/facets/generic/facet-actions-validation.ts
var facetIdDefinition = requiredNonEmptyString;

// src/features/facets/category-facet-set/category-facet-validate-payload.ts
var categoryFacetValueDefinition = {
  state: new Value({ required: true }),
  numberOfResults: new NumberValue({ required: true, min: 0 }),
  value: new StringValue({ required: true, emptyAllowed: true }),
  path: new ArrayValue({ required: true, each: requiredNonEmptyString }),
  moreValuesAvailable: new BooleanValue({ required: false })
};
function validateCategoryFacetValue(payload) {
  payload.children.forEach((child) => {
    validateCategoryFacetValue(child);
  });
  validatePayloadAndThrow(
    {
      state: payload.state,
      numberOfResults: payload.numberOfResults,
      value: payload.value,
      path: payload.path,
      moreValuesAvailable: payload.moreValuesAvailable
    },
    categoryFacetValueDefinition
  );
}

// src/features/facets/category-facet-set/category-facet-set-actions.ts
var categoryFacetPayloadDefinition = {
  facetId: facetIdDefinition,
  field: requiredNonEmptyString,
  delimitingCharacter: new StringValue({ required: false, emptyAllowed: true }),
  filterFacetCount: new BooleanValue({ required: false }),
  injectionDepth: new NumberValue({ required: false, min: 0 }),
  numberOfValues: new NumberValue({ required: false, min: 1 }),
  sortCriteria: new Value({ required: false }),
  basePath: new ArrayValue({ required: false, each: requiredNonEmptyString }),
  filterByBasePath: new BooleanValue({ required: false })
};
var defaultNumberOfValuesIncrement = 5;
var registerCategoryFacet = createAction(
  "categoryFacet/register",
  (payload) => validatePayload(payload, categoryFacetPayloadDefinition)
);
var toggleSelectCategoryFacetValue = createAction(
  "categoryFacet/toggleSelectValue",
  (payload) => {
    try {
      validatePayloadAndThrow(payload.facetId, requiredNonEmptyString);
      validateCategoryFacetValue(payload.selection);
      return { payload, error: null };
    } catch (error) {
      return { payload, error: serializeSchemaValidationError(error) };
    }
  }
);
var deselectAllCategoryFacetValues = createAction(
  "categoryFacet/deselectAll",
  (payload) => validatePayload(payload, categoryFacetPayloadDefinition.facetId)
);
var updateCategoryFacetNumberOfValues = createAction(
  "categoryFacet/updateNumberOfValues",
  (payload) => validatePayload(payload, {
    facetId: categoryFacetPayloadDefinition.facetId,
    numberOfValues: categoryFacetPayloadDefinition.numberOfValues
  })
);
var updateCategoryFacetSortCriterion = createAction(
  "categoryFacet/updateSortCriterion",
  (payload) => validatePayload(payload, {
    facetId: categoryFacetPayloadDefinition.facetId,
    criterion: new Value()
  })
);
var updateCategoryFacetBasePath = createAction(
  "categoryFacet/updateBasePath",
  (payload) => validatePayload(payload, {
    facetId: categoryFacetPayloadDefinition.facetId,
    basePath: new ArrayValue({ each: requiredNonEmptyString })
  })
);

// src/features/facets/facet-search-set/generic/generic-facet-search-validate-payload.ts
var facetSearchOptionsDefinition = {
  facetId: facetIdDefinition,
  captions: new RecordValue({ options: { required: false } }),
  numberOfValues: new NumberValue({ required: false, min: 1 }),
  query: new StringValue({ required: false, emptyAllowed: true })
};

// src/features/facets/facet-search-set/category/category-facet-search-actions.ts
var categoryFacetSearchResultDefinition = {
  path: new ArrayValue({
    required: true,
    each: requiredNonEmptyString
  }),
  displayValue: requiredEmptyAllowedString,
  rawValue: requiredEmptyAllowedString,
  count: new NumberValue({ required: true, min: 0 })
};
var selectCategoryFacetSearchResult = createAction(
  "categoryFacet/selectSearchResult",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    value: new RecordValue({ values: categoryFacetSearchResultDefinition })
  })
);
var registerCategoryFacetSearch = createAction(
  "categoryFacetSearch/register",
  (payload) => validatePayload(payload, facetSearchOptionsDefinition)
);

// src/features/facets/facet-search-set/specific/specific-facet-search-actions.ts
var selectFacetSearchResultPayloadDefinition = {
  facetId: facetIdDefinition,
  value: new RecordValue({
    values: {
      displayValue: requiredEmptyAllowedString,
      rawValue: requiredEmptyAllowedString,
      count: new NumberValue({ required: true, min: 0 })
    }
  })
};
var registerFacetSearch = createAction(
  "facetSearch/register",
  (payload) => validatePayload(payload, facetSearchOptionsDefinition)
);
var updateFacetSearch = createAction(
  "facetSearch/update",
  (payload) => validatePayload(payload, facetSearchOptionsDefinition)
);
var selectFacetSearchResult = createAction(
  "facetSearch/toggleSelectValue",
  (payload) => validatePayload(payload, selectFacetSearchResultPayloadDefinition)
);
var excludeFacetSearchResult = createAction(
  "facetSearch/toggleExcludeValue",
  (payload) => validatePayload(payload, selectFacetSearchResultPayloadDefinition)
);

// src/controllers/core/facets/_common/facet-option-definitions.ts
var facetId = new StringValue({
  regex: /^[a-zA-Z0-9-_]+$/
});
var field = new StringValue({ required: true });
var basePath = new ArrayValue({
  each: new StringValue()
});
var delimitingCharacter = new StringValue();
var filterByBasePath = new BooleanValue();
var filterFacetCount = new BooleanValue();
var injectionDepth = new NumberValue({ min: 0 });
var numberOfValues = new NumberValue({ min: 1 });
var generateAutomaticRanges = new BooleanValue({
  required: true
});
var captions = new RecordValue();
var query = new StringValue();
var facetSearchOptionDefinitions = {
  captions,
  numberOfValues,
  query
};
var facetSearch = new RecordValue({
  values: facetSearchOptionDefinitions
});
var allowedValues = new RecordValue({
  options: { required: false },
  values: {
    type: new StringValue({
      constrainTo: ["simple"],
      emptyAllowed: false,
      required: true
    }),
    values: new ArrayValue({
      required: true,
      max: 25,
      each: new StringValue({ emptyAllowed: false, required: true })
    })
  }
});
var hasBreadcrumbs = new BooleanValue();
var customSort = new ArrayValue({
  min: 1,
  max: 25,
  required: false,
  each: new StringValue({ emptyAllowed: false, required: true })
});

// src/features/facets/facet-set/facet-set-validate-payload.ts
var facetValueDefinition = {
  value: requiredNonEmptyString,
  numberOfResults: new NumberValue({ min: 0 }),
  state: requiredNonEmptyString
};

// src/features/facets/facet-set/facet-set-actions.ts
var facetRegistrationOptionsDefinition = {
  facetId: facetIdDefinition,
  field: new StringValue({ required: true, emptyAllowed: true }),
  filterFacetCount: new BooleanValue({ required: false }),
  injectionDepth: new NumberValue({ required: false, min: 0 }),
  numberOfValues: new NumberValue({ required: false, min: 1 }),
  sortCriteria: new Value({ required: false }),
  resultsMustMatch: new Value({ required: false }),
  allowedValues,
  customSort
};
var registerFacet = createAction(
  "facet/register",
  (payload) => validatePayload(payload, facetRegistrationOptionsDefinition)
);
var toggleSelectFacetValue = createAction(
  "facet/toggleSelectValue",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: facetValueDefinition })
  })
);
var toggleExcludeFacetValue = createAction(
  "facet/toggleExcludeValue",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: facetValueDefinition })
  })
);
var deselectAllFacetValues = createAction(
  "facet/deselectAll",
  (payload) => validatePayload(payload, facetIdDefinition)
);
var updateFacetSortCriterion = createAction(
  "facet/updateSortCriterion",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    criterion: new Value({ required: true })
  })
);
var updateFacetNumberOfValues = createAction(
  "facet/updateNumberOfValues",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    numberOfValues: new NumberValue({ required: true, min: 1 })
  })
);
var updateFacetIsFieldExpanded = createAction(
  "facet/updateIsFieldExpanded",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    isFieldExpanded: new BooleanValue({ required: true })
  })
);
var updateFreezeCurrentValues = createAction(
  "facet/updateFreezeCurrentValues",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    freezeCurrentValues: new BooleanValue({ required: true })
  })
);

// src/features/facet-options/facet-options-actions.ts
var updateFacetOptions = createAction(
  "facetOptions/update",
  (payload = { freezeFacetOrder: true }) => validatePayload(payload, {
    freezeFacetOrder: new BooleanValue({ required: false })
  })
);
var enableFacet = createAction(
  "facetOptions/facet/enable",
  (payload) => validatePayload(payload, facetIdDefinition)
);
var disableFacet = createAction(
  "facetOptions/facet/disable",
  (payload) => validatePayload(payload, facetIdDefinition)
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
        const id2 = yield this.determineVisitorId();
        yield this.setCurrentVisitorId(id2);
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
      const validateParams2 = (currentPayload) => this.validateParams(currentPayload, eventType);
      const processMeasurementProtocolConversionStep = (currentPayload) => usesMeasurementProtocol ? convertKeysToMeasurementProtocol(currentPayload) : currentPayload;
      const removeUnknownParameters = (currentPayload) => usesMeasurementProtocol ? this.removeUnknownParameters(currentPayload) : currentPayload;
      const processCustomParameters = (currentPayload) => usesMeasurementProtocol ? this.processCustomParameters(currentPayload) : this.mapCustomParametersToCustomData(currentPayload);
      const payloadToSend = yield [
        addTrackingIdStep,
        cleanPayloadStep,
        validateParams2,
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
    const keys2 = Object.keys(custom);
    let result = {};
    keys2.forEach((key) => {
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
(function(SearchPageEvents3) {
  SearchPageEvents3["interfaceLoad"] = "interfaceLoad";
  SearchPageEvents3["interfaceChange"] = "interfaceChange";
  SearchPageEvents3["didyoumeanAutomatic"] = "didyoumeanAutomatic";
  SearchPageEvents3["didyoumeanClick"] = "didyoumeanClick";
  SearchPageEvents3["resultsSort"] = "resultsSort";
  SearchPageEvents3["searchboxSubmit"] = "searchboxSubmit";
  SearchPageEvents3["searchboxClear"] = "searchboxClear";
  SearchPageEvents3["searchboxAsYouType"] = "searchboxAsYouType";
  SearchPageEvents3["breadcrumbFacet"] = "breadcrumbFacet";
  SearchPageEvents3["breadcrumbResetAll"] = "breadcrumbResetAll";
  SearchPageEvents3["documentQuickview"] = "documentQuickview";
  SearchPageEvents3["documentOpen"] = "documentOpen";
  SearchPageEvents3["omniboxAnalytics"] = "omniboxAnalytics";
  SearchPageEvents3["omniboxFromLink"] = "omniboxFromLink";
  SearchPageEvents3["searchFromLink"] = "searchFromLink";
  SearchPageEvents3["triggerNotify"] = "notify";
  SearchPageEvents3["triggerExecute"] = "execute";
  SearchPageEvents3["triggerQuery"] = "query";
  SearchPageEvents3["undoTriggerQuery"] = "undoQuery";
  SearchPageEvents3["triggerRedirect"] = "redirect";
  SearchPageEvents3["pagerResize"] = "pagerResize";
  SearchPageEvents3["pagerNumber"] = "pagerNumber";
  SearchPageEvents3["pagerNext"] = "pagerNext";
  SearchPageEvents3["pagerPrevious"] = "pagerPrevious";
  SearchPageEvents3["pagerScrolling"] = "pagerScrolling";
  SearchPageEvents3["staticFilterClearAll"] = "staticFilterClearAll";
  SearchPageEvents3["staticFilterSelect"] = "staticFilterSelect";
  SearchPageEvents3["staticFilterDeselect"] = "staticFilterDeselect";
  SearchPageEvents3["facetClearAll"] = "facetClearAll";
  SearchPageEvents3["facetSearch"] = "facetSearch";
  SearchPageEvents3["facetSelect"] = "facetSelect";
  SearchPageEvents3["facetSelectAll"] = "facetSelectAll";
  SearchPageEvents3["facetDeselect"] = "facetDeselect";
  SearchPageEvents3["facetExclude"] = "facetExclude";
  SearchPageEvents3["facetUnexclude"] = "facetUnexclude";
  SearchPageEvents3["facetUpdateSort"] = "facetUpdateSort";
  SearchPageEvents3["facetShowMore"] = "showMoreFacetResults";
  SearchPageEvents3["facetShowLess"] = "showLessFacetResults";
  SearchPageEvents3["queryError"] = "query";
  SearchPageEvents3["queryErrorBack"] = "errorBack";
  SearchPageEvents3["queryErrorClear"] = "errorClearQuery";
  SearchPageEvents3["queryErrorRetry"] = "errorRetry";
  SearchPageEvents3["recommendation"] = "recommendation";
  SearchPageEvents3["recommendationInterfaceLoad"] = "recommendationInterfaceLoad";
  SearchPageEvents3["recommendationOpen"] = "recommendationOpen";
  SearchPageEvents3["likeSmartSnippet"] = "likeSmartSnippet";
  SearchPageEvents3["dislikeSmartSnippet"] = "dislikeSmartSnippet";
  SearchPageEvents3["expandSmartSnippet"] = "expandSmartSnippet";
  SearchPageEvents3["collapseSmartSnippet"] = "collapseSmartSnippet";
  SearchPageEvents3["openSmartSnippetFeedbackModal"] = "openSmartSnippetFeedbackModal";
  SearchPageEvents3["closeSmartSnippetFeedbackModal"] = "closeSmartSnippetFeedbackModal";
  SearchPageEvents3["sendSmartSnippetReason"] = "sendSmartSnippetReason";
  SearchPageEvents3["expandSmartSnippetSuggestion"] = "expandSmartSnippetSuggestion";
  SearchPageEvents3["collapseSmartSnippetSuggestion"] = "collapseSmartSnippetSuggestion";
  SearchPageEvents3["showMoreSmartSnippetSuggestion"] = "showMoreSmartSnippetSuggestion";
  SearchPageEvents3["showLessSmartSnippetSuggestion"] = "showLessSmartSnippetSuggestion";
  SearchPageEvents3["openSmartSnippetSource"] = "openSmartSnippetSource";
  SearchPageEvents3["openSmartSnippetSuggestionSource"] = "openSmartSnippetSuggestionSource";
  SearchPageEvents3["openSmartSnippetInlineLink"] = "openSmartSnippetInlineLink";
  SearchPageEvents3["openSmartSnippetSuggestionInlineLink"] = "openSmartSnippetSuggestionInlineLink";
  SearchPageEvents3["recentQueryClick"] = "recentQueriesClick";
  SearchPageEvents3["clearRecentQueries"] = "clearRecentQueries";
  SearchPageEvents3["recentResultClick"] = "recentResultClick";
  SearchPageEvents3["clearRecentResults"] = "clearRecentResults";
  SearchPageEvents3["noResultsBack"] = "noResultsBack";
  SearchPageEvents3["showMoreFoldedResults"] = "showMoreFoldedResults";
  SearchPageEvents3["showLessFoldedResults"] = "showLessFoldedResults";
  SearchPageEvents3["copyToClipboard"] = "copyToClipboard";
  SearchPageEvents3["caseSendEmail"] = "Case.SendEmail";
  SearchPageEvents3["feedItemTextPost"] = "FeedItem.TextPost";
  SearchPageEvents3["caseAttach"] = "caseAttach";
  SearchPageEvents3["caseDetach"] = "caseDetach";
  SearchPageEvents3["retryGeneratedAnswer"] = "retryGeneratedAnswer";
  SearchPageEvents3["likeGeneratedAnswer"] = "likeGeneratedAnswer";
  SearchPageEvents3["dislikeGeneratedAnswer"] = "dislikeGeneratedAnswer";
  SearchPageEvents3["openGeneratedAnswerSource"] = "openGeneratedAnswerSource";
  SearchPageEvents3["generatedAnswerStreamEnd"] = "generatedAnswerStreamEnd";
  SearchPageEvents3["generatedAnswerSourceHover"] = "generatedAnswerSourceHover";
  SearchPageEvents3["generatedAnswerCopyToClipboard"] = "generatedAnswerCopyToClipboard";
  SearchPageEvents3["generatedAnswerHideAnswers"] = "generatedAnswerHideAnswers";
  SearchPageEvents3["generatedAnswerShowAnswers"] = "generatedAnswerShowAnswers";
  SearchPageEvents3["generatedAnswerExpand"] = "generatedAnswerExpand";
  SearchPageEvents3["generatedAnswerCollapse"] = "generatedAnswerCollapse";
  SearchPageEvents3["generatedAnswerFeedbackSubmit"] = "generatedAnswerFeedbackSubmit";
  SearchPageEvents3["rephraseGeneratedAnswer"] = "rephraseGeneratedAnswer";
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

// src/utils/facet-utils.ts
function sortFacets(facets, sortOrder) {
  const payloadMap = {};
  facets.forEach((f2) => payloadMap[f2.facetId] = f2);
  const sortedFacets = [];
  sortOrder.forEach((facetId2) => {
    if (facetId2 in payloadMap) {
      sortedFacets.push(payloadMap[facetId2]);
      delete payloadMap[facetId2];
    }
  });
  const remainingFacets = Object.values(payloadMap);
  return [...sortedFacets, ...remainingFacets];
}

// src/features/facets/generic/interfaces/generic-facet-request.ts
function getFacetRequests(state) {
  return Object.values(state).map(
    (slice) => slice.request
  );
}

// src/features/advanced-search-queries/advanced-search-queries-state.ts
var getAdvancedSearchQueriesInitialState = () => ({
  cq: "",
  cqWasSet: false,
  aq: "",
  aqWasSet: false,
  lq: "",
  lqWasSet: false,
  dq: "",
  dqWasSet: false,
  defaultFilters: {
    cq: "",
    aq: "",
    lq: "",
    dq: ""
  }
});

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

// src/utils/version.ts
var VERSION = "2.63.3";
var COVEO_FRAMEWORK = ["@coveo/atomic", "@coveo/quantic"];

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

// src/features/search-hub/search-hub-state.ts
var getSearchHubInitialState = () => "default";

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
var DESIRED_COUNT_MINIMUM = 1;
var DESIRED_COUNT_MAXIMUM = 20;
var DESIRED_COUNT_DEFAULT = 5;
var NUMBER_OF_VALUE_MINIMUM = 1;
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
var categoryFacetRequestSelector = (state, id2) => {
  return state.categoryFacetSet[id2]?.request;
};
var categoryFacetRequestSelectedValuesSelector = (state, facetId2) => {
  const facetRequest = categoryFacetRequestSelector(state, facetId2);
  return findActiveValueAncestry(facetRequest?.currentValues ?? []);
};

// src/features/facets/category-facet-set/category-facet-set-state.ts
function getCategoryFacetSetInitialState() {
  return {};
}

// src/features/facets/range-facets/date-facet-set/date-facet-set-state.ts
function getDateFacetSetSliceInitialState(request) {
  return { request };
}
function getDateFacetSetInitialState() {
  return {};
}

// src/features/facets/range-facets/numeric-facet-set/numeric-facet-set-state.ts
function getNumericFacetSetSliceInitialState(request) {
  return { request };
}
function getNumericFacetSetInitialState() {
  return {};
}

// src/features/facets/facet-set/facet-set-state.ts
function getFacetSetSliceInitialState(request) {
  return { request, hasBreadcrumbs: true };
}
function getFacetSetInitialState() {
  return {};
}

// src/features/facets/facet-set/facet-set-analytics-actions-utils.ts
var buildFacetBaseMetadata = (facetId2, state) => {
  const facet = getFacetRequest(state, facetId2);
  const facetField = facet ? facet.field : "";
  const facetTitle = getFacetTitle(facetField, facetId2);
  return { facetId: facetId2, facetField, facetTitle };
};
function buildFacetSelectionChangeMetadata(payload, state) {
  const { facetId: facetId2, facetValue } = payload;
  const base = buildFacetBaseMetadata(facetId2, state);
  const facetType = getFacetType(state, facetId2);
  return {
    ...base,
    facetValue: facetType === "hierarchical" ? getCategoryFacetSelectedValue(state, facetId2) : facetValue
  };
}
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
  getFacetRequests2(state).forEach((facetRequest, facetIndex) => {
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
var getFacetRequests2 = (state) => {
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
var getCategoryFacetSelectedValue = (state, facetId2) => {
  const selectedCategoryFacetValues = categoryFacetRequestSelectedValuesSelector(state, facetId2);
  return selectedCategoryFacetValues.map((selectedCategoryFacetValue) => selectedCategoryFacetValue.value).join(";");
};
var mapCategoryFacetValueToAnalytics = (state, facetId2) => {
  const valuePosition = 1;
  const value = getCategoryFacetSelectedValue(state, facetId2);
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
var getFacetTitle = (field2, facetId2) => {
  return `${field2}_${facetId2}`;
};
var getFacetRequest = (state, facetId2) => {
  return state.facetSet[facetId2]?.request || state.categoryFacetSet[facetId2]?.request || state.dateFacetSet[facetId2]?.request || state.numericFacetSet[facetId2]?.request || state.automaticFacetSet.set[facetId2]?.response;
};
var getFacetType = (state, facetId2) => {
  const facet = getFacetRequest(state, facetId2);
  return facet ? facet.type : "specific";
};

// src/features/query/query-state.ts
var getQueryInitialState = () => ({
  q: "",
  enableQuerySyntax: false
});

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
var SortBy = /* @__PURE__ */ ((SortBy3) => {
  SortBy3["Relevancy"] = "relevancy";
  SortBy3["QRE"] = "qre";
  SortBy3["Date"] = "date";
  SortBy3["Field"] = "field";
  SortBy3["NoSort"] = "nosort";
  return SortBy3;
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
    this.getFacetRequest = (id2) => {
      return this.state.facetSet?.[id2]?.request || this.state.categoryFacetSet?.[id2]?.request || this.state.dateFacetSet?.[id2]?.request || this.state.numericFacetSet?.[id2]?.request || this.state.automaticFacetSet?.set[id2]?.response;
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
  getFacetMetadata(facetId2, facetValue) {
    const facetRequest = this.getFacetRequest(facetId2);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId: facetId2,
      facetField,
      facetValue,
      facetTitle: `${facetField}_${facetId2}`
    };
  }
  getFacetClearAllMetadata(facetId2) {
    const facetRequest = this.getFacetRequest(facetId2);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId: facetId2,
      facetField,
      facetTitle: `${facetField}_${facetId2}`
    };
  }
  getFacetUpdateSortMetadata(facetId2, criteria) {
    const facetRequest = this.getFacetRequest(facetId2);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId: facetId2,
      facetField,
      criteria,
      facetTitle: `${facetField}_${facetId2}`
    };
  }
  getRangeBreadcrumbFacetMetadata(facetId2, facetValue) {
    const facetRequest = this.getFacetRequest(facetId2);
    const facetField = facetRequest?.field ?? "";
    return {
      ...this.getBaseMetadata(),
      facetId: facetId2,
      facetField,
      facetRangeEnd: facetValue.end,
      facetRangeEndInclusive: facetValue.endInclusive,
      facetRangeStart: facetValue.start,
      facetTitle: `${facetField}_${facetId2}`
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
  getOmniboxAnalyticsMetadata(id2, suggestion) {
    const querySuggest = this.state.querySuggest && this.state.querySuggest[id2];
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
var getPageID = () => {
  const actions2 = historyStore.getHistory();
  const lastPageView = actions2.reverse().find((action) => {
    return action.name === "PageView" && action.value;
  });
  if (!lastPageView) {
    return "";
  }
  return lastPageView.value;
};

// src/features/pipeline/pipeline-state.ts
var getPipelineInitialState = () => "";

// src/features/analytics/analytics-utils.ts
function makeBasicNewSearchAnalyticsAction(actionCause, getState) {
  return {
    ...new SearchAnalyticsProvider(getState).getBaseMetadata(),
    actionCause,
    type: actionCause
  };
}
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

// src/features/search/search-analytics-actions.ts
var logFetchMoreResults = () => makeAnalyticsAction(
  "search/logFetchMoreResults",
  (client) => client.makeFetchMoreResults()
);
var logQueryError = (error) => makeAnalyticsAction(
  "search/queryError",
  (client, state) => client.makeQueryError({
    query: state.query?.q || getQueryInitialState().q,
    aq: state.advancedSearchQueries?.aq || getAdvancedSearchQueriesInitialState().aq,
    cq: state.advancedSearchQueries?.cq || getAdvancedSearchQueriesInitialState().cq,
    dq: state.advancedSearchQueries?.dq || getAdvancedSearchQueriesInitialState().dq,
    errorType: error.type,
    errorMessage: error.message
  })
);

// src/features/sort/sort.ts
var SortBy2 = /* @__PURE__ */ ((SortBy3) => {
  SortBy3["Relevance"] = "relevance";
  SortBy3["Fields"] = "fields";
  return SortBy3;
})(SortBy2 || {});
var SortDirection = /* @__PURE__ */ ((SortDirection2) => {
  SortDirection2["Ascending"] = "asc";
  SortDirection2["Descending"] = "desc";
  return SortDirection2;
})(SortDirection || {});
var buildRelevanceSortCriterion2 = () => ({
  by: "relevance" /* Relevance */
});
var sortCriterionDefinition = new RecordValue({
  options: {
    required: false
  },
  values: {
    by: new EnumValue({ enum: SortBy2, required: true }),
    fields: new ArrayValue({
      each: new RecordValue({
        values: {
          name: new StringValue(),
          direction: new EnumValue({ enum: SortDirection })
        }
      })
    })
  }
});

// src/features/product-listing/product-listing-analytics.ts
var logProductListing = () => makeProductListingAnalyticsAction(
  "analytics/productListing/load",
  (client) => client.makeInterfaceLoad(),
  (getState) => new ProductListingAnalyticsProvider(getState)
);

// src/features/product-listing/product-listing-actions.ts
var setProductListingUrl = createAction(
  "productlisting/setUrl",
  (payload) => validatePayload(payload, {
    url: new StringValue({
      required: true,
      url: true
    })
  })
);
var setAdditionalFields = createAction(
  "productlisting/setAdditionalFields",
  (payload) => validatePayload(payload, {
    additionalFields: new ArrayValue({
      required: true,
      each: new StringValue({
        required: true,
        emptyAllowed: false
      })
    })
  })
);
var fetchProductListing = createAsyncThunk(
  "productlisting/fetch",
  async (_action, { getState, dispatch, rejectWithValue, extra }) => {
    const state = getState();
    const { apiClient } = extra;
    const fetched = await apiClient.getProducts(
      await buildProductListingRequest(state)
    );
    if (isErrorResponse(fetched)) {
      dispatch(logQueryError(fetched.error));
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success,
      analyticsAction: logProductListing()
    };
  }
);
var buildProductListingRequest = async (state) => {
  const facets = getFacets(state);
  const visitorId = await getVisitorID(state.configuration.analytics);
  return {
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    platformUrl: state.configuration.platformUrl,
    url: state.productListing?.url,
    ...state.configuration.analytics.enabled && visitorId ? { clientId: visitorId } : {},
    ...state.productListing.additionalFields?.length ? {
      additionalFields: state.productListing.additionalFields
    } : {},
    ...state.productListing.advancedParameters && hasOneAdvancedParameterActive(state.productListing.advancedParameters) ? {
      advancedParameters: state.productListing.advancedParameters || {}
    } : {},
    ...facets.length && {
      facets: {
        requests: facets
      }
    },
    ...state.pagination && {
      pagination: {
        numberOfValues: state.pagination.numberOfResults,
        page: Math.ceil(
          state.pagination.firstResult / (state.pagination.numberOfResults || 1)
        ) + 1
      }
    },
    ...(state.sort?.by || "relevance" /* Relevance */) !== "relevance" /* Relevance */ && {
      sort: state.sort
    },
    ...state.context && {
      userContext: state.context.contextValues
    }
  };
};
function hasOneAdvancedParameterActive(advanced) {
  return advanced.debug;
}
function getFacets(state) {
  return sortFacets(getAllFacets(state), state.facetOrder ?? []);
}
function getAllFacets(state) {
  return [
    ...getFacetRequests(state.facetSet ?? {}),
    ...getFacetRequests(state.numericFacetSet ?? {}),
    ...getFacetRequests(state.dateFacetSet ?? {}),
    ...getFacetRequests(state.categoryFacetSet ?? {})
  ];
}

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

// src/features/facets/generic/facet-actions.ts
var updateFacetAutoSelection = createAction(
  "facet/updateFacetAutoSelection",
  (payload) => validatePayload(payload, {
    allow: new BooleanValue({ required: true })
  })
);

// src/api/analytics/instant-result-analytics.ts
var InstantResultsAnalyticsProvider = class extends SearchAnalyticsProvider {
  constructor(getState) {
    super(getState);
    this.getState = getState;
  }
  get activeInstantResultQuery() {
    const state = this.getState().instantResults;
    for (const id2 in state) {
      for (const query2 in state[id2].cache) {
        if (state[id2].cache[query2].isActive) {
          return state[id2].q;
        }
      }
    }
    return null;
  }
  get activeInstantResultCache() {
    const state = this.getState().instantResults;
    for (const id2 in state) {
      for (const query2 in state[id2].cache) {
        if (state[id2].cache[query2].isActive) {
          return state[id2].cache[query2];
        }
      }
    }
    return null;
  }
  get results() {
    return this.activeInstantResultCache?.results;
  }
  get queryText() {
    return this.activeInstantResultQuery ?? getQueryInitialState().q;
  }
  get responseTime() {
    return this.activeInstantResultCache?.duration ?? getSearchInitialState().duration;
  }
  get numberOfResults() {
    return this.activeInstantResultCache?.totalCountFiltered ?? getSearchInitialState().response.totalCountFiltered;
  }
  getSearchUID() {
    const searchUid = this.activeInstantResultCache?.searchUid;
    return searchUid || super.getSearchUID();
  }
};

// src/features/instant-results/instant-result-analytics-actions.ts
var logInstantResultsSearch = () => makeAnalyticsAction(
  "analytics/instantResult/searchboxAsYouType",
  (client) => client.makeSearchboxAsYouType(),
  (getState) => new InstantResultsAnalyticsProvider(getState)
);
var searchboxAsYouType = () => ({
  actionCause: "searchboxAsYouType" /* searchboxAsYouType */
});

// src/features/instant-results/instant-results-actions.ts
var instantResultsRegisterDefinition = {
  id: requiredNonEmptyString
};
var instantResultsQueryDefinition = {
  ...instantResultsRegisterDefinition,
  q: requiredEmptyAllowedString
};
var registerInstantResults = createAction(
  "instantResults/register",
  (payload) => validatePayload(payload, instantResultsRegisterDefinition)
);
var updateInstantResultsQuery = createAction(
  "instantResults/updateQuery",
  (payload) => validatePayload(payload, instantResultsQueryDefinition)
);
var clearExpiredResults = createAction(
  "instantResults/clearExpired",
  (payload) => validatePayload(payload, instantResultsRegisterDefinition)
);

// src/features/pagination/pagination-actions.ts
var numberValue = new NumberValue({ required: true, min: 0 });
var registerNumberOfResults = createAction(
  "pagination/registerNumberOfResults",
  (payload) => validatePayload(payload, numberValue)
);
var updateNumberOfResults = createAction(
  "pagination/updateNumberOfResults",
  (payload) => validatePayload(payload, numberValue)
);
var registerPage = createAction(
  "pagination/registerPage",
  (payload) => validatePayload(payload, numberValue)
);
var updatePage = createAction(
  "pagination/updatePage",
  (payload) => validatePayload(payload, numberValue)
);
var nextPage = createAction("pagination/nextPage");
var previousPage = createAction("pagination/previousPage");

// src/features/query/query-actions.ts
var updateQuery = createAction(
  "query/updateQuery",
  (payload) => validatePayload(payload, {
    q: new StringValue(),
    enableQuerySyntax: new BooleanValue()
  })
);

// src/features/configuration/analytics-params.ts
var fromAnalyticsStateToAnalyticsParams = async (s, eventDescription) => {
  const isNextAnalytics = s.analyticsMode === "next";
  return {
    analytics: {
      clientId: await getVisitorID(s),
      clientTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
      documentReferrer: s.originLevel3,
      originContext: s.originContext,
      ...eventDescription && {
        actionCause: eventDescription.actionCause,
        customData: eventDescription.customData
      },
      ...eventDescription && !isNextAnalytics && {
        customData: eventDescription.customData
      },
      ...s.userDisplayName && { userDisplayName: s.userDisplayName },
      ...s.documentLocation && { documentLocation: s.documentLocation },
      ...s.deviceId && { deviceId: s.deviceId },
      ...getPageID() && { pageId: getPageID() },
      ...isNextAnalytics && s.trackingId && { trackingId: s.trackingId },
      ...{ capture: isNextAnalytics },
      ...isNextAnalytics && { source: getAnalyticsSource(s) }
    }
  };
};

// src/features/search-and-folding/search-and-folding-request.ts
var buildSearchAndFoldingLoadCollectionRequest = async (state, eventDescription) => {
  return {
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    url: state.configuration.search.apiBaseUrl,
    locale: state.configuration.search.locale,
    debug: state.debug,
    tab: state.configuration.analytics.originLevel2,
    referrer: state.configuration.analytics.originLevel3,
    timezone: state.configuration.search.timezone,
    ...state.configuration.analytics.enabled && {
      visitorId: await getVisitorID(state.configuration.analytics),
      actionsHistory: historyStore.getHistory()
    },
    ...state.advancedSearchQueries?.aq && {
      aq: state.advancedSearchQueries.aq
    },
    ...state.advancedSearchQueries?.cq && {
      cq: state.advancedSearchQueries.cq
    },
    ...state.advancedSearchQueries?.lq && {
      lq: state.advancedSearchQueries.lq
    },
    ...state.advancedSearchQueries?.dq && {
      dq: state.advancedSearchQueries.dq
    },
    ...state.context && {
      context: state.context.contextValues
    },
    ...state.fields && !state.fields.fetchAllFields && {
      fieldsToInclude: state.fields.fieldsToInclude
    },
    ...state.dictionaryFieldContext && {
      dictionaryFieldContext: state.dictionaryFieldContext.contextValues
    },
    ...state.pipeline && {
      pipeline: state.pipeline
    },
    ...state.query && {
      q: state.query.q,
      enableQuerySyntax: state.query.enableQuerySyntax
    },
    ...state.searchHub && {
      searchHub: state.searchHub
    },
    ...state.sortCriteria && {
      sortCriteria: state.sortCriteria
    },
    ...state.configuration.analytics.enabled && await fromAnalyticsStateToAnalyticsParams(
      state.configuration.analytics,
      eventDescription
    ),
    ...state.excerptLength && !isNullOrUndefined(state.excerptLength.length) && {
      excerptLength: state.excerptLength.length
    },
    ...state.configuration.search.authenticationProviders.length && {
      authentication: state.configuration.search.authenticationProviders.join(",")
    }
  };
};

// src/features/search-and-folding/legacy/search-and-folding-request.ts
var buildSearchAndFoldingLoadCollectionRequest2 = async (state, eventDescription) => {
  return {
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    url: state.configuration.search.apiBaseUrl,
    locale: state.configuration.search.locale,
    debug: state.debug,
    tab: state.configuration.analytics.originLevel2,
    referrer: state.configuration.analytics.originLevel3,
    timezone: state.configuration.search.timezone,
    ...state.configuration.analytics.enabled && {
      visitorId: await getVisitorID(state.configuration.analytics),
      actionsHistory: historyStore.getHistory()
    },
    ...state.advancedSearchQueries?.aq && {
      aq: state.advancedSearchQueries.aq
    },
    ...state.advancedSearchQueries?.cq && {
      cq: state.advancedSearchQueries.cq
    },
    ...state.advancedSearchQueries?.lq && {
      lq: state.advancedSearchQueries.lq
    },
    ...state.advancedSearchQueries?.dq && {
      dq: state.advancedSearchQueries.dq
    },
    ...state.context && {
      context: state.context.contextValues
    },
    ...state.fields && !state.fields.fetchAllFields && {
      fieldsToInclude: state.fields.fieldsToInclude
    },
    ...state.dictionaryFieldContext && {
      dictionaryFieldContext: state.dictionaryFieldContext.contextValues
    },
    ...state.pipeline && {
      pipeline: state.pipeline
    },
    ...state.query && {
      q: state.query.q,
      enableQuerySyntax: state.query.enableQuerySyntax
    },
    ...state.searchHub && {
      searchHub: state.searchHub
    },
    ...state.sortCriteria && {
      sortCriteria: state.sortCriteria
    },
    ...state.configuration.analytics.enabled && await fromAnalyticsStateToAnalyticsParams(
      state.configuration.analytics,
      eventDescription
    ),
    ...state.excerptLength && !isNullOrUndefined(state.excerptLength.length) && {
      excerptLength: state.excerptLength.length
    },
    ...state.configuration.search.authenticationProviders.length && {
      authentication: state.configuration.search.authenticationProviders.join(",")
    }
  };
};

// src/api/search/date/relative-date.ts
var import_dayjs2 = __toESM(require_dayjs_min());
var import_quarterOfYear = __toESM(require_quarterOfYear());

// src/api/search/date/date-format.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
import_dayjs.default.extend(import_customParseFormat.default);
var API_DATE_FORMAT = "YYYY/MM/DD@HH:mm:ss";
var API_DATE_MINIMUM = "1401-01-01";
function parseDate(date, format) {
  const parsedDate = (0, import_dayjs.default)(date, format);
  if (!parsedDate.isValid() && !format) {
    return (0, import_dayjs.default)(date, API_DATE_FORMAT);
  }
  return parsedDate;
}
function formatDateForSearchApi(date) {
  return date.format(API_DATE_FORMAT);
}
function validateAbsoluteDate(date, dateFormat) {
  const dayJSDate = parseDate(date, dateFormat);
  if (!dayJSDate.isValid()) {
    const provideFormat = ". Please provide a date format string in the configuration options. See https://day.js.org/docs/en/parse/string-format for more information.";
    const withFormat = ` with the format "${dateFormat}"`;
    throw new Error(
      `Could not parse the provided date "${date}"${dateFormat ? withFormat : provideFormat}`
    );
  }
  assertDateAboveAPIMinimum(dayJSDate);
}
function assertDateAboveAPIMinimum(date) {
  if (date.isBefore(API_DATE_MINIMUM)) {
    throw new Error(
      `Date is before year 1401, which is unsupported by the API: ${date}`
    );
  }
}

// src/api/search/date/relative-date.ts
import_dayjs2.default.extend(import_quarterOfYear.default);
var validRelativeDatePeriods = ["past", "now", "next"];
var validRelativeDateUnits = [
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "quarter",
  "year"
];
var buildRelativeDateDefinition = (period) => {
  const isNow = period === "now";
  return {
    amount: new NumberValue({ required: !isNow, min: 1 }),
    unit: new StringValue({
      required: !isNow,
      constrainTo: validRelativeDateUnits
    }),
    period: new StringValue({
      required: true,
      constrainTo: validRelativeDatePeriods
    })
  };
};
function validateRelativeDate(date) {
  if (typeof date === "string" && !isRelativeDateFormat(date)) {
    throw new Error(
      `The value "${date}" is not respecting the relative date format "period-amount-unit"`
    );
  }
  const relativeDate = typeof date === "string" ? parseRelativeDate(date) : date;
  new Schema(buildRelativeDateDefinition(relativeDate.period)).validate(
    relativeDate
  );
  const dayJsDate = relativeToAbsoluteDate(relativeDate);
  const stringifiedDate = JSON.stringify(relativeDate);
  if (!dayJsDate.isValid()) {
    throw new Error(`Date is invalid: ${stringifiedDate}`);
  }
  assertDateAboveAPIMinimum(dayJsDate);
}
function serializeRelativeDate(relativeDate) {
  const { period, amount, unit } = relativeDate;
  switch (period) {
    case "past":
    case "next":
      return `${period}-${amount}-${unit}`;
    case "now":
      return period;
  }
}
function relativeToAbsoluteDate(relativeDate) {
  const { period, amount, unit } = relativeDate;
  switch (period) {
    case "past":
      return (0, import_dayjs2.default)().subtract(amount, unit);
    case "next":
      return (0, import_dayjs2.default)().add(amount, unit);
    case "now":
      return (0, import_dayjs2.default)();
  }
}
function formatRelativeDateForSearchApi(relativeDate) {
  return formatDateForSearchApi(
    relativeToAbsoluteDate(parseRelativeDate(relativeDate))
  );
}
function splitDate(date) {
  return date.toLocaleLowerCase().split("-");
}
function isRelativeDateFormat(date) {
  const [period, amount, unit] = splitDate(date);
  if (period === "now") {
    return true;
  }
  if (!validRelativeDatePeriods.includes(period)) {
    return false;
  }
  if (!validRelativeDateUnits.includes(unit)) {
    return false;
  }
  const intAmount = parseInt(amount);
  if (isNaN(intAmount) || intAmount <= 0) {
    return false;
  }
  return true;
}
function isRelativeDate(date) {
  return !!date && typeof date === "object" && "period" in date;
}
function parseRelativeDate(date) {
  const [period, amount, unit] = splitDate(date);
  if (period === "now") {
    return {
      period: "now"
    };
  }
  return {
    period,
    amount: amount ? parseInt(amount) : void 0,
    unit: unit ? unit : void 0
  };
}

// src/features/facets/range-facets/date-facet-set/interfaces/request.ts
function isDateFacetRequest(request) {
  return request.type === "dateRange";
}

// src/features/search/search-mappings.ts
function formatStartFacetValue(value) {
  return `start${value}`;
}
function formatEndFacetValue(value) {
  return `end${value}`;
}
var initialSearchMappings = () => ({
  dateFacetValueMap: {}
});
function mapDateRangeRequest(value, facetId2, mappings) {
  let start = value.start;
  let end = value.end;
  if (isRelativeDateFormat(start)) {
    start = formatRelativeDateForSearchApi(start);
    mappings.dateFacetValueMap[facetId2][formatStartFacetValue(start)] = value.start;
  }
  if (isRelativeDateFormat(end)) {
    end = formatRelativeDateForSearchApi(end);
    mappings.dateFacetValueMap[facetId2][formatEndFacetValue(end)] = value.end;
  }
  return { ...value, start, end };
}
function mapFacetRequest(facetRequest, mappings) {
  if (isDateFacetRequest(facetRequest)) {
    const { facetId: facetId2, currentValues } = facetRequest;
    mappings.dateFacetValueMap[facetId2] = {};
    return {
      ...facetRequest,
      currentValues: currentValues.map(
        (value) => mapDateRangeRequest(value, facetId2, mappings)
      )
    };
  }
  return facetRequest;
}
function mapSearchRequest(searchRequest) {
  const mappings = initialSearchMappings();
  const request = {
    ...searchRequest,
    facets: searchRequest.facets?.map(
      (facetRequest) => mapFacetRequest(facetRequest, mappings)
    )
  };
  return { request, mappings };
}
function mapDateRangeResponse(value, facetId2, mappings) {
  return {
    ...value,
    start: mappings.dateFacetValueMap[facetId2][formatStartFacetValue(value.start)] || value.start,
    end: mappings.dateFacetValueMap[facetId2][formatEndFacetValue(value.end)] || value.end
  };
}
function isDateFacetResponse(facetResponse, mappings) {
  return facetResponse.facetId in mappings.dateFacetValueMap;
}
function mapFacetResponse(facetResponse, mappings) {
  if (isDateFacetResponse(facetResponse, mappings)) {
    return {
      ...facetResponse,
      values: facetResponse.values.map(
        (value) => mapDateRangeResponse(value, facetResponse.facetId, mappings)
      )
    };
  }
  return facetResponse;
}
function mapSearchResponse(response, mappings) {
  if ("success" in response) {
    const success = {
      ...response.success,
      facets: response.success.facets?.map(
        (facetResponse) => mapFacetResponse(facetResponse, mappings)
      )
    };
    return { success };
  }
  return response;
}

// src/features/pagination/pagination-constants.ts
var minimumPage = 1;
var maximumNumberOfResultsFromIndex = 5e3;

// src/features/search/search-request.ts
var buildSearchRequest = async (state, eventDescription) => {
  const cq = buildConstantQuery(state);
  const facets = getFacets2(state);
  const automaticFacets = getAutomaticFacets2(state);
  const sharedWithFoldingRequest = state.configuration.analytics.analyticsMode === "legacy" ? await buildSearchAndFoldingLoadCollectionRequest2(
    state,
    eventDescription
  ) : await buildSearchAndFoldingLoadCollectionRequest(
    state,
    eventDescription
  );
  const getNumberOfResultsWithinIndexLimit = () => {
    if (!state.pagination) {
      return void 0;
    }
    const isOverIndexLimit = state.pagination.firstResult + state.pagination.numberOfResults > maximumNumberOfResultsFromIndex;
    if (isOverIndexLimit) {
      return maximumNumberOfResultsFromIndex - state.pagination.firstResult;
    }
    return state.pagination.numberOfResults;
  };
  return mapSearchRequest({
    ...sharedWithFoldingRequest,
    ...state.didYouMean && {
      queryCorrection: {
        enabled: state.didYouMean.enableDidYouMean && state.didYouMean.queryCorrectionMode === "next",
        options: {
          automaticallyCorrect: state.didYouMean.automaticallyCorrectQuery ? "whenNoResults" : "never"
        }
      },
      enableDidYouMean: state.didYouMean.enableDidYouMean && state.didYouMean.queryCorrectionMode === "legacy"
    },
    ...cq && { cq },
    ...facets.length && { facets },
    ...state.pagination && {
      numberOfResults: getNumberOfResultsWithinIndexLimit(),
      firstResult: state.pagination.firstResult
    },
    ...state.facetOptions && {
      facetOptions: { freezeFacetOrder: state.facetOptions.freezeFacetOrder }
    },
    ...state.folding?.enabled && {
      filterField: state.folding.fields.collection,
      childField: state.folding.fields.parent,
      parentField: state.folding.fields.child,
      filterFieldRange: state.folding.filterFieldRange
    },
    ...state.automaticFacetSet && {
      generateAutomaticFacets: {
        desiredCount: state.automaticFacetSet.desiredCount,
        numberOfValues: state.automaticFacetSet.numberOfValues,
        currentFacets: automaticFacets
      }
    },
    ...state.generatedAnswer && {
      pipelineRuleParameters: {
        mlGenerativeQuestionAnswering: {
          responseFormat: state.generatedAnswer.responseFormat,
          citationsFieldToInclude: state.generatedAnswer.fieldsToIncludeInCitations
        }
      }
    }
  });
};
function getFacets2(state) {
  return sortFacets(getAllEnabledFacets(state), state.facetOrder ?? []);
}
function getAutomaticFacets2(state) {
  const facets = state.automaticFacetSet?.set;
  return facets ? Object.values(facets).map((facet) => facet.response).map(responseToAutomaticFacetRequest).filter((facetRequest) => facetRequest.currentValues.length > 0) : void 0;
}
function responseToAutomaticFacetRequest(response) {
  const { field: field2, label, values } = response;
  const selectedValues = values.filter((value) => value.state === "selected");
  return {
    field: field2,
    label,
    currentValues: selectedValues
  };
}
function getAllEnabledFacets(state) {
  return getAllFacets2(state).filter(
    ({ facetId: facetId2 }) => state.facetOptions?.facets[facetId2]?.enabled ?? true
  );
}
function getAllFacets2(state) {
  return [
    ...getSpecificFacetRequests(state.facetSet ?? {}),
    ...getRangeFacetRequests(state.numericFacetSet ?? {}),
    ...getRangeFacetRequests(state.dateFacetSet ?? {}),
    ...getFacetRequests(state.categoryFacetSet ?? {})
  ];
}
function getSpecificFacetRequests(state) {
  return getFacetRequests(state).map((request) => {
    if (request.sortCriteria === "alphanumericDescending") {
      return {
        ...request,
        sortCriteria: {
          type: "alphanumeric",
          order: "descending"
        }
      };
    }
    return request;
  });
}
function getRangeFacetRequests(state) {
  return getFacetRequests(state).map((request) => {
    const currentValues = request.currentValues;
    const hasActiveValues = currentValues.some(({ state: state2 }) => state2 !== "idle");
    if (request.generateAutomaticRanges && !hasActiveValues) {
      return { ...request, currentValues: [] };
    }
    return request;
  });
}
function buildConstantQuery(state) {
  const cq = state.advancedSearchQueries?.cq.trim() || "";
  const activeTab = Object.values(state.tabSet || {}).find(
    (tab) => tab.isActive
  );
  const tabExpression = activeTab?.expression.trim() || "";
  const filterExpressions = getStaticFilterExpressions(state);
  return [cq, tabExpression, ...filterExpressions].filter((expression) => !!expression).join(" AND ");
}
function getStaticFilterExpressions(state) {
  const filters = Object.values(state.staticFilterSet || {});
  return filters.map((filter) => {
    const selected = filter.values.filter(
      (value) => value.state === "selected" && !!value.expression.trim()
    );
    const expression = selected.map((value) => value.expression).join(" OR ");
    return selected.length > 1 ? `(${expression})` : expression;
  });
}

// src/utils/url-utils.ts
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

// src/api/search/search-api-client.ts
var isSuccessResponse = (r2) => {
  return r2.success !== void 0;
};
var isErrorResponse2 = (r2) => {
  return r2.error !== void 0;
};

// src/features/did-you-mean/did-you-mean-actions.ts
var enableDidYouMean = createAction("didYouMean/enable");
var disableDidYouMean = createAction("didYouMean/disable");
var disableAutomaticQueryCorrection = createAction(
  "didYouMean/automaticCorrections/disable"
);
var enableAutomaticQueryCorrection = createAction(
  "didYouMean/automaticCorrections/enable"
);
var applyDidYouMeanCorrection = createAction(
  "didYouMean/correction",
  (payload) => validatePayload(payload, requiredNonEmptyString)
);
var setCorrectionMode = createAction(
  "didYouMean/automaticCorrections/mode",
  (payload) => validatePayload(
    payload,
    new StringValue({
      constrainTo: ["next", "legacy"],
      emptyAllowed: false,
      required: true
    })
  )
);

// src/features/did-you-mean/did-you-mean-analytics-actions.ts
var logDidYouMeanAutomatic = () => makeAnalyticsAction(
  "analytics/didyoumean/automatic",
  (client) => client.makeDidYouMeanAutomatic()
);
var didYouMeanAutomatic = () => ({
  actionCause: "didyoumeanAutomatic" /* didyoumeanAutomatic */
});

// src/features/context/context-state.ts
function getContextInitialState2() {
  return {
    contextValues: {}
  };
}

// src/features/debug/debug-state.ts
var getDebugInitialState = () => false;

// src/features/dictionary-field-context/dictionary-field-context-state.ts
function getDictionaryFieldContextInitialState() {
  return {
    contextValues: {}
  };
}

// src/features/facet-options/facet-options-state.ts
function getFacetOptionsSliceInitialState() {
  return { enabled: true };
}
function getFacetOptionsInitialState() {
  return {
    freezeFacetOrder: false,
    facets: {}
  };
}

// src/features/facets/facet-order/facet-order-state.ts
function getFacetOrderInitialState() {
  return [];
}

// src/features/pagination/pagination-state.ts
function getPaginationInitialState() {
  return {
    firstResult: 0,
    defaultNumberOfResults: 10,
    numberOfResults: 10,
    totalCountFiltered: 0
  };
}

// src/features/query-set/query-set-state.ts
function getQuerySetInitialState() {
  return {};
}

// src/features/static-filter-set/static-filter-set-state.ts
function getStaticFilterSetInitialState() {
  return {};
}

// src/features/tab-set/tab-set-state.ts
function getTabSetInitialState() {
  return {};
}

// src/features/history/history-state.ts
function extractHistory(state) {
  return {
    context: state.context || getContextInitialState2(),
    dictionaryFieldContext: state.dictionaryFieldContext || getDictionaryFieldContextInitialState(),
    facetSet: state.facetSet || getFacetSetInitialState(),
    numericFacetSet: state.numericFacetSet || getNumericFacetSetInitialState(),
    dateFacetSet: state.dateFacetSet || getDateFacetSetInitialState(),
    categoryFacetSet: state.categoryFacetSet || getCategoryFacetSetInitialState(),
    automaticFacetSet: state.automaticFacetSet ?? getAutomaticFacetSetInitialState(),
    pagination: state.pagination || getPaginationInitialState(),
    query: state.query || getQueryInitialState(),
    tabSet: state.tabSet || getTabSetInitialState(),
    advancedSearchQueries: state.advancedSearchQueries || getAdvancedSearchQueriesInitialState(),
    staticFilterSet: state.staticFilterSet || getStaticFilterSetInitialState(),
    querySet: state.querySet || getQuerySetInitialState(),
    sortCriteria: state.sortCriteria || getSortCriteriaInitialState(),
    pipeline: state.pipeline || getPipelineInitialState(),
    searchHub: state.searchHub || getSearchHubInitialState(),
    facetOptions: state.facetOptions || getFacetOptionsInitialState(),
    facetOrder: state.facetOrder ?? getFacetOrderInitialState(),
    debug: state.debug ?? getDebugInitialState()
  };
}

// src/features/triggers/trigger-analytics-actions.ts
var logUndoTriggerQueryPayloadDefinition = new RecordValue({
  values: {
    undoneQuery: requiredEmptyAllowedString
  },
  options: { required: true }
});
var logTriggerQuery = () => makeAnalyticsAction("analytics/trigger/query", (client, state) => {
  if (state.triggers?.queryModification.newQuery) {
    return client.makeTriggerQuery();
  }
  return null;
});

// src/features/triggers/triggers-actions.ts
var updateIgnoreQueryTrigger = createAction(
  "trigger/query/ignore",
  (q) => validatePayload(q, new StringValue({ emptyAllowed: true, required: true }))
);
var applyQueryTriggerModification = createAction(
  "trigger/query/modification",
  (payload) => validatePayload(
    payload,
    new RecordValue({
      values: { originalQuery: nonEmptyString, modification: nonEmptyString }
    })
  )
);

// src/features/search/legacy/search-actions-thunk-processor.ts
var AsyncSearchThunkProcessor = class {
  constructor(config, onUpdateQueryForCorrection = (modification) => {
    this.dispatch(updateQuery({ q: modification }));
  }) {
    this.config = config;
    this.onUpdateQueryForCorrection = onUpdateQueryForCorrection;
  }
  async fetchFromAPI({ mappings, request }, options) {
    const startedAt = (/* @__PURE__ */ new Date()).getTime();
    const response = mapSearchResponse(
      await this.extra.apiClient.search(request, options),
      mappings
    );
    const duration = (/* @__PURE__ */ new Date()).getTime() - startedAt;
    const queryExecuted = this.getState().query?.q || "";
    return { response, duration, queryExecuted, requestExecuted: request };
  }
  async process(fetched) {
    return this.processQueryErrorOrContinue(fetched) ?? await this.processQueryCorrectionsOrContinue(fetched) ?? await this.processQueryTriggersOrContinue(fetched) ?? this.processSuccessResponse(fetched);
  }
  processQueryErrorOrContinue(fetched) {
    if (isErrorResponse2(fetched.response)) {
      this.dispatch(logQueryError(fetched.response.error));
      return this.rejectWithValue(fetched.response.error);
    }
    return null;
  }
  async processQueryCorrectionsOrContinue(fetched) {
    const state = this.getState();
    const successResponse = this.getSuccessResponse(fetched);
    if (!successResponse || !state.didYouMean) {
      return null;
    }
    const { enableDidYouMean: enableDidYouMean2, automaticallyCorrectQuery } = state.didYouMean;
    const { results, queryCorrections, queryCorrection } = successResponse;
    if (!enableDidYouMean2 || !automaticallyCorrectQuery) {
      return null;
    }
    const shouldExecuteClassicDidYouMeanAutoCorrection = results.length === 0 && queryCorrections && queryCorrections.length !== 0;
    const shouldExecuteModernDidYouMeanAutoCorrection = !isNullOrUndefined(queryCorrection) && !isNullOrUndefined(queryCorrection.correctedQuery);
    const shouldExitWithNoAutoCorrection = !shouldExecuteClassicDidYouMeanAutoCorrection && !shouldExecuteModernDidYouMeanAutoCorrection;
    if (shouldExitWithNoAutoCorrection) {
      return null;
    }
    const ret = shouldExecuteClassicDidYouMeanAutoCorrection ? await this.processLegacyDidYouMeanAutoCorrection(fetched) : this.processModernDidYouMeanAutoCorrection(fetched);
    this.dispatch(snapshot(extractHistory(this.getState())));
    return ret;
  }
  async processLegacyDidYouMeanAutoCorrection(originalFetchedResponse) {
    const originalQuery = this.getCurrentQuery();
    const originalSearchSuccessResponse = this.getSuccessResponse(
      originalFetchedResponse
    );
    if (!originalSearchSuccessResponse.queryCorrections) {
      return null;
    }
    const { correctedQuery } = originalSearchSuccessResponse.queryCorrections[0];
    const retried = await this.automaticallyRetryQueryWithCorrection(correctedQuery);
    if (isErrorResponse2(retried.response)) {
      this.dispatch(logQueryError(retried.response.error));
      return this.rejectWithValue(retried.response.error);
    }
    this.logOriginalAnalyticsQueryBeforeAutoCorrection(originalFetchedResponse);
    this.dispatch(snapshot(extractHistory(this.getState())));
    return {
      ...retried,
      response: {
        ...retried.response.success,
        queryCorrections: originalSearchSuccessResponse.queryCorrections
      },
      automaticallyCorrected: true,
      originalQuery,
      analyticsAction: logDidYouMeanAutomatic()
    };
  }
  processModernDidYouMeanAutoCorrection(originalFetchedResponse) {
    const successResponse = this.getSuccessResponse(originalFetchedResponse);
    const { correctedQuery, originalQuery } = successResponse.queryCorrection;
    this.onUpdateQueryForCorrection(correctedQuery);
    return {
      ...originalFetchedResponse,
      response: {
        ...successResponse
      },
      queryExecuted: correctedQuery,
      automaticallyCorrected: true,
      originalQuery,
      analyticsAction: logDidYouMeanAutomatic()
    };
  }
  logOriginalAnalyticsQueryBeforeAutoCorrection(originalFetchedResponse) {
    const state = this.getState();
    const successResponse = this.getSuccessResponse(originalFetchedResponse);
    this.analyticsAction && this.analyticsAction()(
      this.dispatch,
      () => this.getStateAfterResponse(
        originalFetchedResponse.queryExecuted,
        originalFetchedResponse.duration,
        state,
        successResponse
      ),
      this.extra
    );
  }
  async processQueryTriggersOrContinue(fetched) {
    const successResponse = this.getSuccessResponse(fetched);
    if (!successResponse) {
      return null;
    }
    const correctedQuery = successResponse.triggers.find((trigger) => trigger.type === "query")?.content || "";
    if (!correctedQuery) {
      return null;
    }
    const ignored = this.getState().triggers?.queryModification.queryToIgnore;
    if (ignored === correctedQuery) {
      this.dispatch(updateIgnoreQueryTrigger(""));
      return null;
    }
    if (this.analyticsAction) {
      await this.dispatch(this.analyticsAction);
    }
    const originalQuery = this.getCurrentQuery();
    const retried = await this.automaticallyRetryQueryWithTriggerModification(correctedQuery);
    if (isErrorResponse2(retried.response)) {
      this.dispatch(logQueryError(retried.response.error));
      return this.rejectWithValue(retried.response.error);
    }
    this.dispatch(snapshot(extractHistory(this.getState())));
    return {
      ...retried,
      response: {
        ...retried.response.success
      },
      automaticallyCorrected: false,
      originalQuery,
      analyticsAction: logTriggerQuery()
    };
  }
  getStateAfterResponse(query2, duration, previousState, response) {
    return {
      ...previousState,
      query: {
        q: query2,
        enableQuerySyntax: previousState.query?.enableQuerySyntax ?? getQueryInitialState().enableQuerySyntax
      },
      search: {
        ...getSearchInitialState(),
        duration,
        response,
        results: response.results
      }
    };
  }
  processSuccessResponse(fetched) {
    this.dispatch(snapshot(extractHistory(this.getState())));
    return {
      ...fetched,
      response: this.getSuccessResponse(fetched),
      automaticallyCorrected: false,
      originalQuery: this.getCurrentQuery(),
      analyticsAction: this.analyticsAction
    };
  }
  getSuccessResponse(fetched) {
    if (isSuccessResponse(fetched.response)) {
      return fetched.response.success;
    }
    return null;
  }
  async automaticallyRetryQueryWithCorrection(correction) {
    this.onUpdateQueryForCorrection(correction);
    const fetched = await this.fetchFromAPI(
      await buildSearchRequest(this.getState()),
      { origin: "mainSearch" }
    );
    this.dispatch(applyDidYouMeanCorrection(correction));
    return fetched;
  }
  async automaticallyRetryQueryWithTriggerModification(modified) {
    this.dispatch(
      applyQueryTriggerModification({
        newQuery: modified,
        originalQuery: this.getCurrentQuery()
      })
    );
    this.onUpdateQueryForCorrection(modified);
    const fetched = await this.fetchFromAPI(
      await buildSearchRequest(this.getState()),
      { origin: "mainSearch" }
    );
    return fetched;
  }
  getCurrentQuery() {
    const state = this.getState();
    return state.query?.q !== void 0 ? state.query.q : "";
  }
  get extra() {
    return this.config.extra;
  }
  getState() {
    return this.config.getState();
  }
  get dispatch() {
    return this.config.dispatch;
  }
  get analyticsAction() {
    return this.config.analyticsAction;
  }
  get rejectWithValue() {
    return this.config.rejectWithValue;
  }
};

// src/features/search/legacy/search-actions.ts
var prepareForSearchWithQuery = createAsyncThunk("search/prepareForSearchWithQuery", (payload, thunk2) => {
  const { dispatch } = thunk2;
  validatePayload(payload, {
    q: new StringValue(),
    enableQuerySyntax: new BooleanValue(),
    clearFilters: new BooleanValue()
  });
  if (payload.clearFilters) {
    dispatch(deselectAllBreadcrumbs());
    dispatch(deselectAllNonBreadcrumbs());
  }
  dispatch(updateFacetAutoSelection({ allow: true }));
  dispatch(
    updateQuery({ q: payload.q, enableQuerySyntax: payload.enableQuerySyntax })
  );
  dispatch(updatePage(1));
});
var executeSearch = createAsyncThunk("search/executeSearch", async (searchAction, config) => {
  const state = config.getState();
  return await legacyExecuteSearch(state, config, searchAction);
});
var fetchPage = createAsyncThunk("search/fetchPage", async (searchAction, config) => {
  const state = config.getState();
  return await legacyFetchPage(state, config, searchAction);
});
var fetchMoreResults = createAsyncThunk("search/fetchMoreResults", async (_, config) => {
  const state = config.getState();
  return await legacyFetchMoreResults(config, state);
});
var fetchFacetValues = createAsyncThunk(
  "search/fetchFacetValues",
  async (searchAction, config) => {
    const state = config.getState();
    return await legacyFetchFacetValues(config, searchAction, state);
  }
);
var fetchInstantResults = createAsyncThunk(
  "search/fetchInstantResults",
  async (payload, config) => {
    return legacyFetchInstantResults(payload, config);
  }
);
var buildFetchMoreRequest = async (state, eventDescription) => {
  const mappedRequest = await buildSearchRequest(state, eventDescription);
  mappedRequest.request = {
    ...mappedRequest.request,
    firstResult: (state.pagination?.firstResult ?? 0) + (state.search?.results.length ?? 0)
  };
  return mappedRequest;
};
var buildInstantResultSearchRequest = async (state, q, numberOfResults) => {
  const sharedWithFoldingRequest = await buildSearchAndFoldingLoadCollectionRequest2(state);
  return mapSearchRequest({
    ...sharedWithFoldingRequest,
    ...state.didYouMean && {
      enableDidYouMean: state.didYouMean.enableDidYouMean
    },
    numberOfResults,
    q
  });
};
var buildFetchFacetValuesRequest = async (state, eventDescription) => {
  const mappedRequest = await buildSearchRequest(state, eventDescription);
  mappedRequest.request.numberOfResults = 0;
  return mappedRequest;
};
var addEntryInActionsHistory = (state) => {
  if (state.configuration.analytics.enabled) {
    historyStore.addElement({
      name: "Query",
      ...state.query?.q && {
        value: state.query.q
      },
      time: JSON.stringify(/* @__PURE__ */ new Date())
    });
  }
};
async function legacyFetchInstantResults(payload, config) {
  validatePayload(payload, {
    id: requiredNonEmptyString,
    q: requiredNonEmptyString,
    maxResultsPerQuery: new NumberValue({
      required: true,
      min: 1
    }),
    cacheTimeout: new NumberValue()
  });
  const { q, maxResultsPerQuery } = payload;
  const state = config.getState();
  const processor = new AsyncSearchThunkProcessor({ ...config, analyticsAction: logInstantResultsSearch() }, (modification) => {
    config.dispatch(
      updateInstantResultsQuery({ q: modification, id: payload.id })
    );
  });
  const request = await buildInstantResultSearchRequest(
    state,
    q,
    maxResultsPerQuery
  );
  const fetched = await processor.fetchFromAPI(request, {
    origin: "instantResults",
    disableAbortWarning: true
  });
  const processed = await processor.process(fetched);
  if ("response" in processed) {
    return {
      results: processed.response.results,
      searchUid: processed.response.searchUid,
      analyticsAction: processed.analyticsAction,
      totalCountFiltered: processed.response.totalCountFiltered,
      duration: processed.duration
    };
  }
  return processed;
}
async function legacyFetchPage(state, config, searchAction) {
  addEntryInActionsHistory(state);
  const { analyticsClientMiddleware, preprocessRequest, logger } = config.extra;
  const { description: eventDescription } = await searchAction.prepare({
    getState: () => config.getState(),
    analyticsClientMiddleware,
    preprocessRequest,
    logger
  });
  const processor = new AsyncSearchThunkProcessor({
    ...config,
    analyticsAction: searchAction
  });
  const request = await buildSearchRequest(state, eventDescription);
  const fetched = await processor.fetchFromAPI(request, { origin: "mainSearch" });
  return await processor.process(fetched);
}
async function legacyFetchMoreResults(config, state) {
  const { analyticsClientMiddleware, preprocessRequest, logger } = config.extra;
  const { description: eventDescription } = await logFetchMoreResults().prepare({
    getState: () => config.getState(),
    analyticsClientMiddleware,
    preprocessRequest,
    logger
  });
  const processor = new AsyncSearchThunkProcessor({
    ...config,
    analyticsAction: logFetchMoreResults()
  });
  const request = await buildFetchMoreRequest(state, eventDescription);
  const fetched = await processor.fetchFromAPI(request, { origin: "mainSearch" });
  return await processor.process(fetched);
}
async function legacyFetchFacetValues(config, searchAction, state) {
  const { analyticsClientMiddleware, preprocessRequest, logger } = config.extra;
  const { description: eventDescription } = await searchAction.prepare({
    getState: () => config.getState(),
    analyticsClientMiddleware,
    preprocessRequest,
    logger
  });
  const processor = new AsyncSearchThunkProcessor({ ...config, analyticsAction: searchAction });
  const request = await buildFetchFacetValuesRequest(state, eventDescription);
  const fetched = await processor.fetchFromAPI(request, {
    origin: "facetValues"
  });
  return await processor.process(fetched);
}
async function legacyExecuteSearch(state, config, searchAction) {
  addEntryInActionsHistory(state);
  const { analyticsClientMiddleware, preprocessRequest, logger } = config.extra;
  const { description: eventDescription } = await searchAction.prepare({
    getState: () => config.getState(),
    analyticsClientMiddleware,
    preprocessRequest,
    logger
  });
  const request = await buildSearchRequest(state, eventDescription);
  const processor = new AsyncSearchThunkProcessor({ ...config, analyticsAction: searchAction });
  const fetched = await processor.fetchFromAPI(request, { origin: "mainSearch" });
  return await processor.process(fetched);
}

// src/features/search/search-actions-thunk-processor.ts
var AsyncSearchThunkProcessor2 = class {
  constructor(config, onUpdateQueryForCorrection = (modification) => {
    this.dispatch(updateQuery({ q: modification }));
  }) {
    this.config = config;
    this.onUpdateQueryForCorrection = onUpdateQueryForCorrection;
  }
  async fetchFromAPI({ mappings, request }, options) {
    const startedAt = (/* @__PURE__ */ new Date()).getTime();
    const response = mapSearchResponse(
      await this.extra.apiClient.search(request, options),
      mappings
    );
    const duration = (/* @__PURE__ */ new Date()).getTime() - startedAt;
    const queryExecuted = this.getState().query?.q || "";
    return { response, duration, queryExecuted, requestExecuted: request };
  }
  async process(fetched) {
    return this.processQueryErrorOrContinue(fetched) ?? await this.processQueryCorrectionsOrContinue(fetched) ?? await this.processQueryTriggersOrContinue(fetched) ?? this.processSuccessResponse(fetched);
  }
  processQueryErrorOrContinue(fetched) {
    if (isErrorResponse2(fetched.response)) {
      this.dispatch(logQueryError(fetched.response.error));
      return this.rejectWithValue(fetched.response.error);
    }
    return null;
  }
  async processQueryCorrectionsOrContinue(fetched) {
    const state = this.getState();
    const successResponse = this.getSuccessResponse(fetched);
    if (!successResponse || !state.didYouMean) {
      return null;
    }
    const { enableDidYouMean: enableDidYouMean2, automaticallyCorrectQuery } = state.didYouMean;
    const { results, queryCorrections, queryCorrection } = successResponse;
    if (!enableDidYouMean2 || !automaticallyCorrectQuery) {
      return null;
    }
    const shouldExecuteClassicDidYouMeanAutoCorrection = results.length === 0 && queryCorrections && queryCorrections.length !== 0;
    const shouldExecuteModernDidYouMeanAutoCorrection = !isNullOrUndefined(queryCorrection) && !isNullOrUndefined(queryCorrection.correctedQuery);
    const shouldExitWithNoAutoCorrection = !shouldExecuteClassicDidYouMeanAutoCorrection && !shouldExecuteModernDidYouMeanAutoCorrection;
    if (shouldExitWithNoAutoCorrection) {
      return null;
    }
    const ret = shouldExecuteClassicDidYouMeanAutoCorrection ? await this.processLegacyDidYouMeanAutoCorrection(fetched) : this.processModernDidYouMeanAutoCorrection(fetched);
    this.dispatch(snapshot(extractHistory(this.getState())));
    return ret;
  }
  async processLegacyDidYouMeanAutoCorrection(originalFetchedResponse) {
    const originalQuery = this.getCurrentQuery();
    const originalSearchSuccessResponse = this.getSuccessResponse(
      originalFetchedResponse
    );
    if (!originalSearchSuccessResponse.queryCorrections) {
      return null;
    }
    const { correctedQuery } = originalSearchSuccessResponse.queryCorrections[0];
    const retried = await this.automaticallyRetryQueryWithCorrection(correctedQuery);
    if (isErrorResponse2(retried.response)) {
      this.dispatch(logQueryError(retried.response.error));
      return this.rejectWithValue(retried.response.error);
    }
    this.dispatch(snapshot(extractHistory(this.getState())));
    return {
      ...retried,
      response: {
        ...retried.response.success,
        queryCorrections: originalSearchSuccessResponse.queryCorrections
      },
      automaticallyCorrected: true,
      originalQuery
    };
  }
  processModernDidYouMeanAutoCorrection(originalFetchedResponse) {
    const successResponse = this.getSuccessResponse(originalFetchedResponse);
    const { correctedQuery, originalQuery } = successResponse.queryCorrection;
    this.onUpdateQueryForCorrection(correctedQuery);
    return {
      ...originalFetchedResponse,
      response: {
        ...successResponse
      },
      queryExecuted: correctedQuery,
      automaticallyCorrected: true,
      originalQuery
    };
  }
  async processQueryTriggersOrContinue(fetched) {
    const successResponse = this.getSuccessResponse(fetched);
    if (!successResponse) {
      return null;
    }
    const correctedQuery = successResponse.triggers.find((trigger) => trigger.type === "query")?.content || "";
    if (!correctedQuery) {
      return null;
    }
    const ignored = this.getState().triggers?.queryModification.queryToIgnore;
    if (ignored === correctedQuery) {
      this.dispatch(updateIgnoreQueryTrigger(""));
      return null;
    }
    const originalQuery = this.getCurrentQuery();
    const retried = await this.automaticallyRetryQueryWithTriggerModification(correctedQuery);
    if (isErrorResponse2(retried.response)) {
      this.dispatch(logQueryError(retried.response.error));
      return this.rejectWithValue(retried.response.error);
    }
    this.dispatch(snapshot(extractHistory(this.getState())));
    return {
      ...retried,
      response: {
        ...retried.response.success
      },
      automaticallyCorrected: false,
      originalQuery
    };
  }
  processSuccessResponse(fetched) {
    this.dispatch(snapshot(extractHistory(this.getState())));
    return {
      ...fetched,
      response: this.getSuccessResponse(fetched),
      automaticallyCorrected: false,
      originalQuery: this.getCurrentQuery()
    };
  }
  getSuccessResponse(fetched) {
    if (isSuccessResponse(fetched.response)) {
      return fetched.response.success;
    }
    return null;
  }
  async automaticallyRetryQueryWithCorrection(correction) {
    this.onUpdateQueryForCorrection(correction);
    const state = this.getState();
    const { actionCause } = didYouMeanAutomatic();
    const fetched = await this.fetchFromAPI(
      await buildSearchRequest(state, {
        actionCause
      }),
      { origin: "mainSearch" }
    );
    this.dispatch(applyDidYouMeanCorrection(correction));
    return fetched;
  }
  async automaticallyRetryQueryWithTriggerModification(modified) {
    this.dispatch(
      applyQueryTriggerModification({
        newQuery: modified,
        originalQuery: this.getCurrentQuery()
      })
    );
    this.onUpdateQueryForCorrection(modified);
    const fetched = await this.fetchFromAPI(
      await buildSearchRequest(this.getState()),
      { origin: "mainSearch" }
    );
    return fetched;
  }
  getCurrentQuery() {
    const state = this.getState();
    return state.query?.q !== void 0 ? state.query.q : "";
  }
  get extra() {
    return this.config.extra;
  }
  getState() {
    return this.config.getState();
  }
  get dispatch() {
    return this.config.dispatch;
  }
  get rejectWithValue() {
    return this.config.rejectWithValue;
  }
};

// src/features/search/search-actions.ts
var prepareForSearchWithQuery2 = createAsyncThunk("search/prepareForSearchWithQuery", (payload, thunk2) => {
  const { dispatch } = thunk2;
  validatePayload(payload, {
    q: new StringValue(),
    enableQuerySyntax: new BooleanValue(),
    clearFilters: new BooleanValue()
  });
  if (payload.clearFilters) {
    dispatch(deselectAllBreadcrumbs());
    dispatch(deselectAllNonBreadcrumbs());
  }
  dispatch(updateFacetAutoSelection({ allow: true }));
  dispatch(
    updateQuery({ q: payload.q, enableQuerySyntax: payload.enableQuerySyntax })
  );
  dispatch(updatePage(1));
});
var executeSearch2 = createAsyncThunk(
  "search/executeSearch",
  async (searchAction, config) => {
    const state = config.getState();
    if (state.configuration.analytics.analyticsMode === "legacy" || !searchAction.next) {
      return legacyExecuteSearch(state, config, searchAction.legacy);
    }
    addEntryInActionsHistory2(state);
    const analyticsAction = buildSearchReduxAction(searchAction.next);
    const request = await buildSearchRequest(state, analyticsAction);
    const processor = new AsyncSearchThunkProcessor2({ ...config, analyticsAction });
    const fetched = await processor.fetchFromAPI(request, {
      origin: "mainSearch"
    });
    return await processor.process(fetched);
  }
);
var fetchPage2 = createAsyncThunk("search/fetchPage", async (searchAction, config) => {
  const state = config.getState();
  addEntryInActionsHistory2(state);
  if (state.configuration.analytics.analyticsMode === "legacy" || !searchAction.next) {
    return legacyFetchPage(state, config, searchAction.legacy);
  }
  const processor = new AsyncSearchThunkProcessor2({
    ...config,
    analyticsAction: searchAction.next
  });
  const request = await buildSearchRequest(state, searchAction.next);
  const fetched = await processor.fetchFromAPI(request, { origin: "mainSearch" });
  return await processor.process(fetched);
});
var fetchMoreResults2 = createAsyncThunk("search/fetchMoreResults", async (_, config) => {
  const state = config.getState();
  if (state.configuration.analytics.analyticsMode === "legacy") {
    return legacyFetchMoreResults(config, state);
  }
  const analyticsAction = makeBasicNewSearchAnalyticsAction(
    "pagerScrolling" /* pagerScrolling */,
    config.getState
  );
  const processor = new AsyncSearchThunkProcessor2({
    ...config,
    analyticsAction
  });
  const request = await buildFetchMoreRequest2(state, analyticsAction);
  const fetched = await processor.fetchFromAPI(request, { origin: "mainSearch" });
  return await processor.process(fetched);
});
var fetchFacetValues2 = createAsyncThunk(
  "search/fetchFacetValues",
  async (searchAction, config) => {
    const state = config.getState();
    if (state.configuration.analytics.analyticsMode === "legacy" || !searchAction.next) {
      return legacyExecuteSearch(state, config, searchAction.legacy);
    }
    const analyticsAction = buildSearchReduxAction(searchAction.next);
    const processor = new AsyncSearchThunkProcessor2({ ...config, analyticsAction });
    const request = await buildFetchFacetValuesRequest2(state, analyticsAction);
    const fetched = await processor.fetchFromAPI(request, {
      origin: "facetValues"
    });
    return await processor.process(fetched);
  }
);
var fetchInstantResults2 = createAsyncThunk(
  "search/fetchInstantResults",
  async (payload, config) => {
    const state = config.getState();
    if (state.configuration.analytics.analyticsMode === "legacy") {
      return legacyFetchInstantResults(payload, config);
    }
    validatePayload(payload, {
      id: requiredNonEmptyString,
      q: requiredNonEmptyString,
      maxResultsPerQuery: new NumberValue({
        required: true,
        min: 1
      }),
      cacheTimeout: new NumberValue()
    });
    const { q, maxResultsPerQuery } = payload;
    const analyticsAction = buildSearchReduxAction(searchboxAsYouType());
    const request = await buildInstantResultSearchRequest2(
      state,
      q,
      maxResultsPerQuery,
      analyticsAction
    );
    const processor = new AsyncSearchThunkProcessor2({ ...config, analyticsAction }, (modification) => {
      config.dispatch(
        updateInstantResultsQuery({ q: modification, id: payload.id })
      );
    });
    const fetched = await processor.fetchFromAPI(request, {
      origin: "instantResults",
      disableAbortWarning: true
    });
    const processed = await processor.process(fetched);
    if ("response" in processed) {
      return {
        results: processed.response.results,
        searchUid: processed.response.searchUid,
        totalCountFiltered: processed.response.totalCountFiltered,
        duration: processed.duration
      };
    }
    return processed;
  }
);
var buildFetchMoreRequest2 = async (state, eventDescription) => {
  const mappedRequest = await buildSearchRequest(state, eventDescription);
  mappedRequest.request = {
    ...mappedRequest.request,
    firstResult: (state.pagination?.firstResult ?? 0) + (state.search?.results.length ?? 0)
  };
  return mappedRequest;
};
var buildInstantResultSearchRequest2 = async (state, q, numberOfResults, eventDescription) => {
  const sharedWithFoldingRequest = await buildSearchAndFoldingLoadCollectionRequest(state, eventDescription);
  return mapSearchRequest({
    ...sharedWithFoldingRequest,
    ...state.didYouMean && {
      enableDidYouMean: state.didYouMean.enableDidYouMean
    },
    numberOfResults,
    q
  });
};
var buildFetchFacetValuesRequest2 = async (state, eventDescription) => {
  const mappedRequest = await buildSearchRequest(state, eventDescription);
  mappedRequest.request.numberOfResults = 0;
  return mappedRequest;
};
var addEntryInActionsHistory2 = (state) => {
  if (state.configuration.analytics.enabled) {
    historyStore.addElement({
      name: "Query",
      ...state.query?.q && {
        value: state.query.q
      },
      time: JSON.stringify(/* @__PURE__ */ new Date())
    });
  }
};
var buildSearchReduxAction = (action) => ({
  actionCause: action.actionCause,
  type: action.actionCause
});

// src/features/facets/generic/facet-reducer-helpers.ts
function handleFacetSortCriterionUpdate(state, payload) {
  const { facetId: facetId2, criterion } = payload;
  const facetRequest = state[facetId2]?.request;
  if (!facetRequest) {
    return;
  }
  facetRequest.sortCriteria = criterion;
}
function handleFacetDeselectAll(facetRequest) {
  if (!facetRequest) {
    return;
  }
  facetRequest.currentValues = facetRequest.currentValues.map((value) => ({
    ...value,
    state: "idle"
  }));
  facetRequest.preventAutoSelect = true;
}
function handleFacetUpdateNumberOfValues(facetRequest, numberOfValues2) {
  if (!facetRequest) {
    return;
  }
  facetRequest.numberOfValues = numberOfValues2;
}

// src/features/facets/facet-set/facet-set-slice.ts
var facetSetReducer = createReducer(
  getFacetSetInitialState(),
  (builder) => {
    builder.addCase(registerFacet, (state, action) => {
      const { facetId: facetId2 } = action.payload;
      if (facetId2 in state) {
        return;
      }
      state[facetId2] = getFacetSetSliceInitialState(
        buildFacetRequest(action.payload)
      );
    }).addCase(change.fulfilled, (_, action) => {
      if (!action.payload) {
        return;
      }
      if (Object.keys(action.payload.facetSet).length === 0) {
        return;
      }
      return action.payload.facetSet;
    }).addCase(restoreSearchParameters, (state, action) => {
      const f2 = action.payload.f || {};
      const fExcluded = action.payload.fExcluded || {};
      const facetIds = Object.keys(state);
      facetIds.forEach((id2) => {
        const { request } = state[id2];
        const selectedValues = f2[id2] || [];
        const excludedValues = fExcluded[id2] || [];
        const activeValueCount = selectedValues.length + excludedValues.length;
        const idleValues = request.currentValues.filter(
          (facetValue) => !selectedValues.includes(facetValue.value) && !excludedValues.includes(facetValue.value)
        );
        request.currentValues = [
          ...selectedValues.map(buildSelectedFacetValueRequest),
          ...excludedValues.map(buildExcludedFacetValueRequest),
          ...idleValues.map(restoreFacetValueToIdleState)
        ];
        request.preventAutoSelect = activeValueCount > 0;
        request.numberOfValues = Math.max(
          activeValueCount,
          request.numberOfValues
        );
      });
    }).addCase(toggleSelectFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = facetRequest.currentValues.find(
        (req) => req.value === selection.value
      );
      if (!existingValue) {
        insertNewValue(facetRequest, selection);
        return;
      }
      const isSelected = existingValue.state === "selected";
      existingValue.state = isSelected ? "idle" : "selected";
      facetRequest.freezeCurrentValues = true;
    }).addCase(toggleExcludeFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = facetRequest.currentValues.find(
        (req) => req.value === selection.value
      );
      if (!existingValue) {
        insertNewValue(facetRequest, selection);
        return;
      }
      const isExcluded = existingValue.state === "excluded";
      existingValue.state = isExcluded ? "idle" : "excluded";
      facetRequest.freezeCurrentValues = true;
    }).addCase(updateFreezeCurrentValues, (state, action) => {
      const { facetId: facetId2, freezeCurrentValues } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      facetRequest.freezeCurrentValues = freezeCurrentValues;
    }).addCase(deselectAllFacetValues, (state, action) => {
      handleFacetDeselectAll(state[action.payload]?.request);
    }).addCase(deselectAllBreadcrumbs, (state) => {
      Object.values(state).filter((slice) => slice.hasBreadcrumbs).forEach(({ request }) => handleFacetDeselectAll(request));
    }).addCase(deselectAllNonBreadcrumbs, (state) => {
      Object.values(state).filter((slice) => !slice.hasBreadcrumbs).forEach(({ request }) => handleFacetDeselectAll(request));
    }).addCase(
      updateFacetAutoSelection,
      (state, action) => Object.values(state).forEach((slice) => {
        slice.request.preventAutoSelect = !action.payload.allow;
      })
    ).addCase(updateFacetSortCriterion, (state, action) => {
      handleFacetSortCriterionUpdate(state, action.payload);
    }).addCase(updateFacetNumberOfValues, (state, action) => {
      const { facetId: facetId2, numberOfValues: numberOfValues2 } = action.payload;
      handleFacetUpdateNumberOfValues(
        state[facetId2]?.request,
        numberOfValues2
      );
    }).addCase(updateFacetIsFieldExpanded, (state, action) => {
      const { facetId: facetId2, isFieldExpanded } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      facetRequest.isFieldExpanded = isFieldExpanded;
    }).addCase(executeSearch2.fulfilled, (state, action) => {
      const facets = action.payload.response.facets;
      facets.forEach(
        (facetResponse) => mutateStateFromFacetResponse(
          state[facetResponse.facetId]?.request,
          facetResponse
        )
      );
    }).addCase(fetchProductListing.fulfilled, (state, action) => {
      const facets = action.payload.response?.facets?.results || [];
      facets.forEach(
        (facetResponse) => mutateStateFromFacetResponse(
          state[facetResponse.facetId]?.request,
          facetResponse
        )
      );
    }).addCase(fetchFacetValues2.fulfilled, (state, action) => {
      const facets = action.payload.response.facets;
      facets.forEach(
        (facetResponse) => mutateStateFromFacetResponse(
          state[facetResponse.facetId]?.request,
          facetResponse
        )
      );
    }).addCase(selectFacetSearchResult, (state, action) => {
      const { facetId: facetId2, value } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      const { rawValue } = value;
      const { currentValues } = facetRequest;
      const matchingValue = currentValues.find((v) => v.value === rawValue);
      if (matchingValue) {
        matchingValue.state = "selected";
        return;
      }
      const searchResultValue = buildSelectedFacetValueRequest(rawValue);
      insertNewValue(facetRequest, searchResultValue);
      facetRequest.freezeCurrentValues = true;
      facetRequest.preventAutoSelect = true;
    }).addCase(excludeFacetSearchResult, (state, action) => {
      const { facetId: facetId2, value } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      const { rawValue } = value;
      const { currentValues } = facetRequest;
      const matchingValue = currentValues.find((v) => v.value === rawValue);
      if (matchingValue) {
        matchingValue.state = "excluded";
        return;
      }
      const searchResultValue = buildExcludedFacetValueRequest(rawValue);
      insertNewValue(facetRequest, searchResultValue);
      facetRequest.freezeCurrentValues = true;
      facetRequest.preventAutoSelect = true;
    }).addCase(disableFacet, (state, action) => {
      if (!(action.payload in state)) {
        return;
      }
      const { request } = state[action.payload];
      handleFacetDeselectAll(request);
    });
  }
);
function insertNewValue(facetRequest, facetValue) {
  const { currentValues } = facetRequest;
  const firstIdleIndex = currentValues.findIndex((v) => v.state === "idle");
  const indexToInsertAt = firstIdleIndex === -1 ? currentValues.length : firstIdleIndex;
  const valuesBefore = currentValues.slice(0, indexToInsertAt);
  const valuesAfter = currentValues.slice(indexToInsertAt + 1);
  facetRequest.currentValues = [...valuesBefore, facetValue, ...valuesAfter];
  facetRequest.numberOfValues = facetRequest.currentValues.length;
}
function mutateStateFromFacetResponse(facetRequest, facetResponse) {
  if (!facetRequest) {
    return;
  }
  facetRequest.currentValues = facetResponse.values.map(
    convertFacetValueToRequest
  );
  facetRequest.freezeCurrentValues = false;
  facetRequest.preventAutoSelect = false;
}
var defaultFacetOptions = {
  filterFacetCount: true,
  injectionDepth: 1e3,
  numberOfValues: 8,
  sortCriteria: "automatic",
  resultsMustMatch: "atLeastOneValue"
};
function buildFacetRequest(config) {
  return {
    ...defaultFacetOptions,
    type: "specific",
    currentValues: [],
    freezeCurrentValues: false,
    isFieldExpanded: false,
    preventAutoSelect: false,
    ...config
  };
}
function convertFacetValueToRequest(facetValue) {
  const { value, state } = facetValue;
  return { value, state };
}
function buildSelectedFacetValueRequest(value) {
  return { value, state: "selected" };
}
function buildExcludedFacetValueRequest(value) {
  return { value, state: "excluded" };
}
function restoreFacetValueToIdleState(facetValue) {
  return { ...facetValue, state: "idle" };
}

// src/controllers/core/facets/range-facet/date-facet/date-range.ts
function buildDateRange(config) {
  const start = buildDate(config.start, config);
  const end = buildDate(config.end, config);
  const endInclusive = config.endInclusive ?? false;
  const state = config.state ?? "idle";
  return {
    start,
    end,
    endInclusive,
    state
  };
}
function buildDate(rawDate, options) {
  const { dateFormat } = options;
  if (isRelativeDate(rawDate)) {
    validateRelativeDate(rawDate);
    return serializeRelativeDate(rawDate);
  }
  if (typeof rawDate === "string" && isRelativeDateFormat(rawDate)) {
    validateRelativeDate(rawDate);
    return rawDate;
  }
  validateAbsoluteDate(rawDate, dateFormat);
  return formatDateForSearchApi(parseDate(rawDate, dateFormat));
}

// src/features/facets/range-facets/generic/range-facet-actions.ts
var updateRangeFacetSortCriterion = createAction(
  "rangeFacet/updateSortCriterion",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    criterion: new Value({ required: true })
  })
);

// src/features/facets/range-facets/generic/range-facet-validate-payload.ts
var numericFacetValueDefinition = {
  state: requiredNonEmptyString,
  start: new NumberValue({ required: true }),
  end: new NumberValue({ required: true }),
  endInclusive: new BooleanValue({ required: true }),
  numberOfResults: new NumberValue({ required: true, min: 0 })
};
var dateFacetValueDefinition = {
  start: requiredNonEmptyString,
  end: requiredNonEmptyString,
  endInclusive: new BooleanValue({ required: true }),
  state: requiredNonEmptyString,
  numberOfResults: new NumberValue({ required: true, min: 0 })
};
var rangeFacetSelectionPayloadDefinition = (selection) => ({
  facetId: facetIdDefinition,
  selection: typeof selection.start === "string" ? new RecordValue({ values: dateFacetValueDefinition }) : new RecordValue({ values: numericFacetValueDefinition })
});

// src/features/facets/range-facets/date-facet-set/date-facet-actions.ts
var dateRangeRequestDefinition = {
  start: requiredNonEmptyString,
  end: requiredNonEmptyString,
  endInclusive: new BooleanValue({ required: true }),
  state: requiredNonEmptyString
};
var dateFacetRegistrationOptionsDefinition = {
  facetId: facetIdDefinition,
  field: requiredNonEmptyString,
  currentValues: new ArrayValue({
    required: false,
    each: new RecordValue({ values: dateRangeRequestDefinition })
  }),
  generateAutomaticRanges: new BooleanValue({ required: true }),
  filterFacetCount: new BooleanValue({ required: false }),
  injectionDepth: new NumberValue({ required: false, min: 0 }),
  numberOfValues: new NumberValue({ required: false, min: 1 }),
  sortCriteria: new Value({ required: false }),
  rangeAlgorithm: new Value({ required: false })
};
function getAbsoluteDate(date) {
  return isRelativeDateFormat(date) ? formatRelativeDateForSearchApi(date) : date;
}
function validateManualDateRanges(options) {
  if (!options.currentValues) {
    return;
  }
  options.currentValues.forEach((value) => {
    const { start, end } = buildDateRange(value);
    if (parseDate(getAbsoluteDate(start)).isAfter(parseDate(getAbsoluteDate(end)))) {
      throw new Error(
        `The start value is greater than the end value for the date range ${value.start} to ${value.end}`
      );
    }
  });
}
var registerDateFacet = createAction(
  "dateFacet/register",
  (payload) => {
    try {
      validatePayloadAndThrow(payload, dateFacetRegistrationOptionsDefinition);
      validateManualDateRanges(payload);
      return { payload, error: null };
    } catch (error) {
      return { payload, error: serializeSchemaValidationError(error) };
    }
  }
);
var toggleSelectDateFacetValue = createAction(
  "dateFacet/toggleSelectValue",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: dateFacetValueDefinition })
  })
);
var toggleExcludeDateFacetValue = createAction(
  "dateFacet/toggleExcludeValue",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: dateFacetValueDefinition })
  })
);
var updateDateFacetValues = createAction(
  "dateFacet/updateFacetValues",
  (payload) => {
    try {
      validatePayloadAndThrow(payload, {
        facetId: facetIdDefinition,
        values: new ArrayValue({
          each: new RecordValue({ values: dateFacetValueDefinition })
        })
      });
      validateManualDateRanges({ currentValues: payload.values });
      return { payload, error: null };
    } catch (error) {
      return { payload, error: serializeSchemaValidationError(error) };
    }
  }
);
var updateDateFacetSortCriterion = updateRangeFacetSortCriterion;
var deselectAllDateFacetValues = deselectAllFacetValues;

// src/features/facets/range-facets/generic/range-facet-reducers.ts
var defaultRangeFacetOptions = {
  filterFacetCount: true,
  injectionDepth: 1e3,
  numberOfValues: 8,
  sortCriteria: "ascending",
  rangeAlgorithm: "even",
  resultsMustMatch: "atLeastOneValue"
};
function registerRangeFacet(state, slice) {
  const { request } = slice;
  const { facetId: facetId2 } = request;
  if (facetId2 in state) {
    return;
  }
  const numberOfValues2 = calculateNumberOfValues(request);
  request.numberOfValues = numberOfValues2;
  state[facetId2] = slice;
}
function updateRangeValues(state, facetId2, values) {
  const request = state[facetId2]?.request;
  if (!request) {
    return;
  }
  request.currentValues = values;
  request.numberOfValues = calculateNumberOfValues(request);
}
function toggleSelectRangeValue(state, facetId2, selection) {
  const request = state[facetId2]?.request;
  if (!request) {
    return;
  }
  const value = findRange(request.currentValues, selection);
  if (!value) {
    return;
  }
  const isSelected = value.state === "selected";
  value.state = isSelected ? "idle" : "selected";
  request.preventAutoSelect = true;
}
function toggleExcludeRangeValue(state, facetId2, selection) {
  const request = state[facetId2]?.request;
  if (!request) {
    return;
  }
  const value = findRange(request.currentValues, selection);
  if (!value) {
    return;
  }
  const isExcluded = value.state === "excluded";
  value.state = isExcluded ? "idle" : "excluded";
  request.preventAutoSelect = true;
}
function handleRangeFacetDeselectAll(state, facetId2) {
  const facetRequest = state[facetId2]?.request;
  if (!facetRequest) {
    return;
  }
  facetRequest.currentValues.forEach((request) => request.state = "idle");
}
function handleRangeFacetSearchParameterRestoration(state, rangeFacets) {
  Object.entries(state).forEach(([facetId2, { request }]) => {
    const rangesToSelect = rangeFacets[facetId2] || [];
    request.currentValues.forEach((range) => {
      const found = !!findRange(rangesToSelect, range);
      range.state = found ? "selected" : "idle";
      return range;
    });
    const missingRanges = rangesToSelect.filter(
      (range) => !findRange(request.currentValues, range)
    );
    const currentValues = request.currentValues;
    currentValues.push(...missingRanges);
    request.numberOfValues = Math.max(
      request.numberOfValues,
      currentValues.length
    );
  });
}
function onRangeFacetRequestFulfilled(state, facets, convert) {
  facets.forEach((facetResponse) => {
    const id2 = facetResponse.facetId;
    const facetRequest = state[id2]?.request;
    if (!facetRequest) {
      return;
    }
    const values = convert(facetResponse.values);
    facetRequest.currentValues = values;
    facetRequest.preventAutoSelect = false;
  });
}
function findRange(values, value) {
  const { start, end } = value;
  return values.find((range) => range.start === start && range.end === end);
}
function findExactRangeValue(values, value) {
  const { start, end, endInclusive } = value;
  return values.find(
    (range) => range.start === start && range.end === end && range.endInclusive === endInclusive
  );
}
function calculateNumberOfValues(request) {
  const { generateAutomaticRanges: generateAutomaticRanges2, currentValues, numberOfValues: numberOfValues2 } = request;
  return generateAutomaticRanges2 ? Math.max(numberOfValues2, currentValues.length) : currentValues.length;
}

// src/features/facets/range-facets/date-facet-set/date-facet-set-slice.ts
var dateFacetSetReducer = createReducer(
  getDateFacetSetInitialState(),
  (builder) => {
    builder.addCase(registerDateFacet, (state, action) => {
      const { payload } = action;
      const request = buildDateFacetRequest(payload);
      registerRangeFacet(state, getDateFacetSetSliceInitialState(request));
    }).addCase(
      change.fulfilled,
      (state, action) => action.payload?.dateFacetSet ?? state
    ).addCase(restoreSearchParameters, (state, action) => {
      const df = action.payload.df || {};
      handleRangeFacetSearchParameterRestoration(state, df);
    }).addCase(toggleSelectDateFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      toggleSelectRangeValue(state, facetId2, selection);
    }).addCase(toggleExcludeDateFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      toggleExcludeRangeValue(state, facetId2, selection);
    }).addCase(updateDateFacetValues, (state, action) => {
      const { facetId: facetId2, values } = action.payload;
      updateRangeValues(state, facetId2, values);
    }).addCase(deselectAllDateFacetValues, (state, action) => {
      handleRangeFacetDeselectAll(state, action.payload);
    }).addCase(deselectAllBreadcrumbs, (state) => {
      Object.keys(state).forEach((facetId2) => {
        handleRangeFacetDeselectAll(state, facetId2);
      });
    }).addCase(updateDateFacetSortCriterion, (state, action) => {
      handleFacetSortCriterionUpdate(state, action.payload);
    }).addCase(executeSearch2.fulfilled, (state, action) => {
      const facets = action.payload.response.facets;
      onRangeFacetRequestFulfilled(state, facets, convertToDateRangeRequests);
    }).addCase(fetchProductListing.fulfilled, (state, action) => {
      const facets = action.payload.response?.facets?.results || [];
      onRangeFacetRequestFulfilled(state, facets, convertToDateRangeRequests);
    }).addCase(disableFacet, (state, action) => {
      handleRangeFacetDeselectAll(state, action.payload);
    });
  }
);
function buildDateFacetRequest(config) {
  return {
    ...defaultRangeFacetOptions,
    currentValues: [],
    preventAutoSelect: false,
    type: "dateRange",
    ...config
  };
}
function convertToDateRangeRequests(values) {
  return values.map((value) => {
    const { numberOfResults, ...rest } = value;
    return rest;
  });
}

// src/features/facets/range-facets/numeric-facet-set/numeric-facet-actions.ts
var numericFacetRequestDefinition = {
  state: requiredNonEmptyString,
  start: new NumberValue({ required: true }),
  end: new NumberValue({ required: true }),
  endInclusive: new BooleanValue({ required: true })
};
var numericFacetRegistrationOptionsDefinition = {
  facetId: facetIdDefinition,
  field: requiredNonEmptyString,
  currentValues: new ArrayValue({
    required: false,
    each: new RecordValue({ values: numericFacetRequestDefinition })
  }),
  generateAutomaticRanges: new BooleanValue({ required: true }),
  filterFacetCount: new BooleanValue({ required: false }),
  injectionDepth: new NumberValue({ required: false, min: 0 }),
  numberOfValues: new NumberValue({ required: false, min: 1 }),
  sortCriteria: new Value({ required: false }),
  rangeAlgorithm: new Value({ required: false })
};
function validateManualNumericRanges(options) {
  if (!options.currentValues) {
    return;
  }
  options.currentValues.forEach(({ start, end }) => {
    if (start > end) {
      throw new Error(
        `The start value is greater than the end value for the numeric range ${start} to ${end}`
      );
    }
  });
}
var registerNumericFacet = createAction(
  "numericFacet/register",
  (payload) => {
    try {
      validatePayload(payload, numericFacetRegistrationOptionsDefinition);
      validateManualNumericRanges(payload);
      return { payload, error: null };
    } catch (error) {
      return { payload, error: serializeSchemaValidationError(error) };
    }
  }
);
var toggleSelectNumericFacetValue = createAction(
  "numericFacet/toggleSelectValue",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: numericFacetValueDefinition })
  })
);
var toggleExcludeNumericFacetValue = createAction(
  "numericFacet/toggleExcludeValue",
  (payload) => validatePayload(payload, {
    facetId: facetIdDefinition,
    selection: new RecordValue({ values: numericFacetValueDefinition })
  })
);
var updateNumericFacetValues = createAction(
  "numericFacet/updateFacetValues",
  (payload) => {
    try {
      validatePayloadAndThrow(payload, {
        facetId: facetIdDefinition,
        values: new ArrayValue({
          each: new RecordValue({ values: numericFacetValueDefinition })
        })
      });
      validateManualNumericRanges({ currentValues: payload.values });
      return { payload, error: null };
    } catch (error) {
      return { payload, error: serializeSchemaValidationError(error) };
    }
  }
);
var updateNumericFacetSortCriterion = updateRangeFacetSortCriterion;
var deselectAllNumericFacetValues = deselectAllFacetValues;

// src/features/facets/range-facets/numeric-facet-set/numeric-facet-set-slice.ts
var numericFacetSetReducer = createReducer(
  getNumericFacetSetInitialState(),
  (builder) => {
    builder.addCase(registerNumericFacet, (state, action) => {
      const { payload } = action;
      const request = buildNumericFacetRequest(payload);
      registerRangeFacet(state, getNumericFacetSetSliceInitialState(request));
    }).addCase(
      change.fulfilled,
      (state, action) => action.payload?.numericFacetSet ?? state
    ).addCase(restoreSearchParameters, (state, action) => {
      const nf = action.payload.nf || {};
      handleRangeFacetSearchParameterRestoration(state, nf);
    }).addCase(toggleSelectNumericFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      toggleSelectRangeValue(state, facetId2, selection);
    }).addCase(toggleExcludeNumericFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      toggleExcludeRangeValue(state, facetId2, selection);
    }).addCase(updateNumericFacetValues, (state, action) => {
      const { facetId: facetId2, values } = action.payload;
      updateRangeValues(state, facetId2, values);
    }).addCase(deselectAllNumericFacetValues, (state, action) => {
      handleRangeFacetDeselectAll(state, action.payload);
    }).addCase(deselectAllBreadcrumbs, (state) => {
      Object.keys(state).forEach((facetId2) => {
        handleRangeFacetDeselectAll(state, facetId2);
      });
    }).addCase(updateNumericFacetSortCriterion, (state, action) => {
      handleFacetSortCriterionUpdate(state, action.payload);
    }).addCase(executeSearch2.fulfilled, (state, action) => {
      const facets = action.payload.response.facets;
      onRangeFacetRequestFulfilled(
        state,
        facets,
        convertToNumericRangeRequests
      );
    }).addCase(fetchProductListing.fulfilled, (state, action) => {
      const facets = action.payload.response?.facets?.results || [];
      onRangeFacetRequestFulfilled(
        state,
        facets,
        convertToNumericRangeRequests
      );
    }).addCase(disableFacet, (state, action) => {
      handleRangeFacetDeselectAll(state, action.payload);
    });
  }
);
function buildNumericFacetRequest(config) {
  return {
    ...defaultRangeFacetOptions,
    currentValues: [],
    preventAutoSelect: false,
    type: "numericalRange",
    ...config
  };
}
function convertToNumericRangeRequests(values) {
  return values.map((value) => {
    const { numberOfResults, ...rest } = value;
    return rest;
  });
}

// src/features/commerce/sort/sort.ts
var buildFieldsSortCriterion = (fields) => ({
  by: "fields" /* Fields */,
  fields
});
var sortCriterionDefinition2 = new RecordValue({
  options: {
    required: false
  },
  values: {
    by: new EnumValue({ enum: SortBy2, required: true }),
    fields: new ArrayValue({
      each: new RecordValue({
        values: {
          field: new StringValue({ required: true }),
          direction: new EnumValue({ enum: SortDirection }),
          displayName: new StringValue()
        }
      })
    })
  }
});

// src/features/commerce/common/actions.ts
var buildCommerceAPIRequest = async (state) => {
  return {
    ...await buildBaseCommerceAPIRequest(state),
    facets: getFacets3(state),
    ...state.commerceSort && {
      sort: getSort(state.commerceSort.appliedSort)
    }
  };
};
var buildBaseCommerceAPIRequest = async (state, slotId) => {
  const { view, user, ...restOfContext } = state.commerceContext;
  return {
    accessToken: state.configuration.accessToken,
    url: state.configuration.platformUrl,
    organizationId: state.configuration.organizationId,
    trackingId: state.configuration.analytics.trackingId,
    ...restOfContext,
    clientId: await getVisitorID(state.configuration.analytics),
    context: {
      user,
      view,
      cart: getProductsFromCartState(state.cart)
    },
    ...effectivePagination(state, slotId)
  };
};
var effectivePagination = (state, slotId) => {
  const effectiveSlice = slotId ? state.commercePagination?.recommendations[slotId] : state.commercePagination?.principal;
  return effectiveSlice && {
    page: effectiveSlice.page,
    ...effectiveSlice.perPage && {
      perPage: effectiveSlice.perPage
    }
  };
};
function getFacets3(state) {
  if (!state.facetOrder || !state.commerceFacetSet) {
    return [];
  }
  return state.facetOrder.map((facetId2) => state.commerceFacetSet[facetId2].request).filter((facet) => facet.values.length > 0);
}
function getSort(appliedSort) {
  if (appliedSort.by === "relevance" /* Relevance */) {
    return {
      sortCriteria: "relevance" /* Relevance */
    };
  } else {
    return {
      sortCriteria: "fields" /* Fields */,
      fields: appliedSort.fields.map(({ name, direction }) => ({
        field: name,
        direction
      }))
    };
  }
}

// src/features/commerce/pagination/pagination-selectors.ts
var perPagePrincipalSelector = createSelector(
  (state) => state.commercePagination?.principal.perPage || 0,
  (perPage) => perPage
);
var perPageRecommendationSelector = createSelector(
  (state, slotId) => state.commercePagination?.recommendations[slotId]?.perPage || 0,
  (perPage) => perPage
);
var totalEntriesPrincipalSelector = createSelector(
  (state) => state.commercePagination?.principal.totalEntries || 0,
  (totalEntries) => totalEntries
);
var totalEntriesRecommendationSelector = createSelector(
  (state, slotId) => state.commercePagination?.recommendations[slotId]?.totalEntries || 0,
  (totalEntries) => totalEntries
);
var pagePrincipalSelector = createSelector(
  (state) => state.commercePagination?.principal.page || 0,
  (page) => page
);
var pageRecommendationSelector = createSelector(
  (state, slotId) => state.commercePagination?.recommendations[slotId]?.page || 0,
  (page) => page
);

// src/features/commerce/product-listing/product-listing-selectors.ts
var responseIdSelector = createSelector(
  (state) => state.productListing.responseId,
  (responseId) => responseId
);
var requestIdSelector = createSelector(
  (state) => state.productListing.requestId,
  (requestId) => requestId
);
var numberOfProductsSelector = createSelector(
  (state) => state.productListing?.products.length || 0,
  (len) => len
);
var moreProductsAvailableSelector = createSelector(
  (state) => ({
    total: totalEntriesPrincipalSelector(state),
    current: numberOfProductsSelector(state)
  }),
  ({ current: current2, total }) => current2 < total
);
var isLoadingSelector = createSelector(
  (state) => state.productListing?.isLoading,
  (isLoading) => isNullOrUndefined(isLoading) ? false : isLoading
);
var errorSelector = createSelector(
  (state) => state.productListing?.error,
  (error) => error
);

// src/features/commerce/product-listing/product-listing-actions.ts
var fetchProductListing2 = createAsyncThunk(
  "commerce/productListing/fetch",
  async (_action, { getState, dispatch, rejectWithValue, extra }) => {
    const state = getState();
    const { apiClient } = extra;
    const fetched = await apiClient.getProductListing(
      await buildCommerceAPIRequest(state)
    );
    if (isErrorResponse(fetched)) {
      dispatch(logQueryError(fetched.error));
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success
    };
  }
);
var fetchMoreProducts = createAsyncThunk(
  "commerce/productListing/fetchMoreProducts",
  async (_action, { getState, dispatch, rejectWithValue, extra }) => {
    const state = getState();
    const moreProductsAvailable = moreProductsAvailableSelector(state);
    if (!moreProductsAvailable) {
      return null;
    }
    const { apiClient } = extra;
    const perPage = perPagePrincipalSelector(state);
    const numberOfProducts = numberOfProductsSelector(state);
    const nextPageToRequest = numberOfProducts / perPage;
    const fetched = await apiClient.getProductListing({
      ...await buildCommerceAPIRequest(state),
      page: nextPageToRequest
    });
    if (isErrorResponse(fetched)) {
      dispatch(logQueryError(fetched.error));
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success
    };
  }
);

// src/features/commerce/query/query-actions.ts
var updateQuery2 = createAction(
  "query/updateQuery",
  (payload) => validatePayload(payload, {
    query: new StringValue()
  })
);

// src/features/commerce/search/search-selectors.ts
var responseIdSelector2 = createSelector(
  (state) => state.commerceSearch.responseId,
  (responseId) => responseId
);
var requestIdSelector2 = createSelector(
  (state) => state.commerceSearch.requestId,
  (requestId) => requestId
);
var numberOfProductsSelector2 = createSelector(
  (state) => state.commerceSearch?.products.length || 0,
  (len) => len
);
var moreProductsAvailableSelector2 = createSelector(
  (state) => ({
    total: totalEntriesPrincipalSelector(state),
    current: numberOfProductsSelector2(state)
  }),
  ({ current: current2, total }) => current2 < total
);
var isLoadingSelector2 = createSelector(
  (state) => state.commerceSearch?.isLoading,
  (isLoading) => isNullOrUndefined(isLoading) ? false : isLoading
);
var errorSelector2 = createSelector(
  (state) => state.commerceSearch?.error,
  (error) => error
);
var querySelector = createSelector(
  (state) => state.commerceQuery?.query,
  (query2) => query2 ?? ""
);
var queryExecutedSelector = createSelector(
  (state) => state.commerceSearch?.queryExecuted,
  (query2) => query2
);
var queryExecutedFromResponseSelector = (state, response) => {
  if (response.queryCorrection?.correctedQuery !== void 0) {
    return response.queryCorrection?.correctedQuery;
  }
  return querySelector(state);
};

// src/features/commerce/search/search-actions.ts
var executeSearch3 = createAsyncThunk(
  "commerce/search/executeSearch",
  async (_action, { getState, dispatch, rejectWithValue, extra }) => {
    const state = getState();
    const { apiClient } = extra;
    const query2 = querySelector(state);
    const fetched = await apiClient.search({
      ...await buildCommerceAPIRequest(state),
      query: query2
    });
    if (isErrorResponse(fetched)) {
      dispatch(logQueryError(fetched.error));
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success,
      originalQuery: query2,
      queryExecuted: queryExecutedFromResponseSelector(state, fetched.success)
    };
  }
);
var fetchMoreProducts2 = createAsyncThunk(
  "commerce/search/fetchMoreProducts",
  async (_action, { getState, dispatch, rejectWithValue, extra }) => {
    const state = getState();
    const moreProductsAvailable = moreProductsAvailableSelector2(state);
    if (!moreProductsAvailable) {
      return null;
    }
    const { apiClient } = extra;
    const perPage = perPagePrincipalSelector(state);
    const numberOfProducts = numberOfProductsSelector2(state);
    const nextPageToRequest = numberOfProducts / perPage;
    const query2 = querySelector(state);
    const fetched = await apiClient.search({
      ...await buildCommerceAPIRequest(state),
      query: query2,
      page: nextPageToRequest
    });
    if (isErrorResponse(fetched)) {
      dispatch(logQueryError(fetched.error));
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success,
      originalQuery: query2,
      queryExecuted: queryExecutedFromResponseSelector(state, fetched.success)
    };
  }
);
var prepareForSearchWithQuery3 = createAsyncThunk("commerce/search/prepareForSearchWithQuery", (payload, thunk2) => {
  const { dispatch } = thunk2;
  validatePayload(payload, {
    query: new StringValue(),
    clearFilters: new BooleanValue()
  });
  if (payload.clearFilters) {
    dispatch(deselectAllBreadcrumbs());
    dispatch(deselectAllNonBreadcrumbs());
  }
  dispatch(updateFacetAutoSelection({ allow: true }));
  dispatch(
    updateQuery2({
      query: payload.query
    })
  );
  dispatch(updatePage(1));
});
var fetchInstantProducts = createAsyncThunk(
  "commerce/search/fetchInstantProducts",
  async (payload, { getState, dispatch, rejectWithValue, extra }) => {
    const state = getState();
    const { q } = payload;
    const { apiClient } = extra;
    const fetched = await apiClient.productSuggestions({
      ...await buildCommerceAPIRequest(state),
      query: q
    });
    if (isErrorResponse(fetched)) {
      dispatch(logQueryError(fetched.error));
      return rejectWithValue(fetched.error);
    }
    const products = fetched.success.products.slice(0, 5);
    return {
      response: { ...fetched.success, products }
    };
  }
);

// src/features/commerce/facets/facet-search-set/category/commerce-category-facet-search-request-builder.ts
var buildCategoryFacetSearchRequest = async (facetId2, state, isFieldSuggestionsRequest) => {
  const baseFacetQuery = state.categoryFacetSearchSet[facetId2].options.query;
  const facetQuery = `*${baseFacetQuery}*`;
  const categoryFacet = state.commerceFacetSet[facetId2]?.request;
  const path = categoryFacet && isCategoryFacetRequest2(categoryFacet) ? categoryFacet && getPathToSelectedCategoryFacetItem(categoryFacet) : [];
  const ignorePaths = path.length ? [path] : [];
  const query2 = state.commerceQuery?.query;
  const {
    url,
    accessToken,
    organizationId,
    trackingId,
    language,
    country,
    currency,
    clientId,
    context,
    ...restOfCommerceAPIRequest
  } = await buildCommerceAPIRequest(state);
  return {
    url,
    accessToken,
    organizationId,
    facetId: facetId2,
    facetQuery,
    ignorePaths,
    trackingId,
    language,
    country,
    currency,
    clientId,
    context,
    ...!isFieldSuggestionsRequest && { ...restOfCommerceAPIRequest, query: query2 }
  };
};
function isCategoryFacetRequest2(request) {
  return request.type === "hierarchical";
}
var getPathToSelectedCategoryFacetItem = (categoryFacet) => {
  const path = [];
  let selectedValue = categoryFacet.values[0];
  while (selectedValue) {
    path.push(selectedValue.value);
    selectedValue = selectedValue.children[0];
  }
  return path;
};

// src/features/commerce/facets/facet-search-set/regular/commerce-regular-facet-search-request-builder.ts
var buildFacetSearchRequest = async (facetId2, state, isFieldSuggestionsRequest) => {
  const baseFacetQuery = state.facetSearchSet[facetId2].options.query;
  const facetQuery = `*${baseFacetQuery}*`;
  let query2 = state.commerceQuery?.query;
  if (query2 === void 0) {
    query2 = "";
  }
  const {
    url,
    accessToken,
    organizationId,
    trackingId,
    language,
    country,
    currency,
    clientId,
    context,
    ...restOfCommerceAPIRequest
  } = await buildCommerceAPIRequest(state);
  return {
    url,
    accessToken,
    organizationId,
    facetId: facetId2,
    facetQuery,
    trackingId,
    language,
    country,
    currency,
    clientId,
    context,
    ...!isFieldSuggestionsRequest && { ...restOfCommerceAPIRequest, query: query2 }
  };
};

// src/features/commerce/facets/facet-search-set/commerce-facet-search-actions.ts
var getExecuteFacetSearchThunkPayloadCreator = (isFieldSuggestionsRequest) => async (facetId2, { getState, extra: { apiClient, validatePayload: validatePayload2 } }) => {
  const state = getState();
  validatePayload2(facetId2, requiredNonEmptyString);
  const req = isRegularFacetSearchState(state, facetId2) || isRegularFieldSuggestionsState(state, facetId2) ? buildFacetSearchRequest(facetId2, state, isFieldSuggestionsRequest) : buildCategoryFacetSearchRequest(
    facetId2,
    state,
    isFieldSuggestionsRequest
  );
  const response = await apiClient.facetSearch(await req);
  return { facetId: facetId2, response };
};
var executeCommerceFacetSearch = createAsyncThunk(
  "commerce/facetSearch/executeSearch",
  getExecuteFacetSearchThunkPayloadCreator(false)
);
var executeCommerceFieldSuggest = createAsyncThunk(
  "commerce/facetSearch/facetFieldSuggest",
  // eslint-disable-next-line @cspell/spellchecker
  // TODO: CAPI-911 Handle field suggestions without having to pass in the search context.
  getExecuteFacetSearchThunkPayloadCreator(false)
);
var isRegularFacetSearchState = (s, facetId2) => {
  return "facetSearchSet" in s && s.facetSearchSet[facetId2] !== void 0 && s.commerceFacetSet[facetId2] !== void 0;
};
var isRegularFieldSuggestionsState = (s, facetId2) => {
  if (!("fieldSuggestionsOrder" in s)) {
    return false;
  }
  return s.fieldSuggestionsOrder.some(
    (facet) => facet.facetId === facetId2 && facet.type === "regular"
  );
};

// src/features/commerce/facets/facet-set/facet-set-reducer-helpers.ts
function handleCategoryFacetNestedNumberOfValuesUpdate(state, payload) {
  const { facetId: facetId2, numberOfValues: numberOfValues2 } = payload;
  let selectedValue = state[facetId2]?.request.values[0];
  if (!selectedValue) {
    return;
  }
  while (selectedValue.children.length && selectedValue?.state !== "selected") {
    selectedValue = selectedValue.children[0];
  }
  selectedValue.retrieveCount = numberOfValues2;
}

// src/features/commerce/facets/facet-set/facet-set-state.ts
function getCommerceFacetSetInitialState() {
  return {};
}

// src/features/commerce/facets/facet-set/facet-set-slice.ts
var commerceFacetSetReducer = createReducer(
  getCommerceFacetSetInitialState(),
  (builder) => {
    builder.addCase(fetchProductListing2.fulfilled, handleQueryFulfilled).addCase(executeSearch3.fulfilled, handleQueryFulfilled).addCase(
      executeCommerceFieldSuggest.fulfilled,
      handleFieldSuggestionsFulfilled
    ).addCase(toggleSelectFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureRegularFacetRequest(facetRequest)) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = facetRequest.values.find(
        (req) => req.value === selection.value
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, selection);
        return;
      }
      updateExistingFacetValueState(existingValue, "select");
    }).addCase(toggleSelectNumericFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureNumericFacetRequest(facetRequest)) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = findExactRangeValue(
        facetRequest.values,
        selection
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, selection);
        return;
      }
      updateExistingFacetValueState(existingValue, "select");
      if (facetRequest.interval === "continuous" && existingValue.state === "idle") {
        facetRequest.values = [];
        return;
      }
    }).addCase(toggleSelectDateFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureDateFacetRequest(facetRequest)) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = findExactRangeValue(
        facetRequest.values,
        selection
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, selection);
        return;
      }
      updateExistingFacetValueState(existingValue, "select");
    }).addCase(toggleSelectCategoryFacetValue, (state, action) => {
      const { facetId: facetId2, selection, retrieveCount } = action.payload;
      const request = state[facetId2]?.request;
      if (!request || !ensureCategoryFacetRequest(request)) {
        return;
      }
      const { path } = selection;
      const pathToSelection = path.slice(0, path.length - 1);
      const children = ensurePathAndReturnChildren(
        request,
        pathToSelection,
        retrieveCount
      );
      if (children.length) {
        const lastSelectedParent = children[0];
        lastSelectedParent.state = "selected";
        lastSelectedParent.children = [];
        return;
      }
      const newParent = buildCategoryFacetValueRequest(
        selection.value,
        retrieveCount
      );
      newParent.state = "selected";
      children.push(newParent);
      request.numberOfValues = 1;
    }).addCase(toggleExcludeFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureRegularFacetRequest(facetRequest)) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = facetRequest.values.find(
        (req) => req.value === selection.value
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, selection);
        return;
      }
      updateExistingFacetValueState(existingValue, "exclude");
    }).addCase(toggleExcludeNumericFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureNumericFacetRequest(facetRequest)) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = findExactRangeValue(
        facetRequest.values,
        selection
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, selection);
        return;
      }
      updateExistingFacetValueState(existingValue, "exclude");
      if (facetRequest.interval === "continuous" && existingValue.state === "idle") {
        facetRequest.values = [];
        return;
      }
    }).addCase(toggleExcludeDateFacetValue, (state, action) => {
      const { facetId: facetId2, selection } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureDateFacetRequest(facetRequest)) {
        return;
      }
      facetRequest.preventAutoSelect = true;
      const existingValue = findExactRangeValue(
        facetRequest.values,
        selection
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, selection);
        return;
      }
      updateExistingFacetValueState(existingValue, "exclude");
    }).addCase(updateCategoryFacetNumberOfValues, (state, action) => {
      const { facetId: facetId2, numberOfValues: numberOfValues2 } = action.payload;
      const request = state[facetId2]?.request;
      if (!request) {
        return;
      }
      if (!request.values.length) {
        return handleFacetUpdateNumberOfValues(
          request,
          numberOfValues2
        );
      }
      handleCategoryFacetNestedNumberOfValuesUpdate(state, action.payload);
    }).addCase(selectFacetSearchResult, (state, action) => {
      const { facetId: facetId2, value } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || !ensureRegularFacetRequest(facetRequest)) {
        return;
      }
      const { rawValue } = value;
      facetRequest.preventAutoSelect = true;
      const existingValue = facetRequest.values.find(
        (v) => v.value === rawValue
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, { state: "selected", value: rawValue });
        return;
      }
      updateExistingFacetValueState(existingValue, "select");
    }).addCase(excludeFacetSearchResult, (state, action) => {
      const { facetId: facetId2, value } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest || facetRequest.type !== "regular" && facetRequest.type !== "hierarchical") {
        return;
      }
      const { rawValue } = value;
      facetRequest.preventAutoSelect = true;
      const existingValue = facetRequest.values.find(
        (v) => v.value === rawValue
      );
      if (!existingValue) {
        insertNewValue2(facetRequest, { state: "excluded", value: rawValue });
        return;
      }
      updateExistingFacetValueState(existingValue, "exclude");
    }).addCase(selectCategoryFacetSearchResult, (state, action) => {
      const { facetId: facetId2, value } = action.payload;
      const facetRequest = state[facetId2];
      if (!facetRequest || !ensureCategoryFacetRequest(facetRequest?.request)) {
        return;
      }
      const path = [...value.path, value.rawValue];
      selectPath(
        facetRequest.request,
        path,
        facetRequest.request.initialNumberOfValues
      );
    }).addCase(updateNumericFacetValues, (state, action) => {
      const { facetId: facetId2, values } = action.payload;
      const request = state[facetId2]?.request;
      if (!request || !ensureNumericFacetRequest(request)) {
        return;
      }
      request.values = convertToNumericRangeRequests(values);
      request.numberOfValues = values.length;
    }).addCase(updateFacetNumberOfValues, (state, action) => {
      const { facetId: facetId2, numberOfValues: numberOfValues2 } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      facetRequest.numberOfValues = numberOfValues2;
    }).addCase(updateFacetIsFieldExpanded, (state, action) => {
      const { facetId: facetId2, isFieldExpanded } = action.payload;
      const facetRequest = state[facetId2]?.request;
      if (!facetRequest) {
        return;
      }
      facetRequest.isFieldExpanded = isFieldExpanded;
    }).addCase(
      updateFacetAutoSelection,
      (state, action) => Object.values(state).forEach((slice) => {
        slice.request.preventAutoSelect = !action.payload.allow;
      })
    ).addCase(deselectAllFacetValues, (state, action) => {
      const facetId2 = action.payload;
      const request = state[facetId2]?.request;
      if (!request) {
        return;
      }
      handleDeselectAllFacetValues(request);
    }).addCase(deselectAllBreadcrumbs, setAllFacetValuesToIdle).addCase(setContext, clearAllFacetValues).addCase(setView, clearAllFacetValues).addCase(setUser, clearAllFacetValues);
  }
);
function ensureRegularFacetRequest(facetRequest) {
  return facetRequest.type === "regular";
}
function ensureNumericFacetRequest(facetRequest) {
  return facetRequest.type === "numericalRange";
}
function ensureDateFacetRequest(facetRequest) {
  return facetRequest.type === "dateRange";
}
function ensureCategoryFacetRequest(facetRequest) {
  return facetRequest.type === "hierarchical";
}
function handleQueryFulfilled(state, action) {
  const existingFacets = new Set(Object.keys(state));
  const facets = action.payload.response.facets;
  for (const facetResponse of facets) {
    updateStateFromFacetResponse(state, facetResponse, existingFacets);
  }
  for (const facetId2 of existingFacets) {
    delete state[facetId2];
  }
}
function handleFieldSuggestionsFulfilled(state, action) {
  const facetId2 = action.payload.facetId;
  let facetRequest = state[facetId2]?.request;
  if (!facetRequest) {
    state[facetId2] = { request: {} };
    facetRequest = state[facetId2].request;
    facetRequest.initialNumberOfValues = 10;
  }
}
function handleDeselectAllFacetValues(request) {
  if (request.type === "hierarchical") {
    request.numberOfValues = request.initialNumberOfValues;
    request.values = [];
    request.preventAutoSelect = true;
  } else {
    request.values.forEach((value) => value.state = "idle");
  }
}
function ensurePathAndReturnChildren(request, path, retrieveCount) {
  let children = request.values;
  for (const segment of path) {
    let parent = children[0];
    const missingParent = !parent;
    if (missingParent || segment !== parent.value) {
      parent = buildCategoryFacetValueRequest(segment, retrieveCount);
      children.length = 0;
      children.push(parent);
    }
    parent.state = "idle";
    children = parent.children;
  }
  return children;
}
function buildCategoryFacetValueRequest(value, retrieveCount) {
  return {
    children: [],
    state: "idle",
    value,
    retrieveCount
  };
}
function updateExistingFacetValueState(existingFacetValue, toggleAction) {
  switch (existingFacetValue.state) {
    case "idle":
      existingFacetValue.state = toggleAction === "exclude" ? "excluded" : "selected";
      break;
    case "excluded":
      existingFacetValue.state = toggleAction === "exclude" ? "idle" : "selected";
      break;
    case "selected":
      existingFacetValue.state = toggleAction === "exclude" ? "excluded" : "idle";
      break;
    default:
      break;
  }
}
function updateStateFromFacetResponse(state, facetResponse, facetsToRemove) {
  const facetId2 = facetResponse.facetId ?? facetResponse.field;
  let facetRequest = state[facetId2]?.request;
  if (!facetRequest) {
    state[facetId2] = { request: {} };
    facetRequest = state[facetId2].request;
    facetRequest.initialNumberOfValues = facetResponse.numberOfValues;
  } else {
    facetsToRemove.delete(facetId2);
  }
  facetRequest.facetId = facetId2;
  facetRequest.displayName = facetResponse.displayName;
  facetRequest.numberOfValues = facetResponse.numberOfValues;
  facetRequest.field = facetResponse.field;
  facetRequest.type = facetResponse.type;
  facetRequest.values = getFacetRequestValuesFromFacetResponse(facetResponse) ?? [];
  facetRequest.preventAutoSelect = false;
  if (facetResponse.type === "hierarchical" && ensureCategoryFacetRequest(facetRequest)) {
    facetRequest.delimitingCharacter = facetResponse.delimitingCharacter;
  } else if (facetResponse.type === "numericalRange") {
    facetRequest.interval = facetResponse.interval;
    if (facetResponse.domain) {
      facetRequest.domain = {
        min: facetResponse.domain.min,
        max: facetResponse.domain.max,
        increment: facetResponse.domain.increment
      };
    }
  }
}
function getFacetRequestValuesFromFacetResponse(facetResponse) {
  switch (facetResponse.type) {
    case "numericalRange":
      return convertToNumericRangeRequests(facetResponse.values);
    case "dateRange":
      return convertToDateRangeRequests(facetResponse.values);
    case "hierarchical":
      return facetResponse.values.every(
        (f2) => f2.state === "idle" && f2.children.length === 0
      ) ? [] : facetResponse.values.map(convertCategoryFacetValueToRequest);
    case "regular":
      return facetResponse.values.map(convertFacetValueToRequest);
    default:
      return;
  }
}
function convertCategoryFacetValueToRequest(responseValue) {
  const children = responseValue.children.every(
    (c) => c.state === "idle" && c.children.length === 0
  ) ? [] : responseValue.children.map(convertCategoryFacetValueToRequest);
  const { state, value } = responseValue;
  return {
    children,
    state,
    value,
    retrieveCount: defaultNumberOfValuesIncrement
  };
}
function insertNewValue2(facetRequest, facetValue) {
  const { values } = facetRequest;
  const firstIdleIndex = values.findIndex((v) => v.state === "idle");
  const indexToInsertAt = firstIdleIndex === -1 ? values.length : firstIdleIndex;
  const valuesBefore = values.slice(0, indexToInsertAt);
  const valuesAfter = values.slice(indexToInsertAt + 1);
  facetRequest.values = [...valuesBefore, facetValue, ...valuesAfter];
  facetRequest.numberOfValues = facetRequest.values.length;
}
function setAllFacetValuesToIdle(state) {
  Object.values(state).forEach((facet) => {
    facet.request.values.forEach((value) => value.state = "idle");
  });
}
function clearAllFacetValues(state) {
  Object.values(state).forEach((facet) => {
    facet.request.values = [];
  });
}
function selectPath(request, path, initialNumberOfValues) {
  request.values = buildCurrentValuesFromPath(path, initialNumberOfValues);
  request.numberOfValues = path.length ? 1 : initialNumberOfValues;
  request.preventAutoSelect = true;
}
function buildCurrentValuesFromPath(path, retrieveCount) {
  if (!path.length) {
    return [];
  }
  const root = buildCategoryFacetValueRequest(path[0], retrieveCount);
  let curr = root;
  for (const segment of path.splice(1)) {
    const next = buildCategoryFacetValueRequest(segment, retrieveCount);
    curr.children.push(next);
    curr = next;
  }
  curr.state = "selected";
  return [root];
}

// src/features/commerce/recommendations/recommendations.ts
var recommendationsSlotDefinition = {
  slotId: requiredNonEmptyString,
  productId: new StringValue({ required: false, emptyAllowed: false })
};
var recommendationsOptionsSchema = new Schema(
  recommendationsSlotDefinition
);

// src/features/commerce/recommendations/recommendations-selectors.ts
var numberOfRecommendationsSelector = createSelector(
  (state, slotId) => state.recommendations ? state.recommendations[slotId]?.products.length || 0 : 0,
  (len) => len
);
var moreRecommendationsAvailableSelector = createSelector(
  (state, slotId) => ({
    total: totalEntriesRecommendationSelector(state, slotId),
    current: numberOfRecommendationsSelector(state, slotId)
  }),
  ({ current: current2, total }) => current2 < total
);
var isLoadingSelector3 = createSelector(
  (state, slotId) => state.recommendations ? state.recommendations[slotId]?.isLoading : false,
  (isLoading) => isNullOrUndefined(isLoading) ? false : isLoading
);

// src/features/commerce/recommendations/recommendations-actions.ts
var buildRecommendationCommerceAPIRequest = async (slotId, state, productId) => {
  const commerceAPIRequest = await buildBaseCommerceAPIRequest(state, slotId);
  return {
    ...commerceAPIRequest,
    context: {
      ...commerceAPIRequest.context,
      ...productId ? { product: { productId } } : {},
      purchased: getProductsFromCartPurchasedState(state.cart)
    },
    slotId
  };
};
var fetchRecommendations = createAsyncThunk(
  "commerce/recommendations/fetch",
  async (payload, { getState, rejectWithValue, extra: { apiClient } }) => {
    const { slotId, productId } = payload;
    const request = await buildRecommendationCommerceAPIRequest(
      slotId,
      getState(),
      productId
    );
    const fetched = await apiClient.getRecommendations(request);
    if (isErrorResponse(fetched)) {
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success
    };
  }
);
var fetchMoreRecommendations = createAsyncThunk(
  "commerce/recommendations/fetchMore",
  async (payload, { getState, rejectWithValue, extra: { apiClient } }) => {
    const slotId = payload.slotId;
    const state = getState();
    const moreRecommendationsAvailable = moreRecommendationsAvailableSelector(
      state,
      slotId
    );
    if (!moreRecommendationsAvailable === false) {
      return null;
    }
    const perPage = perPageRecommendationSelector(state, slotId);
    const numberOfProducts = numberOfRecommendationsSelector(state, slotId);
    const nextPageToRequest = numberOfProducts / perPage;
    const request = {
      ...await buildRecommendationCommerceAPIRequest(slotId, state),
      page: nextPageToRequest
    };
    const fetched = await apiClient.getRecommendations(request);
    if (isErrorResponse(fetched)) {
      return rejectWithValue(fetched.error);
    }
    return {
      response: fetched.success
    };
  }
);
var registerRecommendationsSlot = createAction(
  "commerce/recommendations/registerSlot",
  (payload) => validatePayload(payload, recommendationsSlotDefinition)
);

// src/features/commerce/pagination/pagination-actions.ts
var slotIdDefinition = {
  slotId: nonRequiredEmptyAllowedString
};
var setPageSizeDefinition = {
  ...slotIdDefinition,
  pageSize: new NumberValue({ required: true, min: 0 })
};
var setPageSize = createAction(
  "commerce/pagination/setPageSize",
  (payload) => validatePayload(payload, setPageSizeDefinition)
);
var selectPageDefinition = {
  ...slotIdDefinition,
  page: new NumberValue({ required: true, min: 0 })
};
var selectPage = createAction(
  "commerce/pagination/selectPage",
  (payload) => validatePayload(payload, selectPageDefinition)
);
var nextPage2 = createAction(
  "commerce/pagination/nextPage",
  (payload) => validatePayload(payload, slotIdDefinition)
);
var previousPage2 = createAction(
  "commerce/pagination/previousPage",
  (payload) => validatePayload(payload, slotIdDefinition)
);
var registerRecommendationsSlotPagination = createAction(
  "commerce/pagination/registerRecommendationsSlot",
  (payload) => validatePayload(payload, {
    slotId: requiredNonEmptyString
  })
);

// src/features/commerce/pagination/pagination-state.ts
function getCommercePaginationInitialState() {
  return {
    principal: getCommercePaginationInitialSlice(),
    recommendations: {}
  };
}
function getCommercePaginationInitialSlice() {
  return {
    page: 0,
    totalEntries: 0,
    totalPages: 0
  };
}

// src/features/commerce/pagination/pagination-slice.ts
var paginationReducer = createReducer(
  getCommercePaginationInitialState(),
  (builder) => {
    builder.addCase(nextPage2, (state, action) => {
      const slice = getEffectiveSlice(state, action.payload?.slotId);
      if (!slice) {
        return;
      }
      if (slice.page < slice.totalPages - 1) {
        ++slice.page;
      }
    }).addCase(previousPage2, (state, action) => {
      const slice = getEffectiveSlice(state, action.payload?.slotId);
      if (!slice) {
        return;
      }
      if (slice.page > 0) {
        --slice.page;
      }
    }).addCase(selectPage, (state, action) => {
      const slice = getEffectiveSlice(state, action.payload.slotId);
      if (!slice) {
        return;
      }
      if (action.payload.page >= 0 && action.payload.page < slice.totalPages) {
        slice.page = action.payload.page;
      }
    }).addCase(setPageSize, (state, action) => {
      const slice = getEffectiveSlice(state, action.payload.slotId);
      if (!slice) {
        return;
      }
      slice.perPage = action.payload.pageSize;
    }).addCase(fetchProductListing2.fulfilled, (state, action) => {
      state.principal = action.payload.response.pagination;
    }).addCase(executeSearch3.fulfilled, (state, action) => {
      state.principal = action.payload.response.pagination;
    }).addCase(fetchRecommendations.fulfilled, (state, action) => {
      state.recommendations[action.meta.arg.slotId] = action.payload.response.pagination;
    }).addCase(registerRecommendationsSlotPagination, (state, action) => {
      const slotId = action.payload.slotId;
      if (slotId in state) {
        return;
      }
      state.recommendations[slotId] = getCommercePaginationInitialSlice();
    }).addCase(deselectAllFacetValues, handlePaginationReset).addCase(toggleSelectFacetValue, handlePaginationReset).addCase(toggleExcludeFacetValue, handlePaginationReset).addCase(toggleSelectNumericFacetValue, handlePaginationReset).addCase(toggleExcludeNumericFacetValue, handlePaginationReset).addCase(setContext, handlePaginationReset).addCase(setView, handlePaginationReset).addCase(setUser, handlePaginationReset);
  }
);
function getEffectiveSlice(state, solutionTypeId) {
  return solutionTypeId ? state.recommendations[solutionTypeId] : state.principal;
}
function handlePaginationReset(state) {
  state.principal.page = getCommercePaginationInitialSlice().page;
}

// src/features/commerce/product-listing/product-listing-state.ts
var getProductListingV2InitialState = () => ({
  error: null,
  isLoading: false,
  requestId: "",
  responseId: "",
  facets: [],
  products: []
});

// src/features/commerce/product-listing/product-listing-slice.ts
var productListingV2Reducer = createReducer(
  getProductListingV2InitialState(),
  (builder) => {
    builder.addCase(fetchProductListing2.rejected, (state, action) => {
      handleError(state, action.payload);
    }).addCase(fetchMoreProducts.rejected, (state, action) => {
      handleError(state, action.payload);
    }).addCase(fetchProductListing2.fulfilled, (state, action) => {
      handleFullfilled(state, action.payload.response);
      state.products = action.payload.response.products;
    }).addCase(fetchMoreProducts.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      handleFullfilled(state, action.payload.response);
      state.products = state.products.concat(
        action.payload.response.products
      );
    }).addCase(fetchProductListing2.pending, (state, action) => {
      handlePending(state, action.meta.requestId);
    }).addCase(fetchMoreProducts.pending, (state, action) => {
      handlePending(state, action.meta.requestId);
    });
  }
);
function handleError(state, error) {
  state.error = error || null;
  state.isLoading = false;
}
function handleFullfilled(state, response) {
  state.error = null;
  state.facets = response.facets;
  state.responseId = response.responseId;
  state.isLoading = false;
}
function handlePending(state, requestId) {
  state.isLoading = true;
  state.requestId = requestId;
}

// src/features/commerce/search-parameters/search-parameter-schema.ts
var searchParametersDefinition2 = {
  // eslint-disable-next-line @cspell/spellchecker
  // TODO CAPI-546: Handle only the query param for now. Add facets, sort, pagination later.
  q: new StringValue()
};
var productListingParametersDefinition = {};

// src/features/commerce/search-parameters/search-parameter-actions.ts
var restoreSearchParameters2 = createAction(
  "commerce/searchParameters/restore",
  (payload) => validatePayload(payload, searchParametersDefinition2)
);
var restoreProductListingParameters = createAction(
  "commerce/productListingParameters/restore",
  (payload) => validatePayload(payload, productListingParametersDefinition)
);

// src/features/commerce/query/query-state.ts
var getCommerceQueryInitialState = () => ({
  query: ""
});

// src/features/commerce/query/query-slice.ts
var queryReducer = createReducer(
  getCommerceQueryInitialState(),
  (builder) => {
    builder.addCase(updateQuery2, (state, action) => ({
      ...state,
      ...action.payload
    })).addCase(restoreSearchParameters2, (state, action) => {
      state.query = action.payload.q ?? "";
    });
  }
);

// src/features/commerce/recommendations/recommendations-state.ts
var getRecommendationsInitialState = () => ({});
var getRecommendationsSliceInitialState = () => ({
  headline: "",
  error: null,
  isLoading: false,
  responseId: "",
  products: []
});

// src/features/commerce/recommendations/recommendations-slice.ts
var recommendationsReducer = createReducer(
  getRecommendationsInitialState(),
  (builder) => {
    builder.addCase(registerRecommendationsSlot, (state, action) => {
      const slotId = action.payload.slotId;
      if (slotId in state) {
        return;
      }
      state[slotId] = buildRecommendationsSlice();
    }).addCase(fetchRecommendations.rejected, (state, action) => {
      handleError2(state, action.meta.arg.slotId, action.payload);
    }).addCase(fetchMoreRecommendations.rejected, (state, action) => {
      handleError2(state, action.meta.arg.slotId, action.payload);
    }).addCase(fetchRecommendations.fulfilled, (state, action) => {
      const slotId = action.meta.arg.slotId;
      const response = action.payload.response;
      handleFulfilled(state, slotId, response);
      const recommendations = state[slotId];
      if (!recommendations) {
        return;
      }
      recommendations.products = response.products;
    }).addCase(fetchMoreRecommendations.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      const slotId = action.meta.arg.slotId;
      const response = action.payload.response;
      handleFulfilled(state, slotId, response);
      const recommendations = state[slotId];
      if (!recommendations) {
        return;
      }
      recommendations.products = recommendations.products.concat(
        response.products
      );
    }).addCase(fetchRecommendations.pending, (state, action) => {
      handlePending2(state, action.meta.arg.slotId);
    }).addCase(fetchMoreRecommendations.pending, (state, action) => {
      handlePending2(state, action.meta.arg.slotId);
    });
  }
);
function buildRecommendationsSlice(config) {
  return {
    ...getRecommendationsSliceInitialState(),
    ...config
  };
}
function handleError2(state, slotId, error) {
  const recommendations = state[slotId];
  if (!recommendations) {
    return;
  }
  recommendations.error = error ?? null;
  recommendations.isLoading = false;
}
function handleFulfilled(state, slotId, response) {
  const recommendations = state[slotId];
  if (!recommendations) {
    return;
  }
  recommendations.error = null;
  recommendations.headline = response.headline;
  recommendations.responseId = response.responseId;
  recommendations.isLoading = false;
}
function handlePending2(state, slotId) {
  const recommendations = state[slotId];
  if (!recommendations) {
    return;
  }
  recommendations.isLoading = true;
}

// src/features/commerce/search/search-state.ts
var getCommerceSearchInitialState = () => ({
  error: null,
  isLoading: false,
  requestId: "",
  responseId: "",
  products: [],
  facets: [],
  queryExecuted: ""
});

// src/features/commerce/search/search-slice.ts
var commerceSearchReducer = createReducer(
  getCommerceSearchInitialState(),
  (builder) => {
    builder.addCase(executeSearch3.rejected, (state, action) => {
      handleError3(state, action.payload);
    }).addCase(fetchMoreProducts2.rejected, (state, action) => {
      handleError3(state, action.payload);
    }).addCase(executeSearch3.fulfilled, (state, action) => {
      handleFulfilled2(
        state,
        action.payload.response,
        action.payload.queryExecuted
      );
      state.products = action.payload.response.products;
    }).addCase(fetchMoreProducts2.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      handleFulfilled2(
        state,
        action.payload.response,
        action.payload.queryExecuted
      );
      state.products = state.products.concat(
        action.payload.response.products
      );
    }).addCase(executeSearch3.pending, (state, action) => {
      handlePending3(state, action.meta.requestId);
    }).addCase(fetchMoreProducts2.pending, (state, action) => {
      handlePending3(state, action.meta.requestId);
    });
  }
);
function handleError3(state, error) {
  state.error = error || null;
  state.isLoading = false;
}
function handlePending3(state, requestId) {
  state.isLoading = true;
  state.requestId = requestId;
}
function handleFulfilled2(state, response, query2) {
  state.error = null;
  state.facets = response.facets;
  state.responseId = response.responseId;
  state.isLoading = false;
  state.queryExecuted = query2 ?? "";
}

// src/features/commerce/sort/sort-actions.ts
var applySort = createAction(
  "commerce/sort/apply",
  (payload) => validatePayload(payload, {
    by: new EnumValue({
      enum: SortBy2,
      required: true
    })
  })
);

// src/features/commerce/sort/sort-state.ts
function getCommerceSortInitialState() {
  return {
    appliedSort: buildRelevanceSortCriterion2(),
    availableSorts: [buildRelevanceSortCriterion2()]
  };
}

// src/features/commerce/sort/sort-slice.ts
var mapResponseSortToStateSort = (sort) => {
  if (sort.sortCriteria === "relevance" /* Relevance */) {
    return buildRelevanceSortCriterion2();
  }
  return {
    by: "fields" /* Fields */,
    fields: (sort.fields || []).map(({ field: field2, direction, displayName }) => ({
      name: field2,
      direction,
      displayName
    }))
  };
};
var sortReducer = createReducer(
  getCommerceSortInitialState(),
  (builder) => {
    builder.addCase(applySort, (state, action) => {
      state.appliedSort = action.payload;
    }).addCase(fetchProductListing2.fulfilled, handleFetchFulfilled).addCase(executeSearch3.fulfilled, handleFetchFulfilled).addCase(setContext, getCommerceSortInitialState).addCase(setView, getCommerceSortInitialState).addCase(setUser, getCommerceSortInitialState);
  }
);
function handleFetchFulfilled(state, action) {
  const response = action.payload.response;
  state.appliedSort = mapResponseSortToStateSort(response.sort.appliedSort);
  state.availableSorts = response.sort.availableSorts.map(
    mapResponseSortToStateSort
  );
}

// src/features/triggers/triggers-slice-functions.ts
function handleFetchItemsPending(state) {
  state.query = "";
  state.queryModification = {
    originalQuery: "",
    newQuery: "",
    queryToIgnore: state.queryModification.queryToIgnore
  };
  return state;
}
function handleFetchItemsFulfilled(state, triggers) {
  const redirectTriggers = [];
  const queryTriggers = [];
  const executeTriggers = [];
  const notifyTriggers = [];
  triggers.forEach((trigger) => {
    switch (trigger.type) {
      case "redirect":
        redirectTriggers.push(trigger.content);
        break;
      case "query":
        queryTriggers.push(trigger.content);
        break;
      case "execute":
        executeTriggers.push({
          functionName: trigger.content.name,
          params: trigger.content.params
        });
        break;
      case "notify":
        notifyTriggers.push(trigger.content);
        break;
    }
  });
  state.redirectTo = redirectTriggers[0] ?? "";
  state.query = state.queryModification.newQuery;
  state.executions = executeTriggers;
  state.notifications = notifyTriggers;
  return state;
}
function handleApplyQueryTriggerModification(state, payload) {
  state.queryModification = { ...payload, queryToIgnore: "" };
  return state;
}
function handleUpdateIgnoreQueryTrigger(state, payload) {
  state.queryModification.queryToIgnore = payload;
  return state;
}

// src/features/triggers/triggers-state.ts
var getTriggerInitialState = () => ({
  redirectTo: "",
  query: "",
  executions: [],
  notifications: [],
  queryModification: { originalQuery: "", newQuery: "", queryToIgnore: "" }
});

// src/features/commerce/triggers/triggers-actions.ts
var updateIgnoreQueryTrigger2 = createAction(
  "commerce/trigger/query/ignore",
  (q) => validatePayload(q, new StringValue({ emptyAllowed: true, required: true }))
);
var applyQueryTriggerModification2 = createAction(
  "commerce/trigger/query/modification",
  (payload) => validatePayload(
    payload,
    new RecordValue({
      values: { originalQuery: nonEmptyString, modification: nonEmptyString }
    })
  )
);

// src/features/commerce/triggers/triggers-slice.ts
var commerceTriggersReducer = createReducer(
  getTriggerInitialState(),
  (builder) => builder.addCase(executeSearch3.pending, handleFetchItemsPending).addCase(
    executeSearch3.fulfilled,
    (state, action) => handleFetchItemsFulfilled(state, action.payload.response.triggers)
  ).addCase(
    applyQueryTriggerModification2,
    (state, action) => handleApplyQueryTriggerModification(state, action.payload)
  ).addCase(
    updateIgnoreQueryTrigger2,
    (state, action) => handleUpdateIgnoreQueryTrigger(state, action.payload)
  )
);

// src/features/facets/facet-order/facet-order-slice.ts
var facetOrderReducer = createReducer(
  getFacetOrderInitialState(),
  (builder) => {
    builder.addCase(executeSearch2.fulfilled, handleQueryFulfilled2).addCase(fetchProductListing2.fulfilled, handleQueryFulfilled2).addCase(executeSearch3.fulfilled, handleQueryFulfilled2).addCase(change.fulfilled, (state, action) => {
      return action.payload?.facetOrder ?? state;
    });
  }
);
function handleQueryFulfilled2(_, action) {
  return action.payload.response.facets.map(
    (facet) => facet.facetId
  );
}

// src/features/query-suggest/query-suggest-actions.ts
var idDefinition = {
  id: requiredNonEmptyString
};
var registerQuerySuggest = createAction(
  "querySuggest/register",
  (payload) => validatePayload(payload, {
    ...idDefinition,
    count: new NumberValue({ min: 0 })
  })
);
var unregisterQuerySuggest = createAction(
  "querySuggest/unregister",
  (payload) => validatePayload(payload, idDefinition)
);
var selectQuerySuggestion = createAction(
  "querySuggest/selectSuggestion",
  (payload) => validatePayload(payload, {
    ...idDefinition,
    expression: requiredEmptyAllowedString
  })
);
var clearQuerySuggest = createAction(
  "querySuggest/clear",
  (payload) => validatePayload(payload, idDefinition)
);
var fetchQuerySuggestions = createAsyncThunk(
  "querySuggest/fetch",
  async (payload, { getState, rejectWithValue, extra: { apiClient, validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, idDefinition);
    const id2 = payload.id;
    const request = await buildQuerySuggestRequest2(id2, getState());
    const response = await apiClient.querySuggest(request);
    if (isErrorResponse2(response)) {
      return rejectWithValue(response.error);
    }
    return {
      id: id2,
      q: request.q,
      ...response.success
    };
  }
);
var buildQuerySuggestRequest2 = async (id2, s) => {
  return {
    accessToken: s.configuration.accessToken,
    organizationId: s.configuration.organizationId,
    url: s.configuration.search.apiBaseUrl,
    count: s.querySuggest[id2].count,
    q: s.querySet[id2],
    locale: s.configuration.search.locale,
    timezone: s.configuration.search.timezone,
    actionsHistory: s.configuration.analytics.enabled ? historyStore.getHistory() : [],
    ...s.context && { context: s.context.contextValues },
    ...s.pipeline && { pipeline: s.pipeline },
    ...s.searchHub && { searchHub: s.searchHub },
    tab: s.configuration.analytics.originLevel2,
    ...s.configuration.analytics.enabled && {
      visitorId: await getVisitorID(s.configuration.analytics),
      ...s.configuration.analytics.enabled && await fromAnalyticsStateToAnalyticsParams(s.configuration.analytics)
    },
    ...s.configuration.search.authenticationProviders.length && {
      authentication: s.configuration.search.authenticationProviders.join(",")
    }
  };
};

// src/features/commerce/query-suggest/query-suggest-actions.ts
var fetchQuerySuggestions2 = createAsyncThunk(
  "commerce/querySuggest/fetch",
  async (payload, { getState, rejectWithValue, extra: { apiClient, validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, idDefinition);
    const state = getState();
    const request = await buildQuerySuggestRequest3(payload.id, state);
    const response = await apiClient.querySuggest(request);
    if (isErrorResponse(response)) {
      return rejectWithValue(response.error);
    }
    return {
      id: payload.id,
      query: request.query,
      ...response.success
    };
  }
);
var buildQuerySuggestRequest3 = async (id2, state) => {
  const { view, user, ...restOfContext } = state.commerceContext;
  return {
    accessToken: state.configuration.accessToken,
    url: state.configuration.platformUrl,
    organizationId: state.configuration.organizationId,
    trackingId: state.configuration.analytics.trackingId,
    query: state.querySet[id2],
    ...restOfContext,
    clientId: await getVisitorID(state.configuration.analytics),
    context: {
      user,
      view,
      cart: getProductsFromCartState(state.cart)
    }
  };
};

// src/features/facets/facet-search-set/facet-search-reducer-helpers.ts
function handleFacetSearchRegistration(state, payload, buildEmptyResponse3) {
  const { facetId: facetId2 } = payload;
  if (state[facetId2]) {
    return;
  }
  const isLoading = false;
  const options = { ...defaultFacetSearchOptions, ...payload };
  const response = buildEmptyResponse3();
  state[facetId2] = {
    options,
    isLoading,
    response,
    initialNumberOfValues: options.numberOfValues,
    requestId: ""
  };
}
function handleFacetSearchUpdate(state, payload) {
  const { facetId: facetId2, ...rest } = payload;
  const search = state[facetId2];
  if (!search) {
    return;
  }
  search.options = { ...search.options, ...rest };
}
function handleFacetSearchPending(state, facetId2, requestId) {
  const search = state[facetId2];
  if (!search) {
    return;
  }
  search.requestId = requestId;
  search.isLoading = true;
}
function handleFacetSearchRejected(state, facetId2) {
  const search = state[facetId2];
  if (!search) {
    return;
  }
  search.isLoading = false;
}
function handleFacetSearchFulfilled(state, payload, requestId) {
  const { facetId: facetId2, response } = payload;
  const search = state[facetId2];
  if (!search) {
    return;
  }
  if (search.requestId !== requestId) {
    return;
  }
  search.isLoading = false;
  search.response = response;
}
function handleCommerceFacetSearchFulfilled(state, payload, requestId) {
  const { facetId: facetId2, response } = payload;
  const search = state[facetId2];
  if (!search) {
    return;
  }
  if (search.requestId !== requestId) {
    return;
  }
  search.isLoading = false;
  if ("success" in response) {
    search.response = response.success;
  }
}
function handleCommerceFacetFieldSuggestionsFulfilled(state, payload, requestId, buildEmptyResponse3) {
  const { facetId: facetId2, response } = payload;
  let search = state[facetId2];
  if (!search) {
    handleFacetSearchRegistration(state, { facetId: facetId2 }, buildEmptyResponse3);
    search = state[facetId2];
  } else if (search.requestId !== requestId) {
    return;
  }
  search.isLoading = false;
  if ("success" in response) {
    search.response = response.success;
  }
}
function handleCommerceFetchQuerySuggestionsFulfilledForRegularFacet(state, payload, requestId, buildEmptyResponse3) {
  if (!payload.fieldSuggestionsFacets) {
    return;
  }
  for (const fieldSuggestionFacet of payload.fieldSuggestionsFacets) {
    if (fieldSuggestionFacet.facetId in state || fieldSuggestionFacet.type !== "regular") {
      continue;
    }
    state[fieldSuggestionFacet.facetId] = {
      options: {
        ...defaultFacetSearchOptions,
        query: payload.query ?? ""
      },
      isLoading: false,
      response: buildEmptyResponse3(),
      initialNumberOfValues: defaultFacetSearchOptions.numberOfValues,
      requestId
    };
  }
}
function handleCommerceFetchQuerySuggestionsFulfilledForCategoryFacet(state, payload, requestId, buildEmptyResponse3) {
  if (!payload.fieldSuggestionsFacets) {
    return;
  }
  for (const fieldSuggestionFacet of payload.fieldSuggestionsFacets) {
    if (fieldSuggestionFacet.facetId in state || fieldSuggestionFacet.type !== "hierarchical") {
      continue;
    }
    state[fieldSuggestionFacet.facetId] = {
      options: {
        ...defaultFacetSearchOptions,
        query: payload.query ?? ""
      },
      isLoading: false,
      response: buildEmptyResponse3(),
      initialNumberOfValues: defaultFacetSearchOptions.numberOfValues,
      requestId
    };
  }
}
function handleFacetSearchClear(state, payload, buildEmptyResponse3) {
  const { facetId: facetId2 } = payload;
  const search = state[facetId2];
  if (!search) {
    return;
  }
  search.requestId = "";
  search.isLoading = false;
  search.response = buildEmptyResponse3();
  search.options.numberOfValues = search.initialNumberOfValues;
  search.options.query = defaultFacetSearchOptions.query;
}
function handleFacetSearchSetClear(state, buildEmptyResponse3) {
  Object.keys(state).forEach(
    (facetId2) => handleFacetSearchClear(state, { facetId: facetId2 }, buildEmptyResponse3)
  );
}
var defaultFacetSearchOptions = {
  captions: {},
  numberOfValues: 10,
  query: ""
};

// src/features/facets/facet-search-set/category/category-facet-search-request-builder.ts
var buildCategoryFacetSearchRequest2 = async (id2, state, isFieldSuggestionsRequest) => {
  const options = state.categoryFacetSearchSet[id2].options;
  const categoryFacet = state.categoryFacetSet[id2].request;
  const { captions: captions2, query: query2, numberOfValues: numberOfValues2 } = options;
  const { field: field2, delimitingCharacter: delimitingCharacter2, basePath: basePath2, filterFacetCount: filterFacetCount2 } = categoryFacet;
  const path = getPathToSelectedCategoryFacetItem2(categoryFacet);
  const ignorePaths = path.length ? [path] : [];
  const newQuery = `*${query2}*`;
  return {
    url: state.configuration.search.apiBaseUrl,
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    ...state.configuration.search.authenticationProviders.length && {
      authentication: state.configuration.search.authenticationProviders.join(",")
    },
    basePath: basePath2,
    captions: captions2,
    numberOfValues: numberOfValues2,
    query: newQuery,
    field: field2,
    delimitingCharacter: delimitingCharacter2,
    ignorePaths,
    filterFacetCount: filterFacetCount2,
    type: "hierarchical",
    ...isFieldSuggestionsRequest ? {} : { searchContext: (await buildSearchRequest(state)).request }
  };
};
var getPathToSelectedCategoryFacetItem2 = (categoryFacet) => {
  const path = [];
  let selectedValue = categoryFacet.currentValues[0];
  while (selectedValue) {
    path.push(selectedValue.value);
    selectedValue = selectedValue.children[0];
  }
  return path;
};

// src/features/facets/facet-search-set/specific/specific-facet-search-request-builder.ts
var buildSpecificFacetSearchRequest = async (id2, state, isFieldSuggestionsRequest) => {
  const { captions: captions2, query: query2, numberOfValues: numberOfValues2 } = state.facetSearchSet[id2].options;
  const { field: field2, currentValues, filterFacetCount: filterFacetCount2 } = state.facetSet[id2].request;
  const ignoreValues = currentValues.filter((v) => v.state !== "idle").map((facetValue) => facetValue.value);
  const newQuery = `*${query2}*`;
  return {
    url: state.configuration.search.apiBaseUrl,
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    ...state.configuration.search.authenticationProviders && {
      authentication: state.configuration.search.authenticationProviders.join(",")
    },
    captions: captions2,
    numberOfValues: numberOfValues2,
    query: newQuery,
    field: field2,
    ignoreValues,
    filterFacetCount: filterFacetCount2,
    type: "specific",
    ...isFieldSuggestionsRequest ? {} : { searchContext: (await buildSearchRequest(state)).request }
  };
};

// src/features/facets/facet-search-set/generic/generic-facet-search-actions.ts
var getExecuteFacetSearchThunkPayloadCreator2 = (isFieldSuggestionsRequest) => async (facetId2, { getState, extra: { apiClient, validatePayload: validatePayload2 } }) => {
  const state = getState();
  let req;
  validatePayload2(facetId2, requiredNonEmptyString);
  if (isSpecificFacetSearchState(state, facetId2)) {
    req = await buildSpecificFacetSearchRequest(
      facetId2,
      state,
      isFieldSuggestionsRequest
    );
  } else {
    req = await buildCategoryFacetSearchRequest2(
      facetId2,
      state,
      isFieldSuggestionsRequest
    );
  }
  const response = await apiClient.facetSearch(req);
  return { facetId: facetId2, response };
};
var executeFacetSearch = createAsyncThunk("facetSearch/executeSearch", getExecuteFacetSearchThunkPayloadCreator2(false));
var executeFieldSuggest = createAsyncThunk("facetSearch/executeSearch", getExecuteFacetSearchThunkPayloadCreator2(true));
var clearFacetSearch = createAction(
  "facetSearch/clearResults",
  (payload) => validatePayload(payload, { facetId: facetIdDefinition })
);
var isSpecificFacetSearchState = (s, facetId2) => {
  return s.facetSearchSet !== void 0 && s.facetSet !== void 0 && s.facetSet[facetId2] !== void 0;
};

// src/features/facets/facet-search-set/category/category-facet-search-set-state.ts
function getCategoryFacetSearchSetInitialState() {
  return {};
}

// src/features/facets/facet-search-set/category/category-facet-search-set-slice.ts
var categoryFacetSearchSetReducer = createReducer(
  getCategoryFacetSearchSetInitialState(),
  (builder) => {
    builder.addCase(registerCategoryFacetSearch, (state, action) => {
      const payload = action.payload;
      handleFacetSearchRegistration(state, payload, buildEmptyResponse);
    }).addCase(updateFacetSearch, (state, action) => {
      handleFacetSearchUpdate(state, action.payload);
    }).addCase(executeCommerceFacetSearch.pending, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchPending(state, facetId2, action.meta.requestId);
    }).addCase(executeCommerceFieldSuggest.pending, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchPending(state, facetId2, action.meta.requestId);
    }).addCase(executeFacetSearch.pending, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchPending(state, facetId2, action.meta.requestId);
    }).addCase(executeCommerceFacetSearch.rejected, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchRejected(state, facetId2);
    }).addCase(executeCommerceFieldSuggest.rejected, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchRejected(state, facetId2);
    }).addCase(executeFacetSearch.rejected, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchRejected(state, facetId2);
    }).addCase(executeCommerceFacetSearch.fulfilled, (state, action) => {
      handleCommerceFacetSearchFulfilled(
        state,
        action.payload,
        action.meta.requestId
      );
    }).addCase(executeCommerceFieldSuggest.fulfilled, (state, action) => {
      handleCommerceFacetFieldSuggestionsFulfilled(
        state,
        action.payload,
        action.meta.requestId,
        buildEmptyResponse
      );
    }).addCase(fetchQuerySuggestions2.fulfilled, (state, action) => {
      handleCommerceFetchQuerySuggestionsFulfilledForCategoryFacet(
        state,
        action.payload,
        action.meta.requestId,
        buildEmptyResponse
      );
    }).addCase(executeFacetSearch.fulfilled, (state, action) => {
      handleFacetSearchFulfilled(
        state,
        action.payload,
        action.meta.requestId
      );
    }).addCase(clearFacetSearch, (state, { payload: { facetId: facetId2 } }) => {
      handleFacetSearchClear(state, { facetId: facetId2 }, buildEmptyResponse);
    }).addCase(
      fetchProductListing2.fulfilled,
      (state) => handleFacetSearchSetClear(state, buildEmptyResponse)
    ).addCase(
      executeSearch3.fulfilled,
      (state) => handleFacetSearchSetClear(state, buildEmptyResponse)
    ).addCase(executeSearch2.fulfilled, (state) => {
      handleFacetSearchSetClear(state, buildEmptyResponse);
    });
  }
);
function buildEmptyResponse() {
  return {
    moreValuesAvailable: false,
    values: []
  };
}

// src/features/facets/facet-search-set/specific/specific-facet-search-set-state.ts
function getFacetSearchSetInitialState() {
  return {};
}

// src/features/facets/facet-search-set/specific/specific-facet-search-set-slice.ts
var specificFacetSearchSetReducer = createReducer(
  getFacetSearchSetInitialState(),
  (builder) => {
    builder.addCase(registerFacetSearch, (state, action) => {
      const payload = action.payload;
      handleFacetSearchRegistration(state, payload, buildEmptyResponse2);
    }).addCase(updateFacetSearch, (state, action) => {
      handleFacetSearchUpdate(state, action.payload);
    }).addCase(executeCommerceFacetSearch.pending, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchPending(state, facetId2, action.meta.requestId);
    }).addCase(executeCommerceFieldSuggest.pending, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchPending(state, facetId2, action.meta.requestId);
    }).addCase(executeFacetSearch.pending, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchPending(state, facetId2, action.meta.requestId);
    }).addCase(executeCommerceFacetSearch.rejected, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchRejected(state, facetId2);
    }).addCase(executeCommerceFieldSuggest.rejected, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchRejected(state, facetId2);
    }).addCase(executeFacetSearch.rejected, (state, action) => {
      const facetId2 = action.meta.arg;
      handleFacetSearchRejected(state, facetId2);
    }).addCase(executeCommerceFacetSearch.fulfilled, (state, action) => {
      handleCommerceFacetSearchFulfilled(
        state,
        action.payload,
        action.meta.requestId
      );
    }).addCase(executeCommerceFieldSuggest.fulfilled, (state, action) => {
      handleCommerceFacetFieldSuggestionsFulfilled(
        state,
        action.payload,
        action.meta.requestId,
        buildEmptyResponse2
      );
    }).addCase(fetchQuerySuggestions2.fulfilled, (state, action) => {
      handleCommerceFetchQuerySuggestionsFulfilledForRegularFacet(
        state,
        action.payload,
        action.meta.requestId,
        buildEmptyResponse2
      );
    }).addCase(executeFacetSearch.fulfilled, (state, action) => {
      handleFacetSearchFulfilled(
        state,
        action.payload,
        action.meta.requestId
      );
    }).addCase(clearFacetSearch, (state, { payload }) => {
      handleFacetSearchClear(state, payload, buildEmptyResponse2);
    }).addCase(executeSearch2.fulfilled, (state) => {
      handleFacetSearchSetClear(state, buildEmptyResponse2);
    }).addCase(
      fetchProductListing2.fulfilled,
      (state) => handleFacetSearchSetClear(state, buildEmptyResponse2)
    ).addCase(
      executeSearch3.fulfilled,
      (state) => handleFacetSearchSetClear(state, buildEmptyResponse2)
    ).addCase(
      setView,
      (state) => handleFacetSearchSetClear(state, buildEmptyResponse2)
    );
  }
);
function buildEmptyResponse2() {
  return {
    moreValuesAvailable: false,
    values: []
  };
}

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
  (id2) => {
    return validatePayload(id2, requiredNonEmptyString);
  }
);

// src/features/configuration/configuration-state.ts
var import_dayjs3 = __toESM(require_dayjs_min());
var import_timezone = __toESM(require_timezone());
var import_utc = __toESM(require_utc());
import_dayjs3.default.extend(import_utc.default);
import_dayjs3.default.extend(import_timezone.default);
var searchAPIEndpoint = "/rest/search/v2";
var analyticsAPIEndpoint = "/rest/ua";
var getConfigurationInitialState = () => ({
  organizationId: "",
  accessToken: "",
  platformUrl: platformUrl(),
  search: {
    apiBaseUrl: `${platformUrl()}${searchAPIEndpoint}`,
    locale: "en-US",
    timezone: import_dayjs3.default.tz.guess(),
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
      const keys2 = Object.keys(newReducers);
      return keys2.every((key) => key in reducers);
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
var import_pino = __toESM(require_browser());
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

// src/app/commerce-engine/commerce-engine-configuration.ts
var commerceEngineConfigurationSchema = new Schema({
  ...engineConfigurationDefinitions,
  context: new RecordValue({
    options: { required: true },
    values: contextDefinition
  }),
  cart: new RecordValue({
    values: cartDefinition
  })
});

// src/app/commerce-engine/commerce-engine.ts
var commerceEngineReducers = {
  productListing: productListingV2Reducer,
  recommendations: recommendationsReducer,
  commerceSearch: commerceSearchReducer,
  commercePagination: paginationReducer,
  commerceSort: sortReducer,
  facetOrder: facetOrderReducer,
  facetSearchSet: specificFacetSearchSetReducer,
  categoryFacetSearchSet: categoryFacetSearchSetReducer,
  commerceFacetSet: commerceFacetSetReducer,
  commerceContext: contextReducer,
  commerceQuery: queryReducer,
  cart: cartReducer,
  triggers: commerceTriggersReducer
};
function buildCommerceEngine(options) {
  const logger = buildLogger(options.loggerOptions);
  validateConfiguration(options.configuration, logger);
  const commerceClient = createCommerceAPIClient(options.configuration, logger);
  const thunkArguments = {
    ...buildThunkExtraArguments(options.configuration, logger),
    apiClient: commerceClient
  };
  const augmentedOptions = {
    ...options,
    reducers: commerceEngineReducers
  };
  const internalEngine = buildEngine(augmentedOptions, thunkArguments);
  const { state: _, ...engine } = internalEngine;
  engine.dispatch(setContext(options.configuration.context));
  if (options.configuration.cart !== void 0 && options.configuration.cart.items !== void 0) {
    engine.dispatch(setItems(options.configuration.cart.items));
  }
  return redactEngine({
    ...engine,
    get [stateKey]() {
      return internalEngine.state;
    },
    get configuration() {
      return internalEngine.state.configuration;
    },
    executeFirstSearch() {
      const action = executeSearch3();
      internalEngine.dispatch(action);
    },
    executeFirstSearchAfterStandaloneSearchBoxRedirect() {
      const action = executeSearch3();
      internalEngine.dispatch(action);
    }
  });
}
function validateConfiguration(configuration2, logger) {
  try {
    commerceEngineConfigurationSchema.validate(configuration2);
  } catch (error) {
    logger.error("Commerce engine configuration error", error);
    throw error;
  }
}
function createCommerceAPIClient(configuration2, logger) {
  return new CommerceAPIClient({
    logger,
    preprocessRequest: configuration2.preprocessRequest || NoopPreprocessRequest
  });
}

// src/features/facets/facet-set/facet-set-product-listing-v2-analytics-actions.ts
var logFacetShowMore = (facetId2) => makeCommerceAnalyticsAction(
  "analytics/commerce/facet/showMore",
  (client, state) => {
    validatePayload(facetId2, facetIdDefinition);
    const metadata = buildFacetBaseMetadata(
      facetId2,
      getStateNeededForFacetMetadata(state)
    );
    return client.makeFacetShowMore(metadata);
  }
);
var logFacetShowLess = (facetId2) => makeCommerceAnalyticsAction(
  "analytics/commerce/facet/showLess",
  (client, state) => {
    validatePayload(facetId2, facetIdDefinition);
    const metadata = buildFacetBaseMetadata(
      facetId2,
      getStateNeededForFacetMetadata(state)
    );
    return client.makeFacetShowLess(metadata);
  }
);
var logFacetUpdateSort = (payload) => makeCommerceAnalyticsAction(
  "analytics/commerce/facet/sortChange",
  (client, state) => {
    validatePayload(payload, {
      facetId: facetIdDefinition,
      criterion: new Value({
        required: true
      })
    });
    const { facetId: facetId2, criterion } = payload;
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const base = buildFacetBaseMetadata(facetId2, stateForAnalytics);
    const metadata = { ...base, criteria: criterion };
    return client.makeFacetUpdateSort(metadata);
  }
);
var logFacetClearAll = (facetId2) => makeCommerceAnalyticsAction(
  "analytics/commerce/facet/reset",
  (client, state) => {
    validatePayload(facetId2, facetIdDefinition);
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetBaseMetadata(facetId2, stateForAnalytics);
    return client.makeFacetClearAll(metadata);
  }
);
var logFacetSelect = (payload) => makeCommerceAnalyticsAction(
  "analytics/commerce/facet/select",
  (client, state) => {
    validatePayload(payload, {
      facetId: facetIdDefinition,
      facetValue: requiredNonEmptyString
    });
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetSelectionChangeMetadata(
      payload,
      stateForAnalytics
    );
    return client.makeFacetSelect(metadata);
  }
);
var logFacetDeselect = (payload) => makeCommerceAnalyticsAction(
  "analytics/commerce/facet/deselect",
  (client, state) => {
    validatePayload(payload, {
      facetId: facetIdDefinition,
      facetValue: requiredNonEmptyString
    });
    const stateForAnalytics = getStateNeededForFacetMetadata(state);
    const metadata = buildFacetSelectionChangeMetadata(
      payload,
      stateForAnalytics
    );
    return client.makeFacetDeselect(metadata);
  }
);

// src/features/commerce/product-listing/product-listing-actions-loader.ts
function loadProductListingActions(engine) {
  engine.addReducers({ productListing: productListingV2Reducer });
  return {
    fetchProductListing: fetchProductListing2
  };
}
function loadProductListingAnalyticsActions(engine) {
  engine.addReducers({});
  return {
    logFacetClearAll,
    logFacetDeselect,
    logFacetSelect,
    logFacetShowLess,
    logFacetShowMore,
    logFacetUpdateSort
  };
}

// src/features/query-set/query-set-actions.ts
var querySetDefinition = {
  id: requiredNonEmptyString,
  query: requiredEmptyAllowedString
};
var registerQuerySetQuery = createAction(
  "querySet/register",
  (payload) => validatePayload(payload, querySetDefinition)
);
var updateQuerySetQuery = createAction(
  "querySet/update",
  (payload) => validatePayload(payload, querySetDefinition)
);

// src/features/query-set/query-set-slice.ts
var querySetReducer = createReducer(
  getQuerySetInitialState(),
  (builder) => {
    builder.addCase(registerQuerySetQuery, (state, action) => {
      const { id: id2, query: query2 } = action.payload;
      if (id2 in state) {
        return;
      }
      state[id2] = query2;
    }).addCase(updateQuerySetQuery, (state, action) => {
      const { id: id2, query: query2 } = action.payload;
      updateQuery3(state, id2, query2);
    }).addCase(selectQuerySuggestion, (state, action) => {
      const { id: id2, expression } = action.payload;
      updateQuery3(state, id2, expression);
    }).addCase(executeSearch2.fulfilled, (state, action) => {
      const { queryExecuted } = action.payload;
      updateAllQuerySetQuery(state, queryExecuted);
    }).addCase(restoreSearchParameters, handleRestoreSearchParameters).addCase(restoreSearchParameters2, handleRestoreSearchParameters).addCase(change.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      for (const [id2, query2] of Object.entries(action.payload.querySet)) {
        updateQuery3(state, id2, query2);
      }
    });
  }
);
function handleRestoreSearchParameters(state, action) {
  if (!isNullOrUndefined(action.payload.q)) {
    updateAllQuerySetQuery(state, action.payload.q);
  }
}
function updateAllQuerySetQuery(state, query2) {
  Object.keys(state).forEach((id2) => state[id2] = query2);
}
var updateQuery3 = (state, id2, query2) => {
  if (id2 in state) {
    state[id2] = query2;
  }
};

// src/features/query-suggest/query-suggest-state.ts
var getQuerySuggestSetInitialState = () => ({});

// src/features/query-suggest/query-suggest-slice.ts
var querySuggestReducer = createReducer(
  getQuerySuggestSetInitialState(),
  (builder) => builder.addCase(registerQuerySuggest, (state, action) => {
    const id2 = action.payload.id;
    if (id2 in state) {
      return;
    }
    state[id2] = buildQuerySuggest(action.payload);
  }).addCase(unregisterQuerySuggest, (state, action) => {
    delete state[action.payload.id];
  }).addCase(fetchQuerySuggestions.pending, handleFetchPending).addCase(fetchQuerySuggestions.fulfilled, (state, action) => {
    const querySuggest = state[action.meta.arg.id];
    if (!querySuggest || action.meta.requestId !== querySuggest.currentRequestId) {
      return;
    }
    const { q } = action.payload;
    if (q) {
      querySuggest.partialQueries.push(
        q.replace(/;/, encodeURIComponent(";"))
      );
    }
    querySuggest.responseId = action.payload.responseId;
    querySuggest.completions = action.payload.completions;
    querySuggest.isLoading = false;
    querySuggest.error = null;
  }).addCase(fetchQuerySuggestions.rejected, handleFetchRejected).addCase(fetchQuerySuggestions2.pending, handleFetchPending).addCase(fetchQuerySuggestions2.fulfilled, (state, action) => {
    const querySuggest = state[action.meta.arg.id];
    if (!querySuggest || action.meta.requestId !== querySuggest.currentRequestId) {
      return;
    }
    const { query: query2 } = action.payload;
    if (query2) {
      querySuggest.partialQueries.push(
        query2.replace(/;/, encodeURIComponent(";"))
      );
    }
    querySuggest.responseId = action.payload.responseId;
    querySuggest.completions = action.payload.completions.map(
      (completion) => ({
        expression: completion.expression,
        highlighted: completion.highlighted,
        score: 0,
        executableConfidence: 0
      })
    );
    querySuggest.isLoading = false;
    querySuggest.error = null;
  }).addCase(fetchQuerySuggestions2.rejected, handleFetchRejected).addCase(clearQuerySuggest, (state, action) => {
    const querySuggest = state[action.payload.id];
    if (!querySuggest) {
      return;
    }
    querySuggest.responseId = "";
    querySuggest.completions = [];
    querySuggest.partialQueries = [];
  })
);
function buildQuerySuggest(config) {
  return {
    id: "",
    completions: [],
    responseId: "",
    count: 5,
    currentRequestId: "",
    error: null,
    partialQueries: [],
    isLoading: false,
    ...config
  };
}
function handleFetchPending(state, action) {
  const querySuggest = state[action.meta.arg.id];
  if (!querySuggest) {
    return;
  }
  querySuggest.currentRequestId = action.meta.requestId;
  querySuggest.isLoading = true;
}
function handleFetchRejected(state, action) {
  const querySuggest = state[action.meta.arg.id];
  if (!querySuggest) {
    return;
  }
  querySuggest.error = action.payload || null;
  querySuggest.isLoading = false;
}

// src/features/commerce/query-suggest/query-suggest-actions-loader.ts
function loadQuerySuggestActions(engine) {
  engine.addReducers({ querySuggest: querySuggestReducer, querySet: querySetReducer });
  return {
    clearQuerySuggest,
    fetchQuerySuggestions: fetchQuerySuggestions2,
    registerQuerySuggest,
    selectQuerySuggestion
  };
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

// src/features/commerce/query/query-actions-loader.ts
function loadQueryActions(engine) {
  engine.addReducers({ query: queryReducer });
  return {
    updateQuery: updateQuery2
  };
}

// src/controllers/commerce/context/headless-context.ts
function buildContext(engine, props = {}) {
  if (!loadBaseContextReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  if (props.options) {
    validateOptions(engine, contextSchema, props.options, "buildContext");
    dispatch(setContext(props.options));
  }
  return {
    ...controller,
    get state() {
      return getState().commerceContext;
    },
    setLanguage: (language) => dispatch(
      setContext({
        ...getState().commerceContext,
        language
      })
    ),
    setCountry: (country) => dispatch(
      setContext({
        ...getState().commerceContext,
        country
      })
    ),
    setCurrency: (currency) => dispatch(
      setContext({
        ...getState().commerceContext,
        currency
      })
    ),
    setUser: (user) => dispatch(setUser(user)),
    setView: (view) => dispatch(setView(view))
  };
}
function loadBaseContextReducers(engine) {
  engine.addReducers({ commerceContext: contextReducer });
  return true;
}

// src/features/facet-options/facet-options-slice.ts
var facetOptionsReducer = createReducer(
  getFacetOptionsInitialState(),
  (builder) => {
    builder.addCase(updateFacetOptions, (state, action) => {
      return { ...state, ...action.payload };
    }).addCase(executeSearch2.fulfilled, (state) => {
      state.freezeFacetOrder = false;
    }).addCase(executeSearch2.rejected, (state) => {
      state.freezeFacetOrder = false;
    }).addCase(
      change.fulfilled,
      (state, action) => action.payload?.facetOptions ?? state
    ).addCase(registerCategoryFacet, (state, action) => {
      state.facets[action.payload.facetId] = getFacetOptionsSliceInitialState();
    }).addCase(registerFacet, (state, action) => {
      state.facets[action.payload.facetId] = getFacetOptionsSliceInitialState();
    }).addCase(registerDateFacet, (state, action) => {
      state.facets[action.payload.facetId] = getFacetOptionsSliceInitialState();
    }).addCase(registerNumericFacet, (state, action) => {
      state.facets[action.payload.facetId] = getFacetOptionsSliceInitialState();
    }).addCase(enableFacet, (state, action) => {
      state.facets[action.payload].enabled = true;
    }).addCase(disableFacet, (state, action) => {
      state.facets[action.payload].enabled = false;
    }).addCase(restoreSearchParameters, (state, action) => {
      [
        ...Object.keys(action.payload.f ?? {}),
        ...Object.keys(action.payload.fExcluded ?? {}),
        ...Object.keys(action.payload.cf ?? {}),
        ...Object.keys(action.payload.nf ?? {}),
        ...Object.keys(action.payload.df ?? {})
      ].forEach((facetId2) => {
        if (!(facetId2 in state)) {
          state.facets[facetId2] = getFacetOptionsSliceInitialState();
        }
        state.facets[facetId2].enabled = true;
      });
    });
  }
);

// src/features/facets/range-facets/generic/range-facet-controller-actions.ts
var executeToggleRangeFacetSelect = createAction(
  "rangeFacet/executeToggleSelect",
  (payload) => validatePayload(
    payload,
    rangeFacetSelectionPayloadDefinition(payload.selection)
  )
);
var executeToggleRangeFacetExclude = createAction(
  "rangeFacet/executeToggleExclude",
  (payload) => validatePayload(
    payload,
    rangeFacetSelectionPayloadDefinition(payload.selection)
  )
);

// src/features/facets/range-facets/date-facet-set/date-facet-controller-actions.ts
var definition = {
  facetId: facetIdDefinition,
  selection: new RecordValue({ values: dateFacetValueDefinition })
};
var executeToggleDateFacetSelect = createAsyncThunk(
  "dateFacet/executeToggleSelect",
  (payload, { dispatch, extra: { validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, definition);
    dispatch(toggleSelectDateFacetValue(payload));
    dispatch(executeToggleRangeFacetSelect(payload));
    dispatch(updateFacetOptions());
  }
);
var executeToggleDateFacetExclude = createAsyncThunk(
  "dateFacet/executeToggleExclude",
  (payload, { dispatch, extra: { validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, definition);
    dispatch(toggleExcludeDateFacetValue(payload));
    dispatch(executeToggleRangeFacetExclude(payload));
    dispatch(updateFacetOptions());
  }
);

// src/features/search/search-slice.ts
function handleRejectedSearch(state, action) {
  const error = action.payload ?? null;
  if (error) {
    state.response = getSearchInitialState().response;
    state.results = [];
    state.questionAnswer = emptyQuestionAnswer();
  }
  state.error = error;
  state.isLoading = false;
}
function handleFulfilledSearch(state, action) {
  state.error = null;
  state.response = action.payload.response;
  state.queryExecuted = action.payload.queryExecuted;
  state.duration = action.payload.duration;
  state.isLoading = false;
}
function handleFulfilledNewSearch(state, action) {
  handleFulfilledSearch(state, action);
  state.results = action.payload.response.results;
  state.searchResponseId = action.payload.response.searchUid;
  state.questionAnswer = action.payload.response.questionAnswer;
  state.extendedResults = action.payload.response.extendedResults;
}
function handlePendingSearch(state, action) {
  state.isLoading = true;
  state.requestId = action.meta.requestId;
}
var searchReducer = createReducer(
  getSearchInitialState(),
  (builder) => {
    builder.addCase(
      executeSearch.rejected,
      (state, action) => handleRejectedSearch(state, action)
    );
    builder.addCase(
      fetchMoreResults.rejected,
      (state, action) => handleRejectedSearch(state, action)
    );
    builder.addCase(
      fetchPage.rejected,
      (state, action) => handleRejectedSearch(state, action)
    );
    builder.addCase(executeSearch.fulfilled, (state, action) => {
      handleFulfilledNewSearch(state, action);
    });
    builder.addCase(fetchMoreResults.fulfilled, (state, action) => {
      handleFulfilledSearch(state, action);
      state.results = [...state.results, ...action.payload.response.results];
    });
    builder.addCase(fetchPage.fulfilled, (state, action) => {
      handleFulfilledSearch(state, action);
      state.results = action.payload.response.results;
    });
    builder.addCase(fetchFacetValues.fulfilled, (state, action) => {
      state.response.facets = action.payload.response.facets;
      state.response.searchUid = action.payload.response.searchUid;
    });
    builder.addCase(executeSearch.pending, handlePendingSearch);
    builder.addCase(fetchMoreResults.pending, handlePendingSearch);
    builder.addCase(fetchPage.pending, handlePendingSearch);
  }
);

// src/features/facets/facet-api/value.ts
var facetValueStates = [
  "idle",
  "selected",
  "excluded"
];

// src/features/facets/range-facets/generic/interfaces/request.ts
var rangeFacetSortCriteria = [
  "ascending",
  "descending"
];
var rangeFacetRangeAlgorithm = [
  "even",
  "equiprobable"
];

// src/controllers/core/facets/range-facet/date-facet/headless-date-facet-options.ts
var dateRangeRequestDefinition2 = {
  start: new StringValue(),
  end: new StringValue(),
  endInclusive: new BooleanValue(),
  state: new StringValue({ constrainTo: facetValueStates })
};
var dateFacetOptionsSchema = new Schema({
  facetId,
  field,
  generateAutomaticRanges,
  filterFacetCount,
  injectionDepth,
  numberOfValues,
  currentValues: new ArrayValue({
    each: new RecordValue({ values: dateRangeRequestDefinition2 })
  }),
  sortCriteria: new StringValue({ constrainTo: rangeFacetSortCriteria }),
  rangeAlgorithm: new StringValue({ constrainTo: rangeFacetRangeAlgorithm })
});

// src/features/facets/range-facets/numeric-facet-set/numeric-facet-controller-actions.ts
var definition2 = {
  facetId: facetIdDefinition,
  selection: new RecordValue({ values: numericFacetValueDefinition })
};
var executeToggleNumericFacetSelect = createAsyncThunk(
  "numericFacet/executeToggleSelect",
  (payload, { dispatch, extra: { validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, definition2);
    dispatch(toggleSelectNumericFacetValue(payload));
    dispatch(executeToggleRangeFacetSelect(payload));
    dispatch(updateFacetOptions());
  }
);
var executeToggleNumericFacetExclude = createAsyncThunk(
  "numericFacet/executeToggleExclude",
  (payload, { dispatch, extra: { validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, definition2);
    dispatch(toggleExcludeNumericFacetValue(payload));
    dispatch(executeToggleRangeFacetExclude(payload));
    dispatch(updateFacetOptions());
  }
);

// src/features/facets/facet-api/request.ts
var facetResultsMustMatch = [
  "allValues",
  "atLeastOneValue"
];

// src/controllers/core/facets/range-facet/numeric-facet/headless-numeric-facet-options.ts
var numericRangeRequestDefinition = {
  start: new NumberValue(),
  end: new NumberValue(),
  endInclusive: new BooleanValue(),
  state: new StringValue({ constrainTo: facetValueStates })
};
var numericFacetOptionsSchema = new Schema({
  facetId,
  field,
  generateAutomaticRanges,
  filterFacetCount,
  injectionDepth,
  numberOfValues,
  currentValues: new ArrayValue({
    each: new RecordValue({ values: numericRangeRequestDefinition })
  }),
  sortCriteria: new StringValue({ constrainTo: rangeFacetSortCriteria }),
  resultsMustMatch: new StringValue({ constrainTo: facetResultsMustMatch }),
  rangeAlgorithm: new StringValue({ constrainTo: rangeFacetRangeAlgorithm })
});

// src/features/search-parameters/search-parameter-serializer.ts
var delimiter = "&";
var equal = "=";
var serialize = (pairSerializer) => (obj) => {
  return Object.entries(obj).map(pairSerializer).filter((str) => str).join(delimiter);
};
function serializeSpecialCharacters(key, val) {
  return `${key}${equal}${encodeURIComponent(
    val
  )}`;
}
function splitOnFirstEqual(str) {
  const [first, ...rest] = str.split(equal);
  const second = rest.join(equal);
  return [first, second];
}

// src/features/commerce/search-parameters/search-parameter-serializer.ts
var searchSerializer = {
  serialize: serialize2,
  deserialize
};
var productListingSerializer = {
  serialize: () => "",
  deserialize: () => ({})
};
function serialize2(parameters) {
  return serialize(commercePairSerializer)(parameters);
}
function deserialize(fragment) {
  const parts = fragment.split(delimiter);
  const keyValuePairs = parts.map(splitOnFirstEqual).filter(isValidPair).map(cast);
  return keyValuePairs.reduce((acc, pair) => {
    const [key, val] = pair;
    return { ...acc, [key]: val };
  }, {});
}
function commercePairSerializer(pair) {
  const [key, val] = pair;
  if (key !== "q") {
    return "";
  }
  return serializeSpecialCharacters(key, val);
}
function isValidPair(pair) {
  const validKey = isValidKey(pair[0]);
  const lengthOfTwo = pair.length === 2;
  return validKey && lengthOfTwo;
}
function isValidKey(key) {
  const supportedParameters = {
    q: true
  };
  return key in supportedParameters;
}
function cast(pair) {
  const [key, value] = pair;
  return [key, decodeURIComponent(value)];
}

// src/features/did-you-mean/did-you-mean-state.ts
var emptyNextCorrection = () => ({
  correctedQuery: "",
  corrections: [],
  originalQuery: ""
});

// src/features/did-you-mean/did-you-mean-slice-functions.ts
var setToNonEmptyQueryCorrection = (state, correction) => {
  const nonOptionalQueryCorrection = {
    ...emptyNextCorrection(),
    ...correction,
    correctedQuery: correction?.correctedQuery || correction?.corrections[0]?.correctedQuery || ""
  };
  state.queryCorrection = nonOptionalQueryCorrection;
  state.wasCorrectedTo = nonOptionalQueryCorrection.correctedQuery;
};

// src/features/commerce/did-you-mean/did-you-mean-state.ts
function getDidYouMeanInitialState() {
  return {
    wasCorrectedTo: "",
    queryCorrection: emptyNextCorrection(),
    originalQuery: ""
  };
}

// src/features/commerce/did-you-mean/did-you-mean-slice.ts
var didYouMeanReducer = createReducer(
  getDidYouMeanInitialState(),
  (builder) => {
    builder.addCase(executeSearch3.pending, (state) => {
      state.queryCorrection = emptyNextCorrection();
      state.wasCorrectedTo = "";
    }).addCase(executeSearch3.fulfilled, (state, action) => {
      const { queryCorrection } = action.payload.response;
      setToNonEmptyQueryCorrection(state, queryCorrection);
      state.originalQuery = action.payload.originalQuery;
    });
  }
);

// src/features/did-you-mean/did-you-mean-selectors.ts
var hasQueryCorrectionSelector = createSelector(
  (state) => state.queryCorrection.correctedQuery !== "" || state.wasCorrectedTo !== "",
  (hasQueryCorrection) => hasQueryCorrection
);

// src/controllers/commerce/search/did-you-mean/headless-did-you-mean.ts
function buildDidYouMean(engine) {
  if (!loadDidYouMeanReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const getState = () => engine[stateKey].didYouMean;
  const hasQueryCorrection = () => hasQueryCorrectionSelector(getState());
  return {
    ...controller,
    get state() {
      const state = getState();
      return {
        originalQuery: state.originalQuery,
        wasCorrectedTo: state.wasCorrectedTo,
        queryCorrection: state.queryCorrection,
        hasQueryCorrection: hasQueryCorrection(),
        wasAutomaticallyCorrected: hasQueryCorrection()
      };
    }
  };
}
function loadDidYouMeanReducers(engine) {
  engine.addReducers({
    didYouMean: didYouMeanReducer
  });
  return true;
}

// src/controllers/commerce/core/breadcrumb-manager/headless-core-breadcrumb-manager.ts
var facetTypeWithoutExcludeAction = "hierarchical";
var actions = {
  regular: {
    toggleSelectActionCreator: toggleSelectFacetValue,
    toggleExcludeActionCreator: toggleExcludeFacetValue
  },
  numericalRange: {
    toggleSelectActionCreator: toggleSelectNumericFacetValue,
    toggleExcludeActionCreator: toggleExcludeNumericFacetValue
  },
  dateRange: {
    toggleSelectActionCreator: toggleSelectDateFacetValue,
    toggleExcludeActionCreator: toggleExcludeDateFacetValue
  },
  [facetTypeWithoutExcludeAction]: {
    toggleSelectActionCreator: toggleSelectCategoryFacetValue
  }
};
function buildCoreBreadcrumbManager(engine, options) {
  if (!loadCommerceBreadcrumbManagerReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const createBreadcrumb = (facet) => ({
    facetId: facet.facetId,
    facetDisplayName: facet.displayName,
    field: facet.field,
    type: facet.type,
    values: facet.values.filter((value) => value.state !== "idle").map((selection) => ({
      value: selection,
      deselect: () => {
        if (selection.state === "selected") {
          dispatch(
            actions[facet.type].toggleSelectActionCreator({
              facetId: facet.facetId,
              selection
            })
          );
          dispatch(options.fetchProductsActionCreator());
        } else if (selection.state === "excluded" && facet.type !== facetTypeWithoutExcludeAction) {
          dispatch(
            actions[facet.type].toggleExcludeActionCreator({
              facetId: facet.facetId,
              selection
            })
          );
          dispatch(options.fetchProductsActionCreator());
        }
      }
    }))
  });
  const commerceFacetSelector = createSelector(
    (state) => state.facetOrder,
    (facetOrder) => {
      const breadcrumbs = facetOrder.map(
        (facetId2) => options.facetResponseSelector(engine[stateKey], facetId2)
      ).filter((facet) => facet !== void 0).map(createBreadcrumb) ?? [];
      return {
        facetBreadcrumbs: breadcrumbs,
        hasBreadcrumbs: breadcrumbs.length > 0
      };
    }
  );
  return {
    ...controller,
    deselectAll: () => {
      dispatch(deselectAllBreadcrumbs());
    },
    get state() {
      return commerceFacetSelector(engine[stateKey]);
    }
  };
}
function loadCommerceBreadcrumbManagerReducers(engine) {
  engine.addReducers({ facetOrder: facetOrderReducer, commerceFacetSet: commerceFacetSetReducer });
  return true;
}

// src/controllers/commerce/core/facets/headless-core-commerce-facet.ts
function buildCoreCommerceFacet(engine, props) {
  if (!loadCommerceFacetReducers(engine)) {
    throw loadReducerError;
  }
  const { dispatch } = engine;
  const controller = buildController(engine);
  const facetId2 = props.options.facetId;
  const getRequest = () => engine[stateKey].commerceFacetSet[facetId2]?.request;
  const getResponse = () => props.options.facetResponseSelector(engine[stateKey], facetId2);
  const getIsLoading = () => props.options.isFacetLoadingResponseSelector(engine[stateKey]);
  const getNumberOfActiveValues = () => {
    return getRequest()?.values?.filter((v) => v.state !== "idle").length ?? 0;
  };
  return {
    ...controller,
    toggleSelect: (selection) => {
      dispatch(
        props.options.toggleSelectActionCreator({
          selection,
          facetId: facetId2
        })
      );
      dispatch(props.options.fetchProductsActionCreator());
    },
    toggleExclude: (selection) => {
      if (!props.options.toggleExcludeActionCreator) {
        engine.logger.warn(
          "No toggle exclude action creator provided; calling #toggleExclude had no effect."
        );
        return;
      }
      dispatch(props.options.toggleExcludeActionCreator({ selection, facetId: facetId2 }));
      dispatch(props.options.fetchProductsActionCreator());
    },
    // Must use a function here to properly support inheritance with `this`.
    toggleSingleSelect: function(selection) {
      if (selection.state === "idle") {
        dispatch(deselectAllFacetValues(facetId2));
      }
      this.toggleSelect(selection);
    },
    // Must use a function here to properly support inheritance with `this`.
    toggleSingleExclude: function(selection) {
      if (!props.options.toggleExcludeActionCreator) {
        engine.logger.warn(
          "No toggle exclude action creator provided; calling #toggleSingleExclude had no effect."
        );
        return;
      }
      if (selection.state === "idle") {
        dispatch(deselectAllFacetValues(facetId2));
      }
      this.toggleExclude(selection);
    },
    isValueSelected: (value) => {
      return value.state === "selected";
    },
    isValueExcluded: (value) => {
      return value.state === "excluded";
    },
    deselectAll() {
      dispatch(deselectAllFacetValues(facetId2));
      dispatch(props.options.fetchProductsActionCreator());
    },
    showMoreValues() {
      const numberInState = getRequest()?.numberOfValues ?? 0;
      const initialNumberOfValues = getRequest()?.initialNumberOfValues ?? 0;
      const numberToNextMultipleOfConfigured = initialNumberOfValues - numberInState % initialNumberOfValues;
      const numberOfValues2 = numberInState + numberToNextMultipleOfConfigured;
      dispatch(updateFacetNumberOfValues({ facetId: facetId2, numberOfValues: numberOfValues2 }));
      dispatch(updateFacetIsFieldExpanded({ facetId: facetId2, isFieldExpanded: true }));
      dispatch(props.options.fetchProductsActionCreator());
    },
    showLessValues() {
      const initialNumberOfValues = getRequest()?.initialNumberOfValues ?? 0;
      const newNumberOfValues = Math.max(
        initialNumberOfValues,
        getNumberOfActiveValues()
      );
      dispatch(
        updateFacetNumberOfValues({ facetId: facetId2, numberOfValues: newNumberOfValues })
      );
      dispatch(updateFacetIsFieldExpanded({ facetId: facetId2, isFieldExpanded: false }));
      dispatch(props.options.fetchProductsActionCreator());
    },
    get state() {
      const response = getResponse();
      const canShowMoreValues = response?.moreValuesAvailable ?? false;
      const values = response?.values ?? [];
      const hasActiveValues = values.some((v) => v.state !== "idle");
      return {
        facetId: facetId2,
        type: response?.type ?? "regular",
        field: response?.field ?? "",
        displayName: response?.displayName ?? "",
        values,
        isLoading: getIsLoading(),
        canShowMoreValues,
        canShowLessValues: canShowLessValues(getRequest()),
        hasActiveValues
      };
    }
  };
}
function loadCommerceFacetReducers(engine) {
  engine.addReducers({ commerceFacetSet: commerceFacetSetReducer });
  return true;
}
var canShowLessValues = (request) => {
  if (!request) {
    return false;
  }
  const initialNumberOfValues = request.initialNumberOfValues;
  const hasIdleValues = !!request.values.find((v) => v.state === "idle");
  return (initialNumberOfValues ?? 0) < (request.numberOfValues ?? 0) && hasIdleValues;
};

// src/controllers/core/facets/facet-search/facet-search.ts
function buildGenericFacetSearch(engine, props) {
  const dispatch = engine.dispatch;
  const {
    options,
    getFacetSearch,
    executeFacetSearchActionCreator,
    executeFieldSuggestActionCreator
  } = props;
  const { facetId: facetId2 } = options;
  return {
    /** Updates the facet search query.
     * @param text The new query.
     */
    updateText(text) {
      dispatch(
        updateFacetSearch({
          facetId: facetId2,
          query: text,
          numberOfValues: getFacetSearch().initialNumberOfValues
        })
      );
    },
    /** Increases number of results returned by numberOfResults */
    showMoreResults() {
      const { initialNumberOfValues, options: options2 } = getFacetSearch();
      dispatch(
        updateFacetSearch({
          facetId: facetId2,
          numberOfValues: options2.numberOfValues + initialNumberOfValues
        })
      );
      dispatch(
        props.isForFieldSuggestions ? executeFieldSuggestActionCreator(facetId2) : executeFacetSearchActionCreator(facetId2)
      );
    },
    /** Executes a facet search to update the values.*/
    search() {
      dispatch(
        props.isForFieldSuggestions ? executeFieldSuggestActionCreator(facetId2) : executeFacetSearchActionCreator(facetId2)
      );
    },
    /** Resets the query and empties the values. */
    clear() {
      dispatch(clearFacetSearch({ facetId: facetId2 }));
    },
    /**
     * Updates the facet value captions.
     * @param captions - A dictionary that maps index field values to facet value display names.
     */
    updateCaptions(captions2) {
      dispatch(
        updateFacetSearch({
          facetId: facetId2,
          captions: captions2
        })
      );
    },
    get state() {
      const { response, isLoading, options: options2 } = getFacetSearch();
      const { query: query2 } = options2;
      const values = response.values;
      return {
        ...response,
        values,
        isLoading,
        query: query2
      };
    }
  };
}

// src/controllers/core/facets/facet-search/category/headless-category-facet-search.ts
function buildCoreCategoryFacetSearch(engine, props) {
  const { dispatch } = engine;
  const options = { ...defaultFacetSearchOptions, ...props.options };
  const { facetId: facetId2 } = options;
  const getFacetSearch = () => "state" in engine ? engine.state.categoryFacetSearchSet[facetId2] : engine[stateKey].categoryFacetSearchSet[facetId2];
  dispatch(registerCategoryFacetSearch(options));
  const genericFacetSearch = buildGenericFacetSearch(engine, {
    options,
    getFacetSearch,
    isForFieldSuggestions: props.isForFieldSuggestions,
    executeFacetSearchActionCreator: props.executeFacetSearchActionCreator,
    executeFieldSuggestActionCreator: props.executeFieldSuggestActionCreator
  });
  return {
    ...genericFacetSearch,
    select(value) {
      dispatch(
        selectCategoryFacetSearchResult({
          facetId: facetId2,
          value
        })
      );
      props.select(value);
    },
    get state() {
      return genericFacetSearch.state;
    }
  };
}

// src/controllers/commerce/core/facets/category/headless-commerce-category-facet-search.ts
function buildCategoryFacetSearch(engine, props) {
  if (!loadCategoryFacetSearchReducers(engine)) {
    throw loadReducerError;
  }
  const { showMoreResults, updateCaptions, ...restOfFacetSearch } = buildCoreCategoryFacetSearch(engine, {
    ...props,
    executeFacetSearchActionCreator: executeCommerceFacetSearch,
    executeFieldSuggestActionCreator: executeCommerceFieldSuggest
  });
  return restOfFacetSearch;
}
function loadCategoryFacetSearchReducers(engine) {
  engine.addReducers({ categoryFacetSearchSet: categoryFacetSearchSetReducer });
  return true;
}

// src/controllers/commerce/core/facets/category/headless-commerce-category-facet.ts
function buildCategoryFacet(engine, options) {
  const coreController = buildCoreCommerceFacet(engine, {
    options: {
      ...options,
      toggleSelectActionCreator: toggleSelectCategoryFacetValue
    }
  });
  const { deselectAll, isValueSelected, subscribe, toggleSelect } = coreController;
  const { dispatch } = engine;
  const getFacetId = () => coreController.state.facetId;
  const createFacetSearch = () => {
    return buildCategoryFacetSearch(engine, {
      options: { facetId: getFacetId(), ...options.facetSearch },
      select: () => {
        dispatch(options.fetchProductsActionCreator());
      },
      isForFieldSuggestions: false
    });
  };
  const facetSearch2 = createFacetSearch();
  const { state, ...restOfFacetSearch } = facetSearch2;
  const facetSearchStateSelector = createSelector(
    (state2) => state2.categoryFacetSearchSet[getFacetId()],
    (facetSearch3) => ({
      isLoading: facetSearch3.isLoading,
      moreValuesAvailable: facetSearch3.response.moreValuesAvailable,
      query: facetSearch3.options.query,
      values: facetSearch3.response.values
    })
  );
  return {
    deselectAll,
    isValueSelected,
    subscribe,
    toggleSelect,
    showMoreValues() {
      const { facetId: facetId2 } = options;
      const { activeValue, values } = this.state;
      const numberOfValues2 = (activeValue?.children.length ?? values.length) + defaultNumberOfValuesIncrement;
      dispatch(updateCategoryFacetNumberOfValues({ facetId: facetId2, numberOfValues: numberOfValues2 }));
      dispatch(options.fetchProductsActionCreator());
    },
    showLessValues() {
      const { facetId: facetId2 } = options;
      dispatch(
        updateCategoryFacetNumberOfValues({
          facetId: facetId2,
          numberOfValues: defaultNumberOfValuesIncrement
        })
      );
      dispatch(options.fetchProductsActionCreator());
    },
    facetSearch: restOfFacetSearch,
    get state() {
      const selectedValueAncestry = findActiveValueAncestry(
        coreController.state.values
      );
      const activeValue = selectedValueAncestry.length ? selectedValueAncestry[selectedValueAncestry.length - 1] : void 0;
      const canShowLessValues2 = activeValue ? activeValue.children.length > defaultNumberOfValuesIncrement : false;
      const canShowMoreValues = activeValue?.moreValuesAvailable ?? coreController.state.canShowMoreValues ?? false;
      const hasActiveValues = !!activeValue;
      return {
        ...coreController.state,
        activeValue,
        canShowLessValues: canShowLessValues2,
        canShowMoreValues,
        hasActiveValues,
        selectedValueAncestry,
        facetSearch: facetSearchStateSelector(engine[stateKey])
      };
    },
    type: "hierarchical"
  };
}

// src/controllers/commerce/core/facets/date/headless-commerce-date-facet.ts
function buildCommerceDateFacet(engine, options) {
  const coreController = buildCoreCommerceFacet(engine, {
    options: {
      ...options,
      toggleSelectActionCreator: toggleSelectDateFacetValue,
      toggleExcludeActionCreator: toggleExcludeDateFacetValue
    }
  });
  return {
    ...coreController,
    type: "dateRange"
  };
}

// src/controllers/commerce/core/facets/generator/headless-commerce-facet-generator.ts
function buildFacetGenerator(engine, options) {
  if (!loadCommerceFacetGeneratorReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const createFacetControllers = createSelector(
    [
      (state) => state.facetOrder,
      (state) => state.commerceFacetSet
    ],
    (facetOrder, commerceFacetSet) => facetOrder.map(
      (facetId2) => createFacetController(commerceFacetSet, facetId2)
    )
  );
  const createFacetController = createSelector(
    (commerceFacetSet, facetId2) => ({
      facetId: facetId2,
      type: commerceFacetSet[facetId2].request.type
    }),
    ({ type, facetId: facetId2 }) => {
      switch (type) {
        case "dateRange":
          return options.buildDateFacet(engine, { facetId: facetId2 });
        case "hierarchical":
          return options.buildCategoryFacet(engine, { facetId: facetId2 });
        case "numericalRange":
          return options.buildNumericFacet(engine, { facetId: facetId2 });
        case "regular":
          return options.buildRegularFacet(engine, { facetId: facetId2 });
      }
    }
  );
  return {
    ...controller,
    get facets() {
      return createFacetControllers(engine[stateKey]);
    },
    get state() {
      return engine[stateKey].facetOrder;
    }
  };
}
function loadCommerceFacetGeneratorReducers(engine) {
  engine.addReducers({ facetOrder: facetOrderReducer, commerceFacetSet: commerceFacetSetReducer });
  return true;
}

// src/controllers/commerce/core/facets/numeric/headless-commerce-numeric-facet.ts
function buildCommerceNumericFacet(engine, options) {
  const coreController = buildCoreCommerceFacet(engine, {
    options: {
      ...options,
      toggleSelectActionCreator: toggleSelectNumericFacetValue,
      toggleExcludeActionCreator: toggleExcludeNumericFacetValue
    }
  });
  const { dispatch } = engine;
  const { facetId: facetId2, fetchProductsActionCreator } = options;
  return {
    ...coreController,
    setRanges(ranges) {
      dispatch(
        updateNumericFacetValues({
          facetId: facetId2,
          values: ranges
        })
      );
      dispatch(fetchProductsActionCreator());
    },
    get state() {
      const response = options.facetResponseSelector(engine[stateKey], facetId2);
      if (response?.type === "numericalRange" && response.domain) {
        const { min, max } = response.domain;
        return {
          ...coreController.state,
          domain: {
            min,
            max
          }
        };
      }
      return {
        ...coreController.state
      };
    },
    type: "numericalRange"
  };
}

// src/controllers/core/facets/facet-search/specific/headless-facet-search.ts
function buildFacetSearch(engine, props) {
  const { dispatch } = engine;
  const {
    options,
    select: propsSelect,
    exclude: propsExclude,
    isForFieldSuggestions,
    executeFacetSearchActionCreator,
    executeFieldSuggestActionCreator
  } = props;
  const { facetId: facetId2 } = options;
  const getFacetSearch = () => "state" in engine ? engine.state.facetSearchSet[facetId2] : engine[stateKey].facetSearchSet[facetId2];
  dispatch(registerFacetSearch(options));
  const genericFacetSearch = buildGenericFacetSearch(engine, {
    options,
    getFacetSearch,
    isForFieldSuggestions,
    executeFacetSearchActionCreator,
    executeFieldSuggestActionCreator
  });
  return {
    ...genericFacetSearch,
    /**
     * Selects the provided value.
     * @param result A single specificFacetSearchResult object
     */
    select(value) {
      dispatch(selectFacetSearchResult({ facetId: facetId2, value }));
      propsSelect(value);
    },
    /**
     * Excludes the provided value.
     * @param result A single specificFacetSearchResult object
     */
    exclude(value) {
      dispatch(excludeFacetSearchResult({ facetId: facetId2, value }));
      propsExclude(value);
    },
    /**
     * Selects the provided value, and deselects other values.
     * @param result A single specificFacetSearchResult object
     */
    singleSelect(value) {
      dispatch(deselectAllFacetValues(facetId2));
      dispatch(selectFacetSearchResult({ facetId: facetId2, value }));
      propsSelect(value);
    },
    /**
     * Excludes the provided value, and deselects other values.
     * @param result A single specificFacetSearchResult object
     */
    singleExclude(value) {
      dispatch(deselectAllFacetValues(facetId2));
      dispatch(excludeFacetSearchResult({ facetId: facetId2, value }));
      propsExclude(value);
    },
    get state() {
      const { values } = genericFacetSearch.state;
      return {
        ...genericFacetSearch.state,
        values: values.map(({ count, displayValue, rawValue }) => ({
          count,
          displayValue,
          rawValue
        }))
      };
    }
  };
}

// src/controllers/commerce/core/facets/regular/headless-commerce-regular-facet-search.ts
function buildRegularFacetSearch(engine, props) {
  if (!loadRegularFacetSearchReducers(engine)) {
    throw loadReducerError;
  }
  const { showMoreResults, updateCaptions, ...restOfFacetSearch } = buildFacetSearch(engine, {
    ...props,
    executeFacetSearchActionCreator: executeCommerceFacetSearch,
    executeFieldSuggestActionCreator: executeCommerceFieldSuggest
  });
  return {
    ...restOfFacetSearch
  };
}
function loadRegularFacetSearchReducers(engine) {
  engine.addReducers({ facetSearchSet: specificFacetSearchSetReducer });
  return true;
}

// src/controllers/commerce/core/facets/regular/headless-commerce-regular-facet.ts
function buildCommerceRegularFacet(engine, options) {
  const coreController = buildCoreCommerceFacet(engine, {
    options: {
      ...options,
      toggleSelectActionCreator: toggleSelectFacetValue,
      toggleExcludeActionCreator: toggleExcludeFacetValue
    }
  });
  const getFacetId = () => coreController.state.facetId;
  const { dispatch } = engine;
  const createFacetSearch = () => {
    return buildRegularFacetSearch(engine, {
      options: { facetId: getFacetId(), ...options.facetSearch },
      select: () => {
        dispatch(options.fetchProductsActionCreator());
      },
      exclude: () => {
        dispatch(options.fetchProductsActionCreator());
      },
      isForFieldSuggestions: false
    });
  };
  const facetSearch2 = createFacetSearch();
  const { state, ...restOfFacetSearch } = facetSearch2;
  const facetSearchStateSelector = createSelector(
    (state2) => state2.facetSearchSet[getFacetId()],
    (facetSearch3) => ({
      facetSearch: {
        isLoading: facetSearch3.isLoading,
        moreValuesAvailable: facetSearch3.response.moreValuesAvailable,
        query: facetSearch3.options.query,
        values: facetSearch3.response.values
      }
    })
  );
  return {
    ...coreController,
    facetSearch: restOfFacetSearch,
    get state() {
      return {
        ...coreController.state,
        ...facetSearchStateSelector(engine[stateKey])
      };
    },
    type: "regular"
  };
}

// src/controllers/commerce/core/pagination/headless-core-commerce-pagination.ts
var optionsSchema = new Schema({
  pageSize: new NumberValue({ min: 1, max: 1e3, required: false })
});
function buildCorePagination(engine, props) {
  if (!loadPaginationReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  validateOptions(engine, optionsSchema, props.options, "buildCorePagination");
  const slotId = props.options?.slotId;
  if (props.options?.pageSize) {
    dispatch(
      setPageSize({
        slotId,
        pageSize: props.options.pageSize
      })
    );
  }
  if (slotId) {
    dispatch(registerRecommendationsSlotPagination({ slotId }));
  }
  const paginationSelector = createSelector(
    (state) => slotId ? state.commercePagination.recommendations[slotId] : state.commercePagination.principal,
    ({ perPage, ...rest }) => ({
      pageSize: perPage ?? 0,
      ...rest
    })
  );
  return {
    ...controller,
    get state() {
      return paginationSelector(engine[stateKey]);
    },
    selectPage(page) {
      dispatch(
        selectPage({
          slotId,
          page
        })
      );
      dispatch(props.fetchProductsActionCreator());
    },
    nextPage() {
      dispatch(nextPage2({ slotId }));
      dispatch(props.fetchProductsActionCreator());
    },
    previousPage() {
      dispatch(previousPage2({ slotId }));
      dispatch(props.fetchProductsActionCreator());
    },
    setPageSize(pageSize) {
      dispatch(setPageSize({ slotId, pageSize }));
      dispatch(props.fetchProductsActionCreator());
    },
    fetchMoreProducts() {
      dispatch(props.fetchMoreProductsActionCreator());
    }
  };
}
function loadPaginationReducers(engine) {
  engine.addReducers({
    commercePagination: paginationReducer
  });
  return true;
}

// src/features/commerce/context/product/product-actions.ts
var productView = createAsyncThunk("commerce/product/view", async (product, { extra, getState }) => {
  const { relay } = extra;
  const currency = getCurrency(getState().commerceContext);
  const payload = { currency, product };
  relay.emit("ec.productView", payload);
});
var productClick = createAsyncThunk(
  "commerce/product/click",
  async (clickPayload, { extra, getState }) => {
    const { relay } = extra;
    const currency = getCurrency(getState().commerceContext);
    const payload = { currency, ...clickPayload };
    relay.emit("ec.productClick", payload);
  }
);

// src/controllers/core/interactive-result/headless-core-interactive-result.ts
function buildInteractiveResultCore(engine, props, action) {
  if (!loadInteractiveResultCoreReducers(engine)) {
    throw loadReducerError;
  }
  const defaultDelay = 1e3;
  const options = {
    selectionDelay: defaultDelay,
    debounceWait: defaultDelay,
    ...props.options
  };
  let longPressTimer;
  return {
    select: r(action, options.debounceWait, { isImmediate: true }),
    beginDelayedSelect() {
      longPressTimer = setTimeout(action, options.selectionDelay);
    },
    cancelPendingSelect() {
      longPressTimer && clearTimeout(longPressTimer);
    }
  };
}
function loadInteractiveResultCoreReducers(engine) {
  engine.addReducers({ configuration });
  return true;
}

// src/controllers/commerce/core/product-list/headless-core-interactive-product.ts
function buildCoreInteractiveProduct(engine, props) {
  let wasOpened = false;
  const logAnalyticsIfNeverOpened = () => {
    if (wasOpened) {
      return;
    }
    wasOpened = true;
    engine.dispatch(
      productClick({
        product: props.options.product,
        position: props.options.position,
        responseId: props.responseIdSelector(engine[stateKey])
      })
    );
  };
  return buildInteractiveResultCore(engine, props, logAnalyticsIfNeverOpened);
}

// src/controllers/commerce/core/sort/headless-core-commerce-sort.ts
function validateSortInitialState(engine, state) {
  if (!state) {
    return;
  }
  const schema = new Schema({
    criterion: sortCriterionDefinition2
  });
  validateInitialState(engine, schema, state, "buildSort");
}
function buildCoreSort(engine, props) {
  if (!loadSortReducers(engine)) {
    throw loadReducerError;
  }
  const { dispatch } = engine;
  const controller = buildController(engine);
  validateSortInitialState(engine, props.initialState);
  const criterion = props.initialState?.criterion;
  if (criterion) {
    dispatch(applySort(criterion));
  }
  return {
    ...controller,
    get state() {
      return engine[stateKey].commerceSort;
    },
    sortBy(criterion2) {
      dispatch(applySort(criterion2));
      dispatch(updatePage(0));
      dispatch(props.fetchProductsActionCreator());
    },
    isSortedBy(criterion2) {
      return JSON.stringify(this.state.appliedSort) === JSON.stringify(criterion2);
    },
    isAvailable(criterion2) {
      return this.state.availableSorts.some(
        (availableCriterion) => JSON.stringify(availableCriterion) === JSON.stringify(criterion2)
      );
    }
  };
}
function loadSortReducers(engine) {
  engine.addReducers({ commerceSort: sortReducer });
  return true;
}

// ../../node_modules/fast-equals/dist/esm/index.mjs
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function combineComparators(comparatorA, comparatorB) {
  return function isEqual(a, b, state) {
    return comparatorA(a, b, state) && comparatorB(a, b, state);
  };
}
function createIsCircular(areItemsEqual) {
  return function isCircular(a, b, state) {
    if (!a || !b || typeof a !== "object" || typeof b !== "object") {
      return areItemsEqual(a, b, state);
    }
    var cache = state.cache;
    var cachedA = cache.get(a);
    var cachedB = cache.get(b);
    if (cachedA && cachedB) {
      return cachedA === b && cachedB === a;
    }
    cache.set(a, b);
    cache.set(b, a);
    var result = areItemsEqual(a, b, state);
    cache.delete(a);
    cache.delete(b);
    return result;
  };
}
function getStrictProperties(object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
var hasOwn = Object.hasOwn || function(object, property) {
  return hasOwnProperty.call(object, property);
};
function sameValueZeroEqual(a, b) {
  return a || b ? a === b : a === b || a !== a && b !== b;
}
var OWNER = "_owner";
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var keys = Object.keys;
function areArraysEqual(a, b, state) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!state.equals(a[index], b[index], index, index, a, b, state)) {
      return false;
    }
  }
  return true;
}
function areDatesEqual(a, b) {
  return sameValueZeroEqual(a.getTime(), b.getTime());
}
function areMapsEqual(a, b, state) {
  if (a.size !== b.size) {
    return false;
  }
  var matchedIndices = {};
  var aIterable = a.entries();
  var index = 0;
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.entries();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      var _a = aResult.value, aKey = _a[0], aValue = _a[1];
      var _b = bResult.value, bKey = _b[0], bValue = _b[1];
      if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aKey, bKey, index, matchIndex, a, b, state) && state.equals(aValue, bValue, aKey, bKey, a, b, state))) {
        matchedIndices[matchIndex] = true;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
    index++;
  }
  return true;
}
function areObjectsEqual(a, b, state) {
  var properties = keys(a);
  var index = properties.length;
  if (keys(b).length !== index) {
    return false;
  }
  var property;
  while (index-- > 0) {
    property = properties[index];
    if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
      return false;
    }
    if (!hasOwn(b, property) || !state.equals(a[property], b[property], property, property, a, b, state)) {
      return false;
    }
  }
  return true;
}
function areObjectsEqualStrict(a, b, state) {
  var properties = getStrictProperties(a);
  var index = properties.length;
  if (getStrictProperties(b).length !== index) {
    return false;
  }
  var property;
  var descriptorA;
  var descriptorB;
  while (index-- > 0) {
    property = properties[index];
    if (property === OWNER && (a.$$typeof || b.$$typeof) && a.$$typeof !== b.$$typeof) {
      return false;
    }
    if (!hasOwn(b, property)) {
      return false;
    }
    if (!state.equals(a[property], b[property], property, property, a, b, state)) {
      return false;
    }
    descriptorA = getOwnPropertyDescriptor(a, property);
    descriptorB = getOwnPropertyDescriptor(b, property);
    if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(a, b) {
  return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
function areRegExpsEqual(a, b) {
  return a.source === b.source && a.flags === b.flags;
}
function areSetsEqual(a, b, state) {
  if (a.size !== b.size) {
    return false;
  }
  var matchedIndices = {};
  var aIterable = a.values();
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.values();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state))) {
        matchedIndices[matchIndex] = true;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
}
function areTypedArraysEqual(a, b) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
var ARGUMENTS_TAG = "[object Arguments]";
var BOOLEAN_TAG = "[object Boolean]";
var DATE_TAG = "[object Date]";
var MAP_TAG = "[object Map]";
var NUMBER_TAG = "[object Number]";
var OBJECT_TAG = "[object Object]";
var REG_EXP_TAG = "[object RegExp]";
var SET_TAG = "[object Set]";
var STRING_TAG = "[object String]";
var isArray2 = Array.isArray;
var isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null;
var assign2 = Object.assign;
var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
function createEqualityComparator(_a) {
  var areArraysEqual2 = _a.areArraysEqual, areDatesEqual2 = _a.areDatesEqual, areMapsEqual2 = _a.areMapsEqual, areObjectsEqual2 = _a.areObjectsEqual, arePrimitiveWrappersEqual2 = _a.arePrimitiveWrappersEqual, areRegExpsEqual2 = _a.areRegExpsEqual, areSetsEqual2 = _a.areSetsEqual, areTypedArraysEqual2 = _a.areTypedArraysEqual;
  return function comparator(a, b, state) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null || typeof a !== "object" || typeof b !== "object") {
      return a !== a && b !== b;
    }
    var constructor = a.constructor;
    if (constructor !== b.constructor) {
      return false;
    }
    if (constructor === Object) {
      return areObjectsEqual2(a, b, state);
    }
    if (isArray2(a)) {
      return areArraysEqual2(a, b, state);
    }
    if (isTypedArray != null && isTypedArray(a)) {
      return areTypedArraysEqual2(a, b, state);
    }
    if (constructor === Date) {
      return areDatesEqual2(a, b, state);
    }
    if (constructor === RegExp) {
      return areRegExpsEqual2(a, b, state);
    }
    if (constructor === Map) {
      return areMapsEqual2(a, b, state);
    }
    if (constructor === Set) {
      return areSetsEqual2(a, b, state);
    }
    var tag = getTag(a);
    if (tag === DATE_TAG) {
      return areDatesEqual2(a, b, state);
    }
    if (tag === REG_EXP_TAG) {
      return areRegExpsEqual2(a, b, state);
    }
    if (tag === MAP_TAG) {
      return areMapsEqual2(a, b, state);
    }
    if (tag === SET_TAG) {
      return areSetsEqual2(a, b, state);
    }
    if (tag === OBJECT_TAG) {
      return typeof a.then !== "function" && typeof b.then !== "function" && areObjectsEqual2(a, b, state);
    }
    if (tag === ARGUMENTS_TAG) {
      return areObjectsEqual2(a, b, state);
    }
    if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
      return arePrimitiveWrappersEqual2(a, b, state);
    }
    return false;
  };
}
function createEqualityComparatorConfig(_a) {
  var circular = _a.circular, createCustomConfig = _a.createCustomConfig, strict = _a.strict;
  var config = {
    areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
    areDatesEqual,
    areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
    areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
    areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual
  };
  if (createCustomConfig) {
    config = assign2({}, config, createCustomConfig(config));
  }
  if (circular) {
    var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
    var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
    var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
    var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
    config = assign2({}, config, {
      areArraysEqual: areArraysEqual$1,
      areMapsEqual: areMapsEqual$1,
      areObjectsEqual: areObjectsEqual$1,
      areSetsEqual: areSetsEqual$1
    });
  }
  return config;
}
function createInternalEqualityComparator(compare) {
  return function(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
    return compare(a, b, state);
  };
}
function createIsEqual(_a) {
  var circular = _a.circular, comparator = _a.comparator, createState = _a.createState, equals = _a.equals, strict = _a.strict;
  if (createState) {
    return function isEqual(a, b) {
      var _a2 = createState(), _b = _a2.cache, cache = _b === void 0 ? circular ? /* @__PURE__ */ new WeakMap() : void 0 : _b, meta = _a2.meta;
      return comparator(a, b, {
        cache,
        equals,
        meta,
        strict
      });
    };
  }
  if (circular) {
    return function isEqual(a, b) {
      return comparator(a, b, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals,
        meta: void 0,
        strict
      });
    };
  }
  var state = {
    cache: void 0,
    equals,
    meta: void 0,
    strict
  };
  return function isEqual(a, b) {
    return comparator(a, b, state);
  };
}
var deepEqual = createCustomEqual();
var strictDeepEqual = createCustomEqual({ strict: true });
var circularDeepEqual = createCustomEqual({ circular: true });
var strictCircularDeepEqual = createCustomEqual({
  circular: true,
  strict: true
});
var shallowEqual = createCustomEqual({
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictShallowEqual = createCustomEqual({
  strict: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var circularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictCircularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  },
  strict: true
});
function createCustomEqual(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.circular, circular = _a === void 0 ? false : _a, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b = options.strict, strict = _b === void 0 ? false : _b;
  var config = createEqualityComparatorConfig(options);
  var comparator = createEqualityComparator(config);
  var equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
  return createIsEqual({ circular, comparator, createState, equals, strict });
}

// src/utils/compare-utils.ts
function arrayEqual(firstArray, secondArray, isEqual = (first, second) => first === second) {
  return firstArray.length === secondArray.length && firstArray.findIndex((val, i) => !isEqual(secondArray[i], val)) === -1;
}
function arrayEqualAnyOrder(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  return firstArray.every(
    (firstVal) => secondArray.findIndex(
      (secondVal) => deepEqualAnyOrder(firstVal, secondVal)
    ) !== -1
  );
}
var deepEqualAnyOrder = createCustomEqual({
  createCustomConfig: (config) => {
    return {
      ...config,
      areArraysEqual: arrayEqualAnyOrder
    };
  }
});

// src/features/facets/automatic-facet-set/automatic-facet-set-actions.ts
var numberOfValuesDefinition = new NumberValue({
  min: NUMBER_OF_VALUE_MINIMUM,
  default: NUMBER_OF_VALUE_DEFAULT,
  required: false
});
var desiredCountDefinition = new NumberValue({
  min: DESIRED_COUNT_MINIMUM,
  max: DESIRED_COUNT_MAXIMUM,
  default: DESIRED_COUNT_DEFAULT,
  required: false
});
var optionsSchema2 = {
  desiredCount: desiredCountDefinition,
  numberOfValues: numberOfValuesDefinition
};
var setOptions = createAction(
  "automaticFacet/setOptions",
  (payload) => validatePayload(payload, optionsSchema2)
);
var deselectAllAutomaticFacetValues = createAction(
  "automaticFacet/deselectAll",
  (payload) => validatePayload(payload, facetIdDefinition)
);
var fieldDefinition = requiredNonEmptyString;
var toggleSelectAutomaticFacetValue = createAction(
  "automaticFacet/toggleSelectValue",
  (payload) => validatePayload(payload, {
    field: fieldDefinition,
    selection: new RecordValue({ values: facetValueDefinition })
  })
);

// src/features/pagination/pagination-slice.ts
var paginationReducer2 = createReducer(
  getPaginationInitialState(),
  (builder) => {
    builder.addCase(registerNumberOfResults, (state, action) => {
      const page = determineCurrentPage(state);
      const newNumberOfResults = action.payload;
      state.defaultNumberOfResults = state.numberOfResults = newNumberOfResults;
      state.firstResult = calculateFirstResult(page, newNumberOfResults);
    }).addCase(updateNumberOfResults, (state, action) => {
      state.numberOfResults = action.payload;
      state.firstResult = 0;
    }).addCase(updateActiveTab, (state) => {
      state.firstResult = 0;
    }).addCase(registerPage, (state, action) => {
      const page = action.payload;
      state.firstResult = calculateFirstResult(page, state.numberOfResults);
    }).addCase(updatePage, (state, action) => {
      const page = action.payload;
      state.firstResult = calculateFirstResult(page, state.numberOfResults);
    }).addCase(previousPage, (state) => {
      const page = determineCurrentPage(state);
      const previousPage3 = Math.max(page - 1, minimumPage);
      state.firstResult = calculateFirstResult(
        previousPage3,
        state.numberOfResults
      );
    }).addCase(nextPage, (state) => {
      const page = determineCurrentPage(state);
      const maxPage = determineMaxPage(state);
      const nextPage3 = Math.min(page + 1, maxPage);
      state.firstResult = calculateFirstResult(
        nextPage3,
        state.numberOfResults
      );
    }).addCase(change.fulfilled, (state, action) => {
      if (action.payload) {
        state.numberOfResults = action.payload.pagination.numberOfResults;
        state.firstResult = action.payload.pagination.firstResult;
      }
    }).addCase(restoreSearchParameters, (state, action) => {
      state.firstResult = action.payload.firstResult ?? state.firstResult;
      state.numberOfResults = action.payload.numberOfResults ?? state.defaultNumberOfResults;
    }).addCase(executeSearch2.fulfilled, (state, action) => {
      const { response } = action.payload;
      state.totalCountFiltered = response.totalCountFiltered;
    }).addCase(fetchProductListing.fulfilled, (state, action) => {
      const { response } = action.payload;
      state.totalCountFiltered = response.pagination.totalCount;
    }).addCase(deselectAllFacetValues, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleExcludeDateFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleExcludeFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleExcludeNumericFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(excludeFacetSearchResult, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleSelectFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(deselectAllCategoryFacetValues, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleSelectCategoryFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(selectCategoryFacetSearchResult, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleSelectDateFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleSelectNumericFacetValue, (state) => {
      handlePaginationReset2(state);
    }).addCase(deselectAllBreadcrumbs, (state) => {
      handlePaginationReset2(state);
    }).addCase(updateDateFacetValues, (state) => {
      handlePaginationReset2(state);
    }).addCase(updateNumericFacetValues, (state) => {
      handlePaginationReset2(state);
    }).addCase(selectFacetSearchResult, (state) => {
      handlePaginationReset2(state);
    }).addCase(toggleSelectAutomaticFacetValue, (state) => {
      handlePaginationReset2(state);
    });
  }
);
function handlePaginationReset2(state) {
  state.firstResult = getPaginationInitialState().firstResult;
}
function determineCurrentPage(state) {
  const { firstResult, numberOfResults } = state;
  return calculatePage(firstResult, numberOfResults);
}
function determineMaxPage(state) {
  const { totalCountFiltered, numberOfResults } = state;
  return calculateMaxPage(totalCountFiltered, numberOfResults);
}
function calculateFirstResult(page, numberOfResults) {
  return (page - 1) * numberOfResults;
}
function calculatePage(firstResult, numberOfResults) {
  return Math.round(firstResult / numberOfResults) + 1;
}
function calculateMaxPage(totalCountFiltered, numberOfResults) {
  const totalCount = Math.min(
    totalCountFiltered,
    maximumNumberOfResultsFromIndex
  );
  return Math.ceil(totalCount / numberOfResults);
}

// src/controllers/core/search-parameter-manager/headless-core-search-parameter-manager.ts
var initialStateSchema = new Schema({
  parameters: new RecordValue({
    options: { required: true },
    values: searchParametersDefinition
  })
});

// src/controllers/url-manager/headless-url-manager.ts
var initialStateSchema2 = new Schema({
  fragment: new StringValue()
});

// src/controllers/commerce/core/url-manager/headless-core-url-manager.ts
function buildCoreUrlManager(engine, props) {
  let lastRequestId;
  function updateLastRequestId() {
    lastRequestId = props.requestIdSelector(engine[stateKey]);
  }
  function hasRequestIdChanged() {
    return lastRequestId !== props.requestIdSelector(engine[stateKey]);
  }
  validateInitialState(
    engine,
    initialStateSchema2,
    props.initialState,
    "buildUrlManager"
  );
  const controller = buildController(engine);
  let previousFragment = props.initialState.fragment;
  updateLastRequestId();
  const parameterManager = props.parameterManagerBuilder(engine, {
    initialState: {
      parameters: props.serializer.deserialize(previousFragment)
    }
  });
  return {
    ...controller,
    subscribe(listener2) {
      const strictListener = () => {
        const newFragment = this.state.fragment;
        if (!areFragmentsEquivalent(
          props.serializer.deserialize,
          previousFragment,
          newFragment
        ) && hasRequestIdChanged()) {
          previousFragment = newFragment;
          listener2();
        }
        updateLastRequestId();
      };
      strictListener();
      return engine.subscribe(strictListener);
    },
    get state() {
      return {
        fragment: props.serializer.serialize(parameterManager.state.parameters)
      };
    },
    synchronize(fragment) {
      previousFragment = fragment;
      const parameters = props.serializer.deserialize(fragment);
      parameterManager.synchronize(parameters);
    }
  };
}
function areFragmentsEquivalent(deserialize2, fragment1, fragment2) {
  if (fragment1 === fragment2) {
    return true;
  }
  const params1 = deserialize2(fragment1);
  const params2 = deserialize2(fragment2);
  return deepEqualAnyOrder(params1, params2);
}

// src/controllers/commerce/core/sub-controller/headless-sub-controller.ts
function buildSearchSubControllers(engine, subControllerProps) {
  return {
    ...buildSearchAndListingsSubControllers(engine, subControllerProps),
    didYouMean() {
      return buildDidYouMean(engine);
    }
  };
}
function buildProductListingSubControllers(engine, subControllerProps) {
  return buildSearchAndListingsSubControllers(engine, subControllerProps);
}
function buildSearchAndListingsSubControllers(engine, subControllerProps) {
  const {
    fetchProductsActionCreator,
    facetResponseSelector: facetResponseSelector3,
    isFacetLoadingResponseSelector: isFacetLoadingResponseSelector4,
    requestIdSelector: requestIdSelector3,
    parameterManagerBuilder,
    serializer
  } = subControllerProps;
  return {
    ...buildBaseSubControllers(engine, subControllerProps),
    sort(props) {
      return buildCoreSort(engine, {
        ...props,
        fetchProductsActionCreator
      });
    },
    facetGenerator() {
      const commonOptions = {
        fetchProductsActionCreator,
        facetResponseSelector: facetResponseSelector3,
        isFacetLoadingResponseSelector: isFacetLoadingResponseSelector4
      };
      return buildFacetGenerator(engine, {
        buildRegularFacet: (_engine, options) => buildCommerceRegularFacet(engine, { ...options, ...commonOptions }),
        buildNumericFacet: (_engine, options) => buildCommerceNumericFacet(engine, { ...options, ...commonOptions }),
        buildDateFacet: (_engine, options) => buildCommerceDateFacet(engine, { ...options, ...commonOptions }),
        buildCategoryFacet: (_engine, options) => buildCategoryFacet(engine, { ...options, ...commonOptions })
      });
    },
    breadcrumbManager() {
      return buildCoreBreadcrumbManager(engine, {
        facetResponseSelector: facetResponseSelector3,
        fetchProductsActionCreator
      });
    },
    urlManager(props) {
      return buildCoreUrlManager(engine, {
        ...props,
        requestIdSelector: requestIdSelector3,
        parameterManagerBuilder,
        serializer
      });
    }
  };
}
function buildBaseSubControllers(engine, subControllerProps) {
  const {
    responseIdSelector: responseIdSelector3,
    fetchProductsActionCreator,
    fetchMoreProductsActionCreator,
    slotId
  } = subControllerProps;
  return {
    interactiveProduct(props) {
      return buildCoreInteractiveProduct(engine, {
        ...props,
        responseIdSelector: responseIdSelector3
      });
    },
    pagination(props) {
      return buildCorePagination(engine, {
        ...props,
        options: {
          ...props?.options,
          slotId
        },
        fetchProductsActionCreator,
        fetchMoreProductsActionCreator
      });
    }
  };
}

// src/features/commerce/facets/facet-set/facet-set-selector.ts
function isFacetResponse(state, response) {
  return !!response && response.facetId in state.commerceFacetSet;
}

// src/controllers/commerce/product-listing/facets/headless-product-listing-facet-options.ts
var facetResponseSelector = (state, facetId2) => {
  const response = state.productListing.facets.find(
    (response2) => response2.facetId === facetId2
  );
  if (isFacetResponse(state, response)) {
    return response;
  }
  return void 0;
};
var isFacetLoadingResponseSelector2 = (state) => state.productListing.isLoading;

// src/controllers/commerce/core/parameter-manager/headless-core-parameter-manager.ts
var initialStateSchema3 = (parametersDefinition) => new Schema({
  parameters: new RecordValue({
    options: { required: true },
    values: parametersDefinition
  })
});
function buildCoreParameterManager(engine, props) {
  const { dispatch } = engine;
  const controller = buildController(engine);
  validateInitialState(
    engine,
    initialStateSchema3(props.parametersDefinition),
    props.initialState,
    "buildCoreParameterManager"
  );
  dispatch(props.restoreActionCreator(props.initialState.parameters));
  return {
    ...controller,
    synchronize(parameters) {
      const activeParams = props.activeParametersSelector(engine[stateKey]);
      const oldParams = props.enrichParameters(engine[stateKey], activeParams);
      const newParams = props.enrichParameters(engine[stateKey], parameters);
      if (deepEqualAnyOrder(oldParams, newParams)) {
        return;
      }
      dispatch(props.restoreActionCreator(parameters));
      dispatch(props.fetchProductsActionCreator());
    },
    get state() {
      const parameters = props.activeParametersSelector(engine[stateKey]);
      return { parameters };
    }
  };
}

// src/controllers/commerce/product-listing/parameter-manager/headless-product-listing-parameter-manager.ts
function buildProductListingParameterManager(engine, props) {
  return buildCoreParameterManager(engine, {
    ...props,
    parametersDefinition: productListingParametersDefinition,
    activeParametersSelector,
    restoreActionCreator: restoreProductListingParameters,
    fetchProductsActionCreator: fetchProductListing2,
    enrichParameters: () => ({})
  });
}
function activeParametersSelector(_state) {
  return {};
}

// src/controllers/commerce/product-listing/headless-product-listing.ts
function buildProductListing(engine) {
  if (!loadBaseProductListingReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  const subControllers = buildProductListingSubControllers(engine, {
    responseIdSelector,
    fetchProductsActionCreator: fetchProductListing2,
    fetchMoreProductsActionCreator: fetchMoreProducts,
    facetResponseSelector,
    isFacetLoadingResponseSelector: isFacetLoadingResponseSelector2,
    requestIdSelector,
    parameterManagerBuilder: buildProductListingParameterManager,
    serializer: productListingSerializer
  });
  return {
    ...controller,
    ...subControllers,
    get state() {
      const { products, error, isLoading, responseId } = getState().productListing;
      return {
        products,
        error,
        isLoading,
        responseId
      };
    },
    refresh: () => dispatch(fetchProductListing2())
  };
}
function loadBaseProductListingReducers(engine) {
  engine.addReducers({ productListing: productListingV2Reducer, commerceContext: contextReducer, configuration });
  return true;
}

// src/controllers/commerce/recommendations/headless-recommendations.ts
function buildRecommendations(engine, props) {
  if (!loadBaseRecommendationsReducers(engine)) {
    throw loadReducerError;
  }
  validateInitialState(
    engine,
    recommendationsOptionsSchema,
    props.options,
    "buildRecommendations"
  );
  const controller = buildController(engine);
  const { dispatch } = engine;
  const { slotId, productId } = props.options;
  dispatch(registerRecommendationsSlot({ slotId }));
  const recommendationStateSelector = createSelector(
    (state) => state.recommendations[slotId],
    (recommendations) => recommendations
  );
  const subControllers = buildBaseSubControllers(engine, {
    slotId,
    responseIdSelector: (state) => state.recommendations[slotId].responseId,
    fetchProductsActionCreator: () => fetchRecommendations({ slotId }),
    fetchMoreProductsActionCreator: () => fetchMoreRecommendations({ slotId })
  });
  return {
    ...controller,
    ...subControllers,
    get state() {
      return recommendationStateSelector(engine[stateKey]);
    },
    refresh: () => dispatch(fetchRecommendations({ slotId, productId }))
  };
}
function loadBaseRecommendationsReducers(engine) {
  engine.addReducers({ recommendations: recommendationsReducer });
  return true;
}

// src/controllers/commerce/product-view/headless-product-view.ts
function buildProductView(engine) {
  return {
    view: (product) => {
      engine.dispatch(productView(product));
    }
  };
}

// src/controllers/commerce/search/facets/headless-search-facet-options.ts
var facetResponseSelector2 = (state, facetId2) => {
  const response = state.commerceSearch.facets.find(
    (response2) => response2.facetId === facetId2
  );
  if (isFacetResponse(state, response)) {
    return response;
  }
  return void 0;
};
var isFacetLoadingResponseSelector3 = (state) => state.commerceSearch.isLoading;

// src/controllers/commerce/search/parameter-manager/headless-search-parameter-manager.ts
function buildSearchParameterManager2(engine, props) {
  if (!loadReducers(engine)) {
    throw loadReducerError;
  }
  return buildCoreParameterManager(engine, {
    ...props,
    activeParametersSelector: activeParametersSelector2,
    restoreActionCreator: restoreSearchParameters2,
    parametersDefinition: searchParametersDefinition2,
    fetchProductsActionCreator: executeSearch3,
    enrichParameters: (_state, activeParams) => ({
      q: getCommerceQueryInitialState().query,
      ...activeParams
    })
  });
}
function activeParametersSelector2(state) {
  return {
    ...getQ(state)
  };
}
function getQ(state) {
  if (state.commerceQuery === void 0) {
    return {};
  }
  const query2 = state.commerceQuery.query;
  const shouldInclude = query2 !== getCommerceQueryInitialState().query;
  return shouldInclude ? { q: query2 } : {};
}
function loadReducers(engine) {
  engine.addReducers({
    commerceQuery: queryReducer
  });
  return true;
}

// src/controllers/commerce/search/headless-search.ts
function buildSearch(engine) {
  if (!loadBaseSearchReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  const subControllers = buildSearchSubControllers(engine, {
    responseIdSelector: responseIdSelector2,
    fetchProductsActionCreator: executeSearch3,
    fetchMoreProductsActionCreator: fetchMoreProducts2,
    facetResponseSelector: facetResponseSelector2,
    isFacetLoadingResponseSelector: isFacetLoadingResponseSelector3,
    requestIdSelector: requestIdSelector2,
    parameterManagerBuilder: buildSearchParameterManager2,
    serializer: searchSerializer
  });
  return {
    ...controller,
    ...subControllers,
    get state() {
      return getState().commerceSearch;
    },
    // eslint-disable-next-line @cspell/spellchecker
    // TODO CAPI-244: Handle analytics
    executeFirstSearch() {
      const firstSearchExecuted = responseIdSelector2(getState()) !== "";
      if (firstSearchExecuted) {
        return;
      }
      dispatch(executeSearch3());
    }
  };
}
function loadBaseSearchReducers(engine) {
  engine.addReducers({
    commerceContext: contextReducer,
    configuration,
    commerceSearch: commerceSearchReducer,
    commerceQuery: queryReducer
  });
  return true;
}

// src/features/query/query-slice.ts
var queryReducer2 = createReducer(
  getQueryInitialState(),
  (builder) => builder.addCase(updateQuery, (state, action) => ({ ...state, ...action.payload })).addCase(applyDidYouMeanCorrection, (state, action) => {
    state.q = action.payload;
  }).addCase(selectQuerySuggestion, (state, action) => {
    state.q = action.payload.expression;
  }).addCase(
    change.fulfilled,
    (state, action) => action.payload?.query ?? state
  ).addCase(restoreSearchParameters, (state, action) => {
    state.q = action.payload.q ?? state.q;
    state.enableQuerySyntax = action.payload.enableQuerySyntax ?? state.enableQuerySyntax;
  })
);

// src/utils/highlight.ts
function getHighlightedSuggestion(suggestion, options) {
  suggestion = escape(suggestion);
  return suggestion.replace(
    /\[(.*?)\]|\{(.*?)\}|\((.*?)\)/g,
    (part, notMatched, matched, corrected) => {
      if (notMatched) {
        return suggestionWithDelimiters(notMatched, options.notMatchDelimiters);
      }
      if (matched) {
        return suggestionWithDelimiters(matched, options.exactMatchDelimiters);
      }
      if (corrected) {
        return suggestionWithDelimiters(
          corrected,
          options.correctionDelimiters
        );
      }
      return part;
    }
  );
}
function suggestionWithDelimiters(suggestion, delimiters) {
  if (delimiters) {
    return delimiters.open + suggestion + delimiters.close;
  }
  return suggestion;
}
function escape(str) {
  const mapOfCharToEscape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };
  const source = "(?:" + Object.keys(mapOfCharToEscape).join("|") + ")";
  const testRegexp = RegExp(source);
  const replaceRegexp = RegExp(source, "g");
  return testRegexp.test(str) ? str.replace(replaceRegexp, (substring) => mapOfCharToEscape[substring]) : str;
}

// src/controllers/core/search-box/headless-core-search-box-options.ts
var openCloseDelimitersDefinition = {
  open: new StringValue(),
  close: new StringValue()
};
var searchBoxOptionDefinitions = {
  id: requiredNonEmptyString,
  numberOfSuggestions: new NumberValue({ min: 0 }),
  enableQuerySyntax: new BooleanValue(),
  highlightOptions: new RecordValue({
    values: {
      notMatchDelimiters: new RecordValue({
        values: openCloseDelimitersDefinition
      }),
      exactMatchDelimiters: new RecordValue({
        values: openCloseDelimitersDefinition
      }),
      correctionDelimiters: new RecordValue({
        values: openCloseDelimitersDefinition
      })
    }
  }),
  clearFilters: new BooleanValue()
};
var searchBoxOptionsSchema = new Schema(
  searchBoxOptionDefinitions
);

// src/controllers/core/search-box/headless-core-search-box.ts
function getSuggestions(state, highlightOptions2) {
  if (!state) {
    return [];
  }
  return state.completions.map((completion) => ({
    highlightedValue: getHighlightedSuggestion(
      completion.highlighted,
      highlightOptions2
    ),
    rawValue: completion.expression
  }));
}

// src/controllers/commerce/search-box/headless-search-box-options.ts
var defaultSearchBoxOptions2 = {
  clearFilters: true
};
var { id, highlightOptions, clearFilters } = searchBoxOptionDefinitions;
var searchBoxOptionDefinitions2 = { id, highlightOptions, clearFilters };
var searchBoxOptionsSchema2 = new Schema(
  searchBoxOptionDefinitions2
);

// src/controllers/commerce/search-box/headless-search-box.ts
function buildSearchBox(engine, props = {}) {
  if (!loadSearchBoxReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  const id2 = props.options?.id || randomID("search_box");
  const options = {
    id: id2,
    highlightOptions: { ...props.options?.highlightOptions },
    ...defaultSearchBoxOptions2,
    ...props.options
  };
  validateOptions(engine, searchBoxOptionsSchema2, options, "buildSearchBox");
  dispatch(
    registerQuerySetQuery({ id: id2, query: getState().commerceQuery.query ?? "" })
  );
  dispatch(registerQuerySuggest({ id: id2 }));
  const getValue = () => getState().querySet[options.id];
  const performSearch = async () => {
    const queryOptions = {
      query: getValue(),
      clearFilters: options.clearFilters
    };
    dispatch(prepareForSearchWithQuery3(queryOptions));
    dispatch(executeSearch3());
  };
  return {
    ...controller,
    updateText(value) {
      dispatch(updateQuerySetQuery({ id: id2, query: value }));
      this.showSuggestions();
    },
    clear() {
      dispatch(updateQuerySetQuery({ id: id2, query: "" }));
      dispatch(clearQuerySuggest({ id: id2 }));
    },
    showSuggestions() {
      dispatch(fetchQuerySuggestions2({ id: id2 }));
    },
    selectSuggestion(value) {
      dispatch(selectQuerySuggestion({ id: id2, expression: value }));
      performSearch().then(() => {
        dispatch(clearQuerySuggest({ id: id2 }));
      });
    },
    submit() {
      performSearch();
      dispatch(clearQuerySuggest({ id: id2 }));
    },
    get state() {
      const querySuggest = getState().querySuggest[options.id];
      const suggestions = getSuggestions(
        querySuggest,
        options.highlightOptions
      );
      const isLoadingSuggestions = querySuggest ? querySuggest.isLoading : false;
      return {
        value: getValue(),
        suggestions,
        isLoading: getState().commerceSearch.isLoading,
        isLoadingSuggestions
      };
    }
  };
}
function loadSearchBoxReducers(engine) {
  engine.addReducers({
    commerceQuery: queryReducer,
    querySuggest: querySuggestReducer,
    configuration,
    querySet: querySetReducer,
    commerceSearch: commerceSearchReducer
  });
  return true;
}

// src/features/recent-queries/recent-queries-actions.ts
var registerRecentQueriesPayloadDefinition = {
  queries: new ArrayValue({
    required: true,
    each: new StringValue({ emptyAllowed: false })
  }),
  maxLength: new NumberValue({ required: true, min: 1, default: 10 })
};
var registerRecentQueries = createAction(
  "recentQueries/registerRecentQueries",
  (payload) => validatePayload(payload, registerRecentQueriesPayloadDefinition)
);
var clearRecentQueries = createAction(
  "recentQueries/clearRecentQueries"
);

// src/features/recent-queries/recent-queries-state.ts
function getRecentQueriesInitialState() {
  return {
    queries: [],
    maxLength: 10
  };
}

// src/features/recent-queries/recent-queries-slice.ts
var recentQueriesReducer = createReducer(
  getRecentQueriesInitialState(),
  (builder) => {
    builder.addCase(registerRecentQueries, handleRegisterQueries).addCase(clearRecentQueries, handleClearRecentQueries).addCase(executeSearch2.fulfilled, (state, action) => {
      const query2 = action.payload.queryExecuted.trim();
      const results = action.payload.response.results;
      if (!query2.length || !results.length) {
        return;
      }
      handleExecuteSearchFulfilled(query2, state);
    });
  }
);
function handleRegisterQueries(state, action) {
  state.queries = action.payload.queries.slice(0, action.payload.maxLength);
  state.maxLength = action.payload.maxLength;
}
function handleClearRecentQueries(state) {
  state.queries = [];
}
function handleExecuteSearchFulfilled(query2, state) {
  state.queries = state.queries.filter((q) => q !== query2);
  const remaining = state.queries.slice(0, state.maxLength - 1);
  state.queries = [query2, ...remaining];
}

// src/features/commerce/recent-queries/recent-queries-slice.ts
var recentQueriesReducer2 = createReducer(
  getRecentQueriesInitialState(),
  (builder) => {
    builder.addCase(registerRecentQueries, handleRegisterQueries).addCase(clearRecentQueries, handleClearRecentQueries).addCase(executeSearch3.fulfilled, (state, action) => {
      const query2 = action.payload.queryExecuted?.trim() || "";
      const products = action.payload.response.products;
      if (!query2.length || !products.length) {
        return;
      }
      handleExecuteSearchFulfilled(query2, state);
    });
  }
);

// src/controllers/commerce/recent-queries-list/headless-recent-queries-list.ts
var defaultRecentQueriesState = {
  queries: []
};
var defaultRecentQueriesOptions = {
  maxLength: 10,
  clearFilters: true
};
var initialStateSchema4 = new Schema({
  queries: new ArrayValue({ required: true })
});
var optionsSchema3 = new Schema({
  maxLength: new NumberValue({ required: true, min: 1 }),
  clearFilters: new BooleanValue()
});
function validateRecentQueriesProps(engine, props) {
  validateOptions(
    engine,
    optionsSchema3,
    props?.options,
    "buildRecentQueriesList"
  );
  validateInitialState(
    engine,
    initialStateSchema4,
    props?.initialState,
    "buildRecentQueriesList"
  );
}
function buildRecentQueriesList(engine, props) {
  if (!loadRecentQueriesListReducer(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  const registrationOptions = {
    ...defaultRecentQueriesOptions,
    ...props?.options
  };
  const registrationState = {
    ...defaultRecentQueriesState,
    ...props?.initialState
  };
  validateRecentQueriesProps(engine, {
    options: registrationOptions,
    initialState: registrationState
  });
  const options = {
    queries: registrationState.queries,
    maxLength: registrationOptions.maxLength
  };
  dispatch(registerRecentQueries(options));
  return {
    ...controller,
    get state() {
      const state = getState();
      return {
        ...state.recentQueries,
        analyticsEnabled: state.configuration.analytics.enabled
      };
    },
    clear() {
      dispatch(clearRecentQueries());
    },
    executeRecentQuery(index) {
      const errorMessage = new NumberValue({
        required: true,
        min: 0,
        max: this.state.queries.length
      }).validate(index);
      if (errorMessage) {
        throw new Error(errorMessage);
      }
      const queryOptions = {
        query: this.state.queries[index],
        clearFilters: registrationOptions.clearFilters
      };
      dispatch(prepareForSearchWithQuery3(queryOptions));
      dispatch(executeSearch3());
    }
  };
}
function loadRecentQueriesListReducer(engine) {
  engine.addReducers({ search: commerceSearchReducer, recentQueries: recentQueriesReducer2 });
  return true;
}

// src/features/commerce/instant-products/instant-products-actions.ts
var instantProductsRegisterDefinition = {
  id: requiredNonEmptyString
};
var instantProductsQueryDefinition = {
  ...instantProductsRegisterDefinition,
  query: requiredEmptyAllowedString
};
var registerInstantProducts = createAction(
  "instantProducts/register",
  (payload) => validatePayload(payload, instantProductsRegisterDefinition)
);
var updateInstantProductsQuery = createAction(
  "instantProducts/updateQuery",
  (payload) => validatePayload(payload, instantProductsQueryDefinition)
);
var clearExpiredProducts = createAction(
  "instantProducts/clearExpired",
  (payload) => validatePayload(payload, instantProductsRegisterDefinition)
);

// src/features/instant-items/instant-items-state.ts
function hasExpired(cached) {
  if (!cached) {
    return false;
  }
  return cached.expiresAt && Date.now() >= cached.expiresAt;
}

// src/features/instant-items/instant-items-slice.ts
var registerInstantItem = (payload, state) => {
  const { id: id2 } = payload;
  if (state[id2]) {
    return;
  }
  state[id2] = { q: "", cache: {} };
  return state;
};
var updateInstantItemQuery = (payload, state) => {
  const { q, id: id2 } = payload;
  if (!q) {
    return;
  }
  state[id2].q = q;
};
var clearExpiredItems = (payload, state) => {
  const { id: id2 } = payload;
  Object.entries(state[id2].cache).forEach(([q, cached]) => {
    if (hasExpired(cached)) {
      delete state[id2].cache[q];
    }
  });
};
var fetchItemsPending = (payload, state, toSetEmptyIfNotFound) => {
  for (const id2 in state) {
    for (const query2 in state[id2].cache) {
      state[id2].cache[query2].isActive = false;
    }
  }
  if (!getCached(payload, state)) {
    makeEmptyCache(payload, state, toSetEmptyIfNotFound);
    return;
  }
  const cached = getCached(payload, state);
  cached.isLoading = true;
  cached.isActive = true;
  cached.error = null;
};
var fetchItemsFulfilled = (payload, state, toAddToCache) => {
  const { id: id2, q, searchUid, cacheTimeout, totalCountFiltered, duration } = payload;
  state[id2].cache[q] = {
    ...getCached(payload, state),
    ...toAddToCache,
    isActive: true,
    searchUid,
    isLoading: false,
    error: null,
    expiresAt: cacheTimeout ? cacheTimeout + Date.now() : 0,
    totalCountFiltered,
    duration
  };
};
var fetchItemsRejected = (payload, state) => {
  const { id: id2, q, error } = payload;
  state[id2].cache[q].error = error || null;
  state[id2].cache[q].isLoading = false;
  state[id2].cache[q].isActive = false;
};
var getCached = (payload, state) => {
  const { q, id: id2 } = payload;
  return state[id2].cache[q] || null;
};
var makeEmptyCache = (payload, state, setToEmpty) => {
  const { q, id: id2 } = payload;
  state[id2].cache[q] = {
    isLoading: true,
    error: null,
    expiresAt: 0,
    isActive: true,
    searchUid: "",
    totalCountFiltered: 0,
    duration: 0,
    ...setToEmpty
  };
};

// src/features/commerce/instant-products/instant-products-state.ts
function getInstantProductsInitialState() {
  return {};
}

// src/features/commerce/instant-products/instant-products-slice.ts
var instantProductsReducer = createReducer(
  getInstantProductsInitialState(),
  (builder) => {
    builder.addCase(registerInstantProducts, (state, action) => {
      registerInstantItem(action.payload, state);
    }).addCase(updateInstantProductsQuery, (state, action) => {
      updateInstantItemQuery(
        { ...action.payload, q: action.payload.query },
        state
      );
    }).addCase(clearExpiredProducts, (state, action) => {
      clearExpiredItems(action.payload, state);
    }).addCase(fetchInstantProducts.pending, (state, action) => {
      fetchItemsPending(action.meta.arg, state, { products: [] });
    }).addCase(fetchInstantProducts.fulfilled, (state, action) => {
      const {
        response: {
          products,
          responseId,
          pagination: { totalEntries }
        }
      } = action.payload;
      fetchItemsFulfilled(
        {
          duration: 0,
          searchUid: responseId,
          totalCountFiltered: totalEntries,
          ...action.meta.arg
        },
        state,
        {
          products
        }
      );
    }).addCase(fetchInstantProducts.rejected, (state, action) => {
      fetchItemsRejected(action.meta.arg, state);
    });
  }
);

// src/controllers/commerce/instant-products/headless-instant-products.ts
var instantProductsOptionDefinitions = {
  searchBoxId: nonEmptyString,
  cacheTimeout: new NumberValue()
};
var instantProductsOptionsSchema = new Schema(instantProductsOptionDefinitions);
function buildInstantProducts(engine, props) {
  if (!loadInstantProductsReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  const options = {
    searchBoxId: props.options.searchBoxId || randomID("instant-products-"),
    cacheTimeout: props.options.cacheTimeout || 6e4
  };
  validateOptions(
    engine,
    instantProductsOptionsSchema,
    options,
    "buildInstantProducts"
  );
  const searchBoxId = options.searchBoxId;
  dispatch(registerInstantProducts({ id: searchBoxId }));
  const getStateForSearchBox = () => getState().instantProducts[searchBoxId];
  const getCached2 = (q) => getStateForSearchBox().cache[q];
  const getQuery = () => getStateForSearchBox().q;
  const getProducts = () => {
    const cached = getCached2(getQuery());
    if (!cached) {
      return [];
    }
    if (cached.isLoading) {
      return [];
    }
    return cached.products;
  };
  return {
    ...controller,
    updateQuery(query2) {
      if (!query2) {
        return;
      }
      const cached = getCached2(query2);
      if (!cached || !cached.isLoading && (cached.error || hasExpired(cached))) {
        dispatch(
          fetchInstantProducts({
            id: searchBoxId,
            q: query2,
            cacheTimeout: options.cacheTimeout
          })
        );
      }
      dispatch(updateInstantProductsQuery({ id: searchBoxId, query: query2 }));
    },
    clearExpired() {
      dispatch(
        clearExpiredProducts({
          id: searchBoxId
        })
      );
    },
    get state() {
      const query2 = getQuery();
      const cached = getCached2(query2);
      return {
        query: query2,
        isLoading: cached?.isLoading || false,
        error: cached?.error || null,
        products: getProducts()
      };
    }
  };
}
function loadInstantProductsReducers(engine) {
  engine.addReducers({ instantProducts: instantProductsReducer });
  return true;
}

// src/api/common/trigger.ts
function isRedirectTrigger(trigger) {
  return trigger.type === "redirect";
}

// src/features/commerce/standalone-search-box-set/standalone-search-box-set-actions.ts
var registerStandaloneSearchBox = createAction(
  "standaloneSearchBox/register",
  (payload) => validatePayload(payload, {
    id: requiredNonEmptyString,
    redirectionUrl: requiredNonEmptyString
  })
);
var resetStandaloneSearchBox = createAction(
  "standaloneSearchBox/reset",
  (payload) => validatePayload(payload, {
    id: requiredNonEmptyString
  })
);
var fetchRedirectUrl = createAsyncThunk(
  "commerce/standaloneSearchBox/fetchRedirect",
  async (payload, { getState, rejectWithValue, extra }) => {
    validatePayload(payload, { id: new StringValue({ emptyAllowed: false }) });
    const state = getState();
    const { apiClient } = extra;
    const request = await buildPlanRequest(state);
    const response = await apiClient.plan(request);
    if (isErrorResponse(response)) {
      return rejectWithValue(response.error);
    }
    const redirectTriggers = response.success.triggers.filter(isRedirectTrigger);
    return redirectTriggers.length ? redirectTriggers[0].content : "";
  }
);
var buildPlanRequest = async (state) => {
  return {
    query: state.commerceQuery.query,
    ...await buildBaseCommerceAPIRequest(state)
  };
};

// src/api/search/plan/plan-endpoint.ts
var ExecutionPlan = class {
  constructor(response) {
    this.response = response;
  }
  /**
   * Gets the final value of the basic expression (`q`) after the search request has been processed in the query pipeline, but before it is sent to the index.
   */
  get basicExpression() {
    return this.response.parsedInput.basicExpression;
  }
  /**
   * Gets the final value of the large expression (`lq`) after the search request has been processed in the query pipeline, but before it is sent to the index.
   */
  get largeExpression() {
    return this.response.parsedInput.largeExpression;
  }
  /**
   * Gets the URL to redirect the browser to, if the search request satisfies the condition of a `redirect` trigger rule in the query pipeline.
   *
   * Returns `null` otherwise.
   */
  get redirectionUrl() {
    const redirects = this.response.preprocessingOutput.triggers.filter(isRedirectTrigger);
    return redirects.length ? redirects[0].content : null;
  }
};

// src/features/standalone-search-box-set/standalone-search-box-set-actions.ts
var registerStandaloneSearchBox2 = createAction(
  "standaloneSearchBox/register",
  (payload) => validatePayload(payload, {
    id: requiredNonEmptyString,
    redirectionUrl: requiredNonEmptyString
  })
);
var resetStandaloneSearchBox2 = createAction(
  "standaloneSearchBox/reset",
  (payload) => validatePayload(payload, {
    id: requiredNonEmptyString
  })
);
var updateAnalyticsToSearchFromLink = createAction(
  "standaloneSearchBox/updateAnalyticsToSearchFromLink",
  (payload) => validatePayload(payload, { id: requiredNonEmptyString })
);
var updateAnalyticsToOmniboxFromLink = createAction(
  "standaloneSearchBox/updateAnalyticsToOmniboxFromLink"
);
var fetchRedirectUrl2 = createAsyncThunk(
  "standaloneSearchBox/fetchRedirect",
  async (payload, { dispatch, getState, rejectWithValue, extra: { apiClient, validatePayload: validatePayload2 } }) => {
    validatePayload2(payload, { id: new StringValue({ emptyAllowed: false }) });
    const request = await buildPlanRequest2(getState());
    const response = await apiClient.plan(request);
    if (isErrorResponse2(response)) {
      return rejectWithValue(response.error);
    }
    const { redirectionUrl } = new ExecutionPlan(response.success);
    if (redirectionUrl) {
      dispatch(logRedirect(redirectionUrl));
    }
    return redirectionUrl || "";
  }
);
var logRedirect = (url) => makeAnalyticsAction(
  "analytics/standaloneSearchBox/redirect",
  (client) => client.makeTriggerRedirect({ redirectedTo: url })
);
var buildPlanRequest2 = async (state) => {
  return {
    accessToken: state.configuration.accessToken,
    organizationId: state.configuration.organizationId,
    url: state.configuration.search.apiBaseUrl,
    locale: state.configuration.search.locale,
    timezone: state.configuration.search.timezone,
    q: state.query.q,
    ...state.context && { context: state.context.contextValues },
    ...state.pipeline && { pipeline: state.pipeline },
    ...state.searchHub && { searchHub: state.searchHub },
    ...state.configuration.analytics.enabled && {
      visitorId: await getVisitorID(state.configuration.analytics)
    },
    ...state.configuration.analytics.enabled && await fromAnalyticsStateToAnalyticsParams(
      state.configuration.analytics
    ),
    ...state.configuration.search.authenticationProviders.length && {
      authentication: state.configuration.search.authenticationProviders.join(",")
    }
  };
};

// src/features/commerce/standalone-search-box-set/standalone-search-box-set-state.ts
function getCommerceStandaloneSearchBoxSetInitialState() {
  return {};
}

// src/features/commerce/standalone-search-box-set/standalone-search-box-set-slice.ts
var commerceStandaloneSearchBoxSetReducer = createReducer(
  getCommerceStandaloneSearchBoxSetInitialState(),
  (builder) => builder.addCase(registerStandaloneSearchBox2, (state, action) => {
    const { id: id2, redirectionUrl } = action.payload;
    if (id2 in state) {
      return;
    }
    state[id2] = buildStandaloneSearchBoxEntry(redirectionUrl);
  }).addCase(resetStandaloneSearchBox2, (state, action) => {
    const { id: id2 } = action.payload;
    const searchBox = state[id2];
    if (searchBox) {
      state[id2] = buildStandaloneSearchBoxEntry(
        searchBox.defaultRedirectionUrl
      );
      return;
    }
  }).addCase(fetchRedirectUrl.pending, (state, action) => {
    const searchBox = state[action.meta.arg.id];
    if (!searchBox) {
      return;
    }
    searchBox.isLoading = true;
  }).addCase(fetchRedirectUrl.fulfilled, (state, action) => {
    const redirectionUrl = action.payload;
    const searchBox = state[action.meta.arg.id];
    if (!searchBox) {
      return;
    }
    searchBox.redirectTo = redirectionUrl ? redirectionUrl : searchBox.defaultRedirectionUrl;
    searchBox.isLoading = false;
  }).addCase(fetchRedirectUrl.rejected, (state, action) => {
    const searchBox = state[action.meta.arg.id];
    if (!searchBox) {
      return;
    }
    searchBox.isLoading = false;
  })
);
function buildStandaloneSearchBoxEntry(defaultRedirectionUrl) {
  return {
    defaultRedirectionUrl,
    redirectTo: "",
    isLoading: false
  };
}

// src/controllers/commerce/standalone-search-box/headless-standalone-search-box-options.ts
var standaloneSearchBoxSchema = new Schema({
  ...searchBoxOptionDefinitions2,
  redirectionUrl: new StringValue({
    required: true,
    emptyAllowed: false
  })
});

// src/controllers/commerce/standalone-search-box/headless-standalone-search-box.ts
function buildStandaloneSearchBox(engine, props) {
  if (!loadStandaloneSearchBoxReducers(engine)) {
    throw loadReducerError;
  }
  const { dispatch } = engine;
  const getState = () => engine[stateKey];
  const id2 = props.options.id || randomID("standalone_search_box");
  const options = {
    id: id2,
    highlightOptions: { ...props.options.highlightOptions },
    ...defaultSearchBoxOptions2,
    ...props.options
  };
  validateOptions(
    engine,
    standaloneSearchBoxSchema,
    options,
    "buildStandaloneSearchBox"
  );
  const searchBox = buildSearchBox(engine, { options });
  dispatch(
    registerStandaloneSearchBox({ id: id2, redirectionUrl: options.redirectionUrl })
  );
  return {
    ...searchBox,
    updateText(value) {
      searchBox.updateText(value);
    },
    selectSuggestion(value) {
      dispatch(selectQuerySuggestion({ id: id2, expression: value }));
      this.submit();
    },
    afterRedirection() {
      dispatch(resetStandaloneSearchBox({ id: id2 }));
    },
    submit() {
      dispatch(
        updateQuery2({
          query: this.state.value
        })
      );
      dispatch(fetchRedirectUrl({ id: id2 }));
    },
    get state() {
      const state = getState();
      const standaloneSearchBoxState = state.commerceStandaloneSearchBoxSet[id2];
      return {
        ...searchBox.state,
        redirectTo: standaloneSearchBoxState.redirectTo
      };
    }
  };
}
function loadStandaloneSearchBoxReducers(engine) {
  engine.addReducers({
    commerceQuery: queryReducer,
    commerceStandaloneSearchBoxSet: commerceStandaloneSearchBoxSetReducer,
    configuration,
    querySuggest: querySuggestReducer
  });
  return true;
}

// src/features/templates/templates-manager.ts
var templateSchema = new Schema({
  content: new Value({ required: true }),
  conditions: new Value({ required: true }),
  priority: new NumberValue({ required: false, default: 0, min: 0 }),
  fields: new ArrayValue({
    required: false,
    each: requiredNonEmptyString
  })
});
function buildTemplatesManager() {
  const templates = [];
  const validateTemplate = (template) => {
    const validated = templateSchema.validate(template);
    const areConditionsValid = template.conditions.every(
      (condition) => condition instanceof Function
    );
    if (!areConditionsValid) {
      throw new SchemaValidationError(
        "Each template condition should be a function that takes a Result or Product as an argument and returns a boolean"
      );
    }
    return validated;
  };
  return {
    registerTemplates(...newTemplates) {
      newTemplates.forEach((template) => {
        const templatesWithDefault = {
          ...validateTemplate(template),
          fields: template.fields || []
        };
        templates.push(templatesWithDefault);
      });
      templates.sort((a, b) => b.priority - a.priority);
    },
    selectTemplate(item) {
      const template = templates.find(
        (template2) => template2.conditions.every((condition) => condition(item))
      );
      return template ? template.content : null;
    }
  };
}

// src/features/commerce/product-templates/product-templates-manager.ts
function buildProductTemplatesManager() {
  return buildTemplatesManager();
}

// src/controllers/commerce/core/summary/headless-core-summary.ts
var buildCoreSummary = (engine, props) => {
  const controller = buildController(engine);
  const {
    options: { selectNumProducts, selectResponseId, selectLoading, selectError }
  } = props;
  const getState = () => engine[stateKey];
  const page = () => pagePrincipalSelector(getState());
  const perPage = () => perPagePrincipalSelector(getState());
  const totalNumberOfProducts = () => totalEntriesPrincipalSelector(getState());
  const firstSearchExecuted = () => !!selectResponseId(getState());
  const hasProducts = () => firstSearchExecuted() && totalNumberOfProducts() > 0;
  const firstProduct = () => hasProducts() ? page() * perPage() + 1 : 0;
  const lastProduct = () => hasProducts() ? firstProduct() + (selectNumProducts(getState()) - 1) : 0;
  return {
    ...controller,
    get state() {
      return {
        firstSearchExecuted: firstSearchExecuted(),
        firstProduct: firstProduct(),
        lastProduct: lastProduct(),
        totalNumberOfProducts: totalNumberOfProducts(),
        hasProducts: hasProducts(),
        isLoading: selectLoading(getState()),
        hasError: selectError(getState()) !== null
      };
    }
  };
};

// src/controllers/commerce/search/utils/load-search-reducers.ts
function loadSearchReducer(engine) {
  engine.addReducers({ commerceSearch: commerceSearchReducer });
  return true;
}

// src/controllers/commerce/search/summary/headless-search-summary.ts
var buildSearchSummary = (engine) => {
  if (!loadSearchReducer(engine)) {
    throw loadReducerError;
  }
  const controller = buildCoreSummary(engine, {
    options: {
      selectNumProducts: numberOfProductsSelector2,
      selectResponseId: responseIdSelector2,
      selectLoading: isLoadingSelector2,
      selectError: errorSelector2
    }
  });
  return {
    ...controller,
    get state() {
      return {
        ...controller.state,
        query: queryExecutedSelector(engine[stateKey]) || ""
      };
    }
  };
};

// src/controllers/commerce/product-listing/utils/load-product-listing-reducers.ts
function loadProductListingReducer(engine) {
  engine.addReducers({ productListing: productListingV2Reducer });
  return true;
}

// src/controllers/commerce/product-listing/summary/headless-product-listing-summary.ts
var buildListingSummary = (engine) => {
  if (!loadProductListingReducer(engine)) {
    throw loadReducerError;
  }
  return buildCoreSummary(engine, {
    options: {
      selectNumProducts: numberOfProductsSelector,
      selectResponseId: responseIdSelector,
      selectLoading: isLoadingSelector,
      selectError: errorSelector
    }
  });
};

// src/features/commerce/product-templates/product-templates-helpers.ts
var getProductProperty = (product, property) => {
  const anyProduct = product;
  if (!isNullOrUndefined(anyProduct[property])) {
    return anyProduct[property];
  }
  if (!isNullOrUndefined(product.additionalFields[property])) {
    return product.additionalFields[property];
  }
  return null;
};
var fieldsMustBeDefined = (fieldNames) => {
  return (product) => {
    return fieldNames.every(
      (fieldName) => !isNullOrUndefined(getProductProperty(product, fieldName))
    );
  };
};
var fieldsMustNotBeDefined = (fieldNames) => {
  return (product) => {
    return fieldNames.every(
      (fieldName) => isNullOrUndefined(getProductProperty(product, fieldName))
    );
  };
};
var fieldMustMatch = (fieldName, valuesToMatch) => {
  return (product) => {
    const fieldValues = getFieldValuesFromProduct(fieldName, product);
    return valuesToMatch.some(
      (valueToMatch) => fieldValues.some(
        (fieldValue) => `${fieldValue}`.toLowerCase() === valueToMatch.toLowerCase()
      )
    );
  };
};
var fieldMustNotMatch = (fieldName, disallowedValues) => {
  return (product) => {
    const fieldValues = getFieldValuesFromProduct(fieldName, product);
    return disallowedValues.every(
      (disallowedValues2) => fieldValues.every(
        (fieldValue) => `${fieldValue}`.toLowerCase() !== disallowedValues2.toLowerCase()
      )
    );
  };
};
var getFieldValuesFromProduct = (fieldName, product) => {
  const rawValue = getProductProperty(product, fieldName);
  return isArray(rawValue) ? rawValue : [rawValue];
};
var ProductTemplatesHelpers = {
  getProductProperty,
  fieldsMustBeDefined,
  fieldsMustNotBeDefined,
  fieldMustMatch,
  fieldMustNotMatch
};

// src/controllers/commerce/triggers/headless-commerce-notify-trigger.ts
function buildNotifyTrigger(engine) {
  if (!loadNotifyTriggerReducers(engine)) {
    throw loadReducerError;
  }
  const controller = buildController(engine);
  const getState = () => engine[stateKey];
  let previousNotifications = getState().triggers.notifications;
  return {
    ...controller,
    subscribe(listener2) {
      const strictListener = () => {
        const hasChanged = !arrayEqual(
          previousNotifications,
          this.state.notifications
        );
        previousNotifications = this.state.notifications;
        if (hasChanged) {
          listener2();
        }
      };
      strictListener();
      return engine.subscribe(strictListener);
    },
    get state() {
      return {
        notifications: getState().triggers.notifications
      };
    }
  };
}
function loadNotifyTriggerReducers(engine) {
  engine.addReducers({ triggers: commerceTriggersReducer });
  return true;
}

// src/features/commerce/facets/field-suggestions-order/field-suggestions-order-state.ts
function getFieldSuggestionsOrderInitialState() {
  return [];
}

// src/features/commerce/facets/field-suggestions-order/field-suggestions-order-slice.ts
var fieldSuggestionsOrderReducer = createReducer(
  getFieldSuggestionsOrderInitialState(),
  (builder) => {
    builder.addCase(fetchQuerySuggestions2.fulfilled, (_, action) => {
      return action.payload.fieldSuggestionsFacets ?? [];
    });
  }
);

// src/controllers/commerce/field-suggestions/headless-category-field-suggestions.ts
function buildCategoryFieldSuggestions(engine, options) {
  if (!loadFieldSuggestionsReducers(engine)) {
    throw loadReducerError;
  }
  const { dispatch } = engine;
  const facetSearch2 = buildCategoryFacetSearch(engine, {
    options: {
      facetId: options.facetId,
      ...options.facetSearch,
      numberOfValues: 10
    },
    select: () => {
      dispatch(options.fetchProductsActionCreator());
    },
    isForFieldSuggestions: true
  });
  const getFacetForFieldSuggestions = (facetId2) => {
    return engine[stateKey].fieldSuggestionsOrder.find(
      (facet) => facet.facetId === facetId2
    );
  };
  const controller = buildController(engine);
  return {
    ...controller,
    ...facetSearch2,
    updateText: function(text) {
      facetSearch2.updateText(text);
      facetSearch2.search();
    },
    get state() {
      const facet = getFacetForFieldSuggestions(options.facetId);
      return {
        displayName: facet.displayName,
        field: facet.field,
        facetId: facet.facetId,
        ...facetSearch2.state
      };
    },
    type: "hierarchical"
  };
}
function loadFieldSuggestionsReducers(engine) {
  engine.addReducers({ commerceFacetSet: commerceFacetSetReducer });
  return true;
}

// src/controllers/commerce/field-suggestions/headless-field-suggestions.ts
function buildFieldSuggestions(engine, options) {
  if (!loadFieldSuggestionsReducers2(engine)) {
    throw loadReducerError;
  }
  const { dispatch } = engine;
  const facetSearch2 = buildRegularFacetSearch(engine, {
    options: { facetId: options.facetId, ...options.facetSearch },
    select: () => {
      dispatch(options.fetchProductsActionCreator());
    },
    exclude: () => {
      dispatch(options.fetchProductsActionCreator());
    },
    isForFieldSuggestions: true
  });
  const getFacetForFieldSuggestions = (facetId2) => {
    return engine[stateKey].fieldSuggestionsOrder.find(
      (facet) => facet.facetId === facetId2
    );
  };
  const controller = buildController(engine);
  return {
    ...controller,
    ...facetSearch2,
    updateText: function(text) {
      facetSearch2.updateText(text);
      facetSearch2.search();
    },
    get state() {
      const facet = getFacetForFieldSuggestions(options.facetId);
      return {
        displayName: facet.displayName,
        field: facet.field,
        facetId: facet.facetId,
        ...facetSearch2.state
      };
    },
    type: "regular"
  };
}
function loadFieldSuggestionsReducers2(engine) {
  engine.addReducers({ commerceFacetSet: commerceFacetSetReducer });
  return true;
}

// src/controllers/commerce/field-suggestions/headless-field-suggestions-generator.ts
function buildFieldSuggestionsGenerator(engine) {
  if (!loadFieldSuggestionsGeneratorReducers(engine)) {
    throw loadReducerError;
  }
  const commonOptions = {
    fetchProductsActionCreator: executeSearch3,
    facetResponseSelector: facetResponseSelector2,
    isFacetLoadingResponseSelector: isFacetLoadingResponseSelector3
  };
  const controller = buildController(engine);
  const createFieldSuggestionsControllers = createSelector(
    (state) => state.fieldSuggestionsOrder,
    (facetOrder) => facetOrder.map(({ type, facetId: facetId2 }) => {
      switch (type) {
        case "hierarchical":
          return buildCategoryFieldSuggestions(engine, {
            facetId: facetId2,
            ...commonOptions
          });
        default:
        case "regular":
          return buildFieldSuggestions(engine, { facetId: facetId2, ...commonOptions });
      }
    })
  );
  return {
    ...controller,
    get fieldSuggestions() {
      return createFieldSuggestionsControllers(engine[stateKey]);
    },
    get state() {
      return engine[stateKey].fieldSuggestionsOrder;
    }
  };
}
function loadFieldSuggestionsGeneratorReducers(engine) {
  engine.addReducers({
    fieldSuggestionsOrder: fieldSuggestionsOrderReducer
  });
  return true;
}

// src/commerce.index.ts
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

export { ProductTemplatesHelpers as P, buildSearch as a, buildProductListing as b, buildCommerceEngine as c, buildProductTemplatesManager as d, buildListingSummary as e, buildSearchSummary as f, getOrganizationEndpoints as g, buildRecommendations as h, buildStandaloneSearchBox as i, buildSearchBox as j, buildInstantProducts as k, loadQuerySuggestActions as l, buildRecentQueriesList as m, updateQuery2 as u };

//# sourceMappingURL=headless.esm-628c1e39.js.map