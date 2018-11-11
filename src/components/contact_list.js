import React, {Component} from 'react';
import ContactCard from './contact_card';
import ContactData from '../data/contacts'

class ContactList extends Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: '',
            contactData: ''
        }
    }
    render (){
        console.log('Contact Data: ', this.state.contacts);
        return (
            <h1>Hey there, Hi there, Ho there</h1>
        )
    }
}

export default ContactList;