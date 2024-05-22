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

// src/schema.ts
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

// src/values/value.ts
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

// src/values/number-value.ts
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

// src/values/string-value.ts
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
function isArray(value) {
  return Array.isArray(value);
}

export { NumberValue as N, Schema as S, isArray as a, isUndefined as b, StringValue as c, isNullOrUndefined as i };

//# sourceMappingURL=bueno.esm.js.map