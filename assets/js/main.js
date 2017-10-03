/**
 * Created by asposato on 26/07/2017.
 */
(function ($) {

    var resizeNavBar = function () {

            $(window).resize(function () {
                var viewportWidth = $(window).width();
                if (viewportWidth < 767) {
                    $("#topNav").hide();
                    $("#btnSubscribe").removeClass("pull-right").addClass("pull-left");

                } else if (viewportWidth > 767) {
                    $("#topNav").show();
                }
            });
        }, //resizeNavBar()

        affixBottomNav = function () {
            $(document).ready(function () {
                $('#bottomNav').affix({offset: {top: 64}});
            });

        }, // affixBottomNav()

        switchClassHamIcon =
            function () {
                $(document).ready(function () {
                    $('#nav-icon1').click(function () {
                        $(this).toggleClass('open');
                    });

                });
            }, //switchClassHamIcon()

        bindReadMoreButton = function () {
            $("#readMoreBtn").click(function () {

                var readMoreTextElement = $(this).text();
                if (readMoreTextElement === "Read More") {
                    $(this).text("Read Less");
                    $("#infoMore").slideDown();
                } else {
                    $(this).text("Read More");
                    $("#infoMore").slideUp();
                }
            });

        }, // bindReadMoreButton()


        toggleAccordionIcon = function () {
            function toggleAccordionIcon(e) {
                $(e.target)
                    .prev('.panel-heading')
                    .find('.show-hide')
                    .toggleClass('fa-plus fa-minus'); // find 'show-hide' class element and swap the icon every time someone clicks
            }

            $('.panel-group').on('hidden.bs.collapse', toggleAccordionIcon);
            $(this).on('shown.bs.collapse', toggleAccordionIcon);

        }, // toggleAccordionIcon


        addActiveStateToTheAccordion = function () {

            $('#accordion .panel').on("click", function () {
                $(this).siblings().find(".panel-heading").removeClass("panel-heading-active");
                $(this).find(".panel-heading").toggleClass("panel-heading-active");

            });

            $('#questionAndAnswersMobile .panel').on("click", function () {
                $(this).siblings().find(".panel-heading").removeClass("panel-heading-active");
                $(this).find(".panel-heading").toggleClass("panel-heading-active");

            });

        },


        init = function () {
            resizeNavBar();
            switchClassHamIcon();
            affixBottomNav();
            bindReadMoreButton();
            toggleAccordionIcon();
            addActiveStateToTheAccordion();
        }
    ; // init()

    window.addEventListener("load", init);

})(jQuery); // IIFE function