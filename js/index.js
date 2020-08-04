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