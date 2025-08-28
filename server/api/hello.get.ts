export default defineEventHandler((event) => {
    console.log('API called!') 
    return {
        message: 'Hello from Nuxt API!',
        timestamp: new Date().toISOString()
    }
})