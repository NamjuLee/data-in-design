import MapView from '@arcgis/core/views/MapView';
import Map from '@arcgis/core/Map';

import {
  EventInteraction,
  MouseEventData,
  KeyboardEventData,
  MOUSE_TYPE,
} from './Event';

export class RendererJSAPI {
  id: string;
  time: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  eventInteraction: EventInteraction;
  mView: any;
  mPoint: any;
  hostDiv: HTMLElement;
  disablePan: boolean = false;
  isStatic: boolean = false;
  constructor(id: string) {
    console.log({id})
    this.hostDiv = document.getElementById(id) as HTMLDivElement;
    console.log(this.hostDiv)
    this.hostDiv.style.display = 'flex'
    const map = new Map({
      basemap: 'dark-gray-vector', // topo, dark-gray-vector, streets, streets-night-vector
    });
    const view = new MapView({
      container: id,
      map,
      zoom: 15,
      center: [-71.0933575, 42.3591654],
      ui: { components: [] }, // do display any widgets
    });
    // view.ui.remove("zoom");
    view.when(() => {

      // const zoomWidget = new Zoom({
      //   view: view
      // });
      // view.ui.add(zoomWidget, "top-right");

      // view.ui.add({
      //   component: new Zoom({ view }),
      //   position: 'top-right',
      // });
      
      // param.view = view;
      // this.app = new ControllerLabs(param);

      this.mView = view;
      // console.log(this.mView);
      // console.log(this.mView.spatialReference);

      this.canvas = document.createElement('canvas');
      this.canvas.id = 'digitalMappingVisualization';
      this.canvas.style.zIndex = '1';
      this.canvas.style.position = 'absolute';
      this.canvas.style.pointerEvents = 'none';

      this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

      this.mView.container.appendChild(this.canvas);
      this.hostDiv = this.mView.container;
      this.ctx.globalCompositeOperation = 'source-over';
      this.canvas.width = this.mView.container.clientWidth;
      this.canvas.height = this.mView.container.clientHeight;

      this.eventInteraction = new EventInteraction(this);

      this.mPoint = this.mView.toMap({ x: 0, y: 0 });
      this.mPoint.spatialReference = (this.mView as MapView).spatialReference;
      this.mView.zoom = 16;
      this.initPost();
      this.start();
    });
  }
  public initPost() {
    // TODO
  }
  public mouseEvent(m: MouseEventData) {
    if (m.type === MOUSE_TYPE.DOWN) {
      this.mouseDown(m.x, m.y);
      return;
    }
    if (m.type === MOUSE_TYPE.UP) {
      this.mouseUp(m.x, m.y);
      return;
    }
    if (m.type === MOUSE_TYPE.CLICK) {
      this.mouseClick(m.x, m.y);
      return;
    }
    if (m.type === MOUSE_TYPE.DRAG) {
      this.mouseDrag(m.x, m.y);
      return;
    } else {
      this.mouseMove(m.x, m.y);
      return;
    }
  }
  public start() {
    this.time = 0.0;
    this.draw(this.ctx);
  }
  public draw(ctx: CanvasRenderingContext2D) {
    if (this.isStatic) {
      return;
    }
    requestAnimationFrame(() => {
      this.draw(this.ctx);
    });
    this.clear(this.ctx);
    this.time += 0.1;
    this.ctx && this.render(this.ctx);
  }
  public clear(ctx: CanvasRenderingContext2D) {
    ctx && ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  // ...................................................
  public center(lon: number, lat: number) {

    this.mPoint.longitude = lon;
    this.mPoint.latitude = lat;
    this.mView.center = this.mPoint;
  }
  public zoom(z: number) {
    this.mView.zoom = z;
  }
  public toScreen = (long: number, lat: number): number[] => {
    this.mPoint.longitude = long;
    this.mPoint.latitude = lat;

    // this.mPoint.spatialReference.wkid = 102100;
    let p = this.mView.toScreen(this.mPoint);
    return [p.x, p.y]; // screen X Y
  };
  public toMap = (x: number, y: number): number[] => {
    let mp = this.mView.toMap({ x: x, y: y }).clone();
    return [mp.longitude, mp.latitude, mp.x, mp.y];
  };
  public destroy() {
    this.isStatic = true;
    // this.mView.destroy();

    // while (this.mView && this.mView.container.lastElementChild) {
    //   this.mView.container.removeChild(this.mView.container.lastElementChild);
    // }

    if (this.hostDiv) {
      try {
        // More efficient way to remove all children
        while (this.hostDiv.firstChild) {
          this.hostDiv.removeChild(this.hostDiv.firstChild);
        }
      } catch (error) {
        console.error('Error in destroy method:', error);
      }
    } else {
      console.warn('hostDiv is undefined in destroy method');
    }
  }
  // ...................................................
  public render(ctx: CanvasRenderingContext2D) {
    // Bind needed
  }
  public keyDown(k: KeyboardEvent) {
    // Bind needed
  }
  public mouseClick(x: number, y: number) {
    // Bind needed
  }
  public mouseDown(x: number, y: number) {
    // Bind needed
  }
  public mouseUp(x: number, y: number) {
    // Bind needed
  }
  public mouseDrag(x: number, y: number) {
    // Bind needed
  }
  public mouseMove(x: number, y: number) {
    // Bind needed
  }
  public resizeCanvas(width: number, height: number) {
    // Bind needed
  }
}
