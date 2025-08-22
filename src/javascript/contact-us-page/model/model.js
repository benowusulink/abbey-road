
export class ContactModel {

	constructor(){
		
	}


	handle_contact_main_section1_form1_submit = (formData)=>{
		console.log(formData);
	}
	
	formattedDate = () => {

		const date = new Date();

		// Array of month short names
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
		                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		const formattedDate = 
		    `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} ` +
		    `${String(date.getHours()).padStart(2, '0')}:` +
		    `${String(date.getMinutes()).padStart(2, '0')}:` +
		    `${String(date.getSeconds()).padStart(2, '0')}`;

		console.log(formattedDate);

		return formattedDate;
	}
}