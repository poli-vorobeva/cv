export default class Bubble {
	private radius: number;
	public life: boolean;
	private x: number;
	private y: number;
	private vy: number;
	private vr:number;
	private vx:number;
	private color: string;
	private canvasContext: CanvasRenderingContext2D;

	constructor(color:string, xSpeed:number,canvasCtx:CanvasRenderingContext2D) {
		this.canvasContext=canvasCtx
		this.radius = (Math.random() * 200);
		this.life = true;
		this.y = (Math.random() * 100) - this.radius
		this.x= (Math.random() * window.innerWidth)
		this.vx = ((Math.random() * 0.0002) + 0.0001)
		this.vr = 0
		this.vy = (Math.random()) + xSpeed/10
		this.color = color
	}

	update() {
		this.vy += 0.0005
		this.vr += 0.005;
		this.y += this.vy
		this.x += this.vx/1.5
		if (this.radius > 1) {
			this.radius -= this.vr/8
		}
		if (this.radius <= 1) {
			this.life = false
		}
	}

	draw() {
		this.canvasContext.beginPath()
		this.canvasContext.arc(this.x, this.y, this.radius, 0, 2
			* Math.PI)
		this.canvasContext.fillStyle = this.color
		this.canvasContext.fill()
	}
}