var $ = jQuery;

$(document).ready(function() {


    //declare winscore

    var targetnumber = Math.floor(Math.random() * 120) + 9 ;
    $("#winscore").text(targetnumber);
    var counter = 0;
    var win = 0;
    var lose = 0;
    
//    var card =["image/bluecrystal.png", "image/redcrystal.png", "image/yellowcrystal.png", "image/greencrystal.png"]
    var numberRandom;
    
    
    
//random number
    var numberOption = function() {
        numberRandom = Math.floor(Math.random() * 12) + 1;
        return numberRandom;
        console.log(numberRandom)
    }
	
	
    
    numberOption()
    
//    var numberRandom = numberOption();

//    create value for each Crystal
        
            var number = numberOption();  

        
            var imageCrystalBlue = $("<img>");
            imageCrystalBlue.addClass("crystal-image");
            imageCrystalBlue.attr("src", "image/bluecrystal.png");
            imageCrystalBlue.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));
            $("#button-blue").append(imageCrystalBlue);
            
        

            var imageCrystalYellow = $("<img>");
            imageCrystalYellow.addClass("crystal-image");
            imageCrystalYellow.attr("src", "image/yellowcrystal.png");
            imageCrystalYellow.attr("data-crystalvalue", (Math.floor(Math.random() * 12) +1));
            $("#button-yellow").append(imageCrystalYellow);
    


            var imageCrystalRed = $("<img>");
            imageCrystalRed.addClass("crystal-image");
            imageCrystalRed.attr("src", "image/redcrystal.png");
            imageCrystalRed.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));
            $("#button-red").append(imageCrystalRed);

            var imageCrystalGreen = $("<img>");
            imageCrystalGreen.addClass("crystal-image");
            imageCrystalGreen.attr("src", "image/greencrystal.png");
            imageCrystalGreen.attr("data-crystalvalue", (Math.floor(Math.random() * 12) + 1));
            $("#button-green").append(imageCrystalGreen);   
            
        
        
  
  
// aDD IN ON-CLICK FUNCTION
    
    $(".crystal-image").on("click", function() {
            console.log(($(this).attr("data-crystalvalue")))
                    
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            $("#result").text(counter);

        
// Condition to win the game
        
            if (counter === targetnumber){
                $("#win1").text("You have Win");
                reset();
                win++;
                $("#wins").text(win);
                $("#result").text(counter);
                
            }
        
            else if (counter >= targetnumber){
                $("#win1").text("You Lost");
                reset();
                lose++;
                $("#lost").text(lose);
                $("#result").text(counter);

            }
        
            })
            
//setup function
            
            function reset(){
                targetnumber = Math.floor(Math.random() * 120) + 9 ;
				$("#winscore").text(targetnumber);
                counter = 0;
//				$("#lost1").text("");
//				$("#win1").text("");
            }

});