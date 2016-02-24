
function AddPageMetaData(oDoc, oNewDoc, pageNum) {
	app.beginPriv();
	
	console.println("Setting Document Default Metadata");
	
	oNewDoc.disclosed = true;
	
	oNewDoc.info.title = oDoc.documentFileName;
	oNewDoc.info.SourceFile = oDoc.path;
	oNewDoc.info.AnnotCount = oDoc.getAnnots(pageNum).length; 
	oNewDoc.info.keywords = oDoc.documentFileName;
	oNewDoc.info.stage = 1;
	
}