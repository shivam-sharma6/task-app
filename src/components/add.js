import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Add = () => {
  let contacts =
        localStorage.getItem("contacts") !== null
          ? JSON.parse(localStorage.getItem("contacts"))
          : [];
          console.log("contacts", contacts)
          const { key } = useParams();
  const [name, setName] = useState(key ? contacts[key]?.name :"");
  const [email, setEmail] = useState(key ? contacts[key]?.email :"");
  const [status, setStatus] = useState(key ? contacts[key]?.status :"InActive");
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate()

  const handleUp = () => {
    let prevContacts = [...contacts];
      
      if (name.length <= 0 || email.length <= 0) {
        toast.error("Name and Email wont be blank");
      } if(key){
        prevContacts [key]= {
          name : name,
         email : email,
         status : status

        };

      }
      else {
        prevContacts.push({
          name: name,
          email: email,
          status: status
        });
      }
      localStorage.setItem("contacts", JSON.stringify(prevContacts));
      toast.success("Contact has been added");
      navigate("/");
    
  };
  return (
    <div className="container p-5">
      <form>
        <div className="mb-3">
          <label htmlFor="addname" className="form-label" >
            Name
          </label>
          <input
          value={name}
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="addname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-check">
          <input
          value={status}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() => {
              setStatus("Active");
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked
            onSelect={() => {
              setStatus("InActive");
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Inactive
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            handleUp();
          }}
        >
         {key ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Add;
