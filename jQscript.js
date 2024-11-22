$(document).ready(function(){

    $("#button").click(function(){
        $(".hidden").toggle( );
        
         $(".image").toggle(function(){
            $(this).css("display", "block")
         });
         $("img").toggle();
        
        $("button").text("Show less");

    });

});