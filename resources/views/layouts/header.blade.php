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
        <img src="{{ asset('images/logo.svg') }}" class="mob-img" alt="logo">
        <nav class="nav mob-nav">
            <a href="{{ url('/catalog') }}">Каталог</a>
            <a href="{{ url('/service') }}">Услуги</a>
            <a href="{{ url('/about') }}">Команда</a>
            <a href="{{ url('/projects') }}">Проекты</a>
            <a href="{{ url('/contact') }}">Контакты</a>
        </nav>
        <a class="mail" href="mailto:everon@gmail.com">everon@gmail.com</a>
        <form class="mail-form" action="#">
                <input class="mail-inp" type="text" placeholder="Подпишитесь на скидки">
                <button class="mail-btn" type="submit"></button>
        </form>
        <p>Присоединяйтесь к нам</p>
        <div class="social">
            <a href="#" class="vk"><img src="{{ asset('images/social/Vk.svg')}}" alt=""></a>
            <a href="#" class="youtube"><img src="{{ asset('images/social/YouTube.svg')}}" alt=""></a>
            <a href="#" class="inst"><img src="{{ asset('images/social/instagram.svg')}}" alt=""></a>
            <a href="#" class="w-app"><img src="{{ asset('images/social/W-app.svg')}}" alt=""></a>
            <a href="#" class="fb"><img src="{{ asset('images/social/fb.svg')}}" alt=""></a>
            <a href="#" class="pint"><img src="{{ asset('images/social/pint.svg')}}" alt=""></a>
            <a href="#" class="tg"><img src="{{ asset('images/social/tg.svg')}}" alt=""></a>
            <a href="#" class="tiktok"><img src="{{ asset('images/social/TikTok.svg')}}" alt=""></a>
        </div>
    </div>
    <div class="container flex justify-between head">
        <img src="{{ asset('images/logo.svg') }}" alt="logo">
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
        <nav class="nav flex justify-between">
            <a href="{{ url('/catalog') }}">Каталог</a>
            <a href="{{ url('/service') }}">Услуги</a>
            <a href="{{ url('/about') }}">Команда</a>
            <a href="{{ url('/projects') }}">Проекты</a>
            <a href="{{ url('/contact') }}">Контакты</a>
        </nav>
    </div>
</div>


