var listaFilmes = [""]



for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<img src=" + listaFilmes[indice] + ">")
}

function Adicionar() {
  var adicionarRider = listaFilmes.push(document.getElementById("rider").value);
  var novoRider = document.createElement("img");
  novoRider.classList.add("capas");
  novoRider.src = document.getElementById("rider").value;
  document.body.appendChild(novoRider);
  document.getElementById("rider").value = "";
}