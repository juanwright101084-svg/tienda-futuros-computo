# Compute Capital

Landing page de un mercado ficticio de "futuros de cómputo" y activos financieros tradicionales tokenizados en blockchain — un proyecto académico inspirado en la tesis de Larry Fink (BlackRock) sobre la capacidad de cómputo como nueva clase de activo macroeconómico.

Construido con **Next.js 16 (App Router)** y **Supabase** como backend serverless, como actividad evaluada del bootcamp de Kodigo Academy: *"Dominio del App Router y Gestión de Datos con Next.js"*.

## Demo

- **Sitio en producción:** _(agregar URL de Vercel aquí una vez desplegado)_
- **Repositorio:** _(agregar URL de GitHub aquí)_

## Características

- Catálogo de activos (futuros de cómputo y activos tokenizados) leído desde Supabase en Server Components
- 2+ rutas dinámicas: `/activos/[id]` (detalle) y `/categorias/[slug]` (listado filtrado por categoría)
- Página educativa `/aprende` con contenido y videos sobre el tema
- Gráfico de tendencia de precio (histórico de 6 meses) por activo
- Formulario de "Solicitar acceso" que escribe en Supabase mediante Server Actions
- Estados de carga (`loading.tsx`) y manejo de errores (`notFound()`) en las rutas dinámicas
- Diseño responsive con tema visual de terminal financiera (tipografía serif + monoespaciada, ticker de precios animado, intro con secuencia de arranque)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Server Components, Server Actions)
- [Supabase](https://supabase.com/) (PostgreSQL, Row Level Security)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Estructura de datos (Supabase)

| Tabla | Descripción |
|---|---|
| `categorias` | Categorías de activos (futuros de cómputo, activos tokenizados) |
| `activos` | Cada activo individual en venta, relacionado a una categoría |
| `historial_precios` | Historial de precios mensual por activo, usado para el gráfico de tendencia |
| `leads` | Solicitudes de acceso enviadas desde el formulario de contacto |

Todas las tablas tienen Row Level Security (RLS) habilitado: lectura pública para `categorias`, `activos` e `historial_precios`; inserción pública (sin lectura) para `leads`.

## Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/juanwright101084-svg/tienda-futuros-computo.git
cd tienda-futuros-computo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con:

```
NEXT_PUBLIC_SUPABASE_URL=tu_project_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_publishable_key_de_supabase
```

Estos valores se obtienen en tu proyecto de Supabase, en **Project Settings → API Keys**.

### 4. Crear las tablas en Supabase

Corre el script SQL (incluido en el repositorio como `schema.sql`, o solicítalo al autor) en el **SQL Editor** de tu proyecto de Supabase, para crear las tablas, políticas RLS y datos de ejemplo.

### 5. Correr el proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Variables de entorno necesarias

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto de Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública (publishable/anon) de Supabase, segura para exponer en el cliente |

> No se requieren credenciales privadas ni claves secretas — el proyecto solo usa la clave pública de Supabase, protegida por las políticas de RLS configuradas en cada tabla.

## Autor

Juan — proyecto académico para Kodigo Academy, Full Stack Junior Bootcamp.