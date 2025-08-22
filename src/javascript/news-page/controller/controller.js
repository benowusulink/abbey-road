import {NewsView} from '../view/view.js';
import {NewsModel} from '../model/model.js';


export class NewsController {

	constructor(){
		console.log("news controller working")

		this.model = new NewsModel();
		this.view = new NewsView();

		this.view.creating_and_render_news_articles(
			this.model.getMockNewsData()
		)

		
	}
}