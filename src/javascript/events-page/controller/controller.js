import { EventsView } from '../view/view.js';
import { EventsModel } from '../model/model.js';

export class EventsController {

	constructor(){

		this.view = new EventsView();
		this.model = new EventsModel();

		this.view.creating_and_render_event_articles(
			this.model.getMockEventsData()
		)
	}

}