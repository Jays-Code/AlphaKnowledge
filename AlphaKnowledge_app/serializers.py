from rest_framework import serializers

from .models import User, Conversations, Topics



class ConversationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversations
        fields = ('question', 'answer', 'time', 'username')

class TopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topics
        fields = ('subject', 'notes', 'username')

class UserSerializer(serializers.ModelSerializer):
    UserConversations = ConversationsSerializer(many=True, read_only=True)
    UserTopics = TopicsSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'UserConversations', 'UserTopics')
