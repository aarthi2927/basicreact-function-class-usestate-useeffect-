import React from "react";
import './Contactlist.css';
const ContactCard=(props)=>{
  //destrucring 
  const {id,name,email}=props.contact;
    return(
      <div className="item">
              <div className="content">
      <div className="ca_name">
      {name}
      </div>
      <div className="ca_email">
      {email}
      </div>
     
      </div> 
       </div>
    )
}
export default ContactCard;