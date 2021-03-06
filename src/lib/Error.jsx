/** Dependencies */
import React from "react";
/** Components */
import CustomMessage from "../components/CustomMessage/CustomMessage";
/** Error Class Component */
class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.customMessage = {
      type: this.props.message !== undefined ? this.props.message.type : "error",
      messageText:
        this.props.message !== undefined
          ? this.props.message.messageText
          : this.props.customMensaje,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ hassError: true });
  }

  render() {
    if (this.state.hasError) {
      return <CustomMessage {...this.customMessage} />;
    }
    return this.props.children;
  }
}

export default Error;
