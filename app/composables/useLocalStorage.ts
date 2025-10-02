export function useLocalStorage() {
  const setLocalStorage = (key: string, value: string) => {
    if (import.meta.client) {
      localStorage.setItem(key, value)
    }
  }

  const getLocalStorage = (key: string): string | null => {
    if (import.meta.client) {
      return localStorage.getItem(key)
    }
    return null
  }

  const removeLocalStorage = (key: string) => {
    if (import.meta.client) {
      localStorage.removeItem(key)
    }
  }

  return { setLocalStorage, getLocalStorage, removeLocalStorage }
}