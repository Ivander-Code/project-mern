/** Dependencies */
import React from "react";
import { Alert } from "react-bootstrap";

/**Component */
const CustomMessage = (message) => (
  <Alert id="customMessage" className="mb-0" variant={message.type === "error" ? "danger" : message.type}>
    {message.messageText}
  </Alert>
);
export default CustomMessage;
