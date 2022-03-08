import { SYSTEM_ERROR } from "config/CONSTANTS";
import axios from 'axios'
import { GET_ALL_NOTES, GET_NOTES_DATA } from "./CONSTANTS"


/**
 * Function to fetch all the users.
 */
export const getAllNotes = () => {
    let config = {
        method: 'get',
        url: GET_ALL_NOTES(),
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

export const getNoteData = (id) => {
    let config = {
        method: 'get',
        url: GET_NOTES_DATA(id),
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

