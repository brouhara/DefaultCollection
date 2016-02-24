/**
 * 
 * Functions for Returning Page Words and Properties.
 * 
 */


/**
 * Returns an Array of 8 values, 
 * 4 XY Coordinates
 * lower-left x, lower-left y, upper-right x, and upper-right y
 * lower-left xy, upper-right xy
 * 
 * coordinates—in default user space—of the rectangle defining the 
 * location of the annotation on the page.
 * 
 * See also the popupRect property.
 * 
 * @param PageNum
 * @param WordNum
 * 
 * @return Rectangle
 */
function WordQuads(PageNum, WordNum) {

    // Return Page Nth Word Quadrants Rectangle
    return this.getPageNthWordQuads(0,1);

}

/**
 * Split Quadrant String into Numbers Array 
 * Round to nearest Whole Number.
 * Return Array
 * 
 * @param Rectangle
 * @return Array
 */
function FormatQuad(Rectangle) {
    var i = 0;
    
    // Break Word Quadrants into Array
    var aRect = Rectangle.split(",");
    
    // Round Array Math Values
    for( i = 0; i < aRect.length; i++ ) {
	aRect[i] = Math.round( aRect[i] );
    }
    
    // Return Array Rectangle
    return aRect;

}

/**
 * 
 * Returns the Page Word Count.
 * 
 * @param PageNum
 * @returns WordCount
 * 
 */
function WordCount(PageNum) {
    
    // Returns the Word Count
    return this.getPageNumWords(0,1);
    
}


/**
 * 
 * Remove Annotation
 * 
 * @param PageNum
 * @param Quad
 */
function RedactQuad(PageNumber, Rectangle) {

    var rct = getAnnots(PageNumber)[0].rect;
    var left = rct[0];
    var right = rct[2];
    var top = rct[3];
    var bot = rct[1];

    qd = [ [left, top, right, top, left, bot, right, bot] ];

    qd.toSource();

}
