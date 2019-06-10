from django.contrib import admin
from .models import User, Conversations, Topics


# Register your models here.
admin.site.register([User, Conversations, Topics])
