// JavaScript Document

//*****************************************
//	Builds Filename from Page Properties
//*****************************************

function ReportMsg(Message, e) {
		
}

function IOCollectionPageError(Message, Exception) {
	app.beginPriv();
	
	if (Debugging == true) {
		DebugException(Message, Exception);		
	}
}

function IOCollectionPageMessage(Message) {
	app.beginPriv();
		
	if (Debugging == true) {
		DebugConsole(Message);
	}
}

function PageFileName(oDoc, pageNum) {
	app.beginPriv();
	
	var pagedir = global.extract.pages.path;
	var prefix = global.extract.pages.prefix;

    	var filename = GetFileName(oDoc.documentFileName);
	
	var suffix = global.extract.pages.suffix;
	var extension = ".pdf";

	return pagedir + prefix + filename + suffix + pageNum + extension;
}

//*****************************************
//	Opens the New Extracted Page File
//*****************************************
function OpenPageFile(filePath) {
	app.beginPriv();

	//	Result will be Null Due to cPath being specified
	oDoc = OpenFile(filePath);
		
	if (typeof oDoc != "undefined") {
	
		console.println("Successfully Opened Extracted File");
		
		DbgMsg("Opened File: " + oDoc.path);
		return oDoc;
			
	} else {
		
		console.println("Error: Unable to Open Page File");
		return false;
	}
}

//*****************************************
//	Extracts Page to New File
//*****************************************
function NewPageFile(oDoc, pageNum) {
	app.beginPriv();
	
	pageFileName = PageFileName(oDoc, pageNum);	
	
	DbgMsg("\nExtracting Page: " + (pageNum + 1));
	DbgMsg("New File Name:\n " + pageFileName);
	
	try {

		//	Extract Page to Pages Directory
		var oResult = oDoc.extractPages( {
						nStart: pageNum,
						cPath :  pageFileName,
						bHidden : true
					} );

		DbgMsg("\nSuccessfully Extracted File: " + pageFileName);

		return pageFileName;
		
	} catch(e) {
		
		console.println("\nFailed to Extract File");
		console.println(e);
		return false;
		
	}
	
}
