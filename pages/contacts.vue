<template>
    <div class="container">
        <h2>Наши контакты</h2>
        <div class="contacts">
            <a class="number" href="tel:+79538617920">+7 953 861 79 20</a>
            <div class="address">Новосибирск, Ипподромская ул., 46</div>
            <a class="mail" href="mailto:everon@gmail.com">everon@gmail.com</a>
        </div>
        <div class="flex">
            <MapAddress />
            <FormCuestion />
        </div>
    </div>
    <CallbackForm />
</template>

<style scoped>
.container {
    padding-bottom: 111px;
}
.contacts {
    display: flex;
    gap: 70px;
    margin:40px 0 38px;

}
.flex {
    gap: 20px;
}
a {
    color: var(--based);
}
.address {
    background: url(/public/images/local.svg) no-repeat;
    width: 226px;
    padding-left: 50px;
}
.number {
    margin: 0;
}
</style>