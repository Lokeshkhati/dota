import React from "react";
import Sidebar from "../components/Sidebar";
import HerosList from "./HerosList";

const Home = () => {
  return (
    <main>
      <div className="site-title">
        <h1>Heroes List</h1>
        <p>Filter heroes based on these attributes</p>
      </div>
      <div className="sidebar-content">
        <Sidebar />
        <HerosList />
      </div>
    </main>
  );
};

export default Home;
