<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Управление категориями товаров</h1>
      <UButton @click="isModalOpen = true" icon="i-heroicons-plus">
        Добавить категорию
      </UButton>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <p class="text-gray-500 text-center">Список категорий появится здесь</p>
    </div>

    <!-- Модальное окно добавления -->
    <UModal v-model="isModalOpen">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Добавить новую категорию</h3>
        </template>

        <UForm @submit="saveCategory" class="space-y-4">
          <UFormGroup label="Название категории" required>
            <UInput v-model="form.name" placeholder="Например: Смартфоны" />
          </UFormGroup>

          <UFormGroup label="URL-адрес (slug)" required>
            <UInput v-model="form.slug" placeholder="smartfony" />
          </UFormGroup>

          <UFormGroup label="URL изображения">
            <UInput v-model="form.imageUrl" placeholder="https://example.com/image.jpg" />
          </UFormGroup>

          <UFormGroup label="SEO заголовок">
            <UInput v-model="form.seoTitle" placeholder="Заголовок для поисковиков" />
          </UFormGroup>

          <UFormGroup label="SEO описание">
            <UTextarea v-model="form.seoDescription" placeholder="Описание для поисковиков" />
          </UFormGroup>

          <UFormGroup label="Описание категории">
            <UTextarea v-model="form.description" placeholder="Подробное описание категории" />
          </UFormGroup>

          <div class="flex gap-2 justify-end">
            <UButton type="submit">Сохранить</UButton>
            <UButton color="gray" @click="isModalOpen = false">Отмена</UButton>
          </div>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const isModalOpen = ref(false)
const form = reactive({
  name: '',
  slug: '',
  imageUrl: '',
  seoTitle: '',
  seoDescription: '',
  description: ''
})

const saveCategory = async () => {
  console.log('Сохранение категории:', form)
  isModalOpen.value = false
}
</script>