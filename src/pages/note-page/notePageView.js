import { NavBar } from "components/navbar";
import { NoteDrawer } from "components/notesDrawer";
import { NotePad } from "components/notePad";
import { FloatingActionButton } from "components/floatingActionButton";
import BottomNavigationBar from "components/bottomNavigationBar";
import SnackBar from "components/snackBar";
import React from "react";
import { NoteTitleModal } from "components/noteTitleModal";
import NoteTitleField from "components/noteTitleField";
import { useSnackBarActions } from "./useSnackBarActions";
import { useFloatingActionButton } from "./useFloatingButtonActions";

export const NotePageView = ({
  id,
  notes,
  inputs,
  handleChange,
  isChanged,
  noteContent,
  getNoteTitles,
  handleTitleChange,
  handleSubmit,
}) => {
  const { open, handleClick, handleClose } = useSnackBarActions();
  const { openFloatingBtn, handleModalOpen, handleModalClose } =
    useFloatingActionButton();
  const handleModalClick = () => {
    handleClick();
    handleModalOpen();
    console.log(openFloatingBtn);
  };

  const handleModalWithBtnClose = ()=>{
      handleSubmit();
      handleModalClose()
  }

  return (
    <>
      <NavBar
        drawerComponent={NoteDrawer}
        drawerData={noteContent}
        getNoteTitles={getNoteTitles}
        sx={{ bgcolor: "primary.main" }}
      />

      <NotePad
        note={notes}
        id={id}
        inputs={inputs}
        handleChange={handleChange}
        snackBarComponent={SnackBar}
        isChanged={isChanged}
      />
      <FloatingActionButton handleClick={handleModalClick} />
      <NoteTitleModal
        isOpen={openFloatingBtn}
        modalChild={NoteTitleField}
        isClose={handleModalClose}
        handleTitleChange={handleTitleChange}
        handleSubmit={handleModalWithBtnClose}
      />
      <BottomNavigationBar handleClick={handleModalClick} />
      <SnackBar handleClose={handleClose} isOpen={open} />
    </>
  );
};
