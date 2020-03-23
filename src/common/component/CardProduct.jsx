import React, {Component} from 'react';
import { Card, Input, Button, Row, Col } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
const { Meta } = Card;

class CardProduct extends Component {

    state = {
        order: 0
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order+1
        }, () => { 
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
          this.setState(
            {
              order: this.state.order - 1
            },
            () => {
              this.handleCounterChange(this.state.order);
            }
          );
        }
    }

    render(){
        return (
          <Card
            hoverable
            style={{ width: 250, margin: 10 }}
            cover={
              <img
                alt="product_image"
                src={this.props.image}
              />
            }
          >
            <Meta title={this.props.name} description={this.props.price} />
            <Row style={{ justifyContent: "center" }}>
              <Col span={3}>
                <Button
                  type="primary"
                  icon={<MinusOutlined />}
                  onClick={this.handleMinus}
                />
              </Col>
              <Col span={8} offset={5}>
                <Input
                  style={{textAlign: "center" }}
                  value={this.state.order}
                />
                </Col>
                <Col span={3} offset={5}>
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={this.handlePlus}
                />
              </Col>
            </Row>
          </Card>
        );
    }
}

export default CardProduct;