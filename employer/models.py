from django.db import models
from django.contrib.postgres.fields import ArrayField
from accounts.models import User
from skills.models import WorkField, Skill

# Create your models here.
class EmployerData(models.Model):
    userName = models.CharField(max_length=100, unique=True)
    user = models.OneToOneField(
        User,
        on_delete= models.CASCADE,
        primary_key=True,
    )
    userHeader = models.CharField(max_length=100)
    theme = models.CharField(max_length=10, blank=True)
    profilePicture = models.CharField(max_length=250)
    shadowText = models.CharField(max_length=100)
    firstIntro = models.CharField(max_length=125)
    secondIntro = models.CharField(max_length=250)
    skills = ArrayField(
        models.CharField(max_length=50, blank=True),
        default = list 
    )
    skills_opt = ArrayField(
        models.IntegerField(),
        default = list
    )
    # skill_opt = models.ForeignKey(
    #     Skill,

    #     on_delete=models.CASCADE,
    # )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250, blank=True),
            blank=True
        ),
        blank=True
    )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150, blank=True),
            blank=True
        ),
        blank=True
    )
    visit = models.IntegerField(default=0)
    rating = models.IntegerField(default=0)
    totalRating = models.IntegerField(default=0)

    def __str__(self):
        return self.userName


class Jobs(models.Model):
    posted_by = models.ForeignKey(
        User,
        on_delete= models.CASCADE,
    )
    created_at = models.DateField(auto_now_add = True)
    updated_at = models.DateField(auto_now = True)
    expire_date = models.DateField()
    description = models.CharField(max_length= 350)
    skills_opt = ArrayField(
        models.IntegerField(),
        default = list
    )
    # skill_opt = models.ForeignKey(
    #     Skill,
    #     on_delete=models.CASCADE,
    # )
    job_field = models.ForeignKey(
                WorkField,
                on_delete = models.CASCADE,
            )
    salary_high = models.IntegerField()
    salary_low = models.IntegerField()
    experience = models.IntegerField()
    is_available = models.BooleanField(default = True)
    




  

