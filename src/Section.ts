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
content.split('.').forEach(el=>{
	new Control(this.node,'p',sectionStyles.sectionP,el)
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
		//if(data.styles){
		// data.styles=='skills' && (skillsUl.node.setAttribute('class'
		// 	,sectionStyles.skillsUl))
		//}
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
	constructor(parentNode: HTMLElement, data: { title: string; arrayOfData: projectData[] }) {
		super(parentNode, 'div', sectionStyles.sectionSt);
		const projects: IProjects [] = [
			{
				description: `Участвую в комадной разработке игры Red Alert, занималась трассировкой,
		перемещением юнитов по полю. Также принимала участие в оптимизации, разработке клиет-серверного взаимодействия`,
				sites: [/*sites.redAlert*/]
			},
			{
				description: `Освоила работу  web socket`,
				sites: [sites.redAlert, sites.artQuiz, sites.fool]
			},
			{
				description: `Разобралась с реализацией бота`,
				sites: [sites.redAlert, sites.fool]
			},
			{
				description: 'Работала с базой данных mongoDB',
				sites: [sites.englishFK, sites.question]
			},
			{description: 'Писала на React', sites: [sites.question, sites.zoo, sites.plannerOld]},
			{
				description: 'Освоила основы TypeScript', sites: [sites.artQuiz, sites.redAlert, sites.planner,
					sites.fool, sites.englishFK, sites.christmas, sites.match]
			},
			{description: 'Ознакомилась с работой NextJS', sites: [sites.netflx, sites.nextApp]},
			//todo to add netflsx proj vue landings- zoo museum
			{description: 'Разобралась с основами Vue3', sites: [sites.vueProject, sites.excelVue, sites.vueTodo]},
			{
				description: 'Работала с Canvas', sites: [sites.redAlert, sites.christmas]
				//webGL,christmas,redAlert,momentum
			},
			{
				description: 'Работала с audioApi, запись, сохранение, воспроизведение аудио заметок',
				sites: ['momentum']
			}
		]
		const title = new Control(this.node, 'h3', sectionStyles.sectionTitle, data.title)
		projects.forEach(proj => {
			this.projectElement(proj)
		})
	}

	projectElement(proj: IProjects) {
		const wrap = new Control(this.node, 'div', sectionStyles.descriptionListElement)
		const title = new Control(wrap.node, 'span', '', proj.description)
		const projectsWrapper = new Control(wrap.node, 'span')
		proj.sites.forEach((s, i) => {
			this.projectCell(projectsWrapper.node, s, i, proj.sites.length)
		})
	}

	projectCell(parent: HTMLElement, s: string, i: number, length: number) {
		const el = new Control(parent, 'span')
		const e = new Control(el.node, 'span', sectionStyles.sectionSiteContent, this.defineContent(s, i, length))
		const siteLink = new Control(el.node, 'img')
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