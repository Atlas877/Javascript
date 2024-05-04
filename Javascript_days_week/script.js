var inputDayOfWeek = document.getElementById("inptWeekDay");

function showWeekDay(){

   
    var dayOfWeek = parseInt( inputDayOfWeek.value);

    
    switch ( dayOfWeek ) {

        case 1:
            alert("segunda-feira");
            break;

        case 2:
                alert("terça-feira");
            break;   
        
         case 3:
                alert("quarta-feira");
            break;   
            
        case 4:
                alert("quinta-feira");
            break;   
            
        case 5:
                alert("sexta-feira");
            break;   
            

        case 6:
                alert("sábado");
            break;   
            
        case 7:
                alert("domingo");
            break;   

         default:
            alert ("Não foi possível identificar o dia de semana.");

            
    }

}