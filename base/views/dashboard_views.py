from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import DashboardNavbarItem, Product, Review
from base.serializers import DashboardNavbarItemSerializer, ProductSerializer, UserSerializer, UserSerializerWithToken, ReviewSerializer
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from apiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials

from rest_framework import status
# Create your views here.

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
KEY_FILE_LOCATION = '../bionems-testing-328310-5a35b0cd11f1.json'
VIEW_ID = '252749701'


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(id=pk)

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response("L'utilisateur a été supprimé")


@api_view(['GET'])
@permission_classes([IsAdminUser])
def dashboardPage(request):
    dashboardNavbarItems = DashboardNavbarItem.objects.all()
    serializer = DashboardNavbarItemSerializer(dashboardNavbarItems, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    # products = Product.objects.all()
    products = Product.objects.filter(name__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(products, 9)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user

    product = Product.objects.create(
        user=user,
        name='Sample Name',
        price=0,
        brand='Sample Brand',
        # countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    # product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Produit supprimé')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get('image')
    product.save()
    return Response('Image was uploaded')


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getReviews(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAdminUser])
def getAnalytics():
    credentials = ServiceAccountCredentials.from_json_keyfile_name(
        KEY_FILE_LOCATION, SCOPES)

    analytics = build('analyticsreporting', 'v4', credentials=credentials)

    # return analytics
    response = analytics.reports().batchGet(
        body={
            'reportRequests': [
                {
                    'viewId': VIEW_ID,
                    'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
                    'metrics': [{'expression': 'ga:sessions'}],
                    'dimensions': [{'name': 'ga:country'}]
                }
            ]
        }
    ).execute

    rowList = []
    for report in response.get('reports', []):
        # Set column headers
        columnHeader = report.get('columnHeader', {})
        dimensionHeaders = columnHeader.get('dimensions', [])
        metricHeaders = columnHeader.get(
            'metricHeader', {}).get('metricHeaderEntries', [])

        # Get each row in the report
        for row in report.get('data', {}).get('rows', []):
            rowDict = {}
            dimensions = row.get('dimensions', [])
            dateRangeValues = row.get('metrics', [])

            # Fill dict with dimension header (key) & dimension value (value)
            for header, dimension in zip(dimensionHeaders, dimensions):
                rowDict[header] = dimension

            # Fill dict with metric header (key) & metric value (value)
            for i, values in enumerate(dateRangeValues):
                for metric, value in zip(metricHeaders, values.get('values')):
                    # Set int as int, float as float
                    if ',' in value or '.' in value:
                        rowDict[metric.get('name')] = float(value)
                    else:
                        rowDict[metric.get('name')] = int(value)

            rowList.append(rowDict)

    return Response(rowDict)
