import React from "react";
import Header from "../components/Header";
import ListShelfs from "../components/ListShelfs";
import AddBookButton from "../components/AddBookButton";

function Home() {
  const shelfs = ["currentlyReading", "wantToRead", "read"];
  return (
    <div className="list-books">
      <Header />
      <ListShelfs shelfs={shelfs} />
      <AddBookButton />
    </div>
  );
}

export default Home;
