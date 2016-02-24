// JavaScript Document

/**
Notes:

event.targetName = FileName
event.name = MethodName

**/


/**
 * Set Plug-in Reporting Object
 * 
 * @Init Hybrid Factory Object
 * 
 * @param options
 */
function Initialize_Plugin_Reporting( options ) {


    console.println("Initializing Plugin Reporting Object");
    
    //global.PLEXTRACT.Report = ReportFactory.createReport( options );

}

/**
 * Reports Factory Object
 * 
 * Used to Return a New Report Object
 * 
 * JS only Supports  Single Inheritance Meaning that the Object returned 
 * will return true as a Report Object only.
 * 
 * @param options
 */
function ReportFactory( options ) {

    var createReport = function( options ) { return new ReportObject( options ); };
	
}


/**
 * Test Constructor Method to see if it works.
 */
function testConstructor() {
    
    console.println("Test");	

}

/**
 * Create a Custom Report Object 
 * 
 * 	1-2 Report objects may be open at one time.
 * 	Generic Factory Pattern Utilized.
 * 
 * Usage: 
 * 	1. Master Report Object is Created 
 * 		i. Identical Filename and Extension _Report
 * 	2. Additional Reports are Created for each Page Exported
 * 		i. Pages exported will be to Leads Folder
 * 		ii. Each file will have a Report
 * 
 * @NOTES: 
 * 	1. Get/Set Functions treated as Object Array
 * 	2. JS Objects are Mutable meaning Reference (Pointers) are Used by Default instead of values.
 * 
 * @param options
 * 
 */
function ReportObject( options ) {
    constructor : testConstructor;
	
	// @NOTE Locally Accessible Instance Properties

	// Currently Open File Location
	_file = new FileFactory.createFile();

	// Report Object
    	_report = null;

	
    	// @NOTE Parsed Current File Variables
	
	_path = null;
	_name = null;

	// @NOTE Global Instance Variables 
	// @NOTE Set Default Values 
	
	// Properties for Saving Report
	
	this.prefix = "";
	this.suffix = "Report";
	this.ext = ".pdf";

	this.seperator = ".";

	// @NOTE Accessor Functions
	
	Object.defineProperty(this, "report", {

	    	// Returns current report object
		get : function() {	return _report; }
	
		//	Allow user to change output path
		//set : function(object) { this._report = object; }
	});
	
	// Method: Creates a New Report Object Options
	this.newReport	= function ( options ) {
	
		try {
			
			// Set Report File Reference
			this._file.setObject( options.file );
			
			this._path = this._file.path;
			this._name = this._file.path;
			
			// Set New Report Object
			this._report = new Report();
			
		} catch (e) {
			
			Dbg.Con("Failed to Create New Report Object", e);
			throw e;
		
		}
	
	};
	
	// Method: Open Report Object
	this.openReport = function (name) {
		
		try {
			
			var oResult = _report.open(name);
			return oResult;
			
		} catch (e) {
			
			dbg.con("Failed to Open Report");
			dbg.e(e);
			
			throw e;
		}
	};

	// Method: Attempt to Write a Message to the Report Object
	this.out = function (message)	{
		
		try {
			
			var result = _report.Write(message);	
			return result;
		
		} catch (e) {
			
			dbg.con("Failed to Write Report Message", e);	
			throw e;
			
		}
	};
	
	// Outputs an Exception Message to the Report Object
	this.e = function (e) {

		// Called from Dbg
		this.Write("\nException Thrown");
		
		this.Write("File: " + e.fileName);
		this.Write("Method: " + e.name);			
		this.Write("Line: " + e.lineNumber);
			
		this.Write("Message: " + e.Message);
		this.Write("Details: " + e.extMessage);
		
	};

	// Writes to the Report Object
	this.out = function(message) {
		
		this._report.writeText(message);
			
	};
	
}


/**
 * Returns the Path Section of a file.
 * 
 * Example: "C:/Program Files (x86)/win32/command.exe" returns "C:/Program Files (x86)/win32/"
 * 
 * @param Path
 * @returns Path
 */
function ReportPath(Path) {

	if (filePrefix.length > 0) {
		filePrefix += seperator;
	}

	if (fileSufix.length > 0) {
		fileSufix = seperator + fileSufix;
	}
	
	return filePath + filePrefix + fileName + fileSufix + fileExt;

}

