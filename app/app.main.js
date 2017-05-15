import Logger from './utils/Logger.js';
import AjaxHandler from './AjaxHandler.js';

(function() {

	$("#submitId").onclick(function(){
    var ajaxHandler = new AjaxHandler(jQuery);
		var numberId = $("#numberId");
        ajaxHandler.ajaxGet("/api/customer/name", {cid: numberId}, function( result ){ 
    		$("#nameresult").html(result)
        })
    });

})(jQuery, AjaxHandler);

