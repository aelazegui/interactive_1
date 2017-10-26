


<!--Mousewheel "snap to position"-->

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var winHeight = $(window).height();
  var winHeight1 = winHeight*1;
  var winHeight2 = winHeight*2;
  var winHeight3 = winHeight*3;
  var winHeight4 = winHeight*4;
  var winHeight5 = winHeight*5;
  var winHeight6 = winHeight*6;
  var winHeight7 = winHeight*7;
  var winHeight8 = winHeight*8;
  var winHeight9 = winHeight*9;

  if (scroll <= winHeight-50 && scroll <= winHeight+50) {
    $(".scene").removeClass("active");
    $(".scene1").addClass("active");


    $(".img-shoulders-indark").addClass("turnon-opener");
    $(".img-headwrap-bg-L").addClass("turnoff");

    $(".img-headwrap-bg-L").addClass("fadeInDown");
    $(".img-headwrap-bg-R").addClass("fadeInDown");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".scene1 .txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-1");
  }

  if (scroll >= winHeight-325 && scroll <= winHeight+325) {
    $(".scene").removeClass("active");
    $(".scene2").addClass("active");

    $(".img-sikhturban-bg-B").addClass("fadeInUp");
    $(".img-sikhturban-bg-R").addClass("fadeInRight");
    $(".img-sikhturban-bg-L").addClass("fadeInLeft");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".scene2 .txt-secondread").addClass("fadeIn-secondread");
    $(".scene1 .txt-secondread").removeClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-2");

    $('html, body').animate({
        scrollTop: $(".scene2").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight2-325 && scroll <= winHeight2+325) {
    $(".scene").removeClass("active");
    $(".scene3").addClass("active");

    $(".img-hijab-eyes").removeClass("turnon");

    $(".img-dreads-bg").addClass("fadeInUp");
    $(".img-dreads-bgsc").addClass("fadeInLeft");


    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-3");

    $('html, body').animate({
        scrollTop: $(".scene3").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight3-300 && scroll <= winHeight3+300) {
    $(".scene").removeClass("active");
    $(".scene4").addClass("active");

    $(".img-hijab-eyes").addClass("turnon");

    $(".img-hijab-bg").addClass("fadeInUp");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-4");

    $('html, body').animate({
        scrollTop: $(".scene4").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight4-300 && scroll <= winHeight4+300) {
    $(".scene").removeClass("active");
    $(".scene5").addClass("active");

    $(".img-hijab-eyes").removeClass("turnon");

    $(".img-beardman-bg-L-w").addClass("fadeInLeft");
    $(".img-beardman-bg-L-m").addClass("fadeInUp-moon");
    $(".img-beardman-bg-R").addClass("fadeInRight");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-5");

    $('html, body').animate({
        scrollTop: $(".scene5").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight5-300 && scroll <= winHeight5+300) {
    $(".scene").removeClass("active");
    $(".scene6").addClass("active");

    $(".img-jew-bg").addClass("fadeInUp");
    $(".img-jew-bg-bird").addClass("fadeInRight");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-6");

    $('html, body').animate({
        scrollTop: $(".scene6").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight6-300 && scroll <= winHeight6+300) {
    $(".scene").removeClass("active");
    $(".scene7").addClass("active");

    $(".img-niqab-eyes").removeClass("turnon");

    $(".img-monk-bg-top").addClass("fadeInUp");
    $(".img-monk-bg-bottom").addClass("fadeInDown");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-7");

    $('html, body').animate({
        scrollTop: $(".scene7").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight7-300 && scroll <= winHeight7+300) {
    $(".scene").removeClass("active");
    $(".scene8").addClass("active");

    $(".img-niqab-eyes").addClass("turnon");
    $(".img-afrowoman-eyes").removeClass("turnon");

    $(".img-niqab-bg-R").addClass("fadeInRight");
    $(".img-niqab-bg-L").addClass("fadeInLeft");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-9");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-8");

    $('html, body').animate({
        scrollTop: $(".scene8").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }

  if (scroll >= winHeight8-300 && scroll <= winHeight8+300) {
    $(".scene").removeClass("active");
    $(".scene9").addClass("active");

    $(".img-tattoo-eyes").removeClass("turnon");
    $(".img-niqab-eyes").removeClass("turnon");
    $(".img-afrowoman-eyes").addClass("turnon");

    $(".img-afro-bg-R").addClass("fadeInLeft");
    $(".img-afro-bg-L").addClass("fadeInRight");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-10");
    $("body").addClass("scene-change-9");

    $('html, body').animate({
        scrollTop: $(".scene9").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }


  if (scroll >= winHeight9-300 && scroll <= winHeight9+300) {
    $(".scene").removeClass("active");
    $(".scene10").addClass("active");

    $(".img-afrowoman-eyes").removeClass("turnon");
    $(".img-tattoo-eyes").addClass("turnon");

    $(".img-tattoo-bg-L").addClass("fadeInDown");
    $(".img-tattoo-bg-R").addClass("fadeInUp");

    $(".txt-firstread").addClass("fadeIn-firstread");
    $(".txt-secondread").addClass("fadeIn-secondread");

    $("body").removeClass("scene-change-1");
    $("body").removeClass("scene-change-2");
    $("body").removeClass("scene-change-3");
    $("body").removeClass("scene-change-4");
    $("body").removeClass("scene-change-5");
    $("body").removeClass("scene-change-6");
    $("body").removeClass("scene-change-7");
    $("body").removeClass("scene-change-8");
    $("body").removeClass("scene-change-9");
    $("body").addClass("scene-change-10");

    $('html, body').animate({
        scrollTop: $(".scene10").offset().top
    }, 200);
    $(window).bind("mousewheel", function() {
        $("html, body").stop();
    });
    return false;
  }


  });
