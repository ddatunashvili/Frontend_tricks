$(function() {
      $('.h4').hover(function() {
     $(".h4 .services_wrapper").css("border", "1px solid #2e8dcc ");
        $(".h4 .services_title a").css("color", "#2e8dcc !important");
            $(".h4 .wgl_button_link").css("color", "#2e8dcc !important");
      }, function() {
     $(".h4 .services_wrapper").css("border", "1px solid #d7d7d7");
    
         $(".h4 .services_title a").css("color", "#d7d7d7 !important");
             $(".h4 .wgl_button_link").css("color", "#d7d7d7 !important");
      });
    });