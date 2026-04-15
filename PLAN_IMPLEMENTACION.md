# Plan de Implementación - Actualización de UI y Testimonios

Este documento detalla los pasos necesarios para corregir el problema de transparencia en el menú móvil y añadir la funcionalidad interactiva de "Antes y Después" en los testimonios.

## 1. Corrección del Menú Hamburguesa (Navbar)
**Problema:** El fondo del encabezado es transparente cuando no se ha hecho scroll, incluso si el menú está abierto, lo que dificulta la legibilidad en dispositivos móviles.
**Solución:** Modificar la lógica de clases en el componente `Navbar` para que el fondo sea oscuro si el menú está abierto (`menuOpen`) O si el usuario ha hecho scroll (`scrolled`).

- [x] Modificar `src/App.tsx`: Actualizar la condición de `className` en el elemento `motion.nav`.
- [x] Asegurar que el fondo del menú desplegable (`motion.div`) mantenga su opacidad y diseño premium.

## 2. Galería de Testimonios Interactiva (Antes/Después)
**Problema:** Las imágenes de antes y después se muestran estáticas una al lado de la otra.
**Solución:** Implementar un componente de slider interactivo donde el usuario pueda deslizar una barra horizontal para comparar el "Antes" (izquierda) y el "Después" (derecha) en la misma imagen.

### Detalles Técnicos:
- Se utilizará un estado local para controlar la posición del slider (0% a 100%).
- La imagen del "Antes" estará en el fondo y la del "Después" se superpondrá con un `clip-path` o ancho variable.
- Se añadirá una barra de control vertical con un manejador (handle) estilizado.

- [x] Crear el sub-componente `BeforeAfterSlider` dentro de `src/components/Testimonials.tsx`.
- [x] Implementar la lógica de interacción (mouse y touch) para el deslizamiento.
- [x] Actualizar `TestimonialCard` para reemplazar el `grid grid-cols-2` actual por el nuevo `BeforeAfterSlider`.
- [x] Estilizar el "handle" del slider con colores de marca (Rojo Wolf / Blanco) y efectos de hover.
- [x] Asegurar la responsividad del slider en móviles.

## Checklist de Progreso

### Navbar
- [x] Fondo oscuro forzado con menú abierto.
- [x] Transición suave entre estados.

### Testimonios
- [x] Estructura base del slider terminada.
- [x] Lógica de deslizamiento funcional (Click/Touch & Drag).
- [x] Etiquetas "Antes" y "Después" integradas en el slider.
- [x] Diseño visual pulido (Premium Aesthetics).
- [x] Verificación en diferentes tamaños de pantalla.

---
**Nota:** No se debe modificar la estructura de datos existente de los testimonios, ya que ya cuenta con los campos `beforeAfter.before` y `beforeAfter.after`.
