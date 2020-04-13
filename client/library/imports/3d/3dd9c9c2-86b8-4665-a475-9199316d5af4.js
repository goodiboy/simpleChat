"use strict";
cc._RF.push(module, '3dd9cnChrhGZaR1kZkxbVr0', 'HttpUtils');
// res/script/HttpUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io = window.io || {};
var HttpUtils = /** @class */ (function () {
    function HttpUtils() {
        this.sio = null;
        this.lastPingTime = 0;
        this.connected = false;
    }
    HttpUtils.prototype.init = function () {
        var _this = this;
        var opts = {
            'reconnection': false,
            'force new connection': true,
            'transports': ['websocket', 'polling']
        };
        this.sio = io.connect('http://127.0.0.1:8888', opts);
        this.sio.on('connect', function (data) {
            console.log('连接成功');
            _this.connected = true;
            _this.startHearBeat();
        });
    };
    // 心跳检测
    HttpUtils.prototype.startHearBeat = function () {
        var _this = this;
        this.lastPingTime = Date.now();
        this.sio.on('gamePong', function (data) {
            _this.lastPingTime = Date.now();
        });
        // 心跳
        setInterval(function () {
            if (_this.sio && _this.connected) {
                _this.sio.emit('gamePing');
                console.log('gamePong');
            }
        }, 2000);
        // 检测是否断开连接
        setInterval(function () {
            if (_this.sio && _this.connected && Date.now() - _this.lastPingTime > 10000) {
                _this.connected = false;
                _this.sio.disconnect();
                _this.sio = null;
            }
        }, 500);
    };
    // 监听事件
    HttpUtils.prototype.on = function (event, callback) {
        this.sio.on(event, callback);
    };
    // 发射事件
    HttpUtils.prototype.emit = function (event, data) {
        if (data) {
            this.sio.emit(event, data);
        }
        else {
            this.sio.emit(event);
        }
    };
    HttpUtils.instance = new HttpUtils();
    return HttpUtils;
}());
exports.default = HttpUtils;

cc._RF.pop();