<template>
  <div>
    <div>
      <h2>
        Вход в панель управления
      </h2>
    </div>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Логин</label>
        <input
          id="username"
          v-model="username"
          type="text"
          required
          placeholder="Логин"
        />
      </div>
      <div>
        <label for="password">Пароль</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          placeholder="Пароль"
        />
      </div>
      <div>
        <button
          type="submit"
          :disabled="loading"
        >
          {{ loading ? 'Вход...' : 'Войти' }}
        </button>
      </div>
      <div v-if="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script setup>
const username = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);

const auth = useAuth();

const handleLogin = async () => {
  loading.value = true;
  error.value = '';

  const result = await auth.login(username.value, password.value);
  
  if (result.success) {
    await navigateTo('/admin');
  } else {
    error.value = result.error;
  }
  
  loading.value = false;
};
</script>