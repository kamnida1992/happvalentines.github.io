window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector(".audio");
    audio.volume = 0.8;
    audio.play();
  });


$(document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-150px",
            opacity: 1,
        },"slow");
        $(".envelope-text").stop().animate({
            opacity: 0
        })
        
    }).mouseleave(function(){
        $(".card").stop().animate({
            top:0,
            opacity: 0
        },"slow");
        $(".envelope-text").stop().animate({
            opacity: 1
        })
    });
    });


    
