$( document ).ready(function() {


     var apirandom = "https://flynn.boolean.careers/exercises/api/random/int";

      $(".square").click(function() {

        var thisQuare = $(this);
        var thisScore = thisQuare.find(".score");
        console.log(thisScore);
        $.ajax(
         {
            url : apirandom,
            method: "GET",
            success: function(data){
              var numapi = data.response;
              // console.log("num api", numapi);

              if (numapi > 5) {
                thisQuare.addClass("green");
                thisScore.text(numapi);
              } else if (numapi <= 5) {
                thisQuare.addClass("red")
                thisScore.text(numapi);
              }
            },
            error: function() {}
        });
      })
});
