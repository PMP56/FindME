from rest_framework import routers
from .views import WorkFieldAPI, SkillAPI

router = routers.DefaultRouter()
router.register('workfield', WorkFieldAPI, 'workfield')
router.register('skill', SkillAPI, 'skill')

urlpatterns = router.urls