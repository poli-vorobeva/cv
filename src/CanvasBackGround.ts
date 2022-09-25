import Control from "../controll";
import SvgElement from "./SvgElement";
import Bubble from "./Bubble";
import styles from './style.css'

export default class CanvasBackground extends Control {
	node: HTMLCanvasElement
	private bubbles: Bubble[];
	private bgBubbles: Bubble[];
	private ctxbg: CanvasRenderingContext2D;
	private ctx: CanvasRenderingContext2D;
	private animateBind: ()=>void;

	constructor(parentNode: HTMLElement) {
		super(parentNode, 'canvas',styles.canvas);
	//	const svg = new SvgElement(this.node)
		this.animateBind = this.animate.bind(this)
		//const canvas = document.getElementById('canvas');
		this.ctx = this.node.getContext('2d')
		this.node.width = window.innerWidth
		this.node.height = window.innerHeight

		const canvasbg = new Control<HTMLCanvasElement>(parentNode,
			'canvas', styles.canvas);
		this.ctxbg = canvasbg.node.getContext('2d')
		canvasbg.node.width = window.innerWidth
		canvasbg.node.height = window.innerHeight
		this.bubbles = []
		this.bgBubbles = []

		window.onload = ()=>this.animateBind()
		window.onresize = () => {
			this.node.width = window.innerWidth
			this.node.height = window.innerHeight
			canvasbg.node.width = window.innerWidth
			canvasbg.node.height = window.innerHeight
			this.bubbles = []
			this.bgBubbles = []
		}

	}

	addBubble() {
		this.bubbles.push(
			//rgba(23,45,101,0.6)
			new Bubble('rgb(40,187,187)', 1.7, this.ctx))
	}

	addbgBubble() {
		//'rgb(0,14,50)'
		this.bgBubbles.push(new Bubble(
			'rgb(31,31,132)', 2, this.ctxbg))
	}

	handleBubbles() {
		for (let i = this.bubbles.length - 1; i >= 0; i--) {
			this.bubbles[i].update()
			if (!this.bubbles[i].life) {
				this.bubbles.splice(i, 1)
			}
		}
		for (let i = this.bgBubbles.length - 1; i >= 0; i--) {
			this.bgBubbles[i].update()
			if (!this.bgBubbles[i].life) {
				this.bgBubbles.splice(i, 1)
			}
		}
		if (this.bubbles.length < (window.innerWidth / 3)) {
			this.addBubble()
		}
		if (this.bgBubbles.length < (window.innerWidth )) {
			this.addbgBubble()
		}
	}

	animate() {
		this.ctx.clearRect(0, 0, this.node.width, this.node.height)
		this.ctxbg.clearRect(0, 0, this.node.width, this.node.height)

		this.handleBubbles()
		for (let i = this.bgBubbles.length - 1; i >= 0; i--) {
			this.bgBubbles[i].draw()
		}
		for (let i = this.bubbles.length - 1; i >= 0; i--) {
			this.bubbles[i].draw()
		}
		requestAnimationFrame(this.animateBind)
	}

}