import React,{useEffect, useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';
import { v4 as uuid } from "uuid";
export const contacts=[
  {id:'01',
name:'mr.xxx',
email:'xxx@gmail.com'
},
{id:'02',
name:'mr.yyyy',
email:'yyyy@gmail.com'
},
{id:'03',
name:'mr.zzz',
email:'zzzz@gmail.com'
},
{id:'04',
name:'mr.aaaa',
email:'aaaa@gmail.com'
},
]
function App() {
  const LOCAL_STORAGE_KEY="contcats";
  //const[contacts,setcontacts]=useState([]);
  const[contacts,setcontacts]= useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addcontacthandle=(contact)=>{
    console.log(contact);
    //update a brower page
    setcontacts([...contacts,{id:uuid(),...contact}]);
  };
// delete element
const removecontacthandler=(id)=>{
  const newcontactlist=contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setcontacts(newcontactlist);
}


  //getitem refresh data not delete
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if (retriveContacts) setcontacts(retriveContacts);
 }, []);
  //setitem store a data using permanent
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
  return (
    <div>
      <Header/>
    <AddContact addcontacthandle={addcontacthandle}/>
      <ContactList contacts={contacts} getcontactid={removecontacthandler}/>
    </div>
  );
}

export default App;
