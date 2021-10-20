from toa.viewsets import EventViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('event', EventViewset)