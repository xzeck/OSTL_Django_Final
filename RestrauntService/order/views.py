from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader, Context
import os
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

def index(request):
    return render(request, 'order/menu.html')

def admin(request):
    return render(request, 'order/admin.html')

def feedback(request):
    return render(request, 'order/feedback.html')

@csrf_exempt
def post_url(request):
    url = request.POST.get('url')
    print(url)
