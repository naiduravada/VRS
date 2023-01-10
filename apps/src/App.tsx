import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Col, Form, Input, Row } from 'antd';

function App() {
  return (
    <div>
      <Card title={<span style={{ color: 'black' }}> Vehicle Details</span>}
        style={{ textAlign: 'center' }} headStyle={{ backgroundColor: 'white', border: 0 }} extra={<span style={{ color: '#5860f5' }} ><Button >View</Button> </span>}>
        <Card>
          <Form layout='vertical' autoComplete='off'>
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 5 }} offset={1}>
                <Form.Item label="Vehicle Type" rules={[{ required: true, message: "Vehicle Type is Required" }]}
                  name="vehicleType" style={{ width: '80%' }}>
                    <Input placeholder='Enter vehicle type'/>
                  </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 5 }} offset={1}>
                <Form.Item label="Vehicle Model" rules={[{ required: true, message: "Vehicle Model is Required" }]}
                  name="vehicleModel" style={{ width: '80%' }}>
                    <Input placeholder='Enter vehicle Model'/>
                  </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 5 }} offset={1}>
                <Form.Item label="Vehicle Number" rules={[{ required: true, message: "Vehicle Number is Required" }]}
                  name="vehicleNumber" style={{ width: '80%' }}>
                    <Input placeholder='Enter vehicle Number'/>
                  </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Card>
    </div>
  );
}

export default App;
