import React, { useState } from "react";
import modules from "../../modules/modules";
import { Link, Route } from "react-router-dom";

export default function Home() {
  const [currentTab, setCurrentTab] = useState();
  return (
    <>
      <ul className="App-nav">
        {modules.map((module) => (
          <li
            key={module.name}
            className={currentTab === module.name ? "active" : ""}
          >
            <Link
              to={module.routeProps.path}
              onClick={() => setCurrentTab(module.name)}
            >
              {module.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="App-content">
        {modules.map((module) => (
          <Route
            path={module.routeProps.path}
            component={module.routeProps.component}
            key={module.name}
          />
        ))}
      </div>
    </>
  );
}
