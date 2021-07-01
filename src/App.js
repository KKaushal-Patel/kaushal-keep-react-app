import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  // here add item is an array
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };

  // delete the notes
  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((currData, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {/* <Note /> */}
      {/* we are getting the data with the help of 'map' method */}

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      {/* <Footer /> */}
    </>
  );
};

export default App;
