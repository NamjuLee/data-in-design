import { RendererCanvas } from '../../lib';

export class Solution extends RendererCanvas {

    constructor(div: HTMLDivElement) {
        super(div);

        this.init();
    }
    public init() {
        const ctx = this.ctx;

        ctx.beginPath();
        ctx.arc(this.ctx.canvas.width * 0.5, this.ctx.canvas.height * 0.5, 10, 0, 3.14 * 2)
        ctx.closePath();

        ctx.fillStyle = '#ff0000'
        ctx.fill();

        // TODO
        // You code goes here for one time operation
        // Reference: https://codepen.io/NJStudio/pen/KKdJRRv?editors=0110


        const drawPoint = (x: number, y: number, color: string = '#000', r: number = 5) => {
            // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 3.14 * 2)
            ctx.closePath()
            ctx.fillStyle = color;
            ctx.fill()
        }
        const drawLine = (pts: number[][]) => {
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            for (let i = 1; i < pts.length; ++i) {
                ctx.lineTo(pts[i][0], pts[i][1]);
            }
            ctx.lineWidth = 2;
            ctx.strokeStyle = '#00ff00';
            ctx.stroke();
        }

        const listPoint2 = []

        this.divHost.addEventListener('click', (e: MouseEvent) => {
            ctx.clearRect(-200, -200, 400, 400);
            
            console.log(`mouse x: ${e.offsetX}, y: ${e.offsetY}`);
            // add a position to the list
            listPoint2.push([e.offsetX - 0, e.offsetY - 0]);

            // draw lines by the array
            drawLine(listPoint2);

            // loop for draw points by the array
            for (let i = 0; i < listPoint2.length; ++i) {
                drawPoint(listPoint2[i][0], listPoint2[i][1]);
            }

        });


    }
    public mouseClick(x: number, y: number): void {
        
    }
}
