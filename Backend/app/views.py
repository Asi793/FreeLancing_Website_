from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import authentication
from .serializers import UserSerializer,LoginSerializer,JobpostSerializer
from rest_framework.authtoken.models import Token
from .models import Jobpost

class SignupView(APIView):
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        # return Response({'data':request.data})
        if serializer.is_valid():
            user=serializer.save()
            token,created=Token.objects.get_or_create(user=user)
            print(token,' ',created)
            return Response({'token':token.key},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self,request):
        print(request.data)
        serializer=LoginSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            user=authentication(username=serializer.data['username'],password=serializer.data['password'])
            if user:
                token,created=Token.objects.get_or_create(user=user)
                return Response({'token':token.key},status=status.HTTP_200_OK)
            return Response({'error':'Invalid credentials'},status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class JobpostView(APIView):
    def post(self, request):
        serializer = JobpostSerializer(data=request.data)
        if serializer.is_valid():
            res = serializer.save()
            return Response({'res': res.id, 'message': 'Successfully inserted data'}, status=status.HTTP_200_OK)
        else:
            print("Serializer Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetjobpostView(generics.ListCreateAPIView):
    queryset=Jobpost.objects.all()
    serializer_class=JobpostSerializer

class Example(APIView):
    def post(self,request):
        return Response({'data':request.data})
    