from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from .serializers import WorkFieldSerializer, SkillSerializer
from .models import WorkField, Skill

# Create your views here.

class WorkFieldAPI(viewsets.ModelViewSet):
    queryset = WorkField.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WorkFieldSerializer

class SkillAPI(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SkillSerializer
