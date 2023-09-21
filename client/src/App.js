import React from "react";
import Auth from "./components/Auth";
import { useStateValue } from "./StateProvider";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [{ user }] = useStateValue();
  return <div>{user ? <Dashboard /> : <Auth />}</div>;
};

export default App;
