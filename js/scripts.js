// 1 ------------------------------------------------------
let led = "ligar";


const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa";

    btnEnviar.innerHTML = "Apagar";
    led = "Apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg";
    imgLampada.alt = "Lampada apagada";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

// 2 ------------------------------------------------------
const gerarImagens = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");

  console.log(qtdImagem);
  canvas.innerHTML = "";
  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" src=img/acesa.jpg alt="">`;
  }

  // document.getElementById("canvas").innerHTML `<img class="imagens" src=img/acesa.jpg alt="">`
};
// 3 ------------------------------------------------------

const validaForm = () => {
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inVal = document.getElementById("inVal").value;
  let mensagemErro = document.getElementById("mensagem-erro");
  mensagemErro.innerText = "";

  // Professor ------------------------------------------------------
  inData == "" && (mensagemErro.innerHTML += "Data invalida <br>");
  inCli == "" && (mensagemErro.innerHTML += "Nome do clinte invalida <br>");
  inCli.length < 3 &&
    (mensagemErro.innerHTML += "Nome do clinte invalida <br>");
  inFone == "" && (mensagemErro.innerHTML += "Telefoneinvalida <br >");
  inMail == "" && (mensagemErro.innerHTML += "E-mail invalida <br >");
  inMail.length < 6 && (mensagemErro.innerHTML += "E-mail invalida <br >");
  inProd == "" && (mensagemErro.innerHTML += "Produto invalida <br >");
  inProd.length < 6 && (mensagemErro.innerHTML += "Produto invalida <br >");
  inQtd == "" && (mensagemErro.innerHTML += "Quantidade invalida <br >");
  inQtd < 0 && (mensagemErro.innerHTML += "Quantidade invalida <br >");
  inVal == "" && (mensagemErro.innerHTML += "Valor invalida <br >");
  inVal < 0 && (mensagemErro.innerHTML += "Valor invalida <br >");

  // mostrar | ocultar erro
  mensagemErro.innerText == ""
    ? ((mensagemErro.style.display = "none"),
      (mensagemErro.innerText = "enviado!"))
    : ((mensagemErro.style.display = "block"), mensagemErro.classList.remove("verde"));

  mensagemErro.innerText == "enviado!" &&
    ((mensagemErro.style.display = "block"),
    (mensagemErro.innerText = "Formulário enviado com sucesso!"),
    mensagemErro.classList.add ("verde"));

  //   if (inData == "") {
  //     mensagemErro.innerHTML += `Data invalida <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }

  //   if (inCli == "") {
  //     mensagemErro.innerHTML += `Nome invalido <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }

  //   if (inFone == "") {
  //     mensagemErro.innerHTML += `Telefone invalido <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }
  //   if (inMail == "") {
  //     mensagemErro.innerHTML += `Email invalido <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }
  //   if (inProd == "") {
  //     mensagemErro.innerHTML += `Produto invalido <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }
  //   if (inVal== "") {
  //     mensagemErro.innerHTML += `Valor invalido <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }
  //   if (inQtd == "") {
  //     mensagemErro.innerHTML += `Quantidade invalida <br />`;
  //     mensagemErro.style.display = "block";
  //   } else {
  //     mensagemErro.style.display = "none";
  //   }
};

// 4 ------------------------------------------------------
const calcular = () => {
  let valPedido = document.getElementById("inValorPedido").value;
  let perDesc = document.getElementById("inPercDesc");
  let valDesc = document.getElementById("inValDesc");
  let final = document.getElementById("inValFinal");

  // if (valPedido >= 2000) {
  //   perDesc.value = 1.5;
  //   valDesc.value = (perDesc / 100) * valPedido.value;
  //   final.value = valPedido.value - valDesc.value;
  // } else if (valPedido >= 1500) {
  //   perDesc.value = 1.0;
  //   valDesc.value = (perDesc / 100) * valPedido.value;
  //   final.value = valPedido.value - valDesc.value;
  // } else if (valPedido >= 1000) {
  //   perDesc.value = 0.8;
  //   valDesc.value = (perDesc / 100) * valPedido.value;
  //   final.value = valPedido.value - valDesc.value;
  // } else if (valPedido >= 500) {
  //   perDesc.value = 0.5;
  //   valDesc.value = (perDesc / 100) * valPedido.value;
  //   final.value = valPedido.value - valDesc.value;
  // }

  // Professor ----------------------------------------------
  if (valPedido >= 2000) {
    perDesc.value = 1.5;
  } else if (valPedido >= 1500) {
    perDesc.value = 1;
  } else if (valPedido >= 1000) {
    perDesc.value = 0.8;
  } else if (valPedido >= 500) {
    perDesc.value = 0.5;
  }
  valDesc.value = (perDesc / 100) * valPedido.value;
  final.value = valPedido.value - valDesc.value;
};
