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
//	Exec Method
//
//	Callers: Toolbar, MenuBar 
//*****************************************
function PLExtractPages(oDoc) {
	app.beginPriv();

   	console.show();
	console.clear();
	
	DbgMsg("Executing ExtractPages.js");
	DbgMsg("Source Document: " + oDoc.path);

	var oResult = CheckPagesCollection();

	if (oResult) {
				
		ExtractPages(oDoc);

	} else {
		DbgMsg("Exiting Extract Pages");	
		return false;
	}

	DbgMsg("Exiting Extract Pages");	
	
 }

//****************
//	Extract Pages
//**************** 	
function ExtractPages(oDoc) {
	app.beginPriv();

	DbgMsg("\nExtracting Pages");
	var pageFileName = "";
	
	//	Extract Each Page
	for (var pageNum=0; pageNum < oDoc.numPages; pageNum++) {
		
		//	Create a New Page File
		ExtractPage(oDoc, pageNum);

		//	Add Page to Pages Collection
		AddCollectionPage(oNewDoc);
		
		//	Save Page File
		SavePage(oNewDoc);

		//	Close the Page File
		closePage(oNewDoc);
	
	}
	
	
}
