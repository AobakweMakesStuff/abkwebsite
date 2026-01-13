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
        title: "Amanda Hendricks Logo",
        description: "Branding and logo design for Amanda Hendricks Ultrasound Diagnostics. A clean, professional medical visual identity that balances clinical precision with a compassionate touch.",
        type: "graphic",
        mediaUrl: "/attached_assets/AH_Logos2-8_1768288499340.jpg",
        thumbnailUrl: "/attached_assets/AH_Logos2-8_1768288499340.jpg",
        featured: true,
        tags: ["Logos"],
        gallery: [
          "/attached_assets/AH_Logos2-8_1768288499340.jpg",
          "/attached_assets/d937d1204645275.66ac6a6e18002_1768288499342.jpg",
          "/attached_assets/ed92c8204645275.66ac6a6d12029_1768288499343.jpg",
          "/attached_assets/new_1768288499345.jpg",
          "/attached_assets/0f0c3e204645275.66ac6a6d11857_1768288499346.jpg",
          "/attached_assets/1a9376204645275.66ac6a6d127b2_1768288499347.jpg",
          "/attached_assets/8e3525204645275.66ac6a6e172b2_1768288499348.jpg",
          "/attached_assets/773618204645275.66ac6a6d1104f_1768288499349.jpg",
          "/attached_assets/a3aabd204645275.66ac6a6e16bd8_1768288499350.jpg",
          "/attached_assets/a6471f204645275.66ac6a6e179b2_1768288499351.jpg",
          "/attached_assets/AH_Logos2-1_1768288499353.jpg",
          "/attached_assets/AH_Logos2-2_1768288499354.jpg",
          "/attached_assets/AH_Logos2-3_1768288499355.jpg",
          "/attached_assets/AH_Logos2-4_1768288499356.jpg",
          "/attached_assets/AH_Logos2-5_1768288499358.jpg",
          "/attached_assets/AH_Logos2-6_1768288499359.jpg",
          "/attached_assets/AH_Logos2-7_1768288499360.jpg"
        ]
      },
      {
        title: "WholenessWithD Logo",
        description: "Branding and logo design for WholenessWithD. A sophisticated visual identity representing spiritual and personal wholeness, featuring a rich gold palette and elegant typography.",
        type: "graphic",
        mediaUrl: "/attached_assets/FInal_logo-3_1768293572317.jpg",
        thumbnailUrl: "/attached_assets/FInal_logo-3_1768293572317.jpg",
        featured: true,
        tags: ["Logos"],
        gallery: [
          "/attached_assets/FInal_logo-3_1768293572317.jpg",
          "/attached_assets/FInal_logo-1_1768293572315.jpg",
          "/attached_assets/FInal_logo-2_1768293572316.jpg",
          "/attached_assets/Drafts_Presentation-1_1768293507917.jpg",
          "/attached_assets/Drafts_Presentation-2_1768293507918.jpg",
          "/attached_assets/Drafts_Presentation-3_1768293507919.jpg"
        ]
      },
      {
        title: "Grace Empowered Logo",
        description: "Comprehensive branding for Grace Empowered Church. A majestic and powerful visual identity that combines global outreach with biblical foundations, featuring gold metallic finishes across multiple brand applications.",
        type: "graphic",
        mediaUrl: "/attached_assets/Gold_on_Red_1768293767928.png",
        thumbnailUrl: "/attached_assets/Gold_on_Red_1768293767928.png",
        featured: true,
        tags: ["Logos"],
        gallery: [
          "/attached_assets/Gold_on_Red_1768293767928.png",
          "/attached_assets/Gold_on_Black_1768293767924.png",
          "/attached_assets/Gold_on_Purple_1768293767925.png",
          "/attached_assets/Gold_on_White_1768293767929.png",
          "/attached_assets/Gold_Transparent_1768293767930.png",
          "/attached_assets/White_Logo_1768293767934.png",
          "/attached_assets/Black_Logo_Transparent_1768293767922.png",
          "/attached_assets/Untitled_design_1768293767933.png"
        ]
      },
      {
        title: "Mkholo Logo",
        description: "Corporate identity for Mkholo HR & Labor Consulting. A professional and authoritative brand system that communicates reliability and human-centric expertise through structured iconography and a warm corporate palette.",
        type: "graphic",
        mediaUrl: "/attached_assets/da1195130432335.61802b76c024b_1768294046373.png",
        thumbnailUrl: "/attached_assets/da1195130432335.61802b76c024b_1768294046373.png",
        featured: true,
        tags: ["Logos"],
        gallery: [
          "/attached_assets/da1195130432335.61802b76c024b_1768294046373.png",
          "/attached_assets/3bbe7d130432335.61802b76c17c6_1768294046374.webp",
          "/attached_assets/07f216130432335.61802b76bfc74_1768294046375.webp",
          "/attached_assets/063bd5130432335.61802b76c1087_1768294046378.webp",
          "/attached_assets/0613ba130432335.61802b76c0973_1768294046381.webp"
        ]
      },
      {
        title: "Godfidence Logo",
        description: "Branding and logo design for Godfidence.",
        type: "graphic",
        mediaUrl: "/images/projects/godfidence-logo.png",
        thumbnailUrl: "/images/projects/godfidence-logo.png",
        featured: true,
        tags: ["Logos"],
        gallery: ["/images/projects/godfidence-logo.png"]
      },
      {
        title: "WeThinkCode Branding",
        description: "Visual identity and design elements for WeThinkCode.",
        type: "graphic",
        mediaUrl: "/images/projects/wethinkcode-design.png",
        thumbnailUrl: "/images/projects/wethinkcode-design.png",
        featured: true,
        tags: ["WeThinkCode_"],
        gallery: ["/images/projects/wethinkcode-design.png"]
      },
      {
        title: "Grace Church Media",
        description: "Graphic design and media assets for Grace Church.",
        type: "graphic",
        mediaUrl: "/images/projects/grace-church.png",
        thumbnailUrl: "/images/projects/grace-church.png",
        featured: true,
        tags: ["Church"],
        gallery: ["/images/projects/grace-church.png"]
      },
      {
        title: "Cinematic Showreel 2024",
        description: "A compilation of professional video editing work.",
        type: "video",
        mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
        featured: true,
        tags: [],
        gallery: []
      },
      {
        title: "Midnight Drive (Synthwave)",
        description: "Full track available on YouTube and Spotify.",
        type: "music",
        mediaUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
        featured: true,
        tags: [],
        gallery: []
      }
    ];

    seeds.forEach(p => {
      const id = this.currentId++;
      this.projects.set(id, { 
        ...p, 
        id,
        thumbnailUrl: p.thumbnailUrl ?? null,
        featured: p.featured ?? false,
        tags: p.tags ?? [],
        gallery: p.gallery ?? []
      });
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
