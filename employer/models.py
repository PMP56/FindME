from django.db import models
from django.contrib.postgres.fields import ArrayField
from accounts.models import User
from skills.models import WorkField, Skill

# Create your models here.


class EmployerData(models.Model):
    id = models.IntegerField(default=0)
    userName = models.CharField(max_length=100, unique=True)
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    userHeader = models.CharField(
        max_length=100, default='Welcome to our official page.')
    theme = models.CharField(max_length=10, blank=True, default='white')
    profilePicture = models.CharField(
        max_length=250, default='/static/frontend/user.png')
    shadowText = models.CharField(
        max_length=100, default='We are well established company/ new startups/..............')
    firstIntro = models.CharField(
        max_length=125, default='## Know more about us. ##')
    secondIntro = models.CharField(
        max_length=250, default='## Look at our projects and jobs we provide. ##')
    skills = ArrayField(
        models.CharField(max_length=50, blank=True),
        default=list,
        blank=True,
        null=True
    )
    skills_opt = ArrayField(
        models.IntegerField(),
        default=list,
        blank=True,
        null=True
    )
    # skill_opt = models.ForeignKey(
    #     Skill,

    #     on_delete=models.CASCADE,
    # )
    projects = ArrayField(
        ArrayField(
            models.CharField(max_length=250, blank=True),
            blank=True,
            null=True
        ),
        blank=True,
        null=True
    )
    socialLinks = ArrayField(
        ArrayField(
            models.CharField(max_length=150, blank=True),
            blank=True,
            null=True
        ),
        blank=True,
        null=True
    )
    visit = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    totalRating = models.IntegerField(default=0)
    ratedUsers = ArrayField(
        models.IntegerField(),
        default=list,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.userName


class Jobs(models.Model):
    posted_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=100, default='')
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    expire_date = models.DateField()
    description = models.CharField(max_length=1000)
    skills_opt = ArrayField(
        models.IntegerField(),
        default=list,
        blank=True,
        null=True
    )
    # skill_opt = models.ForeignKey(
    #     Skill,
    #     on_delete=models.CASCADE,
    # )
    job_field = models.ForeignKey(
        WorkField,
        on_delete=models.CASCADE,
    )
    salary_high = models.IntegerField()
    salary_low = models.IntegerField()
    experience = models.IntegerField()
    is_available = models.BooleanField(default=True)
    views = models.IntegerField(default=0)
