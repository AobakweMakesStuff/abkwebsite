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
        title: "Neon Cityscapes",
        description: "A series of digital paintings exploring cyberpunk aesthetics.",
        type: "graphic",
        mediaUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80",
        thumbnailUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80",
        featured: true
      },
      {
        title: "Abstract Forms",
        description: "3D rendered abstract geometry and light studies.",
        type: "graphic",
        mediaUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
        thumbnailUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
        featured: true
      },
      {
        title: "Cinematic Showreel",
        description: "Compilation of video editing and motion graphics work.",
        type: "video",
        mediaUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ", // Placeholder 4K landscape
        thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
        featured: true
      },
      {
        title: "Short Film: The Journey",
        description: "A narrative short film about finding one's path.",
        type: "video",
        mediaUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U", // Placeholder
        thumbnailUrl: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80",
        featured: false
      },
      {
        title: "Midnight Drive",
        description: "Synthwave track composed for night drives.",
        type: "music",
        mediaUrl: "https://soundcloud.com/awfulpune/sets/synthwave", // Placeholder
        thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
        featured: true
      },
       {
        title: "Ambient Thoughts",
        description: "Lo-fi beats for studying and relaxing.",
        type: "music",
        mediaUrl: "https://soundcloud.com/lofi_girl/sets/lofi-hip-hop-music-beats", // Placeholder
        thumbnailUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
        featured: false
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
