import { Component } from "react";



class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRead: false,
        };
    }

    handleClick = () => {
        this.setState({
            isRead: !this.state.isRead,
        });
    };

    render() {
        const { sender, textMessage } = this.props;
        let { isRead } = this.state;

        return (
            <>
            <div>
                <p> { sender }</p>
                <p> Message { textMessage }</p>
            
            <button disabled = {isRead} onClick = {this.handleClick}>Read</button>
            </div>
            </>
        )
    }
}

export default Message;