import React, { useEffect } from "react";
import Search from "./components/Search";
import Stories from "./components/Stories";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <>
      <h1 className="text-3xl text-green-500 font-bold underline">
        Hello world!
      </h1>
      <Search />
    </>
  );
};

export default App;
