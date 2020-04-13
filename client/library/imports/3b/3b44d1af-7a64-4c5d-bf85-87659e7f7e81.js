"use strict";
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