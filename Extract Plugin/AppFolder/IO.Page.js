// JavaScript Document

function closePage(oNewDoc) {
	app.beginPriv();
	
	console.println("Closing Page File");
	
	try {

		oNewDoc.closeDoc(true);

	} catch (e) {

		ErrMsg("Failed to Close Page File", e);
			
	}
}

function SavePage(oDoc) {
	app.beginPriv();
	
	console.println("Saving Page File");
	
	var oResult = SaveFile(oDoc, oDoc.path);
	
	if (typeof oResult === "undefined") {
		return true;		
	}
	
	console.println("Failed to Save Page File");
	return false;
}
