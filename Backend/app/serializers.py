from .models import Jobpost
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=['username','email','password']
    def create(self, validated_data):
        validated_data['password']=make_password(validated_data['password'])
        return super(UserSerializer,self).create(validated_data)
    
class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

class JobpostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Jobpost
        fields='__all__'