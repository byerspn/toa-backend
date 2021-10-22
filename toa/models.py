from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import PROTECT

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=30)
    userslug = models.SlugField()

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return f'/{self.userslug}/'



class Event(models.Model):
    eventname = models.CharField(max_length=50)
    eventlocation = models.CharField(max_length=100)
    eventtime = models.DateTimeField()
    eventdescription = models.TextField()
    eventcreator = models.ForeignKey(User, on_delete=models.PROTECT, related_name='events')
    eventimage = models.TextField()
    eventslug = models.SlugField()

    def __str__(self):
        return self.eventname

    def get_absolute_url(self):
        return f'/{self.eventslug}/'

class Registration(models.Model):
    registrationevent = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    registrationuser = models.ForeignKey(User, on_delete=models.CASCADE, related_name='registrations')



