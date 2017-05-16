import Logger from './utils/Logger.js';
import AjaxHandler from './AjaxHandler.js';

(function() {

	$("#submitId").click(function(){
    var ajaxHandler = new AjaxHandler(jQuery);
		var numberId = $("#numberId").val();
        ajaxHandler.ajaxGet("/api/customer/name", {cid: numberId}, function( result ){ 
        	console.log(result);
        	var name = result.recordset[0].CustomerName;
    		$("#nameresult").text(name);
        })
    });

})(jQuery, AjaxHandler);

