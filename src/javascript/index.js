

const startApp = () =>{


	if(window.location.pathname === "/"){
		import("./index-page/controller/controller.js")
		.then((res)=>{
			new res.IndexController()
			console.log("index controller working")
		})
		.catch((error)=>{
			console.log(`news controller not working ${error}`)
		})
	}
	else if (
		window.location.pathname === "/news" ||
		window.location.pathname === "/news.html"
		){
		import("./news-page/controller/controller.js")
		.then((res)=>{
			new res.NewsController()
			console.log("news controller working")
		})
		.catch((error)=>{
			console.log(`news controller not working ${error}`)
		})
	}
	else if (
		window.location.pathname === "/events" ||
		window.location.pathname === "/events.html" ||
		window.location.pathname === "/abbey-road/events.html"
		){
		import("./events-page/controller/controller.js")
		.then((res)=>{
			new res.EventsController()
			console.log("events controller working")
		})
		.catch((error)=>{
			console.log(`events controller not working ${error}`)
		})
	}
	else if (
		window.location.pathname === "/contact" ||
		window.location.pathname === "/contact.html"
		){
		import("./contact-us-page/controller/controller.js")
		.then((res)=>{
			new res.ContactController()
			console.log("Contact controller working")
		})
		.catch((error)=>{
			console.log(`Contact controller not working ${error}`)
		})
	}
	else if (
		window.location.pathname === "/resident-involvement" ||
		window.location.pathname === "/resident-involvement.html"
		){
		import("./resident-involvement/controller/controller.js")
		.then((res)=>{
			new res.RIController()
			console.log("resident-involvement controller working")
		})
		.catch((error)=>{
			console.log(`resident-involvement controller not working ${error}`)
		})
	}

}

startApp()