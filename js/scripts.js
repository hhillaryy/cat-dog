$(document).ready(function() {
  $("img.meow").click(function() {
    $("ul#cat").append("<li>Meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("img.bark").click(function() {
      $("ul#dog").append("<li>Greetings human!</li>");
      $("ul#dog").children("li").first().click(function() {
        $(this).remove();
      });
  });

  $("img.bark").click(function(){
    $(".nocuriousdog").toggle();
    $("#curiousdog").toggle().after();
  });

  $("img.meow").click(function(){
    $(".nocuriouscat").toggle();
    $("#curiouscat").toggle().after();
  });

});
