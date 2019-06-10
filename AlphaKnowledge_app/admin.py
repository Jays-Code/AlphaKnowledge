from django.contrib import admin
from .models import User, Conversations, Topics


# Register your models here.

admin.site.register([User, Conversations, Topics])
#admin.site.register([User])
#admin.site.register(Conversations)
#admin.site.register(Topics)
