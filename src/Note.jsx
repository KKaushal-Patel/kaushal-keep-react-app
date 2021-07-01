import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
  // const deleteNote = () => {
  //   props.deleteItem(props.id);
  // };

  return (
    <>
      <div className="main_note">
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button
            className="delete_icon"
            onClick={() => {
              props.deleteItem(props.id);
            }}
          >
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
