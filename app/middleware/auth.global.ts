export default defineNuxtRouteMiddleware(async (to) => {
  const token = useCookie('token').value
  const userStore = useUserStore()
  
  if (token) {
    if (!userStore.user) {
      await userStore.fetchUser(token)
    }

    if (to.path === '/login' || to.path === '/register') {
      return navigateTo('/')
    }
  }

  if (!token && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})