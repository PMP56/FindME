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
    userHeader = models.CharField(max_length=100, default = 'Welcome to my portfolio.')
    theme = models.CharField(max_length=10, default ='white')
    profilePicture = models.CharField(max_length=250, default = '/static/frontend/user.png')
    shadowText = models.CharField(max_length=100, default = 'I am a student/ professional/ designer/ ..................')
    firstIntro = models.CharField(max_length=125, default = '## Short Introduction about me ##')
    secondIntro = models.CharField(max_length=250, default = 'Know about my skills, interest and projects here.')
    skills = ArrayField(
        models.CharField(max_length=50, blank=True),
        blank = True,
        null = True
    )
    skills_opt = ArrayField(
        models.IntegerField(),
        default = list,
        blank = True,
        null = True
    )
    # skill_opt = models.ForeignKey(
    #     Skill,
    #     on_delete=models.CASCADE,
    # )
    interest_field= ArrayField(
        models.IntegerField(),
        default = list,
        blank = True,
        null = True 
    )
    # interest_opt = models.ForeignKey(
    #     WorkField,
    #     on_delete=models.CASCADE,
    # )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150, blank=True),
            blank=True,
            null = True
        ),
        blank=True,
        null = True
    )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250, blank=True),
            blank=True,
            null = True
        ),
        blank=True,
        null = True
    )
    visit = models.IntegerField(default=0)
    rating = models.IntegerField(default=0)
    totalRating = models.IntegerField(default=0)
    is_available = models.BooleanField(default = True)
 
    def __str__(self):
        return self.userName

    
