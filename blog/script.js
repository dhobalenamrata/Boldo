// Loadmore function

$(document).ready(function(){
    $(".card").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".card:hidden").slice(0, 3).slideDown();
      if($(".card:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })