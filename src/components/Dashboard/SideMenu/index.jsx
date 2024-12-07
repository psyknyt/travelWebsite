import {
  CloudDownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu" style={{height:"100%"}}>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "View Booking",
            icon: <CloudDownloadOutlined />,
            key: "/",
          },
          {
            label: "Upload Slider Images",
            key: "/uploadsliderimage",
            icon: <UploadOutlined />,
          },
          {
            label: "Upload Upcoming Winter Track ",
            key: "/upload_upcomingWinterTrack",
            icon: <UploadOutlined />,
          },
          {
            label: "Upload Most Popular Tour",
            key: "/upload_mostPopularTour",
            icon: <UploadOutlined />,
          },
          {
            label: "Upload Top Spots",
            key: "/upload_topSpots",
            icon: <UploadOutlined />,
          },
          {
            label: "Upload Blogs",
            key: "/upload_blogs",
            icon: <UploadOutlined />,
          }
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
