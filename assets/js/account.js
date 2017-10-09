/**
 * @name:   account.js
 * @desc:
 */


(function () {

    var
        panels                   =   document.querySelectorAll(".expand"),
        minus                    =   document.querySelectorAll(".displayMinus"),
        plus                     =   document.querySelectorAll(".displayPlus"),
        displaySign              =   "none",
        selectIds                =   $("#panel1,#panel2,#panel3,#panel4,#panel5,#panel6,#panel7,#panel8,#panel9,#panel10,#panel11,#panel12,#panel13,#panel14,#panel15,#panel16,#panel17,#panel18,#panel19,#panel20"),

        bindBtns    =   function () {

            $("#buttonRead").on("click",readMoreToggle);

            selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
                $(this).prev().find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
            });



        }, //bindBtns


        readMoreToggle  =   function () {

            $(".moreAccountCont")
                .slideToggle("slow")
                .toggleClass("visible");


            if( $("#moreAccountCont").hasClass("visible")) {
                $("#buttonRead").html("Read Less");

            } else {

                $("#buttonRead").html("Read More");
            } //end if


            $(".moreAccountContXsmall")
                .slideToggle("slow")
                .toggleClass("visible");


            if( $("#moreAccountContXsmall").hasClass("visible")) {
                $("#buttonRead").html("Read Less");
            } else {
                $("#buttonRead").html("Read More");
            } //end if


        } ; //readMoreToggle




    function initialiser(){
        bindBtns();

    }//init


    window.addEventListener("load", initialiser);

})();