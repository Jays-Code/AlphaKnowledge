from rest_framework import serializers

from .models import User, Conversations, Topics



class ConversationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversations
        fields = ('id', 'question', 'answer', 'time', 'userId' )

class TopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topics
        fields = ('id', 'subject', 'notes', 'userId' )

class UserSerializer(serializers.ModelSerializer):
    UserConversations = ConversationsSerializer(many=True, read_only=True)
    UserTopics = TopicsSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'UserConversations', 'UserTopics')
