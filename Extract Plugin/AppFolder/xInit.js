// JavaScript Document

(
/**
 * @param PLEXTRACT
 */
function(PLEXTRACT) {

    /**
     * Initialize Plugin
     */
    function Initialize_Plugin() {

	console.println("Initializing Extract Plugin");

	app.beginPriv();

	console.show();

	// Initialize Plug-in Global Variables
	// Initialize_Plugin_Globals();

	// Initialize Plug-in Menu Items
	// Initialize_Plugin_Menus();

	// Initialize Plug-in Collection Object
	// Initalize_Page_Collection();

    }

    /**
     * Initializes Plugin Debugging and Reporting
     * 
     * @doc Document Object
     * @name
     */
    function Initialize_Debugging() {

	console.println("Initializing Extract Plugin Debugging");

	// Exports Debugging Messages
	// @NOTE Initialized at the folder Level meaning that the file has not
	// been
	// Opened Yet so a Filename Cannot be Provided Yet.
	Initialize_Plugin_Debugging();

	// Report Object holds Debug Messages
	// Initialize_Plugin_Reporting( { file : doc, name : name } );
	Initialize_Plugin_Reporting();
    }

    function Initialize_Globals() {

	console.println("Setting Global Variables");

	Initialize_Globals();

    }

    // Initialize Page Collection
    function Initalize_Page_Collection() {

	console.println("Setting Page Collection");

	// Check for Existing Pages Collection
	var oCollection = OpenPageCollection(global.collections.files.pages);

	// If Not Found
	if (oCollection == false) {

	    // Create New Pages Collection
	    oCollection = NewPageCollection();

	    // Check Results
	    if (oCollection != false) {

		console.println("Page Collection Opened Successfully");

	    }

	}

	// Set Global Collection Object
	global.pages = oCollection;

	// Return the Results
	return oCollection;

    }

    // Check for Defined Variable
    if (typeof (PLEXTRACT) === "undefined") {

	// Create Plugin Global Object
	global.PLEXTRACT = new Object();

	// Initialize the Plug-in
	Initialize_Plugin();

    } else {

	// global.PLEXTRACT.debug.out("Debugger Initialized in New Document\n");
	// global.PLEXTRACT.debug.out("Exiting Initialization in " +
	// this.documentFileName);

    }

}(global.PLEXTRACT));
