from django.shortcuts import render
from django.views import View

# Create your views here.

def Home (request):
    return render(request, 'home.html')