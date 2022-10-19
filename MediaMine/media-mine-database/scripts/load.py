from api.models import Music
import csv
#Run python manage.py runscript load

def run():
    with open('music_data.csv', encoding="utf8") as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        Music.objects.all().delete()

        for row in reader:
            print(row)
            music = Music(
                        name=row[0],
                        artists=row[1],
                        acousticness=row[2],
                        danceability=row[3], 
                        energy=row[4], 
                        instrumentalness=row[5], 
                        speechiness=row[6], 
                        tempo=row[7], 
                        valence=row[8]
                        )
            music.save()