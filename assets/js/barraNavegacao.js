
var nav = document.getElementById("nav");
var itens = nav.getElementsByClassName("menu__item");

for (var i = 0; i < itens.length; i++) {
  itens[i].addEventListener("click", function(){
    var atual = document.getElementsByClassName("ativo");
    atual[0].className = atual[0].className.replace(" ativo","");
    this.className += " ativo";
  })
}




