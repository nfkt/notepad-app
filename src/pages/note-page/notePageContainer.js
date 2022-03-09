import { NotePageView } from "./notePageView";
import { createNoteData, getAllNotes } from "services/notesServices";
import { useEffect, useState } from "react";
import { updateNoteData } from 'services/notesServices';



export const NotePageContainer = () => {
    const [note, setNote] = useState('Content');
    const [noteData, setNoteData] = useState([]);
    const [id, setId] = useState('Id');

    useEffect(()=>{
        getAllNotes().then((res)=>{
            console.log(res);
           
            setNoteData(res)
            setNote(res[0].description)
            setId(res[0]._id)
        });
    }, []);
    const [inputs, setInputs] = useState('hello');
    const [isChanged, setChanged] = useState(false);

    const handleChange = (e) => {

        const value = e.target.value;
        setInputs(value ? value: note);
        setChanged(false);
        
      };

      useEffect(()=>{
        // setInputs((values) => ({ ...values, [name]: value }));
        setInputs(note);
      }, [note]);

      useEffect(() => {
        const timeOutId = setTimeout(() => {setInputs(inputs); updateNoteData(id, {description: inputs}).then((res)=> setChanged(true));}, 2000);
        return () => clearTimeout(timeOutId);
      }, [inputs]);


    return (
        <NotePageView notes={note} id={id} inputs={inputs} handleChange={handleChange} isChanged={isChanged} noteContent={noteData ? noteData: ['trouble loading notes']}/>
    )
}