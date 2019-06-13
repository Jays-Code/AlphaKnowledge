import requests
from decouple import config

key = config('appid')


r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp')


print (r.json())
