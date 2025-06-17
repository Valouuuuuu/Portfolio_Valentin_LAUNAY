function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



 function toggleModules(button) {
  const list = button.nextElementSibling;
  list.classList.toggle('hidden');
  button.textContent = list.classList.contains('hidden')
    ? 'Voir les modules associés'
    : 'Masquer les modules';
}



