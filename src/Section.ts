import Control from "../controll";
import sectionStyles from './sectionStyles.css';
import {projectData} from "./app";
import {sites} from "./RightSection";

type datatype = {
	title: string,
	arrayOfData: string[],
	styles?: string
}
type sitesData = {}

interface IProjects {
	description: string,
	sites: string[]
}

export class TextSection extends Control {
	constructor(parentNode: HTMLElement, title: string, content: string, isSplit?: boolean) {
		super(parentNode);
		new Control(this.node, 'h3',
			sectionStyles.sectionTitle, title)
		if (isSplit) {
			content.split('.').forEach(el => {
				new Control(this.node, 'p', sectionStyles.sectionP, el)
			})
		} else {
			new Control(this.node, 'p', sectionStyles.sectionP, content)
		}
	}
}

export class Section extends Control {
	constructor(parentNode: HTMLElement, data: datatype) {
		super(parentNode, 'div', sectionStyles.sectionSt);
		const title = new Control(this.node, 'h3',
			sectionStyles.sectionTitle, data.title)
		const skillsUl = new Control(this.node, 'ul', data.styles !== 'education'
			? sectionStyles.sectionUl
			: sectionStyles.sectionEducationUl)
		if (data.styles === 'skills' || data.styles === 'techs') {
			skillsUl.node.style.display = 'flex'
			skillsUl.node.style.flexFlow = 'wrap'
		}
		data.arrayOfData.forEach((sk, ind) => {
			const listItem = new Control(skillsUl.node, 'li',
				sectionStyles.sectiinLi, this.drawContent(data, ind, sk)
			)

		})

	}

	drawContent(data: datatype, ind: number, sk: string) {
		if (data.styles) {
			return data.styles === 'skills' || data.styles === 'techs' && ind < data.arrayOfData.length - 1
				? sk + `/`
				: sk
		} else {
			return sk
		}
	}
}

export class ProjectsSection extends Control {
	private sitesLinks: Record<string, string>;
	private projects: IProjects [];

	constructor(parentNode: HTMLElement,
							data: {
								linksData: Record<string, string>;
								title: string;
								arrayOfData: projectData[]
							}
	) {
		super(parentNode, 'div', sectionStyles.sectionSt);
		this.projects = [
			{
				description: `Участвую в комадной разработке игры Red Alert, занималась трассировкой,
		перемещением юнитов по полю. Также принимала участие в оптимизации, разработке клиет-серверного взаимодействия`,
				sites: [/*sites.redAlert*/]
			},
			{
				description: `Освоила работу  web socket`,
				sites: ['redAlert', 'artQuiz', 'fool']
			},
			{
				description: `Разобралась с реализацией бота`,
				sites: ["redAlert", "fool"]
			},
			{
				description: 'Работала с базой данных mongoDB',
				sites: ["englishFK", "question"]
			},
			{description: 'Писала на React', sites: ["question", "zoo", "plannerOld"]},
			{
				description: 'Освоила основы TypeScript', sites: ['artQuiz', 'redAlert', 'planner',
					'fool', 'englishFK', 'christmas', 'match']
			},
			{description: 'Ознакомилась с работой NextJS', sites: ['netflx', 'nextApp']},
			//todo to add netflsx proj vue landings- zoo museum
			{
				description: 'Разобралась с основами Vue3, Composition Api, Vuex', sites: [
					'vueProject', 'excelVue', 'vueTodo', 'vuexApp']
			},
			{
				description: 'Работала с Canvas', sites: ['redAlert', 'christmas']
				//webGL,christmas,redAlert,momentum
			},
			{
				description: 'Работала с audioApi, запись, сохранение, воспроизведение аудио заметок',
				sites: ['momentum']
			},
			{
				description: 'Научилась контактировать с Nodejs',
				sites: []
			},
			{
				description: 'Оценила удобство git',
				sites: []
			},
		]
		this.sitesLinks = data.linksData
		const title = new Control(this.node, 'h3', sectionStyles.sectionTitle, data.title)
		this.projects.forEach(proj => {
			this.projectElement(proj)
		})
	}

	projectElement(proj: IProjects) {
		const wrap = new Control(this.node, 'div', sectionStyles.descriptionListElement)
		const title = new Control(wrap.node, 'span', '', proj.description)
		const projectsWrapper = new Control(wrap.node, 'span')
		proj.sites.forEach((s, i) => {
			this.projectCell(projectsWrapper.node, s, i, proj.sites.length, this.sitesLinks[s])
		})
	}

	projectCell(parent: HTMLElement, s: string, i: number, length: number, linkUrl: string) {
		console.log(linkUrl, s)
		const el = new Control(parent, 'span')
		const e = new Control(el.node, 'span', sectionStyles.sectionSiteContent,
			this.defineContent(s, i, length))
		const link = new Control(el.node, 'a')
		link.node.setAttribute('href', linkUrl)
		link.node.setAttribute('target', 'blank')
		const siteLink = new Control(link.node, 'img')
		siteLink.node.setAttribute('src', './public/assets/image/githubIcon.svg')

	}

	defineContent(s: string, i: number, totalLeng: number): string {
		return totalLeng == 1
			? ` - ${s} `
			: i == 0
				? ` - ${s}`
				: i === totalLeng - 1
					? `, ${s} `
					: `, ${s}`
	}
}

export class ContactsSection extends Control {
	constructor(parent: HTMLElement) {
		super(parent);
		const titleT = 'Контакты'
		const data = {
			'github': 'poli-vorobeva',
			'phone': '+7 978 059 51 60',
			'telegram': '+79111283475',
			'whatsapp': '+79111283475',
			'email': 'poli8512@gmail.com'
		}
		const title = new Control(this.node, 'h3', sectionStyles.sectionTitle, titleT)
		const ul = new Control(this.node, 'ul', sectionStyles.sectionUl)
		Object.entries(data).forEach(contact => {
			const li = new Control(ul.node, 'li',sectionStyles.sectionSiteContent)
			const img = new Control(li.node, 'img')
			img.node.style.height='15px'
			img.node.style.marginRight='5px'
			img.node.setAttribute('src',`./public/assets/image/socialIcons/${contact[0]}.png`)
			if(contact[0]!=='github') new Control(li.node, 'span','', contact[1])
			else{
				const a=new Control(li.node, 'a')
				a.node.setAttribute('href','https://github.com/poli-vorobeva')
				new Control(a.node, 'span','', contact[1])
			}
		})
	}
}