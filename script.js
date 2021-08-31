// Representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
const menuItems = document.querySelectorAll('.menu__item');

for (let i = 0; i < menuItems.length; i++) {
  // Registra un evento a un objeto en específico.
  menuItems[i].addEventListener('click', changeColorBackground);
}

function changeColorBackground() {
  // classList devuelve una colección activa de los atributos de clase del elemento.
  // contains comprueba si la clase indicada existe en el atributo de clase del elemento.
  console.log(this.classList)
  if (!this.classList.contains('menu__item--active')) {
    document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
  }
}
