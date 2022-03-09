import { Box } from '@mui/system';
import 'styles/notepad.css';

export const NotePad = ({id, note, inputs, handleChange, snackBarComponent:SnackBarComponent, isChanged}) => {

    return (
        <>
            <Box sx={{p: 5, display:{xs:'none', md:'flex'}, justifyContent:'center', flexDirection:'column', gap:'1rem'}}>
                <h4>Notes Responsive</h4>

                <textarea rows="20" className="notes"  value={inputs} onChange={handleChange} name="note"/>
                {
                    isChanged && <SnackBarComponent isOpen={true} text={"Saved successfully"}/>
                }
            </Box>
            <Box sx={{display:{xs:'block', md:'none'}}}>
                <h4>Notes Responsive</h4>

                <textarea rows="20" className="notes" value={inputs} onChange={handleChange}>

                </textarea>
            </Box>
        </>
    )
}