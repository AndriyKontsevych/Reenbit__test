import React from 'react';
import Avatar from './avatar.jsx'

export default class Contact extends React.Component{

    handleClick = () => {
		this.props.onClick();
    }
    
    render() {
        return(
            <div
                className="contactInfo"
                onClick={this.handleClick}
            >
                <div className="iconBox">
                    <Avatar imgUrl={this.props.contact.icon_URL}/>
                    <div className={this.props.contact.online ? "online" : "offline"}></div>
                </div>
                <div className="contact">
                    <div className="person">
                        {this.props.contact.name}
                    </div>
                    <div className="lastMsg">
                        {
                            this.props.messages && this.props.messages.length > 0 ? this.props.messages[this.props.messages.length - 1]["msg"] : ""
                        }
                    </div>
                </div>
                <div className="dateMsg">
                    {this.props.messages && this.props.messages.length > 0  ? this.props.messages[this.props.messages.length - 1]["date"] : ""}
                </div>
            </div>
        );
    }
} 
