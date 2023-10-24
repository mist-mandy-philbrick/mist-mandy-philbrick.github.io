// JavaScript Document

$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "power") {
         $("#feedback").css("color","#31749F");
         $("#feedback").html("Well done! You press and hold down the <strong> power button </strong> to turn off the machine.");
      }

      if ($(this).attr("id") == "display") {
         $("#feedback").css("color","#31749F");
         $("#feedback").html("Very good! When you see <strong>'UNSETUP'</strong> in the display, you're ready to send the cutting carriage home.");
      }

      if ($(this).attr("id") == "enter") {
         $("#feedback").css("color","#31749F");
         $("#feedback").html("Great job! Once you see 'UNSETUP' in the display, you can select the <strong>'ENTER' button</strong> to send the cutting carriage home.");
	  }
		  
	  if ($(this).attr("id") == "menu") {
         $("#feedback").css("color","#31749F");
         $("#feedback").html("Great job! The <strong>menu button</strong> allows you to scroll through options until you find 'UNSETUP.'");
	}
		
	if ($(this).attr("id") == "down") {
         $("#feedback").css("color","#31749F");
         $("#feedback").html("Well done! The <strong>'down' cursor</strong> allows you to scroll through options until you find 'UNSETUP.'");
      }

	});
}); //end main jQuery function
