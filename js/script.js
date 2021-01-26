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
        {
          duration: 1000,
          complete: function () {
            callMenu();
            // selector mencari hal yang percis dan men triggernya dengan click pada saat function call menu sudah beres dijalankan
            $("#menu ul li a[href='what-we-do.html']").trigger("click");
          },
        }
      );
    },
  });
}

// animasi pada nav menu list
function callMenu() {
  $("#menu ul li").velocity("transition.slideLeftIn", {
    stagger: 200,
  });

  // function menambahkan class pada element yang di click
  $("#menu ul li a").click(function () {
    // menghapus class active yang pada element yang serupa kecuali yang di click nya
    $(this).parent("li").addClass("active").siblings().removeClass("active");
    // $(this).parent("li").siblings().removeClass("active"); penggunaan script yang tidak efisien
  });
}

$(document).ready(function () {
  animasiIntro();
});

/**
 * stagger satuannya mili sec
 * complete akan dijalankan apabila effect dari velocity parentnya selesai
 * siblings mencari element yang serupa misalkan li dia akan mencari element li lainnya
 */
