import { Route2 } from "../../utils/routes";

import { Link1 } from "../../utils/links";

import "./style.scss";

const Dashboard = ({ darkmode }) => {
  return (
    <Route2
      content={
        <div className="dashboard">
          <Link1
            darkmode={darkmode}
            text="create new image"
            to="/create-image"
          />
        </div>
      }
      title="dashboard"
    />
  );
};

export default Dashboard;
