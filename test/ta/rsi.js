"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ma_1 = require("./ma");
function RSI(close, n) {
    let up = [0];
    let dn = [0];
    for (let i = 1; i < close.length; i++) {
        if (close[i] > close[i - 1]) {
            up.push(close[i] - close[i - 1]);
            dn.push(0);
        }
        else {
            up.push(0);
            dn.push(close[i - 1] - close[i]);
        }
    }
    let upma = ma_1.SMA(up, n);
    let dnma = ma_1.SMA(dn, n);
    let rsi = [];
    for (let i = 0; i < close.length; i++) {
        rsi.push(upma[i] / (upma[i] + dnma[i]) * 100);
    }
    return rsi;
}
exports.RSI = RSI;
