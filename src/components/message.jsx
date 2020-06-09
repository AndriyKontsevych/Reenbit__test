import React from 'react';
import Avatar from './avatar.jsx'
import { currentUser, contactsById } from '../chatData.js';

export default function Message(props){
    if(props.message.contactId !== currentUser.id) 
        { return (
            <div className="incomingMsg">
                <div className="msgContainer">
                < Avatar imgUrl={contactsById[props.message.contactId].icon_URL}/>
                    <div className="incomingMsgText">
                        {props.message.msg}
                    </div>
                </div>
                <div className="msgInfo">
                        {props.message.date}, {props.message.time}
                    </div>
            </div>
        )} 
        else { 
            return (
                <div className="answerMsg">
                    <div className="msgContainer">
                        <div className="answerMsgText">
                            {props.message.msg}
                        </div>
                    </div>
                    <div className="msgInfo">
                            {props.message.date}, {props.message.time}
                        </div>
                </div>
            )
        }
}