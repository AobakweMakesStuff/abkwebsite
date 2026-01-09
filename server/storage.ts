import { projects, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private currentId: number;

  constructor() {
    this.projects = new Map();
    this.currentId = 1;
    this.seedProjects();
  }

  private seedProjects() {
    const seeds: InsertProject[] = [
      {
        title: "Godfidence Logo",
        description: "Branding and logo design for Godfidence.",
        type: "graphic",
        mediaUrl: "/images/projects/godfidence-logo.png",
        thumbnailUrl: "/images/projects/godfidence-logo.png",
        featured: true
      },
      {
        title: "WeThinkCode Branding",
        description: "Visual identity and design elements for WeThinkCode.",
        type: "graphic",
        mediaUrl: "/images/projects/wethinkcode-design.png",
        thumbnailUrl: "/images/projects/wethinkcode-design.png",
        featured: true
      },
      {
        title: "Grace Church Media",
        description: "Graphic design and media assets for Grace Church.",
        type: "graphic",
        mediaUrl: "/images/projects/grace-church.png",
        thumbnailUrl: "/images/projects/grace-church.png",
        featured: true
      },
      {
        title: "Cinematic Showreel 2024",
        description: "A compilation of professional video editing work.",
        type: "video",
        mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
        featured: true
      },
      {
        title: "Midnight Drive (Synthwave)",
        description: "Full track available on YouTube and Spotify.",
        type: "music",
        mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
        featured: true
      }
    ];

    seeds.forEach(p => {
      const id = this.currentId++;
      this.projects.set(id, { ...p, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
}

export const storage = new MemStorage();
