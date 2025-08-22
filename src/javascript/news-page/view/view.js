export class NewsView {

	constructor(){

		// init news_main_section1_nav1_ul_li_hover function 
		this.news_main_section1_nav1_ul_li_hover();

		// array of news articles 
		this.articles = [];
	}

	creating_and_render_news_articles = (newsArticles) => {
		// loopingthrough each news article
		newsArticles.forEach((articles)=>{

			// creating news-main-section1-section1 elements
			const article = document.createElement("article");
			const div1 = document.createElement("div");
			const div2 =document.createElement("div");
			const div3 = document.createElement("div");
			const div4 = document.createElement("div");
			const span1 = document.createElement("span");
			const span2 = document.createElement("span");
			const h3 = document.createElement("h3");
			const h4 = document.createElement("h4");
			const h5 = document.createElement("h5");
			const img = document.createElement("img");
			const p = document.createElement("p");

			// appending elements into the correct elements within the dom
			const section = 
			document.getElementById("news-main-section1-section1");

			section.appendChild(article);

			article.append(div1,div2);

			div1.append(span1,span2);
			span1.appendChild(h4);
			span2.appendChild(h3);

			div2.append(div3,div4);
			div3.append(img,h5);
			div4.appendChild(p);

			// adding relevant attributes to elements
			article.classList.add("news-main-section1-section1-article");

			div1.classList.add("news-main-section1-section1-article-div1");
			span1.classList.add("news-main-section1-section1-article-div1-span");
			span1.id = "news-main-section1-section1-article-div1-span1";
			h4.classList.add("news-main-section1-section1-article-div1-span1-h4");
			span2.classList.add("news-main-section1-section1-article-div1-span");
			span2.id = "news-main-section1-section1-article-div1-span2";
			h3.classList.add("news-main-section1-section1-article-div1-span1-h3");

			div2.classList.add("news-main-section1-section1-article-div2");
			div3.classList.add("news-main-section1-section1-article-div2-div1");
			img.classList.add("news-main-section1-section1-article-div2-div1-img");
			h5.classList.add("news-main-section1-section1-article-div2-div1-h5");
			div4.classList.add("news-main-section1-section1-article-div2-div2");
			p.classList.add("news-main-section1-section1-article-div2-div2-p");

			// adding text content to relevent elements 
			h4.textContent = `Date Published: ${articles.event_date_published}`
			h3.textContent = articles.event_news_headline
			h5.textContent = `Category: ${articles.event_category}`
			h4.textContent = `Date Published: ${articles.event_date_published}`
			p.textContent = articles.event_text

			img.src = "#"

			this.articles = [...this.articles, article];
		
		})
		console.log(this.articles)
	}

	news_main_section1_nav1_ul_li_hover = () => {

		// caching news_main_section1_nav1_ul_li elements
		const li = 
		Array.from(
			document.getElementsByClassName("news-main-section1-nav1-ul-li")
		);

		// looping and adding event listener for 
		//news_main_section1_nav1_ul_li elements
		li.forEach((navLink)=>{

			navLink.addEventListener("mouseenter", ()=>{
				if(navLink.id === "news-main-section1-nav1-ul-li1"){

					// display news-main-section1-nav1-ul-li-ul-li elements
					const ul = document.getElementById("news-main-section1-nav1-ul-li-ul1");
					ul.style.display = "block";

					//hide news-main-section1-nav1-ul-li-ul-li elements
					navLink.addEventListener("mouseleave", ()=>{
						ul.style.display = "none";
					})

					// cache news-main-section1-nav1-ul-li-ul-li elemets
					const li1 =
					Array.from(
						document.getElementsByClassName("news-main-section1-nav1-ul-li-ul-li1")
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
				else if (navLink.id === "news-main-section1-nav1-ul-li2") {

					// display news-main-section1-nav1-ul-li-ul-li elements
					const ul = document.getElementById("news-main-section1-nav1-ul-li-ul2");
					ul.style.display = "block";

					//hide news-main-section1-nav1-ul-li-ul-li elements
					navLink.addEventListener("mouseleave", ()=>{
						ul.style.display = "none";
					})

					// cache news-main-section1-nav1-ul-li-ul-li elemets
					const li1 =
					Array.from(
						document.getElementsByClassName("news-main-section1-nav1-ul-li-ul-li2")
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

