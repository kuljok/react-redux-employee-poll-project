import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Polls.css";

const Polls = (props) => {
  const [activeTab, setActiveTab] = useState("unanswered");

  return (
    <div className="Polls">
      <div className="top-row">
        <div
          className={`top-item ${activeTab === "unanswered" ? "active" : ""}`}
        >
          <Link to="/unanswered" onClick={(e) => setActiveTab("unanswered")}>
            [ unanswered ]
          </Link>
        </div>
        <div className={`top-item ${activeTab === "answered" ? "active" : ""}`}>
          <Link to="/answered" onClick={(e) => setActiveTab("answered")}>
            [ answered ]
          </Link>
        </div>
      </div>
      <div className="bottom-grid">
        <div className="grid-item">list</div>
      </div>
    </div>
  );
};

export default connect()(Polls);
