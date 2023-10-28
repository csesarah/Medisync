from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Setting
# Create your views here.
class SettingsView(APIView):
    def get(self, request, format=None):
        settings = {}

        try:
            settingObjects = Setting.objects.all()
            for item in settingObjects:
                settings[item.name] = item.value

            return Response(settings, status=200)
    
        except:
            return Response(status=404)


    def post(self, request, format=None):
        settings = request.data('settings')

        err_setting = []
        try:
            for setting in settings:
                new_setting = Setting(name=setting['NAME'], value=setting['VALUE'])
                new_setting.save()
        except:
            err_settings.append(setting)

        if len(err_setting) > 0:
            return Response({'INVALID_SETTING': err_setting}, status=200)
        else:
            return Response(status=200)