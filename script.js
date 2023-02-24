function calcular() {
  var txtv = window.document.querySelector("input#txtvel");
  var res = window.document.querySelector("#res");
  var vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`;
  if (vel > 60) {
    res.innerHTML += `<p>Você está <strong>Multado</strong> por excesso de velocidade.`; //não pode ser só = a paga anterior tem q ser +=
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`; // += não é soma ja é q uma string é concatenado
}
