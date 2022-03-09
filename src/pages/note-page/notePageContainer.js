import { NotePageView } from "./notePageView";
import { createNoteData, getAllNotes } from "services/notesServices";
import { useContext, useEffect, useState } from "react";
import { updateNoteData } from "services/notesServices";
import NoteContext from "contexts/noteContext/noteContext";

export const NotePageContainer = () => {
  const noteContext = useContext(NoteContext);

  const [inputs, setInputs] = useState("hello");
  const [isChanged, setChanged] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputs(value ? value : noteContext.note);
    setChanged(false);
  };

  useEffect(() => {
    setInputs(noteContext.note);
  }, [noteContext.note]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setInputs(inputs);
      updateNoteData(noteContext.id, { description: inputs }).then((res) =>
        setChanged(true)
      );
    }, 2000);
    return () => clearTimeout(timeOutId);
  }, [inputs]);

  const handleTitleChange = (e)=>{

    const value = e.target.value;
    noteContext.titleSet(value);

  }

  const handleSubmit = ()=>{

    noteContext.createNoteFn({title: noteContext.title, decription:'Hello Put your content here'});
    window.location.reload(false);
  }

  return (
    <NotePageView
      notes={noteContext.note}
      id={noteContext.id}
      inputs={inputs}
      handleChange={handleChange}
      isChanged={isChanged}
      noteContent={
        noteContext.noteData ? noteContext.noteData : ["trouble loading notes"]
      }
      getNoteTitles={noteContext.getNoteFn}
      handleTitleChange={handleTitleChange}
      handleSubmit={handleSubmit}
    />
  );
};
