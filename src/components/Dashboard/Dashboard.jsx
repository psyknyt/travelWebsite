import React, { useEffect, useState } from "react";
import Header from "./Header";
import Bookings from "./Bookings";
import Reviews from "./Reviews";
import UploadSliderImages from "./UploadSliderImage";
import { Menu } from "antd";
import {
  CloudDownloadOutlined,
  UploadOutlined,
  PictureOutlined,
  FileImageOutlined,
  EnvironmentOutlined,
  BookOutlined,
  FileTextOutlined,
  UserOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState("1");

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
    dashboard: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
    },
    mainContent: {
      display: "flex",
      flex: 1,
      marginTop: "80px",
    },
    sidebar: {
      width: "250px",
      backgroundColor: "#fff",
      boxShadow: "2px 0 6px rgba(0, 0, 0, 0.1)",
    },
    content: {
      flex: 1,
      padding: "20px",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  };

  // Tab Content based on selectedKey
  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <Bookings />;
      case "2":
        return <UploadSliderImages />;
      case "3":
        return <div>Upcoming Winter Track Content</div>;
      case "4":
        return <div>Most Popular Tour Content</div>;
      case "5":
        return <div>Top Spots Content</div>;
      case "6":
        return <div>Blogs Content</div>;
      case "7":
        return <Reviews/>;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div style={styles.dashboard}>
      <Header />
      <div style={styles.mainContent}>
        {/* Sidebar */}
        <Menu
          style={styles.sidebar}
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
        >
          <Menu.Item key="1" icon={<CloudDownloadOutlined />}>
            View Booking
          </Menu.Item>
          <Menu.SubMenu
            key="upload_section"
            icon={<UploadOutlined />}
            title="Uploads"
          >
            <Menu.Item key="2" icon={<FileImageOutlined />}>
              Slider Images
            </Menu.Item>
            <Menu.Item key="3" icon={<EnvironmentOutlined />}>
              Upcoming Winter Track
            </Menu.Item>
            <Menu.Item key="4" icon={<PictureOutlined />}>
              Most Popular Tour
            </Menu.Item>
            <Menu.Item key="5" icon={<FileTextOutlined />}>
              Top Spots
            </Menu.Item>
            <Menu.Item key="6" icon={<BookOutlined />}>
              Blogs
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined />}>
              Reviews
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>

        {/* Main Content */}
        <div style={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
