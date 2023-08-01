import React from "react";
import './AddContact.css';
class AddContact extends React.Component{
    //use a state
  
    state={
    
        name:"",email:"",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email ===""){
            alert("all the fields are mandatory!");
            return;
        }
        //console.log(this.state);
        //display browser window after add
        this.props.addcontacthandle(this.state);
        this.setState({name:"",email:""});

    }
render()
{
    return(
        <div className="addcontactmain">
          <h2>Add Contact</h2>   
          <form className="addcontactform" onSubmit={this.add}>
<div className="ac_form_name">
    <label>Name</label>
    <br/>
    <input type="text" name="name" placeholder="name" value={this.state.value} 
    onChange={(e)=>this.setState({name:e.target.value})}
    />
   </div>
   <div className="ac_form_email">
    <label>Email</label> <br/>
    <input type="text" name="email" placeholder="Email"
    value={this.state.value} 
    onChange={(e)=>this.setState({email:e.target.value})}/>
   </div>
<button className="ac_form_button" > Add</button>
          </form>
        </div>
    )
}}
export default AddContact;