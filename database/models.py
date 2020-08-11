from django.db import models
from django.contrib.postgres.fields import ArrayField


class UserData(models.Model):
    userName = models.CharField(max_length=100)
    theme = models.CharField(max_length=10)
    profilePicture = models.CharField(max_length=250)
    shadowText = models.CharField(max_length=100)
    firstIntro = models.CharField(max_length=125)
    secondIntro = models.CharField(max_length=250)
    skills = ArrayField(
        models.CharField(max_length=50)
    )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150)
        )
    )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250)
        )
    )
