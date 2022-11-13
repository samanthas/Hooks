import React from "react";
import { MixtapeProvider } from "./MixtapeContext"
import { SongList } from "./SongList"
import { Controls } from "./Controls"

export const MixtapeApp = () => {
  return (
    <div className="app">
      <h1 className="heading">My 🔥 Mixtape</h1>
      <MixtapeProvider songs={songs}>
        <Controls />
        <SongList />
      </MixtapeProvider>
    </div>
  );
};

const songs = [
  {
    artist: "Tame Impala",
    genre: "Alt",
    name: "Is It True",
    year: 2020
  },
  {
    artist: "Roosevelt",
    genre: "Dance",
    name: "Moving On",
    year: 2016
  },
  {
    artist: "Iron Maiden",
    genre: "Rock",
    name: "Aces High",
    year: 1984
  },
  {
    artist: "Diplo",
    genre: "Dance",
    name: "Turn Back Time",
    year: 2021
  },
  {
    artist: "Sir Sly",
    genre: "Alt",
    name: "&run",
    year: 2017
  },
  {
    artist: "Nine Inch Nails",
    genre: "Alt",
    name: "Closer",
    year: 1994
  },
  {
    artist: "Oliver Tree",
    genre: "Alt",
    name: "Miss You",
    year: 2022
  },
  {
    artist: "Atreyu",
    genre: "Rock",
    name: "Untouchable",
    year: 2021
  },
  {
    artist: "Halestorm",
    genre: "Rock",
    name: "Uncomfortable",
    year: 2018
  },
  {
    artist: "Studio Killers",
    genre: "Dance",
    name: "Jenny (I Wanna Ruin Our Friendship)",
    year: 2013
  },
  {
    artist: "Clubz",
    genre: "Alt",
    name: "Popscuro",
    year: 2018
  },
  {
    artist: "Jungle",
    genre: "Alt",
    name: "Cherry",
    year: 2018
  },
  {
    artist: "MGMT",
    genre: "Alt",
    name: "Little Dark Age",
    year: 2018
  },
  {
    artist: "Phoenix",
    genre: "Alt",
    name: "Alpha Zulu",
    year: 2022
  },  
  {
    artist: "Elderbrook",
    genre: "Dance",
    name: "Inner Light",
    year: 2021
  },
  {
    artist: "Sofi Tukker",
    genre: "Alt",
    name: "Original Sin",
    year: 2022
  },
  {
    artist: "Poolside",
    genre: "Alt",
    name: "Harvest Moon",
    year: 2012
  },
  {
    artist: "The Weeknd",
    genre: "Pop",
    name: "Save Your Tears",
    year: 2021
  },
  {
    artist: "Cannons",
    genre: "Alt",
    name: "Fire for You",
    year: 2019
  },
  {
    artist: "Hole",
    genre: "Rock",
    name: "Violet",
    year: 1994
  },
  {
    artist: "Sonic Youth",
    genre: "Rock",
    name: "Incinerate",
    year: 2006
  },
  {
    artist: "Spoon",
    genre: "Alt",
    name: "Do You",
    year: 2014
  },
  {
    artist: "Daft Punk",
    genre: "Dance",
    name: "Instant Crush",
    year: 2012
  },
  {
    artist: "Dua Lipa",
    genre: "Pop",
    name: "Love Again",
    year: 2020
  },
  {
    artist: "The Strokes",
    genre: "Rock",
    name: "Reptilia",
    year: 2003
  },
  {
    artist: "The XX",
    genre: "Alt",
    name: "Islands",
    year: 2009
  },
  {
    artist: "Against Me!",
    genre: "Rock",
    name: "I was a Teenage Anarchist",
    year: 2010
  },
  {
    artist: "Living Days",
    genre: "Alt",
    name: "Thrill Anybody?",
    year: 2014
  },
  {
    artist: "Wilco",
    genre: "Alt",
    name: "You and I",
    year: 2009
  },
  {
    artist: "Foreigner",
    genre: "Rock",
    name: "Urgent",
    year: 1981
  },
  {
    artist: "Thin Lizzy",
    genre: "Rock",
    name: "The Boys Are Back In Town",
    year: 1976
  },
  {
    artist: "Twisted Sister",
    genre: "Rock",
    name: "Streets",
    year: 1985
  },  
  {
    artist: "Scorpions",
    genre: "Rock",
    name: "Big City Nights",
    year: 1984
  },  
  {
    artist: "Dio",
    genre: "Rock",
    name: "Hollywood Black",
    year: 1993
  },  
  {
    artist: "KISS",
    genre: "Rock",
    name: "Love Gun",
    year: 1977
  },
  {
    artist: "Eagles",
    genre: "Rock",
    name: "One of These Nights",
    year: 1975
  },
  {
    artist: "Cream",
    genre: "Rock",
    name: "White Room",
    year: 1968
  },
  {
    artist: "AC/DC",
    genre: "Rock",
    name: "Little Lover",
    year: 1975
  },
  {
    artist: "Silverstein",
    genre: "Rock",
    name: "Vices",
    year: 2009
  },
  {
    artist: "Avenged Sevenfold",
    genre: "Rock",
    name: "To End The Rapture",
    year: 2001
  },
  {
    artist: "My Chemical Romance",
    genre: "Rock",
    name: "Summertime",
    year: 2010
  },
  {
    artist: "Green Day",
    genre: "Rock",
    name: "She",
    year: 1994
  },
  {
    artist: "System of a Down",
    genre: "Rock",
    name: "Question!",
    year: 2005
  },
  {
    artist: "Stone Temple Pilots",
    genre: "Rock",
    name: "Plush",
    year: 1992
  },
  {
    artist: "Red Hot Chili Peppers",
    genre: "Rock",
    name: "Scar Tissue",
    year: 1999
  },
  {
    artist: "Audioslave",
    genre: "Rock",
    name: "Out of Exile",
    year: 2005
  },
  {
    artist: "Fleetwood Mac",
    genre: "Rock",
    name: "Rhiannon",
    year: 1975
  },
  {
    artist: "The Rolling Stones",
    genre: "Rock",
    name: "Gimme Shelter",
    year: 1969
  },
  {
    artist: "Led Zeppelin",
    genre: "Rock",
    name: "When the Levee Breaks",
    year: 1971
  },
  {
    artist: "Empire of the Sun",
    genre: "Alt",
    name: "DNA",
    year: 2013
  },
];

