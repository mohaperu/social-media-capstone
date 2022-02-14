import { useState } from 'react';
import { Typography, Modal, Backdrop, Fade, Box } from '@mui/material';


export function Moodal(props) {

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);

  }

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };



  var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
        }
    };
})();

something(); // "do something" happens
something(); // nothing happens





  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:160,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <p id="modaltitle">Welcome to Social Media Management</p>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <input type="text" id="modalname" onChange={handleChange} placeholder="Enter your name" /><br />
              <button id="modalsubmit" value={props.text} onClick={handleClose}>Submit</button><br />
            </Typography>
            <p style={{textAlign:"center"}}>Or</p>
            <button className="loginnn" onClick={() => window.open("/login")}>Login</button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
