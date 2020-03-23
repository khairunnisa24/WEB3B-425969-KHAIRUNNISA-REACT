import React, {Component, Fragment} from 'react';
import { Carousel, Col, Row, Badge } from 'antd';
import '../assets/css/Product.css';
import CardProduct from '../common/component/CardProduct';
import TextAnim from '../common/component/TextAnim/TextAnim';

const foodData = [
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
    {
        name:"Skin 1004 madagascar centella asitica ampoule",
        price: "IDR 325,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGpKrzF6lZrtc6JkPSOdgn1qSwcO-pK0mh33B1sM3N5T4iEOfhsQiIm1fXrtNt-8ZXq4mCqCEE&usqp=CAc"
    },
]

class Product extends Component {

    state = {
        order: 0
    }

    handleCounterChange = (value) => {
        this.setState({
            order: value
        })
    }

    render(){
        return (
          <Fragment>
            <div className="header">
              <div className="logo">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/soc-dashboard/images/6352317c83c0e1434deed9945acaa55f.png "
                  width ="120px"cccccccc
                />
              </div>
              <div className="troley">
                <Badge count={this.state.order}>
                <img
                  src="https://etanee.id/img/icon/ic_cart_white.svg"
                  alt=""
                />
                </Badge>
              </div>
            </div>
            <Carousel autoplay>
              <div>
                <TextAnim />
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
              <Row style={{justifyContent:'center'}}>
                {foodData.map(data => (
                  <Col span={5}>
                    <CardProduct
                      onCounterChange={value => this.handleCounterChange(value)}
                      name={data.name}
                      price={data.price}
                      image={data.image}
                    />
                  </Col>
                ))}
              </Row>
          </Fragment>
        );
    }
}

export default Product;