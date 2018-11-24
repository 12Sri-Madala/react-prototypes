import React, { Component } from 'react';
import Field from './field'

class ContactForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
    }

    handleInputChange = (event) => {
        const { target: {value, name} } = event;
        const { form } = this.state;
        form[name] = value;

        this.setState({
            form: {...form}, // what is the alternative to this, to better my own understanding

        })
    }

    handleSubmit = (shit) => { // is there no way to import contacts and pass the values given to handleSubmit to that component?
        shit.preventDefault();
        console.log("handleSubmit called, form values are: ", this.state.form)
        this.props.add(this.state.form);
        this.reset()
    }

    reset = () => {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }

    render() { 
        const { form: {firstName, lastName, phone, email} } = this.state

        return ( 
            <form onSubmit={this.handleSubmit} >
                    <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange} />
                    <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                    <Field name="phone" label="Phone Number" type="text" value={phone} onChange={this.handleInputChange}/>
                    <Field name="email" label="Email Address" type="text" value={email} onChange={this.handleInputChange}/>
                    <button>Add Contact</button>
                    <button type="button" onClick={this.reset} >Reset Form</button>
            </form>
        );
    }
}
 
export default ContactForm;
