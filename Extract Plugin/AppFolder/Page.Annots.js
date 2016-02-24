// JavaScript Document

function CheckAnnotContent(Content) {
	console.println("Annot Content: " + Content);
	
	Content.trim();
	
	if(Content.length == 0) {
		return false;
	} 
	
	if (Content.charAt(0) == '*'){
		return Content;
	}
	
	DbgMsg("Content is Valid")
	return Content;
}


function GetAnnotContents(oProps) {
	app.beginPriv();
		
	DbgMsg("\nGetting Annotation Contents");

	//	Get Annotation Contents
	var Content = oProps.contents;

	DbgMsg("Checking Annotation Contents");
		
	//	Check for Contents
	if( Content != undefined ) {
			
		//Append Contents to Metadata Field Annotations
		return Content;

	} else {
		
		console.println("Annotation Contents Undefined");
		
	}
}

function GetAnnotProperties(oAnnot) {
	
	app.beginPriv();
	
	DbgMsg("Annot Object: " + oAnnot);
	DbgMsg("Checking if Defined");
	
	//	If Annotation is Defined
	if ( oAnnot != undefined ) {
		
		DbgMsg("Getting Annotation Properties");
		
		//	Get Annotation Properties
		try {
			var oProps = oAnnot.getProps();

			DbgMsg("Properties Object: " + oProps);
			return oProps;

		} catch (e) {
			console.println("Exception Thrown: ");
			console.println(e);		
		}

	} else {
		
		console.println("Annotation Object is Undefined");	
	
	}
}

function GetAnnotContent(oAnnot) {
	var oProps = GetAnnotProperties(oAnnot);
	var oContents = GetAnnotContents(oProps);	
	var Contents = CheckAnnotContent(oContents);
	
	return Contents;
}

function GetPageAnnots(oDoc) {
	
	app.beginPriv();
	
	DbgMsg("Page File:\n " + oDoc.path);	
	DbgMsg("Syncing Annotation Scan");	
		
	DbgMsg("Attempting to Read Page Annotations");
	
	//Get New Page Annotations.
	try {
	
		oNewDoc.syncAnnotScan();
		var oAnnots = oDoc.getAnnots(0);
		
		DbgMsg("Page Annotations: " + oDoc.getAnnots(0).length);
		DbgMsg("Successfully Read Page Annotations");
		
		return oAnnots;

	} catch(e) {
		
		console.println("Exception Thrown while Reading Page Annotations");
		console.println(e);
	}
}
