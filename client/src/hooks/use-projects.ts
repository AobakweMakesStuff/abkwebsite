import { useQuery } from "@tanstack/react-query";
import projectsData from "../data/projects.json"
import { type Project } from "@shared/schema"

export function useProjects() {
  return useQuery({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      // Instead of fetch, we return the imported JSON data
      return projectsData as Project[];
    },
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: ["/api/projects", id],
    queryFn: async () => {
      if (!id) return null;
      
      // Look through the JSON array to find the specific project
      const project = (projectsData as Project[]).find(p => p.id === id);
      
      if (!project) return null;
      return project;
    },
    enabled: !!id,
  });
}
