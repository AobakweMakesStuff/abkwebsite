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

1.  **Prerequisites**:
    - [Node.js](https://nodejs.org/) (v20 or later recommended)
    - [NPM](https://www.npmjs.com/) (usually comes with Node.js)
    - [Git](https://git-scm.com/) (for version control)
    - A code editor like [VS Code](https://code.visualstudio.com/)

2.  **Environment Setup**:
    - **Replit SSH (Recommended for VS Code)**:
        1. Open the **SSH** pane in your Replit project.
        2. Follow the instructions to add your public SSH key.
        3. Use the provided SSH command to connect your local VS Code to Replit using the "Remote - SSH" extension.
    - **Clone Locally**:
        1. Clone the repository: `git clone <your-repo-url>`
        2. Navigate to the directory: `cd <your-project-folder>`

3.  **Install Dependencies**:
    ```bash
    npm install
    ```

4.  **Run the Application**:
    ```bash
    npm run dev
    ```

5.  **Access the Site**: Open your browser and navigate to `http://localhost:5000`.

## Deployment to GitHub Pages

GitHub Pages serves static content. Since this application uses a Node.js backend for the API, you have two options for deployment:

### Option 1: Static Export (Recommended for GitHub Pages)

GitHub Pages is a free hosting service for static sites. To use it:

1.  **Migrate Data to JSON**:
    - Move your project data from `server/storage.ts` into a static JSON file (e.g., `client/src/data/projects.json`).
    - Update your frontend components (like `ProjectGrid.tsx`) to import this JSON file directly or fetch it using `fetch('/data/projects.json')`.
2.  **Configure Vite**:
    - In `vite.config.ts`, set the `base` property to your repository name (e.g., `base: '/my-portfolio/'`).
3.  **Build the Project**:
    ```bash
    npm run build
    ```
    This creates a `dist` folder.
4.  **Deploy to GitHub**:
    - You can use the `gh-pages` package:
      ```bash
      npm install -D gh-pages
      ```
    - Add these scripts to `package.json`:
      ```json
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist/public"
      ```
    - Run: `npm run deploy`
5.  **Enable GitHub Pages**: In your GitHub repository settings, go to **Pages** and set the source to the `gh-pages` branch.

### Option 2: Full-Stack Hosting (Alternative)
If you require the dynamic API features, consider platforms like **Replit**, **Vercel**, or **Heroku**, which support running the Node.js backend alongside the frontend. GitHub Pages does **not** support Node.js backends.

## Replacing Placeholder Content

To add your actual creative work:
1.  **Graphics**: Place your image files in `client/public/images/projects/`. Update the `mediaUrl` and `thumbnailUrl` in `server/storage.ts` to `/images/projects/your-file.png`.
2.  **Videos**: Use YouTube URLs in the `mediaUrl` field.
3.  **Music**: Use YouTube or Spotify embed links in the `mediaUrl` field.

## Technical Details

-   **Frontend**: React, Tailwind CSS, Shadcn UI, Framer Motion.
-   **Backend**: Node.js, Express.
-   **Icons**: Lucide React.
-   **Media Playback**: React Player.
