# aobakwemakesstuff Portfolio

A multidisciplinary creative portfolio showcasing graphics, video, and music projects. Built with a modern TypeScript stack for high performance and visual impact.

## Repository Structure

```text
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components (Shadcn UI)
│   │   ├── pages/          # Individual portfolio pages
│   │   ├── lib/            # Utility functions and API client
│   │   └── App.tsx         # Main application entry and routing
├── server/                 # Backend Node.js/Express server
│   ├── routes.ts           # API endpoint definitions
│   ├── storage.ts          # In-memory data storage and seeding
│   └── index.ts            # Server entry point
├── shared/                 # Shared TypeScript types and API schemas
│   ├── schema.ts           # Database/Project data models
│   └── routes.ts           # API contract and route definitions
└── attached_assets/        # Original project documentation and assets
```

## Local Development Setup

To run this project on your local machine, follow these steps:

1.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) (v18 or later) installed.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run the Application**:
    ```bash
    npm run dev
    ```
4.  **Access the Site**: Open your browser and navigate to `http://localhost:5000`.

## Deployment to GitHub Pages

GitHub Pages serves static content. Since this application uses a Node.js backend for the API, you have two options for deployment:

### Option 1: Static Export (Recommended for GitHub Pages)
If you wish to host purely on GitHub Pages, you should convert the project to a static-only site:
1.  Move the project data from `server/storage.ts` into a static JSON file in `client/public/data/projects.json`.
2.  Update the frontend to fetch from this JSON file instead of the `/api/projects` endpoint.
3.  Build the static assets:
    ```bash
    npm run build
    ```
4.  Push the contents of the `dist/public` folder to your `gh-pages` branch.

### Option 2: Full-Stack Hosting (Alternative)
If you require the dynamic API features, consider platforms like **Replit**, **Vercel**, or **Heroku**, which support running the Node.js backend alongside the frontend.

## Replacing Placeholder Content

To add your actual creative work:
1.  **Graphics**: Update the `mediaUrl` in `server/storage.ts` with links to your hosted images (or place them in `client/public/images/`).
2.  **Videos**: Use YouTube or Vimeo URLs in the `mediaUrl` field. The frontend uses `react-player` to handle these automatically.
3.  **Music**: Provide SoundCloud URLs or direct links to audio files in the `mediaUrl` field.

## Technical Details

-   **Frontend**: React, Tailwind CSS, Shadcn UI, Framer Motion.
-   **Backend**: Node.js, Express.
-   **Icons**: Lucide React.
-   **Media Playback**: React Player.
