$(window).scroll(function () {
  $(".mov").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 500) {
      $(this).addClass("movOp");
      setTimeout(carl, 3100);
    }
  });
});

function carl() {
  let cardG = $(".cardGames");
  let i = 0;
  let hah = setInterval(() => {
    $(cardG[i]).addClass("rrr");
    i = i+1;
  }, 250);
  setTimeout(() => {
     clearInterval(hah);
  }, 11000);
}
