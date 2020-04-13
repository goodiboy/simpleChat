import HttpUtils from "./HttpUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Prefab)
    msgItem: cc.Prefab = null;

    @property(cc.Node)
    contentNode: cc.Node = null;

    @property(cc.Label)
    editMsg: cc.Label = null;


    protected onLoad(): void {
        HttpUtils.instance.init();

        HttpUtils.instance.on('message', data => {
            console.log(data)
            this.createMsgItem(data.msg);
        });

    }

    public sendMsg(): void {
        const msg = this.editMsg.string;
        this.createMsgItem('我：' + msg);

        HttpUtils.instance.emit('message', {msg});
    }

    public createMsgItem(msg: string): void {
        const node = cc.instantiate(this.msgItem);
        node.getComponent(cc.Label).string = msg;
        node.parent = this.contentNode;
    }
}
