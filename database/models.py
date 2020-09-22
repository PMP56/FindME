from django.db import models
from django.contrib.postgres.fields import ArrayField

from accounts.models import User


class UserData(models.Model):
    id = models.IntegerField(unique=True)
    userName = models.CharField(max_length=100, primary_key=True)
    userHeader = models.CharField(max_length=100)
    theme = models.CharField(max_length=10, blank=True)
    profilePicture = models.CharField(max_length=250)
    shadowText = models.CharField(max_length=100)
    firstIntro = models.CharField(max_length=125)
    secondIntro = models.CharField(max_length=250)
    skills = ArrayField(
        models.CharField(max_length=50, blank=True),
        blank=True
    )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150, blank=True),
            blank=True
        ),
        blank=True
    )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250, blank=True),
            blank=True
        ),
        blank=True
    )
    visit = models.IntegerField(default=0)
    rating = models.IntegerField(default=0)
    totalRating = models.IntegerField(default=0)

    def __str__(self):
        return self.userName
