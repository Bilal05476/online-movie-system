import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import Banner from "./Banner";
import TopMovie from "./Movies/TopMovie";
import RecentMovie from "./Movies/RecentMovie.jsx";
import SearchMovie from "./Movies/SearchMovie";
import { fetchmovies } from "../endPoint";
import AllMovie from "./Movies/AllMovie";
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
      {user?.watchedMovies.length > 0 && (
        <RecentMovie movies={user?.watchedMovies} />
      )}
      {/* Top movies by rating */}
      <TopMovie movies={movies} />
      {/* All movies by rating */}
      <AllMovie movies={movies} />
    </div>
  );
};

export default Dashboard;
