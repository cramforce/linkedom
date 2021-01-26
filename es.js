self.linkedom=function(e){"use strict";const t=Symbol("DOM"),n=String,r={test:()=>!0},s={"text/html":{docType:"<!DOCTYPE html>",ignoreCase:!0,voidElements:/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i},"text/xml":{docType:'<?xml version="1.0" encoding="utf-8"?>',ignoreCase:!1,voidElements:r},"application/xml":{docType:'<?xml version="1.0" encoding="utf-8"?>',ignoreCase:!1,voidElements:r},"application/xhtml+xml":{docType:'<?xml version="1.0" encoding="utf-8"?>',ignoreCase:!1,voidElements:r},"image/svg+xml":{docType:"",ignoreCase:!1,voidElements:r}},i=({_next:e,_end:t})=>{for(;2===e.nodeType;)e=e._next;return{_next:e,_end:t}},o=e=>1===e.nodeType?e._end:e,l=({ownerDocument:e})=>e._mime.ignoreCase,u=({localName:e,ownerDocument:t})=>t._mime.ignoreCase?e.toUpperCase():e,a={before(e,...t){throw new Error("before not implemented")},after(e,...t){throw new Error("after not implemented")},replaceWith(e,...t){throw new Error("replaceWith not implemented")},remove(e){let{_prev:t,_next:n,nodeType:r}=e,s=e;1===r&&(s=e._end,n=s._next),t&&(t._next=n),n&&(n._prev=t),e.parentNode=e._prev=s._next=null}},h={previousElementSibling({_prev:e}){for(;e;)switch(e.nodeType){case-1:return e._start;case 2:return null;default:e=e._prev}return null},nextElementSibling({_next:e}){for(;e;)switch(e.nodeType){case 1:return e;default:e=e._next}return null}},c={getElementById({_next:e},t){for(;e;){if(1===e.nodeType&&e.id===t)return e;e=e._next}return null}},d=(e,...n)=>{const{ownerDocument:r,_end:s}=e;for(const i of n)e.insertBefore(i&&i[t]?i:r.createTextNode(i),s)},m={children(e){const t=[];let{_next:n,_end:r}=i(e);for(;n!==r;)1===n.nodeType&&(t.push(n),n=n._end),n=n._next;return t},firstElementChild({_next:e,_end:t}){for(;e!==t&&1!==e.nodeType;)e=e._next;return e===t?null:e},lastElementChild:({lastChild:e})=>(e&&1!==e.nodeType&&(e=e.previousElementSibling),e),childElementCount:({children:e})=>e.length,prepend(e,...n){const{ownerDocument:r,firstChild:s}=e;for(const i of n)e.insertBefore(i&&i[t]?i:r.createTextNode(i),s)},append:d,replaceChildren(e,...t){let{_next:n,_end:r}=e;for(;n!==r;){const e=o(n)._next;n.remove(),n=e}d(e,...t)},querySelector(e,t){},querySelectorAll(e,t){}};
/*! (c) Andrea Giammarchi - ISC */
self.p={};try{p.EventTarget=(new EventTarget).constructor}catch(e){!function(e,t){var n=e.create,r=e.defineProperty,s=i.prototype;function i(){t.set(this,n(null))}function o(e,t,n){r(e,t,{configurable:!0,writable:!0,value:n})}function l(e){var t=e.options;t&&t.once&&e.target.removeEventListener(this.type,e.listener),"function"==typeof e.listener?e.listener.call(e.target,this):e.listener.handleEvent(this)}o(s,"addEventListener",(function(e,n,r){for(var s=t.get(this),i=s[e]||(s[e]=[]),o=0,l=i.length;o<l;o++)if(i[o].listener===n)return;i.push({target:this,listener:n,options:r})})),o(s,"dispatchEvent",(function(e){var n=t.get(this)[e.type];return n&&(o(e,"target",this),o(e,"currentTarget",this),n.slice(0).forEach(l,e),delete e.currentTarget,delete e.target),!0})),o(s,"removeEventListener",(function(e,n){for(var r=t.get(this),s=r[e]||(r[e]=[]),i=0,o=s.length;i<o;i++)if(s[i].listener===n)return void s.splice(i,1)})),p.EventTarget=i}(Object,new WeakMap)}var g=p.EventTarget;class _ extends g{static get ELEMENT_NODE(){return 1}static get ATTRIBUTE_NODE(){return 2}static get TEXT_NODE(){return 3}static get COMMENT_NODE(){return 8}static get DOCUMENT_NODE(){return 9}static get DOCUMENT_FRAGMENT_NODE(){return 11}constructor(e,t,n){super(),this.ownerDocument=e,this.localName=t,this.nodeType=n,this.parentNode=null,this._prev=null,this._next=null}get[t](){return!0}get isConnected(){const{ownerDocument:e}=this;let{parentNode:t}=this;for(;t;){if(t===e)return!0;t=t.parentNode}return!1}get parentElement(){let{parentNode:e}=this;if(e)switch(e.nodeType){case 9:case 11:return null}return e}cloneNode(e=!1){const{ownerDocument:t,nodeType:n,localName:r}=this;let s;switch(n){case 1:s=t.createElement(r);for(const{name:e,value:t}of this.attributes)s.setAttribute(e,t);case 11:if(s||(s=document.createDocumentFragment()),e)for(const t of this.childNodes)s.appendChild(t.cloneNode(e));return s;case 2:const n=t.createAttribute(this.name);return n.value=this.value,n;case 3:return t.createTextNode(this.textContent);case 8:return t.createComment(this.textContent);default:throw new Error("unable to clone this node")}}isEqualNode(e){const{nodeType:t}=this;if(t===e.nodeType)switch(t){case 1:return this.outerHTML===e.outerHTML;case 2:return this.toString()===e.toString();default:const t=this.childNodes,n=e.childNodes;return t.length===n.length&&t.every(((e,t)=>e.isEqualNode(n[t])))}return!1}isSameNode(e){return this===e}remove(){a.remove(this)}}class x extends _{get firstChild(){const{_next:e,_end:t}=i(this);return e===t?null:e}get lastChild(){const{_prev:e}=this._end;switch(e.nodeType){case-1:return e._start;case 2:return null;default:return e===this?null:e}}get childNodes(){const e=[];let{_next:t,_end:n}=i(this);for(;t!==n;)e.push(t),t=o(t)._next;return e}contains(e){let{parentNode:t}=e;for(;t&&t!==this;)t=t.parentNode;return t===this}hasChildNodes(){return!!this.lastChild}appendChild(e){return this.insertBefore(e,this._end)}insertBefore(e,t){const n=t||this._end,{_prev:r}=n;switch(e.nodeType){case 1:e.remove(),r._next=e,n._prev=e._end,e._prev=r,e._end._next=n;break;case 11:{const{firstChild:t,lastChild:s}=e;if(t){r._next=t,t._prev=r;const i=o(s);n._prev=i,i._next=n,e._next=e._end,e._end._prev=e}break}default:e.remove(),r._next=n._prev=e,e._prev=r,e._next=n}return e.parentNode=this,e}normalize(){}removeChild(e){if(e.parentNode!==this)throw new Error("node is not a child");return e.remove(),e}replaceChild(e,t){const{_prev:n,_next:r}=(e=>({_prev:e._prev,_next:o(e)._next}))(t);t.remove(),e.remove(),n._next=e,e._prev=n;const s=o(e);return r._prev=s,s._next=r,e.parentNode=this,t}querySelector(e){let{_next:t}=this;for(;t;){if(1===t.nodeType&&t.matches(e))return t;({_next:t}=t)}return null}querySelectorAll(e){const t=[];let{_next:n}=this;for(;n;)1===n.nodeType&&n.matches(e)&&t.push(n),n=n._next;return t}}class f extends _{constructor(e,t,r,s){super(e,t,s),this.textContent=n(r)}get firstChild(){return null}get lastChild(){return null}get childNodes(){return[]}get nextSibling(){return this._next}get previousSibling(){return this._prev}get nextElementSibling(){return h.nextElementSibling(this)}get previousElementSibling(){return h.previousElementSibling(this)}normalize(){}hasChildNodes(){return!1}insertBefore(){throw new Error("invalid operation")}appendChild(){throw new Error("invalid operation")}replaceChild(){throw new Error("invalid operation")}removeChild(){throw new Error("invalid operation")}}class v extends _{constructor(e){super(e.ownerDocument,e.localName,-1),this._prev=this._start=e}}class E extends _{constructor(e,t,r){super(e,"#attribute",2),this.name=n(t),this.value=n(r),this.ownerElement=null}toString(){return`${this.name}="${this.value}"`}}class N extends f{constructor(e,t){super(e,"#comment",t,8)}toString(){return`\x3c!--${this.textContent}--\x3e`}}const b=e=>{e._ownerElement.setAttribute("class",[...e].join(" "))};class C extends Set{constructor(e){super(),this._ownerElement=e}add(...e){for(const t of e)t&&super.add(t);b(this)}contains(e){return this.has(e)}remove(...e){for(const t of e)this.delete(t);b(this)}}module.exports=require("css-select");const{isArray:y}=Array,T=({nodeType:e})=>1===e,w=(e,t)=>t.some((t=>T(t)&&(e(t)||w(e,S(t))))),A=(e,t)=>e.getAttribute(t),S=({childNodes:e})=>e,D=({localName:e})=>e.toLowerCase(),B=({parentNode:e})=>e,L=e=>{const{parentNode:t}=e;return t?t.children:e},M=e=>y(e)?e.map(M).join(""):T(e)?M(S(e)):3===e.nodeType?e.textContent:"",O=(e,t)=>e.hasAttribute(t),q=e=>{let{length:t}=e;for(;t--;){const n=e[t];if(t&&-1<e.lastIndexOf(n,t-1))e.splice(t,1);else for(let{parentNode:r}=n;r;r=r.parentNode)if(e.includes(r)){e.splice(t,1);break}}return e},k=(e,t)=>{const n=[];for(const r of t)T(r)&&(e(r)&&n.push(r),n.push(...k(e,S(r))));return n},j=(e,t)=>{for(let n of t)if(e(n)||(n=j(e,S(n))))return n;return null};const I={get:(e,t)=>t in e?e[t]:e.find((({name:e})=>e===t))};class H extends x{constructor(e,t){super(e,t,1),this.id="",this._classList=null,this._next=this._end=new v(this)}get children(){return m.children(this)}get firstElementChild(){return m.firstElementChild(this)}get lastElementChild(){return m.lastElementChild(this)}get childElementCount(){return m.childElementCount(this)}prepend(...e){return m.prepend(this,...e)}append(...e){return m.append(this,...e)}replaceChildren(...e){return m.replaceChildren(this,...e)}get className(){return[...this.classList].join(" ")}set className(e){const{classList:t}=this;t.clear(),t.add(...e.split(/\s+/))}get nodeName(){return u(this)}get tagName(){return u(this)}get classList(){return this._classList||(this._classList=new C(this))}get innerHTML(){return this.childNodes.join("")}get outerHTML(){return this.toString()}get attributes(){const e=[];let{_next:t}=this;for(;2===t.nodeType;)e.push(t),t=t._next;return new Proxy(e,I)}get nextSibling(){return this._end._next}get previousSibling(){return this._prev}get nextElementSibling(){return h.nextElementSibling(this._end)}get previousElementSibling(){return h.previousElementSibling(this)}getAttributeNode(e){let{_next:t}=this;for(;2===t.nodeType;){if(t.name===e)return t;t=t._next}return null}removeAttributeNode(e){let{_next:t}=this;for(;2===t.nodeType;){if(t===e){const{_prev:t,_next:n}=e;return t._next=n,n._prev=t,void(e.ownerElement=e._prev=e._next=null)}t=t._next}throw new Error("Node was not found")}setAttributeNode(e){const t=this.getAttributeNode(e.name);if(t!==e){t&&this.removeAttributeNode(t);const{ownerElement:n}=e,{_next:r}=this;n&&n.removeAttributeNode(e),e.ownerElement=this,e._prev=this,e._next=r,this._next=r._prev=e}return t}hasAttribute(e){return!!this.getAttributeNode(e)}hasAttributeNS(e,t){return this.hasAttribute(t)}hasAttributes(){return 2===this._next.nodeType}getAttributeNames(){return this.attributes.map((({name:e})=>e))}getAttribute(e){const t=this.getAttributeNode(e);return t&&t.value}getAttributeNS(e,t){return this.getAttribute(t)}removeAttribute(e){let{_next:t}=this;for(;2===t.nodeType;){if(t.name===e)return void this.removeAttributeNode(t);t=t._next}}removeAttributeNS(e,t){this.removeAttribute(t)}setAttribute(e,t){let n=this.getAttributeNode(e);n?n.value=t:(n=this.ownerDocument.createAttribute(e),n.value=t,this.setAttributeNode(n))}setAttributeNS(e,t,n){this.setAttribute(t,n)}toggleAttribute(e,t){return this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!(!t&&1!==arguments.length)&&(this.setAttribute(e,""),!0)}toString(){let{localName:e,_next:t,_end:n}=this;const r=["<",e];for(;2===t.nodeType;)r.push(" "+t),t=t._next;if(r.push(">"),!(({localName:e,ownerDocument:t})=>t._mime.voidElements.test(e))(this)){for(;t!==n;)r.push(""+t),t=o(t)._next;r.push("</",e,">")}return r.join("")}getElementsByTagName(e){const t=[];let{_next:n}=this;for(;n;)1!==n.nodeType||n.localName!==e&&n.tagName!==e||t.push(n),n=n._next;return t}getElementsByTagNameNS(e,t){return this.getElementsByTagName(t)}getElementsByClassName(e){const t=[];let{_next:n}=this;for(;n;)1===n.nodeType&&n.classList.has(e)&&t.push(n),n=n._next;return t}matches(e){return((e,t)=>(void 0)(e,t,{strict:!0,xmlMode:!l(e),adapter:{isTag:T,existsOne:w,getAttributeValue:A,getChildren:S,getName:D,getParent:B,getSiblings:L,getText:M,hasAttrib:O,removeSubsets:q,findAll:k,findOne:j}}))(this,e)}}class P extends x{constructor(e){super(e,"#fragment",11),this._next=this._end=new v(this)}getElementById(e){return this.children.find((t=>c.getElementById({_next:t},e)))}get children(){return m.children(this)}get firstElementChild(){return m.firstElementChild(this)}get lastElementChild(){return m.lastElementChild(this)}get childElementCount(){return m.childElementCount(this)}prepend(...e){return m.prepend(this,...e)}append(...e){return m.append(this,...e)}replaceChildren(...e){return m.replaceChildren(this,...e)}}class U extends f{constructor(e,t){super(e,"#text",t,3)}toString(){return this.textContent}}class $ extends _{constructor(e){super(null,"#document",9),this._mime=s[e],this.root=null}getElementById(e){const{root:t}=this;return t&&c.getElementById(t,e)}get children(){const{root:e}=this;return e?[e]:[]}get firstElementChild(){return this.root}get lastElementChild(){return this.root}get childElementCount(){return this.root?1:0}prepend(...e){throw new Error("Cannot have more than one Element child of a Document")}append(...e){throw new Error("Cannot have more than one Element child of a Document")}replaceChildren(...e){throw new Error("Cannot have more than one Element child of a Document")}querySelector(e){const{root:t}=this;return t&&m.querySelector(t,e)}querySelectorAll(e){const{root:t}=this;return t?m.querySelectorAll(t,e):[]}createAttribute(e){return new E(this,e,"")}createElement(e,t={}){const n=new H(this,e);return t.is&&n.setAttribute("is",t.is),n}createComment(e){return new N(this,e)}createTextNode(e){return new U(this,e)}createDocumentFragment(){return new P(this)}toString(){return this._mime.docType+(this.root||"").toString()}getElementsByTagName(e){const{root:t}=this;return t?t.getElementsByTagName(e):[]}getElementsByTagNameNS(e,t){return this.getElementsByTagName(t)}getElementsByClassName(e){const{root:t}=this;return t?t.getElementsByClassName(e):[]}}return e.HTMLDocument=class extends ${constructor(){super("text/html"),this.root=this.createElement("html"),this.root.parentNode=this}get documentElement(){return this.root}},e.SVGDocument=class extends ${constructor(){super("image/svg+xml")}},e.XMLDocument=class extends ${constructor(){super("text/xml")}},Object.defineProperty(e,"__esModule",{value:!0}),e}({});
