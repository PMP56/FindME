# FindME
Create your own designer portfolio

Example of portfolio made with FindME: https://find--me.herokuapp.com/#/pmp56

Running site at: https://find--me.herokuapp.com/

### Install Python
-> Install python-3 and python-pip. Follow the steps from below:

-> pip install pipenv

-> pipenv shell

-> pipenv install django djangorestframework django-rest-knox

### Install PostgreSQL
-> Install PostgreSQL (latest version) from https://www.postgresql.org/download/

-> Create a new database in your Postgres server and name it FindME.

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
    npm run dev/build
  ```
  
  ```
    python manage.py runserver 0:8001



### add this to settings.py
AUTH_USER_MODEL = 'accounts.User'
  ```
  
