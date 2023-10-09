import React, { useState } from "react";
import Auth from "./components/Auth";
import { useStateValue } from "./StateProvider";
import Dashboard from "./components/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieScreen from "./components/Dashboard/MovieScreen";
import Header from "./components/Header";
import ProfilePopOver from "./components/Dashboard/ProfilePopOver";
import CreateMovie from "./components/Dashboard/CreateMovie";
import { SlClose } from "react-icons/sl";
import Toast from "./common/Toast";

const App = () => {
  const [{ user, toaster }, dispatch] = useStateValue();
  const [profilePopover, setProfilePopover] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();

  return (
    <div className="movies-project" style={{ position: "relative" }}>
      {/* Header */}
      {location.pathname !== "/auth" && (
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

      {toaster && <Toast />}

      <Routes>
        <Route path="/" element={<Dashboard query={query} />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/movie/:slug" element={<MovieScreen />}></Route>
        <Route path="/movie/update/:slug" element={<CreateMovie />}></Route>
        <Route path="/movie/create" element={<CreateMovie />}></Route>
      </Routes>
    </div>
  );
};

export default App;
