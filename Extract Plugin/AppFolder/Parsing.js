/**
 * @Desc
 *   
 *   1. Find Keywords (Search Function) 
 *   	i. Note Bounding Box for Beginning and End of Sections
 *   	ii. Copy Page and Crop Image Accordingly.
 *   2.	Perform Spell Checking on Known Words
 *   3. Split Page into Sections (CropBox)
 *   
 */

function FormParser() {
    
}



/**
 * 
 * // Loop through the entire document
 * for (var i = 0; i < this.numPages; i++) { 
 * 
 * 	// Find out how many words are on the page
 *	numWords = this.getPageNumWords(i); \n
 * 
 * 	var WordString = ""; // Prepare a string
 * 
 * 	// Put all the words on the page into a string
 * 	for (var j = 0; j < numWords; j++) {
 * 
 * 		WordString = WordString + " " + this.getPageNthWord(i, j);
 * 
 * 	}
 * 
 * 	// Search for the word "Hello" in the string
 * 	if (WordString.match(/Hello/)) {
 * 
 * 		// If we got here, we'll search for "Hello" in the document
 * 		search.matchWholeWord = true; 
 * 		search.query( WordString.match(/Hello/), "ActiveDoc");
 * 	}
 * }
 * 
 */
function TopOfForm() {
    var BreakAfter = new RegExp("Form 668 (Y)(c)");
    var FirstLine = new RegExp("Department of the Treasury - Internal Revenue Service", 'i');
    var LastLine = new RegExp("Notice of Federal Tax Lien");
    
    search.wordMatching = "MatchAllWords";
    FirstLine.wordMatching = "MatchAllWords";
    
}



/**
 * Selects the Nth Word on Page
 * 
 * @param Page
 * @param WordNumber
 */
function SelectWord(PageNumber, WordNumber) {
    
    this.selectPageNthWord(PageNumber, WordNumber);
    
}

function SearchWord(Page, Word) {
    
    
}

function BuildQuad(Left, Top, Right, Top, Left, Bottom, Right, Bottom) {
    
    
}
