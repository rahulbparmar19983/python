from django.urls import path
from . import views

urlpatterns = [
    path('',views.home_view,name="home_view"),
    path('registation/',views.registration_view,name="registration_view"),
    path('ramani_login/',views.login_view,name="login_view"),
    path('register_user/',views.register_user,name="register_user"),
    path('login_user/',views.login_user,name="login_user"),
    path('search_bus/',views.search_bus,name="search_bus"),
    path('book/',views.book_bus,name="book_bus"),
    path('book_seat/',views.book_seat,name="book_seat"),
    path('user_view/',views.user_view,name="user_view"),
    path('user_logout/',views.user_logout,name="user_logout"),
    path('cancel_booking/',views.cancel_booking,name="cancel_booking"),
    path('waiting/',views.waiting_view,name="waiting_view"),
    path('ticket/',views.ticket,name="ticket"),
    path('send_otp/',views.send_otp,name="send_otp"),
    ]
