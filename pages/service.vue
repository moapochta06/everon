<template>
    <div class="container">
        <h2>Услуги</h2>
        <ul>
            
            <li>
                <h3>Консультация</h3>
                <p>Профессиональная консультация по выбору оборудования</p>
            </li>
            <li>
                <h3>Монтаж</h3>
                <p>Установка и настройка оборудования</p>
            </li>
            <li>
                <h3>Обслуживание</h3>
                <p>Техническе обслуживание и ремонт</p>
            </li>
            <li>
                <h3>Проектирование</h3>
                <p>Разработка технических решений</p>
            </li>
        </ul>
        <QuestionBtn />
    </div>
</template>
<style scoped>
ul {
    display: flex;
    margin: 50px 0 40px;
    gap: 40px;
    flex-wrap: wrap;
}
ul li {
    text-align: center;
    width: 260px;
    margin: auto;
}

h3 {
    padding-top: 150px;
}

li:nth-child(2) p ,li:nth-child(3) p ,li:nth-child(4) p {
    line-height: 36px;
}

p { 
    margin-top: 10px;
    font-size: 14px;
}
li:first-child h3{
    background: url(/public/images/services/consultation.svg) no-repeat 18px top;
}
li:nth-child(2) h3{
    background: url(/public/images/services/montage.svg) no-repeat 18px top;
}
li:nth-child(3) h3{
    background: url(/public/images/services/service.svg) no-repeat 18px top;
}
li:nth-child(4) h3{
    background: url(/public/images/services/designing.svg) no-repeat 18px top;
}

@media (max-width: 1280px) {
    ul {
        margin: 50px auto 40px;
    }
}
@media (max-width: 768px) {
    ul li {
    width: 320px;
}
li:first-child h3,li:nth-child(2) h3, li:nth-child(3) h3, li:nth-child(4) h3{
    background-position: 50px top 
}
}
</style>