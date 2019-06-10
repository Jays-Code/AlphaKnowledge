from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, ConversationsSerializer, TopicsSerializer
from .models import User, Conversations, Topics

# Create your views here.




class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ConversationsView(viewsets.ModelViewSet):
    queryset = Conversations.objects.all()
    serializer_class = ConversationsSerializer

class TopicsView(viewsets.ModelViewSet):
    queryset = Topics.objects.all()
    serializer_class = TopicsSerializer