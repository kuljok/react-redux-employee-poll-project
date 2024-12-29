import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Fragment>
  );
}

export default App;
