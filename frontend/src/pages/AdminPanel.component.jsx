import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import UserListPage from "../pages/UserListPage.component";
import ProductListPage from "../pages/ProductListPage.component";
import OrderListPage from "../pages/OrderListPage.component";

import Breadcrumb from "../components/Breadcrumb.component";

const AdminPanel = ({ location, history, match }) => {
  return (
    <div>
      <Breadcrumb title={"Admin dashboard"} />
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
                        {/*========== USERS TAB ==========*/}
                        <Tab className="nav-item">
                          <span className="nav-link">Users</span>
                        </Tab>
                        {/*========== PRODUCTS TAB ==========*/}
                        <Tab className="nav-item">
                          <span className="nav-link">Products</span>
                        </Tab>
                        {/*========== ORDERS TAB ==========*/}
                        <Tab className="nav-item">
                          <span className="nav-link">Orders</span>
                        </Tab>
                      </TabList>
                    </aside>

                    <div
                      className="col-md-8 col-lg-9"
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="tab-pane">
                        {/*========== USERS PANEL ==========*/}
                        <TabPanel>
                          <UserListPage />
                        </TabPanel>
                        {/*========== PRODUCTS PANEL ==========*/}
                        <TabPanel>
                          <ProductListPage />
                        </TabPanel>
                        {/* try fixing this later so it doesn't reload everytime */}
                        {/*========== ORDERS PANEL ==========*/}
                        <TabPanel>
                          <OrderListPage />
                        </TabPanel>
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

export default AdminPanel;
