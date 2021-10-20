from rest_framework import viewsets
from . import models
from . import serializers

class EventViewset(viewsets.ModelViewSet):
    queryset = models.Event.objects.all()
    serializer_class = serializers.EventSerializer