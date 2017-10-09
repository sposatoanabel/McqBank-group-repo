/**
 * @name:   managesubscription.js
 * @desc:
 */


(function () {

    var
        panels                   =   document.querySelectorAll(".expand"),
        minus                    =   document.querySelectorAll(".displayMinus"),
        plus                     =   document.querySelectorAll(".displayPlus"),
        displaySign              =   "none",
        selectIds                =   $("#panel1, #panel2"),

        bindBtns    =   function () {

            $(".loadBtn").on("click",readMoreToggle);

            selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
                $(this).prev().find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
            });

        }, //bindBtns


        readMoreToggle  =   function () {


            $("#morePlans")
                .slideToggle("slow")
                .toggleClass("visible");


            if( $("#morePlans").hasClass("visible")) {

                $(".loadBtn").html("Load Less");

            } else {

                $(".loadBtn").html("Load More");
            } //end if


            $("#morePlansSm")
                .slideToggle("slow")
                .toggleClass("visible");


            if( $("#morePlansSm").hasClass("visible")) {

                $(".loadBtn").html("Load Less");

            } else {

                $(".loadBtn").html("Load More");
            } //end if

        } ; //readMoreToggle



    function radioWidget() {
        var radioWidgetObject  = new Spry.Widget.ValidationRadio("RadioWidget");
    } //radioWidget


    function radioWidget1() {
        var radioWidgetObject  = new Spry.Widget.ValidationRadio("RadioWidget1");
    } //radioWidget

    function initialiser(){
        bindBtns();
        radioWidget();
        radioWidget1();
    }//init


    window.addEventListener("load", initialiser);

})();