const benchmark = require('./benchmark.js');
const {DOMParser} = require('../cjs/index.js');
const dp = new DOMParser;

benchmark('linkedom', html => dp.parseFromString(html, 'text/html'));
