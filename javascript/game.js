var $ = jQuery;

$(document).ready(function() {


    //declare winscore

    var targetnumber = Math.floor(Math.random() * 120) + 9 ;
    $("#winscore").text(targetnumber);
    var counter = 0;
    var win = 0;
    var lose = 0;
    
//    var card =["image/bluecrystal.png", "image/redcrystal.png", "image/yellowcrystal.png", "image/greencrystal.png"]
    
    
//random number
    var numberOption = function() {
        Math.floor(Math.random() * 12) + 1;
    }
    
    var numberRandom = numberOption();

//    create value for each Crystal

    for (var i = 0; i < numberRandom.length; i++) {
        
            var number = numberOption();   
        
            var imageCrystalBlue = $("<img>");
            imageCrystalBlue.addClass("crystal-image");
            imageCrystalBlue.attr("scr", "image/bluecrystal.png");
            imageCrystalBlue.attr("data-crystalvalue"), number[i];
            $("#button-blue").append(imageCrystalBlue);
            
        

            var imageCrystalYellow = $("<img>");
            imageCrystalYellow.addClass("crystal-image");
            imageCrystalYellow.attr("scr", "image/yellowcrystal.png");
            imageCrystalYellow.attr("data-crystalvalue"), number[i];
            $("#button-yellow").appendTo(imageCrystalYellow);
    


            var imageCrystalRed = $("<img>");
            imageCrystalRed.addClass("crystal-image");
            imageCrystalRed.attr("scr", "image/redcrystal.png");
            imageCrystalRed.attr("data-crystalvalue"), number[i];
            $("#button-red").append(imageCrystalRed);

            var imageCrystalGreen = $("<img>");
            imageCrystalGreen.addClass("crystal-image");
            imageCrystalGreen.attr("scr", "image/greencrystal.png");
            imageCrystalGreen.attr("data-crystalvalue"), number[i];
            $("#button-green").append(imageCrystalGreen);   
            
        
        
    }
    
// aDD IN ON-CLICK FUNCTION
    
    $(".crystal-image").on("click", function() {
                    
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            $("#result").text(counter);

        
// Condition to win the game
        
            if (counter === targetnumber){
                $("#win1").text("You have Win");
                reset();
                win++;
                $("#result").text(counter);
                
            }
        
            else if (counter >= targetnumber){
                $("#win1").text("You Lost");
                reset();
                lose++;
                $("#result").text(counter);

            }
        
            })
            
//setup function
            
            function reset(){
                targetnumber = Math.floor(Math.random() * 120) + 9 ;
                counter = 0;
                win = 0;
                lose = 0;                              
            }

});