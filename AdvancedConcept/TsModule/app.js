"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_1 = require("./login");
var register_1 = require("./register");
var login_2 = require("./login");
var register_2 = require("./register");
console.log(login_1.userEmail);
(0, login_1.validate)();
console.log(register_1.userEmail);
(0, register_1.validate)();
console.log(login_1.userPassword);
(0, login_2.default)();
(0, register_2.default)();
