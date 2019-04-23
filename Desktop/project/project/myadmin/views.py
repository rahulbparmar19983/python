from django.shortcuts import render ,redirect
from django.http import HttpResponse
from  . models import myadmin , customer , bus , route ,book ,bus_route ,cancellation , timetable,waiting
import sys
import traceback
from django.utils import translation
from datetime import datetime

# Create your views here.
from django.db.models import Q

from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template

from xhtml2pdf import pisa

from django.views.generic import View



def index(request):
    admin = request.session.get('adminname')
    if admin == None :
        return render(request,'login.html')
    else:
        b = book.objects.all().order_by('journey_date')
        date = []
        b1 = []
        for i in b:
            #print()
            if i.journey_date.strftime("%d-%m-%Y") in date:
                continue
            else:
                b1.append(len( book.objects.filter(journey_date = i.journey_date)))
                date.append(str(i.journey_date.strftime("%d-%m-%Y")))
        print(date)
        print(b1)
        return render(request,'Dashboard.html',{'admin' : admin ,'b1' : b1 ,'date' : date})


def loginvalidate(request):
        
    admin1=request.POST['adminname']
    password = request.POST['password']

    f1 = myadmin.objects.filter(adminname = admin1)
    f2 =  myadmin.objects.filter(password = password)
    if len(f1) == 0 :
        return HttpResponse('0')
    elif len(f2)== 0:
        return HttpResponse('1')
    else:
        a = myadmin.objects.get(adminname = admin1)
        p = myadmin.objects.get(password = password)

        if a.password != p.password:
            return HttpResponse('1')
        else:
            request.session['adminname'] = admin1
            return HttpResponse('success')
    '''try :
        a = myadmin.objects.get(Q(adminname=admin1) & Q(password = password))
        request.session['adminname'] = admin1
        return HttpResponse('customer')
        
    except :
        return HttpResponse('0')'''


def logout_view(request):

    #del request.session['adminname']
    #print('session delete');
    del request.session['adminname']
    #request.session.flush()
    return render(request,'login.html')
    #return redirect('index')


############################################################################    CUSTOMER

def customer_view(request):
    admin = request.session.get('adminname')
    if admin == None :
        return render(request,'login.html')
    
    else:
        print(customer)
        print(admin)
        return render(request,'customer.html',{'customer' :  customer.objects.all().order_by('c_id').reverse() , 'admin' : admin})
    
def customer_add(request):

    name = request.POST['name']
    password = request.POST['password']
    email = request.POST['email']
    gender = request.POST['gender']
    contact = request.POST['contact_no']

    c = customer()
    c.name = name
    c.password = password
    c.email = email
    c.gender = gender
    c.contact_no = contact
    c.save()

    return HttpResponse('data added successfully')
    

def customer_update(request):
    try:
        c = customer.objects.get(c_id=request.POST['c_id'])
        c.name = request.POST['name']
        c.password = request.POST['password']
        c.email = request.POST['email']
        c.gender = request.POST['gender']
        c.contact_no = request.POST['contact']
        print(request.POST['name'] , request.POST['password'])
        c.save()
        return HttpResponse('data update successfully')
    except Exception as e:
        #print(e)
        traceback.print_exc()
        return HttpResponse('fail to update data')

def customer_delete(request):
    try:
        c = customer.objects.get(c_id=request.POST['c_id'])
        c.delete()
        return HttpResponse("data is deleted Successfully")
    except:

        return HttpResponse("Data is not delete")

def customer_search(request):
    search_data = request.POST['search_data']
    if len(search_data) == 0 :
        c = customer.objects.all().order_by('pk').reverse()
    else :
        c = customer.objects.filter(Q(name__in = search_data) | Q(password__in =search_data)| Q(email__in = search_data) | Q(gender__in = search_data) | Q(contact_no__in = search_data)).order_by('pk').reverse()
    result =""
    for i in c:
        result += """
		<tr>
			<td id="name">"""+i.name+"""</td>
			<td><i id="password" class="fa fa-eye">&nbsp;&nbsp;&nbsp;<input type="password" id="text-2" style="border:none;outline:none;pointer-events: none;" value= """+ i.password +""" ></i></td>
			<td id="email">"""+ i.email +"""</td>
			<td id="gender">"""+ i.gender +"""</td>		
			<td id="contact">"""+ i.contact_no +"""</td>
			<td><i class="fa fa-edit" aria-hidden="true"   id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>
			<td><i class="fa fa-trash" id="delete"  aria-hidden="true"  style="font-size:20px;margin-left:-50px;"></i><td>
			
		</tr>"""
    table= """
		<tr>
		<td class="title" ><strong><i class="fas fa-Book"></i>&nbsp;Book</strong></td>
		<td>
			<i class="fa fa-search" aria-hidden="true"></i>
			<input type="text" spellcheck="false" id="search"  placeholder="search"style="outline:none;border:none;border-bottom:1px solid gray;">
		</td>
		<td>
			<button class="btn-0" onclick="openForm()"><i class="fa fa-plus"></i></button>
		</td>
		</tr>
		<tr>
			<td colspan=10>
		<hr class="divider"></hr>
			</td>
		</tr>
		<tr>
			<td>Seat-Id</td>
			<td>Seat-NO</td>
			<td>Customer-Id</td>
			<td>Bus-Id</td>
			<td>Journey-Date</td>
			<td>udpate</td>
			<td>delete</td>
		</tr>
		<tr>
			<td colspan="10">
		<hr class="divider"></hr>
		</td>
		</tr>
		"""+ result+ """
		<tr>
			<td>
			</td>
		</tr>"""
    return HttpResponse(table)

    

################################################################################    BUS
    

def bus_view(request):

    admin = request.session.get('adminname')
    
    if admin == None :
        return render(request,"login.html")
    else:
        return render(request,'bus.html',{'admin': admin , 'bus' : bus.objects.all().order_by('b_id').reverse()})

def bus_insert(request):

    bus_no = request.POST['bus_no']
    bus_type=request.POST['bus_type']
    bus_capacity = request.POST['bus_capacity']

    b = bus(bus_no = bus_no,bus_type = bus_type,bus_capacity = bus_capacity)
    b.save()

    b = bus.objects.get(Q(bus_no =bus_no) & Q(bus_type=bus_type) & Q(bus_capacity=bus_capacity))
    return HttpResponse(str(b.b_id))
    
def bus_update(request):

    try:
        b =  bus.objects.get(b_id = request.POST['bus_id'])
        b.bus_no = request.POST['bus_no']
        b.bus_type = request.POST['bus_type']
        b.bus_capacity = request.POST['bus_capacity']
        b.save()

        return HttpResponse(request.POST['bus_id'])
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail to update data')

    
def bus_delete(request):

    try:
        b = bus.objects.get(b_id = request.POST['bus_id'])
        b.delete()
        return HttpResponse(request.POST['bus_id'] + "success")
    except Exception as ex:
        return HttpResponse(traceback.print_exc())

####################################################################################################    ROUTE    

def route_view(request):

    admin = request.session.get('adminname')

    if admin == None:
        return render(request,"login.html")
    else:

        return render(request,'route.html',{'admin' : admin , 'route' : route.objects.all().order_by('pk').reverse()})

def route_insert(request):

    deapture_station = request.POST['deapture_station']
    arrival_station = request.POST['arrival_station']
    pickup_station = request.POST['pickup_station']
    distance = request.POST['distance']

    r = route()
    r.deapture_station = deapture_station
    r.arrival_station = arrival_station
    r.pickup_station = pickup_station
    r.distance = distance

    r.save()
    
    #r = route.objects.get(Q(deapture_station = deapture_station) & Q(arrival_station = arrival_station))

    return HttpResponse('insert success')


def route_update(request):

    try:
        r = route.objects.get(r_id = request.POST['route_id'])
        r.deapture_station = request.POST['deapture_station']
        r.arrival_station = request.POST['arrival_station']
        r.pickup_station = request.POST['pickup_station']
        r.distance = request.POST['distance']
        r.save()
        return HttpResponse('data updated successfully')
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail to update data')

def route_delete(request):

    try:
         r=route.objects.get(r_id = request.POST['route_id'])
         r.delete()
         return HttpResponse('data deleted successfully')
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail to delete data')





########################################################################    BOOK


    

def book_view(request):

    admin  = request.session.get('adminname')

    if admin == None:
        return render(request,'login.html')
    else:

        return render(request,'book.html',{'admin' : admin , 'book' :book.objects.all().order_by('book_id').reverse()})


def book_insert(request):
    from datetime import datetime

    try:
        seat_no = request.POST['seat_no']
        c_id = request.POST['c_id']
        t_id = request.POST['t_id']
        journey_date = request.POST['journey_date']
        journey_time = request.POST['journey_time']
        b = book()
        b.seat_no = seat_no
        b.c_id = customer.objects.get(c_id = c_id)
        b.t_id = timetable.objects.get(t_id = t_id)
        b.journey_date = datetime.strptime(journey_date,'%d-%m-%Y').date()
        b.journey_time = datetime.strptime(journey_time,'%H:%M').time()
        b.save()
        #b =  book.objects.get(Q(c_id) & Q(b_id))
        return HttpResponse('1')
        
    except Exception as e:

        traceback.print_exc()
        return HttpResponse('error')

def book_search(request):
    from datetime import datetime
    search_data = request.POST['search_data']
    if len(search_data) == 0 :
        b = book.objects.all().order_by('pk').reverse()
    else :
        b = book.objects.filter(Q(book_id__in = search_data) | Q(seat_no__in = search_data) | Q(c_id__in =search_data)| Q(b_id__in = search_data)).order_by('pk').reverse()
    result =""
    for i in b:
        result += """
                    <tr>
                            <td id="seat_id">"""+str(i.book_id)+"""</td>
                            <td id="seat_no"> """ + str(int(i.seat_no))+"""</td>
                            <td id="customer_id">"""+str(i.c_id)+"""</td>
                            <td id="bus_id">"""+str(i.b_id)+"""</td>
                            <td id="journey_date">"""+str(i.journey_date.strftime("%d-%m-%Y"))+"""</td>
                            <td><i class="fa fa-edit" aria-hidden="true"   id="update" style="position:relative;font-size:20px;margin-left:15px;"></i><td>
                            <td><i class="fa fa-trash" id="delete" aria-hidden="true"  style="font-size:20px;margin-left:-65px;"></i><td>
                    </tr>"""
    table= """
		<tr>
		<td class="title" ><strong><i class="fas fa-Book"></i>&nbsp;Book</strong></td>
		<td>
			<i class="fa fa-search" aria-hidden="true"></i>
			<input type="text" spellcheck="false" id="search"  placeholder="search"style="outline:none;border:none;border-bottom:1px solid gray;">
		</td>
		<td>
			<button class="btn-0" onclick="openForm()"><i class="fa fa-plus"></i></button>
		</td>
		</tr>
		<tr>
			<td colspan=10>
		<hr class="divider"></hr>
			</td>
		</tr>
		<tr>
			<td>Seat-Id</td>
			<td>Seat-NO</td>
			<td>Customer-Id</td>
			<td>Bus-Id</td>
			<td>Journey-Date</td>
			<td>udpate</td>
			<td>delete</td>
		</tr>
		<tr>
			<td colspan="10">
		<hr class="divider"></hr>
		</td>
		</tr>
		"""+ result+ """
		<tr>
			<td>
			</td>
		</tr>"""
    return HttpResponse(table)
        
            
def book_update(request):
    book_id = request.POST['book_id']
    seat_no = request.POST['seat_no']
    c_id = request.POST['c_id']
    t_id = request.POST['t_id']
    journey_date = request.POST['journey_date']
    journey_time = request.POST['journey_time']

    from datetime import datetime
    try:

        b = book.objects.get(book_id = book_id)
        b.seat_no = seat_no
        b.c_id = customer.objects.get(c_id = c_id)
        b.t_id = timetable.objects.get(t_id = t_id)
        b.journey_date = datetime.strptime(journey_date,'%d-%m-%Y').date()
        b.journey_time = datetime.strptime(journey_time,'%H:%M').time()
        b.save()
        return HttpResponse('success')
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail')


def book_delete(request):

    book_id = request.POST['book_id']

    try:
         b=book.objects.get(book_id = book_id)
         b.delete()
         return HttpResponse('data deleted successfully')
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail to delete data')



##################################################################################Bus Route


def bus_route_view(request):
    admin  = request.session.get('adminname')

    if admin == None:
        return render(request,'login.html')
    else:

        return render(request,'bus_route.html',{'admin' : admin , 'bus_route' : bus_route.objects.all().order_by('pk').reverse()})



def bus_route_insert(request):

    b_id = request.POST['bus_id']
    r_id = request.POST['route_id']

    try:

        br = bus_route()
        br.b_id = bus.objects.get(b_id = b_id)
        br.r_id = route.objects.get(r_id = r_id)
        br.save()
        return HttpResponse('data added successfully')
    except Exception as Ex:

        traceback.print_exc()
        return HttpResponse('fail')

    
    
def bus_route_update(request):

    bus_route_id = request.POST['bus_route_id']
    b_id= request.POST['bus_id']
    r_id = request.POST['route_id']
    try:

        b = bus_route.objects.get(bus_route_id=bus_route_id)
        b.b_id = bus.objects.get(b_id = b_id)
        b.r_id = route.objects.get(r_id = r_id)
        b.save()
        return HttpResponse('data updated successfully')

    except Exception as ex:

        traceback.print_exc()
        return HttpResponse('fail')

def bus_route_delete(request):

    bus_route_id = request.POST['bus_route_id']

    try:
         b=bus_route.objects.get(bus_route_id = bus_route_id)
         b.delete()
         return HttpResponse('data deleted successfully')
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail to delete data')



################################################################ Cancellation


def cancellation_view(request):

    admin  = request.session.get('adminname')

    if admin == None:
        return render(request,'login.html')
    else:

        return render(request,'cancellation.html',{'admin' : admin , 'cancellation' : cancellation.objects.all().order_by('pk').reverse()})
    
def cancellation_insert(request):

    try:
        from datetime import datetime
        can = cancellation()
        can.c_id = customer.objects.get(c_id=request.POST['c_id'])
        can.can_date = datetime.strptime(request.POST['can_date'],'%d-%m-%Y').date()
        can.refund = request.POST['refund']
        can.save()
        return HttpResponse('date insert succesfully')
    except:
        traceback.print_exc()
        return HttpResponse('fail to insert date')
def  cancellation_update(request):

    try:

        from datetime import datetime
        can = cancellation.objects.get(can_id=request.POST['can_id'])
        can.c_id = customer.objects.get(c_id = request.POST['c_id'])
        can.can_date = datetime.strptime(request.POST['can_date'],'%d-%m-%Y').date()
        can.refund = request.POST['refund']
        can.save()
        return HttpResponse('date update succesfully')
    except:
        traceback.print_exc()
        return HttpResponse('fail to update data')


def cancellation_delete(request):
    try:
        can = cancellation.objects.get(request.POST['can_id'])
        can.delete()

        return HttpResponse('data delete successfully')
    except:
        return HttpResponse('fail to delete data')

################################################################ Waiting

def waiting_view(request):

    admin  = request.session.get('adminname')

    if admin == None:
        return render(request,'login.html')
    else:

        return render(request,'waiting.html',{'admin' : admin , 'waiting' : waiting.objects.all().order_by('pk').reverse()})


def waiting_insert(request):

    try:
        from datetime import datetime
        w = waiting()
        w.seat_no = request.POST['seat_no']
        w.c_id = customer.objects.get(c_id=request.POST['c_id'])
        w.t_id = timetable.objects.get(t_id = request.POST['t_id'])
        date = request.POST['journey_date']
        w.journey_date = datetime.strptime(date,'%d-%m-%Y').date()
        time = request.POST['journey_time']
        w.journey_time = datetime.strptime(time,'%H:%M').time()
        w.save()
        return HttpResponse('data insert Succesfully')
        
    except:

        return HttpResponse('fail to udpate data')

def waiting_update(request):

    try:
        from datetime import datetime
        w = waiting.objects.get(w_id = request.POST['w_id'])
        w.seat_no = request.POST['seat_no']
        w.c_id = customer.objects.get(c_id=request.POST['c_id'])
        w.t_id = timetable.objects.get(t_id = request.POST['t_id'])
        date = request.POST['journey_date']
        w.journey_date = datetime.strptime(date,'%d-%m-%Y').date()
        time = request.POST['journey_time']
        w.journey_time = datetime.strptime(time,'%H:%M').time()
        w.save()
        return HttpResponse('data update Succesfully')
    except:
        return HttpResponse('fail to udpate data')

def waiting_delete(request):

    try:
        w = waiting.objects.get(w_id = request.POST['w_id'])
        w.delete()
        return HttpResponse('delete success')
    except:
        return HttpResponse('fail to delete')

################################################################ Time-Table


def time_table_view(request):

    admin  = request.session.get('adminname')

    if admin == None:
        return render(request,'login.html')
    else:
        t = timetable.objects.all().order_by('pk').reverse()
        print(t)
        return render(request,'time-table.html',{'admin' : admin , 'time_table' : t })



def time_table_insert(request):

    try:
        from datetime import datetime
        t = timetable()
        t.b_id = bus.objects.get(b_id = request.POST['bus_id'])
        t.r_id = route.objects.get(r_id = request.POST['route_id'])
        t.time = datetime.strptime(request.POST['time'],"%H:%M").time()
        t.save()
        return HttpResponse('data insert successfully')
    except Exception as ex:
        traceback.print_exc()
        return HttpResponse('fail to updatedata')

    
def time_table_update(request):


    try:
        from datetime import datetime
        t = timetable.objects.get(t_id = request.POST['t_id'])
        t.b_id = bus.objects.get(b_id = request.POST['bus_id'])
        t.r_id = route.objects.get(r_id = request.POST['route_id'])
        t.time = datetime.strptime(request.POST['time'],'%H:%M').time()
        t.save()

        return HttpResponse(request.POST['bus_id'])
    except:
        traceback.print_exc()
        return HttpResponse('fail to update date')

def time_table_delete(request):

    try:

        t = timetable.objects.get(t_id = request.POST['t_id'])
        t.delete()

        return HttpResponse('data delete successfully')

    except:

        return HttpResponse('fail to delete data')


def report_book(request):

    if request.session.get('adminname') == None:
        
        return render(request,'login.html')
    else:
        return render(request,'report_book.html',{'admin' : request.session.get('adminname')})



def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html  = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None        
        
def report_book_search(request):

    date1 = request.GET.get('date1')
    date2 = request.GET.get('date2')

    try:
        b = book.objects.all()
        date1 = datetime.strptime(date1,"%d/%m/%Y").date()
        date2 = datetime.strptime(date2,"%d/%m/%Y").date()
        table = ""
        for i in b:
            if i.journey_date >= date1 and i.journey_date <= date2:
                table+= "<tr>"
                t = timetable.objects.get(t_id = str(i.t_id))
                b1 = bus.objects.get(b_id = str(t.b_id))
                r = route.objects.get(r_id = str(t.r_id))
                c = customer.objects.get(c_id = str(i.c_id))
                table += "<td>"+str(c.email)+"</td>"
                table += "<td>"+str(b1.bus_no)+"</td>"
                table += "<td>"+str(b1.bus_type)+"</td>"
                table += "<td>"+str(r.deapture_station)+"</td>"
                table += "<td>"+str(r.arrival_station)+"</td>"
                table += "<td>"+str(i.journey_date.strftime("%d-%m-%Y"))+"</td>"
                table += "<td>"+str(i.journey_time.strftime("%I:%M %p"))+"</td>"
                table += "</tr>"
        pdf = render_to_pdf('report_book_pdf.html',{'table' : table})
            #pdf = render_to_pdf('ticket.html',{'seat_no':seat_no , 'journey_date' : journey_date , 'journey_time' : journey_time})
        return HttpResponse(pdf, content_type='application/pdf')

    except:
        traceback.print_exc()
        return HttpResponse("No Data Found")        


def report_bus(request):

    if request.session.get('adminname') == None:
        
        return render(request,'login.html')
    else:
        return render(request,'report_bus.html',{'admin' : request.session.get('adminname')})


def report_bus_search(request):
    try:
        b = bus.objects.get(bus_no = request.GET.get('bus_no'))
        t = timetable.objects.filter(b_id = b.b_id)

        table = ''

        for i in t:

            table +="<tr>"
            table += '<td>'+str(b.bus_no)+'</td>'
            table += '<td>'+str(b.bus_type)+'</td>'
            table += '<td>'+str(b.bus_capacity)+'</td>'
            r = route.objects.get(r_id = str(i.r_id))
            table += '<td>'+str(r.deapture_station)+'</td>'
            table += '<td>'+str(r.arrival_station)+'</td>'
            table += '<td>'+str(r.distance)+'</td>'            
            table += '<td>'+str(i.time.strftime("%I:%M %p"))+'</td>'            
            table +="</tr>"
        pdf = render_to_pdf('report_bus_pdf.html',{'table' : table})
            #pdf = render_to_pdf('ticket.html',{'seat_no':seat_no , 'journey_date' : journey_date , 'journey_time' : journey_time})
        return HttpResponse(pdf, content_type='application/pdf')
    except:
        traceback.print_exc()
        return HttpResponse("<h5 class='center'>No Data Found</h5>")

def report_route(request):

    if request.session.get('adminname') == None:
        
        return render(request,'login.html')
    else:
        return render(request,'report_route.html',{'admin' : request.session.get('adminname')})        


def report_route_search(request):
    try:
        deapture_station = request.GET.get('depature_station')
        arrival_station = request.GET.get('arrival_station')
        print(deapture_station,arrival_station)
        r = route.objects.get(Q(deapture_station = deapture_station) & Q (arrival_station = arrival_station) )
        
        t = timetable.objects.filter(r_id = r.r_id)    

        table = ''
        for i in t:

            table += '<tr>'
            b = bus.objects.get(b_id = str(i.b_id))
            table += '<td>'+str(b.bus_no)+'</td>'
            table += '<td>'+str(b.bus_type)+'</td>'
            table += '<td>'+str(b.bus_capacity)+'</td>'
            table += '<td>'+str(i.time.strftime("%I:%M %p"))+'</td>'
            table += '</tr>'
        pdf = render_to_pdf('report_route_pdf.html',{'table' : table})
        return HttpResponse(pdf, content_type='application/pdf')            
        #return HttpResponse(table)
    except:
        traceback.print_exc()
        return HttpResponse("<h5>No Data Found</h5>")
