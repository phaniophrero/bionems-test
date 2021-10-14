from django.urls import path
from base.views import dashboard_views as views


urlpatterns = [
    path('', views.dashboardPage, name="dashboard"),

    path('reviews/', views.getReviews, name="dashboard-reviews"),

    path('analytics/', views.getAnalytics, name="dashboard-analytics"),

    path('productlist/', views.getProducts, name="dashboard-productlist"),
    path('create/', views.createProduct, name="dashboard-product-create"),
    path('upload/', views.uploadImage, name="dashboard-image-upload"),

    path('update/<str:pk>/', views.updateProduct, name="product-update"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),

    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update', views.updateUserProfile, name="users-profile-update"),
    path('userlist/', views.getUsers, name="users"),
    path('<str:pk>/', views.getUserById, name="user"),
    path('update/<str:pk>/', views.updateUser, name="user-update"),
    path('delete/<str:pk>/', views.deleteUser, name="user-delete"),

    # l-am mutat sus , provoca o eroare de tip 500
    # path('reviews/', views.getReviews, name="dashboard-reviews"),
]
