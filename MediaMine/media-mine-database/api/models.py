from django.db import models

'''
def searchedMovieGenre(userMovie):
    #try except block used in case movie does not exist
    try:
        foundMovie = ia.search_movie(userMovie)
        #foudnMovie[0] contains closest match to input
        movieGenres = ia.get_movie(foundMovie[0].movieID).data['genres']
        return movieGenres
    except IMDbError as e:
        print(e)
'''

class MovieList(models.Model):
    genre = models.CharField(max_length=32, default="")
    movie1_title = models.TextField(max_length=64, default="")
    movie1_year = models.IntegerField(default="")
    movie1_image = models.TextField(default="")
    movie1_actor1 = models.TextField(default="")
    movie1_actor2 = models.TextField(default="")
    movie1_actor3 = models.TextField(default="")

    movie2_title = models.TextField(max_length=64, default="")
    movie2_year = models.IntegerField(default="")
    movie2_image = models.TextField(default="")
    movie2_actor1 = models.TextField(default="")
    movie2_actor2 = models.TextField(default="")
    movie2_actor3 = models.TextField(default="")

    movie3_title = models.TextField(max_length=64, default="")
    movie3_year = models.IntegerField(default=0)
    movie3_image = models.TextField(default="")
    movie3_actor1 = models.TextField(default="")
    movie3_actor2 = models.TextField(default="")
    movie3_actor3 = models.TextField(default="")

class BookList(models.Model):
    genre = models.CharField(max_length=32, default="")
    book1_title = models.TextField(max_length=64, default="")
    book1_date = models.TextField(default="")
    book1_image = models.TextField(default="")
    book1_author = models.TextField(default="")

    book2_title = models.TextField(max_length=64, default="")
    book2_date = models.TextField(default="")
    book2_image = models.TextField(default="")
    book2_author = models.TextField(default="")

    book3_title = models.TextField(max_length=64, default="")
    book3_date = models.TextField(default="")
    book3_image = models.TextField(default="")
    book3_author = models.TextField(default="")


class Music (models.Model):
    name = models.CharField(max_length=120)
    artists = models.CharField(max_length=120)
    acousticness = models.FloatField(max_length=120)
    danceability = models.FloatField(max_length=120)
    valence = models.FloatField(max_length=120)
    instrumentalness = models.FloatField(max_length=120)
    energy = models.FloatField(max_length=120)
    speechiness = models.FloatField(max_length=120)
    tempo = models.FloatField(max_length=120)

    def __str__(self):
        return self.name

class Recommend (models.Model):
    acousticness = models.FloatField(max_length=120)
    danceability = models.FloatField(max_length=120)
    valence = models.FloatField(max_length=120)
    instrumentalness = models.FloatField(max_length=120)
    energy = models.FloatField(max_length=120)
    speechiness = models.FloatField(max_length=120)
    tempo = models.FloatField(max_length=120)
 
    def __str__(self):
        a=str(self.acousticness)
        return a


class SongList (models.Model):
    name_simi = models.CharField(max_length=10000)
    