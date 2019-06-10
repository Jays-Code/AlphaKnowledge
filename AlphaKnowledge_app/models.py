from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username

class Conversations(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    time = models.DateTimeField()
    username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='UserConversations')

class Topics(models.Model):
    subject = models.CharField(max_length=255)
    notes = models.CharField(max_length=400)
    username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='UserTopics')
