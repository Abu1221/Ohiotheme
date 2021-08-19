const menu = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');
menu.onclick = function(){
  menu.classList.toggle('active');
  navMenu.classList.toggle('active');
}


