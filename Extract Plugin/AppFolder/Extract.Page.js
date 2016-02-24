// JavaScript Document


function AddAnnotToMetadata(oDoc, Content) {
	console.println("Adding Annotation to Metadata");
	
	oDoc.info.Annots += Content;
}

function ConfigurePage(oDoc, oNewDoc, pageNum) {
	app.beginPriv();
	
	console.println("\nSetting Up Extracted Page");

	console.println("\nAdding Page Annotations To Metadata");	
	DbgMsg("oNewDoc : " + oDoc);
	
	//	Add Page Metadata
	AddPageMetaData(oDoc, oNewDoc, pageNum);
	
	//	Get Page Annotations
	var oAnnots = GetPageAnnots(oDoc);
	
	//	Loop through Annotations
	// TODO: Changed from For Each to For
	for (var oAnnot in oAnnots) {
		
		//	Get Content of Each Annotation
		var Content = GetAnnotContent(oAnnot);
		
		//	Check for Content Before Adding
		if(Content != false) {
			
			AddAnnotToMetadata(oDoc, Content);

		}
		
	}
	
}

function ExtractPage(oDoc, pageNum) {

	console.println("Extracting Page");
		
	//	Extract Page to File
	var oResult = NewPageFile(oDoc, pageNum);
		
	//	Check for Success
	if(oResult != false) {

		//	Open the New Page File (hidden)
		oNewDoc = OpenPageFile(oResult, true);
	
		if(oNewDoc != false) {
			
			ConfigurePage(oDoc, oNewDoc, pageNum);

			console.println("Successfully Extracted Page");			
			return oNewDoc;
			
		} else {
			
			DbgMsg("Failed to Open Extracted Page File");
			return false;
		}
		
	} else {
			
		DbgMsg("Failed to Create File for Page ");
		return false;
		
	}

		
}