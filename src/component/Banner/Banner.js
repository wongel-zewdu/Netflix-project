import React, { useEffect, useState } from 'react'
import axios from "../../Utils/axios"
import requests from "../../Utils/requests"
import "./Banner.css"
const Banner = () => {
    const [movies, setMoves]=useState([]);
    useEffect(() => {
      (async () => {
        try {
          const request = await axios.get(requests.fetchTopRated);
          console.log(request);
          setMoves(request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
        } catch (error) {
          console.log("error", error);
        }
      })();
    }, []);
function amount (str,n){
  return str?.length > n ? str.substr(0,n-1)+'...':str;
}
  return (
    <div className="banner">
      <div
        className="bannerBackground"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="title">
          <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
          <div className="buttons">
            <button className="button play">Play</button>
            <button className="button list">My List</button>
          </div>
          <h1 className="description">{amount(movies?.overview, 150)}</h1>
        </div>
        <div className='fadeBottom'/>
      </div>
      
    </div>
  );
}

export default Banner