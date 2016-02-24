// JavaScript Document

function DebugGlobals() {

    Dbg.Msg("\nDebugging Globals: ");

    DebugObject(global.app);
    DebugObject(global.project);
    DebugObject(global.resources);
    DebugObject(global.extract);

}

function DebugFileName(pagedir, prefix, filename, suffix, extension, PageNumber) {

    console.println("\nExtracting To: " + pagedir);

    console.println("File Prefix: " + prefix);
    console.println("File Suffix: " + suffix);
    console.println("File Extension: " + extension);

    console.println("Extracting " + PageNumber + " Pages");

}
