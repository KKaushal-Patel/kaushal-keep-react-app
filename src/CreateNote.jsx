import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // click button function
  const addEvent = () => {
    // we are passing 'note' from useState which contains the current data to app.js addNote() function
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="createNote">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            placeholder="Title"
            autoComplete="off"
            onChange={InputEvent}
          />
          <textarea
            name="content"
            id=""
            cols="38"
            rows="5"
            value={note.content}
            placeholder="Write Here.."
            onChange={InputEvent}
          ></textarea>
        </form>
        <button className="add_btn" onClick={addEvent}>
          {/* <AddIcon /> */}
          Add
        </button>
      </div>
    </>
  );
};

export default CreateNote;
