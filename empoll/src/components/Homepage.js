import { connect } from "react-redux";
import { Fragment } from "react";
import Header from "./Header";
import Polls from "./Polls";

const Homepage = (props) => {
  return (
    <Fragment>
      <Header />
      <main>
        <Polls />
      </main>
    </Fragment>
  );
};

export default connect()(Homepage);
