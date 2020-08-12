from rest_framework import generics, viewsets, permissions
from .serializers import UserDataSerializer
from .models import UserData


class DatabaseAPI(viewsets.ModelViewSet):
    queryset = UserData.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserDataSerializer
