"use strict"

function teste(){
    // -- se var for criada dentro de um scopo, ela ainda pode ser acessada fora dele  
    //var nome = "Gabriel"
    //
    // -- se let for criado dentro de um scopo, ele pode ser somente acessado dentro de onde foi criado {sempre dar preferência}
    let nome = "Gabriel" 
    if(true){
        console.log("Dentro do IF da function teste: " + nome);
    }
    console.log("Dentro da function teste: " + nome);
}

teste();

console.log("Fora da function teste: " + nome);