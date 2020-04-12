import HttpUtils from "./HttpUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    protected onLoad(): void {
        HttpUtils.instance.init();
    }
}
