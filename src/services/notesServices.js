import { SYSTEM_ERROR } from "config/Constants";
import axios from 'axios'
import { GET_ALL_NOTES, GET_NOTE_DATA, POST_NOTE_DATA, PUT_NOTE_DATA } from "./Constants"


/**
 * Function to fetch all the users.
 */
export const getAllNotes = () => {
    let config = {
        method: 'get',
        url: GET_ALL_NOTES(),
        headers: { 
          'Content-Type': 'application/json'
        },
      };
    console.log("notesServices > getAllNotes called...");
    return new Promise((resolve, reject) => {
        try {
            // do an SDK, DB call or API endpoint axios call here and return the promise.
            axios(config)
                .then((res) => {
                    console.log("getAllNotes > axios res=", res);
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log("getAllNotes > axios err=", err);
                    reject("Error in getAllNotes axios!");
                });
        } catch (error) {
            console.error("in notesServices > getAllNotes, Err===", error);
            reject(SYSTEM_ERROR);
        }
    });
};

export const getNoteData = (id) => {
    let config = {
        method: 'get',
        url: GET_NOTE_DATA(id),
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      };
    console.log("notesServices > getAllNotes called...");
    return new Promise((resolve, reject) => {
        try {
            // do an SDK, DB call or API endpoint axios call here and return the promise.
            axios(config)
                .then((res) => {
                    console.log("getAllNotes > axios res=", res);
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log("getAllNotes > axios err=", err);
                    reject("Error in getAllNotes axios!");
                });
        } catch (error) {
            console.error("in notesServices > getAllNotes, Err===", error);
            reject(SYSTEM_ERROR);
        }
    });
};

export const createNoteData = (data)=>{
   
      let config = {
        method: 'post',
        url: POST_NOTE_DATA(),
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
      };
      console.log("notesServices > createNoteData called...");
      return new Promise((resolve, reject) => {
        try {
            // do an SDK, DB call or API endpoint axios call here and return the promise.
            axios(config)
                .then((res) => {
                    console.log("createNoteData > axios res=", res);
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log("createNoteData > axios err=", err);
                    reject("Error in getAllNotes axios!");
                });
        } catch (error) {
            console.error("in notesServices > getAllNotes, Err===", error);
            reject(SYSTEM_ERROR);
        }
    });
}

export const updateNoteData = (id, data)=>{
    let config = {
        method: 'put',
        url: PUT_NOTE_DATA(id),
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
      };
      console.log("notesServices > updateNoteData called...");
      return new Promise((resolve, reject) => {
        try {
            // do an SDK, DB call or API endpoint axios call here and return the promise.
            axios(config)
                .then((res) => {
                    console.log("updateNoteData > axios res=", res);
                    resolve(res.data);
                })
                .catch((err) => {
                    console.log("updateNoteData > axios err=", err);
                    reject("Error in getAllNotes axios!");
                });
        } catch (error) {
            console.error("in notesServices > updateNoteData, Err===", error);
            reject(SYSTEM_ERROR);
        }
    })
}
