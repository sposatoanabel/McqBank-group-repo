/**
 * @name:   testdetails.js
 * @desc:
 */


(function () {



    function starRating() {
        $('input').on('change', function(){
            alert("Changed: " + $(this).val())
        });
    } //starRating



    function initialiser(){
        starRating();

    }//init


    window.addEventListener("load", initialiser);

})();
