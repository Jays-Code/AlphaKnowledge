from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('conversations', views.ConversationsView)
router.register('topics', views.TopicsView)


urlpatterns = [
    path ('', include(router.urls)),
    path('user/username/<str:uname>', views.username, name='username'),
]