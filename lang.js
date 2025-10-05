let currentLang = localStorage.getItem("lang") || "en";
$('.lang-switch button').removeClass('active');
$('.lang-switch button[data-lang="' + currentLang + '"]').addClass('active');

$(function() {
  let currentLang = localStorage.getItem("lang") || "en";

  $("[lang='" + currentLang + "']").show();

  $(".lang-btn").on("click", function() {
    let newLang = $(this).data("lang");
    if (newLang !== currentLang) {
      $('.lang-switch button').removeClass('active');
      $('.lang-switch button[data-lang="' + newLang + '"]').addClass('active');

      $("[lang='" + currentLang + "']").fadeOut(200, function() {
        $("[lang='" + newLang + "']").fadeIn(200);
      });
      currentLang = newLang;
      localStorage.setItem("lang", newLang);
    }
  });
});