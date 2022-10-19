from django.core.management.base import BaseCommand, CommandError
from api.models import BookList
import requests

'''
Accepted genre parameters:
    genre = ["Classics",
             "Comics",
             "Fantasy",
             "Fiction",
             "Graphic Novels",
             "History",
             "Horror",
             "Mystery",
             "Nonfiction",
             "Poetry",
             "Psychology",
             "Romance",
             "Science",
             "Science Fiction",
             "Thriller",
             "Young Adult"]
'''

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
    for i in range(0,3):
        title = volumeInfo[i]['title']
        date = volumeInfo[i]['publishedDate']
        image = volumeInfo[i]['imageLinks']['thumbnail']
        author = volumeInfo[i]['authors'][0]
        #print(image)
        #print(date)
        #print(volumeInfo[i]['title'])
        #print(author)
        book_titles.append(title)
        book_titles.append(date)
        book_titles.append(image)
        book_titles.append(author)
    return book_titles

class Command(BaseCommand):
    help = 'Usage: python manage.py book-populate [genre1] [genre2] ... (Note: proper capitalization required i.e. Fiction vs fiction)'
    def add_arguments(self, parser):
        parser.add_argument('genres', nargs='+', type=str)
    def handle(self, *args, **options):
        for gen in options['genres']:
            book_list = get_book_titles(gen)
            books, created = BookList.objects.update_or_create(genre=gen, book1_title=book_list[0], book1_date=book_list[1], book1_image=book_list[2],
                                                               book1_author=book_list[3], book2_title=book_list[4], book2_date=book_list[5],
                                                               book2_image=book_list[6], book2_author=book_list[7], book3_title=book_list[8], 
                                                               book3_date=book_list[9], book3_image=book_list[10], book3_author=book_list[11])
            #Per update_or_create specs, created TRUE means created, FALSE means updated
            if created == 1:
                print('Successfully populated (create) with ', gen)
            elif created == 0:
                print('Successfully populated (update) with ', gen)