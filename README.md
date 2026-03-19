# Aviana Frontend

Frontend application for **Aviana**, a smart airport workforce platform that helps supervisors monitor staff deployment in real time, respond to disruptions, and improve operational performance.

This project is built with **React**, **TypeScript**, and **Vite**, and is being structured from the beginning with a professional, scalable architecture suitable for an enterprise application.

---

## Tech Stack

### Core

- **React 19** — UI library
- **TypeScript** — static typing for safer and more maintainable code
- **Vite** — fast development server and build tool

### Routing

- **React Router** — application routing using the Data Router approach

### UI

- **MUI (Material UI)** — component library for building a consistent professional interface
- **Emotion** — styling engine used by MUI

### Data Fetching / Server State

- **TanStack Query** — fetching, caching, mutations, loading states, and server-state management
- **Axios** — HTTP client for API communication

### Forms and Validation

- **React Hook Form** — performant form state management
- **Zod** — schema validation and typed validation rules
- **@hookform/resolvers** — integration between React Hook Form and Zod

### Client State

- **Zustand** — lightweight global client-side state management for UI/app state when needed

### Code Quality

- **ESLint** — linting
- **Prettier** — code formatting

---

## Current Project Goal

At this stage, the project is in its **initial frontend setup phase**.

The main goal right now is to establish:

- a clean and scalable folder structure
- base application providers
- routing setup
- MUI theme setup
- professional separation of concerns
- readiness for future API integration with the backend

This means the project is being prepared to support:

- typed API services
- feature-based modules
- reusable UI components
- custom hooks
- form validation
- scalable page/layout architecture

---

## Proposed Professional Structure

The project is intended to follow a structure similar to this:

```text
src/
  app/
    providers/
      AppProviders.tsx

  components/
    ui/

  features/
    <feature-name>/
      api/
      components/
      hooks/
      schemas/
      types/

  layouts/

  lib/
    axios.ts

  pages/
    <page-name>/

  router/
    index.tsx

  store/
    uiStore.ts

  theme/
    index.ts

  types/

  main.tsx
```

---

## Structure Explanation

### `app/`

Application-level setup and shared providers.

Example:

- QueryClientProvider
- ThemeProvider
- global wrappers

### `components/`

Reusable presentational components shared across features.

Example:

- buttons
- cards
- section wrappers
- reusable table UI parts

### `features/`

Feature-based business modules.

Each feature should keep its own:

- `api/` → API request functions
- `components/` → feature UI pieces
- `hooks/` → React Query hooks or other feature hooks
- `schemas/` → Zod validation schemas
- `types/` → feature-specific TypeScript types

This keeps the codebase modular and easy to scale.

### `layouts/`

Application layouts shared across pages.

Example:

- authenticated layout
- dashboard layout
- public layout

### `lib/`

Low-level shared utilities and configuration.

Example:

- Axios instance
- helper clients
- utility setup files

### `pages/`

Route-level page components.

These should mostly compose feature components and layouts, not contain too much business logic directly.

### `router/`

Centralized React Router configuration.

### `store/`

Zustand stores for client-side UI/app state.

Use this only for frontend state, not for server state.

### `theme/`

MUI theme setup.

At the beginning, the theme should stay close to MUI defaults, with only light customization such as brand colors.

### `types/`

Shared global TypeScript types.

---

## Architecture Principles

This project is being organized with the following principles in mind:

- **separation of concerns**
- **feature-based modularity**
- **shared reusable UI components**
- **typed API layer**
- **clear distinction between server state and client state**
- **scalable structure for future growth**

### Server state vs client state

#### TanStack Query

Use for:

- backend/API data
- fetching and caching
- loading/error states
- mutations
- invalidation and refetching

#### Zustand

Use for:

- sidebar open/close
- selected filters
- temporary UI state
- local app preferences

---

## Planned Library Usage

### React Router

Used for route definitions and navigation.

### TanStack Query

Used for:

- query hooks
- mutations
- caching
- async loading and error handling

### Axios

Used inside dedicated API service files.

Example direction:

- `src/lib/axios.ts` for the shared client
- `src/features/employees/api/employeesApi.ts` for employees endpoints

### React Hook Form + Zod

Used together for strongly typed and validated forms.

Example direction:

- Zod schema in `schemas/`
- form component in `components/`
- submit logic through API service + mutation hook

### MUI

Used as the main design system and component foundation.

At the moment, the theme should remain mostly default, with only small brand-oriented palette customization.

## Scripts

Common scripts used in the project:

```bash
npm run dev
npm run build
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

---
