function verificar(){
    /*window.alert(" FUNCIONOU")*/
    var data= new Date()
    var ano=data.getFullYear()/* fuillyear, ano formato com 4 digitos; 2019 */
    var fano=window.document.getElementById("txtano")
    var res=window.document.querySelector(`div#res`)/* segunda maneira*/
    if (fano.value.length==0 || fano.value>ano){/* comprimento caixa igual a 0*/
        window.alert("[ERRO] Verifique os dados e tente novamente.")
    }else{
        /*window.alert("Tudo Ok")*/
        var fsex=document.getElementsByName("radsex")  /*seleciona ambos os botoes radio*/
        var idade=ano-Number(fano.value)
        var genero=""
        var img=document.createElement("img")/* criar foto dinamicamente, cria um elemento img, cria uma tag para mim*/
        img.setAttribute("id","foto")/* é igual no HTML <img id=`foto`> */
        if(fsex[0].checked){ /*se botão estiver marcado na posição 0 = masculino*/
            genero="Homem"
            if(idade>=0 && idade<10){
                img.setAttribute("src","foto-bebe-m.png")
                /*criança*/
            }else if(idade<21){
                img.setAttribute("src","foto-jovem-m.png")
                /*jovem*/
            }else if(idade<50){
                img.setAttribute("src","foto-adulto-m.png")
                /*adulto*/
            }else{
                img.setAttribute("src","foto-idoso-m.png")
                /* idoso*/
            }
        }else if(fsex[1].checked) {/*se botão estiver marcado na posição 1 = Feminino*/
            genero="Mulher"
            if(idade>=0 && idade<10){
                /*criança*/
                img.setAttribute("src","foto-bebe-f.png")
            }else if(idade<21){
                img.setAttribute("src","foto-jovem-f.png")
                /*jovem*/
            }else if(idade<50){
                img.setAttribute("src","foto-adulto-f.png")
                /*adulto*/
            }else{
                img.setAttribute("src","foto-idoso-f.png")
                /* idoso*/
            }
        }
        /*res.style.textAlign="center" para centralizar texto resposta res*/
        res.innerHTML=`Idade calculada: ${idade} anos. Género ${genero}.`
        res.appendChild(img)/*vai adicionar um elemento, um elemento img*/
    }


}
