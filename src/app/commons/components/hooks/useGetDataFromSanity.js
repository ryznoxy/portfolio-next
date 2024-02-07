import { fetcher } from "@/app/services/fetcher";
import useSWR from "swr";

export function useGetDataProjects() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  return {
    data,
    isLoading,
    error,
  };
}

export function useGetDataExperiences() {
  const { data, error, isLoading } = useSWR("/api/experiences", fetcher);

  return {
    data,
    isLoading,
    error,
  };
}

export function useGetDataLinks() {
  const { data, error, isLoading } = useSWR("/api/links", fetcher);

  return {
    data,
    isLoading,
    error,
  };
}
