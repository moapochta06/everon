<template>
    <div>

        <div class="bg-secondary">
            <div class="bg-primary">
                <div class="container mobile-header">
                    <a class="number" href="tel:+79538617920">+7 953 861 79 20</a>
                    <button class="menu-burger" id="burger-btn">
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                    </button>
                </div>
            </div>
            <div class="mobile-menu" id="mobileMenu">
                <img src="/public/images/logo.svg" class="mob-img" alt="logo">
                <nav class="nav mob-nav">
                    <a href="/catalog">Каталог</a>
                    <a href="/service">Услуги</a>
                    <a href="/about">Команда</a>
                    <a href="/contacts">Контакты</a>
                </nav>
                <a class="mail" href="mailto:everon@gmail.com">everon@gmail.com</a>
                <form class="mail-form" action="#">
                    <input class="mail-inp" type="text" placeholder="Подпишитесь на скидки">
                    <button class="mail-btn" type="submit"></button>
                </form>
                <p>Присоединяйтесь к нам</p>
                <div class="social">
                    <a href="#" class="vk"><img src="/public/images/social/Vk.svg" alt=""></a>
                    <a href="#" class="youtube"><img src="/public/images/social/YouTube.svg" alt=""></a>
                    <a href="#" class="inst"><img src="/public/images/social/instagram.svg" alt=""></a>
                    <a href="#" class="w-app"><img src="/public/images/social/W-app.svg" alt=""></a>
                    <a href="#" class="fb"><img src="/public/images/social/fb.svg" alt=""></a>
                    <a href="#" class="pint"><img src="/public/images/social/pint.svg" alt=""></a>
                    <a href="#" class="tg"><img src="/public/images/social/tg.svg" alt=""></a>
                    <a href="#" class="tiktok"><img src="/public/images/social/TikTok.svg" alt=""></a>
                </div>
            </div>
            <div class="container head">
                <img src="/public/images/logo.svg" alt="logo">
                <div class="">
                    <form class="search-form" action="#">
                        <input class="search-inp" type="text" placeholder="Поиск товара">
                        <button class="search-btn" type="submit"></button>
                    </form>
                    <div class="flex contacts">
                        <a class="number" href="tel:+79538617920">+7 953 861 79 20</a>
                        <a class="mail" href="mailto:everon@gmail.com">everon@gmail.com</a>
                    </div>
                </div>
            </div>
            <div class="bg-primary menu">
                <nav class="nav">
                    <a href="/catalog">Каталог</a>
                    <a href="/service">Услуги</a>
                    <a href="/about">Команда</a>
                    <a href="/contacts">Контакты</a>
                </nav>
            </div>
        </div>



    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.querySelectorAll('.nav a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active')
        }
    })

    document.querySelectorAll('.mob-nav a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active')
        }
    })

    const burgerBtn = document.getElementById('burger-btn')
    const mobileMenu = document.getElementById('mobileMenu')

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('active')
            mobileMenu.classList.toggle('active')
        })
    }
})

</script>

<style scoped>
@media (max-width: 640px) {
    .number {
        background: url(/public/images/mobile_tel.svg) no-repeat left center;
        margin: 0;
        padding: 0 0 0 26px;
    }
    img {
        margin:0 auto 30px;
    }
} 
</style>