$(document).ready(function () {

    // function upDawgImage(){
    //     $(".UpDawg").hover(function () {
    //         $(".previewOne").animate({
    //             opacity: 0
    //         }, 200)
    //     }, function () {
    //         $(".landingImage").animate({
    //             "opacity": "1"
    //         }, 200);
    //     });
    // }

    $(".Giflix").hover(function () {
        $(".previewOne").animate({
            opacity: 0
        }, 250);
        $(".previewGiflix").animate({
            opacity: 1
        }, 250);
    }, function () {
        $(".previewOne").animate({
            "opacity": 1
        }, 250);
        $(".previewGiflix").animate({
            opacity: 0
        }, 250);
    });

    $(".UpDawg").hover(function () {
        $(".previewOne").animate({
            opacity: 0
        }, 250);
        $(".previewUpdawg").animate({
            opacity: 1
        }, 250);
    }, function () {
        $(".previewOne").animate({
            "opacity": 1
        }, 250);
        $(".previewUpdawg").animate({
            opacity: 0
        }, 250);
    });


    $(".test").on("click", function () {
        console.log("Working");
        UpDawgImage()
    });



});