import React, { useState } from 'react';
import Pick from "./Pick";
import endgameImage from '../assets/endgame.jpg';
import godsplanImage from '../assets/gods_plan.jpg';
import blindImage from '../assets/blind.jpg';
import divergentImage from '../assets/divergent.jpg';
import ff7Image from '../assets/ff7.jpg';
import godfatherImage from '../assets/godfather.jpg';
import gumpImage from '../assets/gump.jpg';
import harryImage from '../assets/harry.jpg';
import hungerImage from '../assets/hunger.jpg';
import orwellImage from '../assets/literally_1984.jpg';
import pulpImage from '../assets/pulp.jpg';
import swiftImage from '../assets/swift.jpg';
import garfieldImage from '../assets/garfield.jpg';
import adeleImage from '../assets/adele.jpg';
import piImage from '../assets/pi.jpg';
import matrixImage from '../assets/matrix.jpg';
import biggerImage from '../assets/picture.jpg';

const InitialMovies = [
    {
        title: "Minions: The rise of Gru",
        bold: "1 HR 27 MIN | PG",
        date: "Released jul, 1, 2022",
        image: endgameImage
    },
    {
        title: "Minions: The rise of Gru",
        bold: "1 HR 27 MIN | PG",
        date: "Released jul, 1, 2022",
        image: endgameImage
    },
    {
        title: "Minions: The rise of Gru",
        bold: "1 HR 27 MIN | PG",
        date: "Released jul, 1, 2022",
        image: endgameImage
    }
]


function randomizer() {
    var popularAdded = 0
    var alreadyAdded = []
    while (popularAdded !== 3) {
        var index = Math.floor(Math.random() * 17)
        if (alreadyAdded.length === 0 || alreadyAdded.indexOf(index) === -1) {
            //console.log("IN HERE")
            switch (index) {
                case 0:
                    InitialMovies[popularAdded]['title'] = "Blinding Lights"
                    InitialMovies[popularAdded]['bold'] = "The Weeknd"
                    InitialMovies[popularAdded]['date'] = "2019"
                    InitialMovies[popularAdded]['image'] = blindImage
                    alreadyAdded.push(index)
                    break
                case 1:
                    InitialMovies[popularAdded]['title'] = "Divergent"
                    InitialMovies[popularAdded]['bold'] = "Veronica Roth"
                    InitialMovies[popularAdded]['date'] = "2014"
                    InitialMovies[popularAdded]['image'] = divergentImage
                    alreadyAdded.push(index)
                    break
                case 2:
                    InitialMovies[popularAdded]['title'] = "Avengers: Endgame"
                    InitialMovies[popularAdded]['bold'] = "3 HR | PG-13"
                    InitialMovies[popularAdded]['date'] = "2019"
                    InitialMovies[popularAdded]['image'] = endgameImage
                    alreadyAdded.push(index)
                    break
                case 3:
                    InitialMovies[popularAdded]['title'] = "See You Again"
                    InitialMovies[popularAdded]['bold'] = "Wiz Khalifa ft. Charlie Puth"
                    InitialMovies[popularAdded]['date'] = "2015"
                    InitialMovies[popularAdded]['image'] = ff7Image
                    alreadyAdded.push(index)
                    break
                case 4:
                    InitialMovies[popularAdded]['title'] = "The Godfather"
                    InitialMovies[popularAdded]['bold'] = "2 HR 55 MIN | R"
                    InitialMovies[popularAdded]['date'] = "1972"
                    InitialMovies[popularAdded]['image'] = godfatherImage
                    alreadyAdded.push(index)
                    break
                case 5:
                    InitialMovies[popularAdded]['title'] = "God's Plan"
                    InitialMovies[popularAdded]['bold'] = "Drake"
                    InitialMovies[popularAdded]['date'] = "2018"
                    InitialMovies[popularAdded]['image'] = godsplanImage
                    alreadyAdded.push(index)
                    break
                case 6:
                    InitialMovies[popularAdded]['title'] = "Forrest Gump"
                    InitialMovies[popularAdded]['bold'] = "2 HR 22 MIN | PG-13"
                    InitialMovies[popularAdded]['date'] = "1994"
                    InitialMovies[popularAdded]['image'] = gumpImage
                    alreadyAdded.push(index)
                    break
                case 7:
                    InitialMovies[popularAdded]['title'] = "Harry Potter and the Deathly Hollows"
                    InitialMovies[popularAdded]['bold'] = "J.K. Rowling"
                    InitialMovies[popularAdded]['date'] = "2007"
                    InitialMovies[popularAdded]['image'] = harryImage
                    alreadyAdded.push(index)
                    break
                case 8:
                    InitialMovies[popularAdded]['title'] = "The Hunger Games"
                    InitialMovies[popularAdded]['bold'] = "Suzanne Collins"
                    InitialMovies[popularAdded]['date'] = "2008"
                    InitialMovies[popularAdded]['image'] = hungerImage
                    alreadyAdded.push(index)
                    break
                case 9:
                    InitialMovies[popularAdded]['title'] = "1984"
                    InitialMovies[popularAdded]['bold'] = "George Orwell"
                    InitialMovies[popularAdded]['date'] = "1949"
                    InitialMovies[popularAdded]['image'] = orwellImage
                    alreadyAdded.push(index)
                    break
                case 10:
                    InitialMovies[popularAdded]['title'] = "Pulp Fiction"
                    InitialMovies[popularAdded]['bold'] = "2 HR 48 MIN | R"
                    InitialMovies[popularAdded]['date'] = "1994"
                    InitialMovies[popularAdded]['image'] = pulpImage
                    alreadyAdded.push(index)
                    break
                case 11:
                    InitialMovies[popularAdded]['title'] = "Blank Space"
                    InitialMovies[popularAdded]['bold'] = "Taylor Swift"
                    InitialMovies[popularAdded]['date'] = "2014"
                    InitialMovies[popularAdded]['image'] = swiftImage
                    alreadyAdded.push(index)
                    break
                case 12:
                    InitialMovies[popularAdded]['title'] = "Someone Like You"
                    InitialMovies[popularAdded]['bold'] = "Adele"
                    InitialMovies[popularAdded]['date'] = "2011"
                    InitialMovies[popularAdded]['image'] = adeleImage
                    alreadyAdded.push(index)
                    break
                case 13:
                    InitialMovies[popularAdded]['title'] = "The Matrix"
                    InitialMovies[popularAdded]['bold'] = "2 HR 16 MIN | R"
                    InitialMovies[popularAdded]['date'] = "1999"
                    InitialMovies[popularAdded]['image'] = matrixImage
                    alreadyAdded.push(index)
                    break
                case 14:
                    InitialMovies[popularAdded]['title'] = "Life of Pi"
                    InitialMovies[popularAdded]['bold'] = "2 HR 7 MIN | PG"
                    InitialMovies[popularAdded]['date'] = "2012"
                    InitialMovies[popularAdded]['image'] = piImage
                    alreadyAdded.push(index)
                    break
                case 15:
                    InitialMovies[popularAdded]['title'] = "The Bigger Picture"
                    InitialMovies[popularAdded]['bold'] = "Lil Baby"
                    InitialMovies[popularAdded]['date'] = "2020"
                    InitialMovies[popularAdded]['image'] = biggerImage
                    alreadyAdded.push(index)
                    break
                case 16:
                    InitialMovies[popularAdded]['title'] = "Garfield: The Movie"
                    InitialMovies[popularAdded]['bold'] = "1 HR 20 MIN | PG"
                    InitialMovies[popularAdded]['date'] = "2004"
                    InitialMovies[popularAdded]['image'] = garfieldImage
                    alreadyAdded.push(index)
                    break
                default:
                    break
            }
            popularAdded+=1
        }
        else {
            continue
        }
    }
}


/*
function randomizer() {
    var popularAdded = 0
    var alreadyAdded = []
    while (popularAdded !== 3) {
        if (alreadyAdded.length === 0 || alreadyAdded.indexOf(index) !== -1) {
            var index = Math.floor(Math.random() * 12)
            InitialMovies[popularAdded]['title'] = "Blank Space"
            InitialMovies[popularAdded]['bold'] = "Taylor Swift"
            InitialMovies[popularAdded]['date'] = index
            InitialMovies[popularAdded]['image'] = swiftImage
            alreadyAdded.push(index)
            popularAdded += 1
        }
        
    }
}
*/

function PopularPicks() {
    const [picks, setPicks] = useState(InitialMovies);
    randomizer()
    return (
        <div className="popular-picks mt-2">
            <div className="row">
                <div className="col-10">
                    <p style={{ color: "var( --sea-green-crayola)" }}>Popular Picks</p>
                </div>
            </div>
            <div className="picks-holder">
                {picks.map((pick, key) => (
                    <Pick title={pick.title} bold={pick.bold} date={pick.date} image={pick.image} key={key} />
                ))}
            </div>
        </div>
    );
                }

export default PopularPicks;