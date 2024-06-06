    var z = 100
    while ( z > 0)
    {
        console.log(z)
        z = z - 10;
    }


    //


    var y = 5
    while ( y < 51)
        {
            console.log(y)
            y = y + 5;
        }


        //


        var c = 1
        while ( c < 101)
            {
                console.log(c)
                c = c + 1;
            }


            //


            document.getElementById("titulo").innerHTML = "Gustavo Pimentel de Sousa Pereira"


//


let NomeDaPessoa = document.getElementById("nome")
let Resposta = document.getElementById("resposta")

function Enviar()
{
    Resposta.innerHTML = "Olá, " + NomeDaPessoa.value + " , tudo bem?";
}


//


let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let revelar = document.getElementById("revelar")

function resposta()
{
    if(numero1.value > numero2.value)
    {
        revelar.innerHTML = numero1.value + " é maior que " + numero2.value
    }
    else
    {
        revelar.innerHTML = numero1.value + " é menor que " + numero2.value
    }

}


//


let numero = document.getElementById("numero")
let converta = document.getElementById("converta")
let mostrar = document.getElementById("mostrar")

function converter()
{
    mostrar.innerHTML = numero.value/ 100
}


//


let valor = document.getElementById("valor")
let numeros = document.getElementById("numeros")
let numeros2 = document.getElementById("numeros2")

function ler()
{
    document.getElementById("numeros").innerHTML = parseInt(valor.value) - 1

    document.getElementById("numeros2").innerHTML = parseInt(valor.value) + 1
}


//


