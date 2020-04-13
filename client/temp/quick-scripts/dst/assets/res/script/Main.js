
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/res/script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b44dGvemRMXb+Fh2Wef36B', 'Main');
// res/script/Main.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUtils_1 = require("./HttpUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msgItem = null;
        _this.contentNode = null;
        _this.editMsg = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        var _this = this;
        HttpUtils_1.default.instance.init();
        HttpUtils_1.default.instance.on('message', function (data) {
            console.log(data);
            _this.createMsgItem(data.msg);
        });
    };
    Main.prototype.sendMsg = function () {
        var msg = this.editMsg.string;
        this.createMsgItem('我：' + msg);
        HttpUtils_1.default.instance.emit('message', { msg: msg });
    };
    Main.prototype.createMsgItem = function (msg) {
        var node = cc.instantiate(this.msgItem);
        node.getComponent(cc.Label).string = msg;
        node.parent = this.contentNode;
    };
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "msgItem", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "contentNode", void 0);
    __decorate([
        property(cc.Label)
    ], Main.prototype, "editMsg", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0L01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUFtQ0M7UUEvQkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQXlCN0IsQ0FBQztJQXRCYSxxQkFBTSxHQUFoQjtRQUFBLGlCQVFDO1FBUEcsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFMUIsbUJBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFBLElBQUk7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0ksSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFL0IsbUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLEdBQUcsS0FBQSxFQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sNEJBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNNO0lBVFIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtDeEI7SUFBRCxXQUFDO0NBbENELEFBa0NDLENBbENpQyxFQUFFLENBQUMsU0FBUyxHQWtDN0M7a0JBbENvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0dHBVdGlscyBmcm9tIFwiLi9IdHRwVXRpbHNcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgbXNnSXRlbTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBlZGl0TXNnOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIEh0dHBVdGlscy5pbnN0YW5jZS5pbml0KCk7XG5cbiAgICAgICAgSHR0cFV0aWxzLmluc3RhbmNlLm9uKCdtZXNzYWdlJywgZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNc2dJdGVtKGRhdGEubXNnKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE1zZygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbXNnID0gdGhpcy5lZGl0TXNnLnN0cmluZztcbiAgICAgICAgdGhpcy5jcmVhdGVNc2dJdGVtKCfmiJHvvJonICsgbXNnKTtcblxuICAgICAgICBIdHRwVXRpbHMuaW5zdGFuY2UuZW1pdCgnbWVzc2FnZScsIHttc2d9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlTXNnSXRlbShtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5tc2dJdGVtKTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmNvbnRlbnROb2RlO1xuICAgIH1cbn1cbiJdfQ==