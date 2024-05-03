

console.log('Hello World');

console.log(7*2);


// Comentário de uma linha


/*
    Comentário com
    várias linhas 
*/


// Buscar o botão pelo Id.
var btnDark = document.getElementById('btnDark');

// Adicionar evento de click no botão. 
btnDark.addEventListener('click',function(){

    // Mudamos a cor do body para preto.
    document.body.style.backgroundColor = "black";

    // Log para monitorar a execução do código.
    console.log('Mudando para Dark Mode')
});



var btnLight = document.getElementById('btnLight');

    // Adicionar evento de click no botão. 
btnLight.addEventListener('click',function(){

    // Mudamos a cor do body para branco.
    document.body.style.backgroundColor = "white";

    // Log para monitorar a execução do código.
    console.log('Mudando para Light Mode')
});

