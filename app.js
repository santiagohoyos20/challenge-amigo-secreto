const inputField = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];
let amigoSorteado = "";

const agregarAmigo = () => {
  if (inputField.value) {
    let nuevoAmigo = inputField.value;
    amigos.push(nuevoAmigo);
    inputField.value = "";
    actualizarAmigos();
  } else {
    alert("Por favor, inserte un nombre.");
  }
};

const actualizarAmigos = () => {
  lista.innerHTML = "";
  lista.innerHTML = amigos.map((amigo) => `<li>${amigo}</li>`).join("");
};

const sortearAmigo = () => {
  if (amigos.length === 0) {
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  amigoSorteado = amigos[indiceAleatorio];
  mostrarAmigoSorteado()
};

const mostrarAmigoSorteado = () => {
  lista.innerHTML = "";
  resultado.innerHTML = `El amigo elegido es: ${amigoSorteado}`;
};
