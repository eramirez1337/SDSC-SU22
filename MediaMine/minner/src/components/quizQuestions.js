const quizQuestions = {
    movies: {
        quickpicks: [
            {
                question: "How are you feeling today?", answers: [{
                    answer: "Happy", weight: ["Romance", "Comedy", "Animation"
                    ]
                }, { answer: "Chill", weight: ["Superhero", "Sci-Fi", "Fantasy"] }, { answer: "Sad", weight: ["Drama", "Mystery"] }, { answer: "Bored", weight: ["Action", "Thriller", "Horror"] }]
            },
            { question: "What’s the occasion?", answers: [{ answer: "Self", weight: ["Fantasy", "Sci-Fi"] }, { answer: "Date Night", weight: ["Romance", "Horror", "Thriller"] }, { answer: "Friend", weight: ["Action", "Comedy", "Superhero"] }, { answer: "Family", weight: ["Comedy", "Animation", "Drama"] }] },
            { question: "How much time you got?", answers: [{ answer: "An hour or so", weight: [] }, { answer: "Two hours", weight: [] }, { answer: "More than two hours", weight: [] }, { answer: "No preference", weight: [] }] },
            { question: "Maturity rating?", answers: [{ answer: "G", weight: [] }, { answer: "PG", weight: [] }, { answer: "PG-13", weight: [] }, { answer: "R", weight: [] }] },


        ],
        deepdigs: [
            {
                question: "How do you feel about violence on film?", answers: [{
                    answer: "Need it", weight: ["Action", "Horror", "Thriller"
                    ]
                }, { answer: "Like it", weight: ["Superhero", "Sci-Fi", "Fantasy"] }, { answer: "Dislike it", weight: ["Drama", "Mystery", "Comedy"] }, { answer: "Hate it", weight: ["Animation", "Romance"] }]
            },
            { question: "How grounded should the story be?", answers: [{ answer: "Realistic", weight: ["Drama", "Mystery", "Romance"] }, { answer: "Fictional", weight: ["Comedy", "Action", "Thriller", "Horror"] }, { answer: "Fantasy", weight: ["Animation", "Sci-Fi", "Superhero", "Fantasy"] }, { answer: "No preference", weight: [] }] },
            { question: "What emotions are you trying to experience?", answers: [{ answer: "Fear", weight: ["Horror", "Thriller"] }, { answer: "Excitement", weight: ["Action", "Fantasy", "Sci-Fi"] }, { answer: "Love", weight: ["Romance", "Drama"] }, { answer: "Laughter", weight: ["Comedy", "Superhero"] }] },
            { question: "Which best describes your viewing experience?", answers: [{ answer: "In bed", weight: ["Horror", "Thriller"] }, { answer: "In the living room", weight: ["Drama", "Mystery", "Comedy", "Animation"] }, { answer: "At a theater", weight: ["Action", "Superhero", "Fantasy"] }, { answer: "In a car", weight: ["Romance", "Comedy"] }] },
            { question: "Who are you planning to watch this movie with?", answers: [{ answer: "Myself", weight: [] }, { answer: "Romantic partner", weight: ["Romance", "Horror", "Thriller"] }, { answer: "Family", weight: ["Comedy", "Animation", "Drama"] }, { answer: "Friends", weight: ["Action", "Superhero", "Comedy"] }] },
            { question: "What kind of setting should the movie be?", answers: [{ answer: "Modern Day", weight: ["Romance", "Comedy", "Action"] }, { answer: "Gritty past", weight: ["Mystery", "Crime", "Thriller"] }, { answer: "Fantastic future", weight: ["Sci-Fi"] }, { answer: "Another world", weight: ["Fantasy", "Superhero"] }] },
            { question: "How do you feel about magic in movies?", answers: [{ answer: "Love it", weight: ["Fantasy", "Horror"] }, { answer: "Hate it", weight: [] }, { answer: "Prefer hi-tech", weight: ["Sci-Fi"] }, { answer: "No preference", weight: [] }] },
            { question: "Pick your favorite director:", answers: [{ answer: "Alfred Hitchcock", weight: ["Thriller", "Horror", "Mystery"] }, { answer: "Steven Spielberg", weight: ["Action", "Sci-Fi"] }, { answer: "Quentin Tarantino", weight: ["Action", "Thriller"] }, { answer: "Christopher Nolan", weight: ["Drama", "Action", "Sci-Fi"] }] },
            { question: "Are you looking for something serious or silly?", answers: [{ answer: "Serious", weight: ["Drama", "Mystery", "Crime"] }, { answer: "Silly", weight: ["Comedy", "Superhero", "Animation"] }] },
            { question: "Are you a Marvel or DC fan?", answers: [{ answer: "Marvel", weight: ["Superhero", "Comedy", "Action"] }, { answer: "DC", weight: ["Superhero", "Drama", "Thriller"] }, { answer: "Both", weight: ["Superhero", "Drama", "Comedy", "Thriller", "Action"] }, { answer: "Neither", weight: [] }] },
            { question: "Pick your favorite actor:", answers: [{ answer: "Keanu Reeves", weight: ["Action", "Sci-Fi"] }, { answer: "Robert Downey Jr.", weight: ["Superhero", "Action"] }, { answer: "Aubrey Plaza", weight: ["Comedy"] }, { answer: "Tom Hanks", weight: ["Comedy", "Romance"] }] },
            { question: "What time of day are you planning to watch this movie?", answers: [{ answer: "Afternoon (12pm)", weight: ["Comedy", "Action", "Animation"] }, { answer: "After work (5pm)", weight: ["Superhero", "Drama"] }, { answer: "Night (7pm)", weight: ["Romance", "Comedy", "Action", "Fantasy", "Sci-Fi"] }, { answer: "Midnight (12am)", weight: ["Horror", "Thriller", "Drama"] }] },
            { question: "What is your preferred medium?", answers: [{ answer: "Live-Action", weight: [] }, { answer: "Animation", weight: ["Animation"] }, { answer: "Combination", weight: ["Animation"] }, { answer: "No preference", weight: [] }] },
            { question: "How do you feel about happy endings in movies?", answers: [{ answer: "Love them", weight: ["Romance", "Comedy"] }, { answer: "Like them", weight: ["Action", "Superhero"] }, { answer: "Dislike them", weight: ["Drama", "Mystery", "Crime"] }, { answer: "Hate them", weight: ["Horror", "Thriller"] }] },
            { question: "If a main character died in a film, how would you feel?", answers: [{ answer: "Angry", weight: ["Superhero", "Action"] }, { answer: "Sad", weight: ["Comedy", "Romance"] }, { answer: "Excited", weight: ["Drama", "Crime", "Comedy"] }, { answer: "Scared", weight: ["Horror", "Thriller"] }] },
            { question: "Do you like twist endings?", answers: [{ answer: "Yes", weight: ["Drama", "Crime", "Romance", "Thriller"] }, { answer: "No", weight: ["Horror", "Superhero", "Action", "Comedy"] }, { answer: "No preference", weight: [] }] },
        ]
    },
    music: {
        /*
        quickpicks: [
            {
                question: "How are you feeling today?", answers: [{
                    answer: "Happy", weight: ["valence", "popularity", "energy", "liveness"
                    ]
                }, { answer: "Neutral", weight: ["popularity"] }, { answer: "Sad", weight: ["valence", "energy", "liveness"] }, { answer: "Chill", weight: ["acousticness", "instrumentalness", "tempo"] }]
            },
            { question: "What’s the occasion?", answers: [{ answer: "Party", weight: ["danceability", "energy", "liveness", "loudness", "popularity"] }, { answer: "Relaxing", weight: ["instrumentalness", "acousticness", "speechiness", "tempo"] }, { answer: "Gym", weight: ["energy", "liveness", "loudness", "instrumentalness", "tempo"] }, { answer: "Study", weight: ["acousticness", "instrumentalness", "speechiness"] }] },
            { question: "Where would you listen?", answers: [{ answer: "Park", weight: ["instrumentalness", "acousticness", "speechiness", "tempo"] }, { answer: "Bedroom", weight: ["tempo", "acousticness", "loudness"] }, { answer: "Living Room", weight: ["popularity", "loudness", "valence"] }, { answer: "Library", weight: ["acousticness", "instrumentalness", "speechiness"] }] },
            { question: "Is explicitly important to you?", answers: [{ answer: "yes", weight: [] }, { answer: "No", weight: [] }] },

        ],
        deepdigs: [
            {
                question: "How are you feeling today?", answers: [{
                    answer: "Happy", weight: ["valence", "popularity", "energy", "liveness"
                    ]
                }, { answer: "Neutral", weight: ["popularity"] }, { answer: "Sad", weight: ["valence", "energy", "liveness"] }, { answer: "Chill", weight: ["acousticness", "instrumentalness", "tempo"] }]
            },
            { question: "What’s the occasion?", answers: [{ answer: "Party", weight: ["danceability", "energy", "liveness", "loudness", "popularity"] }, { answer: "Relaxing", weight: ["instrumentalness", "acousticness", "speechiness", "tempo"] }, { answer: "Gym", weight: ["energy", "liveness", "loudness", "instrumentalness", "tempo"] }, { answer: "Study", weight: ["acousticness", "instrumentalness", "speechiness"] }] },
            { question: "Where would you listen?", answers: [{ answer: "Park", weight: ["instrumentalness", "acousticness", "speechiness", "tempo"] }, { answer: "Bedroom", weight: ["tempo", "acousticness", "loudness"] }, { answer: "Living Room", weight: ["popularity", "loudness", "valence"] }, { answer: "Library", weight: ["acousticness", "instrumentalness", "speechiness"] }] },
            { question: "Is explicitly important to you?", answers: [{ answer: "yes", weight: [] }, { answer: "No", weight: [] }] },

        ]
        */
        

        


    },
    books: {
        quickpicks: [
            {
                question: "How are you feeling today?", answers: [{ answer: "Happy", weight: ["Romance", "Comics", "Graphic Novels", "Young Adult"] }, { answer: "Chill", weight: ["Classics", "History", "Science", "Nonfiction"] }, { answer: "Sad", weight: ["Mystery", "Young Adult", "Poetry", "Psychology"] }, {
                    answer: "Bored", weight: ["Fantasy", "Fiction", "Historical Fiction", "Horror", "Science"
                        , "Thriller"]
                }]
            },
            { question: "Where do you want to read?", answers: [{ answer: "Cafe", weight: ["Romance", "Mystery", "Young Adult"] }, { answer: "Home", weight: ["Fantasy", "Comics", "Fiction", "Graphic Novels", "Historical", "Science Fiction", "Horror", "Thriller"] }, { answer: "Park", weight: ["Romance", "Poetry"] }, { answer: "Library", weight: ["Classics", "History", "Nonfiction", "Science"] }] },
            { question: "How do you want this book to make you feel?", answers: [{ answer: "Smarter", weight: ["Classics", "History", "Psychology", "Science"] }, { answer: "Adventerous", weight: ["Fantasy", "Fiction", "Science Fiction"] }, { answer: "Scared", weight: ["Mystery", "Horror", "Thriller"] }, { answer: "Laughter", weight: ["Comics", "Graphic Novels"] }] },
            { question: "Which do you prefer?", answers: [{ answer: "Series", weight: [] }, { answer: "Standalones", weight: [] }] },
            { question: "Which age category would you prefer?", answers: [{ answer: "Adult", weight: [] }, { answer: "Child", weight: [] }, { answer: "Young Adult", weight: [] }, { answer: "Doesn’t Matter", weight: [] }] },

        ],
        deepdigs: [
            { question: "Where do you want to go?", answers: [{ answer: "Into the past", weight: ["History", "Classics", "Historical Fiction"] }, { answer: "Another world", weight: ["Fantasy", "Comics", "Graphic Novels"] }, { answer: "Into the future", weight: ["Science Fiction"] }, { answer: "Alternate reality", weight: ["Mystery", "Thriller"]}]},
            { question: "Do you want pictures or images in the book?", answers: [{ answer: "Yes", weight: ["Comics", "Graphic Novels"] }, { answer: "No", weight: [] }] },
            { question: "Pick a favorite author:", answers: [{ answer: "George Orwell", weight: ["Classics", "History", "Psychology", "Thriller"] }, { answer: "Neil Gaiman", weight: ["Fantasy", "Fiction", "Science Fiction"] }, { answer: "George R.R. Martin", weight: ["Mystery", "Fantasy", "Fiction"] }, { answer: "J.K. Rowling", weight: ["Fiction", "Fantasy"] }] },
            { question: "Which do you prefer?", answers: [{ answer: "Realism", weight: ["Nonfiction", "Science", "History", "Romance"] }, { answer: "Fantasy", weight: ["Fantasy", "Fiction", "Science Fiction"] }] },
            { question: "Which story sounds more interesting to you?", answers: [{ answer: "Desperately trying to escape and survive an unknown threat", weight: ["Thriller", "Horror"] }, { answer: "Discovering and exploring the beauty of love", weight: ["Poetry", "Young Adult", "Romance", "Psychology"] }, { answer: "Adventuring brand new worlds full of magic and wonder", weight: ["Fantasy", "Fiction", "Science Fiction"] }, { answer: "Learning more about and understanding the complexities of reality", weight: ["Science", "History", "Classics"] }] },
            { question: "What should be in a book?", answers: [{ answer: "Magical creatures", weight: ["Fantasy", "Fiction"] }, { answer: "Futuristic technology", weight: ["Science", "Science Fiction"] }, { answer: "Romantic relationships", weight: ["Young Adult", "Poetry", "Romance"] }, { answer: "Real stories", weight: ["History", "Nonfiction"] }] },
            { question: "How much realism should a book have?", answers: [{ answer: "Purely nonfiction", weight: ["Nonfiction", "History", "Science"] }, { answer: "Inspired by true events", weight: ["Mystery", "Romance", "Psychology", "Poetry"] }, { answer: "Some realistic elements", weight: ["Classics", "Comics", "Graphic Novels", "Historical Fiction", "Science Fiction"] }, { answer: "Purely fiction", weight: ["Fantasy", "Fiction", "Horror"] }] },
            { question: "Do you want to read about superhuman abilities/powers?", answers: [{ answer: "Yes", weight: ["Fantasy", "Comics", "Fiction", "Science Fiction", "Young Adult"] }, { answer: "No", weight: ["Nonfiction", "History", "Science", "Poetry"] }, { answer: "Don't care", weight: [] }] },
            { question: "What kind of endings do you prefer?", answers: [{ answer: "Happy", weight: ["Romance", "Comics", "Graphic Novels", "Fantasy", "Young Adult"] }, { answer: "Tragic", weight: ["Horror", "Classics", "History"] }, { answer: "Twist", weight: ["Science Fiction", "Thriller", "Psychology", "Mystery"] }, { answer: "Don't spoil me!", weight: [] }] },
            { question: "Which do you prefer?", answers: [{ answer: "Old books", weight: ["History", "Nonfiction", "Science"] }, { answer: "Currently popular", weight: ["Young Adult", "Comics", "Graphic Novels", "Science Fiction"] }, { answer: "New books", weight: ["Young Adult", "Science Fiction", "Fantasy"] }, { answer: "No preference", weight: [] }] },
        ]
    }
}

export default quizQuestions;