let entrada = document.getElementById("input__habito");
let boton = document.getElementById("button__habito");
let error = document.getElementById("mensaje__error");
let lista = document.getElementById("list__habitos");

boton.addEventListener("click", () => {
  let texto = entrada.value.trim();

  if (texto === "") {
    error.innerText = "ESCRIBE UN HÁBITO PRIMERO";
    return;
  }

  error.innerText = "";

  let item = document.createElement("li");
  item.innerHTML = `
    <span>${texto}</span>
    <button class="completar">✔</button>
    <button class="eliminar">❌</button>
  `;

  lista.appendChild(item);
  entrada.value = "";

  item.querySelector(".completar").addEventListener("click", () => {
    item.querySelector("span").style.textDecoration = "underline";
  });

  item.querySelector(".eliminar").addEventListener("click", () => {
    lista.removeChild(item);
  });
});