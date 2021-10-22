from django.urls import path, include
from toa import views
urlpatterns = [
    path('events/', views.EventList.as_view()),
    path('users/', views.UserList.as_view()),
    path('registrations/', views.RegistrationList.as_view()),
]