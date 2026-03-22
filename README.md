# aobakwemakesstuff Portfolio

A multidisciplinary creative portfolio showcasing graphics, video, and music projects. Built with a modern TypeScript stack for high performance and visual impact.

## Publishing Changes to the Live Site

The site is hosted on Replit. Here is the workflow for making and publishing any update:

1. **Make your changes** in the editor (code, images, text, etc.)
2. **Preview** — the preview pane on the right updates live as you edit. Check that everything looks correct.
3. **Publish** — click the **Deploy** button at the top of the Replit interface, then click **Publish** to push the changes to the live `.replit.app` URL.

That's it. The live site updates within a minute or two after publishing.

> **Note:** Changes are only visible to the public after you publish. Editing in Replit only affects your private preview until you deploy.

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
1. Upload the file to `client/public/attached_assets/`
2. If the file is large (over 1 MB), compress it first using the ImageMagick command below — large images slow the site down significantly:
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
- **Hosting**: Replit (autoscale deployment)

## Running Locally (Optional)

If you ever want to run the project on your own machine:

1. Install [Node.js](https://nodejs.org/) v20+
2. Clone the repository and open it in a terminal
3. Run `npm install`
4. Run `npm run dev`
5. Open `http://localhost:5000` in your browser

The project uses in-memory storage, so it works offline immediately with no database setup required.
