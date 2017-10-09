/**
 * @name:   account.js
 * @desc:
 */


(function () {


    /**
     * @name:   scrollBtn()
     * @desc:   Scrolling to-top button appears
     */
    //#to-top button appears after scrolling -----------------------------------------------------------------------///

    function scrollBtn() {
        var
            fixed = false ;

        $(document).scroll(function() {
            if ($(this).scrollTop() > 250) {
                if (!fixed) {
                    fixed = true;
                    // $('#to-top').css({position:'fixed', display:'block'});
                    $('#to-top').show("slow", function() {
                        $('#to-top').css({
                            position: 'fixed',
                            display: 'block'
                        });
                    });
                } // if (!fixed)
            } else {
                if (fixed) {
                    fixed = false;
                    $('#to-top').hide("slow", function() {
                        $('#to-top').css({
                            display: 'none'
                        });
                    });
                } // if
            } // else
        }); //scroll
    } //scrollBtn



    /**
     * @name:   navScroll()
     * @desc:   Automatic Nav - When clicked scrolls down to section of page
     */

    function navScroll() {
        $(".navTop").on("click",
            // capturing the event
            function(evt){
                // disabling anchors default behaviour
                evt.preventDefault();

                // fetching the element we clicked on
                console.log( $(this).attr("href") );


                var t = $(this).attr("href");


                //animating the whole content of the website
                $("html, body").animate(
                    // object with params
                    {
                        "scrollTop" :
                        $(t)
                            .offset().top -45
                    },
                    // duration
                    1000

                ); // animate
            } //function
        ); //.navTop
    } //navScroll




    function initialiser(){
        scrollBtn();
        navScroll();

    }//init


    window.addEventListener("load", initialiser);

})();