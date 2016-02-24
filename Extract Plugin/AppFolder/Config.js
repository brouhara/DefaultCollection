//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

function Initialize_Globals()  {

	app.beginPriv();
		
	dbg.out("Executing Config.js");
	
	setProjectFolder();
	setResources();
	setResourcesAcrobat();
	setCollections();
	setExtract();
	
	dbg.out("Adding Environment Variables to Global");
		
	//****************
	// Debugging
	//****************
	
	dbg.out("Global Environmental Variables Added");
	
	dbg.out("Exiting Config.js");
	
}
