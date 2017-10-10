/**
 * @name:   testhistory.js
 * @desc:
 */


(function () {


    var
        selectIds                =   $("#panel1, #panel2, #panel3");

    function bindBtns () {
        selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
            $(this).prev().find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
        });
    } //bindBtns


    function initialiser(){
        bindBtns();
    }//init

    window.addEventListener("load", initialiser);


})();