# MORGANA — Landing Page de Ropa Deportiva

Proyecto académico (actividad universitaria) que consiste en una **landing page estática** para una marca ficticia de ropa deportiva llamada **MORGANA**. El objetivo es practicar la maquetación web con HTML, CSS y JavaScript puro, así como el trabajo colaborativo por secciones entre los integrantes del equipo.

## Descripción general

MORGANA es una marca de ropa deportiva que ofrece prendas de entrenamiento cómodas, funcionales y accesibles. La landing page presenta la marca, su catálogo de productos, un formulario de contacto y su política de seguridad.

Es un sitio **estático, sin dependencias externas**, compuesto por:

- `index.html` — estructura y contenido de la página.
- `css/styles.css` — estilos y diseño responsivo.
- `js/main.js` — interactividad (menú móvil, scroll suave y validación del formulario).
- `assets/Productos/` — imágenes de los productos.

## Estructura de la página

La página está organizada en secciones navegables mediante anclas:

| Sección | ID | Descripción |
| --- | --- | --- |
| Inicio | `#inicio` | Hero con título, descripción y botón que lleva al catálogo. |
| ¿Quiénes somos? | `#quienes-somos` | Tarjetas de Misión, Visión y Valores. |
| Productos / Servicios | `#productos` | Rejilla con 6 tarjetas de producto (imagen, descripción y precio). |
| Contacto | `#contacto` | Formulario validado (nombre, correo y mensaje). |
| Políticas de seguridad | `#seguridad` | Tarjetas informativas sobre protección de datos, pagos, privacidad y devoluciones. |

El encabezado (`header`) es fijo (*sticky*) e incluye el logo **MORGANA** y el menú de navegación, que en pantallas pequeñas se convierte en un menú hamburguesa.

## Productos

Cada tarjeta de producto incluye imagen, nombre, descripción y precio en pesos mexicanos (MXN).

| Producto | Imagen | Precio |
| --- | --- | --- |
| Leggings Deportivos | `assets/Productos/Legging.avif` | $499 MXN |
| Top Deportivo | `assets/Productos/Top deportivo.png` | $349 MXN |
| Camiseta Dry-Fit | `assets/Productos/Dry fit.jpg` | $299 MXN |
| Chaqueta Rompevientos | `assets/Productos/Rompevientos.jpg` | $799 MXN |
| Shorts de Entrenamiento | `assets/Productos/Short de entrenamiento.avif` | $399 MXN |
| Jogger Urbano | `assets/Productos/Jogger.jpg` | $549 MXN |

## Funcionalidades (JavaScript)

Archivo `js/main.js`, ejecutado al cargar el DOM (`DOMContentLoaded`):

- **Menú móvil:** el botón hamburguesa `#menu-toggle` abre/cierra el menú `#nav-menu` añadiendo la clase `.active`. El menú se cierra al hacer clic en un enlace.
- **Scroll suave:** los enlaces ancla (`href="#..."`) desplazan la vista suavemente hacia su sección.
- **Validación del formulario de contacto** (`#contact-form`):
  - `nombre`: mínimo 3 caracteres.
  - `email`: formato válido mediante expresión regular.
  - `mensaje`: mínimo 10 caracteres.
  - Valida al salir del campo (`blur`) y en tiempo real (`input`) si el campo ya era inválido.
  - Muestra errores por campo y un mensaje general en `#form-status`.
  - El envío es una **simulación** (no hay backend conectado): muestra un mensaje de éxito y limpia el formulario.

## Estilos y diseño

Definidos en `css/styles.css`. La paleta de colores es **azul, blanco, negro y gris**, controlada mediante variables CSS en `:root`:

- `--primary` / `--primary-hover`: azul corporativo.
- `--accent` / `--accent-hover`: azul brillante de acento.
- `--bg-light`, `--card-bg`, `--border-color`: fondos y bordes neutros.
- `--text-main`, `--text-muted`, `--text-white`: colores de texto.

El diseño es **responsivo**: las rejillas usan `auto-fit` con `minmax`, y el menú cambia a modo hamburguesa en pantallas menores a 768px.

## Equipo y asignación de tareas

El proyecto se dividió por integrantes, cada uno responsable de un bloque de secciones con su HTML, CSS y JS:

- **Integrante 1 (Yuli):** Header, navegación, sección Inicio (Hero) y ¿Quiénes somos?
- **Integrante 2 (Marco):** Productos, Contacto y Políticas de seguridad.

El detalle de los cambios del Integrante 2 está documentado en `Cambios Marco Ochoa.md`.

## Cómo ejecutar el proyecto

Al ser un sitio estático, basta con abrir `index.html` en el navegador. También se puede levantar un servidor local desde la raíz:

```bash
npx serve .
```

o

```bash
npx http-server -p 8080 -o
```

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, variables CSS, media queries)
- JavaScript (Vanilla JS, DOM API)
