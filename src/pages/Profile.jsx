import React, { useState, useLayoutEffect } from 'react'
import { Image, Avatar, Input, Card, Layout, Breadcrumb, Typography, Space, Select, Button, DatePicker } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import CartItemCom from '../components/CartItemCom';

const { Header, Content, Sider } = Layout;
const { Text, Link, Title } = Typography;
const { Option } = Select;
const Profile = () => {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0', cursor: 'pointer' }}>
                <Breadcrumb.Item>My Profile</Breadcrumb.Item>

            </Breadcrumb>
            <Content
                className="site-layout-background"
                style={{
                    padding: 100,
                    margin: 0,
                    minHeight: 280,

                }}
            >
                <Space size={50}>
                    <Avatar size={150} src="https://s3-alpha-sig.figma.com/img/fa77/2ed1/10e7ea98f927884bc61c118fc3fd77a8?Expires=1650844800&Signature=evzd5NYE~eIZcs15W8NaGLrbuvSOUMkk4Ek8XQWa4lrqXDijfeLSW5tBp-gRpBnrUj7bFqRPyE9~M1b9U5YJ3d3BG9dKgQQe7nK6KcWAdQViCwdDD5DPM~8KenreVs8W66pFq~ee0M8wiCy7X0sWnJtCbUy4GtJIxn-C18OyDYkCUuRwQp2i9bVqKNnX8oqA2uJr8pZz-DO38wTHR5vtSD5iJbisyigrHl4gn~Wi3QhWu3NcRh61y9JLBIKrfITWC7d6z-pwibl3WDwtPVrI2TnNMS~oz3wh61oBnbc4P95o1XpK0wytDvxZvy6mr8CKTKutTUxTWNnzyOMhWTCrzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    <div>
                        <Title level={1}>MR. USER</Title>
                        <Title level={3}>Email: user@gmail.com</Title>
                    </div>
                </Space>
                <br />
                <div style={{
                    padding: "50px 0px 10px 20px",
                    margin: 0,
                    minHeight: 280,

                }}>
                    <Space size={90}>
                        <div>
                            <Title level={4}>Date of Birth:</Title>
                            <Title level={4}>Sex:</Title>
                            <Title level={4}>Address Company:</Title>
                            <Title level={4}>Address Home:</Title>
                        </div>
                        <div>
                            <Title level={4}><DatePicker style={{ width: '100%' }} /></Title>
                            <Title level={4}>
                                <Select defaultValue="male" style={{ width: 120 }} >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                </Select>
                            </Title>
                            <Title level={4}><Input placeholder="" /></Title>
                            <Title level={4}><Input placeholder="" /></Title>
                        </div>
                    </Space>
                </div>
            </Content>

        </Layout>
    )
}

export default Profile