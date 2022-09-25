import Control from "../controll";

export default class SvgElement extends Control {
	constructor(parentNode: HTMLElement) {
		super(parentNode, 'svg');
		//	const svg = new Control(parentNode, 'svg')
		const defs = new Control(this.node, 'defs')
		const filter = new Control(defs.node, 'filter')
		filter.node.setAttribute('id', 'goo');
		filter.node.innerHTML=`<feGaussianBlur in= "SourceGraphic" stdDeviation="10" result="blur"/>`
		filter.node.innerHTML+=`<feColorMatrix in="blur" mode= "matrix" values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 -10" result= "goo"/>`
		filter.node.innerHTML+=`<feBlend in= "SourceGraphic" in2= "goo"/>`
		}
}