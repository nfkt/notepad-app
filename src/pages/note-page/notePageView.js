import { NavBar } from "components/navbar"
import { NoteDrawer } from "components/notesDrawer";
import { NotePad } from "components/notePad";
import { FloatingActionButton } from "components/floatingActionButton";
import BottomNavigationBar from "components/bottomNavigationBar";
import SnackBar from "components/snackBar";
import React from "react";
import { useSnackBarActions } from "./useSnackBarActions";
export const NotePageView = () => {
    const {open, handleClick, handleClose} = useSnackBarActions();

    return (
        <>
            <NavBar drawerComponent={NoteDrawer} sx={{ bgcolor: 'primary.main' }} />
            <NotePad />
            <FloatingActionButton handleClick={handleClick} />
            <BottomNavigationBar handleClick={handleClick} />
            <SnackBar handleClose={handleClose} isOpen={open} />
        </>
    )
}