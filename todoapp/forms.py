from django import forms
from .models import TaskModel
class taskForm(forms.ModelForm):
    task = forms.CharField(widget=forms.Textarea(
        attrs={'style': 'resize:none;', 'rows': 2, 'cols': 50, 'class': 'border-1 rounded mt-2 w-50',
               'placeholder': "  Enter Your task"}), label='')
    class Meta:
        model = TaskModel;
        fields = "__all__"