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
    genre: "alternative",
    name: "Is It True",
    year: 2020
  },
  {
    artist: "Roosevelt",
    genre: "electronic",
    name: "Moving On",
    year: 2016
  },
  {
    artist: "The Replacements",
    genre: "alternative",
    name: "Can't Hardly Wait",
    year: 1987
  },
  {
    artist: "Diplo",
    genre: "electronic",
    name: "Turn Back Time",
    year: 2021
  },
  {
    artist: "Sir Sly",
    genre: "alternative",
    name: "&run",
    year: 2017
  },
  {
    artist: "Nine Inch Nails",
    genre: "alternative",
    name: "Closer",
    year: 1994
  },
  {
    artist: "Oliver Tree",
    genre: "alternative",
    name: "Miss You",
    year: 2022
  },
  {
    artist: "Atreyu",
    genre: "rock",
    name: "Untouchable",
    year: 2021
  },
  {
    artist: "Halestorm",
    genre: "rock",
    name: "Uncomfortable",
    year: 2018
  },
  {
    artist: "Studio Killers",
    genre: "electronic",
    name: "Jenny (I Wanna Ruin Our Friendship)",
    year: 2013
  },
  {
    artist: "Clubz",
    genre: "alternative",
    name: "Popscuro",
    year: 2018
  },
  {
    artist: "Jungle",
    genre: "alternative",
    name: "Cherry",
    year: 2018
  },
  {
    artist: "MGMT",
    genre: "alternative",
    name: "Little Dark Age",
    year: 2018
  },
  {
    artist: "Phoenix",
    genre: "alternative",
    name: "Alpha Zulu",
    year: 2022
  },  
  {
    artist: "Elderbrook",
    genre: "electronic",
    name: "Inner Light",
    year: 2021
  },
  {
    artist: "Sofi Tukker",
    genre: "alternative",
    name: "Original Sin",
    year: 2022
  },
  {
    artist: "Poolside",
    genre: "alterntaive",
    name: "Harvest Moon",
    year: 2012
  },
  {
    artist: "The Weeknd",
    genre: "pop",
    name: "Save Your Tears",
    year: 2021
  },
  {
    artist: "Cannons",
    genre: "alternative",
    name: "Fire for You",
    year: 2019
  },
  {
    artist: "Hole",
    genre: "rock",
    name: "Violet",
    year: 1994
  },
  {
    artist: "Sonic Youth",
    genre: "rock",
    name: "Incinerate",
    year: 2006
  },
  {
    artist: "Spoon",
    genre: "alternative",
    name: "Do You",
    year: 2014
  },
  {
    artist: "Daft Punk",
    genre: "Electronic",
    name: "Instant Crush",
    year: 2012
  },
  {
    artist: "Dua Lipa",
    genre: "pop",
    name: "Love Again",
    year: 2020
  },
  {
    artist: "The Strokes",
    genre: "rock",
    name: "Reptilia",
    year: 2003
  },
  {
    artist: "The XX",
    genre: "alternative",
    name: "Islands",
    year: 2009
  },
  {
    artist: "Against Me!",
    genre: "rock",
    name: "I was a Teenage Anarchist",
    year: 2010
  },
  {
    artist: "Living Days",
    genre: "alternative",
    name: "Thrill Anybody?",
    year: 2014
  }
];

