from django.db import models

# Create your models here.


class WorkField(models.Model):
    work_field = models.CharField(max_length=50)

    def __str__(self):
        return self.work_field


class Skill(models.Model):
    work_skill = models.CharField(max_length=100)

    def __str__(self):
        return self.work_skill
