/* global global */

//*************************
// Set Resource Variables
//*************************

function setResources() {
	
	var folderName = "Resources";
	var folderPath = global.project.folder.path;
	var folderFullPath = folderPath + folderName + "/";
	
	var oResources = {
		
		path : folderPath,
		
		folder : {
			type : "folder",
			name : folderName,
			path : folderFullPath
		},
		
		folders : {
			type : "folders",			
			abby :  folderFullPath + "ABBY FinePrint Reader 12.0/",
			acrobat : folderFullPath + "Adobe Acrobat Pro DC/",
			samples : folderFullPath + "Samples/"
		}
		
	};
	
	global.resources = oResources;
}
