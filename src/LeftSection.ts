import Control from "../controll";
import {ContactsSection, Section, TextSection} from "./Section";
import styles from './style.css'

export class LeftSection extends Control{
	constructor(parentNode:HTMLElement) {
		super(parentNode,'div', styles.smallSection)
		const educationData = [
			"Rolling Scope School- JavaScript(2021)",
			'Psychologist(2018)-Bachelor\'s degree']
		const technologies = ['MongoDB', 'Express', 'Git', 'RESTApi', 'Webpack']
		const skillsAr = ['JS/TS','React', 'HTML', 'CSS', 'Vue','NodeJS']
		const hobbiesData=`Люблю почитать интересные книги, рисование, походы и природу.
			При случае могу поиграть в футбол и покер.`
		const photoEl = new Control(this.node, 'div', styles.photo)
		photoEl.node.style.backgroundImage = ('url("./public/assets/image/avatar.png")')
		const contacts=new ContactsSection(this.node)
		//gmail  telegram  github tel
		const skills = new Section(this.node, {
			title: 'Навыки',
			arrayOfData: skillsAr,
			styles: 'skills'
		})
		const education = new Section(this.node, {title: 'Образование', arrayOfData: educationData, styles:'education'})
		const techs = new Section(this.node, {
			title:'Технологии',
			arrayOfData:technologies,
			styles:'techs'
		})
		const hobbies = new TextSection(this.node, 'Хобби',hobbiesData)

		const english = new Control(this.node, 'div', '', 'English( A2)')


	}
}