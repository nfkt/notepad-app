import React, {useEffect, useState} from "react";
import NoteContext from "./noteContext";
import { createNoteData, getAllNotes } from "services/notesServices";

export const NoteContextProvider = ({children})=>{

    const [note, setNote] = useState(null);
    const [noteData, setNoteData] = useState([]);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(()=>{
        getAllNotes().then((res)=>{
            console.log(res[0].description);
            setNoteData(res)
            setNote(!note? res[0].description: note)
            setId(!id ? res[0]._id: id);
        });
    }, [note, title]);

 

    const getNoteFn = (index)=> {setNote(noteData[index].description); setId(noteData[index]._id)};
    const createNoteFn = (data)=> {createNoteData(data).then((res)=>{setNote(res.description); setId(res._id); console.log(res.description)})};
    const titleSet = (title)=> setTitle(title)

        return(
            <NoteContext.Provider value={{
                getNoteFn,
                createNoteFn,
                note,
                id,
                noteData,
                title,
                titleSet
            }}>
                {children}
            </NoteContext.Provider>
        );

}