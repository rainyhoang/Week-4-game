$(document).ready(function() {


    //declare winscore

    var targetnumber = Math.floor(Math.random() * 120) + 9 ;

    $("#winscore").text(targetnumber);

    var counter = 0;

    var numberOption = Math.floor(Math.random() * 12) + 1;

//    create value for each Crystal

    for (var i = 0; i< numberOption.length; i++){
            var imageCrystalBlue = $("<img>");
            imageCrystalBlue.addClass("crystalimage");
            imageCrystalBlue.attr("scr", "image/bluecrystal.png");
            imageCrystalBlue.attr("data-crystalvalue"), numberOption[i];
            $("#button-blue").append(imageCrystalBlue);

            var imageCrystalYellow = $("<img>");
            imageCrystalYellow.addClass("crystalimage");
            imageCrystalYellow.attr("scr", "image/yellowcrystal.png");
            imageCrystalYellow.attr("data-crystalvalue"), numberOption[i];
            $("#button-blue").append(imageCrystalYellow);

            console.log(imageCrystalYellow)

            var imageCrystalRed = $("<img>");
            imageCrystalRed.addClass("crystalimage");
            imageCrystalRed.attr("scr", "image/redcrystal.png");
            imageCrystalRed.attr("data-crystalvalue"), numberOption[i];
            $("#button-red").append(imageCrystalRed);

            var imageCrystalGreen = $("<img>");
            imageCrystalGreen.addClass("crystalimage");
            imageCrystalGreen.attr("scr", "image/greencrystal.png");
            imageCrystalGreen.attr("data-crystalvalue"), numberOption[i];
            $("#button-green").append(imageCrystalGreen);
    }
    
  /* $(".crystal-image").on("click", function() {
      
   }*/

    
  
    
});