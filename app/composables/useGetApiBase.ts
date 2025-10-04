export function useGetApiBase(endpoint: string) {
  const apiBase = useRuntimeConfig().public.apiBase as string
  return `${apiBase}${endpoint}`
}