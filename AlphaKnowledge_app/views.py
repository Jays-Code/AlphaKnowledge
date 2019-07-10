from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, ConversationsSerializer, TopicsSerializer
from .models import User, Conversations, Topics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse, HttpRequest
import json
from .conversationalApi import wolframResponse
#from .urls import questionAsked
# from .conversationalApi import i
#from .conversationalApi import payload

# Create your views here.

@api_view(['GET', 'POST', ])
def username(request, uname):
    user = User.objects.get(username=uname)
    serializer = UserSerializer(user)
    return Response(serializer.data)


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ConversationsView(viewsets.ModelViewSet):
    queryset = Conversations.objects.all()
    serializer_class = ConversationsSerializer

class TopicsView(viewsets.ModelViewSet):
    queryset = Topics.objects.all()
    serializer_class = TopicsSerializer

#@api_view(['GET'])
#def wolframCall(request, qustionAsked):
def wolframCall(request):
    #print("the question asked was: ", questionAsked)
    wolf = wolframResponse
    wolfdata = json.dumps(wolf)
    print(wolfdata)
    return HttpResponse(wolfdata)
