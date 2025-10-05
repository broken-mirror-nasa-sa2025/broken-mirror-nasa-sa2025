$(function () {
  $(".slider-container").each(function () {
    const $slider = $(this);
    const $leftImg = $slider.find(".left-img");
    const $rightImg = $slider.find(".right-img");
    const $handle = $slider.find(".slider-handle");

    function moveHandle(e) {
      const rect = $slider.find(".slider-images")[0].getBoundingClientRect();
      let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      $handle.css("left", x + "px");
      $leftImg.css("clip-path", `inset(0 ${rect.width - x}px 0 0)`);
      $rightImg.css("clip-path", `inset(0 0 0 ${x}px)`);
    }

    function stopDrag() {
      $(document).off("mousemove touchmove", moveHandle);
      $(document).off("mouseup touchend", stopDrag);
    }

    $handle.on("mousedown touchstart", function (e) {
      e.preventDefault();
      $(document).on("mousemove touchmove", moveHandle);
      $(document).on("mouseup touchend", stopDrag);
    });

    $slider.find(".btn-sar").on("click", function () {
      $leftImg.attr("src", $slider.data("sar-left"));
      $rightImg.attr("src", $slider.data("sar-right"));
      $slider.find(".tab-buttons button").removeClass("active");
      $(this).addClass("active");
    });

    $slider.find(".btn-optics").on("click", function () {
      $leftImg.attr("src", $slider.data("optics-left"));
      $rightImg.attr("src", $slider.data("optics-right"));
      $slider.find(".tab-buttons button").removeClass("active");
      $(this).addClass("active");
    });
  });
});
