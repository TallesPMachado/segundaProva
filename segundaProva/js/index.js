console.log("Segunda Prova");

function table(){

}

function calc(){
    let celuCalc = document.getElementsByTagName("input").value;
    let point;
    if(celuCalc[2] === '+'){
        point= celuCalc.substring(1,2) + celuCalc.substring(4,5);
    }else if(celuCalc[2] === '-'){
        point= celuCalc.substring(1,2) - celuCalc.substring(4,5);
    }
}

table();