# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Photo
from .serializers import PhotoSerializer

@api_view(['POST'])
def upload_photo(request):
    serializer = PhotoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()  # This will save the photo to the 'photoFolder/' directory
        return Response({'message': 'Photo uploaded and saved successfully'}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
