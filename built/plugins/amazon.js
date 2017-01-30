"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const client = require('cheerio-httpcli');
client.referer = false;
client.timeout = 10000;
function test(url) {
    return url.hostname === 'www.amazon.com' ||
        url.hostname === 'www.amazon.co.jp' ||
        url.hostname === 'www.amazon.ca' ||
        url.hostname === 'www.amazon.com.br' ||
        url.hostname === 'www.amazon.com.mx' ||
        url.hostname === 'www.amazon.co.uk' ||
        url.hostname === 'www.amazon.de' ||
        url.hostname === 'www.amazon.fr' ||
        url.hostname === 'www.amazon.it' ||
        url.hostname === 'www.amazon.es' ||
        url.hostname === 'www.amazon.nl' ||
        url.hostname === 'www.amazon.cn' ||
        url.hostname === 'www.amazon.in' ||
        url.hostname === 'www.amazon.au';
}
exports.test = test;
;
function summary(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield client.fetch(url.href);
        const $ = res.$;
        const title = $('#title').text();
        const description = $('#productDescription').text() ||
            $('meta[name="description"]').attr('content');
        const thumbnail = $('#landingImage').attr('src');
        return {
            title: title,
            icon: 'https://www.amazon.com/favicon.ico',
            description: description,
            thumbnail: thumbnail,
            sitename: 'Amazon'
        };
    });
}
exports.summary = summary;
;
