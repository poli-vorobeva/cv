import {App} from "./app";

const mainElement=document.body
function preloadImg():Promise<HTMLImageElement>{
	return new Promise((res) => {
		const img = new Image()
		img.onload = () => {
			return res(img)
		}
		img.src = "./public/assets/image/avatar.png"
	})
}
preloadImg().then(d=>{
	const app=new App(mainElement,d)
})


