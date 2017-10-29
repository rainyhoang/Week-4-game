$(document).ready(function() {


//declare winscore
    
var targetnumber = Math.floor(Math.random() * 120) + 9 ;

$("#winscore").text(targetnumber);

var counter = 0;

var numberOption = Math.floor(Math.random() * 12) + 1;

//create value for each Crystal
    
for (var i = 0; i< numberOption.length; i++)
    
    {
        var imageCrystalBlue = $("<img>");
        imageCrystal.addClass("crystalimage");
        $('#theDiv').prepend('<img id="theImg" src="theImg.png" />')            imageCrystal.attr("data-crystalvalue"), numberOption[i];
        $("#button-blue").append(imageCrystal;)
        
        var imageCrystalYellow = $("<img>");
        imageCrystal.addClass("crystalimage");
        imageCrystal.attr("scr", "image/yellowcrystal.png");
        imageCrystal.attr("data-crystalvalue"), numberOption[i];
        $("#button-blue").append(imageCrystal;)
        
        var imageCrystalRed = $("<img>");
        imageCrystal.addClass("crystalimage");
        imageCrystal.attr("scr", "image/redcrystal.png");
        imageCrystal.attr("data-crystalvalue"), numberOption[i];
        $("#button-red").append(imageCrystal;)
                
        var imageCrystalGreen = $("<img>");
        imageCrystal.addClass("crystalimage");
        imageCrystal.attr("scr", "image/greencrystal.png");
        imageCrystal.attr("data-crystalvalue"), numberOption[i];
        $("#button-green").append(imageCrystal;)
    }
    
  
    
});