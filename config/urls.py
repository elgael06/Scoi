
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path(r'', include('apps.scoi.urls')),
    #    path('admin/', admin.site.urls),
]
