export class IndexModel {

	constructor(){

		this.user_email = '';
		this.user_email_submitted = false;

	}

	index_model_get_user_email = () => {
		return this.user_email
	}

	index_model_get_user_email_submitted = () => {
		return this.user_email_submitted
	}

	submit_index_main_section1_div3_span1_input1_email = (email) => {

		this.user_email = email;

		const updatedEmail = this.index_model_get_user_email();

		this.user_email_submitted = true;

		// fetch()
		// .then((res)=>{
		// 	return res.json();
		// })
		// .then((res)=>{
		// 	this.user_email_submitted = true;
		// })
		// .catch((err)=>{
		// 	console.log(err)
		// 	this.user_email_submitted = false;
		// })
	}

}