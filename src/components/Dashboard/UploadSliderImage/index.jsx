import React, { useState, useEffect } from "react";
import { Typography, Table, Button, Upload, message, Space, Input } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const UploadSliderImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageName, setImageName] = useState("");
  const [file, setFile] = useState(null);

  // Fetch images
  const fetchImages = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/slider_images")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        message.error("Failed to fetch images.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle Upload
  const handleUpload = () => {
    if (!file || !imageName) {
      message.warning("Please provide both an image and a name.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("imageName", imageName);

    setLoading(true);
    axios
      .post("http://localhost:5000/api/slider_upload", formData)
      .then(() => {
        message.success("Image uploaded successfully!");
        fetchImages(); // Refresh the list
        setImageName("");
        setFile(null);
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        message.error("Failed to upload image.");
      })
      .finally(() => setLoading(false));
  };

  // Handle Delete
  const handleDelete = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/api/slider_images/${id}`)
      .then(() => {
        message.success("Image deleted successfully!");
        fetchImages(); // Refresh the list
      })
      .catch((error) => {
        console.error("Delete failed:", error);
        message.error("Failed to delete image.");
      })
      .finally(() => setLoading(false));
  };

  // Columns for the Table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image Name",
      dataIndex: "image_name",
      key: "image_name",
    },
    {
      title: "Preview",
      dataIndex: "image_data",
      key: "image_data",
      render: (imageData) => (
        <img src={imageData} alt="Uploaded" style={{ width: "80px", borderRadius: "5px" }} />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Header */}
      <Typography.Title level={2}>Upload Slider Images</Typography.Title>

      {/* Upload Form */}
      <Space style={{ marginBottom: "20px" }}>
        <Input
          placeholder="Enter image name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          style={{ width: "200px" }}
        />
        <Upload
          beforeUpload={(file) => {
            setFile(file);
            return false;
          }}
          maxCount={1}
          accept="image/*"
        >
          <Button icon={<UploadOutlined />}>Choose Image</Button>
        </Upload>
        <Button type="primary" onClick={handleUpload} loading={loading}>
          Upload
        </Button>
      </Space>

      {/* Table for Uploaded Images */}
      <Table
        style={{ width: "100%", maxWidth: "1000px" }}
        loading={loading}
        columns={columns}
        dataSource={images.map((image) => ({ ...image, key: image.id }))}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default UploadSliderImages;
