document.addEventListener('DOMContentLoaded', () => {

  // LÓGICA ASIGNADA A: INTEGRANTE 1
  // (Menú móvil interactivo y desplazamiento suave)

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Abrir y cerrar el menú móvil al hacer clic en el botón de hamburguesa
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cerrar automáticamente el menú al hacer clic en cualquier enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Desplazamiento suave para todos los enlaces ancla
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // LÓGICA ASIGNADA A: INTEGRANTE 2
  // (Validación y envío del formulario de contacto)
  // El Integrante 2 agregará aquí su código para validar campos

});