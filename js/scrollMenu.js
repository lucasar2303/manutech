var header = document.querySelector('header');
document.addEventListener("scroll", function() {
  var posicaoy = window.pageYOffset;
 
  header.style.backgroundColor = posicaoy <= 100 ? "transparent" : "#02021f";
  header.style.boxShadow = posicaoy <= 100 ? "-10px -10px 0px #000" : "0px 0px 10px #000";
});





