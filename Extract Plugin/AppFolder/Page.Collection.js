//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------


//********************************************************************************
//
//	PagesCollection.js
//
//	Execution:	Acrobat Run Time.
//	
//	Description:
//		Checks for the Project for matching Page Collection file.
//		- 	Opens Corresponding Page Collection if Found.
//		- 	Creates new Page Collection File if none found.
//		-	Saves New Page Collection File if New Page Collection is Created.
//		Sets Global Object Link to Page Collection File.
//
//********************************************************************************

//	JavaScript Document

//	Add File to Pages Collection
function AddCollectionPage(oPage) {

	//	Import Page DataObject to Pages Collection 
 	var oReturn = global.pages.importDataObject({ 
							cName : oPage.title,
							cDIPath : oPage.path	
						});

	//	Returns False if Exception Thrown
	if (oReturn == false) {

		console.println("Failed to Add Document " + oPage.title + " to Pages Collection");
		console.println(oReturn);

	}
	
}

function SavePageCollection(oCollection, dirFullPath) {
	
	console.println("Attempting to Save Page Collection");
	
	var oResult = SaveFile(oCollection, dirFullPath);
	
	if (oResult != false) {
		
		console.println("Successfully Saved Page Collection");
		return oResult;
		
	} else {
		
		console.println("Unable to Save Page Collection");	
		console.println(oResult);
		return false;
		
	}
	
}

//	Create a new PDF portfolio and get the Doc object of the newly created PDF.
function OpenPageCollection(cPath) {

	console.println("\nAttempting to Open Page Collection");
	
	//	Check for Pages Collection (hidden)
	var oCollection =  OpenFile(cPath, true);
	
	console.println(oCollection);
	
	if (oCollection != false) {
		
		console.println("Successfully Opened Page Collection");		
		return oCollection;

	} else {
		
		console.println("Unable to Open Page Collection");	
		return false;
		
	}
	
}

function NewPageCollection() {

	console.println("Attempting to Create New Page Collection");
			
	var oCollection = NewCollection();
	
	console.println(oCollection);
	
	if (oCollection != false) {

		console.println("Successfully Created New Page Collection");	
		return oCollection;	
		
	} else {		
		console.println("Unable to Create New Page Collection");
		return false;


	}
}

function ShowPageCollection(){
	
	global.pages.show();
	
}

function CheckPagesCollection() {
		
	if (global.pages != false)  {

		console.println("Page Collection Found");
		return true;	

	} else {
		
		console.println("Failed to find Page Collection");
		return false;
		
	}
	
}
