<template>
  <div class="category-page">
    <div v-if="pending" class="loading">Загрузка...</div>
    <div v-else-if="error" class="error">Категория не найдена</div>
    <div v-else class="category-content">
      <h1>{{ category.name }}</h1>
      
      <img 
        v-if="category.imageUrl" 
        :src="category.imageUrl" 
        :alt="category.name"
        class="category-image"
      >
      
      <div v-if="category.description" class="description">
        {{ category.description }}
      </div>
      
      <div class="products-list">
        <h2>Товары в категории</h2>
        <div v-if="products.length === 0">Товаров пока нет</div>
        <div v-else v-for="product in products" :key="product.id" class="product-item">
          {{ product.name }} - {{ product.price }} руб.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { slug } = route.params

// Загружаем категорию
const { data: category, pending, error } = await useFetch(`/api/categories/${slug}`)

// Загружаем товары этой категории
const { data: products } = await useFetch(`/api/products?category=${slug}`)
</script>

<style scoped>
.category-page { max-width: 1200px; margin: 0 auto; padding: 20px; }
.loading, .error { text-align: center; padding: 40px; }
.category-image { max-width: 300px; height: auto; margin: 20px 0; }
.description { margin: 20px 0; font-size: 16px; line-height: 1.6; }
.products-list { margin-top: 40px; }
.product-item { padding: 10px; border: 1px solid #ddd; margin: 10px 0; }
</style>