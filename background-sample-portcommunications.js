

//sample background script functions

//the incoming port connection
var backgroundConnection = new Port();

//set all of the background communication listeners
backgroundConnection.addBroadcastListener({
	//adds multiple scripts in order to pages that run content scripts
	'addScripts': function(msg, sender, sendResponse){
		//create response
		var _response = { method: msg.method, response: [] };
		//go through the script file array and execute them
		$.each(msg.scripts, function(i,v){
			chrome.tabs.executeScript(sender.tab.id, {file: v}, function(response){
				_response.response.push(response);
			});
		});

		sendResponse(_response);
	},
	//adds a single script to pages that run content scripts
	'addScript': function(msg, sender, sendResponse){
		chrome.tabs.executeScript(sender.tab.id, {file: msg.filename}, function(_response){
			sendResponse($.extend({},_response));
		});
	},
	//same as addScript, but uses a string instead of a filename or external resource
	//-useful for combining with ajax calls to get strings of external js to work around the chrome extension restrictions for using external js resources
	//-might also be dangerous, so be careful and act responsibly
	'addScriptCode': function(msg, sender, sendResponse){
		chrome.tabs.executeScript(sender.tab.id, {code: msg.code}, function(_response){
			sendResponse($.extend({},_response));
		});
	}
});


//adds an onconnect listener to the incoming port
//-similar to the port listeners used on content scripts and extension pages
//-can only be used in the background script
//-also fires an init script to run functions based upon the script that is opening the port
//--init is fired when a tab's port first connects to the background script
//---can be used to send data from the background script that is needed for that particular script back to it automatically
backgroundConnection.addOnConnectListener({
		'doSomething': function(msg, sendResponse){
			//do the thing
			sendResponse('success');
		},
		'doSomethingElse': function(msg, sendResponse) {
			//do something else
			sendResponse(true);
		}
	},{
		//init function	
		init: function (port, _tabID, sendResponse) {
			//optional: get all connected ports
			var _connectedPorts = connection.getConnectedPorts();
			
			//optional: if this is a specific port, send back a prefs obj
			if(port.name == 'specific-port') {
				sendResponse({method:'keydown',prefs:{ desc: 'a description' }});
			}//if
		}
	});
