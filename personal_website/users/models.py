from django.db import models
from django.contrib.auth.models import User


class UserInfo(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='info')
    title = models.CharField(max_length=128)
    website = models.CharField(max_length=255)
    about = models.TextField()
    resume = models.CharField(max_length=255)
    image = models.CharField(max_length=255)

    def __str__(self):
        return "{}'s info".format(self.user.username)


class Email(models.Model):
    info = models.ForeignKey(UserInfo, related_name='emails')
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.address
