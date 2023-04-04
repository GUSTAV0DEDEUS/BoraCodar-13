import Warning from "../../../../assets/Warning.svg";
export default function btn() {
  const smalls = document.querySelectorAll("small");
  const form = document.getElementById("form");
  var btnItem = document.querySelector(".btn-primary");
  var validity = document.querySelector("#validade");
  var CVV = document.querySelector("#CVV");
  var Numbers = document.querySelector("#number");
  var PopUp = document.querySelector("article");
  const patternNumbers = /[0-9]{16}/;
  const patternValidity = /[0-9]{4}/;
  const patternCVV = /[0-9]{3}/;
  if (
    Numbers.value.match(patternNumbers) &&
    validity.value.match(patternValidity) &&
    CVV.value.match(patternCVV)
  ) {
    Numbers.classList.remove("invalid");
    smalls[0].innerHTML = ``;

    validity.classList.remove("invalid");
    smalls[1].innerHTML = ``;

    CVV.classList.remove("invalid");
    smalls[2].innerHTML = ``;

    PopUp.style.display = "flex";
  }
  else {
    if (!Numbers.value.match(patternNumbers)) {
      Numbers.classList.add("invalid");
      smalls[0].innerHTML = `
      <img src="${Warning}"/>
      Insira um número de cartão válido
      `;
    }
    if (!validity.value.match(patternValidity)) {
      validity.classList.add("invalid");
      smalls[1].innerHTML = `
    <img src="${Warning}"/>
      Cartão fora de validade 
    `;
    }
    if (!CVV.value.match(patternCVV)) {
      CVV.classList.add("invalid");
      smalls[2].innerHTML = `
    <img src="${Warning}"/>
      CVV Inválido
    `;
    }
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
