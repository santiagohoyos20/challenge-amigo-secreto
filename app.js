const inputField = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos")

let amigos = [];

const agregarAmigo = () => {
  if (inputField.value) {
    let nuevoAmigo = inputField.value;
    amigos.push(nuevoAmigo);
    inputField.value = ""
    actualizarAmigos()
  } else {
    alert("Por favor, inserte un nombre.");
  }
};


const actualizarAmigos = () => {
    lista.innerHTML = ""
    lista.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join("")
}