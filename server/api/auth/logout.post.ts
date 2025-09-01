export default defineEventHandler(async (event) => {
  // Удаляем cookie
  deleteCookie(event, 'auth-token');
  
  return {
    success: true,
    message: 'Logged out successfully'
  };
});