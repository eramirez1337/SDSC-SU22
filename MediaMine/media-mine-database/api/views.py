from email.policy import HTTP
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import MovieSerializer, BookSerializer, RecommendSerializer
from .models import MovieList, BookList
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.response import Response
from .utils import getMovies, getBooks


#Music
import socket
from django_pandas.io import read_frame
from api.models import Recommend, Music, SongList
import numpy as np
import pandas as pd
pd.options.mode.chained_assignment = None

from django_pandas.io import read_frame
# Machine Learning
from sklearn.preprocessing import MinMaxScaler

from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
from .serializers import SongListSerializer
from rest_framework.generics import CreateAPIView
from math import sqrt

class MovieView(generics.CreateAPIView):
    queryset = MovieList.objects.all()
    serializer_class = MovieSerializer

class BookView(generics.CreateAPIView):
    queryset = BookList.objects.all()
    serializer_class = BookSerializer


@api_view(['POST'])
def get_movies(request):
    data = request.data["genres"]
    
    movies = getMovies(data)

    serializer = MovieSerializer(movies)
 
    return Response({"results":serializer.data})


@api_view(['POST'])
def get_books(request):
    data = request.data["genres"]
    books = getBooks(data)

    serializer = BookSerializer(books)
 
    return Response({"results":serializer.data})

# Create your views here.

class RecommendCreateView(CreateAPIView):
    queryset = Recommend.objects.all()
    serializer_class = RecommendSerializer
    permission_classes = (permissions.AllowAny, )

#Music
def findRecommendationsCorr (vector, df):
        similar_to_song = df.corrwith(vector)
        corr = pd.DataFrame(similar_to_song,columns=['Correlation Similarity'])
        corr.dropna(inplace=True)
        corr.sort_values('Correlation Similarity',ascending=False, inplace = True)
        return corr[0:][0:3]

def store_rec (vc):
    '''
    rec=Recommend(acousticness=list(data["acousticness"].items())[0][-1],
                    danceability=list(data["danceability"].items())[0][-1],
                    energy=list(data["energy"].items())[0][-1],
                    instrumentalness=list(data["instrumentalness"].items())[0][-1],
                    speechiness=list(data["speechiness"].items())[0][-1],
                    tempo=list(data["tempo"].items())[0][-1],
                    valence=list(data["valence"].items())[0][-1])
                    '''
    rec=Recommend(acousticness=vc[0],
                    danceability=vc[1],
                    energy=vc[2],
                    instrumentalness=vc[3],
                    speechiness=vc[4],
                    tempo=vc[5],
                    valence=vc[6])
    print(rec)
    rec.save()

def getrecommendation():
        
        qs1 = Music.objects.all()
        df = read_frame(qs1)
        ft = df[['name', 'artists', 'acousticness', 'danceability', 'energy', 'instrumentalness', 'speechiness', 'tempo', 'valence']]
        ft['artists'] = ft['artists'].apply(lambda x: x[1:-1])
        ft['artists'] = ft['artists'].apply(lambda x: x.replace("'", ""))
        ft['name'] = ft['name'] + ' - ' + ft['artists']
        ft.drop('artists', axis = 1, inplace = True)
        ft.set_index('name', inplace = True)
        scaler = MinMaxScaler()
        scaled = scaler.fit_transform(ft['valence'].values.reshape(-1,1))
        ft['valence'] = scaled
        ft = ft.transpose()
        ft = ft.loc[:,~ft.columns.duplicated()]
        qs2 =  Recommend.objects.all()
        vector = read_frame(qs2)
        vector=vector.to_numpy()
        vector=vector[-1][1:]
        column=np.array(["acousticness","danceability","energy","instrumentalness","speechiness","tempo","valence"])
        vc = pd.Series(vector, index=column,dtype='float64')
        
        okok=findRecommendationsCorr(vc,ft)

        return(okok)

def getrecommendationLike():
        

        qs1 = Music.objects.all()
        df = read_frame(qs1)
        ft = df[['name', 'artists', 'acousticness', 'danceability', 'energy', 'instrumentalness', 'speechiness', 'tempo', 'valence']]
        ft['artists'] = ft['artists'].apply(lambda x: x[1:-1])
        ft['artists'] = ft['artists'].apply(lambda x: x.replace("'", ""))
        ft['name'] = ft['name'] + ' - ' + ft['artists']
        ft.drop('artists', axis = 1, inplace = True)
        ft.set_index('name', inplace = True)
        scaler = MinMaxScaler()
        scaled = scaler.fit_transform(ft['valence'].values.reshape(-1,1))
        ft['valence'] = scaled
        ft = ft.transpose()
        ft = ft.loc[:,~ft.columns.duplicated()]
        qs2 =  Recommend.objects.all()
        vector = read_frame(qs2)
        vector=vector.to_numpy()
        vector=vector[-1][1:]
        for i in range (len(vector)):
            if vector[i]>0.8:
                vector[i]=vector[i]-0.2
            elif vector[i]<0.2:
                vector[i]=vector[i]+0.5
            else:
                vector[i]=vector[i]+0.1

        column=np.array(["acousticness","danceability","energy","instrumentalness","speechiness","tempo","valence"])
        vc = pd.Series(vector,index=column, dtype='float64')
        for i in range(len(vc)):
            print(vc[i])
        store_rec(vc) 
        rec=Recommend(acousticness=vc[0],
                    danceability=vc[1],
                    energy=vc[2],
                    instrumentalness=vc[3],
                    speechiness=vc[4],
                    tempo=vc[5],
                    valence=vc[6])
        print(rec)
        rec.save()
        
        okok=findRecommendationsCorr(vc,ft)

        return(okok)

def getrecommendationDislike():
        
        qs1 = Music.objects.all()
        df = read_frame(qs1)
        ft = df[['name', 'artists', 'acousticness', 'danceability', 'energy', 'instrumentalness', 'speechiness', 'tempo', 'valence']]
        ft['artists'] = ft['artists'].apply(lambda x: x[1:-1])
        ft['artists'] = ft['artists'].apply(lambda x: x.replace("'", ""))
        ft['name'] = ft['name'] + ' - ' + ft['artists']
        ft.drop('artists', axis = 1, inplace = True)
        ft.set_index('name', inplace = True)
        scaler = MinMaxScaler()
        scaled = scaler.fit_transform(ft['valence'].values.reshape(-1,1))
        ft['valence'] = scaled
        ft = ft.transpose()
        ft = ft.loc[:,~ft.columns.duplicated()]
        qs2 =  Recommend.objects.all()
        vector = read_frame(qs2)
        vector=vector.to_numpy()
        vector=vector[-1][1:]
        
        for i in range (len(vector)):
            if vector[i]>0.4:
                vector[i]=vector[i]-0.4
            elif vector[i]<0.4:
                vector[i]=vector[i]+0.6
            else:
                vector[i]=vector[i]+0.1

                     
        column=np.array(["acousticness","danceability","energy","instrumentalness","speechiness","tempo","valence"])
        vc = pd.Series(vector,index=column,dtype='float64')
        for i in range(len(vc)):
            print(vc[i])
        store_rec(vc) 
        rec=Recommend(acousticness=vc[0],
                    danceability=vc[1],
                    energy=vc[2],
                    instrumentalness=vc[3],
                    speechiness=vc[4],
                    tempo=vc[5],
                    valence=vc[6])   
        rec.save()

        okok=findRecommendationsCorr(vc,ft)

        return okok

def extractDigits(lst):
    res = []
    for el in lst:
        sub = el.split(', ')
        res.append(sub)
      
    return(res)

class SongListCorr(APIView):
        def get(self, request, format=None, **kwargs):
                content=getrecommendation()
                sl=["Taylor Swift-Blank Space", "Jay Chou-青花瓷", "Queens-Bohemian Rhapsody", "Micheal Jackson-Heal the World","Congratulations-Post Malone", "The Mass-Era"]
                if len(content)>0:
                    data = content.to_dict()
                    data=list(data.items())[0][1]
                    data=list(data)
                    data=extractDigits(data)
                    for i in range (len(data)):
                            sol=SongList(name_simi=data[i])
                            sol.save()
                    song_list=SongList.objects.all()
                    serializer = SongListSerializer(song_list, many=True)
                else: 
                    for i in range (len(sol)):
                            sol=SongList(name_simi=sl[i])
                            sol.save()
                    song_list=SongList.objects.all()
                    serializer = SongListSerializer(song_list, many=True)
                return Response(serializer.data)

class recdislike(APIView):
        def get(self, request, format=None, **kwargs):
                content=getrecommendationDislike()
                sl=["Taylor Swift-Blank Space", "Jay Chou-青花瓷", "Queens-Bohemian Rhapsody", "Micheal Jackson-Heal the World","Congratulations-Post Malone", "The Mass-Era"]
                if len(content)>0:
                        data = content.to_dict()
                        data=list(data.items())[0][1]
                        data=list(data)
                        data=extractDigits(data)
                        for i in range (len(data)):
                                sol=SongList(name_simi=data[i])
                                sol.save()
                        song_list=SongList.objects.all()
                        serializer = SongListSerializer(song_list, many=True)
                else: 
                    for i in range (len(sl)):
                            sol=SongList(name_simi=sl[i])
                            sol.save()
                    song_list=SongList.objects.all()
                    serializer = SongListSerializer(song_list, many=True)
                return Response(serializer.data)


class reclike(APIView):
        def get(self, request, format=None, **kwargs):
                content=getrecommendationLike()
                sl=["Taylor Swift-Blank Space", "Jay Chou-青花瓷", "Queens-Bohemian Rhapsody", "Micheal Jackson-Heal the World","Congratulations-Post Malone", "The Mass-Era"]

                if len(content)>0:
                        data = content.to_dict()
                        data=list(data.items())[0][1]
                        data=list(data)
                        data=extractDigits(data)
                        for i in range (len(data)):
                                sol=SongList(name_simi=data[i])
                                sol.save()
                        song_list=SongList.objects.all()
                        serializer = SongListSerializer(song_list, many=True)
                else: 
                        for i in range (len(sl)):
                                sol=SongList(name_simi=sl[i])
                                sol.save()
                        song_list=SongList.objects.all()
                        serializer = SongListSerializer(song_list, many=True)
                return Response(serializer.data)


class recList(APIView):
    def get(self, request, format=None, **kwargs):
        recList=Recommend.objects.all()
        serializer = RecommendSerializer(recList, many=True)
        return Response(serializer.data)



def setblocking():
    setblocking_func = socket.socket.setblocking

    def wrapper(self, flag):
        if flag:
            # prohibit timeout reset
            timeout = socket.getdefaulttimeout()
            if timeout:
                self.settimeout(timeout)
            else:
                setblocking_func(self, flag)
        else:
            setblocking_func(self, flag)

    wrapper.__doc__ = setblocking_func.__doc__
    wrapper.__name__ = setblocking_func.__name__
    return wrapper

