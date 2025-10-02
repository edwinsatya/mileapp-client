export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token').value
  
  if (token && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/')
  }

  if (!token && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
})