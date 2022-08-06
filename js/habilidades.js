let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('js');
let word = document.getElementById('word');
let tecText = document.querySelector('.technologies_text');
html.addEventListener('mouseenter', function(){
    tecText.innerHTML = 
    `<div>
        <h3>HTML</h3>
        <p>
            É uma liguagem de marcação ultilizada na construção de páginas na web.
        </p>
    </div>`;
});
html.addEventListener('mouseout', function(){
    tecText.innerHTML = 
    `<div>
        <h3>Tecnologias</h3>
        <p>
            Passe o mouse por cima ou click em alguma habilidade para ler a descrição.
        </p>
    </div>`;
});
css.addEventListener('mouseenter', function(){
    tecText.innerHTML = 
    `<div>
        <h3>CSS</h3>
        <p>
            É um mecanismo para adicionar estilo a um documento web.
        </p>
    </div>`;
});
css.addEventListener('mouseout', function(){
    tecText.innerHTML = 
    `<div>
        <h3>Tecnologias</h3>
        <p>
            Passe o mouse por cima ou click em alguma habilidade para ler a descrição.
        </p>
    </div>`;
});
js.addEventListener('mouseenter', function(){
    tecText.innerHTML = 
    `<div>
        <h3>Javascript</h3>
        <p>
            É uma liguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.
        </p>
    </div>`;
});
js.addEventListener('mouseout', function(){
    tecText.innerHTML = 
    `<div>
        <h3>Tecnologias</h3>
        <p>
            Passe o mouse por cima ou click em alguma habilidade para ler a descrição.
        </p>
    </div>`;
});
word.addEventListener('mouseenter', function(){
    tecText.innerHTML = 
    `<div>
        <h3>WordPress</h3>
        <p>
             É um sistema usado para administrar sites, blogs, lojas virtuais, portais de notícias, áreas de membros e outros tipos de páginas.
        </p>
    </div>`;
});
word.addEventListener('mouseout', function(){
    tecText.innerHTML = 
    `<div>
        <h3>Tecnologias</h3>
        <p>
            Passe o mouse por cima ou click em alguma habilidade para ler a descrição.
        </p>
    </div>`;
});
