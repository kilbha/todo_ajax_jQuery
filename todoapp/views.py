from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from todoapp.models import TaskModel
from .forms import taskForm
# Create your views here.
def home(request):
    obj = TaskModel()
    if request.method == 'POST':
        task = taskForm(request.POST)
        task.save()
        return HttpResponse("")
    form = taskForm()
    return render(request,'home.html',{'form':form})

def JRes(request):
    obj = TaskModel.objects

    print(obj.values()[0])
    data  = {'response':list(obj.values())}
    return JsonResponse(data,safe=True)

def deltask(request,prk):
    TaskModel.objects.filter(pk = prk).delete()
    return redirect('home')

def Edittask(request,prk):
    object = TaskModel.objects.filter(pk = prk).first()
    obj = TaskModel.objects.get(pk=prk)
    form = taskForm(instance = object)
    if request.method == 'POST':
        form = taskForm(request.POST)
        form_instance = form.save(commit=False)
        obj.task = form_instance.task
        obj.save()
        return redirect('home')
    return render(request,'edit.html',{'form':form})