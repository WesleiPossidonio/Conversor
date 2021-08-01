

let dolar = 5.21
let euro = 6.18

let botao = document.getElementById("botão")
let select = document.getElementById("select-moedas")




function converterMoedas() {
    let inputValorEmReais = Number(document.getElementById("input").value)
    let textoMoedas = document.getElementById("texto-moeda")
    let textoReal= document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        textoMoedas.innerHTML = valorEmDolares.toLocaleString("en-Us", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        textoMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }
   
    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })

}

function trocaDeMoeda() {
    let textoMoedas=document.getElementById("texto-moedas")
    let bandeirasMoedas = document.getElementById("bandeiras-moedas")

    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeirasMoedas.src = "./img/EUA.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeirasMoedas.src = "./img/Euro.png"

    }

}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)
