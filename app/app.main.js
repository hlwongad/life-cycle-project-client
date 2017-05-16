import Logger from './utils/Logger.js';
import AjaxHandler from './AjaxHandler.js';

(function() {

	document.getElementById("submitId").addEventListener("click",function(){
   		
   		var numberId = document.getElementById("numberId").value ;
   		var ajaxHandler = new AjaxHandler();


	    ajaxHandler.ajaxGet("/api/customer/name", {cid: numberId}, function( result ){ 
	    	if(result.name){
				document.getElementById("nameresult").innerHTML = result.name;
			}
	    })
    });

})(AjaxHandler);

