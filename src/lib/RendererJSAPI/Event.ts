// import { RendererJSAPI } from './RendererJSAPI';

export enum MOUSE_TYPE {
    DOWN = 'DOWN',
    UP = 'UP',
    MOVE = 'MOVE',
    CLICK = 'CLICK',
    DRAG = 'DRAG',
}

export class EventInteraction {
    static mouseEventDataPre: MouseEventData;
    app: any
    isDown = false;
    constructor(app: any) {
        this.app = app;
        EventInteraction.mouseEventDataPre = new MouseEventData();
        this.InitArcGISMapEventV4x();
    }
    public InitArcGISMapEventV4x() {
        this.app.mView.watch('size', () => {
            this.app.ctx.canvas.width = this.app.mView.container.clientWidth;
            this.app.ctx.canvas.height = this.app.mView.container.clientHeight;
            this.app.resizeCanvas(this.app.mView.container.clientWidth, this.app.mView.container.clientHeight);
        });
        this.app.mView.on('pointer-down', (e: any) => {
            const ev = this.CommonEventBuilderArcGIS(e);
            ev.type = MOUSE_TYPE.DOWN;
            ev.isDown = true;
            this.isDown = true;
            this.app.mouseEvent(ev);
        });
        this.app.mView.on('pointer-up', (e: any) => {
            const ev = this.CommonEventBuilderArcGIS(e);
            ev.type = MOUSE_TYPE.UP;
            ev.isDown = false;
            this.isDown = false;
            this.app.mouseEvent(ev);
        });
        this.app.mView.on('click', (e: any) => {
            const ev = this.CommonEventBuilderArcGIS(e);
            ev.type = MOUSE_TYPE.CLICK;
            this.app.mouseEvent(ev);
        });
        this.app.mView.on('drag', (e: any) => {
            if (!this.isDown) { return; }
            if (this.app.disablePan) {
                e.stopPropagation();
                // console.log(1);
            }
            const ev = this.CommonEventBuilderArcGIS(e);
            // console.log(2);
            ev.type = MOUSE_TYPE.DRAG;
            this.app.mouseEvent(ev);
        });
        this.app.mView.on('pointer-move', (e: any) => {
            if (this.isDown) { return; }
            const ev = this.CommonEventBuilderArcGIS(e);
            ev.type = MOUSE_TYPE.MOVE;
            this.app.mouseEvent(ev);
        });
        this.app.mView.on('key-down', (e: any) => {
            let keyPressed = e.key;
            if (keyPressed.slice(0, 5) === 'Arrow' || e.key === '-' || e.key === '=' || e.key === 'd') {
                e.stopPropagation();
            }

            this.KeyDownJSAPI4X(e.native);
        });
    }
    private CommonEventBuilderArcGIS(e: any): MouseEventData {
        let mEvent: MouseEventData = new MouseEventData();
        mEvent.preX = EventInteraction.mouseEventDataPre.x;
        mEvent.preY = EventInteraction.mouseEventDataPre.y;
        mEvent.x = e.x;
        mEvent.y = e.y;
        mEvent.yGLPicking = e.native.target.getBoundingClientRect().bottom - e.native.clientY;
        mEvent.pressedShift = e.native.shiftKey;
        mEvent.pressedAlt = e.native.altKey;
        mEvent.pressedCtrl = e.native.ctrlKey;

        mEvent.native = e.native;
        EventInteraction.mouseEventDataPre = mEvent;
        return mEvent;
    }
    private KeyDownJSAPI4X(k: KeyboardEvent) {
        let kEventData: KeyboardEventData = this.CommonEventBuilder(k);
        this.app.keyDown(k);
    }
    private CommonEventBuilder(k: KeyboardEvent): KeyboardEventData {
        let kEvent: KeyboardEventData = new KeyboardEventData();
        kEvent.key = k.key;
        kEvent.keyCode = k.keyCode;
        kEvent.code = k.code;
        kEvent.hasCtrlKey = k.ctrlKey;
        kEvent.hasShiftKey = k.shiftKey;
        kEvent.hasAltKey = k.altKey;
        kEvent.hasMetaCommand = k.metaKey;
        return kEvent;
    }
}
export class MouseEventData {
    x: number = -1; y: number = -1; z: number = -1;
    preX: number = -1; preY: number = -1; preZ: number = -1;
    yGLPicking: number;
    isDown: boolean = false;
    isDoubleClick: boolean = false;
    isMove: boolean = false;
    pressedShift: boolean = false;
    pressedAlt: boolean = false;
    pressedCtrl: boolean = false;
    lat: number = -1;
    long: number = -1;
    wheel: number = 0;
    preWheel: number = 0;
    type: MOUSE_TYPE;
    native: MouseEvent;
    constructor() {
        // TODO
    }
    public DeepCopy() {
        let mEvent = new MouseEventData();
        mEvent.x = this.x; mEvent.y = this.y; mEvent.z = this.z; mEvent.preX = this.preX; mEvent.preY = this.preY; mEvent.preZ = this.preZ;
        mEvent.pressedAlt = this.pressedAlt; mEvent.pressedShift = this.pressedShift; mEvent.pressedCtrl = this.pressedCtrl;
        mEvent.isDoubleClick = this.isDoubleClick; mEvent.isDown = this.isDown; mEvent.isMove = this.isMove;
        mEvent.lat = this.lat; mEvent.long = this.long; mEvent.wheel = this.wheel; mEvent.preWheel = this.preWheel;
        mEvent.yGLPicking = this.yGLPicking;
        mEvent.native = this.native;
        return mEvent;
    }
}
export class KeyboardEventData {
    preEvent: KeyboardEventData;
    key: string;
    hasAltKey: boolean;
    hasCtrlKey: boolean;
    hasShiftKey: boolean;
    hasMetaCommand: boolean;
    code: string;
    keyCode: number;
    constructor() {
        // TODO
    }
}