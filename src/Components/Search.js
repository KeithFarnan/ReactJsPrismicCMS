import React from 'react';
import { render } from 'react-dom';


class SearchPage extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ''
        };
    }

    updatSearch(event){
        this.setState({
            search: event.target.value.substr(0,20)
        })
    }

    render(){

        let filteredContacts = this.props.contacts.filter(
            (contac) => {
                return contact.name.toLowerCase(). indexOf(this.state.search.toLowerCase()) !==-1;
            }
        );

        return(
            <div>
                <input type ="text"
                    value={this.state.search}
                    onChange={this.updatSearch.bind(this)}
                    />
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contract={contact}
                            key={contact.ie} />
                    })}
                </ul>
                
            </div>
        )
    }

}

export default SearchPage;