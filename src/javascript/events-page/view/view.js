export class EventsView {

	constructor(){

		// init events_main_section1_nav1_ul1_li_hover()
		this.events_main_section1_nav1_ul1_li_hover();

		// caching articles
		this.articles = [];
	}

	creating_and_render_event_articles = (eventArticles) => {
		// loopingthrough each news article
		eventArticles.forEach((articles)=>{

			// creating events-main-section1-section1-article elements
			const article = document.createElement("article");
			const div1 = document.createElement("div");
			const div2 =document.createElement("div");
			const div3 = document.createElement("div");
			const div4 = document.createElement("div");
			const span1 = document.createElement("span");
			const span2 = document.createElement("span");
			const span3 = document.createElement("span");
			const span4 = document.createElement("span");
			const h3 = document.createElement("h3");
			const h4 = document.createElement("h4");
			const p = document.createElement("p");
			const p2 = document.createElement("p");
			const div5 = document.createElement("div");

			// appending elements into the correct elements within the dom
			const section = 
			document.getElementById("events-main-section1-section1");

			section.appendChild(article);

			article.append(div1,div2);

			div1.append(span1,span2);

			div2.append(div3,div4);

			div3.append(h4,div5,p);
			div5.append(span3,h3);

			div4.append(span4,p2);

			// adding relevant attributes to elements
			article.classList.add("events-main-section1-section1-article");

			div1.classList.add("events-main-section1-section1-article-div1");
			span1.classList.add("events-main-section1-section1-article-span");
			span1.id = "events-main-section1-section1-article-span1";
			span2.classList.add("events-main-section1-section1-article-span");
			span2.id = "events-main-section1-section1-article-span2";

			div2.classList.add("events-main-section1-section1-article-div2");
			div3.classList.add("events-main-section1-section1-article-div2-div1");
			h4.classList.add("events-main-section1-section1-article-div2-div1-h4");
			div5.id = "events-main-section1-section1-article-div2-div1-div1";
			span3.classList.add("events-main-section1-section1-article-div2-div1-div1-span");
			h3.classList.add("events-main-section1-section1-article-div2-div1-div1-h3");
			p.classList.add("events-main-section1-section1-article-div2-div1--p");

			div4.classList.add("events-main-section1-section1-article-div2-div2");
			span4.classList.add("events-main-section1-section1-article-div2-div2-span");
			p2.classList.add("events-main-section1-section1-article-div2-div2-p");

			// adding text content to relevent elements 
			span1.textContent = `Event Date: ${articles.event_date_published}`;
			span2.textContent = articles.event_news_headline;
			h4.textContent = `Event Time: ${articles.event_time}`;
			span3.textContent = `Event Address:`;
			h3.textContent = articles.event_address
			p.textContent = `Event Type: ${articles.event_category}`;
			p2.textContent = articles.event_description;
			span4.textContent = "Event Description";

			this.articles = [...this.articles, article];
		})
		console.log(this.articles)
	}

	events_main_section1_nav1_ul1_li_hover = () => {

		// caching events_main_section1_nav1_ul1_li elements
		const li = 
		Array.from(
			document.getElementsByClassName("events-main-section1-nav1-ul1-li")
		);

		// looping and adding event listener for 
		//events_main_section1_nav1_ul1_li elements
		li.forEach((navLink)=>{

			navLink.addEventListener("mouseenter", ()=>{
				if(navLink.id === "events_main_section1_nav1_ul1_li2"){

					// display news-main-section1-nav1-ul-li-ul-li elements
					const ul = document.getElementById("events-main-section1-nav1-ul1-li-ul1");
					ul.style.display = "block";

					//hide news-main-section1-nav1-ul-li-ul-li elements
					navLink.addEventListener("mouseleave", ()=>{
						ul.style.display = "none";
					})

					// cache news-main-section1-nav1-ul-li-ul-li elemets
					const li1 =
					Array.from(
						document.getElementsByClassName("events-main-section1-nav1-ul1-li-ul-li")
					);

					// add mouse leave eventlistener to hide 
					// news-main-section1-nav1-ul-li-ul-li1 elements 
					ul.addEventListener("mouseleave",()=>{
						ul.style.display = "none";
					})

					li1.forEach((li)=>{
						li.addEventListener("click", ()=>{
							console.log("click")
							ul.style.display = "none";
						})
					})

				}
				else if (navLink.id === "events_main_section1_nav1_ul1_li3") {

					// display news-main-section1-nav1-ul-li-ul-li elements
					const ul = document.getElementById("events-main-section1-nav1-ul1-li-ul2");
					ul.style.display = "block";

					//hide news-main-section1-nav1-ul-li-ul-li elements
					navLink.addEventListener("mouseleave", ()=>{
						ul.style.display = "none";
					})

					// cache news-main-section1-nav1-ul-li-ul-li elemets
					const li1 =
					Array.from(
						document.getElementsByClassName("events-main-section1-nav1-ul1-li-ul-li")
					);

					// add mouse leave eventlistener to hide 
					// news-main-section1-nav1-ul-li-ul-li1 elements 
					ul.addEventListener("mouseleave",()=>{
						ul.style.display = "none";
					})		

					li1.forEach((li)=>{
						li.addEventListener("click", ()=>{
							console.log("click")
							ul.style.display = "none";
						})
					})
				}
			})
		})
	}
};