$("#banner").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500
});

$("#work").slick({
    slidesToShow: 4,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    // 響應式 RWD
    responsive: [
        // 平板：小於 1025
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        // 手機：小於 767
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".mini_box").slick({
    slidesToShow: 4,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1000,
    pause: false,
    // 響應式 RWD
    responsive: [
        // 平板：小於 1025
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        // 手機：小於 767
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// bootstrap 輪播(淡入淡出)
 $("#carouselExampleFade").carousel({
    interval: 3000,
    pause: false
 });

// 捲動效果

// 使用者滑鼠滾動時 停止所有動畫
$("html").on("mousewheel", function () {
    $("html").stop();
});

var arrow = $("#arrow")
arrow.fadeOut();

// 箭頭顯示與隱藏效果
$(window).scroll(function () { 
    var windowTop = $(this).scrollTop();
    // console.log("視窗的上方:" + windowTop)
 
    var arrowTop = arrow.attr("data-st-top");
    var arrowTime = arrow.attr("data-st-time");
    var arrowTimeInt = parseInt(arrowTime); //將時間轉為數字(整數)
 
    //console.log(arrowTop)
    //console.log(arrowTime)
 
 
    //如果 視窗位置 大於等於 箭頭上方 就 淡入
    if(windowTop >= arrowTop) arrow.stop().fadeIn(arrowTimeInt);
    //否則就淡出
    else arrow.stop().fadeOut(arrowTimeInt)
 });