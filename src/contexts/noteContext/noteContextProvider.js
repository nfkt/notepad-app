import React, {useEffect, useState} from "react";
import NoteContext from "./noteContext";
import { createNoteData, getAllNotes } from "services/notesServices";

const NoteContextProvider = ({children})=>{

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

    const getNoteFn = (index)=> setNote(noteData[index].description);

        return(
            <NoteContext.Provider value={{
                getNoteFn,
                note,
            }}>
                {children}
            </NoteContext.Provider>
        );

}