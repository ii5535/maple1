from .models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = User.objects.create_user(
            # email = validated_data['email'],
            user_name = validated_data['user_name'],
            user_id = validated_data['user_id'],
            password = validated_data['password']
        )
        return user
    class Meta:
        model = User
        fields = ['user_name','password','user_id']# 'email', 'name', 