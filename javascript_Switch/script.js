
var inputDayOfWeek = document.getElementById("inptWeekDay");

function showWeekDay(){

    var DayOfWeek = parseInt(inputDayOfWeek.value);

    switch(DayOfWeek){

        case 1:
            alert("Segunda-feira");
            break;


        case 2:
            alert("Terça-feira");
            break;    


        case 3:
            alert("Quarta-feira");
            break;    
            
            
        case 4:
            alert("Quinta-feira");
            break;    
            
            
        case 5:
            alert("Sexta-feira");
            break;  
            
            
        case 6:
            alert("Sábado");
            break;    
            
            
        case 7:
            alert("Domingo");
            break;        
            
        default:
            alert("Não foi possível identificar")    
    }
}