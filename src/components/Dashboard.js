import React from "react";
import MyButton from "./button";

const Dashboard = (props) => {
  const { userName } = props;
  console.log(props, "props");
  const greet = () => {
    return <p>{`hello ${userName}`}</p>;
  };

  return (
    <div style={{ border: "2px solid red" }}>
      this is dashboard
      <div>{greet()}</div>
      <MyButton name={"Go back"} />
    </div>
  );
};

export default Dashboard;
