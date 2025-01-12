import { connect } from "react-redux";
import UserMenu from "./UserMenu";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <div></div>
      <UserMenu />
    </header>
  );
};

export default connect()(Header);
