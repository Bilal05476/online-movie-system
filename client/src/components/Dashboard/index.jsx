import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import Banner from "./Banner";
import TopMovie from "./Movies/TopMovie";
// import RecentMovie from "./RecentMovie.jsx";
import SearchMovie from "./Movies/SearchMovie";
import { fetchmovies } from "../endPoint";
const Dashboard = ({ query }) => {
  const [{ user, movies, searched }, dispatch] = useStateValue();

  useEffect(() => {
    fetchmovies(dispatch);
  }, []);

  return (
    <div className="container-fluid dashbaord">
      {/* Banner */}
      <Banner />
      <SearchMovie movies={searched} query={query} />
      {/* Recently watched if user have past history */}
      {/* <RecentMovie /> */}
      {/* Top movie by rating */}
      <TopMovie movies={movies} />
    </div>
  );
};

export default Dashboard;
