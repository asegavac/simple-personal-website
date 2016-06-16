from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='projects')
    name = models.CharField(max_length=128)
    image = models.CharField(max_length=255)
    thumb = models.CharField(max_length=255)
    text = models.TextField()
    blurb = models.TextField()

    def __str__(self):
        return self.name
