from rest_framework import routers
from .api import DatabaseAPI

router = routers.DefaultRouter()
router.register('api/database', DatabaseAPI, 'database')

urlpatterns = router.urls
