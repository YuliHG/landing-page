# Cambios – Integrante 2 (Marco)

Documentación de los cambios realizados en las secciones asignadas al Integrante 2:
**Productos**, **Contacto** (formulario + validación) y **Políticas de Seguridad**.

## Resumen de archivos modificados

| Archivo | Cambios |
| --- | --- |
| `index.html` | Tarjetas de productos, formulario de contacto y contenido de políticas de seguridad. |
| `js/main.js` | Validación y envío simulado del formulario de contacto. |
| `css/styles.css` | Estilos de productos, formulario y tarjetas de seguridad. |

---

## 1. `index.html`

### Sección Productos (`#productos`)
Se agregaron **6 tarjetas de producto** dentro de `.products-grid`. Cada tarjeta usa la estructura:

```html
<article class="product-card">
  <div class="product-img" aria-hidden="true">MG</div>
  <div class="product-body">
    <h3>Nombre del producto</h3>
    <p>Descripción breve.</p>
    <span class="product-price">$000 MXN</span>
  </div>
</article>
```

Productos incluidos y **precios en pesos mexicanos (MXN)**, dentro del rango estándar del mercado deportivo en México:

| Producto | Precio |
| --- | --- |
| Leggings Deportivos | $499 MXN |
| Top Deportivo | $349 MXN |
| Camiseta Dry-Fit | $299 MXN |
| Chaqueta Rompevientos | $799 MXN |
| Shorts de Entrenamiento | $399 MXN |
| Jogger Urbano | $549 MXN |

> Nota: `product-img` es un marcador visual (gradiente con las iniciales "MG"). Si más adelante hay imágenes reales, se reemplaza por una etiqueta `<img>`.

### Sección Contacto (`#contacto`)
Se agregó el formulario `#contact-form` dentro de `.contact-wrapper`, con `novalidate` para manejar la validación desde JavaScript. Campos:

- `#nombre` (texto, obligatorio)
- `#email` (correo, obligatorio)
- `#mensaje` (textarea, obligatorio)
- `#form-status` para mostrar el resultado del envío (con `role="status"` y `aria-live="polite"`)

Cada campo tiene un `<span class="form-error" data-error-for="...">` donde se imprime el mensaje de error.

### Sección Políticas de Seguridad (`#seguridad`)
Se agregaron **4 tarjetas** dentro de `.security-content`:

1. Protección de datos
2. Transacciones seguras
3. Privacidad garantizada
4. Cambios y devoluciones

---

## 2. `js/main.js`

Se implementó la lógica del Integrante 2 dentro del bloque `DOMContentLoaded` (después de la lógica del Integrante 1).

### Funcionalidad

- **Validación por campo** mediante el objeto `fields`:
  - `nombre`: mínimo 3 caracteres.
  - `email`: formato válido por expresión regular.
  - `mensaje`: mínimo 10 caracteres.
- **Validación en tiempo real**:
  - Al salir del campo (`blur`) se valida siempre.
  - Al escribir (`input`) solo se revalida si el campo ya estaba marcado como inválido.
- **Estados visuales**: agrega/quita la clase `.input-invalid` y muestra el mensaje en el `span` correspondiente.
- **Envío del formulario**: previene el envío por defecto, valida todos los campos y muestra un mensaje en `#form-status`:
  - Error: "Revisa los campos marcados en rojo."
  - Éxito: "¡Gracias! Tu mensaje fue enviado correctamente." y se limpia el formulario.

> Importante: el envío es una **simulación**. Para conectar un backend real se debe reemplazar el bloque de éxito (al final del manejador `submit`) por la petición correspondiente (`fetch`/API/EmailJS, etc.).

---

## 3. `css/styles.css`

Se agregaron estilos al final del archivo, bajo el encabezado *"ESTILOS INTEGRANTE 2"*, reutilizando las variables de la paleta existente (`--primary`, `--accent`, `--card-bg`, etc.).

### Productos
- `.products-grid`: rejilla responsiva (`auto-fit`, mínimo 260px).
- `.product-card`: tarjeta con borde, sombra y efecto hover (elevación).
- `.product-img`: franja superior con degradado azul y las iniciales.
- `.product-price`: precio resaltado en azul de acento.

### Contacto
- `.contact-wrapper`: ancho máximo centrado.
- `.contact-form`: tarjeta del formulario.
- `.form-group`: disposición vertical de etiqueta, campo y error.
- Estados de foco (`:focus`) y error (`.input-invalid`) con borde y sombra.
- `.form-status`, `.form-status-error`, `.form-status-success`: mensajes de resultado.

### Seguridad
- `.security-content`: rejilla responsiva.
- `.security-card`: tarjeta con borde izquierdo azul destacado.

---

## Historial de cambios

1. **Estructura HTML (Productos, Contacto y Seguridad)**
   - 6 tarjetas de productos en `#productos`.
   - Formulario de contacto `#contact-form` en `#contacto`.
   - 4 tarjetas informativas en `#seguridad`.
2. **Lógica JavaScript (validación y envío del formulario)**
   - Validación por campo, en tiempo real y estados de error.
   - Envío simulado con mensaje de éxito/error.
3. **Estilos CSS**
   - Estilos de productos, formulario y tarjetas de seguridad.
4. **Actualización de precios**
   - Se cambiaron los precios de formato con separador de miles por punto (ej. `$49.900`) a **pesos mexicanos (MXN)** con formato `$000 MXN`, ajustados a rangos estándar del mercado en México.

---

## Verificación

- Sintaxis de JavaScript validada con `node --check js/main.js` → **OK**.
- Sin dependencias externas: es un sitio estático (HTML + CSS + JS puro).

## Cómo verlo localmente

Abrir `index.html` en el navegador, o levantar un servidor local desde la raíz:

```bash
npx serve .
```

o

```bash
npx http-server -p 8080 -o
```
