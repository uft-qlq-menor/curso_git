$(document).ready(function() {
     window.pausar = function() {
        document.getElementById("video").pause();
    };
	// Go to Top
	// Scroll Event
	$(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.circle-shape').addClass('down');
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) {
            $('.go-top').removeClass('active');
            $('.circle-shape').removeClass('down');
        }
	});  

	// Click Event
	$('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
        
    });

    // Preloader
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });

 // Preloader Area 02
	$(window).on('load', function() {
		$('.preloader2').addClass('preloader2-deactivate');
	});

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area').addClass("is-sticky");
            $('.btn-contact').addClass("btn-default-theme");
            $('.btn-contact').removeClass("btn-transparent");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
            $('.btn-contact').removeClass("btn-default-theme");
            $('.btn-contact').addClass("btn-transparent");
        }
    });
            
    // Go to Top
	// Scroll Event
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
    }); 
    
   // Sidebar Mobile
    var mobilesidebar = mobilesidebar || {};
    ! function(e) {
        "use strict";
        e(function() {
            var i = e("body"),
                a = e(window),
                t = e("#masthead"),
                n = e("#primary-mobile-nav"),
                s = e(".post-type-archive-project .content-area .list-project");
            a.scroll(function() {
                e(window).scrollTop() > e(window).height() ? e("#scroll-top").addClass("show-scroll") : e("#scroll-top").removeClass("show-scroll")
            }), e("#scroll-top").on("click", function(i) {
                i.preventDefault(), e("html, body").stop().animate({
                    scrollTop: 0
                }, 1200)
            }), a.on("resize", function() {
                a.on("scroll", function() {
                    var n = e(".site-contact").outerHeight(!0),
                        s = e(".topbar").outerHeight(!0),
                        o = n + s;
                    a.width() <= 1200 && (o = i.hasClass("hide-topbar-mobile") ? 0 : s), a.scrollTop() > o ? (t.addClass("minimized"), e("#fh-header-minimized").addClass("minimized")) : (t.removeClass("minimized"), e("#fh-header-minimized").removeClass("minimized"))
                });
                var n;
                if (a.width() < 1200) {
                    n = t;
                    var s = e(".header-transparent .site-header"),
                        o = e(".topbar").outerHeight(!0);
                    i.hasClass("hide-topbar-mobile") && (o = 0), i.hasClass("admin-bar") ? s.css({
                        top: o + 42
                    }) : s.css({
                        top: o + 10
                    })
                } else n = e(".site-menu").outerHeight(!0);
                i.hasClass("header-sticky") && e("#fh-header-minimized").height(n)
            }).trigger("resize"), e("ul.filter").on("click", "li", function(i) {
                i.preventDefault();
                var a = e(this),
                    t = a.attr("data-option-value");
                a.hasClass("active") || (a.closest(".filters-dropdown").next(".list-project").isotope({
                    filter: t
                }), a.addClass("active").siblings(".active").removeClass("active"))
            }),
            
            e("#off-canvas-layer").on("click", function(e) {
                    e.preventDefault(), i.removeClass("display-mobile-menu")
                }), i.on("click", ".navbar-toggle .navbars-icon", function(a) {
                    a.preventDefault(), e(this).toggleClass("selected-mobile"), i.toggleClass("display-mobile-menu")
                }), e("ul.menu li.menu-item-has-children a").addClass("dropdown-toggle"),
                function() {
                    n.find(".menu .menu-item-has-children").prepend('<span class="toggle-children "><i class="fa fa-angle-right" aria-hidden="true"></i></span>'), n.find(".menu .menu-item-has-children").each(function() {
                        var i = "";
                        e(this).children("a").hasClass("dropdown-toggle") && (i = e(this).children(".dropdown-toggle").html()), e(this).children("ul").prepend('<li class="menu-parent-items">' + i + "</li>"), e(this).children("ul").prepend('<li class="menu-back">' + mobilesidebar.mobilesidebar_back + "</li>")
                    }), n.find(".menu .menu-item-has-children").on("click", ".toggle-children", function(i) {
                        i.preventDefault(), e(this).parent("li").addClass("over-menu"), e(this).parents(".menu").addClass("over-submenu")
                    }), n.find(".menu .menu-item-has-children").on("click", ".menu-back", function(i) {
                        i.preventDefault(), e(this).closest("ul").closest("li").removeClass("over-menu"), n.find(".menu .menu-item-has-children").hasClass("over-menu") || n.find(".menu").removeClass("over-submenu")
                    }), n.on("click", ".close-canvas-mobile-panel", function(e) {
                        e.preventDefault(), i.toggleClass("display-mobile-menu")
                    })
                }(),
                function() {
                    var a = e("#modal"),
                        t = a.find(".modal-body");
                    e(".woocommerce").on("click", ".product-quick-view", function(n) {
                        n.preventDefault(), a.fadeIn().addClass("in"), t.html('<div class="ajax-loading"><i class="fa fa-spin fa-spinner"></i></div>'), i.addClass("modal-open"), e.get(e(this).attr("data-href"), function(i) {
                            if (i) {
                                var n = e(i).find(".product-details");
                                t.html(n);
                                var s = a.find(".modal-content").height(),
                                    o = (e(window).height() - s) / 2;
                                o < 0 && (o = 0), a.find(".modal-content").css({
                                    "margin-top": o
                                })
                            }
                        })
                    }), a.on("click", "button.close", function(t) {
                        t.preventDefault(), a.fadeOut(500, function() {
                            i.removeClass("modal-open"), a.removeClass("in"), e(window).trigger("resize")
                        })
                    })
                }()
        })
    }(jQuery);
    
      //Nav desplazamiento
      $('.nav-local').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var target2 = $(target);

        $('html, body').stop().animate({
            'scrollTop': target2.offset().top-150
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
      
    //Owl Carousel 01
        $('.single-clientes').owlCarousel({
        loop:true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 6000,
        animateIn: 'fadeInLeft',
        animateOut: 'fadeOutLeft',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
   
    var contador = 0;
    $(".monthly_price").hide();
    $(".mensual_text").hide();
    $('#check_tipo_pago').click(function(e) {
        contador++;
        if(contador == 1){
            contador = 1;
          } else {
            contador = 0;
          }
        console.log('cambio '+contador);
        if(contador == 1){ //Mensual
            $(".can-toggle__switch").addClass("mensual");
            $(".monthly_price").show("fade");
            $(".annual_price").hide("fade");
            $(".monthly_plan_basic").html('<h2 class="price">S/.60</h2>');
            $(".monthly_plan_emprededor").html('<h2 class="price">S/.90</h2>');
            $(".monthly_plan_empresarial").html('<h2 class="price">S/.120</h2>');
            /* antes */
            $(".mensual_text").show("fade");
            $(".anual_text").hide("fade");
            $(".monthly_antes_basic").html('Antes <span class="text-line-through">S/.90</span>');
            $(".monthly_antes_emprendedor").html('Antes <span class="text-line-through">S/.120</span>');
            $(".monthly_antes_empresarial").html('Antes <span class="text-line-through">S/.247</span>');
          }else { //Anual
            $(".can-toggle__switch").removeClass("mensual");
            $(".monthly_price").hide("fade");
            $(".annual_price").show("fade");
            $(".annual_plan_basic").html('<h2 class="price">S/.576</h2>');
            $(".annual_plan_emprededor").html('<h2 class="price">S/.864</h2>');
            $(".annual_plan_empresarial").html('<h2 class="price">S/.1152</h2>');
            /* Antes*/
            $(".mensual_text").hide("fade");
            $(".anual_text").show("fade");
            $(".annual_antes_basic").html('Antes <span class="text-line-through">S/.650</span><br><span class="font-weight-bold color-success">20% de descuento</span>');
            $(".annual_antes_emprendedor").html('Antes <span class="text-line-through">S/.900</span><br><span class="font-weight-bold color-success">20% de descuento</span>');
            $(".annual_antes_empresarial").html('Antes <span class="text-line-through">S/.1350</span><br><span class="font-weight-bold color-success">20% de descuento</span>');
        }
    });
});