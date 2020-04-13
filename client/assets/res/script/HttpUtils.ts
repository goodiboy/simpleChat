const io: SocketIOClientStatic = (window as any).io || {};

export default class HttpUtils {
    public static readonly instance: HttpUtils = new HttpUtils();
    public sio: SocketIOClient.Socket = null;
    public lastPingTime: number = 0;
    public connected: boolean = false;

    public init(): void {
        const opts = {
            'reconnection': false, // 自动重连
            'force new connection': true, //建立新的连接
            'transports': ['websocket', 'polling']
        }
        this.sio = io.connect('http://127.0.0.1:8888', opts);
        this.sio.on('connect', data => {
            console.log('连接成功');
            this.connected = true;
            this.startHearBeat();
        });
    }

    // 心跳检测
    public startHearBeat(): void {
        this.lastPingTime = Date.now();
        this.sio.on('gamePong', data => {
            this.lastPingTime = Date.now();
        });

        // 心跳
        setInterval(() => {
            if (this.sio && this.connected) {
                this.sio.emit('gamePing')
                console.log('gamePong');
            }
        }, 2000);

        // 检测是否断开连接
        setInterval(() => {
            if (this.sio && this.connected && Date.now() - this.lastPingTime > 10000) {
                this.connected = false;
                this.sio.disconnect();
                this.sio = null;
            }
        }, 500);

    }

    // 监听事件
    public on(event: string, callback: Function): void {
        this.sio.on(event, callback);
    }

    // 发射事件
    public emit(event: string, data?: any): void {
        if (data) {
            this.sio.emit(event, data);
        } else {
            this.sio.emit(event);
        }

    }
}