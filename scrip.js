const clickCriar = () => {
  const divEstrutura = document.querySelector("#fazer");
  const titulo = document.querySelector("#titulo");
  const descricao = document.querySelector("#descricao");

  var divFazerItem = document.createElement("div");
  divFazerItem.classList.add("fazer-item");

  var divSup = document.createElement("div");
  divSup.classList.add("sup");
  var tituloElement = document.createElement("h2");
  tituloElement.innerText = titulo.value;
  var moreVert = document.createElement("span");
  moreVert.classList.add("more_vert");
  moreVert.setAttribute("id", "more_vert");

  moreVert.innerHTML =
    '<a href="#btn-excluir"><button  id="menuExlcluir" class="menuExcluir"><img src="/img/more_vert.svg" alt=""></button></a>';
  divSup.appendChild(tituloElement);
  divSup.appendChild(moreVert);

  divFazerItem.appendChild(divSup);

  var divInf = document.createElement("div");
  divInf.classList.add("inf");
  var pInf = document.createElement("p");
  pInf.classList.add("esconder");
  pInf.innerHTML =
    '<a href="#">Esconder descrição <span class="more"><img src="/img/expand_less.svg" alt=""></a></span></p>';
  var divBotoesNav = document.createElement("div");
  divBotoesNav.classList.add("botoes_nav");
  var spanNav = document.createElement("span");

  spanNav.innerHTML =
    '<span class="prox"><a href=""><img src="/img/[Botão] Proximo.svg" alt=""></a></span>';
  var btn_excluir = document.createElement("button");
  btn_excluir.classList.add("btn-excluir");

  btn_excluir.setAttribute("id", "btn-excluir");
  btn_excluir.innerHTML =
    '<a href="#"><img src="/img/PopUp Excluir.svg" alt=""></a>';
  divBotoesNav.appendChild(spanNav);
  divInf.appendChild(pInf);
  divInf.appendChild(btn_excluir);
  divInf.appendChild(divBotoesNav);

  var descricaoElement = document.createElement("p");
  descricaoElement.classList.add("descricao");
  descricaoElement.innerText = descricao.value;

  divFazerItem.appendChild(divInf);
  divFazerItem.appendChild(descricaoElement);

  divEstrutura.appendChild(divFazerItem);

  titulo.value = "";
  descricao.value = "";
  titulo.focus();

  const divSlide = document.querySelector("slide1");
  divSlide.appendChild(divEstrutura);
  const carrossel_content = document.querySelector("carrosel_content");
  carrossel_content.appendChild(divSlide);
  const carrossel = document.querySelector("carrossel");
  carrossel.appendChild(carrossel_content);
};

const criarTask = document.getElementById("criar-task");
criarTask.onclick = clickCriar;

// const clickEsconderDesc = () => {
//   console.log("teste");
// };
const mostrarFrase = () => {
  const frase = document.getElementById("modal_frase");
  frase.classList.add("mostrar_frase");
};

const clickFrase = document.getElementById("frase_mob");
clickFrase.onclick = mostrarFrase;

const fecharFrase = () => {
  const frase = document.getElementById("modal_frase");
  frase.classList.remove("mostrar_frase");
};

const clickFechar = document.getElementById("btn_fecharFrase");
clickFechar.onclick = fecharFrase;

var carrossel = document.querySelector(".carrossel");
var slides = carrossel.querySelectorAll(".slide");
var anteriorBtn = document.getElementById("anterior");
var proximoBtn = document.getElementById("proximo");
var indexAtual = 0;
slides[0].classList.add("ativo");
proximoBtn.addEventListener("click", function () {
  indexAtual = (indexAtual + 1) % slides.length;
  atualizarSlide();
});

anteriorBtn.addEventListener("click", function () {
  indexAtual = (indexAtual - 1 + slides.length) % slides.length;
  atualizarSlide();
});

function atualizarSlide() {
  slides.forEach(function (slide) {
    slide.classList.remove("ativo");
  });

  slides[indexAtual].classList.add("ativo");
}

// const mostrar = () => {
//   const btnExcluir = document.getElementById("btn-excluir");
//   if (event.target.matches(".menuExcluir")) {
//     if (btnExcluir.classList.contains("mostrar")) {
//       btnExcluir.classList.remove("mostrar");
//     } else {
//       btnExcluir.classList.add("mostar");
//     }
//   }
//   console.log("popopo");
// };
// const click = document.getElementById("estrutura");
// click.onclick = mostrar;
