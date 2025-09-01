export default defineNuxtRouteMiddleware((to, from) => {
  // Проверяем аутентификацию только на клиентской стороне
  if (process.client) {
    const auth = useAuth();
    
    if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
      if (!auth.isAuthenticated.value) {
        return navigateTo('/admin/login');
      }
    }
    
    if (to.path === '/admin/login' && auth.isAuthenticated.value) {
      return navigateTo('/admin');
    }
  } else {
    // На серверной стороне проверяем через cookies
    // Используем альтернативный способ получения cookies
    const token = useCookie('auth-token').value;
    
    if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
      if (!token || token !== 'authenticated') {
        return navigateTo('/admin/login');
      }
    }
    
    if (to.path === '/admin/login' && token === 'authenticated') {
      return navigateTo('/admin');
    }
  }
});