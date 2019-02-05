

//make new connection to background from content script or extension page

var sampleConnection = new Port({name: "sample"});

//listener for broadcast messages from the background script and from other tabs or the browseractionmenu
sampleConnection.addBroadcastListener({
	'doSomething': function(msg,sender,response){
		//do the thing
		response('success');
	}
});

//listener for port messages from the background script
sampleConnection.addPortListener({
	'doSomethingElse': function(msg, sendResponse) {
		//do something else
		sendResponse(true);
	}
});

//send tab messages to active tab
chrome.tabs.getSelected(function(tab){
	//send tab message, no callback
	sampleConnection.tabMessage(tab.id, { method: 'something', sample: true });

	//send tab message with callback
	sampleConnection.tabMessage(tab.id, { method: 'something-else', sample: false }, function(resp){	
		if(!resp.success){
			//do something
		}//if
	});
});


//-callbacks work the same way for the following as they do for tabMessage

//send broadcast message, no callback
sampleConnection.broadcastMessage({ method: 'something-all-tabs', sample: 55 });

//send port message, no callback
sampleConnection.postMessage({ method: 'something-background', sample: {} });

