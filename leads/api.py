from leads.models import Lead
from rest_framework import viewsets, permissions
from django.db.models import Q
from django.core import exceptions
from .serializers import LeadSerializer

# Lead Viewset


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        inbox = self.request.query_params.get('inbox', None)
        outbox = self.request.query_params.get('outbox', None)
        message_to = self.request.query_params.get('message_to', None)
        message_from = self.request.query_params.get('message_from', None)
        try:
            inbox = int(inbox)
        except:
            pass
        try:
            outbox = int(outbox)
        except:
            pass
        try:
            message_to = int(message_to)
        except:
            pass
        try:
            message_from = int(message_from)
        except:
            pass
        if inbox is not None:
            queryset = self.queryset.filter(sent_to = inbox)
        elif outbox is not None:
            queryset = self.queryset.filter(sent_by = outbox)
        elif message_to is not None and message_from is not None:
            queryset = self.queryset.filter((Q(sent_to = message_to) & Q(sent_by = message_from)) | (Q(sent_to = message_from) & Q(sent_by = message_to)))    
        elif message_to is not None and message_from is None:
            raise exceptions.PermissionDenied()
        elif message_from is not None and message_to is None:
            raise exceptions.PermissionDenied()
        else:
            queryset = self.queryset.all()

        return queryset

    def create(self, request, *args, **kwargs):
        user=request.user
        if user.is_authenticated:
            sent_by=request.POST.get('sent_by', None)
            try:
                sent_by = int(sent_by)
            except:
                pass
            if sent_by == user.id:
                return super().create(request, *args, **kwargs)
            else:
                raise exceptions.PermissionDenied()
        else:
            raise exceptions.PermissionDenied()

        