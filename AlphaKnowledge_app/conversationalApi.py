import requests
from decouple import config



key = config('appid')
i = "What is the diameter of earth?"

r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i=' + i)

wolframResponse = r.json()

print (r.json())
