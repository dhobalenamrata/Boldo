var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

    /////////////////////////////////////////////////////

    //  
    $('.cardContainer').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
              
    ///////////////////////////////////////////////

    // accordion 2 started here
    var acc2 = document.getElementsByClassName("accordion2");
    var i2;

    for (i2 = 0; i2 < acc2.length; i2++) {
        acc2[i2].addEventListener("click", function() {
            this.classList.toggle("newActive");
            var panel2 = this.nextElementSibling;
            if (panel2.style.display === "block") {
                panel2.style.display = "none";
            } else {
                panel2.style.display = "block";
            }
        });
    }
}

// /////////////////////////////////////////////
// Loadmore function

$(document).ready(function() {
    $(".b-card").slice(0, 3).show();
    $("#loadMore").on("click", function(e) {
        e.preventDefault();
        $(".b-card:hidden").slice(0, 3).slideDown();
        if ($(".b-card:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });

});
