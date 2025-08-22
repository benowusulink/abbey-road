import {RIView} from '../view/view.js';
import {RIModel} from '../model/model.js';

export class RIController {

	constructor(){

		this.view = new RIView();
		this.model = new RIModel();

		this.view.render_all_images(
			this.model.getimages()
		)
	}

}