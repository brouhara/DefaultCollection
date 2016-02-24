// JavaScript Document
//
// Hybrid Factory Constructor Pattern
// Constructor Builds Prototype
// Methods are reused using Prototype Pattern


//	Factory Types
/**
 * Factory Object for Generating and Tracking a File.
 * 
 * @methods Create
 * 
 */

var fileFactory = new FileFactory();

/**
 * 
 * File Factory Object used for handling method calls.
 * 
 * @functions Create
 * @param options
 * 
 */

function FileFactory( options ) {
	
    this.createFileObject = function( options ) { return new FileObject( options ); };

    this.createNewFile = function (options ) { return new NewFileObject (options); };
    
}

/**
 * 
 * Create a New File Object with Arguments Provided
 * 
 * @param options(prefix, suffix, separator, newExtension)
 * @MethodType Constructor Factory Pattern
 * 
 */

function NewFile( options ) {
    constructor : FileObject;
	
	var prefix = options.prefix || "";
	var suffix = options.suffix || "";
	
	var seperator = options.seperator || "-";
	var extension = options.newExtension || ".pdf";
	
	//NewFile.prototype.constructor = new FileObject();

}

/**
 * 
 * Create a File Object with Default Properties
 * 
 * @param options
 * 
 */

function FileObject( options ) {

    // Property Attributes (Not Directly Accessible)
    var _fileObject = null;
    var _fileName = null;
	
    var path = null;
    var _name = null;
    var _ext = null;

    var Properties = function ( obj, key, value ) {
	
	var config = {
		value: value,
		writable: true,
		enumerable: true,
    		configurable: true	
    	};
	
	Object.defineProperty( obj, key, config )();
	
    };


    // Define File Object Properties
    Object.defineProperty(FileObject, "file", {
    		
    	get: function() { return this._object; },
    	set: function(value) {
    		
    		//	Set file
    		this._object = value;
    		
    		//	Set filename
    		this._fileName = this._object.documentFileName;
    		
    		//	Set file path
    		var lastIndex = this._object.path.lastIndexOf ("/");
    		this._path = this._object.path.substr (0, lastIndex);
    	
    		//	Set file name
    		this.lastIndex = this._fileName.lastIndexOf ("."); 
    		this._name = this._fileName.substr (0, lastIndex);	
    	
    			//	Set file extension
    		this._ext = this._fileName.substr (lastIndex, _fileName.length);
    				
    	}	
    });

    // Returns the current document filename
    Object.defineProperty(File, "name", {	
    	get: function() {
    		return  this._name;	
    	}
    });
    
    // Returns the current document path
    Object.defineProperty(File, "path", {
    	get: function() {
    		return this._path;	
    	}
    });

}



function openFile(fullPath, hidden) {
	app.beginPriv();	

	if (typeof hidden == undefined) {
		bHidden = false;
	}

	Dbg.Msg("Attempting to Open File");
	
    	try {

		var oDoc = app.openDoc( { 
					cPath : fullPath,
					bHidden : hidden 
				} );
		
		if (oDoc != null) {
		
			Dbg.Msg("Successfully Opened File");	
			return oDoc;
			
        	} else {
		
			Dbg.Msg("Unable to Open File");
			return false;
			
		}
		
    } catch (e) {
		
		Dbg.E("\n\nException Thrown while Opening File:", e);
		return false;
    
    }
	
}

function SaveFile(oFile, oPath) {
	app.beginPriv();	

	Dbg.Msg("Attempting to Save File");
	
	try {

		//Result will be Undefined if Successful.
		var oResult = oFile.saveAs( { 
						cPath : oPath,
						bPromptToOverwrite : false
					} );		
					
		console.println(oResult);
		
		return true;
		
	} catch (e) {
	
		//	Output Error Message	
		Dbg.E("\n\nException Thrown while Saving File:", e);
		return false;	
	}
	
}

function NewCollection() {
	app.beginPriv();
						
	Dbg.Msg("\nAttempting to Create New Collection");

	try {

		//	Create New Collection
		var oCollection = app.newCollection();

		if (oCollection == null) {
			
			Dbg.Msg("Unable to Create New Collection");
			return false;
			
		} else {
			
			Dbg.Msg("Successfully created New Collection");
			return oCollection;	
			
		};
		
	} catch (e) {
			
		Dbg.E("\n\nException Thrown while Creating New Collection:", e);
		return false;
		
	};
	
}


//Define Report File Options
//function Report( options ) {
//
//this.object = options.object || null;	
//this.path = options.object.path || options.path;
//
//};
//
////Define Debug File Options
//function Debug( options ) {
//
//this.object = options.object || null;	
//this.path = options.object.path || options.path;
//
//}
//
////Skeleton File Factory
//function FileFactory() {}
//
////Default File Type
//FileFactory.prototype.fileClass = Report;
//
////Factory Method for creating new File instances
//FileFactory.prototype.createFile = function (options) {
//
//switch(options.fileType){
//	case "Report":
//		this.fileType = Report;
//		break;
//	case "Debug":
//		this.fileType = Debug;
//		break;	
//}
//
//return new this.fileClass( options );
//}
//
