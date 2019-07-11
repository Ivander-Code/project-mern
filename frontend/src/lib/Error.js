import React from 'react';
import CustomMessage from '../components/CustomMessage';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };

        this.customMessage = {
            type:(this.props.message.type !== '')?this.props.message.type:'error',
            messageText:(this.props.message.messageText !== '')?this.props.message.messageText : this.props.customMensaje
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState({hassError:true});
    }

    render() {
        if (this.state.hasError) {
            return <CustomMessage {...this.customMessage} />;
        }
        return this.props.children;
    }
}

export default Error;