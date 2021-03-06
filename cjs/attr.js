'use strict';
const {escape} = require('html-escaper');

const {ATTRIBUTE_NODE} = require('./constants.js');
const {String} = require('./utils.js');
const {Node} = require('./node.js');

const {attributeChangedCallback: ceAttributes} = require('./custom-element-registry.js');
const {attributeChangedCallback: moAttributes} = require('./mutation-observer-class.js');

/**
 * @implements globalThis.Attr
 */
class Attr extends Node {

  constructor(ownerDocument, name, value) {
    super(ownerDocument, '#attribute', ATTRIBUTE_NODE);
    this.name = String(name);
    this._value = String(value);
    this._changed = false;

    /**
     * @type {HTMLElement?}
     */
    this.ownerElement = null;
  }

  get value() { return this._value; }

  set value(value) {
    const {ownerElement, name, _value} = this;
    this._changed = true;
    this._value = String(value);
    if (ownerElement) {
      ceAttributes(ownerElement, name, _value, this._value);
      moAttributes(ownerElement, name, _value);
    }
  }

  toString() {
    let {name, _value} = this;
    return _value ? `${name}="${escape(_value)}"` : name;
  }
}
exports.Attr = Attr
