// Сохранение категории
const saveCategory = async () => {
  isLoading.value = true
  try {
    const requestData = { 
      name: form.name,
      slug: form.slug,
      imageUrl: form.imageUrl,
      seoTitle: form.seoTitle,
      seoDescription: form.seoDescription,
      description: form.description,
      parentId: form.parentId
    }
    
    // Используем ID в URL для PUT запроса
    const url = isEditing.value ? `/api/categories/${form.id}` : '/api/categories'
    const method = isEditing.value ? 'PUT' : 'POST'

    console.log('Sending to:', url)
    console.log('Sending data:', requestData)

    const response = await $fetch(url, {
      method,
      body: requestData
    })
    
    closeModal()
    await loadCategories()
  } catch (error) {
    console.error('Ошибка сохранения категории:', error)
    alert(error.data?.message || 'Ошибка при сохранении категории')
  } finally {
    isLoading.value = false
  }
}