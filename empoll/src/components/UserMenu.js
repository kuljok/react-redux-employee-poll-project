import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import "./UserMenu.css";

const UserMenu = ({ dispatch, authedUser }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleLogout = () => {
    dispatch(setAuthedUser(null));
  };

  return (
    <div className="UserMenu" onClick={handleClick}>
      <div className={`username ${toggle ? "toggle" : ""}`}>
        <i className="bi bi-person"></i>
        <span>{authedUser.id}</span>
        <i className="bi bi-x-lg" onClick={handleLogout}></i>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(UserMenu);
