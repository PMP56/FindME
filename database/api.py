from rest_framework import generics, viewsets, permissions
from .serializers import UserDataSerializer
from .models import UserData
from django.core import exceptions
from rest_framework.response import Response

class DatabaseAPI(viewsets.ModelViewSet):
    queryset = UserData.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserDataSerializer
    lookup_field = 'userName'

    def get_queryset(self):                             #employees recommend list for jobs page.
        username = self.request.query_params.get('username', None)
        
        if username is not None:
            queryset = self.queryset.filter(userName = username)
            return queryset
        else:
            queryset = self.queryset.all()

        job_field = self.request.query_params.get('job_field', None)
        skill1 = self.request.query_params.get('skill1', None)
        skill2 = self.request.query_params.get('skill2', None)
        skill3 = self.request.query_params.get('skill3', None)
        skill4 = self.request.query_params.get('skill4', None)
        try:
            job_field = int(job_field)
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
        if job_field is not None:
            queryset = queryset.filter(interest_field__overlap= [job_field])
            if skill1 is not None and skill2 is not None and skill3 is not None and skill4 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1,skill2,skill3,skill4])
            elif skill1 is not None and skill2 is not None and skill3 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1,skill2,skill3])
            elif skill1 is not None and skill2 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1,skill2])  
            elif skill1 is not None:
                queryset = queryset.filter(skills_opt__overlap=[skill1])
            else:
                pass

            queryset = queryset.order_by('-visit')[:10]
        return queryset

    def partial_update(self, request, *args, **kwargs):
        # print(**kwargs)
        user=request.user
        qs = self.queryset.all()
        rating=request.POST.get('rating', None)
        try:
            rating = float(rating)
        except:
            pass
        if user.is_authenticated and rating is not None:
            if user.is_employer:
                rated = qs.filter(ratedUsers__contains=[user.id])
                if rated:
                    raise exceptions.PermissionDenied()
                else:
                    obj= self.get_object()
                    current = obj.ratedUsers
                    current.append(user.id)
                    UserData.objects.filter(id=obj.id).update(ratedUsers=current)
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