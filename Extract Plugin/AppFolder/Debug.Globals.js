//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

outGlobals = app.trustPropagatorFunction( function() {
				
	console.println("");
	console.println("Debugging Globals: ");	
	
	DebugGlobals(global.app);
	DebugGlobals(global.project);
	DebugGlobals(global.resources);
	DebugGlobals(global.extract);

});

function DebugAlert(mTitle, mMsg) {
	
	alert( {
	    cMsg: e,
	    cTitle: "Error: Unable to Creating Pages Collection"
	});

}


/**
 * @desc Filter for outputing exception messages to the console.
 * @author ${user}
 * @param Message
 * @param Exception
 */
function DebugException(Message, Exception) {
    
	if ( global.debug.config == true) {
		console.println(Message);
		console.println(Exception);
	}
	
}

//	Receives Global Debug Boolean Value for the Calling Script
function DebugConsole (Message) {
    
	if ( global.debug.config == true) {
		console.println(Message);
	}

}


/**
 * 
 * @author ${username}
 * @param Objects
 * 
 */
function DebugGlobals(Objects) {
    	
    for (var cValue in Objects) {
	
	if (typeof cValue === 'boolean') {
		
	    console.println("setPersistant :" + cValue);
        
        } else if (typeof cValue === 'object') {
        	
            DebugGlobals(cValue);
            		
        } else {
            		
            console.println(cValue);
            		
        }
	
    }
    
}

