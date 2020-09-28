from rest_framework import serializers
from .models import EmployerData, Jobs


class EmployerDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployerData
        fields = '__all__'

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = '__all__'

