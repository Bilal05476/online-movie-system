import React from "react";
import Auth from "./components/Auth";
import { useStateValue } from "./StateProvider";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import MovieScreen from "./components/Dashboard/MovieScreen";

const App = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="movies-project">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/movie/:slug" element={<MovieScreen />}></Route>
      </Routes>
    </div>
  );
};

export default App;
