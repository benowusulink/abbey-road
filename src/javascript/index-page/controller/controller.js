import {IndexModel} from '../model/model.js';
import {IndexView} from '../view/view.js';

export class IndexController {

	constructor(){

		this.model = new IndexModel();
		this.view =  new IndexView();

		this.view.index_main_article1_slideshow();

		this.view.index_main_section1_slideshow();

		this.view.event_listeners_for_index_main_section1_and_article1_slideshow();

		this.view.index_main_section1_div3_span1_input1_submit_input(
			this.submit_index_main_section1_div3_span1_input1_email,
		);
	}

	submit_index_main_section1_div3_span1_input1_email = (email) =>{

		console.log("submit_index_main_section1_div3_span1_input1_emailworking")
		this.model.submit_index_main_section1_div3_span1_input1_email(email);

		return({
			email_name: this.model.index_model_get_user_email(),
			email_submitted: this.model.index_model_get_user_email_submitted()
		})

	}
}