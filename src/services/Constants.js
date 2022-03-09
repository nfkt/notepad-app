import { PROXY } from "config/Constants";

export const GET_ALL_NOTES = ()=> `${PROXY}/api/v1/notes`;
export const GET_NOTE_DATA = (id)=> `${PROXY}/api/v1/notes${id}`;
export const POST_NOTE_DATA = ()=> `${PROXY}/api/v1/note`;
export const PUT_NOTE_DATA = (id)=> `${PROXY}/api/v1/note/${id}`
