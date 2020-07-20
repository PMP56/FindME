# FindME
Create your own designer portfolio

### Install Python
-> Install python-3.7.2 and python-pip. Follow the steps from the below reference document based on your Operating System. Reference: https://docs.python-guide.org/starting/installation/

### Install PostgreSQL
-> Install PostgreSQL (latest version) from https://www.postgresql.org/download/

### Edit Database configurations with your PostgreSQL configurations.
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'FindME',
        'USER': 'postgres',
        'PASSWORD': '<postgres-password>',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```

### Run the server
  * Make migrations
  ```
    python manage.py makemigrations
    python manage.py migrate
  ```

  * Run the server
  ```
    python manage.py runserver 0:8001
  ```
  
  ```
    npm run dev/build
  ```
