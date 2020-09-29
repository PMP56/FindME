from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
        is_employer = models.BooleanField('employer_status', default=False)
        is_employee = models.BooleanField('employee_status', default=False)
<<<<<<< HEAD
        is_admin = models.BooleanField('admin_status', default=False)
=======
        is_admin = models.BooleanField('admin_status', default=False)
>>>>>>> f2d9685de78a6932ba37707d61ab662418aa8aae
