import { connect } from "react-redux";
import "./UserMenu.css";

const UserMenu = ({ authedUser }) => {
  return (
    <div className="UserMenu">
      <div>{authedUser.id}</div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(UserMenu);
