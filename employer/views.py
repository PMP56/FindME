from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from .serializers import EmployerDataSerializer, JobsSerializer
from .models import EmployerData, Jobs

# Create your views here.

class EmployerAPI(viewsets.ModelViewSet):
    queryset = EmployerData.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployerDataSerializer


class JobsAPI(viewsets.ModelViewSet):
    queryset = Jobs.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobsSerializer

