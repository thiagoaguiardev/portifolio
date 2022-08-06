let smallImg = document.querySelectorAll('.small_img');
let close = document.querySelector('.close');
for(let i  = 0; i <smallImg.length; i++){
    smallImg[i].addEventListener('click', function(){
        if (i == 0){
            window.open('html/img1.html', '_parent');
        }else{
            window.open('html/img2.html', '_parent');
        };
    });
};
close.addEventListener('click', function(){
    window.open('../index.html#projetos', '_parent');
});
