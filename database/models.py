from django.db import models
from django.contrib.postgres.fields import ArrayField

from accounts.models import User

from skills.models import WorkField, Skill

class UserData(models.Model):
    id = models.IntegerField(unique=True)
    userName = models.CharField(max_length=100, unique=True)
    user = models.OneToOneField(
        User,
        on_delete= models.CASCADE,
        primary_key = True
    )
    userHeader = models.CharField(max_length=100)
    theme = models.CharField(max_length=10, blank=True)
    profilePicture = models.CharField(max_length=250)
    shadowText = models.CharField(max_length=100)
    firstIntro = models.CharField(max_length=125)
    secondIntro = models.CharField(max_length=250)
    skills = ArrayField(
        models.CharField(max_length=50, blank=True),
        blank = True
    )
    skills_opt = ArrayField(
        models.IntegerField(),
        default = list
    )
    # skill_opt = models.ForeignKey(
    #     Skill,
    #     on_delete=models.CASCADE,
    # )
    interest_field= ArrayField(
        models.IntegerField(),
        default = list 
    )
    # interest_opt = models.ForeignKey(
    #     WorkField,
    #     on_delete=models.CASCADE,
    # )
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
    is_available = models.BooleanField(default = True)
 
    def __str__(self):
        return self.userName
