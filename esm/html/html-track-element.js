import {HTMLElement} from './html-element.js';

/**
 * @implements globalThis.HTMLTrackElement
 */
export class HTMLTrackElement extends HTMLElement {
  constructor(ownerDocument, localName = 'track') {
    super(ownerDocument, localName);
  }
}
