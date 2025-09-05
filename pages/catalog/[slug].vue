<template>
  <Banner 
    :title="category?.name" 
    :image="category?.imageUrl" 
    :description="category?.description"
  />
  <div class="products">
    <div class="container flex">
      <div class="aside">
        <h2>{{ category?.name }}</h2>
      </div>
      <div class="products_list">
        <div v-for="(item, index) in 9" :key="index" class="card-wrapper">
          <div class="card-img">
            <div class="actions">
              <div>
                <img src="/public/images/heart.svg" alt="" class="heart">
                <img src="/public/images/comparison.svg" alt="" >
              </div>
              <div class="stars">
                <img src="/public/images/star-blue.svg" v-for="(item, index) in 4" :key="index" alt="">
                <img src="/public/images/star-grey.svg" alt="">
              </div>
            </div>
            <img src="/public/images/product1.png" alt="" class="product">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { slug } = route.params
const { data: category } = await useFetch(`/api/categories/by-slug/${slug}`)
</script>
<style scoped>
.products {
  margin-top: 40px;
  padding-top: 33px;
  background: var(--bg);
}
.aside {
  width: 278px;
}
.aside h2 {
  font-size: 20px;
  padding-bottom: 38px;
  /* word-break: break-word; */
  width: 238px;
}
.products_list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
  justify-content: flex-end;
}
.card-wrapper {
  width: 278px;
  padding: 14px;
  background: var(--bg-dark);
  border-radius: 10px;
}
.card-img {
  height: 290px;
  width: 250px;
  background: #fff;
  border-radius: 10px;
}
.product {
  padding: 40px 0;
}
.actions {
  display: flex;
  justify-content: space-between;
  padding: 17px 16px 0;
  align-items: center;
}
.heart {
  margin-right: 10px;
}
.stars {
  display: flex;
  gap: 2px;
}
.stars img {
  width: 20px;
}
.card-img div img {
  border-radius: 0;
}
</style>

