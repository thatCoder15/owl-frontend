// export interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   githubUrl: string;
//   liveUrl: string;
// }

export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  technologies: string[];
};

export type PaginatedProjects = {
  items: Project[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};