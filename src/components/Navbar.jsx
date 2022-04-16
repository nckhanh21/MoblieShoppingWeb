import React from 'react';
import ReactDOM from 'react-dom';
import '../index';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ShopOutlined, MenuOutlined, UserOutlined, ShoppingCartOutlined, NotificationOutlined } from '@ant-design/icons';
import {
    Link,
    useLocation,
} from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Navbar = () => {
    const location = useLocation()
    let listpath = location.pathname.split('/')
    const id = listpath[listpath.length - 1]
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<MenuOutlined />} title="Menu">
                    <Menu.Item key="1" icon={<ShopOutlined />}><Link to="/shop">Shop</Link></Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingCartOutlined />}><Link to="/cart">Cart</Link></Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined />}><Link to="/profile">Profile</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>

    )
}

export default Navbar