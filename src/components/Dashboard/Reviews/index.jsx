import {
    Table,
    Typography,
    Button,
    Popconfirm,
    Space,
    Upload,
    Input,
    Select,
    message,
    Modal,
    Form,
} from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, UploadOutlined, EditOutlined } from "@ant-design/icons";

const { Option } = Select;

function Reviews() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        review: "",
        stars: null,
    });
    const [imageFile, setImageFile] = useState(null);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);
    const [editForm] = Form.useForm();

    // Fetch Reviews Data
    const fetchReviews = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/reviews/all")
            .then((res) => res.json())
            .then((data) => {
                setDataSource(data);
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

    // Handle Upload
    const handleUpload = () => {
        const { name, email, review, stars } = formData;
        if (!name || !email || !review || !stars || !imageFile) {
            message.warning("Please provide all the required details.");
            return;
        }

        const uploadData = new FormData();
        uploadData.append("name", name);
        uploadData.append("email", email);
        uploadData.append("review", review);
        uploadData.append("stars", stars);
        uploadData.append("image", imageFile);

        fetch("http://localhost:5000/api/reviews/add", {
            method: "POST",
            body: uploadData,
        })
            .then(() => {
                message.success("Review uploaded successfully!");
                fetchReviews();
                setFormData({ name: "", email: "", review: "", stars: null });
                setImageFile(null);
            })
            .catch(() => message.error("Failed to upload review."));
    };

    // Handle Delete
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/api/reviews/delete/${id}`, { method: "DELETE" })
            .then(() => {
                message.success("Review deleted successfully!");
                setDataSource((prev) => prev.filter((item) => item.id !== id));
            })
            .catch(() => message.error("Failed to delete the review."));
    };

    // Handle Edit
    const handleEdit = (record) => {
        setCurrentEditId(record.id);
        setEditModalVisible(true);
        // Populate modal form with current record data
        editForm.setFieldsValue({
            name: record.name,
            email: record.email,
            review: record.review,
            stars: record.stars,
        });
    };

    const handleEditSubmit = () => {
        editForm.validateFields().then((values) => {
            const updateData = new FormData();
            updateData.append("name", values.name);
            updateData.append("email", values.email);
            updateData.append("review", values.review);
            updateData.append("stars", values.stars);
            if (imageFile) updateData.append("image", imageFile);

            fetch(`http://localhost:5000/api/reviews/update/${currentEditId}`, {
                method: "PUT",
                body: updateData,
            })
                .then(() => {
                    message.success("Review updated successfully!");
                    setEditModalVisible(false);
                    setImageFile(null);
                    fetchReviews();
                })
                .catch(() => message.error("Failed to update the review."));
        });
    };

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
                <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
                    {text}
                </Typography.Paragraph>
            ),
        },
        {
            title: "Rating",
            dataIndex: "stars",
            key: "stars",
            render: (rating) => <span>{rating} ★</span>,
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (imageUrl) =>
                imageUrl ? (
                    <img
                        src={`${imageUrl}`}
                        alt="review"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                ) : (
                    "No Image"
                ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    >
                        Edit
                    </Button>
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
            <Typography.Title level={2}>Manage Reviews</Typography.Title>

            {/* Upload Form */}
            <Space style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Input
                    placeholder="Review"
                    value={formData.review}
                    onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                    style={{ width: "200px" }}
                />
                <Select
                    placeholder="Rating"
                    value={formData.stars}
                    onChange={(value) => setFormData({ ...formData, stars: value })}
                    style={{ width: "200px" }}
                >
                    <Option value={1}>1 ★</Option>
                    <Option value={2}>2 ★</Option>
                    <Option value={3}>3 ★</Option>
                    <Option value={4}>4 ★</Option>
                    <Option value={5}>5 ★</Option>
                </Select>
                <Upload
                    beforeUpload={(file) => {
                        setImageFile(file);
                        return false;
                    }}
                    maxCount={1}
                    accept="image/*"
                >
                    <Button icon={<UploadOutlined />}>Choose Image</Button>
                </Upload>
                <Button type="primary" onClick={handleUpload} loading={loading}>
                    Upload Review
                </Button>
            </Space>

            {/* Table for Reviews */}
            <Table
                style={{ width: "100%", maxWidth: "1000px" }}
                loading={loading}
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 5 }}
                rowKey="id"
            />

            {/* Edit Modal */}
            <Modal
                title="Edit Review"
                visible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                onOk={handleEditSubmit}
            >
                <Form form={editForm} layout="vertical">
                    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="review" label="Review" rules={[{ required: true }]}>
                        <Input.TextArea placeholder="Review" rows={3} />
                    </Form.Item>
                    <Form.Item name="stars" label="Rating" rules={[{ required: true }]}>
                        <Select placeholder="Select Rating">
                            <Option value={1}>1 ★</Option>
                            <Option value={2}>2 ★</Option>
                            <Option value={3}>3 ★</Option>
                            <Option value={4}>4 ★</Option>
                            <Option value={5}>5 ★</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Reviews;
