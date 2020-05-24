// make the elements of the page fade in to for a more atmospheric user experience.

// $(".navbar").hide().fadeIn(1000);

// $(".fade-jumbo").hide().fadeIn(1000);

// $(".thmimg").hide().fadeIn(2000); // thumbnail fade in

// $(".title").hide().fadeIn(2000); // title fade in

// $(".proj-header").hide().fadeIn(2000); // title fade in

// $(".img-logo-md").hide().fadeIn(2000); // title fade in

// $(".subtledots").hide().fadeIn(1000); // bg fade in

// $(".white").hide().fadeIn(1000); // title fade in

  $(document).ready(function () {
    // fade in nav bar and jumbotron
    $('div.fade1').hide().fadeIn(500).removeClass('fade1');
    $('div.fade2').hide().fadeIn(2000).removeClass('fade2');
    $('div.fade3').hide().fadeIn(3000).removeClass('fade3');

    // fade in each portfolio thumbnail
    $('.fadein').each(function(i) {
      $(this).hide().fadeOut(0).delay(500*i).fadeIn(2000);
    });
    $('.fadein2').each(function(i) {
      $(this).hide().fadeOut(0).delay(750*i).fadeIn(1250);
    });
    $('.fadein3').each(function(i) {
      $(this).hide().fadeOut(0).delay(500*i).fadeIn(500);
    });

    $(document).on("click", "a", function () {
      // get the href attribute
      var newUrl = $(this).attr("href");
      // veryfy if the new url exists or is a hash
      if (!newUrl || newUrl[0] === "#") {
          // set that hash
          location.hash = newUrl;
          return;
      }
      // now, fadeout the html (whole page)
      $("body").fadeOut(function () {
          // when the animation is complete, set the new location
          location = newUrl;
      });
      // prevent the default browser behavior.
      return false;
  });
      // open links in new tabs
      $('#forgetfultypewriter').click(function(){
      window.open("http://www.forgetfultypewriter.com");
      });

      $('#icchp').click(function(){
      window.open("http://www.icchp.com");
      });

      $('#johnhoward').click(function(){
      window.open("http://www.johnhowardartist.com");
      });

});
