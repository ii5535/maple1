from django.shortcuts import render
from rest_framework import viewsets
from main.serializers import BookdetailSerializer,BooklistSerializer
from main.models import bookdetail,booklist
from rest_framework import generics,serializers
# from django_filters import rest_framework as filters
# from django_filters.rest_framework import DjangoFilterBackend

class BooklistViewSet(viewsets.ModelViewSet):
    queryset = booklist.objects.all()
    serializer_class = BooklistSerializer
    
    # def perform_create(self, serializer):
    #     serializer.save(user_name = self.request.user)
    #(queryset,many = True)
    # serializer = UserProfileSerializer(_queryset, many=True)
    # filter_backends = (DjangoFilterBackend,)
    # filterset_fields =


class BookdetailViewSet(viewsets.ModelViewSet):
    queryset = bookdetail.objects.all()
    serializer_class = BookdetailSerializer

    