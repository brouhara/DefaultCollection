// JavaScript Document

//****************
// Set Project Variables
//****************

function setProjectFolder() {
	
	var folderName = "Leads Processing";
	var folderPath = "/C/Users/Adam Brouhard/Creative Cloud Files/";
	var folderFullPath = folderPath + folderName + "/";
	
	var oProjectFolder = {
		
		folder : {
			type : "folder",
			name : folderName,
			path : folderFullPath
		},
		
		folders : {
			type : "folders",			
			incoming  : folderFullPath + "Incoming/",
			processed : folderFullPath + "Processed/",
			resources : folderFullPath + "Resources/"
		}
		
	};
	
	global.project = oProjectFolder;
}