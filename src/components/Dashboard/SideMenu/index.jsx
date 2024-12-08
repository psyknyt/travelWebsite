import {
  CloudDownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

function SideMenu() {
  const location = useLocation();
  const [selected_keys, set_selected_keys] = useState("/");
  const [open_keys, set_open_keys] = useState([]);

  useEffect(() => {
    const path_name = location.pathname;
    set_selected_keys(path_name);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handle_open_change = (keys) => {
    const latest_key = keys.find((key) => !open_keys.includes(key));
    set_open_keys(latest_key ? [latest_key] : []);
  };

  return (
    <div className="SideMenu" style={{ height: "100%" }}>
      <Menu
        className="SideMenuVertical"
        mode="inline"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selected_keys]}
        openKeys={open_keys}
        onOpenChange={handle_open_change}
      >
        <Menu.Item
          key="/dashboard"
          icon={<CloudDownloadOutlined />}
        >
          View Booking
        </Menu.Item>
        <Menu.SubMenu
          key="upload_section"
          icon={<UploadOutlined />}
          title="Uploads"
        >
          <Menu.Item key="/uploadsliderimage">
            Slider Images
          </Menu.Item>
          <Menu.Item key="/upload_upcomingWinterTrack">
            Upcoming Winter Track
          </Menu.Item>
          <Menu.Item key="/upload_mostPopularTour">
            Most Popular Tour
          </Menu.Item>
          <Menu.Item key="/upload_topSpots">
            Top Spots
          </Menu.Item>
          <Menu.Item key="/upload_blogs">
            Blogs
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}
export default SideMenu;
