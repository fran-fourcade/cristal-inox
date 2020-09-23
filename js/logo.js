$logo = $("#logo");

$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $logo.html("<img src='./img/logos/inoglass color.png' alt='Logo'/>");
  } else {
    $logo.html("<img src='./img/logos/inoglass blanco.png' alt='Logo'/>");
  }
});
