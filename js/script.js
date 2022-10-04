$(document).ready(function(){
    $(window).scroll(function(){
        if(window.scrollY === 0){
            $(".navbar").css({"background-color":"transparent"});   
        }
        else{
            $(".navbar").css({"background-color":"rgba(0,0,0,0.7)"});
        }
    });
    $(".navbar-toggler").click(function(){
        $(".hamburger").toggleClass("is-active");
    });
})