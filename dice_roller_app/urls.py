from django.urls import path
from . import views

urlpatterns = [
    # path('', views.index, name='index'),
    #Route added for main_app urls
    path('', views.Home.as_view(), name="home"),
]