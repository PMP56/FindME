from rest_framework import serializers
from database.models import UserData


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'
        lookup_field = 'userName'
