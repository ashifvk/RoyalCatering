from django.contrib import admin
from .models import login,UserRegister

# Register your models here.
admin.site.register(login)
admin.site.register(UserRegister)