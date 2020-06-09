import React from 'react';

export default class SendMessage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sendingText: ''
        };
    }

    handelChange = (event) => {
        this.setState({
            sendingText: event.target.value
        });
    };

    handleKeyPress = (e) => {
        if(e.charCode === 13 && this.state.sendingText.length !== 0){

            this.props.updateMsgHistory(this.state.sendingText)

            this.setState({
                sendingText: ''
            });
        }

        return;
    }

    handleSubmit = (e) => {
        if (this.state.sendingText.length === 0) {
          return;
        };

        this.props.updateMsgHistory(this.state.sendingText)

        this.setState({
            sendingText: ''
        });
      };
    
    render(){
        return(
            <div 
                className="sendingInputWrapper"
            >
                    <input 
                        className="sendingInput"
                        placeholder="Type your message"
                        value={this.state.sendingText}
                        onChange={this.handelChange}
                        onKeyPress={this.handleKeyPress}
                    >
                        
                    </input>
                    <div
                        className="sendingBtn far fa-paper-plane"
                        onClick={this.handleSubmit}
                    >
                    </div>
                </div>
        );
    };
}