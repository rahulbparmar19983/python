
"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('login/',views.loginvalidate,name='loginvalidate'),
    path('customer/',views.customer_view,name="customer_view"),
    path('logout/',views.logout_view,name="logout_view"),
    path('add/',views.customer_add,name="customer_add"),
    path('update/',views.customer_update,name="customer_update"),
    path('customer_delete/',views.customer_delete,name="customer_delete"),
    path('customer_search/',views.customer_search,name="customer_search"),


    
    path('bus/',views.bus_view,name="bus_view"),
    path('bus_insert/',views.bus_insert,name="bus_insert"),
    path('bus_update/',views.bus_update,name="bus_update"),
    path('bus_delete/',views.bus_delete,name="bus_delete"),


    path('route/',views.route_view,name="route_view"),
    path('route_insert/',views.route_insert,name="route_insert"),
    path('route_update/',views.route_update,name='route_update'),
    path('route_delete/',views.route_delete,name='route_delete'),



    path('book/',views.book_view,name="book_view"),
    path('book_insert/',views.book_insert,name="book_insert"),
    path('book_update/',views.book_update,name="book_update"),
    path('book_delete/',views.book_delete,name="book_delete"),
    path('book_search/',views.book_search,name="book_search"),


    path('bus_route/',views.bus_route_view,name="bus_route_view"),
    path('bus_route_insert/',views.bus_route_insert,name="bus_route_insert"),
    path('bus_route_update/',views.bus_route_update,name = "bus_route_update"),
    path('bus_route_delete/',views.bus_route_delete,name="bus_route_delete"),



    path('cancellation/',views.cancellation_view,name="cancellation_view"),
    path('cancellation_insert/',views.cancellation_insert,name="cancellation_insert"),
    path('cancellation_update/',views.cancellation_update,name="cancellation_update"),
    path('cancellation_delete/',views.cancellation_delete,name="cancellation_date"),


    path('waiting/',views.waiting_view,name="waiting_view"),
    path('waiting_insert/',views.waiting_insert,name="waiting_insert"),
    path('waiting_update/',views.waiting_update,name="waiting_update"),
    path('waiting_delete/',views.waiting_delete,name='waiting_delete'),

    path('time_table/',views.time_table_view,name="time_table_view"),
    path('time_table_insert/',views.time_table_insert,name="time_table_insert"),
    path('time_table_update/',views.time_table_update,name="time_table_update"),
    path('time_table_delete/',views.time_table_delete,name='time_table_delete'),


    path('report_book/',views.report_book,name='report_book'),
    path('report_book_search/',views.report_book_search, name="report_book_search"),
    path('report_bus/',views.report_bus,name="report_bus"),
    path('report_bus_search/',views.report_bus_search,name="report_bus_search"),
    path('report_route/',views.report_route,name="report_route"),
    path('report_route_search/',views.report_route_search,name="report_route_search"),
]
