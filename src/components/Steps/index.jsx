import React, {useState} from 'react';

import { Steps, Button, message } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

import { STEPS } from 'constants/steps.js';

export const WizardSteps = () => {
  const { Step } = Steps;

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="section-container">
      <h2 className="title-2">Steps</h2>
      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>

      <div className="steps-row">
        <Steps current={current}>
          {STEPS.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{STEPS[current].content}</div>
        <div className="steps-action">

          {current > 0 && (
            <Button onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < STEPS.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === STEPS.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}

        </div>
      </div>
    </div>
  );
};
