import React, { useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update.jsx";

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  
  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };
  
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  
  const submit = () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title Or Body Can't Be Empty");
    } else {
      setArray([...Array, Inputs]);
      setInputs({ title: "", body: "" });
      toast.success("Your task is added");
    }
  };
  
  const del = (id) => {
    Array.splice(id, 1); // Corrected "1" to avoid string parsing issues
    setArray([...Array]);
  };
  
  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-item-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-50">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="my-2 p-2 todo-inputs"
              onClick={show}
              onChange={change}
              value={Inputs.title}
            />
            <textarea
              id="textarea"
              type="text"
              name="body"
              placeholder="Body"
              className="p-2 todo-inputs"
              onChange={change}
              value={Inputs.body}
            />
          </div>
          <button className="btn btn-danger" onClick={submit}>
            Add
          </button>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array.map((item, index) => (
                <div className="col-lg-3" key={index}>
                  <TodoCards
                    title={item.title}
                    body={item.body}
                    id={index}
                    delId={del}
                    display={dis} // Pass the dis function here
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="todo-update" className="todo-update container" style={{ display: "none" }}>
        <Update display={dis} />
      </div>
    </>
  );
};

export default Todo;
