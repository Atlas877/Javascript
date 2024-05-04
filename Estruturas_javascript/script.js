

var inputPlayer1 = document.getElementById('player1');
var inputPlayer2 = document.getElementById('player2');



function showResult(){

//Mostrar 3 possíveis resultados: Player1 ganhou,Player2 ganhou ou foi empate.

    var scorePlayer1 = parseFloat (inputPlayer1.value);
    var scorePlayer2 = parseFloat (inputPlayer2.value);

    if (scorePlayer1 > scorePlayer2) {

        alert("o jogador 1 venceu");
    } else if (scorePlayer2 > scorePlayer1) {

        alert("o jogador 2 venceu");
    } else {

        alert ("Foi empate")
    }


}