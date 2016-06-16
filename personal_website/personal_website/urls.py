from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from users.views import UserViewSet
from projects.views import ProjectViewSet


router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'projects', ProjectViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls))
]
