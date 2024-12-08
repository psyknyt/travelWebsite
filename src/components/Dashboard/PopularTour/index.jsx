import React, { useState, useEffect } from "react";
import { Typography, Table, Button, Upload, message, Space, Input } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const PopularTour = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trekName, setTrekName] = useState(""); // State to store the trek name
  const [location, setLocation] = useState(""); // State to store the location
  const [price, setPrice] = useState(""); // State to store the price
  const [duration, setDuration] = useState(""); // State to store trek duration
  const [file, setFile] = useState(null);

  // Fetch images (Trekking details)
  const fetchImages = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/most_popular_tours/fetch")
      .then((response) => {
        console.log("Fetched images:", response.data);
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
    if (!file || !trekName || !location || !price || !duration) {
      message.warning("Please provide all the required details.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("trekName", trekName);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("duration", duration);

    setLoading(true);
    axios
      .post("http://localhost:5000/api/most_popular_tours/upload", formData)
      .then(() => {
        message.success("Image uploaded successfully!");
        fetchImages(); // Refresh the list
        setTrekName("");
        setLocation("");
        setPrice("");
        setDuration("");
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
      .delete(`http://localhost:5000/api/most_popular_tours/${id}`)
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
      title: "Trek Name",
      dataIndex: "image_name",
      key: "trek_name",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <span>{rating ? `${rating} ★` : "No rating available"}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => <span>₹{price}/Person</span>,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (duration) => <span>{duration || "No duration available"}</span>,
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
      <Typography.Title level={2}>Upload Trekking Packages</Typography.Title>

      {/* Upload Form */}
      <Space style={{ marginBottom: "20px" }}>
        <Input
          placeholder="Enter trek name"
          value={trekName}
          onChange={(e) => setTrekName(e.target.value)}
          style={{ width: "200px" }}
        />
        <Input
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: "200px" }}
        />
        <Input
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ width: "200px" }}
        />
        <Input
          placeholder="Enter duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
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

export default PopularTour;
