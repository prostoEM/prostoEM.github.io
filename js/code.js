function move(){
    let elem = document.getElementById("scale-value")
    let width = 1
    let time = setInterval (load_html, 10)
        function load_html(){
          
            if (width>=70) {
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
            if (width>=30) {
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

function move3(){
    let elem = document.getElementById("scale-value3")
    let width = 1
    let time = setInterval (load_html, 10)
        function load_html(){
            if (width>=2) {
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