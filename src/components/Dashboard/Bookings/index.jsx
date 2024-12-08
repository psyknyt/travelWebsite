import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

function Orders() {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const getBookingsData = () => {
        return fetch("http://localhost:5000/api/bookings").then((res) => res.json());
    };
    

    useEffect(() => {
        setLoading(true);
        getBookingsData().then((res) => {
            setDataSource(res);
            setLoading(false);
        });
    }, []);

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
            <Typography.Title level={2} >
                Booking List
            </Typography.Title>
            <Table
                style={{ width: "100%", maxWidth: "1500px" }}
                loading={loading}
                columns={[
                    {
                        title: "ID",
                        dataIndex: "id",
                    },
                    {
                        title: "Name",
                        dataIndex: "name",
                    },
                    {
                        title: "Email",
                        dataIndex: "email",
                    },
                    {
                        title: "Tour Type",
                        dataIndex: "tour_type",
                    },
                    {
                        title: "Message",
                        dataIndex: "message",
                    },
                    {
                        title: "Created At",
                        dataIndex: "created_at",
                        render: (value) => <span>{new Date(value).toLocaleString()}</span>,
                    },
                ]}
                dataSource={dataSource}
                pagination={{
                    pageSize: 5,
                }}
            />

        </div>
    );
}
export default Orders;
