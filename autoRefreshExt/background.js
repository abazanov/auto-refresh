var filter = {
	"urls": ["*://*/*"]
};

chrome.webRequest.onCompleted.addListener(function(details) {
	console.log(details);
	if (details.statusCode !== 200 && details.type === "main_frame") {
		if ( details.tabId !==1 ) {
			setTimeout(function() {
				chrome.tabs.reload(details.tabId);
			}, 1000);
		}
	}
}, filter);


//if (typeof (chrome.runtime.getManifest) == 'function') {
//    var manifest = chrome.runtime.getManifest();
//    console.log(manifest.name);
//    console.log(manifest.version);
//}

// https://developers.chrome.com/extensions/options