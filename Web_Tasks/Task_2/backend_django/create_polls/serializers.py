from rest_framework import serializers
from .models import Poll
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = get_user_model()
        fields = ['first_name', 'last_name', 'username', 'password', 'email']
    def validate_password(self, value):
        return make_password(value)
    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)

class PollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poll
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']

