const texto_progresso = document.querySelector("#texto-progresso")
const barra_preenchimento = document.querySelector("#barra-preenchimento")
const body = document.body
const btn_energia = document.querySelector("#btn-energia")
const modulo = document.querySelector(".modulo")
const modulo_txt = document.querySelector("#modulo-energia p")


let progressoAtual = 0

btn_energia.addEventListener('click', () => {
    
    body.classList.toggle("energia-restaurada")
  
    if(body.classList.contains("energia-restaurada")){
        btn_energia.style.backgroundColor = "green"
        btn_energia.textContent = "Energia estavel"
        modulo_txt.textContent = "O sistema está operando em energia total"

    }else{
        btn_energia.style.backgroundColor = "red"
        btn_energia.textContent = "Restaurar Energia"
        modulo_txt.textContent = "O sistema está operando em energia reduzida."
    }

    

})

const area_rastreio = document.querySelector("#area-rastreio");
const cord_x = document.querySelector("#coord-x");
const cord_y = document.querySelector("#coord-y");

area_rastreio.addEventListener("mousemove", (event) => {
  cord_x.textContent = event.offsetX;
  cord_y.textContent = event.offsetY;
});

area_rastreio.addEventListener("mouseleave",() =>{
    cord_x.textContent = 0
    cord_y.textContent = 0
})

const caixa =  document.getElementById("#img-escudo")
const btnVermelho =  document.getElementById("data")
const btnAzul =  document.getElementById("btn_azul")



btnVermelho.addEventListener('click', ()=>{
    caixa.style.backgroundColor = "green"
})


btnAzul.addEventListener('click', ()=>{
    caixa.style.backgroundColor = "blue"
})

btnAmarelo.addEventListener('click', ()=>{
    caixa.style.backgroundColor = "yellow"
})




