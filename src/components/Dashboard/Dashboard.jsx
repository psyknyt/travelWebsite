import React, { useEffect } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import PageContent from "./PageContent";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("islogin"));
    const isAdmin = JSON.parse(localStorage.getItem("admin"));

    if (!isLogin) {
      navigate("/");
    } else if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  const styles = {
    sideMenuAndPageContent: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      display: "flex",
      flex: "1",
      marginTop: "80px",
    },
    dashboard: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
    },
  };

  return (
    <div style={styles.dashboard}>
      <Header />
      <div style={styles.sideMenuAndPageContent}>
        <SideMenu />
        <PageContent />
      </div>
    </div>
  );
};

export default Dashboard;
