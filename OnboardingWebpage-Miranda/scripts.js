//Nav
$("#navHTML").load("nav.html", function () {
    alert("Load was performed.");
});
//Nav - hamburger stack
function showStackMenu() {
    document.querySelector(".menuNav__menu").style.display = "block";
}
/*

//Modules
if module numbers "mod__intro__cta"
is clicked...then show THAT mod__contnet

//Modules styles...
mod__content__title...put in mod__intro__img, mod__intro__modNum, mod__intro__modTitle

*/



//Show module content when  button is clicked
function showModContent() {
    document.querySelector(".mod__intro").style.display = "none";
    document.querySelector(".mod__content").style.display = "block";

    if (document.querySelector(".mod__content").style.display === "block") {
        //Modules Completed CTA gets checked
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
                $(window).unbind('scroll');
                $('.cta__secondary').addClass("cta__secondary-complete");
            }
        });

    }
}
