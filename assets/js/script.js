/**
 * @name    script.js
 * @desc    script that handles the 'Read More' button
 *
 */

(function(){
    var


    $myAccountBtn       =   $("#myAccountBtn"),
    $userBtn            =   $("#userBtn"),
    $examInfoBtn        =   $("#examInfoBtn"),
    $burgerSpan         =   $("#burgerSpan"),
    $readMoreBtn        =   $(".readMoreBtn"),
    $subscribeBtn       =   $("#subscribeBtn"),





    burgerMenu       =  function () {

            $burgerSpan.click(function(){
                $(this).toggleClass('open');
            });
    },//burgerMenu


    changeGlyf      =   function(){

        var
            acctGlyf    = $(this).find('b:first')
        ;

        if (acctGlyf.hasClass('glyphicon glyphicon-chevron-down')) {
            acctGlyf.removeClass('glyphicon glyphicon-chevron-down');
                acctGlyf.addClass('glyphicon glyphicon-chevron-up');

        } else if (acctGlyf.hasClass('glyphicon glyphicon-chevron-up')) {
                acctGlyf.removeClass('glyphicon glyphicon-chevron-up');
                acctGlyf.addClass('glyphicon glyphicon-chevron-down');
        }

    },//changeGlyf



    readMoreFoo        =   function (par, btn) {

                par
                .slideToggle("slow")
                .toggleClass("visible");
            if (par.hasClass("visible")){
                btn.html("Read Less... ");
            } else {
                btn.html("Read More... ");
            }
    },//readMoreFoo

    countdownTimer  =   function(){

        $('#countdownDiv').countdown('2017/11/30')
            .on('update.countdown', function(event) {
                var format = '%D';
                if(event.offset.totalDays < 100) {
                    format = '0' + format;
                }

                $(this).html(event.strftime(format));

            })
            .on('finish.countdown', function(event) {
                $('#remain').html('Date for next exam coming soon!')
                    .parent().addClass('disabled');

            });



    },//countdownTimer


        arrowUp = function () {
            //Check to see if the window is top if not then display button
            $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });

            //Click event to scroll to top
            $('.scrollToTop').click(function(e){
                e.preventDefault();
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

        },//arrowUp


    bindBtns   =   function () {

         $readMoreBtn.click(function () {
             var
                 thisPar = $(this).parent().find(".infoMore"),
                 thisBtn =  $(this)
             ;
             readMoreFoo(thisPar, thisBtn);
            });
         $userBtn.click(changeGlyf);
         $myAccountBtn.click(changeGlyf);
         $examInfoBtn.click(changeGlyf);



     },//bindBtns


    init        =   function(){

        arrowUp();
        burgerMenu();
        countdownTimer();
        bindBtns();

        }//init
    ;
    window.addEventListener("load", init);
})();