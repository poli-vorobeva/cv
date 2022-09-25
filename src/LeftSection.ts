import Control from "../controll";
import {Section, TextSection} from "./Section";
import styles from './style.css'

export class LeftSection extends Control{
	constructor(parentNode:HTMLElement) {
		super(parentNode,'div', styles.smallSection)
		const educationData = [
			"Rolling Scope School- JavaScript(2021)",
			'Psychologist(2018)-Bachelor\'s degree']
		const technologies = ['MongoDB', 'Express', 'Git', 'RESTApi', 'Webpack']
		const skillsAr = ['JS/TS','React', 'HTML', 'CSS',  'NodeJS', 'Vue']
		const hobbiesData=`Люблю почитать интересные книги, рисование, походы и природу.
			При случае могу поиграть в футбол и покер.`
		const photoEl = new Control(this.node, 'div', styles.photo)
		photoEl.node.style.backgroundImage = ('url("./public/assets/image/avatar.png")')
		const contacts=new Section(this.node,{title:'Contacts',data:[]})
		//gmail  telegram  github tel
		const skills = new Section(this.node, {
			title: 'Skills',
			arrayOfData: skillsAr,
			styles: 'skills'
		})
		const education = new Section(this.node, {title: 'Education', arrayOfData: educationData, styles:'education'})
		const techs = new Section(this.node, {
			title:'Technologies',
			arrayOfData:technologies,
			styles:'techs'
		})
		const hobbies = new TextSection(this.node, 'Hobbies',hobbiesData)

		const english = new Control(this.node, 'div', '', 'English( A2)')


	}
}