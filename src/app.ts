import Control from "../controll";
import CanvasBackGround from "./CanvasBackGround";
import styles from './style.css'
import Aside from "./Aside";
import {ProjectsSection, Section} from "./Section";
import {LeftSection} from "./LeftSection";
import {RightSection} from "./RightSection";

export type projectData = {
	site: string,
	link: string,
	gitLink: string,
	descr: string,
	stack: string[]
}

export class App extends Control {
	constructor(parentNode: HTMLElement) {
		super(parentNode, 'div', styles.content);
		const smallest = [
			{
				site: 'photoFilter',
				link: '',
				gitLink: '',
				descr: ''
			},
			{
				site: 'momentum',
				link: '',
				gitLink: '',
				descr: ''
			},
		]
		const sitesAr = ['onlineZoo', 'photoFilter', 'momentum', 'art Quiz', 'Card Game (Fool)',
			'English For Kids', 'Match Match Game', 'Christmas Toys']
		const bgCanvas = new CanvasBackGround(this.node)
		//const aside = new Aside(this.node)
		const contentWrapper = new Control(this.node, 'div', styles.contentWrapper)
		const leftSection = new LeftSection(contentWrapper.node)
		const rightSection = new RightSection(contentWrapper.node)
	}
}