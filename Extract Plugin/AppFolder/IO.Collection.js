// JavaScript Document

function NewCollection() {
	app.beginPriv();
						
	console.println("\nAttempting to Create New Collection");

	try {

		//	Create New Collection
		var oCollection = app.newCollection();

		if (oCollection == null) {

			console.println("Unable to Create New Collection");
			return false;

		} else {

			console.println("Successfully created New Collection");
			return oCollection;	

		}
		
	} catch (e) {
			
		ErrMsg("\n\nException Thrown while Creating New Collection:", e);
		return false;
		
	}
	
}
