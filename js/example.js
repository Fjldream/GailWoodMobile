$(".list-img").tap(function () {
    console.log($(this).attr("src"));
    console.log($(this).next().text());
    $(".bigPic").children("img").attr("src", $(this).attr("src"))
    $("#bigcontext").html($(this).next().text());
    $(".magnifyPic").css("display", "block");
    setTimeout(function () {
        $(".bigPic").css("transform", "scale(1) translateY(-50%)");
    }, 200)

    $(".bigPic-close").tap(function () {
        $(".bigPic").css("transform", "scale(0) translateY(-50%)");
        setTimeout(function () {
            $(".magnifyPic").css("display", "none");
        }, 1000);
    })
})