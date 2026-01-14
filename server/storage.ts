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
        description: "Minimalist and bold branding for Godfidence. A modern streetwear-inspired visual identity featuring a strong circular monogram, designed for versatile application across apparel and digital media.",
        type: "graphic",
        mediaUrl: "/attached_assets/logo1-03_1768294262000.png",
        thumbnailUrl: "/attached_assets/logo1-03_1768294262000.png",
        featured: true,
        tags: ["Logos"],
        gallery: [
          "/attached_assets/logo1-03_1768294262000.png",
          "/attached_assets/mockup_1768294261994.jpg",
          "/attached_assets/transparent_logo-01_1768294261995.png",
          "/attached_assets/different_typefaces-04_1768294261996.png"
        ]
      },
      {
        title: "WeThinkCode Branding",
        description: "Comprehensive branding and publication design for WeThinkCode_. This project involved creating a cohesive visual language across annual reports, certificates, and marketing collateral, focusing on a tech-forward and accessible aesthetic.",
        type: "graphic",
        mediaUrl: "/attached_assets/mediamodifier_image_1768295368967.jpeg",
        thumbnailUrl: "/attached_assets/mediamodifier_image_1768295368967.jpeg",
        featured: true,
        tags: ["Branding"],
        gallery: [
          "/attached_assets/mediamodifier_image_1768295368967.jpeg",
          "/attached_assets/temp20251203-12204-pbf42l_1768295368968.png",
          "/attached_assets/temp20251203-14134-47ggb_1768295368969.png",
          "/attached_assets/temp20251203-18848-e9f4zd_1768295368969.png",
          "/attached_assets/temp20251203-25913-1kn6vz2_1768295368970.png",
          "/attached_assets/temp20251203-25969-18xgsho_1768295368971.png",
          "/attached_assets/ai-created-mockup-featuring-a-person-holding-a-poster-in-the-s_1768295437217.png",
          "/attached_assets/cert1_1768295458288.png",
          "/attached_assets/cert2_1768295458289.png"
        ]
      },
      {
        title: "WeThinkCode Social Media",
        description: "Social media assets and mockups for WeThinkCode_.",
        type: "graphic",
        mediaUrl: "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_1_1768296253062.jpg",
        thumbnailUrl: "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_1_1768296253062.jpg",
        featured: false,
        tags: ["Social Media"],
        gallery: [
          "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_1_1768296253062.jpg",
          "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_2_1768296253063.jpg",
          "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_3_1768296253064.jpg",
          "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_4_1768296253066.jpg",
          "/attached_assets/1722569719027-d36ae69c-6c04-4298-9ba2-ed2b32af8a39_5_1768296253067.jpg"
        ]
      },
      {
        title: "WeThinkCode Graduation Hoodies",
        description: "Apparel design for WeThinkCode_ Graduation 2022. Featured custom typography and circuit-inspired graphics reflecting the academy's tech identity.",
        type: "graphic",
        mediaUrl: "/attached_assets/All_Sides_1768297625689.jpg",
        thumbnailUrl: "/attached_assets/All_Sides_1768297625689.jpg",
        featured: false,
        tags: ["Merch"],
        gallery: [
          "/attached_assets/All_Sides_1768297625689.jpg",
          "/attached_assets/Grad_Hoodies_Drafts-images-1_1768297625686.jpg",
          "/attached_assets/Grad_Hoodies_Drafts-images-2_1768297625687.jpg",
          "/attached_assets/Grad_Hoodies_Drafts-images-3_1768297625688.jpg"
        ]
      },
      {
        title: "Digital Signage & Social Media",
        description: "Graphic design and social media content created during the COVID-19 pandemic. This project involved creating digital signage for 'Church@Home' services and maintaining a consistent visual presence while services were held exclusively online.",
        type: "graphic",
        mediaUrl: "/attached_assets/behance_img_3_1768301329920.jpg",
        thumbnailUrl: "/attached_assets/behance_img_3_1768301329920.jpg",
        featured: true,
        tags: ["Church"],
        gallery: [
          "/attached_assets/behance_img_6_1768301329918.jpg",
          "/attached_assets/behance_img_2_1768301329919.jpg",
          "/attached_assets/behance_img_3_1768301329920.jpg",
          "/attached_assets/behance_img_4_1768301329921.jpg",
          "/attached_assets/behance_img_5_1768301329922.jpg"
        ]
      },
      {
        title: "Conference & Special Events",
        description: "A collection of event-specific graphics including promotional material for virtual conferences, prayer meetings, youth and father's day celebrations, and marriage anniversaries. These designs focus on clear communication of event details while maintaining a vibrant community aesthetic.",
        type: "graphic",
        mediaUrl: "/attached_assets/behance_img_5_1768301463022.png",
        thumbnailUrl: "/attached_assets/behance_img_5_1768301463022.png",
        featured: true,
        tags: ["Church"],
        gallery: [
          "/attached_assets/behance_img_1_1768301463015.jpg",
          "/attached_assets/behance_img_2_1768301463017.jpg",
          "/attached_assets/behance_img_3_1768301463018.jpg",
          "/attached_assets/behance_img_4_1768301463019.jpg",
          "/attached_assets/behance_img_5_1768301463022.png",
          "/attached_assets/behance_img_6_1768301463024.jpg",
          "/attached_assets/behance_img_7_1768301463027.jpg"
        ]
      },
      {
        title: "Marriage Ablaze Branding",
        description: "Event branding and promotional graphics for the 'Marriage Ablaze' ministry. This project featured warm, inviting visuals for couples' lunches, Valentine's Day celebrations, webinars on conflict resolution, and community braais, all designed to foster connection and strengthening relationships.",
        type: "graphic",
        mediaUrl: "/attached_assets/behance_img_1_1768301956310.png",
        thumbnailUrl: "/attached_assets/behance_img_1_1768301956310.png",
        featured: true,
        tags: ["Church"],
        gallery: [
          "/attached_assets/behance_img_1_1768301956310.png",
          "/attached_assets/behance_img_2_1768301956311.jpg",
          "/attached_assets/behance_img_3_1768301956312.jpg",
          "/attached_assets/behance_img_4_1768301956313.png",
          "/attached_assets/behance_img_5_1768301956317.jpg"
        ]
      },
      {
        title: "Perfume ASMR",
        description: "A cinematic ASMR video edit focusing on the sensory experience of luxury fragrance. Features detailed close-ups, crisp sound design, and elegant transitions.",
        type: "video",
        mediaUrl: "/attached_assets/Perfume_ASMR_1768370424181.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80",
        featured: true,
        tags: ["ASMR", "Editing"],
        gallery: []
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
