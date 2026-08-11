import { useQuery } from "@tanstack/react-query";

import { getProjects } from "@/services/project.service";
import { PaginatedProjects } from "@/types/project";

export function useProjects() {
  return useQuery<PaginatedProjects>({
  queryKey: ["projects"],
  queryFn: () => getProjects(),
});
}