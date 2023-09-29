import React, { useState } from "react";
import Auth from "./components/Auth";
import { useStateValue } from "./StateProvider";
import Dashboard from "./components/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieScreen from "./components/Dashboard/MovieScreen";
import Header from "./components/Header";
import ProfilePopOver from "./components/Dashboard/ProfilePopOver";
import CreateMovie from "./components/Dashboard/CreateMovie";

const App = () => {
  const [{ user }] = useStateValue();
  const [profilePopover, setProfilePopover] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();

  console.log(user);

  return (
    <div className="movies-project" style={{ position: "relative" }}>
      {/* Header */}
      {location.pathname !== "/login" && (
        <Header
          user={user}
          profilePopover={profilePopover}
          setProfilePopover={setProfilePopover}
          query={query}
          setQuery={setQuery}
        />
      )}
      {profilePopover && (
        <ProfilePopOver setProfilePopover={setProfilePopover} />
      )}
      <Routes>
        <Route path="/" element={<Dashboard query={query} />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/movie/:slug" element={<MovieScreen />}></Route>
        <Route path="/movie/update/:slug" element={<CreateMovie />}></Route>
        <Route path="/movie/create" element={<CreateMovie />}></Route>
      </Routes>
    </div>
  );
};

export default App;
