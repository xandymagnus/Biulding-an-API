"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("./src/app.js");
var DOOR = 3000;
app_js_1.default.listen(DOOR, function () {
    console.log("running server on http://localhost:".concat(DOOR));
});
