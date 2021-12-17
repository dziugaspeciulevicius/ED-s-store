import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import UserListPage from "./tab-panels/UserListPage.component";
import ProductListPage from "./tab-panels/ProductListPage.component";
import OrderListPage from "./tab-panels/OrderListPage.component";
import Breadcrumb from "../../components/Breadcrumb.component";

const AdminPanel = () => {
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
                        {/* ========== USERS PANEL ========== */}
                        <TabPanel>
                          <UserListPage />
                        </TabPanel>
                        {/* ========== PRODUCTS PANEL ========== */}
                        <TabPanel>
                          <ProductListPage />
                        </TabPanel>
                        {/* ========== ORDERS PANEL ========== */}
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
