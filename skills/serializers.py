from rest_framework import serializers
from skills.models import WorkField, Skill 


class WorkFieldSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkField
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'