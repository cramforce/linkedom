import {booleanAttribute, registerHTMLClass} from '../utils.js';
import {HTMLElement} from './html-element.js';

const tagName = 'select';

/**
 * @implements globalThis.HTMLSelectElement
 */
class HTMLSelectElement extends HTMLElement {
  constructor(ownerDocument, localName = tagName) {
    super(ownerDocument, localName);
  }

  /* c8 ignore start */
  get disabled() { return booleanAttribute.get(this, 'disabled'); }
  set disabled(value) { booleanAttribute.set(this, 'disabled', value); }

  get name() { return this.getAttribute('name'); }
  set name(value) { this.setAttribute('name', value); }
  /* c8 ignore stop */
}

registerHTMLClass(tagName, HTMLSelectElement);

export {HTMLSelectElement};
