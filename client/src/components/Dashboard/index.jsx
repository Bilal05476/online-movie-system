import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import Header from "./Header";
import ProfilePopOver from "./ProfilePopOver";
import Banner from "./Banner";
import TopMovie from "./TopMovie";
import RecentMovie from "./RecentMovie.jsx";
import SearchMovie from "./SearchMovie";
const Dashboard = () => {
  const [{ user }] = useStateValue();
  const [profilePopover, setProfilePopover] = useState(false);

  return (
    <div className="container-fluid dashbaord" style={{ position: "relative" }}>
      {/* Header */}
      <Header
        user={user}
        profilePopover={profilePopover}
        setProfilePopover={setProfilePopover}
      />
      {profilePopover && <ProfilePopOver />}
      {/* Banner */}
      <Banner />
      <SearchMovie />
      {/* Recently watched if user have past history */}
      <RecentMovie />
      {/* Top movie by rating */}
      <TopMovie />
    </div>
  );
};

export default Dashboard;
