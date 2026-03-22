# aobakwemakesstuff Portfolio

A multidisciplinary creative portfolio showcasing graphics, video, and music projects. Built with a modern TypeScript stack for high performance and visual impact.

## Publishing Changes to the Live Site

The site is hosted on **GitHub Pages**. The workflow for pushing an update from a local IDE is:

1. **Make your changes** locally
2. **Preview locally** — run `npm run dev` and open `http://localhost:5000` to check everything looks right
3. **Commit and push** your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "describe your change here"
   git push origin main
   ```
4. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This builds the project and pushes the compiled output to the `gh-pages` branch, which GitHub Pages serves as the live site.

The live site updates within a minute or two after the deploy command finishes.

> **Note:** Just pushing to `main` does **not** update the live site. You must run `npm run deploy` after pushing for the changes to go live.

---

## Running Locally

1. Install [Node.js](https://nodejs.org/) v20+
2. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5000` in your browser.

The project uses in-memory storage, so no database setup is needed.

---

## Making Common Updates

### Updating project images or descriptions
Edit `server/storage.ts`. Each project entry has:
- `title` — display name
- `description` — shown in the card and modal
- `thumbnailUrl` — the card preview image
- `gallery` — array of images shown in the modal slideshow

Image files live in `client/public/attached_assets/`. Add new images there and reference them as `/attached_assets/your-file.jpg`.

### Adding new images
1. Drop the file into `client/public/attached_assets/`
2. **Compress it first if it's over 1 MB** — large images slow the site significantly. Use ImageMagick (install via [imagemagick.org](https://imagemagick.org)):
   ```bash
   magick your-image.png -background white -alpha remove -resize "1920x>" -quality 85 -strip your-image-opt.jpg
   ```
3. Reference the compressed file in `server/storage.ts`

### Updating page text or layout
- **Home page** — `client/src/pages/Home.tsx`
- **Graphics page** — `client/src/pages/Graphics.tsx`
- **Video Edits page** — `client/src/pages/VideoEdits.tsx`
- **About page** — `client/src/pages/About.tsx`
- **Footer** (email, location) — `client/src/components/Footer.tsx`

### Updating hero background videos
Hero videos are stored in `client/public/attached_assets/`. The imports are at the top of `Graphics.tsx` and `VideoEdits.tsx`. Replace the file and update the import path.

---

## Project Structure

```text
├── client/                 # Frontend React application
│   ├── public/
│   │   └── attached_assets/    # All images and videos served to the browser
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Individual portfolio pages
│       └── App.tsx         # Routing
├── server/                 # Backend Node.js/Express server
│   ├── storage.ts          # All project data (titles, images, descriptions)
│   └── index.ts            # Server entry point
└── shared/                 # Shared TypeScript types
```

## Tech Stack

- **Frontend**: React, Tailwind CSS, Shadcn UI, Framer Motion
- **Backend**: Node.js, Express
- **Icons**: Lucide React
- **Media Playback**: React Player
- **Hosting**: GitHub Pages
