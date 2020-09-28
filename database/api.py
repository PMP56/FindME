from rest_framework import generics, viewsets, permissions
from .serializers import UserDataSerializer
from .models import UserData


class DatabaseAPI(viewsets.ModelViewSet):
    queryset = UserData.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserDataSerializer
    lookup_field = 'userName'

    def get_queryset(self):
        username = self.request.query_params.get('username', None)
        try:
            if username is not None:
                queryset = self.queryset.filter(userName = username)
            else:
                queryset = self.queryset.all()
        except:
            queryset = []

        return queryset

