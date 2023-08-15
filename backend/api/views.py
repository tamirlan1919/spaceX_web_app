from django.shortcuts import render
from .models import Menu,Advantages
from rest_framework import generics
from .serializers import *
# Create your views here.


class MenuAPIView(generics.ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class AdvatagesAPIView(generics.ListAPIView):
    queryset = Advantages.objects.all()
    serializer_class = AdvantagesSerializer