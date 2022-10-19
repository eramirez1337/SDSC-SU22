from rest_framework import serializers
from .models import MovieList, BookList, Recommend, SongList

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieList
        fields = ('id', 'genre', 'movie1_title', 'movie1_year', 'movie1_image', 'movie1_actor1', 'movie1_actor2', 'movie1_actor3',
                   'movie2_title', 'movie2_year', 'movie2_image', 'movie2_actor1', 'movie2_actor2', 'movie2_actor3',
                   'movie3_title', 'movie3_year', 'movie3_image', 'movie3_actor1', 'movie3_actor2', 'movie3_actor3')

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookList
        fields = ('id', 'genre', 'book1_title', 'book1_date', 'book1_image', 'book1_author', 'book2_title', 'book2_date',
                  'book2_image', 'book2_author', 'book3_title', 'book3_date', 'book3_image', 'book3_author')

class RecommendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommend
        fields = ('acousticness', 'danceability', 'valence', 'instrumentalness','energy','speechiness','tempo')


class SongListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SongList
        fields = [
            'name_simi',
        ]