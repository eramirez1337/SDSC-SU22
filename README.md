# Media Mine by Team Lasagna

Media Mine, where you come to dig for your next obsession :^)
(I'm diggin' it)

## Getting Started

Welcome! This web app was built with the intention of mass distribution via the SDSC servers,
but in the case that that's no longer available, start by cloning this repo to your
local machine.

## Description

Media Mine is a multi-media quiz that recommends movies, books, and songs. It utilizes the most
recent datasets from IMDb, Spotify, and Google Books. The purpose of this app is to simplify
the problem of "I'm bored and I don't know what to watch/read/listen to, and I don't want to
go to multiple quiz platforms to do so." There is no need to sign up, there are quick versions
of the quizzes as well as more in-depth quizzes, and well thought-out questions that aren't
just binary "Do you like xyz genre?" and actually make you think about your own preferences.

(Disclaimer: due to algorithmic differences, the music quizzes are what we consider "somewhat
unstable." Should any issues arise, simply refresh the web page.)

## Starting the App

Once you have downloaded the files, open them up in your preferred code editor. From there,
open two instances of PowerShell/terminal. On one terminal, make "minner" the current
directory, and "media-mine-database" on the other. In the database terminal, run the following
command:
```
python manage.py runserver
```
It is very likely that you will run into "xyz module not found," so run the following to get started:
```
pip install -r requirements.txt
```
Some packages fall outside of the requirements.txt file, so for each instance  of module not found, run:
```
pip install (package name)
```
When all packages are installed, you should see an output that ends with "Quit the server with
CTRL-BREAK."

For the other terminal, you will need to install npm on your computer (for that, follow an online
tutorial). Simply run the following command and the app should start in your web browser:
```
npm start
```

## Individual Contributions

Each of the five developers contributed to the development of the project in a significant way,
and deserve to be outlined

Eduardo (Product Owner): Developed backend algorithms for movie and book quizzes, randomizer
systems for home page popular titles.

Garfield (Backend Dev): Developed backend and frontend algorithms for music quizzes.

Hanley (Frontend Dev): Designed overall product, created custom image assets

Sam (Full Stack Dev): Developed frontend algorithms for movies and books, integrated
animations for buttons, connected frontend components to backend and vice versa.

Thomas (Frontend Dev): Devoloped and designed frontend pages and navigation system,
created animations for buttons and other parts.

## Acknowledgment

This project was created using the following technologies: Django Python, React JS, SpotiPy, Google Books API,
Cinemagoer (formerly IMDbPy), and other code snippets from StackOverflow.

# SDSC Summer Internship Program 2022
