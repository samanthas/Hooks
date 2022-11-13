import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext"

export const SongList = () => {
  const {genre, sortOrder, songs} = useContext(MixtapeContext);

  const filterSongs = (genre, songs) => {
    let result = songs;
    if(genre !== "all") {
      result = songs.filter(song => song.genre === genre)
      console.log(genre)
      console.log(result)
    }
    return result;
  }

  const sortSongs = (songs, sort) => {
    if (sort === "ascending") {
      songs.sort((a,b) => a.year - b.year)
    } else {
      songs.sort((a,b) => b.year - a.year)
    }
    return songs;
  }

  let filteredAndSortedSongs = sortSongs(filterSongs(genre,songs), sortOrder);
  return (
    <div>
      <h2>{genre}</h2>
      {filteredAndSortedSongs.map(song => 
        <Song key={song.name} artist={song.artist} genre={song.genre} name={song.name} year={song.year} />
      )}
    </div>
  );
};
