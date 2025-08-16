<template>
  <div class="container">
    <div class="breadcrumbs">
    <NuxtLink to="/">Главная</NuxtLink>
    <span v-for="(crumb, index) in crumbs" :key="index">
      &nbsp;
        <svg 
          width="6" 
          height="11" 
          viewBox="0 0 7 11" 
          :fill="index === crumbs.length - 1 ? '#2D5BEE' : '#515A85'" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.1875 5.49998C6.1875 5.30284 6.11322 5.10572 5.96497 4.95542L1.29764 0.225656C1.00074 -0.0752187 0.519365 -0.0752187 0.222585 0.225656C-0.0741951 0.526409 -0.074195 1.01413 0.222585 1.31503L4.3525 5.49998L0.22273 9.68496C-0.0740504 9.98584 -0.0740504 10.4735 0.22273 10.7742C0.51951 11.0753 1.00088 11.0753 1.29778 10.7742L5.96512 6.04455C6.11339 5.89417 6.1875 5.69705 6.1875 5.49998Z"/>
        </svg>
        &nbsp;
      <NuxtLink v-if="crumb.path" :to="crumb.path">{{ crumb.title }}</NuxtLink>
      <span v-else class="active-crumb">{{ crumb.title }}</span>
    </span>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const pageTitles = {
  'catalog': 'Каталог',
  'projects': 'Проекты',
  'service': 'Услуги',
  'about': 'Команда',
  'contacts': 'Контакты',
}

const crumbs = computed(() => {
  const pathArray = route.path.split('/').filter(i => i)
  const breadcrumbs = []
  let path = ''

  pathArray.forEach((item, index) => {
    path += `/${item}`

    const title = pageTitles[item] || 
                 item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, ' ')

    breadcrumbs.push({
      path: index < pathArray.length - 1 ? path : null,
      title
    })
  })

  return breadcrumbs
})
</script>

<style scoped>
.breadcrumbs {
  font-size: 14px;
  color: var(--based);
  margin-bottom: 40px;
}

a {
  color: var(--based);
  text-decoration: none;
  transition: color 0.2s;
}


.active-crumb {
  color: var(--primary); 
  border-bottom: 1px solid ;
}

span:not(.active-crumb) {
  color: var(--text-secondary);
}

</style>