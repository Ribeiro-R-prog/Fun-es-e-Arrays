function positions (firstPlace, secondPlace, lastPlace){
    const array = [firstPlace, secondPlace, lastPlace];
    let aux;
    if (firstPlace === "Daniel") {
        console.log("1º Colocado: " + array[0]);
        console.log("2º Colocado: " + array[1]);
        console.log("3º Colocado: " + array[2]);
    } else if (secondPlace === "Daniel") {
        aux = array[0]
        array[0] = "Daniel"
        array[1] = aux
        console.log("1º Colocado: " + array[0]);
        console.log("2º Colocado: " + array[1]);
        console.log("3º Colocado: " + array[2]);
    } else{
        aux = array[1]
        array[1] = "Daniel"
        array[2] = aux
        console.log("1º Colocado: " + array[0]);
        console.log("2º Colocado: " + array[1]);
        console.log("3º Colocado: " + array[2]);
    }
    
}

positions ("Rafael", "Daniel", "Manoel")