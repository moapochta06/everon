export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  
  const login = () => {
    isAuthenticated.value = true
    // Сохраняем в localStorage для сохранения состояния
    if (process.client) {
      localStorage.setItem('admin-authenticated', 'true')
    }
  }
  
  const logout = () => {
    isAuthenticated.value = false
    if (process.client) {
      localStorage.removeItem('admin-authenticated')
    }
  }
  
  // Восстанавливаем состояние при загрузке
  if (process.client) {
    const saved = localStorage.getItem('admin-authenticated')
    if (saved) {
      isAuthenticated.value = true
    }
  }
  
  return { isAuthenticated, login, logout }
})