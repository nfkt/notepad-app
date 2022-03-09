import { NotePageView } from "./notePageView";
import { createNoteData, getAllNotes } from "services/notesServices";
import { useContext, useEffect, useState } from "react";
import { updateNoteData } from 'services/notesServices';
import NoteContext from "contexts/noteContext/noteContext";


export const NotePageContainer = () => {
    const [note, setNote] = useState('Content');
    const [noteData, setNoteData] = useState([]);
    const [id, setId] = useState('Id');
    const noteContext = useContext(NoteContext);

  
    const [inputs, setInputs] = useState('hello');
    const [isChanged, setChanged] = useState(false);

    const handleChange = (e) => {

        const value = e.target.value;
        setInputs(value ? value: note);
        setChanged(false);
        
      };

      useEffect(()=>{
        // setInputs((values) => ({ ...values, [name]: value }));
        setInputs(noteContext.note);
      }, [noteContext.note]);

      useEffect(() => {
        const timeOutId = setTimeout(() => {setInputs(inputs); updateNoteData(noteContext.id, {description: inputs}).then((res)=> setChanged(true));}, 2000);
        return () => clearTimeout(timeOutId);
      }, [inputs]);


    return (
        <NotePageView notes={noteContext.note} id={noteContext.id} inputs={inputs} handleChange={handleChange} isChanged={isChanged} noteContent={noteContext.noteData ? noteContext.noteData: ['trouble loading notes']} getNoteTitles={noteContext.getNoteFn}/>
    )
}