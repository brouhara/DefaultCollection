// JavaScript Document

// var breakFactory = new BreakFactory(new Error);

function BreakFactory(Error) {

    // Inherits the SetBreakpoint Prototype
    constructor: dbg.sb;

    dbg.sb({
	fileName : options.fileName,
	lineNum : options.lineNumber,
	condition : "true"
    });

}

function BreakOptions() {

    var options = new Object();

    options.fileName = event.fileName;
    options.lineNumber = (new Error).lineNumber;

}

function DebugBreakPoint() {

    dbg.setBP(new Error);

    console.println("Testing Set:");
    dbg.sb.set();

    console.println(event.targetName);

    console.println("test: " + (new Error).lineNumber);

    dbgProto.lineNumber = function(Error) {
	return Error.lineNumber;
    };

    console.println("Testing Line Number: " + dbg.lineNumber(new Error));
    console.println(Error.lineNumber);
    console.println(event.fileName);

}

function DebugPrototype() {

    var dbgProto = [];

    dbgProto = Object.getPrototypeOf(dbg);

    console.println("dbg Proto: " + Object.getPrototypeOf(dbg));

    return dbgProto;

}

// Invalid Left Hand Assignment to Break Debugger
// console.debugger();

// dbg.sb( { fileName: event.fileName, lineNum: (new Error).lineNumber,
// condition: "true" } );
