import { Table, Typography, Button, Popconfirm, Space, Form, Input, Select, message } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

function Reviews() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [form] = Form.useForm();

    // Fetch Reviews Data
    const getReviewsData = () => {
        return fetch("http://localhost:5000/api/reviews/all").then((res) => res.json());
    };

    // Delete Review
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/reviews/delete/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                message.success("Review deleted successfully!");
                setDataSource((prev) => prev.filter((item) => item.id !== id));
            })
            .catch(() => message.error("Failed to delete the review."));
    };

    // Upload Review
    const handleUpload = (values) => {
        fetch("http://localhost:5000/api/reviews/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })
            .then(() => {
                message.success("Review uploaded successfully!");
                form.resetFields();
                fetchReviews();
            })
            .catch(() => message.error("Failed to upload review."));
    };

    // Fetch Data on Component Mount
    const fetchReviews = () => {
        setLoading(true);
        getReviewsData()
            .then((res) => {
                setDataSource(res);
                setLoading(false);
            })
            .catch(() => {
                message.error("Failed to fetch reviews.");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // Table Columns
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Review",
            dataIndex: "review",
            key: "review",
            render: (text) => (
                <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                    {text}
                </Typography.Paragraph>
            ),
        },
        {
            title: "Rating",
            dataIndex: "stars",
            key: "stars",
            render: (rating) => <span>{rating} ★</span>, // Display stars
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Popconfirm
                    title="Are you sure to delete this review?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger icon={<DeleteOutlined />}>
                        Delete
                    </Button>
                </Popconfirm>
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
            <Typography.Title level={2}>Review List</Typography.Title>

            {/* Upload Form */}
            <Form
                form={form}
                layout="inline"
                onFinish={handleUpload}
                style={{ marginBottom: "20px" }}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Please input the name!" }]}
                >
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please input the email!" }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="review"
                    rules={[{ required: true, message: "Please input the review!" }]}
                >
                    <Input placeholder="Review" />
                </Form.Item>
                <Form.Item
                    name="stars"
                    rules={[{ required: true, message: "Please input the rating!" }]}
                >
                    <Select placeholder="Rating" style={{ width: 120 }}>
                        <Option value={1}>1 ★</Option>
                        <Option value={2}>2 ★</Option>
                        <Option value={3}>3 ★</Option>
                        <Option value={4}>4 ★</Option>
                        <Option value={5}>5 ★</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<UploadOutlined />}>
                        Upload Review
                    </Button>
                </Form.Item>
            </Form>

            {/* Table to Display Reviews */}
            <Table
                style={{ width: "100%", maxWidth: "1000px" }}
                loading={loading}
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 5 }}
                rowKey="id"
            />
        </div>
    );
}

export default Reviews;
