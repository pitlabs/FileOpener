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

var FileOpenerPlugin = new FileOpenerPlugin();
module.exports = FileOpenerPlugin;





