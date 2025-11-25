# Clear all caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear
php artisan optimize

# Composer setup
rm -rf /vendor

composer install
composer update

# Node setup
rm -rf /node_modules
npm install
npm run build

php artisan serve