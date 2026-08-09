// import { api } from "@/lib/api";

// export async function getProjects() {
//   const response = await api.get("/projects");

//   return response.data;
// }
// import { api } from "@/lib/api";

// export const getProjects = (query = "") => {
//   return api(`/projects${query}`);
// };

import { api } from "@/lib/api";
import type { PaginatedProjects } from "@/types/project";

export function getProjects(query = "") {
  return api<PaginatedProjects>(`/projects${query}`);
}