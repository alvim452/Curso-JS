let num=document.querySelector(`input#fnum`)
let lista=document.querySelector(`select#flista`)
let res=document.querySelector(`div#res`)
let valores=[] /*vetor valores, para analise de dados*/

function isNumero(n){/*função para verificar que numero está entre 1 e 100*/
    if( Number(n)>= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){/*função numero e lista,função para verificar que numero ainda não está ma lista*/
     if(l.indexOf(Number(n)) != -1){ /* -1 no comando indexOf() signifia que o valor n não foi encontrado na lista ou vetor, ver aula arrays ou vetores*/
         return true
     }else{
         return false
     }
}

function adicionar(){
    if( isNumero(num.value) && !inLista(num.value, valores)){ /* isNumero é um numero e se não está na lista, lista valores*/
    /*window.alert(`Tudo ok!`)*/
    valores.push(Number(num.value))/* vou adicionar(push) ao vetor valores o numero n  */
    let item=document.createElement(`option`)
    item.text =`Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML="" /* isto é quando eu conseguir adicionar mais um elemento, ele limpa o resultado do res*/
    }else{
       window.alert(`Valor invalido ou ja encontrado na lista`) 
    }
    num.value = `` /* serve para limpar o input  number*/
    num.focus() /* serve para no final de cada adicionar, o input number fique a piscar*/

}
function finalizar(){
     if(valores.length == 0){
         window.alert(`Adicione valores antes de finalizar!.`)
     }else{
         let tot = valores.length
         let maior = valores[0]/* para eu analisar o maior e menor numero, eu tenho que analisar o primeiro numero e varrer os outros numeros; quando eu começar a analisar, eu analiso o primeiro elemento, e eu não tenho maior ou menor e que o maior e menor numero è ele o (primeiro numero) na primeira posição ou pos[0] */
         let menor = valores[0] /* o menor(e o maior valor)  é o valores na primeira posição ou pos[0] */
         let soma = 0
         let media = 0
         for(let pos in valores){/* formula de varrimento da aula de vetores arrays vou fazer um for para cada posição pos de valores */
         soma += valores[pos]
         if(valores[pos] > maior)
             maior = valores[pos]
         
         if(valores[pos] < menor)
             menor = valores[pos]
         }
         media = soma/tot
         res.innerHTML = ``
         res.innerHTML += `<p>Ao todo temos ${tot} elementos.</p>`
         res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
         res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
         res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p> 
         `
         res.innerHTML += `<p> A média dos valores digitados è ${media}.</p>`

     }

 }
