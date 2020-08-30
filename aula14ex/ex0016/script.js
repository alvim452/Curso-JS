function contar(){
    var ini = document.getElementById("txti")
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)
    let res= document.getElementById(`res`)

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] faltam dados!`)
        res.innerHTML=`Impossivel contar!`
    }else{
        res.innerHTML=`Contando....<br>`/* <br> quebrar linha entre contando e os numeros*/
        let i = Number(ini.value)/* Vou pegar no valor que está em ini e converto  num numero*/ 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert(`Passo inválido!, considerando PASSO 1`)
            p=1
        }
        if(i<f){ /* CONTAGEM CRESCENTE*/
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}` /* += neste caso é concatenação;
            \u{1F449} código do emoji em formatação unicode, este codigo só funciona entre crases`` */
             }
             
        } else {
            for(let c = i; c >= f; c -= p){ /* CONTAGEM DECRESCENTE OU REGRESSIVA*/
                res.innerHTML += `${c} \u{1F449}` 
            }
            
        }
    
        res.innerHTML +=`\u{1F3C1}`/* mostra emoji bandeira*/
    }

    
}
