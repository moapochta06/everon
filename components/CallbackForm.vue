<template>
<div class="bg">
    <div class="container">
        <div class="title">
            <div>Остались</div>
            <div>вопросы?</div>
        </div>
        <div class="operator"></div>
        
        <p>Если у вас есть вопросы, наш специалист ответит на все вопросы по телефону</p>
        <p class="numb">+7 953 861 79 20</p>
        <p>Или оставьте свои данные и наш специалист свяжется с вами</p>

        <form @submit.prevent="handleSubmit" class="callback-form">
        <input
            v-model="formData.name"
            type="text"
            id="name"
            :placeholder="errors.name ? errors.name : 'Ваше имя'"
            @blur="validateField('name')"
            :class="{ 'input-error': errors.name }"
        />
        <input
            v-model="formData.phone"
            type="tel"
            id="phone"
            :placeholder="errors.phone ? errors.phone : 'Телефон'"
            @blur="validateField('phone')"
            :class="{ 'input-error': errors.phone }"
        />
        <button type="submit" :disabled="isSubmitting">
        Заказать обратный звонок
        </button>

        <div v-if="message" :class="['message', message.type]">
        {{ message.text }}
        </div>
        </form>
        <!-- <img src="/public/images/mob-operator.png" alt=""> -->
    </div>
    <div class="operator-mob"></div>
    
</div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  phone: ''
});

const errors = ref({
  name: '',
  phone: ''
});

const isSubmitting = ref(false);
const message = ref(null);

const validateField = (field) => {
  errors.value[field] = '';
  
  if (field === 'name' && !formData.value.name.trim()) {
    errors.value.name = 'Укажите имя';
    return false;
  }

  if (field === 'phone') {
    if (!formData.value.phone.trim()) {
      errors.value.phone = 'Укажите телефон';
      return false;
    }
    if (!/^[\d\s()+ -]+$/.test(formData.value.phone)) {
      errors.value.phone = 'Некорректный номер';
      return false;
    }
  }
  
  return true;
};

const validateForm = () => {
  let isValid = true;
  Object.keys(formData.value).forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  message.value = null;

  try {
    const { data, error } = await useFetch('/api/callback', {
      method: 'POST',
      body: formData.value
    });

    if (error.value) {
      throw error.value;
    }

    message.value = {
      type: 'success',
      text: 'Спасибо! Мы скоро вам перезвоним.'
    };
    
    formData.value = { name: '', phone: '' };
  } catch (err) {
    console.error('Ошибка отправки:', err);
    message.value = {
      type: 'error',
      text: 'Произошла ошибка. Пожалуйста, попробуйте позже.'
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.bg{
    background: var(--primary);
    width: 100%;
}
.container {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
}
.title {
    width: 883px;
    margin: 50px auto 32px;
}
.title div {
    font-size: 96px;
    line-height: 60px;
    color: var(--text-color);
    font-weight: bold;
}
.title div:last-child {
    margin-left: 222px;
}
p {
    color: var(--text-color);
    line-height: 22px;
    text-align: center;
}
.operator {
    position: absolute;
    top:-152px;
    left: -238px;
    background: url(/public/images/operator.png) no-repeat;
    width: 585px;
    height: 585px;
}
.operator-mob {
    display: none;
}
.numb {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
}
.callback-form {
    display: flex;
    gap: 20px;
    z-index: 1001;
    margin: 24px 0;
}
input {
    width: 277px;
    height: 50px;
    border-radius: 50px;
    padding-left: 28px;
    background: #fff;
    box-shadow: inset 0 1px 2px 1px rgb(63 75 144 / 50%);
}
button {
    color: var(--text-color);
    background: var(--secondary);
    border-radius: 50px;
    height: 50px;
    width: 277px;
}

.input-error::placeholder {
  color: rgb(203, 40, 40);
  opacity: 1;
}

@media(max-width: 1360px){
    .operator {
        display: none;
    }
}

@media(max-width: 1024px) {
    .callback-form {
    width: 280px;
    flex-wrap: wrap;
    }
    .title {
    width: fit-content;
    }
}

@media(max-width: 768px) {
    .title div {
    font-size: 10vw;
    width: fit-content;
    }
    .title div:last-child {
    margin-left: 170px;
    }
}

@media (max-width: 640px) {
    .title div {
        line-height: 41px;
    }
    .title div:last-child {
        margin-left: 130px;
    }
    .operator-mob {
    margin-top: -100px;
    display: block;
    background: url(/public/images/mob-operator.png) no-repeat center center;
    /* width: 337px; */
    width: 100%;
    height: 438px;
}
}

@media (max-width:380px) {
    .title div {
        font-size: 40px;
    }
    .title div:last-child {
        line-height: 31px;
        margin-left: 103px;
    }

}

</style>
