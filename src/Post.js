import { useState } from 'react';
import { Modal, Box } from '@mui/material';
import { FbShare } from './facebookLogin.js';


export function Post() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [site, setSite] = useState('');
  const handleChange = (event) => {
    setSite(event.target.value);
  };

  return (

    <div className="grid">
      <div>
        <h1>Share your post</h1>
        <textarea rows="6" cols="45" onChange={handleChange} placeholder="Enter the site(eg:www.guvi.in)" required>
        </textarea><br />

        <div>
          <button onClick={handleOpen}>Share</button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box className="shareModalStyle">
              <p style={{ fontWeight: "bold" }}>Share to</p>
              <hr />
              <FbShare href={site} />
            </Box>
          </Modal>
        </div>

      </div>
    </div>
  );

}
