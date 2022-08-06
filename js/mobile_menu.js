let nav = document.querySelector('.menu nav');
let menu = document.getElementById('mobile_menu');
let ini = document.getElementById('inicio_menu');
let sob = document.getElementById('sobre_menu')
let pro = document.getElementById('projetos_menu')
let hab = document.getElementById('habilidades_menu')
function musterMenu(){
    ini.addEventListener('click', function(){
        nav.classList.remove('open');
    });
    sob.addEventListener('click', function(){
        nav.classList.remove('open');
    });
    pro.addEventListener('click', function(){
        nav.classList.remove('open');
    });
    hab.addEventListener('click', function(){
        nav.classList.remove('open');
    });
    if(menu.style.transform == "rotate(360deg)"){
        menu.style.transform = "rotate(0deg)";
    }else{
        menu.style.transform = "rotate(360deg)";
    }
    if (nav.classList.contains('open')){
        nav.classList.remove('open');
    }else{
        nav.classList.add('open');
    };

};