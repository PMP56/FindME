from rest_framework import generics
from .serializers import UserDataSerializer


class DatabaseAPI(generics.GenericAPIView):
    serializer_class = UserDataSerializer
