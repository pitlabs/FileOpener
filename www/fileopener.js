var FileOpenerPlugin = function() {
};

FileOpenerPlugin.prototype.open = function (url, failureCB) {
       	var success = function() {
       		console.log("success!");
       	}
       	var failure = function(error) {
      		console.log(error);
		if(typeof failureCB === "function"){            
			failureCB(error);
	   	}
        }
	cordova.exec(success, failure, "FileOpener", "openFile", [url]);
}

if(!window.plugins){
	window.plugins = {};
}
if(!window.plugins.fileopenerplugin){
	window.plugins.fileopenerplugin = new FileOpenerPlugin();
}






