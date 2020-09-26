from django.db import models
from accounts.models import User


class Lead(models.Model):
    sent_to = models.ForeignKey(
        User,
        on_delete= models.CASCADE,
        related_name= 'sender'
    )
    sent_by = models.ForeignKey(
        User,
        on_delete= models.CASCADE,
        related_name = 'reciever'
    )
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
