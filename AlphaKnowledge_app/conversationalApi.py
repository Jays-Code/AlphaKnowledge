import requests
from decouple import config




key = config('appid')
i = "What is the diameter of earth?"

payload = "questionAsked"

r = requests.get(f'http://api.wolframalpha.com/v1/conversation.jsp?appid='+ key + '&i=', params=payload)
print("URL string requested is displayed below")
print(r.url)
wolframResponse = r.json()

print(payload)

print(r.json())
