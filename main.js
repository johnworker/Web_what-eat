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