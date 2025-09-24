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
    item.querySelector("span").style.textDecoration = "line-through";
  });

  item.querySelector(".eliminar").addEventListener("click", () => {
    lista.removeChild(item);
  });
});

let btnCalcular = document.getElementById("calcularSueño");
let resultado = document.getElementById("resultadoSueño");

btnCalcular.addEventListener("click", () => {
  let dormir = document.getElementById("horaDormir").value;
  let despertar = document.getElementById("horaDespertar").value;

  if (!dormir || !despertar) {
    resultado.textContent = "Completa ambas horas.";
    return;
  }

  let [h1, m1] = dormir.split(":").map(Number);
  let [h2, m2] = despertar.split(":").map(Number);

  let fechaDormir = new Date(0, 0, 0, h1, m1);
  let fechaDespertar = new Date(0, 0, 0, h2, m2);

  if (fechaDespertar <= fechaDormir) {
    fechaDespertar.setDate(fechaDespertar.getDate() + 1); // pasó medianoche
  }

  let diff = (fechaDespertar - fechaDormir) / (1000 * 60 * 60);
  resultado.textContent = `Dormiste ${diff.toFixed(1)} horas.`;
});