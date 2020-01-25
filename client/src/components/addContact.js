import React, { Component } from 'react';
import { Link} from "react-router-dom";
class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

    }

    render() {
        return  (
                <div className="add-card">

                    <p className="card-title-add">
                    
                        {this.props.edit ? 'Edit Contact' : 'New Contact'}
                    </p>

                    <input
                        name="name"
                        type="text"
                        placeholder="Name..."
                        onChange={this.props.handleChange}
                       value= {this.props.contact.name}
                    />

                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone..."
                         onChange={this.props.handleChange}
value={this.props.contact.phone}
                    />

                    <input
                        name="email"
                        type="text"
                        placeholder="Email..."
                    onChange={this.props.handleChange}
                    value={this.props.contact.email}
                    />
                    <Link to="/contact-list">
                    <input
                        type="button"
                        value={this.props.edit ? 'edit contact':"add contact"}
                        className="add-button"
                       onClick={
                           this.props.action

                       }
                    />
                  </Link>
                </div>
            );
    }
}
 
export default AddContact;