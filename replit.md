# aobakwemakesstuff Portfolio

## Overview

A multidisciplinary creative portfolio website for "aobakwemakesstuff" (Aobakwe) showcasing graphics, video, and music projects. Built with a modern TypeScript full-stack architecture featuring a React frontend and Express backend, designed for high visual impact with smooth animations and responsive layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Shadcn UI (Radix primitives with custom styling)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Media Embedding**: react-player for YouTube, Vimeo, and SoundCloud content

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Data Storage**: Currently uses in-memory storage (`MemStorage` class) with seeded project data
- **Database Schema**: Drizzle ORM with PostgreSQL schema defined (ready for database connection)

### Project Structure
- `client/` - React frontend application with pages, components, and hooks
- `server/` - Express backend with routes and storage logic
- `shared/` - TypeScript types and API contracts shared between frontend and backend

### Key Design Patterns
- **Shared Types**: Schema definitions in `shared/schema.ts` used by both client and server
- **API Contracts**: Route definitions with Zod schemas in `shared/routes.ts` for type-safe API calls
- **Component Composition**: Reusable UI primitives from Shadcn with custom portfolio components
- **Custom Hooks**: Data fetching abstracted into hooks like `useProjects()` and `useProject(id)`

### Build System
- **Development**: Vite with HMR for the frontend, tsx for the backend
- **Production**: esbuild bundles the server, Vite builds static frontend assets
- **Output**: Combined into `dist/` directory with server and public assets

## External Dependencies

### UI & Styling
- Radix UI primitives (dialogs, tooltips, navigation, etc.)
- Tailwind CSS with custom theme configuration
- class-variance-authority and tailwind-merge for dynamic styling

### Data & State
- TanStack React Query for data fetching and caching
- Zod for runtime validation and type inference
- Drizzle ORM with drizzle-zod for database schema and validation

### Media
- react-player for embedded video/audio content (YouTube, Vimeo, SoundCloud)
- Framer Motion for animations
- Lucide React for icons

### Database (Configured but not yet provisioned)
- PostgreSQL via Drizzle ORM
- Schema supports projects with title, description, type, media URLs, and featured flag
- Drizzle Kit for migrations (`npm run db:push`)

### Development Tools
- Vite with React plugin and Replit-specific plugins
- TypeScript with strict mode
- PostCSS with Tailwind and Autoprefixer