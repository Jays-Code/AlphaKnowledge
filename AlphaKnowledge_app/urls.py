from django.urls import path, include, re_path
from rest_framework import routers


from . import views

router = routers.DefaultRouter()
router.register('user', views.UserView)
router.register('conversations', views.ConversationsView)
router.register('topics', views.TopicsView)


urlpatterns = [
    path ('', include(router.urls)),
    path('user/username/<str:uname>', views.username, name='username'),
    #re_path(r'^wolfram/', views.wolframCall)
    path('wolfram/<str:questionAsked>', views.wolframCall, name='questionAsked')
]