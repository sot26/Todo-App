import React from "react";
import { FaTrashAlt } from "react-icons/fa";



function ToDoItem(props) {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div >
    <li className="area bgc">
      <div className="main-text">
        <div className="todo">{props.text}</div>
        <p className="dt">{date}</p>
      </div>
      <div>
        <p className="trash"  onClick={() => {
          props.onChecked(props.id);
        }}> <FaTrashAlt className="trash1"/>  </p>
      </div>
    </li>

    </div>
  );
}

export default ToDoItem;
