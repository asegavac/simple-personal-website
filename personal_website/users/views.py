from django.contrib.auth.models import User
from rest_framework import viewsets
from users.serializers import UserSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.filter(info__isnull=False)
    serializer_class = UserSerializer
