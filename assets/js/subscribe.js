/**
 * @name    subscribe.js
 * @desc    script to run a client side form validation using the jquery-validation plugin
 *
 */

(function () {
    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    });

    $(document).ready(function () {
        $("#signupForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Please enter a valid email address",
                agree: "Please accept the terms and conditions"
            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                // Add the `help-block` class to the error element
                error.addClass("help-block");

                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("label"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents(".col-md-6").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-8").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-3").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-4").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-5").addClass("has-error").removeClass("has-success");

            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents(".col-md-6").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-8").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-3").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-4").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-5").addClass("has-error").removeClass("has-success");
            }
        });

        $("#subscribeForm").validate({
            rules: {
                firstname1: "required",
                lastname1: "required",
                username1: {
                    required: true,
                    minlength: 2
                },
                password1: {
                    required: true,
                    minlength: 5
                },
                confirm_password1: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password1"
                },
                email1: {
                    required: true,
                    email: true
                },
                confirm_email1:{
                    required: true,
                    equalTo:"#email1"
                },
                houseNum:{
                    required:true
                },
                streetName:"required",
                townName:"required",
                countyName:"required",
                postCode1:"required",
                country:"required",
                telNumber:{
                  required:true,
                  digits:true
                },
                agree1: "required"
            },
            messages: {
                firstname1: "Please enter your first name",
                lastname1: "Please enter your last name",
                password1: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                username1: {
                    required: "Please enter your username",
                },
                confirm_password1: {
                    required: "Please confirm your password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Passwords don't match"
                },
                email1: "Please enter a valid email address",
                confirm_email1:{
                  required:"Please confirm your email",
                  equalTo:"Emails don't match"
                },
                houseNum:{
                   required:"Please enter a house number"
                },
                streetName: "Please enter a street name",
                townName:"Please enter a town or city name",
                countyName: "Please enter a county name",
                postCode1:{
                    required:"Please enter a post code"
                },
                country:"Please enter a country",
                telNumber:{
                    required:"Please enter a telephone number"
                },
                agree1: "Please accept the terms and conditions"
            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                // Add the `help-block` class to the error element
                error.addClass("help-block");

                // Add `has-feedback` class to the parent div.form-group
                // in order to add icons to inputs
                element.parents(".col-md-6").addClass("has-feedback");
                element.parents(".col-md-8").addClass("has-feedback");
                element.parents(".col-md-3").addClass("has-feedback");
                element.parents(".col-md-4").addClass("has-feedback");
                element.parents(".col-md-5").addClass("has-feedback");
                element.parents(".col-md-12").addClass("has-feedback");

                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("label"));
                } else {
                    error.insertAfter(element);
                }

                // Add the span element, if doesn't exists, and apply the icon classes to it.
                if (!element.next("span")[0]) {
                    $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
                }
            },
            success: function (label, element) {
                // Add the span element, if doesn't exists, and apply the icon classes to it.
                if (!$(element).next("span")[0]) {
                    $("<span class='glyphicon glyphicon-ok form-control-feedback'></span>").insertAfter($(element));
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents(".col-md-6").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-8").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-3").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-4").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-5").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-md-12").addClass("has-error").removeClass("has-success");
                $(element).parents(".col-lg-12").addClass("has-error").removeClass("has-success");
                $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");

            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents(".col-md-6").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-8").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-3").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-4").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-5").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-md-12").addClass("has-success").removeClass("has-error");
                $(element).parents(".col-lg-12").addClass("has-success").removeClass("has-error");
                $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
            }
        });
    });
})();
