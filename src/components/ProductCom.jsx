import React from 'react'
import { Image, Space, Typography, Rate } from 'antd';
import '../index'
import {
    Link
} from "react-router-dom";

const { Title } = Typography;

const ProductCom = (props) => {
    console.log(props.item);

    return (
        <div>
            <Space size={12}>
                <Image
                    width={200}
                    src={props.item.img}
                />
                <div>
                    <Link to={`/product/${props.item.id}`}>
                        <div className="canClick">
                            <Title level={2}>{props.item.title}</Title>
                            <Title >{props.item.price} VND</Title>
                        </div>
                    </Link>
                    <Rate value={props.item.rating} />
                </div>
                
            </Space>
        </div>
    )
}

export default ProductCom