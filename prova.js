//PROVA

// ----- QUESTÃO 01 -----
// 12hs (AM/PM) -> 24hs
let horario = "12:15:25PM"

function converterHorario(horario){
    let horas = null;
    horario_partes = horario.split(":");
    parte_dia = horario_partes[2].charAt(2) + horario_partes[2].charAt(3);
    horas = verificaHora(horario_partes[0], parte_dia);
    if(horas === null){
        console.log("Erro!");
    }else{
        minutos = horario_partes[1];
        segundos = horario_partes[2].slice(0,2);
        console.log("Questão 1: " + horas + ":" + minutos + ":" + segundos);
    }
}

function verificaHora(hora, parte_dia){
    if(parte_dia === "AM"){
        return hora;
    }

    switch (hora) {
        case "01":
            hora = "13";
            break;
    
        case "02":
            hora = "14";
            break;

        case "03":
            hora = "15";
            break;

        case "04":
            hora = "16";
            break;

        case "05":
            hora = "17";
            break;

        case "06":
            hora = "18";
            break;

        case "07":
            hora = "19";
            break;

        case "08":
            hora = "20";
            break;

        case "09":
            hora = "21";
            break;

        case "10":
            hora = "22";
            break;

        case "11":
            hora = "23";
            break;

        case "12":
            hora = "00";
            break;
    
        default:
            hora = null;
            break;
    }
    return hora;
}

converterHorario(horario)

// ----- QUESTÃO 02 -----

frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
const letras =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];

function separarString(frase){
    let limite = 0;
    let novo_array = [];
    for (let i = 0; i <= frase.length; i++) {
        for (let j = 0; j <= letras.length; j++) {
            if(frase.charAt(i) === letras[j] || (i === frase.length && j === letras.length)){
                palavra = frase.slice(limite, i);
                limite = i;
                novo_array.push(palavra);
            }
        }
    }
    console.log("Questão 2: " + novo_array.length + " palavras" );
}

separarString(frase)

// ----- QUESTÃO 03 -----
let array = [12, 17, 15, 19, 22, 17, 19, 12];

function removeDuplicados(array) {
    let novo_array = [];
    for (let i = 0; i < array.length; i++) {
        let repete = 0;
        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]){
                repete++;
            }
        }
        if(repete === 1){
            novo_array.push(array[i]);
        }
    }
    console.log("Questão 3: " + novo_array);
}

removeDuplicados(array)

// ----- QUESTÃO 04 -----
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        // console.log(j);
    }
}

console.log("Questão 4: Alternativa E");

// ----- QUESTÃO 05 -----

// console.log(!(true && false) || (false && true));
console.log("Questão 5: Alternativa A");

// ----- QUESTÃO 06 -----
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
// console.log(x);
console.log("Questão 6: Alternativa B");
