import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Gutters from "../Gutters";
import Performance from "../performance";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Tomcat-server-Monotoring</h1>
      <Gutters></Gutters>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
