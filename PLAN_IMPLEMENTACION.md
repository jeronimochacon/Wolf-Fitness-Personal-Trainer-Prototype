# Plan de Implementación - Ajustes de Traducción Automática

Este plan detalla los cambios necesarios para evitar que los navegadores (como Google Chrome) traduzcan incorrectamente nombres propios y términos específicos de la marca "Wolf Fitness".

## Objetivos
- Evitar la traducción de "Wolf Family" a "Familia de Lobos".
- Evitar la traducción del nombre "Andres Wolf" a "Andres Lobo".
- Asegurar que el CTA "Unirme a Wolf Family" se mantenga íntegro.
- Evitar que la palabra "Planes" sea traducida como "Aviones" en la sección de precios.
- Corregir el idioma base de la página para reducir la activación innecesaria del traductor.

## Estrategia Técnica
1. **Cambio de Idioma HTML**: Cambiar el atributo `lang="en"` por `lang="es"` en `index.html` para indicar correctamente que el contenido es en español.
2. **Atributo `translate="no"`**: Utilizar el atributo estándar de HTML5 `translate="no"` en los elementos que contienen texto sensible.
3. **Clase `notranslate`**: Opcionalmente, añadir la clase CSS `notranslate` que es reconocida por Google Translate para mayor compatibilidad.

---

## Checklist de Tareas

### 1. Configuración Global
- [ ] Modificar `index.html`: Cambiar `<html lang="en">` a `<html lang="es">`.

### 2. Header / Navbar (`App.tsx`)
- [ ] Aplicar `translate="no"` al logo "WOLF FAMILY".

### 3. Hero Section (`src/components/Hero.tsx`)
- [ ] Aplicar `translate="no"` al botón CTA que dice "Unirme a Wolf Family".
- [ ] Aplicar `translate="no"` al nombre "Andres Wolf" en la tarjeta del coach.

### 4. Sección de Precios (`src/components/Pricing.tsx`)
- [ ] Aplicar `translate="no"` a los títulos de los planes ("Básico", "Intermedio", "Avanzado").
- [ ] Aplicar `translate="no"` a la palabra "Planes" en el encabezado de la sección si existe.
- [ ] Revisar el texto "Cada plan incluye acceso al Método Wolf" en la cabecera de la sección.

### 5. Footer (`src/components/Footer.tsx`)
- [ ] Aplicar `translate="no"` al nombre "ANDRES WOLF" en el footer.
- [ ] Aplicar `translate="no"` al texto del copyright "Andres Wolf Coaching".
- [ ] Asegurar que la lista de programas ("Plan Básico", etc.) tenga protección contra traducción.

### 6. Verificación Final
- [ ] Abrir la página en Google Chrome.
- [ ] Forzar la traducción (si aún aparece la opción) y verificar que los términos protegidos no cambien.
- [ ] Verificar que "planes" ya no se convierta en "aviones".

---

## Notas Adicionales
- El atributo `translate="no"` es la forma más limpia y moderna de manejar esto sin afectar el SEO o el diseño.
- Al cambiar el `lang` a `es`, Chrome debería dejar de ofrecer traducir la página automáticamente a los usuarios que ya tienen el español como idioma preferido.
