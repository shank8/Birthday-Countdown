// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;
    
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
 
    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            var datePicker = document.getElementById("datePicker");
            var dp = new WinJS.UI.DatePicker(datePicker);


            initialize();
            setInterval(setTime(dp), 1000);
           
            args.setPromise(WinJS.UI.processAll());
        }
    };

   
    function setTime(dp) {
        var date = new Date();
       
        var cur_month, cur_day, cur_hour, cur_min, cur_sec;

        cur_month = date.getMonth();
        cur_day = date.getDay();
        cur_hour = date.getHours();
        cur_min = date.getMinutes();
        cur_sec = date.getSeconds();

        //getBirthday
        var bir_month, bir_day, bir_hour, bir_min, bit_sec;

        var monthText = new Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var year = "2012";
        $('#bdayDisplay').text("Your birthday is on " + monthText[dp.current.getMonth()]
            + " " + dp.current.getDay() + ", " + year);

        $("#counter").html("<h1>"+cur_month+" months : "+cur_day+" days : " + cur_hour+" hours : "+cur_min+" minutes : "+cur_sec+" seconds</h1>");
       
    }

   
    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();

function saveBirthday() {
    
    $('#main').removeClass('hidden');
    $('#init').removeClass('visible');
    $('#main').addClass("visible");
    $('#init').addClass('hidden');
    
}

function initialize() {
    /* This function will create our WinJS elements and initialize any global variables
     * It will also run a check to see if the user already supplied a birthday */
   
    
  
   
  

}