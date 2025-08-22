
export class ContactView {

	constructor(){

		// init form values empty strings or if theyve already been 
		// cached in session storage using that value 
		this.name = window.sessionStorage.getItem("name") 
    	? document.getElementById("contact-page-form-name").value = 
    	window.sessionStorage.getItem("name")
    	: '';

		this.email = window.sessionStorage.getItem("email") 
    	? document.getElementById("contact-page-form-email").value =
    	window.sessionStorage.getItem("email")
    	: '';

		this.telephone = window.sessionStorage.getItem("telephone") 
    	? document.getElementById("contact-page-form-telephone-number").value = 
    	window.sessionStorage.getItem("telephone")
    	: '';

		this.msg = window.sessionStorage.getItem("msg") 
    	? document.getElementById("contact-page-form-msg").value = 
    	window.sessionStorage.getItem("msg").trim()
    	: ''.trim();

    	// save live input data into view construcor and session storage
		this.presave_input_data();

		// remove session storage when for resets
		this.remove_session_storage_when_form_resets()
	}

	// save live input data into view constructor and to session storage
	presave_input_data = () => {

		const name = document.getElementById("contact-page-form-name");
		const email = document.getElementById("contact-page-form-email");
		const telephone = document.getElementById("contact-page-form-telephone-number");
		const msg = document.getElementById("contact-page-form-msg");

		name.addEventListener("input", (event)=>{

			this.name = event.target.value.trim();
			window.sessionStorage.setItem("name", this.name);
		})

		email.addEventListener("input", (event)=>{

			this.email = event.target.value.trim();
			window.sessionStorage.setItem("email", this.email);
		})

		telephone.addEventListener("input", (event)=>{

			this.telephone = event.target.value.trim();
			window.sessionStorage.setItem("telephone", this.telephone);
		})

		msg.addEventListener("input", (event)=>{
			event.target.value.trim();
			this.msg = event.target.value.trim();
			window.sessionStorage.setItem("msg", this.msg);
		})
	}

	remove_session_storage_when_form_resets = () => {

		const reset_btn = 
		document.getElementById("contact-main-section1-form1-div-div2-input1");

		reset_btn.addEventListener("click", (event)=>{
			window.sessionStorage.removeItem("name");
			window.sessionStorage.removeItem("email");
			window.sessionStorage.removeItem("telephone");
			window.sessionStorage.removeItem("msg");

		})

	}

	submitForm = (modelHandlerFunction) => {

		const form = 
		document.getElementById("contact-main-section1-form1");

		console.log("click")

		form.addEventListener("submit",(event)=>{

			event.preventDefault();

			console.log(event);

			this.name = document.getElementById("contact-page-form-name").value.trim();
			this.email = document.getElementById("contact-page-form-email").value.trim();
			this.telephone = document.getElementById("contact-page-form-telephone-number").value.trim();
			this.msg = document.getElementById("contact-page-form-msg").value.trim();

			if(
				this.name.length > 0 &&
				this.email.length > 0 &&
				this.telephone.length > 0 &&
				this.msg.length > 0 
			){
				if(
					this.email.includes("@") &&
					this.email.length > 5
				){

					modelHandlerFunction({
						name: this.name,
						email: this.email,
			            telephone: this.telephone,
						msg: this.msg
					})

					document.getElementById("contact-page-form-name").value = "";
					this.name = "";
					window.sessionStorage.removeItem("name");

					document.getElementById("contact-page-form-email").value = "";
					this.email = "";
					window.sessionStorage.removeItem("email");


					document.getElementById("contact-page-form-telephone-number").value = "";
					this.telephone = "";
					window.sessionStorage.removeItem("telephone");

					document.getElementById("contact-page-form-msg").value = "";
					this.msg = ""
					window.sessionStorage.removeItem("msg");

				}
				else{
					console.log("invalid email")
				}
			}
			else{

				console.log("name,email,telephone or msg empty")
			}
		})
	}

 }