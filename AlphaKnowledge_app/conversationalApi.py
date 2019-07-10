import requests
from decouple import config
#from .views import questionAsked




key = config('appid')
i = "What is the diameter of earth?"


#r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ '{questionAsked}')

r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ i)

print("URL string requested is displayed below")
print(r.url)
wolframResponse = r.json()

#print(questionAsked)

print(r.json())
