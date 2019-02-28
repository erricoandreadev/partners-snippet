import './node_modules/animate.css/animate.css';
import './scss/main.scss';


const SPLITTER = `<div class="w-100 splitter">ciao</div>`;

$(function () {
    console.log("exec");


    $(".partner").click(function () {
        // console.log($( this ));

        //
        // $(".splitter").remove();
        //
        // $(SPLITTER).insertBefore($(this));
        // $(SPLITTER).insertAfter($(this));
        //

        let haveSelected = $(this).hasClass("selected");

        $(".selected").each(function (index) {
            $(this).removeClass("selected");
        });

        if (!haveSelected)
            $(this).toggleClass("selected");

    });

    $("#btnremove").click(function () {
        $(".splitter").remove();
    });

    // let partners = document.querySelectorAll(".partner") || [];
    //
    // let delaySeconds = .5;
    //
    // for (let i = 0; i < partners.length; i++) {
    //     let partner = partners[i];
    //     let delay = delaySeconds*i;
    //
    //     partner.style.animationDelay = delay+"s";
    // }


    // setTimeout(() => { $(".splitter").show()}, 5000);

});

