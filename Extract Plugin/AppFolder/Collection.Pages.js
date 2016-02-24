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



//******************************
//	Check Global Page Collection
//******************************


function AddCollectionPage(oPage) {

	//Import the Page into the Pages Collection 
 	var oReturn = global.pages.importDataObject({ 
							cName : oPage.title,
							cDIPath : oPage.path	
						});
	
	//Add New File to Pages Collection
	if (!oReturn) {

		console.println("Failed to Add Document " + oPage.title + " to Pages Collection");

	}	
	
}

function CheckPagesCollection() {
		
	if (global.pages === false)  {
		console.println("Failed to find Page Collection");
		return false;
	} else {
		console.println("Page Collection Found");
		return true;	
	}
	
}

function SavePageCollection(oCollection, dirFullPath) {
	
	console.println("Attempting to Save Page Collection");
	
	var oResult = SaveFile(oCollection, dirFullPath);
	
	if (oResult === false) {

		console.println("Unable to Save Page Collection");	
		return false;
		
	} else {
		
		console.println("Successfully Saved Page Collection");
		return oResult;
		
	}
	
}

//	Create a new PDF Portfolio and get the Doc object of the newly created PDF.
function OpenPageCollection(CollectionFullPath) {

	console.println("\nAttempting to Open Page Collection");
	
	//	Check for Pages Collection
	var oCollection =  OpenFile(CollectionFullPath, false);
	
	console.println(oCollection);
	
	if (oCollection === false) {
		
		console.println("Unable to Open Page Collection");	
		return false;
		
	} else {
		
		console.println("Successfully Opened Page Collection");		
		return oCollection;

	}
	
}

function CreatePageCollection() {

	console.println("Attempting to Create New Page Collection");
			
	var oCollection = NewCollection();
	
	if (oCollection === false) {
		console.println("Unable to Create New Page Collection");
		return false;
	} else {		
		console.println("Successfully Created New Page Collection");	
		return oCollection;	
	}
}

function InitPageCollection() {
	
    var oCollection = [];
    
    //	Check for Existing Pages Collection
    oCollection = OpenPageCollection(global.collections.files.pages);

    //	If Not Found
    if(oCollection === false) {
		
	//	Create New Pages Collection
	oCollection = CreatePageCollection();

	if(oCollection === false) {
			
	    //	If Unable to Create New
	    console.println("Unable to Create Page Collection");	

	} else {
		
	    //	Save Pages Collection	
	    oCollection = SavePageCollection(oCollection, global.collections.files.pages);
			
	}
		
    } else {
	
	console.println("Setting Global Page Collection");	
    }
	
    //	Set Global Collection Object 
    global.pages = oCollection;
	
    //	Return the Results
    return oCollection;
}
