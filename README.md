# Comparador de Propiedades por Barrio - Córdoba

Este proyecto es una aplicación web para comparar propiedades inmobiliarias agrupadas y filtradas por barrios de la ciudad de Córdoba, Argentina. Permite buscar propiedades, filtrar por barrio y etiquetas (tags) extraídas del título, y visualizar estadísticas básicas.

---

## Características principales

- Listado dinámico de propiedades con detalles (precio, superficie, ubicación, link).
- Detección automática del barrio basado en la ubicación textual.
- Filtro interactivo por barrio para acotar resultados.
- Sistema de tags extraídos automáticamente para filtrar características destacadas.
- Estadísticas básicas sobre las propiedades filtradas (cantidad, promedio de precio).
- UI limpia y responsiva, con efectos hover y diseño moderno usando Tailwind CSS.

---

## Tecnologías usadas

- **React** (TypeScript) para la interfaz de usuario.
- **Tailwind CSS** para estilos.
- Lógica personalizada para extracción de tags y detección de barrios.
- API simulada para obtener el listado de propiedades (puede adaptarse a API real).

---

## Estructura del proyecto

- `/src`
  - `App.tsx` — Componente principal con lógica de filtrado y estado.
  - `/components`
    - `ListingCard.tsx` — Componente para mostrar cada propiedad con tags clicables.
    - `FilterBar.tsx` — Barra para seleccionar barrios y filtrar.
    - `StatsPanel.tsx` — Panel con estadísticas básicas.
  - `/utils`
    - `barrios.ts` — Listado de barrios de Córdoba.
    - `extractTags.ts` — Función para extraer tags de títulos.
  - `/api.ts` — Simulación de llamada a API para obtener listados.


