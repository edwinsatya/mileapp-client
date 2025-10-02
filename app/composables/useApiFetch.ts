export async function useApiFetch(
  endpoint: string,
  options?: RequestInit
) {
  const API_BASE = useRuntimeConfig().public.apiBase as string
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
    ...options,
  })

  return res.json()
}