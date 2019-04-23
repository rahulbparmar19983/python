import traceback
from django.shortcuts import render
from django.http import HttpResponse
import django
from django.conf import settings
from django.core.mail import send_mail
from myadmin.models import myadmin , customer , bus , route ,book ,cancellation , timetable,waiting
from django.db.models import Q
from datetime import datetime
import json
import random
# Create your views here.


from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template

from xhtml2pdf import pisa

from django.views.generic import View




def otp_generator():
    contents = "0123456789"

    otp_length = 4
    output = ""
    for i in range(otp_length):

        next_index = random.randrange(len(contents))
        output = output + contents[next_index]

        
    return(output)

def user_view(request):
    if request.session.get('user') == None:
        return render(request,'ramani_login.html')
    else:
            try:
                from datetime import datetime
                c = customer.objects.get(c_id = request.session.get('user'))
                b = book.objects.filter(c_id = c.c_id)
                table = ''
                for i in b :
                    a = []
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()
                    t = timetable.objects.get(t_id = str(i.t_id))
                    b1 = bus.objects.get(b_id = str(t.b_id))
                    if i.journey_date < now :
                        continue
                    else:
                        table += '<tr>'
                        r = route.objects.get(r_id = str(t.r_id))
                        table += '<td class="center b_id" style="display:none;">'+str(i.book_id) +'</td>'                     
                        table += '<td class="center bus_no">'+str(b1.bus_no) +'</td>'
                        table += '<td class="center deapture_station">'+str(r.deapture_station)+'</td>'
                        table += '<td class="center arrival_station">'+str(r.arrival_station)+'</td>'
                        table += '<td class="center seat_no">'+str( i.seat_no) +'</td>'
                        table += '<td class="center journey_date">'+str( i.journey_date.strftime("%d-%m-%Y") )+'</td>'
                        table += '<td class="center journey_time"> '+str(i.journey_time.strftime('%I:%M %p'))+'</td>'
                        table += '<td class="center"> <a class="model-trigger left btn-small blue waves-effect waves-light">Cancel</a></td>'
                        table += '<td class="center"> <a href="/ticket/?b_id='+str(i.book_id)+'"  id="download_ticket" class="left btn-small blue waves-effect waves-light">Download Ticket</a></td>'    
                        table += '</tr>'
                    #print(a)
                w = waiting.objects.filter(c_id = request.session.get('user'))
                table2 = ''
                for  j in w:
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()                    
                    if j.journey_date < now :
                        j.delete()
                        continue
                    else:                    
                        table2 = '<tr>'
                        t = timetable.objects.get(t_id = str(j.t_id))
                        r = route.objects.get(r_id = str(t.r_id))
                        table2 += '<td class="center">'+str(r.deapture_station)+'</td>'
                        table2 += '<td class="center">'+str(r.arrival_station)+'</td>'
                        table2 += '<td class="center">'+str(i.journey_date)+'</td>'
                        #table2 += '<td>'+str(t.journey_time)+'</td>'
                        table2 += '</tr>'
                return render(request,'user_view.html',{'table' : table , 'table2' : table2 , 'c' : c ,'to' : route.objects.all().values('deapture_station').order_by().distinct(),'from' : route.objects.all().values('arrival_station').order_by().distinct(),})
            except:
                traceback.print_exc()
                return HttpResponse('alert')    
    


def home_view(request):
    if request.session.get('user') == None:
        return render(request,'home.html',{'to' : route.objects.all().values('deapture_station').order_by().distinct(),'from' : route.objects.all().values('arrival_station').order_by().distinct(),})
    else:
            try:
                from datetime import datetime
                c = customer.objects.get(c_id = request.session.get('user'))
                b = book.objects.filter(c_id = c.c_id)
                table = ''
                for i in b :
                    a = []
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()
                    t = timetable.objects.get(t_id = str(i.t_id))
                    b1 = bus.objects.get(b_id = str(t.b_id))
                    if i.journey_date < now :
                        continue
                    else:
                        table += '<tr>'
                        r = route.objects.get(r_id = str(t.r_id))
                        table += '<td class="center b_id" style="display:none;">'+str(i.book_id) +'</td>'                     
                        table += '<td class="center bus_no">'+str(b1.bus_no) +'</td>'
                        table += '<td class="center deapture_station">'+str(r.deapture_station)+'</td>'
                        table += '<td class="center arrival_station">'+str(r.arrival_station)+'</td>'
                        table += '<td class="center seat_no">'+str( i.seat_no) +'</td>'
                        table += '<td class="center journey_date">'+str( i.journey_date.strftime("%d-%m-%Y") )+'</td>'
                        table += '<td class="center journey_time"> '+str(i.journey_time.strftime('%I:%M %p'))+'</td>'
                        table += '<td class="center"> <a class="model-trigger left btn-small blue waves-effect waves-light">Cancel</a></td>'
                        table += '<td class="center"> <a href="/ticket/?b_id='+str(i.book_id)+'"  id="download_ticket" class="left btn-small blue waves-effect waves-light">Download Ticket</a></td>'    
                        table += '</tr>'
                    #print(a)
                w = waiting.objects.filter(c_id = request.session.get('user'))
                table2 = ''
                for  j in w:
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()                    
                    if j.journey_date < now :
                        j.delete()
                        continue
                    else:                    
                        table2 = '<tr>'
                        t = timetable.objects.get(t_id = str(j.t_id))
                        r = route.objects.get(r_id = str(t.r_id))
                        table2 += '<td class="center">'+str(r.deapture_station)+'</td>'
                        table2 += '<td class="center">'+str(r.arrival_station)+'</td>'
                        table2 += '<td class="center">'+str(i.journey_date)+'</td>'
                        #table2 += '<td>'+str(t.journey_time)+'</td>'
                        table2 += '</tr>'
                return render(request,'user_view.html',{'table' : table , 'table2' : table2 , 'c' : c ,'to' : route.objects.all().values('deapture_station').order_by().distinct(),'from' : route.objects.all().values('arrival_station').order_by().distinct(),})
            except:
                traceback.print_exc()
                return HttpResponse('alert')    
    


def login_view(request):
    if request.session.get('user') == None:
        return render(request,'ramani_login.html')
    else:
            try:
                from datetime import datetime
                c = customer.objects.get(c_id = request.session.get('user'))
                b = book.objects.filter(c_id = c.c_id)
                table = ''
                for i in b :
                    a = []
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()
                    t = timetable.objects.get(t_id = str(i.t_id))
                    b1 = bus.objects.get(b_id = str(t.b_id))
                    if i.journey_date < now :
                        continue
                    else:
                        table += '<tr>'
                        r = route.objects.get(r_id = str(t.r_id))
                        table += '<td class="center b_id" style="display:none;">'+str(i.book_id) +'</td>'                     
                        table += '<td class="center bus_no">'+str(b1.bus_no) +'</td>'
                        table += '<td class="center deapture_station">'+str(r.deapture_station)+'</td>'
                        table += '<td class="center arrival_station">'+str(r.arrival_station)+'</td>'
                        table += '<td class="center seat_no">'+str( i.seat_no) +'</td>'
                        table += '<td class="center journey_date">'+str( i.journey_date.strftime("%d-%m-%Y") )+'</td>'
                        table += '<td class="center journey_time"> '+str(i.journey_time.strftime('%I:%M %p'))+'</td>'
                        table += '<td class="center"> <a class="model-trigger left btn-small blue waves-effect waves-light">Cancel</a></td>'
                        table += '<td class="center"> <a href="/ticket/?b_id='+str(i.book_id)+'"  id="download_ticket" class="left btn-small blue waves-effect waves-light">Download Ticket</a></td>'    
                        table += '</tr>'
                    #print(a)
                w = waiting.objects.filter(c_id = request.session.get('user'))
                table2 = ''
                for  j in w:
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()                    
                    if j.journey_date < now :
                        j.delete()
                        continue
                    else:                    
                        table2 = '<tr>'
                        t = timetable.objects.get(t_id = str(j.t_id))
                        r = route.objects.get(r_id = str(t.r_id))
                        table2 += '<td class="center">'+str(r.deapture_station)+'</td>'
                        table2 += '<td class="center">'+str(r.arrival_station)+'</td>'
                        table2 += '<td class="center">'+str(i.journey_date)+'</td>'
                        #table2 += '<td>'+str(t.journey_time)+'</td>'
                        table2 += '</tr>'
                return render(request,'user_view.html',{'table' : table , 'table2' : table2 , 'c' : c ,'to' : route.objects.all().values('deapture_station').order_by().distinct(),'from' : route.objects.all().values('arrival_station').order_by().distinct(),})
            except:
                traceback.print_exc()
                return HttpResponse('alert')    
    

def registration_view(request):
    if request.session.get('user') == None:
        return render(request,'registration.html')
    else:
            try:
                from datetime import datetime
                c = customer.objects.get(c_id = request.session.get('user'))
                b = book.objects.filter(c_id = c.c_id)
                table = ''
                for i in b :
                    a = []
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()
                    t = timetable.objects.get(t_id = str(i.t_id))
                    b1 = bus.objects.get(b_id = str(t.b_id))
                    if i.journey_date < now :
                        continue
                    else:
                        table += '<tr>'
                        r = route.objects.get(r_id = str(t.r_id))
                        table += '<td class="center b_id" style="display:none;">'+str(i.book_id) +'</td>'                     
                        table += '<td class="center bus_no">'+str(b1.bus_no) +'</td>'
                        table += '<td class="center deapture_station">'+str(r.deapture_station)+'</td>'
                        table += '<td class="center arrival_station">'+str(r.arrival_station)+'</td>'
                        table += '<td class="center seat_no">'+str( i.seat_no) +'</td>'
                        table += '<td class="center journey_date">'+str( i.journey_date.strftime("%d-%m-%Y") )+'</td>'
                        table += '<td class="center journey_time"> '+str(i.journey_time.strftime('%I:%M %p'))+'</td>'
                        table += '<td class="center"> <a class="model-trigger left btn-small blue waves-effect waves-light">Cancel</a></td>'
                        table += '<td class="center"> <a href="/ticket/?b_id='+str(i.book_id)+'"  id="download_ticket" class="left btn-small blue waves-effect waves-light">Download Ticket</a></td>'    
                        table += '</tr>'
                    #print(a)
                w = waiting.objects.filter(c_id = request.session.get('user'))
                table2 = ''
                for  j in w:
                    today = datetime.strftime(datetime.now(),"%d-%m-%Y")
                    now = datetime.strptime(today,"%d-%m-%Y").date()                    
                    if j.journey_date < now :
                        j.delete()
                        continue
                    else:                    
                        table2 = '<tr>'
                        t = timetable.objects.get(t_id = str(j.t_id))
                        r = route.objects.get(r_id = str(t.r_id))
                        table2 += '<td class="center">'+str(r.deapture_station)+'</td>'
                        table2 += '<td class="center">'+str(r.arrival_station)+'</td>'
                        table2 += '<td class="center">'+str(i.journey_date)+'</td>'
                        #table2 += '<td>'+str(t.journey_time)+'</td>'
                        table2 += '</tr>'
                return render(request,'user_view.html',{'table' : table , 'table2' : table2 , 'c' : c ,'to' : route.objects.all().values('deapture_station').order_by().distinct(),'from' : route.objects.all().values('arrival_station').order_by().distinct(),})
            except:
                traceback.print_exc()
                return HttpResponse('alert')    
    
def send_otp(request):

    email = request.POST['email']
    c = customer.objects.filter(email = email)
    l = len(c)
    if l == 0:
        try:
            otp = otp_generator()
            request.session['otp'] = otp
            data = "OTP NUMBER = " + otp
            send_mail('Ramani Travels',
            data,
            'rahulbparmar19983@gmail.com',
            [email],
            fail_silently=False) 
            return HttpResponse("success")       
        except:
            #traceback.print_exc()
            return HttpResponse("1")
    else:
        return HttpResponse('0')        

def register_user(request):
    otp = request.POST.get('otp')
    username = request.POST.get('username')
    contact_no = request.POST.get('contact_no')
    email = request.POST.get('email')
    password = request.POST.get('password')
    gender = request.POST.get('gender')

    print(otp , request.session.get("otp"))
    if otp == request.session.get("otp"):
        c = customer()
        c.name = username
        c.email = email
        c.contact_no = contact_no
        c.password = password
        c.gender = gender
        c.save()    
        u = customer.objects.get(email = email)
        request.session['user'] = u.c_id
        return HttpResponse('success')
        print("otp match")
        return HttpResponse("success")
    else:
        print("otp did't match")
        return HttpResponse('0')
    
def login_user(request):

    email = request.POST['username']
    password = request.POST['password']

    f1 = customer.objects.filter(email = email)
    f2 = customer.objects.filter(password = password)
    if len(f1) == 0 :
        return HttpResponse('0')
    elif len(f2) == 0:
        return HttpResponse('1')
    else :
        u = customer.objects.get(email = email)
        p = customer.objects.get(password = password)
        request.session['user'] = u.c_id

        if u.password != p.password:
            return HttpResponse('1')
        else :
            return HttpResponse('user log in')


def search_bus(request):
    from datetime import datetime
    to = request.POST['to']
    fr = request.POST['from']
    date = request.POST['date']
    try:
        r = route.objects.filter(Q(deapture_station = to) & Q(arrival_station = fr))

        t = timetable.objects.all()
        table = ''
        table += '<thead>'
        table += '<th>bus_no</th>'
        table += '<th>bus_type</th>'
        table += '<th>bus_time</th>'
        table += '</thead>'
        table += '<tbody>'
        for i in t:
            for j in r:
                if str(j.r_id) == str(i.r_id):
                    #bus += str(i.r_id)+' - '+str(i.b_id)
                    #t1 = timetable.objects.get(r_id = str(i.r_id))                
                    b = bus.objects.get(b_id = str(i.b_id)) 

                    table += '<tr>'
                    table += '<td>'+str(b.bus_no)+'</td>'
                    table += '<td>'+str(b.bus_type)+'</td>'
                    table += '<td>'+str(i.time.strftime('%I:%M %p'))+'</td>'
                    table += '<td class="right"><a href="/book/?date='+date+'&t_id='+str(i.t_id)+'&bus_type='+str(b.bus_type)+'&distance='+str(j.distance)+'" class="btn-small blue waves-effect waves-light">Book</a></td>'
                    table += '</tr>'
        return HttpResponse(table)
    except:
        traceback.print_exc()
        return HttpResponse('<h5 class="center text-grey text-lighten-3">No Bus Found</h5>')


def book_bus(request):

    from datetime import datetime
    date = request.GET['date']
    t_id = request.GET['t_id']
    try:
        c = customer.objects.get(c_id = request.session.get('user')) 
    except:
        c = None
    user_state = 0
    if c == None :

        user_state = 0
    else :

        user_state = 1

    t = timetable.objects.get(t_id = t_id)
    b = bus.objects.get(b_id = str(t.b_id))
    b1 = ''
    b1 = book.objects.filter(Q(t_id = t_id) and Q(journey_date = datetime.strptime(date,"%d/%m/%Y").date()))
    avaibilty = int(b.bus_capacity) -  len(book.objects.filter(Q(t_id = t_id) and Q(journey_date = datetime.strptime(date,"%d/%m/%Y").date())))
    print(b1)
    bus_capacity = b.bus_capacity
    table = ''
    count = 0
    l = []
    for b in b1:
        s = b.seat_no.split(",")
        for i in s:
            i = i.replace(" ","")
            l.append(i)
    print(l)
    table += '<tr>'
    for i in range(bus_capacity):       
        for j in range(5):
            if (count < bus_capacity):
                count = count + 1
                if str(count) in l:
                    table += '<td>'
                    table += '<label>'
                    table += '<input  type="checkbox" class="filled-in" disabled = "disabled" value ="'+str(count)+'" />'
                    table += '<span></span>'
                    table += '</label>'
                    table += '</td>'
                else:
                    table += '<td>'
                    table += '<label>'
                    table += '<input  type="checkbox" class="filled-in" value ="'+str(count)+'" />'
                    table += '<span></span>'
                    table += '</label>'
                    table += '</td>'                        
        table  += '</tr>'
    return render(request,'book_bus.html',{ 'table' : table ,'user_state' : user_state  , 'c' : c , 'avaibilty' : avaibilty})

def book_seat(request):
    email = request.POST['username']
    password = request.POST['password']
    seats = request.POST['seats']
    d = request.POST['d']
    t_id = request.POST['t_id']
    #list1 = json.loads(seats)
        #print(seats)
    seats = seats.replace("[","")
    seats = seats.replace("]","")
    print(type(seats))
    f1 = customer.objects.filter(email = email)
    f2 = customer.objects.filter(password = password)


    if len(f1) == 0 :
        return HttpResponse('0')
    elif len(f2) == 0:
        return HttpResponse('1')
    else :
        u = customer.objects.get(email = email)
        p = customer.objects.get(password = password)

        if u.password != p.password:
            return HttpResponse('1')
        else :
            if request.session.get('user') == None:
                request.session['user'] = u.c_id
            from datetime import datetime
            t = timetable.objects.get(t_id = t_id)
            j = 0
            b = book()
            b.seat_no = seats
            b.c_id = customer.objects.get(email = email)
            b.t_id = timetable.objects.get(t_id = t_id)
            b.journey_time = t.time
            b.journey_date = datetime.strptime(d,"%d/%m/%Y").date()
            b.save()
        return HttpResponse('success')
    


    
def user_logout(request):
            
    try:
        del request.session['user']
        #request.session.flush()
        return render(request,'ramani_login.html')
    except:
        return render(request,'ramani_login.html')
        return HttpResponse('success')
def cancel_booking(request):
    b_id = request.POST['b_id']
    b = book.objects.get(book_id = b_id)
    c = cancellation()
    c.c_id = b.c_id
    c.can_date = b.journey_date
    c.refund = 1200
    b.delete()
    c.save()
    return HttpResponse(b_id)

def waiting_view(request):
    email = request.POST['username']
    password = request.POST['password']
    d = request.POST['d']
    t_id = request.POST['t_id']


    f1 = customer.objects.filter(email = email)
    f2 = customer.objects.filter(password = password)

    if len(f1) == 0 :
        return HttpResponse('0')
    elif len(f2) == 0:
        return HttpResponse('1')
    else :
        u = customer.objects.get(email = email)
        p = customer.objects.get(password = password)

        if u.password != p.password:
            return HttpResponse('1')
        else :
            if request.session.get('user') == None:
                request.session['user'] = str(u.c_id)
            w= waiting()
            w.c_id = u
            w.t_id = timetable.objects.get(t_id = t_id)
            w.journey_date = datetime.strptime(d,"%d/%m/%Y").date()
            w.save()

        return HttpResponse('success')



def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html  = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None

def ticket(request, *args, **kwargs):
        if request.session.get('user') == None:
                return render(request,'ramani_login.html')
        else:
            c_id = request.session.get('user')
            c = customer.objects.get(c_id = c_id)
            email = c.email
            b_id = request.GET.get('b_id')
            b = book.objects.get(book_id=b_id)
            t = timetable.objects.get(t_id = str(b.t_id))
            r = route.objects.get(r_id = str(t.r_id))
            bus1 = bus.objects.get(b_id = str(t.b_id))
            arrival_station = r.arrival_station
            deapture_station = r.deapture_station
            bus_no = bus1.bus_no
            bus_type = bus1.bus_type
            journey_date = b.journey_date.strftime("%d-%m-%Y")
            journey_time = b.journey_time
            seat_no = b.seat_no
            pdf = render_to_pdf('ticket.html',{'email' : email,'bus_type' : bus_type,'bus_no':bus_no,'deapture_station':deapture_station,'arrival_station' :arrival_station ,'seat_no' : seat_no , 'journey_date' : journey_date , 'journey_time' : journey_time})
            #pdf = render_to_pdf('ticket.html',{'seat_no':seat_no , 'journey_date' : journey_date , 'journey_time' : journey_time})
            return HttpResponse(pdf, content_type='application/pdf')    
