import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import "./row.css";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY; 
const baseUrl = "https://image.tmdb.org/t/p/original/";

 function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(fetchUrl);

        console.log("TMDB response:", response.data);

        // Always make sure movies is an array
        setMovies(response.data?.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);

        // Keep it as an empty array if API fails
        setMovies([]);
      }
    };

    if (fetchUrl) {
      fetchMovies();
    }
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => {
          if (!movie.poster_path) {
            return null;
          }

          return (
            <img
              key={movie.id}
              className={`row-poster ${
                isLargeRow ? "row-poster-large" : ""
              }`}
              src={`https://image.tmdb.org/t/p/${
                isLargeRow ? "w500" : "w300"
              }${movie.poster_path}`}
              alt={movie.title || movie.name || "Movie"}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Row;