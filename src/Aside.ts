import Control from "../controll";
import styles from './style.css'
export default class Aside extends Control{
	constructor(parentNode:HTMLElement) {
		super(parentNode,'aside',styles.aside);
		const email='poli8512@gmail.com'
		const phone= "+7 (911) 128 34 75"
		const linkedIn='link...'
		const gotHub='gitHub...'

		const name= new Control(this.node,'div',styles.name,'Polina Vorobeva')
		const contacts=new Control(this.node,'div','')
		const emailEl=new Control(contacts.node,'p','',`email: ${email}`)
		const phoneEl=new Control(contacts.node,'p','',`phone:${phone}`)
		const socials=new Control(contacts.node,'p')
		const linkdn= new Control(socials.node,'span','','L')
		const github= new Control(socials.node,'span','','G')
	}
}