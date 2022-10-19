import string
from django.core.management.base import BaseCommand, CommandError
from api.models import MovieList
from imdb import Cinemagoer, IMDbError

'''
The following genres work with the script:
Comedy
Sci-Fi
Horror
Romance
Action
Thriller
Drama
Mystery
Crime
Animation
Adventure
Fantasy
Comedy-Romance
Action-Comedy
Superhero
'''

ia = Cinemagoer()
def getTop10Movies(genres):
    top100 = ia.get_popular100_movies()
    print("Got top 100")
    i = 0
    top_10_recs = [] #Holds top 10 movies of their preferred genre
    for movie in top100:
        #Check if overlap occurs between genre list and top 100 genres, add to holder
        if i<3 and genres in ia.get_movie(movie.movieID).data['genres']:
            img = getImages(movie.movieID)
            actrs = getActors(movie.movieID)
            top_10_recs.append(movie['title'])
            top_10_recs.append(movie['year'])
            top_10_recs.append(img)
            top_10_recs.append(actrs[0])
            top_10_recs.append(actrs[1])
            top_10_recs.append(actrs[2])
            i+=1
            print(movie)
    return top_10_recs

def getImages(movie_id):
    image_holder = ia.get_movie(movie_id).data['cover url']
    return image_holder

def getActors(movie_id):
    actors_holder = ia.get_movie(movie_id).data['cast']
    actor_list = []
    for actor in actors_holder[:3]:
        actor_list.append(actor['name'])
    return actor_list

class Command(BaseCommand):
    help = 'Usage: python manage.py movie-populate [genre1] [genre2] ... (Note: proper capitalization required i.e. Action vs action)'
    def add_arguments(self, parser):
        parser.add_argument('genres', nargs='+', type=str)
    def handle(self, *args, **options):
        for gen in options['genres']:
            try:
                movies = getTop10Movies(gen)
                gnr, created = MovieList.objects.update_or_create(genre=gen, movie1_title=movies[0], movie1_year=movies[1],
                                                                 movie1_image=movies[2], movie1_actor1=movies[3],
                                                                 movie1_actor2=movies[4], movie1_actor3=movies[5],
                                                                 movie2_title=movies[6], movie2_year=movies[7], movie2_image=movies[8],
                                                                 movie2_actor1=movies[9], movie2_actor2=movies[10], movie2_actor3=movies[11],
                                                                 movie3_title=movies[12], movie3_year=movies[13], movie3_image=movies[14],
                                                                 movie3_actor1=movies[15], movie3_actor2=movies[16], movie3_actor3=movies[17])
            except IMDbError as e:
                print(e)
            #Per update_or_create specs, created TRUE means created, FALSE means updated
            if created == 1:
                print('Successfully populated (create) with ', gen)
            elif created == 0:
                print('Successfully populated (update) with ', gen)
