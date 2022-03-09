import React, {useEffect, useState} from "react";
import NoteContext from "./noteContext";
import { createNoteData, getAllNotes } from "services/notesServices";

export const NoteContextProvider = ({children})=>{

    const [note, setNote] = useState(null);
    const [noteData, setNoteData] = useState([]);
    const [id, setId] = useState(null);

    useEffect(()=>{
        getAllNotes().then((res)=>{
            console.log(res[0].description);
            setNoteData(res)
            setNote(!note? res[0].description: note)
            setId(!id ? res[0]._id: id);
        });
    }, [note]);

    const getNoteFn = (index)=> {setNote(noteData[index].description); setId(noteData[index]._id)};

        return(
            <NoteContext.Provider value={{
                getNoteFn,
                note,
                id,
                noteData
            }}>
                {children}
            </NoteContext.Provider>
        );

}