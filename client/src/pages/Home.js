import React from "react";
import Nav from "../components/Nav";
import CreatePost from "./CreatePost";
import ViewPost from "./ViewPost";

function Home() {
  return (
    <div>
      <Nav />
      <CreatePost />
      <ViewPost />
    </div>
  );
}

export default Home;
