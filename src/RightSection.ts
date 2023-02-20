import Control from "../controll";
import {ProjectsSection, TextSection} from "./Section";
import styles from './style.css'
import {projectData} from "./app";
const sitesGitHubLinks={
	'weatherWidget':'https://github.com/poli-vorobeva/weatherVue',
	'buttleShip':'https://github.com/tonyaber/battleship/commits/polina2',
	'artQuiz': 'https://github.com/poli-vorobeva/artQuizREF.git',
	'bujo':'https://github.com/poli-vorobeva/bujo',
	'todoWithServer':'https://github.com/poli-vorobeva/todoReact',
	'fool': 'https://github.com/poli-vorobeva/durak.git',
	'englishFK': 'https://github.com/poli-vorobeva/efkREF.git',
	'match': 'https://github.com/poli-vorobeva/mgREF.git',
	'christmas': 'https://github.com/poli-vorobeva/christmas.git',
	'zoo': 'https://github.com/poli-vorobeva/zooREF.git',
	'planner': 'https://github.com/poli-vorobeva/moonApp.git',
	'plannerOld': 'https://github.com/poli-vorobeva/old12weeks.git',
	'question': 'https://github.com/poli-vorobeva/questionnaire.git',
	'netflx': 'https://github.com/poli-vorobeva/netflx.git',
	'momentum': 'https://github.com/poli-vorobeva/momentum.git',
	'excelVue': 'https://github.com/poli-vorobeva/vueExel.git',
	"vueProject": 'https://github.com/poli-vorobeva/vueStepper.git',
	"nextApp": "https://github.com/poli-vorobeva/reactNextApp.git",
	'vueTodo': 'https://github.com/poli-vorobeva/vueProj.git',
	'englishServer':'https://github.com/poli-vorobeva/copyserver.git',
	'vuexApp':'https://github.com/poli-vorobeva/vuexApp.git',
	'redAlert':'https://github.com/poli-vorobeva/redAlertFirst.git'
}
export const sites = {
	'weatherWidget':"Weather Widget",
	'buttleShip':'Battle Ship',
	'redAlert': 'Red Alert',
	'artQuiz': 'Art Quiz',
	'bujo':'Bullet Journal',
	'todoWithServer':'React Todo WithServer',
	'fool': 'Card Game (Fool)',
	'englishFK': 'English For Kids',
	'match': 'Match Match Game',
	'christmas': 'Christmas Toys',
	'zoo': 'OnlineZoo',
	'planner': 'Planner for 12 weeks',
	'plannerOld': 'Planner for 12 weeks',
	'question': 'Questionnaire',
	'netflx': 'Netflix',
	'momentum': 'Momentum',
	'excelVue': "Vue Excel",
	"vueProject": 'Vue Project',
	"nextApp": "Next App",
	'vueTodo': 'Vue todo',
	'vuexApp':'Vuex App'
}

export class RightSection extends Control {
	private projectsSection: projectData[];
	private aboutMeContent: string;

	constructor(parent: HTMLElement) {
		super(parent, 'div', styles.largeSection);
		this.projectsSection = [
			{
				site: sites['artQuiz'],
				link: '',
				gitLink: 'https://github.com/poli-vorobeva/artQuizREF',
				descr: 'App with multi player and single player mode',
				stack: ['JS', 'TypeScript', 'Node.js(server)', 'webSockets']
			},
			{
				site: sites["fool"],
				link: '',
				gitLink: 'https://github.com/poli-vorobeva/durak',
				descr: 'Group project of popular card game "Fool" with multiplayer mode and able to play with bot',
				stack: ['JS', 'TypeScript', 'Node.js(server)', 'webSockets']
			},
			{
				site: sites["englishFK"],
				link: '',
				gitLink: 'https://github.com/poli-vorobeva/efkREF',
				descr: 'App with learning English by cards, with authorization ,' +
					'and able to add edit and delete categories(admin)',
				stack: ['JS', 'TypeScript', 'Node.js(server)', 'webSockets', 'webPack', 'MongoDB', 'express']
			},
			{
				site :sites.match,
				link: '',
				gitLink: 'https://github.com/poli-vorobeva/mgREF',
				descr: 'It\'s regular Match game',
				stack: ['JS', 'TypeScript']
			},
			{
				site: sites.christmas,
				link: '',
				gitLink: '',
				descr: 'App on canvas, you need to decorate the Christmas tree',
				stack: ['JS', 'TypeScript', 'webPack']
			},
			{
				site: sites.redAlert,
				link: '',
				gitLink: '',
				descr: 'it\'s a group project. Red Alert on canvas, with able to play with bot or multiplayer',
				stack: ['JS', 'TypeScript', 'Node.js(server)', 'webSockets']
			},
			{
				site: sites.zoo,
				link: 'https://chimerical-kelpie-74b07a.netlify.app/',
				gitLink: '',
				descr: 'Landing Page React(TypeScript)',
				stack: ['React']
			},
			{
				site: sites.planner,
				link: '',
				gitLink: 'https://github.com/poli-vorobeva/old12weeks',
				descr: 'App with React/Redux',
				stack: ['React']
			},
			{
				site: sites.question,
				link: '',
				gitLink: 'https://github.com/poli-vorobeva/questionnaire',
				descr: 'App for creating questionnaire',
				stack: ['React']
			},
			{
				site: sites.netflx,
				link: 'https://github.com/poli-vorobeva/netflx',
				gitLink: '',
				descr: 'Netflix copy site with Next . (in process)',
				stack: ['NextJS']
			}
		]
		this.aboutMeContent = `в веб разработке нравится наличие объективности,детерменированность ошибок  и как 
		следствие четкое понимание того как их исправлять.
Также нравится рефакторинг, когда из первоначального хаоса получается четко структурированный и читаемый код. 
Прошлый опыт на управленческих должностях,помог мне научиться многозадачности и развил много других полезных умений `
		const titleSection = new Control(this.node, 'div',styles.cvTitleSection )
		const title=new Control(titleSection.node,'div',styles.cvTitle,'Frontend Javascript developer')
		const name = new Control(titleSection.node, 'h1', '', 'Полина Воробьева')
		const projects = new ProjectsSection(this.node, {
			title: 'Проекты', arrayOfData: this.projectsSection,linksData: sitesGitHubLinks
		});
		const aboutSection = new TextSection(this.node, 'Обо мне', this.aboutMeContent, true)
	}
}