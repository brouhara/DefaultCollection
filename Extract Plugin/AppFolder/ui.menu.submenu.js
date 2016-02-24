// JavaScript Document

//****************************************
//	Create Extract Plugin SubMenu
//****************************************

function addExtractSubMenu() {
	// Check for Edit Plugin SubMenu 
	if ( typeof pSubMenu == "undefined") {
		var pSubMenu = false;
		
		// If No Menu Item
		if (!pSubMenu) {
			
			pSubMenu = true;
			
			// Add Plug-in Menu Item
			app.addSubMenu( { 
				cName:"EXTRACT:JSSubMenu", 
				cUser: "Extract Plugin", 
				cParent: "Edit", 
				nPos: 0
			} );
	
		}
	}
}

function Initialize_Plugin_Menus() {

	addExtractSubMenu();	
	
}