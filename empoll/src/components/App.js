import React, { useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";
import { loadData } from "../actions/shared";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    loadData(props.dispatch);
  });
  return (
    <Fragment>
      {props.authedUser == null ? (
        !props.loading && <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ users }) => ({ loading: users === null });

export default connect(mapStateToProps)(App);
