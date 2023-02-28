var menu = document.querySelector('#menuMobile');
var menu2 = document.querySelector('#menuButtonSair');
var seta = document.querySelector('#seta');


function menuResponsivo(){

if (menu.style.left == "-100%") {
  menu.style.left = "0"
  menu.style.zIndex = "55"
  menu2.style.opacity = "0.4"
  menu2.style.zIndex = "2"
  seta.style.opacity = "0"
	}

else{
	menu.style.left = "-100%"
	menu.style.zIndex = "0"
	menu2.style.opacity = "0"
	menu2.style.zIndex = "0"
	seta.style.opacity = "1"
}

};




function menuResponsivo2(){

	menu.style.left = "-100%"
	menu.style.zIndex = "0"
	menu2.style.opacity = "0";
	menu2.style.zIndex = "0"
	seta.style.opacity = "1"


};