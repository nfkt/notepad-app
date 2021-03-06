import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'lightSlateGrey',
    border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    width: '100%',
    // display:{xs:'flex', md:'none'}
};

const styleXS = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'lightSlateGrey',
    border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
    width: '50%',
    display:{xs:'none', md:'flex'}
};
export const NoteTitleModal = ({ modalChild: ModalChild, isOpen, isClose, handleTitleChange, handleSubmit }) => {
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={isClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <Box sx={style}>
                        <ModalChild handleTitleChange={handleTitleChange} handleSubmit={handleSubmit}/>
                    </Box>
                </Fade>
                
            </Modal>
        </>
    )



}