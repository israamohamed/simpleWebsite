



$(document).ready(function() { 
    
    $("#getFoucs").css("color" , "white");
    
    
    $(window).resize(function() { 
        
        if( $('#menu').css("display") == "none" ) {
            $('#new-links-container').slideUp();
        }
        
    }); 
}); 




function open_menu() {
    $('#new-links-container').slideToggle();
}