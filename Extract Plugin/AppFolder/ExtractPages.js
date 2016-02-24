//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//****************************************
//
//	ExtractPages.js
//
// 		* Opens Debuger Console 
//		* (Moved to xInit) Loads Config.js Variables
// 		* Extracts Each Page from the file
//			* Outputs Errors while Extracting Leads
// 		* Adds Extracted Pages to Leads Catalog
//
//****************************************

//*****************************************
// Debugging Output File Variables
//*****************************************

function setDbgExtractPages() {
    app.beginPriv();

    var oDebug = {
	PLExtractPages : false
    }

    global.debug = oDebug;

    return global.debug.PLExtractPages
}

function ErrMsg(Message, Exception) {

    app.beginPriv();

    var oDbg = global.debug.PLExtractPages;

    if (typeof oDbg != undefined) {
	oDbg = setDbgExtractPages();
    }

    if (oDbg) {

	DebugException(Message, Exception);

    }
}

function DbgMsg(Message) {
    app.beginPriv();

    var oDbg = global.debug.PLExtractPages;

    if (typeof oDbg != undefined) {
	oDbg = setDbgExtractPages();
    }

    if (oDbg) {
	DebugConsole(Message);
    }
}

function DbgFileOutput(pagedir, prefix, filename, suffix, extension, PageNumber) {

    console.println("\nExtracting To: " + pagedir);
    console.println("File Prefix: " + prefix);
    console.println("File Suffix: " + suffix);
    console.println("File Extension: " + extension);

    console.println("Extracting " + PageNumber + " Pages");

}

function closePage(oNewDoc) {
    app.beginPriv();
    console.println("Closing Page File");

    try {

	oNewDoc.closeDoc(true);

    } catch (e) {

	ErrMsg("Failed to Close Page File", e);

    }

}

function SavePage(oNewDoc) {
    app.beginPriv();
    console.println("Saving Page File");

    try {
	oNewDoc.save();
    } catch (e) {
	ErrMsg("Failed to Save Page File", e);
    }
}

function SetupPage(oDoc, oNewDoc, pageNum) {
    app.beginPriv();

    console.println("\nSetting Up Extracted Page");

    AddDefaultMetaData(oDoc, oNewDoc, pageNum);

    AnnotsToMetadata(oNewDoc);

    AddCollectionPage(oNewDoc);

    closePage(oNewDoc);
}

function ExtractPage(oDoc, pageNum) {

    console.println("Extracting Page");

    // Extract Page to File
    var oResult = NewPageFile(oDoc, pageNum);

    // Check for Success
    if (oResult != false) {

	// Open the New Page File
	oNewDoc = OpenPageFile(oResult);

	if (oNewDoc != false) {

	    SetupPage(oDoc, oNewDoc, pageNum);
	    console.println("Successfully Extracted Page");

	    return true

	} else {

	    DbgMsg("Failed to Open Extracted Page File");

	}

    } else {

	DbgMsg("Failed to Create Page File");
	return false;

    }

}

// ****************
// Extract Pages
// ****************
function ExtractPages(oDoc) {
    app.beginPriv();

    console.println("\nExtracting Pages");

    // Extract Each Page
    for (var pageNum = 0; pageNum < oDoc.numPages; pageNum++) {

	ExtractPage(oDoc, pageNum);

    }
}

function PLExtractPages(oDoc) {
    app.beginPriv();

    console.show();
    console.clear();

    console.println("Executing ExtractPages.js");
    DbgMsg("Source Document: " + oDoc.path);

    var oResult = CheckPagesCollection();

    if (oResult) {
	ExtractPages(oDoc);
    } else {
	DbgMsg("Exiting Extract Pages");
	return false;
    }

    console.println("Exiting Extract Pages");

}
