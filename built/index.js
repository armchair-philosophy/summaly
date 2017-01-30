"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URL = require("url");
const trace_redirect_1 = require("trace-redirect");
const general_1 = require("./general");
/* plugins */
const amazon = require("./plugins/amazon");
const wikipedia = require("./plugins/wikipedia");
const plugins = [
    amazon,
    wikipedia
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (url) => __awaiter(this, void 0, void 0, function* () {
    const actualUrl = yield trace_redirect_1.default(url);
    const _url = URL.parse(actualUrl, true);
    const plugin = plugins.filter(plugin => plugin.test(_url))[0];
    const summary = plugin
        ? yield plugin.summary(_url)
        : yield general_1.default(_url);
    Object.keys(summary).forEach(k => {
        if (summary[k]) {
            summary[k] = summary[k].trim();
            if (summary[k] === '') {
                summary[k] = null;
            }
        }
    });
    return summary;
});
