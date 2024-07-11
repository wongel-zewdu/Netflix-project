import React from 'react'
import Row from '../Row'
import "./Rows.css"
import requests from '../../../Utils/requests'
const RowsList = () => {
  return (
    <>
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Up Coming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Action " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
      <Row title="Tv Show" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default RowsList