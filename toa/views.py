from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.reponse import Response

from .models import Event, User, Registration
from .serializers import EventSerializer, UserSerializer, RegistrationSerializer

class UserList(APIView):
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
class EventList(APIView):
    def get(self, request, format=None):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
class RegistrationList(APIView):
    def get(self, request, format=None):
        registrations = Registration.objects.all()
        serializer = RegistrationSerializer(registrations, many=True)
        return Response(serializer.data)