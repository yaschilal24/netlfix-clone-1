import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/Reaquest";
   const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(
          requests.fetchNetflixOriginals
        );

        setMovie(
          request.data.results[
            Math.floor(
              Math.random() * request.data.results.length
            )
          ]
        );
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  // Shorten long text
  function truncate(str, n) {
    return str?.length > n
      ? str.substring(0, n - 1) + "..."
      : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">
            ▶ Play
          </button>

          <button className="banner__button">
            + My List
          </button>
        </div>

        <p className="banner__description">
          {truncate(movie?.overview, 150)}
        </p>
      </div>

      {/* Bottom fade effect */}
      <div className="banner--fadeBottom"></div>
    </div>
  );
}

export default Banner;