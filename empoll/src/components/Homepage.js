import { connect } from "react-redux";
import { Fragment } from "react";
import Header from "./Header";

const Homepage = (props) => {
  return (
    <Fragment>
      <Header></Header>
    </Fragment>
  );
};

export default connect()(Homepage);
