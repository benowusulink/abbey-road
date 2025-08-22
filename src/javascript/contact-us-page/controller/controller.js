import { ContactView } from '../view/view.js';
import { ContactModel } from '../model/model.js';

export class ContactController {

	constructor(){

		this.view = new ContactView();
		this.model = new ContactModel();

		this.view.submitForm(
			this.handle_contact_main_section1_form1_submit
		)
	}
	
	handle_contact_main_section1_form1_submit = (formData) =>{
		this.model.handle_contact_main_section1_form1_submit(formData)
	}

}