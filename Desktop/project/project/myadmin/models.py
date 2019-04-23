from django.db import models
from datetime import date
from django.utils.timezone import localtime , now
from datetime import datetime
# Create your models here.

class myadmin(models.Model):

    admin_id = models.AutoField(primary_key=True)
    adminname = models.CharField(max_length=30,default='')
    password = models.CharField(max_length = 25 , default='')
    email = models.CharField(max_length=30,default='')


    def __str__(self):

        return self.adminname


class customer(models.Model):

    c_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30,default='')
    password = models.CharField(max_length=25,default='')
    email = models.EmailField(max_length=30,default='')
    g_list =(
        ('m','male'),
        ('f','female'),
        )
    gender = models.CharField(max_length=1,choices=g_list,default='')
    contact_no =  models.CharField(max_length=14,default='')

    def __str__(self):

        return str(self.c_id)

class bus(models.Model):


    b_id = models.AutoField(primary_key=True)
    bus_no = models.CharField(max_length=15,default='')
    ch = (
        ('a','ac'),
        ('n','none-ac'),
        )
    bus_type = models.CharField(max_length=1,choices=ch,default='')
    bus_capacity = models.IntegerField(default=None)


    def __str__(self):

        return str(self.b_id)

class route(models.Model):

    r_id = models.AutoField(primary_key =True)
    deapture_station = models.CharField(max_length = 30 , default = '')
    arrival_station = models.CharField(max_length = 30 , default = '')
    pickup_station = models.CharField(max_length = 30 , default= '')
    distance = models.CharField(max_length = 5, default='')

    def __str__(self):
        
        return str(self.r_id)

class bus_route(models.Model):


    bus_route_id = models.AutoField(primary_key=True)
    b_id = models.ForeignKey(bus,on_delete=models.CASCADE)
    r_id = models.ForeignKey(route,on_delete = models.CASCADE)

    def __str__(self):

        return str(self.bus_route_id)


class timetable(models.Model):

    #date =d.strftime("%d-%m-%y")


    t_id = models.AutoField(primary_key = True)
    b_id = models.ForeignKey(bus,on_delete=models.CASCADE ,default = None)
    r_id = models.ForeignKey(route,on_delete=models.CASCADE ,default = None)
    time = models.TimeField(default='00:00:00')

    def __str__(self):

        return str(self.t_id)        

class book(models.Model):

    d = localtime(now()).date()
    date =d.strftime("%d-%m-%y")
    time = d.strftime("%H:%M:%S")
    #datetime.strptime(date,"%Y-%m-%d").date()
    
    book_id = models.AutoField(primary_key=True)
    seat_no = models.CharField(default = None,max_length=20)
    c_id = models.ForeignKey(customer, on_delete = models.CASCADE,default = None)
    t_id = models.ForeignKey(timetable,on_delete = models.CASCADE,default = None)
    journey_date = models.DateField(default = date)
    journey_time = models.TimeField(default='00:00:00')

    def __str__(self):

        return str(self.book_id)
    

class cancellation(models.Model):
    d = localtime(now()).date()
    date =d.strftime("%d-%m-%y")

    can_id = models.AutoField(primary_key= True)
    c_id =models.ForeignKey(customer,on_delete=models.CASCADE)
    can_date = models.DateField(default= date)
    refund = models.IntegerField(default=None)

'''class waiting(models.Model):

    d = localtime(now()).date()
    date =d.strftime("%d-%m-%y")
    time = d.strftime("%H:%M:%S")
    #datetime.strptime(date,"%Y-%m-%d").date()
    
    w_id = models.AutoField(primary_key=True)
    seat_no = models.IntegerField(default = None)
    c_id = models.ForeignKey(customer, on_delete = models.CASCADE,default = None)
    t_id = models.ForeignKey(timetable,on_delete = models.CASCADE,default = None)
    journey_date = models.DateField(default = date)
    journey_time = models.TimeField(default='00:00:00')

    def __str__(self):

        return str(self.w_id)'''
class waiting(models.Model):

    d = localtime(now()).date()
    date =d.strftime("%d-%m-%y")

    w_id = models.AutoField(primary_key=True)
    c_id = models.ForeignKey(customer, on_delete = models.CASCADE,default = None)
    t_id = models.ForeignKey(timetable,on_delete = models.CASCADE,default = None)
    journey_date = models.DateField(default = date)


    def __str__(self):

         return str(self.w_id)  



class payment(models.Model)  :

    p_id = models.AutoField(primary_key = True)
    c_id = models.ForeignKey(customer,on_delete = models.CASCADE,default = None)
    card_no = models.CharField(max_length=20,default='')        
    cvc = models.CharField(max_length=10,default='')
    amount = models.IntegerField(default='')
