import React from "react";
import { NoteTitleModal } from "components/noteTitleModal";
import NoteTitleField from "components/noteTitleField";


export const useSnackBarActions = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        return(
            <NoteTitleModal modalChild={NoteTitleField} isOpen={true} />
        )
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return {
        open, handleClick, handleClose
    }

}