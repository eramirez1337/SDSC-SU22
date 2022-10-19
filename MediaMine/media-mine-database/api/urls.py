from unicodedata import name
from django.urls import path
from .views import get_books, MovieView, BookView, get_movies, SongListCorr, RecommendCreateView, recList, recdislike, reclike

urlpatterns = [
    path('movie/', MovieView.as_view()),
    path('book/', BookView.as_view()),
    path("api/get-reccommendations/movies/",get_movies, name="get-movies" ),
    path("api/get-reccommendations/books/",get_books, name="get-books" ),
    path('api/create', RecommendCreateView.as_view()),
    #Music
    path('api/post', SongListCorr.as_view(), name="garfield"),
    path('api/post/recdislike', recdislike.as_view(), name="dislike"),
    path('api/post/reclike', reclike.as_view(), name="like"),
    path('api/get', recList.as_view()),

]
