var exec = require(`cordova/exec`);

function FileOpener() {};

FileOpener.prototype.open = function (url, failureCB) {
        var success = function() {
        console.log("success!");
        }
        var failure = function(error) {
            console.log(error);
	    if(typeof failureCB === "function"){            
		failureCB(error);
	    }
        }
	exec(success, failure, "FileOpener", "openFile", [url]);
}

var fileopener = new FileOpener();
module.exports = fileopener;

