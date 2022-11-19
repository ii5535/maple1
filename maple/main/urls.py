from django.urls import include, path
from rest_framework import routers
from main.views import BookdetailViewSet,BooklistViewSet

router = routers.DefaultRouter()
router.register(r'booklist', BooklistViewSet)
router.register(r'bookdetail', BookdetailViewSet)


urlpatterns = [
    path('', include(router.urls)),
    ]