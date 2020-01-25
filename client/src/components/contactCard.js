import React from 'react';
import { Link } from 'react-router-dom'

export default function ContactCart({ contact, deleteContact, getPerson }) {

    return (
        <div className="contact-card">

            <p className="card-title">{contact.name}</p>

            <div className="card-text">
                <h4>
                    <i class="fas fa-mobile-alt"></i> Phone:
                </h4>
                <p>{contact.phone}</p>
                <h4>
                    <i class="fas fa-envelope"></i> Email:
         </h4>
                <p>{contact.email}</p>
            </div>
            <div className="buttons">
                <Link to="/edit-contact"><input type="button" value="Edit" className="edit-button" onClick={() => getPerson(contact)} /></Link>
                <Link><input type="button" value="Delete" className="edit-button" onClick={() => deleteContact(contact._id)} /></Link>
            </div>
        </div>
    )
}