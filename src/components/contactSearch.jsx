import React from 'react';

export default class ContactSearch extends React.Component{
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

        this.props.serchingContactName(event.target.value)
    };

    render(){
        return(
                <input 
                    className="contactSearch "
                    placeholder="Search or start new chat"
                    value={this.state.sendingText}
                    onChange={this.handelChange}
                >
                </input>
        )
    }
}