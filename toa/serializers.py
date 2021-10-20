from django.db import models
from rest_framework import serializers
from .models import User, Event, Registration

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'