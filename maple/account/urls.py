from django.urls import path, include
from . import views
from rest_framework import urls
from django.views.decorators.csrf import csrf_exempt
# @csrf_exempt

urlpatterns =[
    path('signup/', views.UserCreate.as_view()),
    path('api-auth/', include('rest_framework.urls')),#rest_framework.urlsdj_rest_auth.registration.urls
]