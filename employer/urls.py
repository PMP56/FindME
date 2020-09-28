from rest_framework import routers
from .views import EmployerAPI, JobsAPI


router = routers.DefaultRouter()
router.register('employer', EmployerAPI, 'employer')
router.register('jobs', JobsAPI, 'jobs')

urlpatterns = router.urls