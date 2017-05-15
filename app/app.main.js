import Logger from './utils/Logger.js';
import AjaxHandler from './AjaxHandler.js';

(function() {

	$("#submitId").onclick(function(){
		var numberId = $("#numberId");
        ajaxHandler.ajaxGet("/api/customer/name", {cid: numberId}, function( result ){ 
    		$("#nameresult").html(result)
        })
    });

})();

