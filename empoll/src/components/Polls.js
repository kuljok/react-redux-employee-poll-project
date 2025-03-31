import { connect } from "react-redux";
import "./Polls.css";

const Polls = (props) => {
  return (
    <div className="Polls">
      <div className="top-row">
        <div className="top-item">[ answered ]</div>
        <div className="top-item">[ unanswered ]</div>
      </div>
      <div className="bottom-grid">
        <div className="grid-item">list</div>
      </div>
    </div>
  );
};

export default connect()(Polls);
