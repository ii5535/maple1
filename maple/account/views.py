from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
# @method_decorator(csrf_exempt,name='dispatch')

# 회원가입
class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # @csrf_exempt
    # def search(request):

    #     return HttpResponse('success')