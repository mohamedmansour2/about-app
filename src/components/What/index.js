import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Button, message, Steps } from "antd";
import Form from "../Form/form";
import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import myImg from "../../images/me.jpg";

const { Step } = Steps;
const steps = [
  {
    title: "Start",
    content: (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={myImg} alt="My Img" className="edit-img" />
            </div>
            <div className="col-md-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam sapiente dolores excepturi quia? Quae impedit
                architecto dolores quis cumque blanditiis labore enim
                voluptatem, error mollitia ducimus aperiam minima odit nostrum?
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    icon: <UserOutlined />,
  },
  {
    title: "Login",
    content: <Form />,
    icon: <SolutionOutlined />,
  },
  // {
  //   title: "End",
  //   content: <div></div>,
  //   icon: <SmileOutlined />,
  // },
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <Steps className="test" current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.icon} />
          ))}
        </Steps>
        <div className="steps-content ">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button className="edit-btn" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              className="edit-btn"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              className="edit-prev"
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
