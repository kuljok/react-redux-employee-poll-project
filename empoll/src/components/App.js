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
          <Route path="/unanswered" element={<Homepage />} />
          <Route path="/answered" element={<Homepage />} />
        </Routes>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ users, authedUser }) => ({
  loading: users === null,
  authedUser: authedUser,
});

export default connect(mapStateToProps)(App);
