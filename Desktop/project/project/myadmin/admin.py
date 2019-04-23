from django.contrib import admin
from  . models import myadmin , customer , bus , route ,book  ,cancellation , timetable 

# Register your models here.

admin.site.register(myadmin)
admin.site.register(customer)
admin.site.register(bus)
admin.site.register(route)
admin.site.register(book)
admin.site.register(timetable)
admin.site.register(cancellation)
