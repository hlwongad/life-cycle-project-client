# life-cycle-project-client

## A simple Client calling for an API server 

packaging : webpack, npm 

### www : contain the index file and the built js 
### app : 
 - config.js : configure the adress of the host API
 - AjaxHandler : ajaxGet function perform query on a specific 'path' of the api url with a 'data'. Push the responce in the 'trackback' function.
 - app.main.js : main javascript of the app, calls ajaxget with a ID and should get a corresponding Name. 
### tests :