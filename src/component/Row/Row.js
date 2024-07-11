
import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import "./Row.css";

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [fetchUrl]); 

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title||movie?.name ||movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Error", error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="rowPosters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }}
        />
      )}
    </div>
  );
};

export default Row;
