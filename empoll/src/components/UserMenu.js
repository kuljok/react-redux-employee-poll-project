import { connect } from "react-redux";
import "./UserMenu.css";

const UserMenu = ({ authedUser }) => {
  return (
    <div className="UserMenu">
      <div className="username">
        <i className="bi bi-person"></i>
        <span>{authedUser.id}</span>
        <i className="bi bi-x-lg"></i>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(UserMenu);
