composer install  
npm install  
cp .env.example .env  
(APP_ENV=local  
APP_DEBUG=true  
DB_CONNECTION=null  
SESSION_DRIVER=array  
CACHE_DRIVER=array)  
php artisan key:generate  
npm run dev  
php artisan serve

