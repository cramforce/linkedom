import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLParamElement
 */
export class HTMLParamElement extends HTMLElement {
  constructor(ownerDocument, localName = 'param') {
    super(ownerDocument, localName);
  }
}
