from django.db import models
from django.contrib.postgres.fields import ArrayField


class UserData(models.Model):
    userName = models.CharField(max_length=100, unique=True)
    theme = models.CharField(max_length=10)
    profilePicture = models.CharField(max_length=250)
    shadowText = models.CharField(max_length=100)
    firstIntro = models.CharField(max_length=125)
    secondIntro = models.CharField(max_length=250)
    skills = ArrayField(
        models.CharField(max_length=50, blank=True)
    )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150, blank=True)
        )
    )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250, blank=True)
        )
    )

    def __str__(self):
        return self.userName
