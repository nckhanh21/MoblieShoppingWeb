import React, { useState, useLayoutEffect, useEffect } from 'react';
import { Image, List, Card, Layout, Breadcrumb, Typography, Space, Rate, Badge, Button } from 'antd';
import { ShoppingCartOutlined, CloseOutlined, DollarOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import {
    Link
} from "react-router-dom";

const { Text, Title } = Typography;
const { Header, Content, Sider } = Layout;

const CartItemCom = (props) => {
    const cartAPI = "http://localhost:3000/cart"
    const [quantityOfItems, setQuantityOfItems] = useState(0)
    const handleIncrease = (data, callback) => {
        data.quantity = data.quantity + 1;
        var options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch(`${cartAPI}/${props.item.id}`, options)
            .then((response) => response.json())
            .then(setQuantityOfItems(data.quantity))
            .then(callback(data.price));
    }
    const handleReduce = (data, callback) => {
        if (data.quantity == 1) {
            alert('Xay ra loi')
        }
        else {
            data.quantity = data.quantity - 1;
            var options = {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            fetch(`${cartAPI}/${props.item.id}`, options)
                .then((response) => response.json())
                .then(setQuantityOfItems(data.quantity))
                .then(callback(data.price * (-1)));
        }
    }
    const handleDeleteFromCart = (data, callback) => {
        fetch(cartAPI + "/" + props.item.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then(callback(data.price*data.quantity*(-1)))
    }
    return (
        <Space size={12}>
            <Image
                width={200}
                src={props.item.img}
            />
            <Link to={`/product/${props.item.id}`}>
                <div className="canClick">
                    <Title level={2}>{props.item.title}</Title>
                    <Text style={{ display: "inline-block", width: '70%' }}>{props.item.description}</Text>
                    <Title >{props.item.price} VND</Title>

                </div>
            </Link>
            <div style={{ display: 'flex', }}>
                <Button onClick={() => handleIncrease(props.item, props.callback)} icon={<PlusOutlined />} size="large" ></Button>
                <Title style={{ margin: "5px 10px 0px 10px" }} level={3}>{props.item.quantity}</Title>
                <Button onClick={() => handleReduce(props.item, props.callback)} icon={<MinusOutlined />} size="large" ></Button>
            </div>
            <div style={{ position: "absolute", top: "0px", borderRadius: "50%", cursor: "pointer" }}>
                <CloseOutlined onClick={() => handleDeleteFromCart(props.item, props.callback)} style={{ fontSize: "20px" }} />
            </div>
        </Space>
    )
}

export default CartItemCom