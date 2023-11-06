from django.urls import path
from . import views

urlpatterns = [
    path('polls/', views.PollCreate.as_view(), name='poll-list-create'),
    path('polls/<int:id>/', views.PollDetailView.as_view(), name='poll-detail'),
    path('polls/access/', views.PollListView.as_view(), name='poll-list-view'),
    path('createUser/', views.UserRegistrationView.as_view(), name='create-user'),
]
