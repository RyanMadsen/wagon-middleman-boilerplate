/ variable to hold request
var request;
// bind to the submit event of our form
$("#contact-form, #contact-form1, #contact-form2").submit(function(event){
    // abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);
    // let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    console.log($inputs);
    // serialize the data in the form
    var serializedData = $form.serialize();
    var totalData = serializedData + '&address='+address
    console.log(serializedData);

    // let's disable the inputs for the duration of the ajax request
    $inputs.prop("disabled", true);

    // fire off the request to form.php
    var request = $.ajax({
        url: "form.php",
        type: "post",
        data: totalData
    });

    // callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // log a message to the console
        console.log("Hooray, it worked!");
        $("#resultarea").prepend('<div data-alert class="alert-box success">Success<a href="#" class="close">&times;</a></div>').css("margin-top","-0.65em");
        $("#mobileresultarea").prepend('<div data-alert class="alert-box success nomarginbottom">Success<a href="#" class="close">&times;</a></div>').css();
    });

    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // log the error to the console
        console.error(
                "The following error occured: "+
                textStatus, errorThrown
        );
        $("#resultarea").prepend('<div data-alert class="alert-box alert">Fail<a href="#" class="close">&times;</a></div>').css("margin-top","-0.65em");
        $("#mobileresultarea").prepend('<div data-alert class="alert-box alert nomarginbottom">Fail<a href="#" class="close">&times;</a></div>').css();
    });

    // callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // reenable the inputs
        $inputs.prop("disabled", false);
    });
    address = null;
    // prevent default posting of form
    event.preventDefault();
    $inputs.prop("disabled", false);
    tryAgain();
});
