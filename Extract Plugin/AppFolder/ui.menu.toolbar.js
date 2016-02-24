// JavaScript Document

function addExtractToolbar() {
    
    console.println("Adding Toolbar");
    
    app.addToolButton( { 
    
    	cName: "ExtractPages",
    	cLabel: "Extrat Pages", 
    	cEnable: "event.rc = (app.doc != null);",
    	cExec: "PLExtractPages(event.target);"
    
    });

}
