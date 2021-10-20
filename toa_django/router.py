from toa.viewsets import UserViewset, EventViewset, RegistrationViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', UserViewset)
router.register('event', EventViewset)
router.register('registration', RegistrationViewset)