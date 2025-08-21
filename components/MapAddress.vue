<template>
    <div class="zoomable-map">
    <div class="map-controls">
      <button @click="zoomIn" :disabled="zoom >= 18" class="zoom-btn">
        <span>+</span>
      </button>
      <button @click="zoomOut" :disabled="zoom <= 1" class="zoom-btn">
        <span>-</span>
      </button>
      <span class="zoom-level">Масштаб: {{ zoom }}</span>
    </div>
    <div class="map-container">
        <img 
        :src="mapUrl" 
        alt="Интерактивная карта"
        class="map-image"
        @load="onLoad"
        @error="onError"
        />
        <div class="custom-pointer"></div>
    </div>
    <div v-if="error" class="error">Ошибка загрузки</div>
  </div>
</template>

<script setup>
const props = defineProps({
  initialCoords: {
    type: Array,
    default: () => [82.938917, 55.059198]
  },
  initialZoom: {
    type: Number,
    default: 13
  },
  width: {
    type: Number,
    default: 600
  },
  height: {
    type: Number,
    default: 400
  }
})


const zoom = ref(props.initialZoom)
const coords = ref(props.initialCoords)
const loading = ref(true)
const error = ref(false)

const mapUrl = computed(() => {
  const params = new URLSearchParams({
    l: 'map',
    ll: coords.value.join(','),
    z: zoom.value.toString(),
    size: `${props.width},${props.height}`,
    // size: `${props.width},${props.height}`,
    // pt: `${coords.value.join(',')},pm2rdl`,
    lang: 'ru_RU'
  })
  const apiKey = process.env.NUXT_PUBLIC_YANDEX_STATIC_API_KEY
  if (apiKey) {
    params.append('apikey', apiKey)
    return `https://static-maps.yandex.ru/v1?${params.toString()}`
  }
  return `https://static-maps.yandex.ru/1.x/?${params.toString()}`
})

const zoomIn = () => {
  if (zoom.value < 18) {
    zoom.value++
    loading.value = true
  }
}

const zoomOut = () => {
  if (zoom.value > 1) {
    zoom.value--
    loading.value = true
  }
}

const onError = () => {
  error.value = true
  loading.value = false
}


const handleKeyPress = (event) => {
  if (event.key === '+' || event.key === '=') zoomIn()
  if (event.key === '-') zoomOut()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style scoped>
.zoomable-map {
  position: relative;
  display: inline-block;
}
.map-container {
  width: 850px;
  height: 599px;
}
img {
    padding: 0;
}
.custom-pointer{
    background: url(/public/images/address1.svg) no-repeat top;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-5%, -100%);
    width: 384px;
    height: 82px;
    z-index:10;
}
.map-controls {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.zoom-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.zoom-btn:hover:not(:disabled) {
  background: #f0f0f0;
  transform: scale(1.1);
}

.zoom-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.zoom-level {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.map-image {
  display: block;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  font-weight: 500;
}

.error {
  color: #d93025;
  background: rgba(255, 235, 235, 0.95);
}

@media (max-width: 768px) {
  .map-controls {
    top: 10px;
    right: 10px;
    padding: 8px;
  }
  
  .zoom-btn {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
  
  .zoom-level {
    font-size: 12px;
  }
}
</style>