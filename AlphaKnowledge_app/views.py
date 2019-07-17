from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, ConversationsSerializer, TopicsSerializer
from .models import User, Conversations, Topics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse, HttpRequest
import json
#from .conversationalApi import wolframResponse
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
#def wolframCall(request):
def wolframCall(request, question):
    questionAsked = question
    print("the question asked was: ", questionAsked)
    key = config('appid')
    r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ questionAsked)
    #r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ '{questionAsked}')
    wolframResponse = r.json()
    wolf = wolframResponse
    wolfdata = json.dumps(wolf)
    print(wolfdata)
    

    #i = "What is the diameter of earth?"
    #static hardcoded question:   r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ i)

    
   




    print("URL string requested is displayed below")
    print(r.url)
   

    #print(questionAsked)

    print(r.json())
        
    return HttpResponse(wolfdata)

    


#----------Below was originally in conversational API file---------

import requests
from decouple import config
#from .views import wolframCall






