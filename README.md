# Sinapsyc — Sitio web

Sitio web dinámico del centro de neurodesarrollo infantil **Sinapsyc** (Guadalajara).
Construido con **Next.js 16**, **Tailwind CSS v4** y desplegado en **Vercel**.

**Lema:** _«Abrazamos infancias, iluminamos caminos»_

---

## 🗂️ Estructura del sitio

| Sección | Ruta |
|---|---|
| Inicio | `/` |
| Acerca de Nosotros | `/nosotros` |
| Nuestro Enfoque | `/enfoque` |
| Programas (11 terapias) | `/programas` y `/programas/[terapia]` |
| Preguntas Frecuentes | `/preguntas-frecuentes` |
| Blog | `/blog` y `/blog/[articulo]` |
| Ubicación | `/ubicacion` |
| Agenda tu cita | `/contacto` |

---

## ✍️ Cómo publicar un artículo en el Blog (auto-gestionable)

El blog es **auto-gestionable**: cada artículo es un archivo de texto en la carpeta
`content/blog/`. No necesitas tocar código.

### Opción sencilla (desde GitHub, en el navegador)

1. Entra a la carpeta [`content/blog`](content/blog) en GitHub.
2. Haz clic en **Add file → Create new file**.
3. Nombra el archivo con guiones y terminación `.md`, por ejemplo:
   `consejos-para-la-hora-de-dormir.md`
4. Pega esta plantilla y edítala:

```markdown
---
title: "Título del artículo"
date: "2026-08-01"
excerpt: "Un resumen corto y cálido de 1 o 2 líneas que invite a leer."
cover: "/img/blog-cover-1.jpg"
author: "Equipo Sinapsyc"
category: "Neurodesarrollo"
tags: ["etiqueta1", "etiqueta2"]
---

Escribe aquí tu artículo. Puedes usar **negritas**, listas y subtítulos.

## Un subtítulo

Otro párrafo…

- Punto uno
- Punto dos

> Una frase destacada para el corazón.
```

5. Haz clic en **Commit changes**. En 1–2 minutos, Vercel publica el artículo
   automáticamente en el sitio. ✨

### Imágenes de portada disponibles

Ya hay portadas listas en `public/img/`:
`blog-cover-1.jpg`, `blog-cover-2.jpg`, `blog-cover-3.jpg`.
Para usar una imagen nueva, súbela a `public/img/` y referénciala como
`/img/mi-imagen.jpg` en el campo `cover`.

> 💡 Recomendación del cliente: publicar **1 o 2 artículos al mes**.

---

## 🖼️ Fotografías reales

Todas las ilustraciones actuales son caricaturas generadas para dar vida al sitio.
Cuando tengas **fotos reales del centro y del equipo**, se pueden colocar en los
espacios ya preparados (secciones de Nosotros, Enfoque, Programas y héroes de página).
Solo súbelas a `public/img/` y avísanos para sustituirlas.

---

## 📞 Datos de contacto configurables

Todos los datos (WhatsApp, dirección, horarios, redes) viven en un solo archivo:
[`src/lib/site.ts`](src/lib/site.ts). Cambia ahí el número, dirección u horario y
se actualizará en todo el sitio.

- **WhatsApp:** el formulario de contacto y todos los botones abren WhatsApp con un
  mensaje prellenado hacia el número configurado en `site.whatsapp`.

---

## 💻 Desarrollo local

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de producción
```

---

Hecho con cariño para las infancias 💛
