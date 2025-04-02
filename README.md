# djangotutorial app

Follow django tutorial to create a simple app.

## Features

- Removed the training slash from the url.

# Deploy to VPS

1. install packages

   ```bash
   source venv/bin/activate
   pip install -r requirements.txt
   ```

1. create database

   ```bash
   python manage.py migrate
   ```

1. create superuser if you want to visit admin page

   ```bash
   python manage.py createsuperuser
   ```

1. copy over static files

   ```bash
   python manage.py collectstatic
   ```

1. copy .example to .env and configure name and port

   ```bash
   cp .env.example .env
   vi .env
   ```

1. serve with pm2

   ```bash
   chmod +x start.sh
   ./start.sh
   ```

1. setup nginx

   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/djangotutorial.conf
   sudo nginx -t
   sudo systemctl restart nginx
   ```

1. setup ssl with certbot interactively

   ```bash
   sudo certbot --nginx
   ```
