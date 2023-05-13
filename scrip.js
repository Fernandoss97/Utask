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
  
  moreVert.innerHTML =
    '<a href="#"><img src="/img/more_vert.svg" alt=""></a></span>';
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
  spanNav.classList.add("prox");
  spanNav.innerHTML =
    '<a href=""><img src="/img/[Botão] Proximo.svg" alt=""></a></span>';
  var btn_excluir = document.createElement("button");
  btn_excluir.classList.add("btn-excluir");
  btn_excluir.innerHTML = '<img src="/img/PopUp Excluir.svg" alt="">';
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
};

const clickEsconderDesc = () => {
  const desc = document.getElementById("descricao");
  console.log(desc);
};

const criarTask = document.getElementById("criar-task");
criarTask.onclick = clickCriar;

const esconderDesc = document.getElementsByClassName("moreVert");
esconderDesc.onclick = clickEsconderDesc;
