# BookLoan — Frontend

Frontend of a book lending management system. Allows users to browse, request, and manage book loans. Built with a focus on clean architecture, maintainability, and low coupling.

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server and bundler
- **CSS Modules** — scoped component styles
- **CSS Custom Properties** — design tokens (no CSS-in-JS)

---

## Architecture

This project follows a **feature-based clean architecture** inspired by the book *Frontend Architecture* by Iago Lastra Rodríguez.

### Core principles

- **Dependency rule:** UI → Model → Interface ← API. Dependencies only point inward. No layer can import from a layer above it.
- **Interfaces as contracts:** each feature defines a TypeScript `interface` that decouples the model from the API implementation.
- **Dependency inversion:** use cases depend on interfaces, not on concrete implementations.
- **Features are vertical slices:** each feature is self-contained and independent from other features.
- **No business logic in components:** components only handle UI concerns.

### Folder structure

```
src/
├── app/
│   ├── App.tsx                  # Composition root
│   └── App.module.css
├── features/
│   └── <feature>/
│       ├── interfaces/
│       │   └── I<Service>.ts    # Stable contract (interface)
│       ├── model/
│       │   ├── <feature>.types.ts   # Domain types
│       │   └── <useCase>.ts         # Pure use case function
│       ├── api/
│       │   └── <service>.ts     # Implements the interface (fetch lives here)
│       └── ui/
│           ├── hooks/
│           │   └── use<X>.ts    # Composition point: wires API into use case
│           ├── <Component>.tsx
│           └── <Component>.module.css
├── shared/
│   ├── hooks/                   # Shared hooks (e.g. useTheme)
│   ├── types/
│   │   └── Result.ts            # Result<T, E> discriminated union
│   └── ui/
│       └── <Component>/         # Reusable UI components
└── styles/
    ├── palette.css              # Primitive color tokens
    ├── spacing.css              # Spacing, typography, shape, motion tokens
    └── themes/
        ├── default.css          # Semantic tokens — light theme
        └── dark.css             # Semantic tokens — dark theme
```

### Data flow

```
User interaction
  → Component (UI)
    → useX hook          ← composition point, wires dependencies
      → useCase(service) ← pure function, depends on interface
        → service.method ← API implementation, fetch lives here
      ← Result<T>
    ← { data, loading, error }
  ← render feedback
```

### Design tokens

Styles are organized in three layers:

| File | Purpose |
|------|---------|
| `palette.css` | Raw color values — no semantic meaning |
| `spacing.css` | Spacing scale, font sizes, border radius, shadows, transitions |
| `themes/default.css` | Maps palette → semantic meaning (light theme) |
| `themes/dark.css` | Overrides semantic tokens for dark theme |

Components only reference semantic tokens (`--color-primary`, `--space-4`, etc.), never raw palette values.

Dark mode is activated by setting `data-theme="dark"` on the `<html>` element.

---

## Getting started

```bash
npm install
npm run dev
```

### Environment variables

Create a `.env.local` file at the project root:

```env
VITE_API_URL=http://localhost:3000
```

---

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
