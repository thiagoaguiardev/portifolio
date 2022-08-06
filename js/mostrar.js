
let muster = document.querySelector('#muster');
muster.addEventListener('click', function(){
    let row2 = document.getElementById('row2');
    if(row2.style.display === 'flex'){
        row2.style.display = 'none';
        muster.innerHTML = 'ver mais';
    }else{
        row2.style.display = 'flex';
        muster.innerHTML = 'ver menos';
    }
});