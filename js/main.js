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

  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    const fields = {
      nombre: {
        input: document.getElementById('nombre'),
        validate: (value) => value.trim().length >= 3,
        message: 'Ingresa tu nombre completo (mínimo 3 caracteres).'
      },
      email: {
        input: document.getElementById('email'),
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
        message: 'Ingresa un correo electrónico válido.'
      },
      mensaje: {
        input: document.getElementById('mensaje'),
        validate: (value) => value.trim().length >= 10,
        message: 'El mensaje debe tener al menos 10 caracteres.'
      }
    };

    const formStatus = document.getElementById('form-status');

    // Muestra u oculta el mensaje de error de un campo
    const setFieldError = (name, hasError) => {
      const { input } = fields[name];
      const errorEl = document.querySelector(`[data-error-for="${name}"]`);
      input.classList.toggle('input-invalid', hasError);
      if (errorEl) {
        errorEl.textContent = hasError ? fields[name].message : '';
      }
    };

    // Valida un campo individual y devuelve true si es válido
    const validateField = (name) => {
      const field = fields[name];
      const isValid = field.validate(field.input.value);
      setFieldError(name, !isValid);
      return isValid;
    };

    // Validación en tiempo real al salir del campo
    Object.keys(fields).forEach((name) => {
      fields[name].input.addEventListener('blur', () => validateField(name));
      fields[name].input.addEventListener('input', () => {
        if (fields[name].input.classList.contains('input-invalid')) {
          validateField(name);
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const allValid = Object.keys(fields)
        .map((name) => validateField(name))
        .every(Boolean);

      if (!allValid) {
        formStatus.textContent = 'Revisa los campos marcados en rojo.';
        formStatus.className = 'form-status form-status-error';
        return;
      }

      // Simulación de envío exitoso (aquí se conectaría el backend)
      formStatus.textContent = '¡Gracias! Tu mensaje fue enviado correctamente.';
      formStatus.className = 'form-status form-status-success';
      contactForm.reset();
    });
  }

});