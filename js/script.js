// animasi pada intro text
function animasiIntro() {
  // membuat animasi slideleft in pada text utama intro
  $("#text span").velocity("transition.slideLeftIn", {
    stagger: 100,
    complete: function () {
      animasiBtnStart();
    },
  });
}

// animasi pada tombol start into
function animasiBtnStart() {
  $("#start")
    .velocity("transition.bounceUpIn")
    // membuat animasi hover pada tombol start
    .mouseenter(function () {
      $(this).velocity({ width: 100 });
    })
    .mouseleave(function () {
      $(this).velocity({ width: 125 });
    });
}
// animasi whirlUot atau animasi menghilang
function animasiIntroOut() {
  $("#start").velocity("transition.whirlOut", {
    stagger: 100,
    complete: function () {
      // animasi intro text costume css
      $("#text").velocity(
        { "font-size": "20px", top: "95%" },
        { duration: 1000 }
      );
    },
  });
}

$(document).ready(function () {
  animasiIntro();
});

/**
 * stagger satuannya mili sec
 * complete akan dijalankan apabila effect dari velocity parentnya selesai
 */
