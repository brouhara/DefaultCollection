/* global app */
/* global global */
//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

/**
 * Assigns Debugging Object for Outputting Console and Report Messages.
 * 
 * @inheritance
 * 
 * @param Plugin : global.PLEXTRACT
 */

(function (Plugin) {

    /**
     * Debugging Object provides support for outputting console messages to
     * multiple Report Objects.
     * 
     * @param Options Doc, FileName
     */
    function Debug() {

        console.println("Initializing Debug Object");

        // Plugin Reporting Object
        var pluginReport = null;

        // Currently Opened File Reporting Object
        var currentReport = null;

        console.println("Defining Prototype Functions");

        console.println("This Corresponds to : " + this);
        
        // Define DebugObject.Prototype.con
        Object.defineProperty(this, "con", {

            // Write to Console
            set: function (message) {

                // Output Message to Console
                console.println(message);

                // Output Message to Report
                if (currentReport === "Object") {
                    this.currentReport.out(message, object);
                }

            }

        });


        /**
         *  Accessor Method for Current Reporting Object
         * 
         * Current Reporting Object Returns the Currently Opened Files Report Object.
         *
         */
        Object.defineProperty(this, "report", {

            // Accessor Method for Current Report Object

            get: function () {

                return this.currentReport;

            },

            set: function (report) {

                this.currentReport = report;

            }

        });

        /**
         * Debug Output Message Handling Method
         *
         * Outputs: Text String, Object Properties
         * To: Console and Report Object(s)
         *
         * @param Arguments[0] = Message
         * @param Arguments[1] = Object 
         */
        Object.defineProperty(this, "out", {

            set: function (Arguments) { this.con(Arguments[0], Arguments[1]); }

        });

        // 
        
        /**
         * Recursively Outputs Object Properties
         *
         * @param Arguments[0] = Message
         * @param Arguments[1] = Error or Object 
         */
        Object.defineProperty(this, "obj", {

            // Set Function
            set: function (e) {

                var properties = Object.keys(e);
                var i, len;

                for (i = 0, len = properties.length; i < len; i++) {

                    // Output Property Name and Value
                    this.out("Exception. " + properties[i] + " : " + Object[properties[i]] + "\n");

                    // Recurse if == Object Type
                    if (typeof (Object[properties[i]]) === "object") {

                        this.obj(Object[properties[i]]);

                    }

                }
            }
        });

    }

    /**
     * Specify Global Debug Object
     * 
     * @purpose Output to Console and Reporting Objects.
     * 
     * @param options
     */
    function Initialize_Debugging(Plugin) {

        app.beginPriv();

        console.println("Assigning New Debug Object Instance to Plugin Global Object");

        // Assign Debug Object to Global Object
        Plugin.Debug = new Debug();

    }

    /**
     * General Constructor Function
     * 
     */
    function init(Plugin) {

        // Check for Global Variable
        if (typeof (Plugin) === "undefined") {

            console.println("Creating Plugin Global Variable");

            // Create Global Plugin Object
            global.PLEXTRACT = {};

            Initialize_Debugging(global.PLEXTRACT);

        } else {

            if (typeof (Plugin.Debug) === "undefined") {

                console.println("Defining PLEXTRACT.Debug Object .");

                Initialize_Debugging(global.PLEXTRACT);

            } else {
                console.println("PLEXTRACT.Debug Object is Defined");
            }

        }
    }
    
    init(Plugin);

})(global.PLEXTRACT);
