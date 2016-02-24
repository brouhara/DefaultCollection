/**
 * Handles Cropping Page Boundaries
 * 
 * 1. Find Page Boundaries
 * 
 * i. PageQuads
 * 
 * 2. Find Word Boundaries i. Find Page Left Most Word ii. Find Page Right Most
 * Word iii. Find Page Top Most Word v. Find Page Bottom Most Word
 * 
 * @Desc Cycle through all the Words on the Page Set Variables for Left, Right,
 *       Top, Bottom
 * 
 * 
 * 2. Generate New Page 3. Crop Page Left, Right, Bottom, and Top Boundaries.
 * 
 * @pageNum Returns Active Page Number
 * 
 */

// global.PLEXTRACT.Page = (function(options) {
var aPage = (function(options) {

    return
    {
	console.println("Hello");
    }
    ;

}());

/**
 * 
 * Returns the Page Quadrants (Boundaries)
 * 
 * @param PageNumber
 */
function PageQuads(PageNumber) {

    // http://help.adobe.com/en_US/acrobat/acrobat_dc_sdk/2015/HTMLHelp/index.html#t=Acro12_MasterBook%2FJS_Dev_PDFCreation%2FCreating_and_Modifying_PDF_Documents.htm%23IX_cropping_a_page&rhsearch=images&rhsyns=%20
    return this.getPageBox({
	cBox : "Crop",
	nStart : PageNumber
    });

}

/**
 * 
 * @Desc Cycle through all the Words on the Page Set Variables for Left, Right,
 *       Top, Bottom
 * 
 * @Steps
 * 	1. Find Page Word Boundaries 
 * 		i. Find Page Left Most Word
 * 		ii. Find Page Right Most Word 
 * 		iii. Find Page Top Most Word v. Find Page Bottom Most Word
 * 
 * @param PageNumber
 * 
 */
function PageWordBoundaries(PageNumber) {

    // lower-left x, y,
    // upper-right x, y,
    // (-x, -y), (x, y)

    // Rectangle Object Array
    var WordQuad;

    // Page Word Boundaries
    Words.X.LowerLeft = 0; // Page Left
    Words.Y.LowerLeft = 0; // Page Top
    Words.X.UpperRight = 0; // Page Right
    Words.Y.UpperRight = 0; // Page Bottom

    // Number of Words and Word Quadrants
    var WordCount, aQuads;

    // Page Number of Words
    WordCount = PageWordCount(PageNumber);

    // For Each Page Word
    for (var i = 0; i < WordCount; i++) {

	// Get Word Rectangle
	Word = WordQuads(PageNumber, i);

	// Compare Rectangle Boundaries
	Rectangle = FormatWordQuads(Rectangle);

	// Rectangle U, L, R, B
	CompareBoundries(Rectangle, Words);

    }
    ;

    console.println(Words.LeftX);

    console.println(Words.DownY);

    console.println(Words.RightX);

    console.println(Words.UpY);

}

/**
 * Compares Boundaries for X,Y Coordinates
 * 
 * 4,5 6,7 (-X,-Y)(182,768), (X,-Y) (212,768) Second Pair
 * 
 * 0,1 2,3 (-X, Y) (182,782) First Pair, (X, Y) (212, 782)
 * 
 * @param X1
 * @param X2
 */
function CompareBoundries(Rectangle, Words) {

    // X Left -> Min
    // X Right -> Max
    // Y Bottom -> Min
    // Y Top -> Max

    // X Min -> Left Of Page
    Rectangle.LeftX = CompareLeftBound(Rectangle, Words);

    // Y Max -> Bottom Of Page
    Rectangle.UpY = CompareBottomBound(Rectangle, Words);

    // X Max -> Right Of Page
    Rectangle.RightX = CompareRightBound(Rectangle, Words);

    // Y Min -> Top Of Page
    Rectangle.DownY = ComparTopBound(Rectangle, Words);

}

/**
 * 
 * Compare X Left Bound (X,Y)
 * 
 * X Min -> Left Of Page
 * 
 * @param X1
 * @param X2
 * 
 * @return Lowest Bound
 * 
 */
function CompareLeftBounds(X1, X2) {

    if (X1 < X2) {
	return X1;
    }

    return X2;

}

/**
 * 
 * Compare Y Lower Bounds (X,Y)
 * 
 * Y Min -> BottomTop Of Page
 * 
 * @param Y1
 * @param Y2
 */
function CompareBottomBound(Y1, Y2) {

    if (Y1 > Y2) {
	return Y2;
    }

    return Y1;

}

/**
 * 
 * 
 * X Max -> Right Of Page
 * 
 * @param X1
 * @param X2
 */
function CompareRightBounds(Y1, Y2) {

    if (Y1 > Y2) {
	return Y2;
    }

    return Y1;

}

/**
 * 
 * Y Max -> Bottom Of Page
 * 
 * @param Y1
 * @param Y2
 */
function ComparTopBound(X1, X2) {

    if (X1 < X2) {
	return X2;
    }

    return X1;

}

function CropPage(PageNumber) {

    this.setPageBoxes({
	cBox : "Crop",
	nStart : 2,
	nEnd : 5,
	rBox : [ 100, 100, 500, 600 ]
    });

}