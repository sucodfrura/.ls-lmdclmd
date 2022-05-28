export function Semaforo(cor) {

    let msg = ''

    if (cor == "verde") {
        msg = 'Pode Passar'
    }
    else if (cor == "vermelho") {
    msg = 'Aguardar'
    }
    else{
        msg= 'Inválido'
    }
    return msg;
}


export function DiaSemana (dia) {
    let msg = ""
    if(dia == 0){
        msg = "Domingo"
    }
    else if (dia == 1){
        msg = "Segunda"
    }
    else if (dia == 2){
        msg= "Terça"
    }
    else if (dia == 3){
        msg= "Quarta"
    }
    else if (dia == 4){
        msg= "Quinta"
    }
    else if (dia == 5){
        msg = "Sexta"
    }
    else if (dia == 6){
        msg= "Sábado"
    }
    return msg;
}

export function Fatoral(num) {
let a = 1; 
for(let cont= num; cont>1;cont--){
    a= cont
}
return a;

}

export function SequenciaPar (num) {
    let a = [];
    let b=0


    for (let i = 0; i <= num; i++) {
        a[i]= b 
        b++
    }
        return a;
}