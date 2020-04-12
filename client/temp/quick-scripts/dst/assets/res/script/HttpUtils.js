
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0L0h0dHBVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sRUFBRSxHQUEwQixNQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUUxRDtJQUFBO1FBRVcsUUFBRyxHQUEwQixJQUFJLENBQUM7SUFhN0MsQ0FBQztJQVhVLHdCQUFJLEdBQVg7UUFDSSxJQUFNLElBQUksR0FBRztZQUNULGNBQWMsRUFBRSxLQUFLO1lBQ3JCLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztTQUN6QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLElBQUk7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFic0Isa0JBQVEsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBY2pFLGdCQUFDO0NBZkQsQUFlQyxJQUFBO2tCQWZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW86IFNvY2tldElPQ2xpZW50U3RhdGljID0gKHdpbmRvdyBhcyBhbnkpLmlvIHx8IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwVXRpbHMge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgaW5zdGFuY2U6IEh0dHBVdGlscyA9IG5ldyBIdHRwVXRpbHMoKTtcbiAgICBwdWJsaWMgc2lvOiBTb2NrZXRJT0NsaWVudC5Tb2NrZXQgPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAncmVjb25uZWN0aW9uJzogZmFsc2UsIC8vIOiHquWKqOmHjei/nlxuICAgICAgICAgICAgJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJzogdHJ1ZSwgLy/lu7rnq4vmlrDnmoTov57mjqVcbiAgICAgICAgICAgICd0cmFuc3BvcnRzJzogWyd3ZWJzb2NrZXQnLCAncG9sbGluZyddXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaW8gPSBpby5jb25uZWN0KCdodHRwOi8vMTI3LjAuMC4xOjg4ODgnLCBvcHRzKTtcbiAgICAgICAgdGhpcy5zaW8ub24oJ2Nvbm5lY3QnLCBkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfov57mjqXmiJDlip8nKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19