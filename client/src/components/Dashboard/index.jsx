import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";
import Header from "./Header";
import ProfilePopOver from "./ProfilePopOver";
import Banner from "./Banner";
import TopMovie from "./TopMovie";
import RecentMovie from "./RecentMovie.jsx";
import SearchMovie from "./SearchMovie";
import { fetchmovies } from "../endPoint";
const Dashboard = () => {
  const [{ user, movies, searched }, dispatch] = useStateValue();
  const [profilePopover, setProfilePopover] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchmovies(dispatch);
  }, []);

  return (
    <div className="container-fluid dashbaord" style={{ position: "relative" }}>
      {/* Header */}
      <Header
        user={user}
        profilePopover={profilePopover}
        setProfilePopover={setProfilePopover}
        query={query}
        setQuery={setQuery}
      />
      {profilePopover && <ProfilePopOver />}
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
