'use strict';
const uhyphen = (m => m.__esModule ? /* c8 ignore next */ m.default : /* c8 ignore next */ m)(require('uhyphen'));

const refs = new WeakMap;

const key = name => `data-${uhyphen(name)}`;

const handler = {
  get(dataset, name) {
    return refs.get(dataset).getAttribute(key(name));
  },

  set(dataset, name, value) {
    refs.get(dataset).setAttribute(key(name), value);
    dataset[name] = value;
    return true;
  },

  deleteProperty(dataset, name) {
    refs.get(dataset).removeAttribute(key(name));
    return delete dataset[name];
  }
};

/**
 * @implements globalThis.DOMStringMap
 */
class DOMStringMap {
  /**
   * @param {Element} value
   */
  constructor(value) {
    refs.set(this, value);
    return new Proxy(this, handler);
  }
}
exports.DOMStringMap = DOMStringMap

Object.setPrototypeOf(DOMStringMap.prototype, null);
