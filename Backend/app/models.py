from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    pass

# Create your models here.
class Jobpost(models.Model):
    title=models.CharField(max_length=150)
    description=models.TextField(max_length=200)
    skills=models.TextField(max_length=150)
    duration=models.CharField(max_length=200)
    form=models.CharField(max_length=120)
