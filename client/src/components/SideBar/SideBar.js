import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
} from "cdbreact";
import NavBar from "../NavBar/NavBar";
const SideBar = () => {
  return (
    <div className="d-flex " style={{height:"100vh"     }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          With CTA
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large" iconSize="lg">
              Dashboard
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note" iconSize="sm">
              Components
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="credit-card"
              iconType="solid"
              textFontSize="14px"
            >
              Sales
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem
              icon="gamepad"
              iconType="solid"
              textFontSize="14px"
            >
              contact US
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div className="w-100">
        <NavBar />
      </div>
    </div>
  );
};

export default SideBar;
