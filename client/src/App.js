 
 import React, {Component} from "react";
import { Route,Link, BrowserRouter} from "react-router-dom";
import "./App.css";
import {connect} from "react-redux";
import{getContacts,deleteContact,postContact,putContact} from './actions/actions'
import ContactCard from "../src/components/contactCard";
import AddContact from "../src/components/addContact";

class App extends Component {
  state={
    name:"",
    phone:"",
    email:"",
    id:"",
    edit:false
  
  }

  getPerson=(contact)=>{
    this.setState({
      name:contact.name,
      phone:contact.phone,
      email:contact.email,
      id:contact._id,
      edit:true,
    })
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })

  }
  reset=()=>{
    this.setState({
      name:"",
      phone:"",
      email:""
    })
  }
  addContact=()=>{
    this.props.postContact(this.state);
    this.reset()
  }

  componentDidMount=()=>{
    this.props.getContacts()
  }
  


   render() {
     return (
       <BrowserRouter>
          <div>
                    <h1>My Contact</h1>
                    <Link to="/contact-list">
                        <button className="button">Contact List</button>
                    </Link>
                    <Link to="/ajouter-contact">
                        <button className="button">Add Contact</button>
                    </Link>
                </div>

       
                  <Route path="/contact-list"
                  render={
                    ()=>(<div className="contact-list">
                    {this.props.contacts.map(el=> (<ContactCard
                               deleteContact={this.props.deleteContact}
                               getPerson={this.getPerson}
                              contact={el}
                     />)
                  )
                  }</div>)
                  }/>

<Route path="/(ajouter-contact|edit-contact)/"
                    render={ () => (<AddContact
                    handleChange={this.handleChange}
                    // action={this.addContact}
                    action={this.state.edit ? this.props.putContact(this.state.id,this.state): this.addContact}
                    contact={this.state}
                    edit={this.state.edit}

                       />
                            ) }/>  
                </BrowserRouter>
       
     )
   }
 }


const MapStateToProps=state=>({
  ...state
})

 export default connect (MapStateToProps,{getContacts,deleteContact,postContact,putContact})(App)
 