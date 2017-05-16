import {API_HOST} from './config.js';

export default class AjaxHandler {
    
	constructor () {
	}

    ajaxGet(path, data, trackback){
        var query  = "";
        var allKeys = Object.keys(data);

        allKeys.forEach(function(element) {
            query += query===""?"?":"&"
            query += element + "=" + data[element]
        }, this);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                trackback(JSON.parse(this.response))
            }
        };
        xhttp.open("GET", API_HOST + path + query, true);
        xhttp.send();
    }
}
