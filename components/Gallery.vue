<template>
    <div class="conteiner gallery">
        <h2>Фотогалерея</h2>
        <div class="wrapper">
            <div class="images">
            <img src="/public/images/gallery/city_galaty.png">
            <img src="/public/images/gallery/current_galary.png">
            <img src="/public/images/gallery/wind_galary.png">
            </div>
            <div class="arrows">
                <div></div>
                <div></div>
            </div>
            <div class="dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        
    </div>
</template>
<style scoped>
.gallery {
    margin-bottom: 100px;
}
h2 {
    
}
.wrapper {
    position: relative;
    width: fit-content;
}

.images {
    margin-top: 30px;
    display: flex;
    gap: 20px;
}

.arrows {
    position: absolute;
    right: 0;
    bottom: -13px;
    display: flex;
    gap: 20px;
}

.arrows div:first-of-type {
    background: url(/public/images/arrow_left.svg) no-repeat;
    width: 40px;
    height: 40px;
}

.arrows div:last-of-type {
    background: url(/public/images/arrow-btn.svg) no-repeat;
    width: 40px;
    height: 40px;
}

.dots {
    display: flex;
    justify-content: center;
    margin: 23px 0 0;
    gap: 10px;
}
.dots span:first-of-type {
    background: var(--primary);
}
.dots span {
    display: inline-block;
    background: var(--bg);
    width: 14px;
    height: 14px;
    border-radius: 14px;
}
</style>