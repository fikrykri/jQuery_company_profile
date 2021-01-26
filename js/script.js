function animasiIntro() {
  // membuat animasi slideleft in pada text utama intro
  $("#text span").velocity("transition.slideLeftIn", {
    stagger: 100,
    complete: function () {
      animasiBtnStart();
    },
  });
}

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

$(document).ready(function () {
  animasiIntro();
});

/**
 * stagger satuannya mili sec
 * complete akan dijalankan apabila effect dari velocity parentnya selesai
 */
