'''
import requests
from decouple import config
from .views import wolframCall




key = config('appid')
i = "What is the diameter of earth?"

#static hardcoded question:   r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ i)

r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ '{questionAsked}')
#r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i='+ wolframCall.questionAsked)




print("URL string requested is displayed below")
print(r.url)
wolframResponse = r.json()

#print(questionAsked)

print(r.json())
'''