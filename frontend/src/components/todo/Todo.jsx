import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update.jsx";
import axios from "axios";
let id = sessionStorage.getItem("id");
let toUpdateArray = [];
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

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title Or Body Can't Be Empty");
    } else {
      if (id) {
        await axios
          .post(`${window.location.origin}/api/v2/addTask`, {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Added");
        toast.error("Your Task Is Not Saved ! Please SignUp");
      }
    }
  };
  const del = async (Cardid) => {
    if (id) {
      await axios
        .delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("Your Task Is Deleted");
        });
    } else {
      toast.error("Please SignUp First");
    }
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
  const update = (value) => {
    toUpdateArray = Array[value];
  };
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`http://localhost:1000/api/v2/getTasks/${id}`)
        .then((response) => {
          setArray(response.data.list);
        });
    };
    fetch();
  }, [submit]);

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
                    id={item._id}
                    delId={del}
                    display={dis} // Pass the dis function here
                    updateId={index}
                    toBeUpdate={update}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="todo-update"
        className="todo-update container"
        style={{ display: "none" }}
      >
        <Update display={dis} update={toUpdateArray} />
      </div>
    </>
  );
};

export default Todo;
