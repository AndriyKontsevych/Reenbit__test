import React from 'react';
import {contactsById, messagesByContactId, currentUser } from './chatData.js';
import Avatar from './components/avatar.jsx';
import Contact from './components/contact.jsx';
import ContactSearch from './components/contactSearch.jsx';
import SendMessage from './components/sendMessage.jsx';
import Message from './components/message.jsx'

export default class Chat extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            serchingName: '',
            activeContactId: 1,
            contactsById: {...contactsById},
            messagesByContactId: {...messagesByContactId}  
        }
    }

    serchingContactName = ( name ) => {
        this.setState({
            serchingName: name
        })
    }

    setActiveContactId = ( id ) => {
        this.setState({
            activeContactId : id
        })
    }

    updateMsgHistory = (msgText) => {
        const messagesByContactId = {...this.state.messagesByContactId};
        const activeContactMsgs =  [...messagesByContactId[this.state.activeContactId]];
        const msgDate = new Date();
        
        activeContactMsgs.push({
            'contactId': currentUser.id, 
            'msg': msgText, 
            'date': msgDate.toLocaleDateString(), 
            'time': msgDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        });

        messagesByContactId[this.state.activeContactId] = [...activeContactMsgs];
        
        this.setState({
            messagesByContactId: {...messagesByContactId}
        }, () => {
            fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(
              (result) => {
                const messagesByContactId = {...this.state.messagesByContactId};
                const activeContactMsgs =  [...messagesByContactId[this.state.activeContactId]];
        
                activeContactMsgs.push({
                    'contactId': this.state.activeContactId, 
                    'msg': result.value, 
                    'date': msgDate.toLocaleDateString(), 
                    'time': msgDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                });

                if (contactsById[this.state.activeContactId].online === true) {
                    messagesByContactId[this.state.activeContactId] = [...activeContactMsgs];
                }
                
                this.setState({
                  messagesByContactId: {...messagesByContactId}
                });
              },

              (error) => {
                console.error(error);
              }
            )
        });
        
    }

  render() {
    return(
          <div className="wrapper">
			  <div className="contactsBlock">
                <div className="searchBar">
                    <div className="iconBox">
                        <Avatar imgUrl={currentUser.icon_URL}/>
                        <div className="online">
                    </div>
                    </div>
					<div className="inputSearch">
						<div className="icon fas fa-search"></div>
						<ContactSearch
                            serchingContactName={this.serchingContactName}
                        />
					</div>
                </div>
                <div className="chats">
                    Chats
                </div>
                {
                    Object.keys(this.state.contactsById)
                    .filter((id) => {
                        const contact = this.state.contactsById[id];
                        
                        return (contact.name).toLowerCase().includes(this.state.serchingName.toLowerCase())
                    })
                    .map( (id) => {
                        const contact = this.state.contactsById[id];
                        
                        return (
                            <Contact 
                                contact={contact}
                                messages={this.state.messagesByContactId[contact.id]}
                                key={`contact-${contact.id}`}
                                // onClick={this.setActiveContactId.bind(this, id)}
                                onClick={() => this.setActiveContactId(id)}
                            />
                        );
                    })
                }
            </div>
               
			   <div className="messagesBlock">
                <header className="currentContact">
                    <div className="iconBox">
                        <Avatar imgUrl={this.state.contactsById[this.state.activeContactId].icon_URL}/>
                        <div className={this.state.contactsById[this.state.activeContactId].online ? "online" : "offline"}></div>
                    </div>
                    {this.state.contactsById[this.state.activeContactId].name}
                </header>
                <div className="msgHistory">
                    {this.state.messagesByContactId[this.state.activeContactId].map( (message, index ) => {
                    return (
                        <Message 
                            message={message}
                            key={`message-${index}`}
                        />
                    )
                })}   
                </div>
                <SendMessage 
                    updateMsgHistory={this.updateMsgHistory}
                />
            </div>
          </div>
        ) ;
  } 
}