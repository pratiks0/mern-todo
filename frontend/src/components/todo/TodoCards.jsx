import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ title, body, id, delId, display }) => {
  return (
    <div>
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">
          {body.length > 40 ? `${body.substring(0, 40)}...` : body}
        </p>
      </div>
      <div className="d-flex">
        <div onClick={() => display("block")}>
          <GrDocumentUpdate />
        </div>
        <div onClick={() => delId(id)}>
          <AiFillDelete className="card-icons del" />
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
