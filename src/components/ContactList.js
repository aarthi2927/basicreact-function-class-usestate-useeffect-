import React from "react";
import contacts from "./App";
import './Contactlist.css';
import ContactCard from "./Contact";
const ContactList=(props)=>{
   const deleteContactHandler=(id)=>{
    props.getcontactid(id);
   };
   const rendercontactList=props.contacts.map((contact)=>{
   return(
    <ContactCard contact={contact} key={contact.id} clickHander={deleteContactHandler}/>
   )
   })
       return(
       <div className="contactlist">
        <div className="contactlistheading">
           <h2>Contact List</h2></div>
          <div className="contactlistitem">
         {rendercontactList}
      </div>
        </div>
    )
}
export default ContactList;