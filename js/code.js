function move(){
    let elem = document.getElementById("scale-value")
    let width = 1
    let time = setInterval (load_html, 10)
        function load_html(){
          
            if (width>=100) {
                clearInterval(time);
                 }
            else {
                width++;
                elem.style.width = width + '%'
                elem.innerHTML = width*1 + '%';
            }
        
    }
}

function move1(){
    let elem = document.getElementById("scale-value1")
    let width = 1
    let time = setInterval (load_html, 10)
        function load_html(){
            if (width>=35) {
                clearInterval(time);
                 }
            else {
                width++;
                elem.style.width = width + '%'
                elem.innerHTML = width*1 + '%';
            }
        }
}

function move2(){
    let elem = document.getElementById("scale-value2")
    let width = 1
    let time = setInterval (load_html, 10)
        function load_html(){
            if (width>=50) {
                clearInterval(time);
                 }
            else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width*1 + '%';
            }
        }
}

function move3(){
    let elem = document.getElementById("scale-value3")
    let width = 1
    let time = setInterval (load_html, 10)
        function load_html(){
            if (width>=10) {
                clearInterval(time);
                 }
            else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width*1 + '%';
            }
        }
}



move();
move1();
move2();
move3();


function buttonTell() {
    document.getElementById('btn').innerHTML = `
  8 (915)-251-23-03
  `;

}

$(document).ready(function(){
    $("#button_call").on("click", function(){
        $('html').animate({scrollTop: $('#call').offset().top}, 1000);
    });
    $("#button_about").on("click", function(){
        $('html').animate({scrollTop: $('#about').offset().top}, 1000);
    });
    $("#button_skill").on("click", function(){
        $('html').animate({scrollTop: $('#skill').offset().top}, 1000);
    });
    $("#button_portfolio").on("click", function(){
        $('html').animate({scrollTop: $('#portfolio').offset().top}, 1000);
    });
    
    
})

jQuery(function($) {
    $(window).scroll(function(){
        if($(this).scrollTop()>60){
            $('#top').addClass('fixed');
            $('.nav__button').css({
                'background-color': 'none',
            })
        }
        else if ($(this).scrollTop()<60){
            $('#top').removeClass('fixed');
        }
        
        
    });
});




