"use strict";
cc._RF.push(module, '3dd9cnChrhGZaR1kZkxbVr0', 'HttpUtils');
// res/script/HttpUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = window.io || {};
var HttpUtils = /** @class */ (function () {
    function HttpUtils() {
        this.sio = null;
    }
    HttpUtils.prototype.init = function () {
        var opts = {
            'reconnection': false,
            'force new connection': true,
            'transports': ['websocket', 'polling']
        };
        this.sio = io.connect('http://127.0.0.1:8888', opts);
        this.sio.on('connect', function (data) {
            console.log('连接成功');
        });
    };
    HttpUtils.instance = new HttpUtils();
    return HttpUtils;
}());
exports.default = HttpUtils;

cc._RF.pop();