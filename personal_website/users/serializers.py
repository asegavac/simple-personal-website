from django.contrib.auth.models import User
from rest_framework import serializers
from projects.serializers import ProjectSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id',)

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['name'] = instance.first_name + ' ' + instance.last_name
        rep['title'] = instance.info.title
        rep['website'] = instance.info.website
        rep['about'] = instance.info.about
        rep['resume'] = instance.info.resume
        rep['image'] = instance.info.image
        rep['emails'] = [email.address
                         for email
                         in instance.info.emails.all()]
        rep['projects'] = [ProjectSerializer(project).data
                           for project in instance.projects.all()]
        return rep
