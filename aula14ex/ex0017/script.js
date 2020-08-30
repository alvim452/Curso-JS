function tabuada(){
    let num=document.getElementById(`txtn`)
    let tab=document.getElementById(`seltab`)
    if(num.value.length==0){
         window.alert(`Por favor digite um número!`)
    }else{
        let n = Number(num.value)
        let c=1
        tab.innerHTML=``/* serve para limpar a anterior tabuada, antes de mostrar uma nova tabuada */
        while(c<=10){
            let item=document.createElement(`option`)/* criar um novo elemento option dentro da variavel item */
            item.text=`${n} x ${c} = ${n*c}`  /* texto do item*/
            item.value=`tab${c}`/* para podermos selecionar linha a linha na tabuada, atrbui um valor a cada item, tab1, tab2, tab3....*/
            tab.appendChild(item)/* adicionar um filho á tabuada para que os valores da tabuada apareçam na tela*/
            c++

        }
    }

}
