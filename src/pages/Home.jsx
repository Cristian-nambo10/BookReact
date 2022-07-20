import React from "react";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Featured from "../components/Featured";
import Explore from "../components/Explore";
import Discounted from "../components/Discounted";

function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}

export default Home;
