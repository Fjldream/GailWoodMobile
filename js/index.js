$(".header-left").tap(function () {
    if (flag == 0) {
        $(".left-btn1").css({
            "transform": "rotate(90deg) ",
        });
        setTimeout(function () {
            $(".left-btn1").css({
                "display": "none",
            });
            $(".left-btn2").css({
                "display": "block",
            })
        }, 100);
        setTimeout(function () {
            $(".left-btn2").css({
                "transform": "rotate(90deg) "
            })
        }, 100)
        flag = 1;
        $(".broadnav").css({
            "display": "block"
        }).animate({
            width: "2.32rem"
        }, 200)
    } else {
        $(".left-btn2").css({
            "transform": "rotate(0deg) "
        })
        setTimeout(function () {
            $(".left-btn2").css({
                "display": "none",
            });
            $(".left-btn1").css({
                "display": "block",
            })
        }, 100);
        setTimeout(function () {
            $(".left-btn1").css({
                "transform": "rotate(0deg) "
            })
        }, 100)
        flag = 0
        $(".broadnav").css({
            "display": "block"
        }).animate({
            width: "0rem"
        }, 100)
    }
})
//


function moveA() {
    //console.log(document.documentElement.scrollTop);
    var st = document.documentElement.scrollTop;
    //console.log($(".menu-list"));
    $(".menu-list").css({
        "background": "none"
    })
    if (st >= 0 && st < 650) {
        $(".menu-list").eq(0).css({
            "background-color": "#FC745E"
        })
    }
    if (st > 649 && st < 1420) {
        $(".menu-list").eq(1).css({
            "background-color": "#FC745E"
        })
    }
    if (st > 1419 && st < 2770) {
        $(".menu-list").eq(2).css({
            "background-color": "#FC745E"
        })
    }
    if (st > 2770) {
        $(".menu-list").eq(3).css({
            "background-color": "#FC745E"
        })
    }
}
window.onscroll = moveA;
$(".menu-list").eq(0).attr("num", 0);
$(".menu-list").eq(1).attr("num", 650);
$(".menu-list").eq(2).attr("num", 1420);
$(".menu-list").eq(3).attr("num", 2771);

$(".menu-list").click(function () {
    window.onscroll = null;
    $(".menu-list").css({
        "background": "none"
    })
    console.log($(this).attr("num"));
    var num = $(this).attr("num");
    $(this).css({
        "background": "#FC745E"
    })
    animate(document.documentElement, {
        scrollTop: num
    }, 500, Tween.Linear, function () {
        window.onscroll = moveA;
    })

})

// console.log($(".menu-list").eq(0).attr("num"))