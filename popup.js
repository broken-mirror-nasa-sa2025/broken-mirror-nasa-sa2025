$(function(){
  $(".popup-word").hover(function(e){
    const popupId = $(this).data("popup");
    const $popup = $("#" + popupId);
    
    const offset = $(this).offset();
    $popup.css({
      top: offset.top + $(this).height() + 6,
      left: offset.left
    }).fadeIn(200);
  }, function(){
    const popupId = $(this).data("popup");
    $("#" + popupId).fadeOut(200);
  });
});
