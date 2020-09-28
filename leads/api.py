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
            if inbox is not None:
                queryset = self.queryset.filter(sent_to = inbox)
            elif outbox is not None:
                queryset = self.queryset.filter(sent_by = outbox)
            elif message_to is not None and message_from is not None:
                queryset = self.queryset.filter(Q(sent_to = message_to) & Q(sent_by = message_from)) | ( Q(sent_to = message_from) & Q(sent_by = message_to) )    
            elif message_to is not None and message_from is None:
                raise exceptions.PermissionDenied()
            elif message_to is None and message_from is not None:
                raise exceptions.PermissionDenied()
            else:
                queryset = self.queryset.all()
        except:
            queryset = []

        return queryset
