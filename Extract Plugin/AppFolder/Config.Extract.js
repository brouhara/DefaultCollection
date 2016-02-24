 // JavaScript Document


function setExtract() {
	
	var folderName = "Extracted";
	var folderPath = global.project.folder.path;
	var folderFullPath = folderPath + folderName + "/";
	
	var oExtract = {
		
		folder : {
			type : "folder",
			name : folderName,
			path : folderFullPath
		},
		
		folders : {
			type : "folders",
			pages :  folderFullPath + "Pages/"
		},
		
		pages : {
			type : "attributes",
			prefix : "Lead-",
			suffix: "-",
			path : folderFullPath + "Pages/"
		}
	};
	
	global.extract = oExtract;
}
