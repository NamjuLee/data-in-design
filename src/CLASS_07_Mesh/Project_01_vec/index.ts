import {  } from '../../lib'
import { RendererWireframe } from 'njscore';


export class Solution extends RendererWireframe {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(id: string) {
      super(id)
    }
    public init () {
  
      this.t = 0.0;
      this.pts.push(...genGridPt());
  
    }
    public update() {
  
      for (let i = 0; i < this.pts.length; ++i) {
        this.pts[i].z = Math.cos(i * this.t * 0.1)
      }
  
      this.t += 0.01;
    }
  
  }
  
  class Vector3 {
    public x: number = 0.0;
    public y: number = 0.0;
    public z: number = 0.0;
    public r: number = 10
    public color = '#f0f'
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    public render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2.0);
        ctx.closePath();
        ctx.fill();
    }
  }
  
  
  const genRandomPt = (numPoints = 100) => {
    const pts = [];
    for (let i = 0; i < numPoints; i++) {
      // const p = {
      //   x: (Math.random() - 0.5) * 500,
      //   y: (Math.random() - 0.5) * 500,
      //   z: (Math.random() - 0.5) * 500,
      // }
      const p = new Vector3((Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 500)
      pts.push(p);
    }
    return pts;
  };
  
  const genGridPt = (numPoints = 5) => {
    const scale = 20;
    const pts = [];
    for (let j = -numPoints; j < numPoints; j++) {
      for (let i = -numPoints; i < numPoints; i++) {
        // pts.push({
        //   x: i * scale,
        //   y: j * scale,
        //   z: 0.0,
        // });
        const p = new Vector3(i * scale, j * scale, 0.0)
        pts.push(p);
      }
    }
    return pts;
  };
  