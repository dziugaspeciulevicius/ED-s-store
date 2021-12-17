import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";
import Breadcrumb from "../../components/Breadcrumb.component";
import MyOrdersPageComponent from "./tab-panels/MyOrdersPage.component";
import MyProfilePageComponent from "./tab-panels/MyProfilePage.component";
import MyLoyaltyPageComponent from "./tab-panels/MyLoyaltyPage.component";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Breadcrumb title={"Dashboard"} />
      <div className="main">
        <div className="page-content">
          <div className="dashboard">
            <div className="container">
              <ul
                className="nav nav-dashboard flex-column mb-3 mb-md-0"
                role="tablist"
              >
                <Tabs selectedTabClassName="active show">
                  <div className="row-profile">
                    <aside className="col-md-4 col-lg-3">
                      <TabList>
                        <Tab className="nav-item">
                          <span className="nav-link">Orders</span>
                        </Tab>

                        <Tab className="nav-item">
                          <span className="nav-link">Profile</span>
                        </Tab>

                        <Tab className="nav-item">
                          <span className="nav-link">Loyalty</span>
                        </Tab>

                        <Tab className="nav-item">
                          <Link
                            onClick={logoutHandler}
                            to="/"
                            className="nav-link"
                          >
                            Sign Out
                          </Link>
                        </Tab>
                      </TabList>
                    </aside>

                    <div
                      className="col-md-8 col-lg-9"
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="tab-pane">
                        {/* ========== MY ORDERS PANEL ========== */}
                        <TabPanel>
                          <MyOrdersPageComponent />
                        </TabPanel>

                        {/* ========== MY PROFILE PANEL ========== */}
                        <TabPanel>
                          <MyProfilePageComponent />
                        </TabPanel>

                        {/* ========== LOYALTY PANEL ========== */}
                        <TabPanel>
                          <MyLoyaltyPageComponent />
                        </TabPanel>

                        <TabPanel />
                      </div>
                    </div>
                  </div>
                </Tabs>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
