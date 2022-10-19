import string
from api.models import MovieList,BookList
from imdb import Cinemagoer, IMDbError
import random
import requests

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

def getImages(movie_id):
    image_holder = ia.get_movie(movie_id).data['cover url']
    return image_holder

def getActors(movie_id):
    actors_holder = ia.get_movie(movie_id).data['cast']
    actor_list = []
    for actor in actors_holder[:3]:
        actor_list.append(actor['name'])
    return actor_list


def getTop10Movies(movies,genres):
    result = []
    counter = 0
    for movie in movies:
        movie_genres = ia.get_movie(movie.movieID).data['genres']

        if counter==3:
            print("done bro")
            break

        for genre in genres:
            print("current: ", genre)
            print("looking for:",movie_genres)
            if genre in movie_genres :
                counter = counter + 1
                print("fond one", genre)
                img = getImages(movie.movieID)
                actrs = getActors(movie.movieID)
                result.append(movie['title'])
                result.append(movie['year'])
                result.append(img)
                result.append(actrs[0])
                result.append(actrs[1])
                result.append(actrs[2])
                break
        
    print("result",result)
                
    return result



def getMovies(genres):
    top100 = ia.get_popular100_movies()
    random.shuffle(top100)


    try:
        movies = getTop10Movies(top100,genres)
       
        found = MovieList(genre="whatever", movie1_title=movies[0], movie1_year=movies[1],
                                                            movie1_image=movies[2], movie1_actor1=movies[3],
                                                            movie1_actor2=movies[4], movie1_actor3=movies[5],
                                                            movie2_title=movies[6], movie2_year=movies[7], movie2_image=movies[8],
                                                            movie2_actor1=movies[9], movie2_actor2=movies[10], movie2_actor3=movies[11],
                                                            movie3_title=movies[12], movie3_year=movies[13], movie3_image=movies[14],
                                                            movie3_actor1=movies[15], movie3_actor2=movies[16], movie3_actor3=movies[17])
        return found
    except IMDbError as e:
        print(e)

 
   

def get_book_titles(genre):
    raw_results = []
    google_link = "https://www.googleapis.com/books/v1/volumes?q=subject:"
    string_genre = genre
    full_string = google_link + string_genre #This line may seem dumb, but trust me, it's REQUIRED
    #print(full_string)
    response_data = requests.get(full_string).json() #full_string required here, otherwise it trips over itself and doesn't give us what we want
    raw_results.append(response_data)
    retrieved_items_data = []
    for i in range(0, len(raw_results)):
        retrieved_items_data.append(raw_results[i]['items'])
    volumeInfo = []
    for k in range(0, len(retrieved_items_data)):
        by_genre_record = retrieved_items_data[k]
        for i in range(0,len(by_genre_record)):
            temp_dict1 = by_genre_record[i]['volumeInfo']
            #print(by_genre_record[i]['volumeInfo']['title'])
            volumeInfo.append(temp_dict1)
    book_titles = []
    i = random.randint(0, len(volumeInfo)-1)
    title = volumeInfo[i]['title']
    date = volumeInfo[i]['publishedDate']
    image = volumeInfo[i]['imageLinks']['thumbnail']
    author = volumeInfo[i]['authors'][0]
    book_titles.append(title)
    book_titles.append(date)
    book_titles.append(image)
    book_titles.append(author)

    return book_titles






def getBooks(genres):
    book_list = []
    for genre in genres:
        book_titles = get_book_titles((genre))
        book_list.extend(book_titles)

    books = BookList(genre="jbhbb", book1_title=book_list[0], book1_date=book_list[1], book1_image=book_list[2],
                                                               book1_author=book_list[3], book2_title=book_list[4], book2_date=book_list[5],
                                                               book2_image=book_list[6], book2_author=book_list[7], book3_title=book_list[8], 
                                                               book3_date=book_list[9], book3_image=book_list[10], book3_author=book_list[11])
    return books