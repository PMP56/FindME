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

