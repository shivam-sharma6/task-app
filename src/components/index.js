import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Index = () => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
      setContact(
        localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : []
      )
    }, []);
const onDelete =(Index) =>{
  let updatedContacts = [...contact];
  updatedContacts.splice(Index, 1);
  setContact(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
}

  return (
    <div className='container p-5'>
      <h1>Contacts Info</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {contact.map((contact, key) => {
        return(
            <tr>
            <th scope="row">{key + 1}</th>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.status}</td>
            <td>
                <Link className="btn btn-primary m-1" to={`/edit/${key}`} role="button">{''}Edit</Link>
                <Link className="btn btn-primary m-1" href="#" onClick={()=>onDelete(key)} role="button">Delete</Link>

</td>
            </tr>
        )
    })}
  </tbody>
</table>
    </div>
  )
}

export default Index
