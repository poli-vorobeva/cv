(()=>{"use strict";var t,e,o={321:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});const n={sectionUl:"MuXK5I0FuFPjJUv2yEUP",sectionSubTitle:"ILHBD_cp27kWbzPgprnr",sectionEducationUl:"UVUo7utPOSPP4dp6enzZ",siteTitle:"dPxZrcnv8CiwQyo_fKXN",sectionLi:"q44UxCPjdDFOGNRqMKO5",projectTitle:"qbh_USsmY7COE8aIhghK",descriptionListElement:"daiBgbbFgRROgI1YX2B1",skillsUl:"kSXkVtRj0MFGxjQRGaOk",sectionP:"RPI_qjZl_wVhTdClSTC_",sectionTitle:"DJEyoEIe78Fs9fuwXCwn",sectionSiteContent:"hVvCchVddJjB5yX4tvst",afterElementAnimate:"HbKDAcC_HuI1ql73_mLc",inlineStyle:"f0keqqYBYfyExA10lChB"}},176:(t,e,o)=>{o.r(e),o.d(e,{default:()=>n});const n={cvTitleSection:"f93NzLEOdrf6sy7pzM9e",content:"_c2kbv2oRpIUQ_PsdEhA",contentWrapper:"XMQ9ZjbGy3zwdJCTcbiq",largeSection:"g_UOAccxlVN3nhUTxCWa",smallSection:"TpUwJphjm58Y7Y1d9jsA",photo:"LhWiEGpYV9rELyRceJNs",cvTitle:"RmeBRDN8oM2IMg5tAmvM",canvas:"IklUDQHLWj3Ed8VhWZT2",sitesList:"Q3pmkZPSU6c1lvH7gurs",projectsSection:"jKftbBUmlDyMVUAnbL1q",sectionTitle:"BfwgS3ayqbr0XTW7mOqw",aside:"xpWAEQaXXPyL74velQdg",name:"mz2wAtku0OHMPKFG5NTX"}},750:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,o,n){void 0===e&&(e="div"),void 0===o&&(o=""),void 0===n&&(n="");var i=document.createElement(e);i.className=o,i.textContent=n,t&&t.append(i),this.node=i}return t.prototype.setCanvasBackground=function(t){throw new Error("Method not implemented.")},t.prototype.destroy=function(){this.node.remove()},t}();e.default=o},879:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,o){this.canvasContext=o,this.radius=200*Math.random(),this.life=!0,this.y=100*Math.random()-this.radius,this.x=Math.random()*window.innerWidth,this.vx=2e-4*Math.random()+1e-4,this.vr=0,this.vy=Math.random()+e/10,this.color=t}return t.prototype.update=function(){this.vy+=5e-4,this.vr+=.005,this.y+=this.vy,this.x+=this.vx/1.5,this.radius>1&&(this.radius-=this.vr/8),this.radius<=1&&(this.life=!1)},t.prototype.draw=function(){this.canvasContext.beginPath(),this.canvasContext.arc(this.x,this.y,this.radius,0,2*Math.PI),this.canvasContext.fillStyle=this.color,this.canvasContext.fill()},t}();e.default=o},390:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=o(750),s=o(879),a=o(176),c=function(t){function e(e){var o=t.call(this,e,"canvas",a.default.canvas)||this;o.animateBind=o.animate.bind(o),o.ctx=o.node.getContext("2d"),o.node.width=window.innerWidth,o.node.height=window.innerHeight;var n=new r.default(e,"canvas",a.default.canvas);return o.ctxbg=n.node.getContext("2d"),n.node.width=window.innerWidth,n.node.height=window.innerHeight,o.bubbles=[],o.bgBubbles=[],window.onload=function(){return o.animateBind()},window.onresize=function(){o.node.width=window.innerWidth,o.node.height=window.innerHeight,n.node.width=window.innerWidth,n.node.height=window.innerHeight,o.bubbles=[],o.bgBubbles=[]},o}return i(e,t),e.prototype.addBubble=function(){this.bubbles.push(new s.default("rgb(40,187,187)",1.7,this.ctx))},e.prototype.addbgBubble=function(){this.bgBubbles.push(new s.default("rgb(31,31,132)",2,this.ctxbg))},e.prototype.handleBubbles=function(){for(var t=this.bubbles.length-1;t>=0;t--)this.bubbles[t].update(),this.bubbles[t].life||this.bubbles.splice(t,1);for(t=this.bgBubbles.length-1;t>=0;t--)this.bgBubbles[t].update(),this.bgBubbles[t].life||this.bgBubbles.splice(t,1);this.bubbles.length<window.innerWidth/3&&this.addBubble(),this.bgBubbles.length<window.innerWidth&&this.addbgBubble()},e.prototype.animate=function(){this.ctx.clearRect(0,0,this.node.width,this.node.height),this.ctxbg.clearRect(0,0,this.node.width,this.node.height),this.handleBubbles();for(var t=this.bgBubbles.length-1;t>=0;t--)this.bgBubbles[t].draw();for(t=this.bubbles.length-1;t>=0;t--)this.bubbles[t].draw();requestAnimationFrame(this.animateBind)},e}(r.default);e.default=c},516:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.LeftSection=void 0;var r=o(750),s=o(4),a=o(176),c=function(t){function e(e){var o=t.call(this,e,"div",a.default.smallSection)||this;return new r.default(o.node,"div",a.default.photo).node.style.backgroundImage='url("./public/assets/image/avatar.png")',new s.Section(o.node,{title:"Contacts",arrayOfData:[]}),new s.Section(o.node,{title:"Skills",arrayOfData:["JS/TS","React","HTML","CSS","NodeJS","Vue"],styles:"skills"}),new s.Section(o.node,{title:"Education",arrayOfData:["Rolling Scope School- JavaScript(2021)","Psychologist(2018)-Bachelor's degree"],styles:"education"}),new s.Section(o.node,{title:"Technologies",arrayOfData:["MongoDB","Express","Git","RESTApi","Webpack"],styles:"techs"}),new s.TextSection(o.node,"Hobbies","Люблю почитать интересные книги, рисование, походы и природу.\n\t\t\tПри случае могу поиграть в футбол и покер."),new r.default(o.node,"div","","English( A2)"),o}return i(e,t),e}(r.default);e.LeftSection=c},475:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.RightSection=e.sites=void 0;var r=o(750),s=o(4),a=o(176),c={artQuiz:"https://github.com/poli-vorobeva/artQuizREF.git",fool:"https://github.com/poli-vorobeva/durak.git",englishFK:"https://github.com/poli-vorobeva/efkREF.git",match:"https://github.com/poli-vorobeva/mgREF.git",christmas:"https://github.com/poli-vorobeva/christmas.git",zoo:"https://github.com/poli-vorobeva/zooREF.git",planner:"https://github.com/poli-vorobeva/moonApp.git",plannerOld:"https://github.com/poli-vorobeva/old12weeks.git",question:"https://github.com/poli-vorobeva/questionnaire.git",netflx:"https://github.com/poli-vorobeva/netflx.git",momentum:"https://github.com/poli-vorobeva/momentum.git",excelVue:"https://github.com/poli-vorobeva/vueExel.git",vueProject:"https://github.com/poli-vorobeva/vueStepper.git",nextApp:"https://github.com/poli-vorobeva/reactNextApp.git",vueTodo:"https://github.com/poli-vorobeva/vueProj.git",englishServer:"https://github.com/poli-vorobeva/copyserver.git",vuexApp:"https://github.com/poli-vorobeva/vuexApp.git"};e.sites={redAlert:"Red Alert",artQuiz:"Art Quiz",fool:"Card Game (Fool)",englishFK:"English For Kids",match:"Match Match Game",christmas:"Christmas Toys",zoo:"OnlineZoo",planner:"Planner for 12 weeks",plannerOld:"Planner for 12 weeks",question:"Questionnaire",netflx:"Netflix",momentum:"Momentum",excelVue:"Vue Excel",vueProject:"Vue Project",nextApp:"Next App",vueTodo:"Vue todo",vuexApp:"Vuex App"};var l=function(t){function o(o){var n=t.call(this,o,"div",a.default.largeSection)||this;n.projectsSection=[{site:e.sites.artQuiz,link:"",gitLink:"https://github.com/poli-vorobeva/artQuizREF",descr:"App with multi player and single player mode",stack:["JS","TypeScript","Node.js(server)","webSockets"]},{site:e.sites.fool,link:"",gitLink:"https://github.com/poli-vorobeva/durak",descr:'Group project of popular card game "Fool" with multiplayer mode and able to play with bot',stack:["JS","TypeScript","Node.js(server)","webSockets"]},{site:e.sites.englishFK,link:"",gitLink:"https://github.com/poli-vorobeva/efkREF",descr:"App with learning English by cards, with authorization ,and able to add edit and delete categories(admin)",stack:["JS","TypeScript","Node.js(server)","webSockets","webPack","MongoDB","express"]},{site:e.sites.match,link:"",gitLink:"https://github.com/poli-vorobeva/mgREF",descr:"It's regular Match game",stack:["JS","TypeScript"]},{site:e.sites.christmas,link:"",gitLink:"",descr:"App on canvas, you need to decorate the Christmas tree",stack:["JS","TypeScript","webPack"]},{site:e.sites.redAlert,link:"",gitLink:"",descr:"it's a group project. Red Alert on canvas, with able to play with bot or multiplayer",stack:["JS","TypeScript","Node.js(server)","webSockets"]},{site:e.sites.zoo,link:"https://chimerical-kelpie-74b07a.netlify.app/",gitLink:"",descr:"Landing Page React(TypeScript)",stack:["React"]},{site:e.sites.planner,link:"",gitLink:"https://github.com/poli-vorobeva/old12weeks",descr:"App with React/Redux",stack:["React"]},{site:e.sites.question,link:"",gitLink:"https://github.com/poli-vorobeva/questionnaire",descr:"App for creating questionnaire",stack:["React"]},{site:e.sites.netflx,link:"https://github.com/poli-vorobeva/netflx",gitLink:"",descr:"Netflix copy site with Next . (in process)",stack:["NextJS"]}],n.aboutMeContent="в веб разработке нравится наличие объективности,детерменированность ошибок  и как \n\t\tследствие четкое понимание того как их исправлять.\nТакже нравится рефакторинг, когда из первоначального хаоса получается четко структурированный и читаемый код. \nПрошлый опыт на управленческих должностях,помог мне научиться многозадачности и развил много других полезных умений ";var i=new r.default(n.node,"div",a.default.cvTitleSection);return new r.default(i.node,"div",a.default.cvTitle,"Frontend Javascript developer"),new r.default(i.node,"h1","","Polina Vorobeva"),new s.ProjectsSection(n.node,{title:"Проекты",arrayOfData:n.projectsSection,linksData:c}),new s.TextSection(n.node,"about me",n.aboutMeContent,!0),n}return i(o,t),o}(r.default);e.RightSection=l},4:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ProjectsSection=e.Section=e.TextSection=void 0;var r=o(750),s=o(321),a=function(t){function e(e,o,n,i){var a=t.call(this,e)||this;return new r.default(a.node,"h3",s.default.sectionTitle,o),i?n.split(".").forEach((function(t){new r.default(a.node,"p",s.default.sectionP,t)})):new r.default(a.node,"p",s.default.sectionP,n),a}return i(e,t),e}(r.default);e.TextSection=a;var c=function(t){function e(e,o){var n=t.call(this,e,"div",s.default.sectionSt)||this,i=(new r.default(n.node,"h3",s.default.sectionTitle,o.title),new r.default(n.node,"ul","education"!==o.styles?s.default.sectionUl:s.default.sectionEducationUl));return"skills"!==o.styles&&"techs"!==o.styles||(i.node.style.display="flex",i.node.style.flexFlow="wrap"),o.arrayOfData.forEach((function(t,e){new r.default(i.node,"li",s.default.sectiinLi,n.drawContent(o,e,t))})),n}return i(e,t),e.prototype.drawContent=function(t,e,o){return t.styles&&("skills"===t.styles||"techs"===t.styles&&e<t.arrayOfData.length-1)?o+"/":o},e}(r.default);e.Section=c;var l=function(t){function e(e,o){var n=t.call(this,e,"div",s.default.sectionSt)||this;return n.projects=[{description:"Участвую в комадной разработке игры Red Alert, занималась трассировкой,\n\t\tперемещением юнитов по полю. Также принимала участие в оптимизации, разработке клиет-серверного взаимодействия",sites:[]},{description:"Освоила работу  web socket",sites:["redAlert","artQuiz","fool"]},{description:"Разобралась с реализацией бота",sites:["redAlert","fool"]},{description:"Работала с базой данных mongoDB",sites:["englishFK","question"]},{description:"Писала на React",sites:["question","zoo","plannerOld"]},{description:"Освоила основы TypeScript",sites:["artQuiz","redAlert","planner","fool","englishFK","christmas","match"]},{description:"Ознакомилась с работой NextJS",sites:["netflx","nextApp"]},{description:"Разобралась с основами Vue3, Composition Api, Vuex",sites:["vueProject","excelVue","vueTodo","vuexApp"]},{description:"Работала с Canvas",sites:["redAlert","christmas"]},{description:"Работала с audioApi, запись, сохранение, воспроизведение аудио заметок",sites:["momentum"]},{description:"Научилась контактировать с Nodejs",sites:[]},{description:"Оценила удобство git",sites:[]}],n.sitesLinks=o.linksData,new r.default(n.node,"h3",s.default.sectionTitle,o.title),n.projects.forEach((function(t){n.projectElement(t)})),n}return i(e,t),e.prototype.projectElement=function(t){var e=this,o=new r.default(this.node,"div",s.default.descriptionListElement),n=(new r.default(o.node,"span","",t.description),new r.default(o.node,"span"));t.sites.forEach((function(o,i){e.projectCell(n.node,o,i,t.sites.length,e.sitesLinks[o])}))},e.prototype.projectCell=function(t,e,o,n,i){console.log(i,e);var a=new r.default(t,"span"),c=(new r.default(a.node,"span",s.default.sectionSiteContent,this.defineContent(e,o,n)),new r.default(a.node,"a"));c.node.setAttribute("href",i),c.node.setAttribute("target","blank"),new r.default(c.node,"img").node.setAttribute("src","./public/assets/image/githubIcon.svg")},e.prototype.defineContent=function(t,e,o){return 1==o?" - ".concat(t," "):0==e?" - ".concat(t):e===o-1?", ".concat(t," "):", ".concat(t)},e}(r.default);e.ProjectsSection=l},752:function(t,e,o){var n,i=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var r=o(750),s=o(390),a=o(176),c=o(516),l=o(475),u=function(t){function e(e){var o=t.call(this,e,"div",a.default.content)||this,n=(new s.default(o.node),new r.default(o.node,"div",a.default.contentWrapper));return new c.LeftSection(n.node),new l.RightSection(n.node),o}return i(e,t),e}(r.default);e.App=u}},n={};function i(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={exports:{}};return o[t].call(r.exports,r,r.exports,i),r.exports}i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=i(752),e=document.body,window.onload=function(){new t.App(e)}})();
//# sourceMappingURL=main.js.map