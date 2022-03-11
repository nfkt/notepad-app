import React, { useEffect, useState } from "react";
import NoteContext from "./noteContext";
import {
  createNoteData,
  getAllNotes,
  getNoteData,
} from "services/notesServices";

export const NoteContextProvider = ({ children }) => {
  const [note, setNote] = useState(null);
  const [noteData, setNoteData] = useState([]);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    getAllNotes().then((res) => {
      console.log(res[0].description);
      setNoteData(res);
      setNote(!note ? res[0].description : note);
      setId(!id ? res[0]._id : id);
      console.log(id);
    });
  }, [note, title, id]);

  useEffect(() => {}, [id]);

  const getNoteFn = (index) => {
    setNote(noteData[index].description);
    setId(noteData[index]._id);
  };
  const createNoteFn = (data) => {
    createNoteData(data).then((res)=>{setId(res._id);});
  };
  const titleSet = (title) => setTitle(title); 


  return (
    <NoteContext.Provider
      value={{
        getNoteFn,
        createNoteFn,
        note,
        id,
        noteData,
        title,
        titleSet,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
