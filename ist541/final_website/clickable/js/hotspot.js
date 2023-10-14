// JavaScript Document

$( function() {
   $("map area").click( function(){
	           $('#myModal').modal("show");

      if ($(this).attr("id") == "Power_button") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Press and hold down the <strong> power button </strong> to turn off the machine.");
      }

      if ($(this).attr("id") == "Display") {
         $("#feedback").css("color","blue");
         $("#feedback").html("<strong>'UNSETUP'</strong> appears in the display area.");
      }

      if ($(this).attr("id") == "Enter_button") {
         $("#feedback").css("color","blue");
         $("#feedback").html("Once you see 'UNSETUP' in the display, select the <strong>'ENTER' button</strong> to send the cutting carriage home.");
	  }
		  
	if ($(this).attr("id") == "up_cursor") {
         $("#feedback").css("color","blue");
         $("#feedback").html("The <strong>'Up cursor'</strong> button allows you to scroll through options until you find 'UNSETUP'");
	}
		
	if ($(this).attr("id") == "down_cursor") {
         $("#feedback").css("color","blue");
         $("#feedback").html("The <strong>'Down cursor'</strong> button allows you to scroll through options until you find 'UNSETUP'");
      }

	});
}); //end main jQuery function
