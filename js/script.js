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
  // perintah dibawah agar tombol start tidak bisa di klik terus menerus
  $("#start").attr("disabled", true).css({ color: "black" });

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
            $("#menu ul li a[href='whatWeDo']").trigger("click");

            // perintah dibawah mengizinkan kembali tombol untuk bisa di klik lagi
            $("#start").attr("disabled", false).css({ color: "black" });
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
  $("#menu ul li a")
    .off()
    .click(function (event) {
      // menstop default dari tag element yang di click
      event.preventDefault();

      // menghapus class active yang pada element yang serupa kecuali yang di click nya
      $(this).parent("li").addClass("active").siblings().removeClass("active");
      // $(this).parent("li").siblings().removeClass("active"); penggunaan script yang tidak efisien

      if (hrefString == "backToIntro") {
        backToIntro();
      } else {
        var hrefString = $(this).attr("href");
        if (!$("#" + hrefString).is(":visible")) {
          $(".container-content").fadeOut(1000);

          setTimeout(() => {
            $("#" + hrefString).show();

            // pendeklarasian ini akan merubah menjadi bentukan function
            window[hrefString]();
          }, 1000);
        }
      }
    });
}

// membuat animation untuk menampilkan halaman whatWeDo
function whatWeDo() {
  $("#whatWeDo img").velocity("transition.flipYIn", { duration: 1500 });
  $("#whatWeDo .title").velocity("transition.slideUpIn", { duration: 1500 });
  $("#whatWeDo div").velocity("transition.slideDownIn", { duration: 1500 });
}

// membuat animation untuk menampilkan halaman ourTeam
function ourTeam() {
  $(".members.top240").velocity("transition.slideUpIn", { stagger: 100 });
  $(".members.top170").velocity("transition.slideDownIn", { stagger: 100 });
}

// membuat animation untuk kembali ke halaman intro
function backToIntro() {
  $("#menu ul li").hide();
  $(".container-content").hide();

  $("#text").velocity(
    { "font-size": "90px", top: "50%" },
    {
      duration: 1000,
      complete: function () {
        $("#start").velocity("transition.whirlIn");
      },
    }
  );
}

$(document).ready(function () {
  animasiIntro();
});

/**
 * stagger satuannya mili sec
 * complete akan dijalankan apabila effect dari velocity parentnya selesai
 * siblings mencari element yang serupa misalkan li dia akan mencari element li lainnya
 * show() merubah display yang asalnya none menjadi block
 * off() ketika fungsi yang dipilih fungsi tsb akan off terlebih dahulu
 */
