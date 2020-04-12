const io: SocketIOClientStatic = (window as any).io || {};

export default class HttpUtils {
    public static readonly instance: HttpUtils = new HttpUtils();
    public sio: SocketIOClient.Socket = null;

    public init(): void {
        const opts = {
            'reconnection': false, // 自动重连
            'force new connection': true, //建立新的连接
            'transports': ['websocket', 'polling']
        }
        this.sio = io.connect('http://127.0.0.1:8888', opts);
        this.sio.on('connect', data => {
            console.log('连接成功');
        })
    }
}