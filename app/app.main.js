import Logger from './utils/Logger.js';
import AjaxHandler from './AjaxHandler.js';

(function() {

	document.getElementById("submitId").addEventListener("click",function(){
   		
   		var numberId = document.getElementById("numberId").value ;
   		var ajaxHandler = new AjaxHandler();


	    ajaxHandler.ajaxGet("/api/customer/name", {cid: numberId}, function( result ){ 
	    	console.log(result);
	    	var name = result.recordset[0].CustomerName;
			document.getElementById("nameresult").innerHTML = name;
	    })
    });

})(AjaxHandler);

