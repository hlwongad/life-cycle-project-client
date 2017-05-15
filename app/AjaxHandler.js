import {API_HOST} from './config.js';

export default class AjaxHandler {
    
	constructor (jQuery) {
		this.jQuery = jQuery;
	}

    ajaxGet(path, data, trackback){
        jQuery.get(API_HOST + path, data, trackback);
    }
}
