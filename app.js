const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')



function mudarCor () {
    forma1.classList.toggle('vermelho')
}


function mudarForma () {
    forma2.classList.toggle('circulo')
}

    function moverPLado (){
forma3.classList.toggle('mover')
    }

    function aumentar(){
        forma4.classList.toggle('aumenta')
    }

    function diminuir(){
        forma5.classList.toggle('diminui')
    }

    function triangul(){

        forma6.classList.toggle('triangulo')
    }

    function degr(){

        forma7.classList.toggle('degrade')
    }

    function sumir(){
        forma8.classList.toggle('some')
    }

forma1.addEventListener('click' ,mudarCor)
forma2.addEventListener('click' ,mudarForma)
forma3.addEventListener('click' ,moverPLado)
forma4.addEventListener('click' ,aumentar)
forma5.addEventListener('click' ,diminuir)
forma6.addEventListener('click' ,triangul)
forma7.addEventListener('click' ,degr)
forma8.addEventListener('click' ,sumir)

