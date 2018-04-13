//preload.js
"use strict";
console.log('called');
if(document)
    console.log("document!!!");
console.log(document);
window.$ = window.jQuery = require('./jquery-1.12.4.min.js');