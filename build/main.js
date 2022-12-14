"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.Colours = exports.ModuleBase = exports.Config = exports.Logger = exports.Client = void 0;
//client
var BotClient_1 = require("./BotClient");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return BotClient_1.default; } });
//Libs
var logger_1 = require("./libs/logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
var Config_1 = require("./libs/Config");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return Config_1.default; } });
//Module manager
var Module_1 = require("./libs/ModuleManager/types/Module");
Object.defineProperty(exports, "ModuleBase", { enumerable: true, get: function () { return Module_1.default; } });
var main_1 = require("./libs/ModuleManager/main");
Object.defineProperty(exports, "Colours", { enumerable: true, get: function () { return main_1.Colours; } });
Object.defineProperty(exports, "Colors", { enumerable: true, get: function () { return main_1.Colours; } });
//exceptions
__exportStar(require("./libs/ModuleManager/Errors"), exports);
