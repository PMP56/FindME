from django.shortcuts import render
from rest_framework import generics, viewsets, permissions
from .serializers import EmployerDataSerializer, JobsSerializer
from django.db.models import Q
from django.core import exceptions
from .models import EmployerData, Jobs
from rest_framework.response import Response

# Create your views here.

class EmployerAPI(viewsets.ModelViewSet):
    queryset = EmployerData.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployerDataSerializer
    lookup_field = 'userName'
    
    def partial_update(self, request, *args, **kwargs):
        user=request.user
        rating=request.POST.get('rating', None)
        try:
            rating = float(rating)
        except:
            pass
        if user.is_authenticated and rating is not None: 
            if user.is_employee:
                return super().partial_update(request, *args, **kwargs)
            else:
                raise exceptions.PermissionDenied()
        else:
            # return super().partial_update(request, *args, **kwargs)
            raise exceptions.PermissionDenied()

    def list(self, request, *args, **kwargs):
        user = request.user
        queryset = self.filter_queryset(self.get_queryset())
        try:
            if user is not user.is_admin:
                queryset = queryset.exclude(user = user)
        except:
            pass
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class JobsAPI(viewsets.ModelViewSet):
    queryset = Jobs.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobsSerializer
    
    def get_queryset(self):
        work_field = self.request.query_params.get('work_field', None)
        skill1 = self.request.query_params.get('skill1', None)
        skill2 = self.request.query_params.get('skill2', None)
        skill3 = self.request.query_params.get('skill3', None)
        skill4 = self.request.query_params.get('skill4', None)
        try:
            work_field = int(work_field)
        except:
            pass
        try:
            skill1 = int(skill1)
        except:
            pass
        try:
            skill2 = int(skill2)
        except:
            pass
        try:
            skill3 = int(skill3)
        except:
            pass
        try:
            skill4 = int(skill4)
        except:
            pass
        queryset = self.queryset.all()
        if work_field is not None:
            queryset = queryset.filter(job_field = work_field)
            if skill1 is not None and skill2 is not None and skill3 is not None and skill4 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1,skill2,skill3,skill4])
            elif skill1 is not None and skill2 is not None and skill3 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1,skill2,skill3])
                # queryset = queryset.filter(Q(skills_opt __contains = [skill1]) | Q(skills_opt __contains = [skill2]) | Q(skills_opt __contains = [skill3]))
            elif skill1 is not None and skill2 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1,skill2])  
            elif skill1 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1])
            else:
                pass

            queryset = queryset.order_by('-views')[:10]
        return queryset
    
   
