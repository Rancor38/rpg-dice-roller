from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView
# from django.http import HttpResponse
# Create your views here.

class Home(TemplateView):
    template_name = "home.html"
# def index(request):
#     return HttpResponse("Hello World")