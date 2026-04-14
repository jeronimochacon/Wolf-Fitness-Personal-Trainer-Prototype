# Plan de Implementación: Actualización Wolf Fitness Personal Trainer

Este documento detalla los pasos necesarios para realizar las actualizaciones solicitadas en el prototipo de Wolf Fitness.

## Checklist de Tareas

### 1. Traducción Completa al Español
- [ ] **App.tsx**: Traducir enlaces de navegación y botones globales.
- [ ] **Hero.tsx**: Traducir el título, descripción, estadísticas y etiquetas de la sección principal.
- [ ] **Method.tsx**: Traducir los 3 pasos del sistema, subtítulos, descripciones y etiquetas.
- [ ] **Testimonials.tsx**: Traducir los testimonios y los títulos de la sección.
- [ ] **Pricing.tsx**: Traducir los nombres de los planes, características y botones de compra.
- [ ] **FAQ.tsx**: Traducir todas las preguntas y respuestas.
- [ ] **Footer.tsx**: Traducir la información de contacto, enlaces y avisos legales.

### 2. Cambios en la Navegación
- [ ] Cambiar el texto del botón "Method" por "Sistema" en la barra de navegación superior.

### 3. Visibilidad de Imagen Hero en Móvil
- [ ] Modificar `Hero.tsx` para eliminar la clase `hidden lg:block` del contenedor de la imagen.
- [ ] Ajustar el layout de la sección Hero para que la imagen se vea correctamente debajo del texto en dispositivos móviles.

### 4. Imagen Hero Local
- [ ] Crear el directorio `public/assets` para almacenar recursos locales.
- [ ] Configurar la ruta de la imagen en `Hero.tsx` para que use el archivo local (ej: `/assets/hero-wolf.jpg`).
- [ ] *Nota: El usuario debe subir la imagen a esta carpeta.*

### 5. Animación de Hover en Botones Call to Action (CTA)
- [ ] Añadir `box-shadow` rojo intenso en el estado hover de los botones principales.
- [ ] Asegurar que la transición sea suave (`transition-shadow`).

---

## Detalles Técnicos

### Localización
Se reemplazará todo el contenido estático en inglés por su equivalente en español directamente en los componentes de React.

### Estilos (Tailwind CSS)
| Elemento | Cambio Sugerido |
| :--- | :--- |
| **Imagen Hero** | Cambiar `hidden lg:block` a `block w-full mt-12 lg:mt-0` |
| **Botones CTA** | Añadir `hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]` |

### Estructura de Archivos
Se recomienda la siguiente ruta para la nueva imagen:
`./public/assets/hero-wolf.jpg`
