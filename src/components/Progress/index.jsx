import React, {useState} from 'react';

import { Progress, Button, Row, Col } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export const ProgressBar = () => {
  const [count, setCount] = useState(10);

  const increase = () => {
    let percent = count + 10;
    if (percent > 100) {
      percent = 100;
    }
    setCount( percent );
  };

  const decline = () => {
    let percent = count - 10;
    if (percent < 0) {
      percent = 0;
    }
    setCount( percent );
  };

  return (
    <div className="section-container">
      <h2 className="title-2">Progress</h2>
       <Row gutter={[22, 22]} justify="center"  align="middle">
         <div className="progress-group">
          <Col span={12}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </Col>
          <Col span={11} offset={1}>
            <Progress type="circle" percent={75} />
            <Progress type="circle" percent={70} status="exception" />
            <Progress type="circle" percent={100} />
          </Col>
         </div>
        </Row>

        <Row gutter={[22, 22]} justify="center"  align="middle">
        <div className="progress-group">
          <Col span={11} offset={1}>
            <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
            <Progress type="circle" percent={100} format={() => 'Done'} />
          </Col>

          <Col span={11} offset={1}>
            <Progress type="circle" percent={count} />
            <Button.Group>
              <Button onClick={decline} icon={<MinusOutlined />} />
              <Button onClick={increase} icon={<PlusOutlined />} />
            </Button.Group>
          </Col>
        </div>
      </Row>
    </div>
  );
};
