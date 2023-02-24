function carregar() {
  let msg = window.document.getElementById("msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  // let hora = 22; teste de funcionamento
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "manha.png";
    document.body.style.background = "#7bc8fa";
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = "tarde.png";
    document.body.style.background = "#f58a5e";
  } else {
    //BOA NOITE
    img.src = "noite.png";
    document.body.style.background = "#042125";
  }
}
