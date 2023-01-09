import "./styles.css";
import React, { useState } from "react";

let movieDataBase = {
  "Comedy Romance": [
    {
      name: "Love Actually",
      rating: 7.6,
      description:
        "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England."
    },
    {
      name: "La La Land ",
      rating: 8.0,
      description:
        "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
    },
    {
      name: "Notting Hill ",
      rating: 7.2,
      description:
        "The life of a simple bookshop owner changes when he meets the most famous film star in the world."
    }
  ],

  "Crime Drama": [
    {
      name: "Drishyam",
      rating: 8.2,
      description:
        "Desperate measures are taken by a man who tries to save his family from the dark side of the law, after they commit an unexpected crime."
    },
    {
      name: "Knives Out",
      rating: 7.9,
      description:
        "A detective investigates the death of the patriarch of an eccentric, combative family."
    },
    {
      name: "The Godfather",
      rating: 9.2,
      description:
        "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
    }
  ],

  "Sci-Fiction": [
    {
      name: "Interstellar",
      rating: 8.6,
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      name: "Spider-Man: No Way Home",
      rating: 8.2,
      description:
        "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
    },
    {
      name: "Inception",
      rating: 8.8,
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
    }
  ]
};

let movieGenres = Object.keys(movieDataBase);

export default function App() {
  var [selectedGenre, setGenre] = useState("Comedy Romance");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Movie Recommendation App </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here is a list of my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {movieGenres.map((genre, index) => {
          return (
            <button
              key={index}
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem",
                backgroundColor: "lightcyan"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDataBase[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid white",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bold" }}>
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                <span className="bold-text">Rating</span>: {movie.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                <span className="bold-text">Description</span> :{" "}
                {movie.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
