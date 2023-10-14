// JavaScript Document

$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "power") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Press and hold down the <strong> power button </strong> to turn off the machine.");
      }

      if ($(this).attr("id") == "display") {
         $("#feedback").css("color","blue");
         $("#feedback").html("<strong>'UNSETUP'</strong> appears in the display area.");
      }

      if ($(this).attr("id") == "enter") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Once you see 'UNSETUP' in the display, select the <strong>'ENTER' button</strong> to send the cutting carriage home.");
	  }
		  
	  if ($(this).attr("id") == "up") {
         $("#feedback").css("color","blue");
         $("#feedback").html("The <strong>'up' cursor</strong> button allows you to scroll through options until you find 'UNSETUP'");
	}
		
	if ($(this).attr("id") == "down") {
         $("#feedback").css("color","blue");
         $("#feedback").html("The <strong>'down' cursor</strong> button allows you to scroll through options until you find 'UNSETUP'");
      }

	});
}); //end main jQuery function
