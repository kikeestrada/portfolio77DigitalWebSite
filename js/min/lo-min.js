$(".customer-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,mobileFirst:!0,arrows:!1,centerPadding:10,autoplay:!0,responsive:[{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,dots:!0}},{breakpoint:900,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1180,settings:{slidesToShow:3,slidesToScroll:1,arrows:!0,dots:!1}}]}),data-client="radioshack",$(".client-item").on("click",function(){var i=$(this).data("client");$(".client-item.active").removeClass("active"),$(this).addClass("active"),$(".client-thumbnail .active").removeClass("active"),$(".client-thumbnail ."+i).addClass("active")});