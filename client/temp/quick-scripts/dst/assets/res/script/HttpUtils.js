
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/res/script/HttpUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0L0h0dHBVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sRUFBRSxHQUEwQixNQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUUxRDtJQUFBO1FBRVcsUUFBRyxHQUEwQixJQUFJLENBQUM7UUFDbEMsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQXdEdEMsQ0FBQztJQXREVSx3QkFBSSxHQUFYO1FBQUEsaUJBWUM7UUFYRyxJQUFNLElBQUksR0FBRztZQUNULGNBQWMsRUFBRSxLQUFLO1lBQ3JCLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztTQUN6QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLElBQUk7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztJQUNBLGlDQUFhLEdBQXBCO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFBLElBQUk7WUFDeEIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLO1FBQ0wsV0FBVyxDQUFDO1lBQ1IsSUFBSSxLQUFJLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzVCLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsV0FBVztRQUNYLFdBQVcsQ0FBQztZQUNSLElBQUksS0FBSSxDQUFDLEdBQUcsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRTtnQkFDdEUsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRVosQ0FBQztJQUVELE9BQU87SUFDQSxzQkFBRSxHQUFULFVBQVUsS0FBYSxFQUFFLFFBQWtCO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsT0FBTztJQUNBLHdCQUFJLEdBQVgsVUFBWSxLQUFhLEVBQUUsSUFBVTtRQUNqQyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFFTCxDQUFDO0lBMURzQixrQkFBUSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7SUEyRGpFLGdCQUFDO0NBNURELEFBNERDLElBQUE7a0JBNURvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW86IFNvY2tldElPQ2xpZW50U3RhdGljID0gKHdpbmRvdyBhcyBhbnkpLmlvIHx8IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwVXRpbHMge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEh0dHBVdGlscyA9IG5ldyBIdHRwVXRpbHMoKTtcbiAgICBwdWJsaWMgc2lvOiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQgPSBudWxsO1xuICAgIHB1YmxpYyBsYXN0UGluZ1RpbWU6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGNvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAncmVjb25uZWN0aW9uJzogZmFsc2UsIC8vIOiHquWKqOmHjei/nlxuICAgICAgICAgICAgJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJzogdHJ1ZSwgLy/lu7rnq4vmlrDnmoTov57mjqVcbiAgICAgICAgICAgICd0cmFuc3BvcnRzJzogWyd3ZWJzb2NrZXQnLCAncG9sbGluZyddXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaW8gPSBpby5jb25uZWN0KCdodHRwOi8vMTI3LjAuMC4xOjg4ODgnLCBvcHRzKTtcbiAgICAgICAgdGhpcy5zaW8ub24oJ2Nvbm5lY3QnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov57mjqXmiJDlip8nKTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRIZWFyQmVhdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDlv4Pot7Pmo4DmtYtcbiAgICBwdWJsaWMgc3RhcnRIZWFyQmVhdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYXN0UGluZ1RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnNpby5vbignZ2FtZVBvbmcnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBpbmdUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5b+D6LezXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbyAmJiB0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lvLmVtaXQoJ2dhbWVQaW5nJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2FtZVBvbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgLy8g5qOA5rWL5piv5ZCm5pat5byA6L+e5o6lXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbyAmJiB0aGlzLmNvbm5lY3RlZCAmJiBEYXRlLm5vdygpIC0gdGhpcy5sYXN0UGluZ1RpbWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2lvID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcblxuICAgIH1cblxuICAgIC8vIOebkeWQrOS6i+S7tlxuICAgIHB1YmxpYyBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaW8ub24oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvLyDlj5HlsITkuovku7ZcbiAgICBwdWJsaWMgZW1pdChldmVudDogc3RyaW5nLCBkYXRhPzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNpby5lbWl0KGV2ZW50LCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lvLmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICB9XG59Il19