import React from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import PageContent from "./PageContent";

const Dashboard = () => {

  const styles = {
    sideMenuAndPageContent: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      display: "flex",
      flex:"1",
      marginTop: "80px",
    },
    header: {
      textAlign: "center",
      marginBottom: "20px",
    },
    uploadForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "10px",
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "5px",
    },
    input: {
      padding: "8px",
      fontSize: "16px",
      width: "200px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      cursor: "pointer",
      marginTop: "10px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    dashboard: {
      display: "flex",
      flexdirection: "column",
      width: "100vw",
      height: "100vh",
  }
  };

  return (

    <div style={styles.dashboard}>
      <Header />
      <div style={styles.sideMenuAndPageContent}>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
    </div>
  );
};

export default Dashboard;
