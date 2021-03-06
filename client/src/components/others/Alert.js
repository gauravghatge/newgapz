import React from "react";

const Alert = (props) => {
  const { alertMessage, alertType } = props;
  console.log(alertMessage);
  return (
    <div className={"alert " + alertType || ""} role="alert">
      <p id="alertP">{alertMessage}</p>
    </div>
  );
};

export default Alert;
