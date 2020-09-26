from django.db import models

# Create your models here.
class WorkField(models.Model):
    work_field=models.CharField(max_length=50)

class Skill(models.Model):
    work_skill = models.CharField(max_length = 100)

