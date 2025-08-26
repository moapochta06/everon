<template>
    <div class="banner">
        <Banner />
    </div>
    <div class="catalog">
        <div class="container">
            <h2>Каталог</h2>
            <ul class="categories">
                <li>
                    <a href="">
                        <img src="/public/images/catalog/UPS.png" alt="">
                        <div>ИБП</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/public/images/catalog/categories2.png" alt="">
                        <div>Шкафы и конструктивы</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/public/images/catalog/categories3.png" alt="">
                        <div>Системы кондиционирования воздуха</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/public/images/catalog/categories4.png" alt="">
                        <div>Системы распределения питания</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/public/images/catalog/categories5.png" alt="">
                        <div>Стабилизаторы напряжения</div>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/public/images/catalog/categories6.png" alt="">
                        <div>Инверторы</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <Proposal />
</template>
<style scoped>
.catalog {
    padding: 40px 0 49px;
    background: var(--bg);
}

h2 {
    margin-bottom: 40px;
}

.categories {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

ul.categories li:not(:nth-child(3)):not(:nth-child(4)) a div {
    padding-top: 8px;
}

li {
    padding: 28px 27px 18px;
    background: #fff;
    border-radius: 10px;

}
li a {
    display: flex;
    flex-direction: column;
    align-items: center;
}
li a div{
    color: var(--primary);
    font-weight: 700;
    width: 80%;
    text-align: center;
}

img {
    padding: 0;
    margin-bottom: 18px;
    width: 317px;
    height: 317px;
    border-radius: 10px;
    object-fit: cover;
}

.banner {
    padding-bottom: 32px;
}

@media (max-width: 1280px) {
    .categories {
        justify-content: center;
    }
}

@media (max-width: 640px) {
    .banner {
        background: var(--bg);
        padding-top: 28px;
        margin-top: -10px;
    }
}

@media (max-width: 380px) {
    .catalog {
        background: #fff;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: bottom;
        margin-bottom: 10px;
    }

    li:first-child a img {
        object-position: 0 -16px;
    }

    li {
        align-items: flex-start;
    }

    li {
        padding: 0;
        width: 100%;
    }

    li a {
        align-items: flex-start;
    }

    li a div {
        text-align: left;
    }
    ul.categories li:not(:nth-child(3)):not(:nth-child(4)) a div{
        padding-top: 0;
    }
}
</style>