$(".header-menu").tap(function () {

    $(".nav").css({
        "display": "block"
    });
    $(".nav-list").animate({
        width: "50%"
    }, 200)
});
$(".nav-close").tap(function () {
    // console.log(1);
    $(".nav-list").animate({
        width: 0
    }, 200);
    setTimeout(() => {
        $(".nav").css({
            "display": "none"
        });
    }, 300);

})