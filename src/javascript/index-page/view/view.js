export class IndexView {
	constructor(){

		// caching elements that will be used within multiple view functions 

		// caching elements for index_main_article
		this.index_main_article1_div1_span=
		Array.from(document.getElementsByClassName("index-main-article1-div1-span"));

		this.index_main_article1_div2=
		document.getElementById("index-main-article1-div2");

		this.index_main_article1_div3=
		document.getElementById("index-main-article1-div3");

		this.index_main_article1_div4=
		document.getElementById("index-main-article1-div4");

		this.index_main_article1_div5_span=
		Array.from(document.getElementsByClassName("index-main-article1-div5-span"));

		// caching elements for index_main_section1
		this.index_main_section1_nav1_span1=
		Array.from(document.getElementsByClassName("index-main-section1-nav1-span1"));

		this.index_main_section1_div1=
		document.getElementById("index-main-section1-div1");

		this.index_main_section1_div2=
		document.getElementById("index-main-section1-div2");

		this.index_main_section1_div3=
		document.getElementById("index-main-section1-div3");

		// caching variables for index_main_article1 & section1 setinterval timers
		this.index_main_article_set_timeout = null
		this.index_main_section1_set_timeout = null

		// init function for view functions that dont require state
		this.init = () => {
		  	this.index_main_article1_slideshow();
		  	this.index_main_section1_slideshow();
		  	this.event_listeners_for_index_main_section1_and_article1_slideshow();
		  	this.index_main_section1_div3_span1_input1_submit_input();
		}
	}

	// function for index_main_article1_slideshow
	index_main_article1_slideshow = () => {

		  // default number for slideshow to start on 
		  let number = 1;

		  // set interval function for slideshow (6 seconds)
		  this.index_main_article_set_timeout = setInterval(() => {
		  	console.log(`index-main-article1 slidwshow working`)
		    // Remove current selected classes from navbars
		    this.index_main_article1_div1_span.forEach((span,index) =>{
				
				span.classList.remove("index-main-article1-div1-span-selected");
		    });

		    this.index_main_article1_div5_span.forEach((span,index) => {

		    	span.classList.remove("index-main-article1-div5-span-selected");
			});

		    // Hide all article divs
		    this.index_main_article1_div2.style.display = 'none';
		    this.index_main_article1_div3.style.display = 'none';
		    this.index_main_article1_div4.style.display = 'none';

		    // Add selected class to correct navbars
		    this.index_main_article1_div1_span[number].classList.add("index-main-article1-div1-span-selected");
		    this.index_main_article1_div5_span[number].classList.add("index-main-article1-div5-span-selected");

		    // conditional statement to render correct article based of default number
		    switch (number) {
		      case 0:
		        this.index_main_article1_div2.style.display = 'block';
		        break;
		      case 1:
		        this.index_main_article1_div3.style.display = 'flex';
		        break;
		      case 2:
		        this.index_main_article1_div4.style.display = 'flex';
		        break;
		    }

		    // loop through 3 default numbers 
		    number = (number + 1) % 3;

		}, 14000);
	};

	// function for index_main_section1_slideshow
	index_main_section1_slideshow = () => {

		  // default number for slideshow to start on 
		  let number = 1;

		  // set interval function for slideshow (8 seconds)
		  this.index_main_section1_set_timeout = setInterval(() => {
		  	console.log(`index-main-section1 slidwshow working`)
		    // Remove current selected classes from navbar
		    this.index_main_section1_nav1_span1.forEach((span,index) =>{
				
				span.classList.remove("index-main-section1-nav1-span1-selected");
		    });

		    // Hide all article divs
		    this.index_main_section1_div1.style.display = 'none';
		    this.index_main_section1_div2.style.display = 'none';
		    this.index_main_section1_div3.style.display = 'none';

		    // Add selected class to correct navbars
		    this.index_main_section1_nav1_span1[number].classList.add("index-main-section1-nav1-span1-selected");

		    // conditional statement to render correct article based of default number
		    switch (number) {
		      case 0:
		        this.index_main_section1_div1.style.display = 'block';
		        break;
		      case 1:
		        this.index_main_section1_div2.style.display = 'block';
		        break;
		      case 2:
		        this.index_main_section1_div3.style.display = 'block';
		        break;
		    }

		    // loop through 3 default numbers 
		    number = (number + 1) % 3;

		},12000);
	};

	// function to add eventlisteners for index_main_section1 & article1
	// to click selected articles and cancel slideshow
	event_listeners_for_index_main_section1_and_article1_slideshow = () => {

		// event listeners for index_main_article navbar
		this.index_main_article1_div1_span.forEach((span)=>{

			span.addEventListener("click",()=>{

				this.index_main_article1_div1_span.forEach((span)=>{
			     	span.classList.remove("index-main-article1-div1-span-selected");
			    })

		      	this.index_main_article1_div5_span.forEach((span)=>{
		      		span.classList.remove("index-main-article1-div5-span-selected");
		      	})

		      	this.index_main_article1_div2.style.display = 'none';
		    	this.index_main_article1_div3.style.display = 'none';
		    	this.index_main_article1_div4.style.display = 'none';

		    	clearInterval(this.index_main_article_set_timeout);

			    switch (span.id) {
			      case "index-main-article1-div1-span1":

			      	span.classList.add("index-main-article1-div1-span-selected");

			      	this.index_main_article1_div2.style.display = 'block'

			      	this.index_main_article1_div5_span.forEach((span)=>{
			      		if(span.id === "index-main-article1-div5-span1"){
			      			span.classList.add("index-main-article1-div5-span-selected");
			      		}
		      		})
			        break;
			      case "index-main-article1-div1-span2":

			      	span.classList.add("index-main-article1-div1-span-selected");

			      	this.index_main_article1_div3.style.display = 'flex'

			      	this.index_main_article1_div5_span.forEach((span)=>{
			      		if(span.id === "index-main-article1-div5-span2"){
			      			span.classList.add("index-main-article1-div5-span-selected");
			      		}
		      		})
			        break;
			      case "index-main-article1-div1-span3":

			      	span.classList.add("index-main-article1-div1-span-selected");

			      	this.index_main_article1_div4.style.display = 'flex'

			      	this.index_main_article1_div5_span.forEach((span)=>{
			      		if(span.id === "index-main-article1-div5-span3"){
			      			span.classList.add("index-main-article1-div5-span-selected");
			      		}
		      		})
			        break;
			    }
			})
		})

		// event listeners for index_main_article footer
		this.index_main_article1_div5_span.forEach((span)=>{
      		
      		span.addEventListener("click", ()=>{

				this.index_main_article1_div1_span.forEach((span)=>{
			     	span.classList.remove("index-main-article1-div1-span-selected");
			    })

		      	this.index_main_article1_div5_span.forEach((span)=>{
		      		span.classList.remove("index-main-article1-div5-span-selected");
		      	})

		      	this.index_main_article1_div2.style.display = 'none';
		    	this.index_main_article1_div3.style.display = 'none';
		    	this.index_main_article1_div4.style.display = 'none';

		    	clearInterval(this.index_main_article_set_timeout);

			    switch (span.id) {
			      case "index-main-article1-div5-span1":

			      	span.classList.add("index-main-article1-div5-span-selected");

			      	this.index_main_article1_div2.style.display = 'block'

			      	this.index_main_article1_div1_span.forEach((span)=>{
			      		if(span.id === "index-main-article1-div1-span1"){
			      			span.classList.add("index-main-article1-div1-span-selected");
			      		}
		      		})
			        break;
 				  case "index-main-article1-div5-span2":

			      	span.classList.add("index-main-article1-div5-span-selected");

			      	this.index_main_article1_div3.style.display = 'flex'

			      	this.index_main_article1_div1_span.forEach((span)=>{
			      		if(span.id === "index-main-article1-div1-span2"){
			      			span.classList.add("index-main-article1-div1-span-selected");
			      		}
		      		})
			        break;
 				  case "index-main-article1-div5-span3":

			      	span.classList.add("index-main-article1-div5-span-selected");

			      	this.index_main_article1_div4.style.display = 'flex'

			      	this.index_main_article1_div1_span.forEach((span)=>{
			      		if(span.id === "index-main-article1-div1-span3"){
			      			span.classList.add("index-main-article1-div1-span-selected");
			      		}
		      		})
			        break;
			    }
      		})
      	})

		// event listeners for index_main_section1
		this.index_main_section1_nav1_span1.forEach((span)=>{

			span.addEventListener("click",()=>{

				this.index_main_section1_nav1_span1.forEach((span)=>{
					span.classList.remove("index-main-section1-nav1-span1-selected");
				})

				this.index_main_section1_div1.style.display = 'none';
				this.index_main_section1_div2.style.display = 'none';
				this.index_main_section1_div3.style.display = 'none';

				clearInterval(this.index_main_section1_set_timeout)

			    switch (span.id) {
			      case "index-main-section1-nav1-span1":

			      	span.classList.add("index-main-section1-nav1-span1-selected");

			      	this.index_main_section1_div1.style.display = 'block';
			        break;
			      case "index-main-section1-nav1-span2":

			      	span.classList.add("index-main-section1-nav1-span1-selected");

			      	this.index_main_section1_div2.style.display = 'block';
			        break;
			      case "index-main-section1-nav1-span3":

			      	span.classList.add("index-main-section1-nav1-span1-selected");

			      	this.index_main_section1_div3.style.display = 'flex';
			      	
			        break;
			    }
			})
		})
	}

	// function to send email input value to model 
	index_main_section1_div3_span1_input1_submit_input = (controllerFunction)=>{

		const index_main_section1_div3_span1_btn1 = 
		document.getElementById("index-main-section1-div3-span1-btn1")

		const index_main_section1_div3_span1_input1 =
		document.getElementById("index-main-section1-div3-span1-input1");

		index_main_section1_div3_span1_btn1.addEventListener("click", ()=>{

			const index_main_section1_div3_span2 = 
			document.getElementById("index-main-section1-div3-span2");

			const index_main_section1_div3_span2_h5 = 
			document.getElementById("index-main-section1-div3-span2-h5");

			const index_main_section1_div3_span2_div1 = 
			document.getElementById("index-main-section1-div3-span2-div1");

			if(
				index_main_section1_div3_span1_input1.value.length > 0 &&
				index_main_section1_div3_span1_input1.value.includes("@") &&
				index_main_section1_div3_span1_input1.value.includes(".") &&
				index_main_section1_div3_span1_input1.value.length > 5
			){
				console.log(index_main_section1_div3_span1_input1.value.trim())

				index_main_section1_div3_span2.style.display = 'block';

				index_main_section1_div3_span2_div1.style.display = 'block';

				index_main_section1_div3_span2_h5.style.display = 'none';

				const submitEmail = 
				controllerFunction(index_main_section1_div3_span1_input1.value.trim());

				console.log(submitEmail)

				if (submitEmail.email_submitted){

					console.log('submitEmail.email_submitted')

					index_main_section1_div3_span2_div1.style.display = 'none';

					index_main_section1_div3_span2_h5.style.display = 'flex';

					index_main_section1_div3_span2_h5.classList
					.add("index-main-section1-div3-span2-h5-submitted");

					index_main_section1_div3_span2_h5.textContent = 
					`Email Successfully submitted: ${submitEmail.email_name}`;

					index_main_section1_div3_span1_input1.value ='';
				}
				else{

					index_main_section1_div3_span2_div1.style.display = 'none';

					index_main_section1_div3_span2_h5.style.display = 'flex';

					index_main_section1_div3_span2_h5.classList
					.add("index-main-section1-div3-span2-h5-error");

					index_main_section1_div3_span2_h5.textContent 
					= `Error Submitting Email: ${submitEmail.email_name}`
				}
			}
			else{

				index_main_section1_div3_span2.style.display = 'block';

				index_main_section1_div3_span2_div1.style.display = "none";

				index_main_section1_div3_span2_h5.classList
				.remove("index-main-section1-div3-span2-h5-submitted");

				index_main_section1_div3_span2_h5.classList.add("index-main-section1-div3-span2-h5-error");

				index_main_section1_div3_span2_h5.textContent = "Please enter a valid Email Address"

			}
		})
	}

}
